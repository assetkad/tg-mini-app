import { Component, Inject, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="Навыки"
      subtitle="lorem"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Интенсивы"
      subtitle="ipsum "
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="курсы"
      subtitle="check"
      [products]="products.byGroup['course']"
    />
  `,
})
export class ShopComponent {
  constructor(
    public products: ProductsService,
    public telegram: TelegramService
  ) {
    this.telegram.MainButton.show();
    this.telegram.BackButton.hide();
  }
}
