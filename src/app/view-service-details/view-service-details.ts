import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subcategory } from '../subcategory/subcategory';

@Component({
  selector: 'app-view-service-details',
  imports: [],
  templateUrl: './view-service-details.html',
  styleUrl: './view-service-details.css',
})
export class ViewServiceDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  service_id: any;
  artisan_id: any;
  artisan_name: any;
  service: any;
  deatils: any[] = []; // Initialize as empty array

  ngOnInit(): void {
    this.removeModalBackdrop();

    this.service_id = this.route.snapshot.paramMap.get('id');
    this.artisan_id = this.route.snapshot.paramMap.get('artid');

    this._http.post('http://localhost/Hirein/viewService', { 'service_id': this.service_id }).subscribe((response: any) => {
      if (response.status == true) {
        this.service = response.service

        this.deatils = this.service.map((serve: any) => {
          let sub_categories = [];
          let keywords = []
          let images = [];
          try {
            sub_categories = typeof serve[4] === 'string' ? JSON.parse(serve[4]) : serve[4];
            keywords = typeof serve[11] === 'string' ? JSON.parse(serve[11]) : serve[11];
            images = typeof serve[13] === 'string' ? JSON.parse(serve[13]) : serve[13];
            if (!Array.isArray(sub_categories) || !Array.isArray(keywords) || !Array.isArray(images)) {
              sub_categories = [];
              keywords = [];
              images = [];
            }
          } catch (s) {
            sub_categories = [];
            keywords = [];
            images = [];
          }

          return {
            item: serve,
            sub_categories: sub_categories,
            keywords: keywords,
            images: images
          };
        });

        this.cdr.detectChanges();
      }
    })

    this._http.post('http://localhost/Hirein/getArtisanName', { 'artisan_id': this.artisan_id }).subscribe((response: any) => {
      if (response.status == true) {
        this.artisan_name = response.name
        this.cdr.detectChanges();
      }
    })
  }

  home() {
    this.router.navigate(['/'])
  }

  // Remove any lingering Bootstrap modal backdrops
  removeModalBackdrop(): void {
    // Remove backdrop elements
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());

    // Remove modal-open class from body
    document.body.classList.remove('modal-open');

    // Reset body styles
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}
