import { Injectable } from '@angular/core';

const domain = 'https://result.school';

enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

const products: IProduct[] = [
  {
    id: '29',
    title: 'TEST 1',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Test 1',
    time: 'test 1',
    type: ProductType.Skill,
  },
  {
    id: '30',
    title: 'TEST 2',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Test 2',
    time: 'test 2',
    type: ProductType.Skill,
  },
  {
    id: '31',
    title: 'TEST 3',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Test 3',
    time: 'test 3',
    type: ProductType.Intensive,
  },
  {
    id: '32',
    title: 'TEST 4',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Test 4',
    time: 'test 4',
    type: ProductType.Course,
  },
];

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }

  constructor() {}
}
