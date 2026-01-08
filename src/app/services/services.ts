import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTISAN_SIDEBAR } from '../side-bar/artisan-side-bar';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  artisan_id: Number
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, ARTISAN_SIDEBAR, RouterLink, ReactiveFormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  @ViewChild(ARTISAN_SIDEBAR) sidebar!: ARTISAN_SIDEBAR;
  private _http = inject(HttpClient);
  private builder = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  artisan_id: any = 0;
  categories: any = [];
  subcategories: any = [];
  category_id: number = 0;
  selectedSubCategories: any = []
  message = ''
  uploadedImages: any = []
  previewURLs: any = []

  services: any = []
  searchResult: any = []
  imageURL: any = []
  updated: any = []
  ngOnInit(): void {
    this._http.get('http://localhost/Hirein/categories').subscribe((response: any) => {
      this.categories = response.categories;
      this.cdr.detectChanges();
      console.log(this.categories);
    })

    const token = localStorage['token']
    if (token) {
      const payload = jwtDecode<JwtPayload>(token);
      this.artisan_id = payload.artisan_id
    }
    this._http.post('http://localhost/Hirein/Services', { 'artisan_id': this.artisan_id }).subscribe((response: any) => {
      if (response.status == true) {
        this.services = response.services
        console.log(this.services);
      } else {
        console.log(response);
        this.services = []
      }
    })
  }

  search(event: any) {
    if (this.services.length > 0) {
      const searchQuery = event.target.value.toLowerCase();
      const foundByTitle = this.services.filter((service: any) => service[2].toLowerCase().includes(searchQuery))

      const foundBySubCat = this.services.filter((service: any) => {
        const parsed = JSON.parse(service[4])
        // return service.filter((item:any) => item.includes(searchQuery) )

        return parsed.some((subcat: any) => subcat.toLowerCase().includes(searchQuery))

      })

      const foundByKeywords = this.services.filter((service: any) => {
        const parsed = JSON.parse(service[11])
        return parsed.some((keyword: any) => keyword.toLowerCase().includes(searchQuery))
      })

      this.searchResult = [...new Set([...foundByKeywords, ...foundBySubCat, ...foundByTitle])]

      console.log(this.searchResult);

      // Transform search results into { item, images } structure for template
      this.updated = this.searchResult.map((service: any) => {
        let images = [];
        try {
          // Parse images from service[13] if it's a JSON string
          images = typeof service[13] === 'string' ? JSON.parse(service[13]) : service[13];
          // Ensure images is always an array
          if (!Array.isArray(images)) {
            images = [];
          }
        } catch (e) {
          console.error('Error parsing images:', e);
          images = [];
        }

        return {
          item: service,
          images: images
        };
      });

      console.log(this.updated);

    } else{
      
    }

  }



  serviceForm = this.builder.group({
    service_title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', Validators.required],
    category: ['', Validators.required],
    sub_category: [[] as any[], Validators.required],
    MOD: ['', Validators.required],
    base_price: ['', Validators.required],
    currency: ['', Validators.required],
    average_duration: ['', Validators.required],
    keywords: [[] as any[], Validators.required],
    image: ['', Validators.required]

  })

  async getid(event: any) {
    // console.log(this.category_id);
    // console.log(this.category_id);
    // return;

    this.category_id = event.target.value
    this._http.post('http://localhost/Hirein/subcategoriess', { 'category_id': this.category_id })
      .subscribe((response: any) => {
        // console.log(response);
        this.subcategories = response.subcategories
        this.cdr.detectChanges()
        console.log(this.subcategories);
        // if (response.status === 200) {
        //   //console.log(response);
        // } else {

        // }
      })
  }

  select(event: any) {
    const val = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      if (!this.selectedSubCategories.includes(val)) {
        this.selectedSubCategories.push(val);
      }
    } else {
      const idx = this.selectedSubCategories.indexOf(val);
      if (idx > -1) this.selectedSubCategories.splice(idx, 1);
    }

    console.log('selectedSubCategories', this.selectedSubCategories);
  }

  addKeywords(event: any) {
    this.serviceForm.value.keywords = event.target.value.split(',');

    // console.log(this.serviceForm.value.keywords);

  }

  uploadImages(event: any) {
    // console.log(event);
    const files = event.target.files;
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      if (file.type.indexOf('image') === 0) {
        //process the file
        // this.uploadedImages = file;
        const preview = URL.createObjectURL(file);
        this.previewURLs.push(preview)
        this.uploadedImages.push(file)

      } else {
        this.message = 'Uploaded file must be an image'
      }

    }

  }

  submitService() {
    // console.log(this.serviceForm.get('service_title'));
    // return;

    const formData = new FormData();
    const val = this.serviceForm.value
    // console.log(typeof(val.service_title));

    formData.append('artisan_id', this.artisan_id)
    formData.append('title', String(val.service_title))
    formData.append('description', String(val.description))
    formData.append('category', String(val.category))
    formData.append('sub-category', JSON.stringify(this.selectedSubCategories))
    formData.append('MOD', String(val.MOD))
    formData.append('base_price', String(val.base_price))
    formData.append('currency', String(val.currency))
    formData.append('average_duration', String(val.average_duration))
    formData.append('keywords', JSON.stringify(val.keywords))

    for (let i = 0; i < this.uploadedImages.length; i++) {
      formData.append('images[]', this.uploadedImages[i])

    }
    // formData.append('category', String(val.category))
    this._http.post('http://localhost/Hirein/Service', formData).subscribe((response: any) => {
      if (response.status) {
        console.log(response);

      } else {
        console.log(response);

      }
    })
  }




  toggleMenu() {
    if (this.sidebar) this.sidebar.toggleSidebar();
  }

}
