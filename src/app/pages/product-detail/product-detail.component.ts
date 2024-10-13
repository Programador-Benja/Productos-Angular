import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IDProducts } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  loading: boolean = true;
  public product? : IDProducts;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._apiService.getProduct(params['id']).subscribe((data: IDProducts) => {
        this.product = data;
        this.loading = false;
      });
    })
  }
}
