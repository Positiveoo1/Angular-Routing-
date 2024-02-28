import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }
  goToProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
