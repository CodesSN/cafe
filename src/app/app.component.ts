import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inp1: any = 0;
  inp2: any = 0;
  inp3: any = 0;
  cart: any[] = [{
    tittle: 'cafe',
    img: '../assets/images/product-1.png',
    quantity: 10
  },
  {
    tittle: 'cafe',
    img: '../assets/images/product-1.png',
    quantity: 10
  },
  {
    tittle: 'cafe',
    img: '../assets/images/product-1.png',
    quantity: 10
  }
];
  async addToCart(item:any,inp:any){
    this.cart.push({
      tittle: 'cafe fresco',
      img: '../assets/images/product-'+ inp +'.png',
      quantity: (inp === 1)? this.inp1 : (inp === 2)? this.inp2 : this.inp3,
    })
  }
  async addValue(t: any) {
    switch (t) {
      case 1:
        this.inp1++;
        break;
      case 2:
        this.inp2++;
        break;
      case 3:
        this.inp3++;
        break;

      default:
        break;
    }
  }
}
