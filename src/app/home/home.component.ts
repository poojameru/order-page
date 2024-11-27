import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  selectedTab: string = 'all';
  selectedProduct: any = null;
  quantity: number = 1;
  totalPrice: number = 0;

  allProducts = [
    { name: 'Pasta Spicy', price: 200, description: 'Spicy pasta with a rich tomato sauce.', image: 'pasta1.png' },
    { name: 'Vegtarians', price: 100, description: 'Fresh vegetarian salad.', image: 'v-1.png' },
    { name: 'Indonesian Spicy', price: 120, description: 'Indonesian spicy noodle.', image: 'in1.png' },
    { name: 'Fruit Painepale', price: 200, description: 'Pineapple fruit salad.', image: 'f1.png' },
    // Add more products here
  ];

  // Category Selection
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  // Open Offcanvas with selected product
 

  // Increment Quantity
  increaseQuantity(): void {
    this.quantity++;
    this.updateTotalPrice();
  }

  // Decrement Quantity
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  // Update Total Price based on Quantity
  updateTotalPrice(): void {
    if (this.selectedProduct) {
      this.totalPrice = this.selectedProduct.price * this.quantity;
    }
  }

}
