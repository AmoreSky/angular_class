import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class HOMEPAGE implements OnInit {
  private _http = inject(HttpClient);
  private router = inject(Router)

  services: any = []
  updated: any = []
  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    this._http.get('http://localhost/Hirein/Service').subscribe((response: any) => {
      this.services = response.services
    })
  }

  search(event: any) {
    const searchQuery = event.target.value.toLowerCase();
    const foundByTitle = this.services.filter((service: any) => service[2].toLowerCase().includes(searchQuery))

    const foundBySubCat = this.services.filter((service: any) => {
      const parsed = JSON.parse(service[4])
      return parsed.some((subcat: any) => subcat.toLowerCase().includes(searchQuery))
    })

    const foundByKeywords = this.services.filter((service: any) => {
      const parsed = JSON.parse(service[11])
      return parsed.some((keyword: any) => keyword.toLowerCase().includes(searchQuery))
    })

    const searchResult = [...new Set([...foundByKeywords, ...foundBySubCat, ...foundByTitle])]

    // Transform search results into { item, images } structure for template
    this.updated = searchResult.map((service: any) => {
      let images = [];
      try {
        images = typeof service[13] === 'string' ? JSON.parse(service[13]) : service[13];
        if (!Array.isArray(images)) {
          images = [];
        }
      } catch (e) {
        images = [];
      }

      return {
        item: service,
        images: images
      };
    });
  }
  viewService(service: any) {
    const service_id = service[0]
    const artisan_id = service[1]
    this.router.navigate(["/viewService", service_id, artisan_id])
  }

  // Generate initials from full name
  getInitials(fullName: string): string {
    if (!fullName) return '??';

    const names = fullName.trim().split(' ');

    if (names.length === 1) {
      // If only one name, take first two letters
      return names[0].substring(0, 2).toUpperCase();
    }

    // Take first letter of first name and first letter of last name
    const firstInitial = names[0].charAt(0).toUpperCase();
    const lastInitial = names[names.length - 1].charAt(0).toUpperCase();

    return firstInitial + lastInitial;
  }

  // Generate consistent color based on name
  getAvatarColor(fullName: string): string {
    if (!fullName) return '#6c757d';

    const colors = [
      '#198754', '#0d6efd', '#6610f2', '#d63384',
      '#fd7e14', '#20c997', '#0dcaf0', '#6f42c1'
    ];

    // Generate a consistent index based on the name
    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  }

}

