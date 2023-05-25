import { Component, OnInit } from '@angular/core';
import axios,{ AxiosRequestConfig } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.cartDoc = document.getElementById('cart-body');
  }
  inp1: any = 0;
  inp2: any = 0;
  inp3: any = 0;
  cart: any[] = [];
  cartDoc: any;
  name: any = '';
  email: any = '';
  number: any = '';
  async addToCart(inp: any) {
    if (inp === 1 && this.inp1 !== 0) {
      this.cart.push({
        tittle: 'cafe fresco',
        img: '../assets/images/product-' + inp + '.png',
        quantity: this.inp1,
      });
    } else if (inp === 2 && this.inp2 !== 0) {
      this.cart.push({
        tittle: 'cafe fresco',
        img: '../assets/images/product-' + inp + '.png',
        quantity: this.inp2,
      });
    } else if (inp === 3 && this.inp3 !== 0) {
      this.cart.push({
        tittle: 'cafe fresco',
        img: '../assets/images/product-' + inp + '.png',
        quantity: this.inp3,
      });
    }
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
  async minValue(t: any) {
    switch (t) {
      case 1:
        this.inp1--;
        break;
      case 2:
        this.inp2--;
        break;
      case 3:
        this.inp3--;
        break;

      default:
        break;
    }
  }
  openCart() {
    if (this.cartDoc.classList.contains('active')) {
      this.cartDoc.classList.remove('active');
    } else {
      this.cartDoc.classList.add('active');
    }
  }
  setName(e: any) {
    this.name = e.target.value;
  }
  setEmail(e: any) {
    this.email = e.target.value;
  }
  setNumber(e: any) {
    this.number = e.target.value;
  }
  async submit() {
    let data = JSON.stringify({
      name: this.name,
      email: this.email,
      number: this.number
    });

    let config:AxiosRequestConfig ={
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://hqybpiml2j.execute-api.us-east-1.amazonaws.com/create_contact_request',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
