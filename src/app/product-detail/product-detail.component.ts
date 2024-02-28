import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
  }
}