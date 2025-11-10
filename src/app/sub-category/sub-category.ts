import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SIDEBAR, NavItem } from '../side-bar/side-bar';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  subcategories: string[];
  newSubcategory: string;
  expanded: boolean;
}

@Component({
  selector: 'app-sub-category',
  imports: [CommonModule, FormsModule, SIDEBAR],
  templateUrl: './sub-category.html',
  styleUrl: './sub-category.css',
})
export class SubCategory {
  @ViewChild(SIDEBAR) sidebar!: SIDEBAR;

  adminNavItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/></svg>'
    },
    {
      id: 'artisan-management',
      label: 'Artisan Management',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>'
    },
    {
      id: 'user-management',
      label: 'User Management',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>'
    },
    {
      id: 'categories',
      label: 'Categories',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>'
    },
    {
      id: 'disputes',
      label: 'Disputes',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'
    },
    {
      id: 'payments',
      label: 'Payments & Reports',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/></svg>'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/></svg>'
    }
  ];

  categories: Category[] = [
    {
      id: 1,
      name: 'Tailoring',
      icon: '✂️',
      description: 'Professional tailoring and clothing alteration services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 2,
      name: 'Plumbing',
      icon: '🔧',
      description: 'Water and pipe installation, repairs, and maintenance',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 3,
      name: 'Event Planning',
      icon: '🎊',
      description: 'Complete event planning and coordination services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 4,
      name: 'Catering Services',
      icon: '🍽️',
      description: 'Professional catering for events and occasions',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 5,
      name: 'Hairdressing',
      icon: '�',
      description: 'Hair styling, treatment, and beauty services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 6,
      name: 'Electronic Repairs',
      icon: '📱',
      description: 'Repair and maintenance of electronic devices',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 7,
      name: 'Painting',
      icon: '🎨',
      description: 'Interior and exterior painting services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 8,
      name: 'Makeup',
      icon: '💄',
      description: 'Professional makeup artistry for all occasions',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 9,
      name: 'Barbing',
      icon: '💈',
      description: 'Professional barbering and grooming services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 10,
      name: 'Carpentry',
      icon: '🪚',
      description: 'Woodwork, furniture making, and repairs',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 11,
      name: 'Welding',
      icon: '⚒️',
      description: 'Metal welding and fabrication services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 12,
      name: 'Bricklaying / Masonry',
      icon: '🧱',
      description: 'Construction and masonry work',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 13,
      name: 'Auto Mechanic',
      icon: '🔩',
      description: 'Vehicle repair and maintenance services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 14,
      name: 'Electrical Works',
      icon: '⚡',
      description: 'Electrical installation, repair, and wiring',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 15,
      name: 'Tiling',
      icon: '�️',
      description: 'Floor and wall tiling services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 16,
      name: 'POP Ceiling Design',
      icon: '🏛️',
      description: 'Plaster of Paris ceiling design and installation',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 17,
      name: 'Interior Decoration',
      icon: '🛋️',
      description: 'Interior design and decoration services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 18,
      name: 'Laundry & Dry Cleaning',
      icon: '🧺',
      description: 'Professional laundry and dry cleaning services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 19,
      name: 'Shoe Making',
      icon: '�',
      description: 'Custom shoe making and repair services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 20,
      name: 'Fashion Designing',
      icon: '👗',
      description: 'Fashion design and clothing creation',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 21,
      name: 'Photography',
      icon: '📷',
      description: 'Professional photography services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 22,
      name: 'Videography',
      icon: '🎥',
      description: 'Video production and cinematography',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 23,
      name: 'Driving School',
      icon: '�',
      description: 'Driving lessons and training services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 24,
      name: 'Generator Repairs',
      icon: '🔌',
      description: 'Generator maintenance and repair services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 25,
      name: 'AC and Refrigerator Repairs',
      icon: '❄️',
      description: 'Air conditioning and refrigerator repairs',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 26,
      name: 'Bead Making',
      icon: '📿',
      description: 'Handmade beads and jewelry creation',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 27,
      name: 'Furniture Making',
      icon: '🪑',
      description: 'Custom furniture design and manufacturing',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 28,
      name: 'House Cleaning Services',
      icon: '🧹',
      description: 'Residential cleaning and maintenance',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 29,
      name: 'Landscaping / Gardening',
      icon: '🌿',
      description: 'Garden design, landscaping, and maintenance',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 30,
      name: 'Printing & Branding',
      icon: '🖨️',
      description: 'Printing, branding, and graphic design',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 31,
      name: 'Solar Installation',
      icon: '☀️',
      description: 'Solar panel installation and maintenance',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 32,
      name: 'Barbing Salon',
      icon: '✂️',
      description: 'Barbershop and salon services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 33,
      name: 'Car Wash Services',
      icon: '🚿',
      description: 'Vehicle cleaning and detailing',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 34,
      name: 'Event Decoration',
      icon: '🎀',
      description: 'Event decoration and styling services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 35,
      name: 'Cobbler / Leather Works',
      icon: '🥾',
      description: 'Shoe repair and leather crafting',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 36,
      name: 'Metal Fabrication',
      icon: '🏭',
      description: 'Metal cutting, shaping, and fabrication',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 37,
      name: 'Baking & Pastry',
      icon: '🎂',
      description: 'Professional baking and pastry services',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 38,
      name: 'Painting & Wall Design',
      icon: '🖌️',
      description: 'Wall painting and decorative design',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    },
    {
      id: 39,
      name: 'CCTV / Security Installation',
      icon: '📹',
      description: 'Security camera and alarm system installation',
      subcategories: [],
      newSubcategory: '',
      expanded: false
    }
  ];

  searchQuery = '';
  filterActive = 'all';

  toggleMenu() {
    this.sidebar.toggleSidebar();
  }

  get filteredCategories() {
    let filtered = this.categories;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(cat =>
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.subcategories.some(sub => sub.toLowerCase().includes(query))
      );
    }

    if (this.filterActive === 'many') {
      filtered = filtered.filter(cat => cat.subcategories.length >= 5);
    } else if (this.filterActive === 'few') {
      filtered = filtered.filter(cat => cat.subcategories.length < 5);
    }

    return filtered;
  }

  addSubcategory(category: Category) {
    if (category.newSubcategory.trim()) {
      category.subcategories.push(category.newSubcategory.trim());
      category.newSubcategory = '';
      this.showSuccessMessage(`Added to ${category.name}`);
    }
  }

  removeSubcategory(category: Category, index: number) {
    const removed = category.subcategories[index];
    category.subcategories.splice(index, 1);
    this.showSuccessMessage(`Removed "${removed}" from ${category.name}`);
  }

  toggleExpand(category: Category) {
    category.expanded = !category.expanded;
  }

  showSuccessMessage(message: string) {
    // In a real app, you'd use a toast notification service
    console.log('Success:', message);
  }

  getTotalSubcategories(): number {
    return this.categories.reduce((total, cat) => total + cat.subcategories.length, 0);
  }

  exportData() {
    const data = this.categories.map(cat => ({
      name: cat.name,
      subcategories: cat.subcategories
    }));
    console.log('Export data:', JSON.stringify(data, null, 2));
    // In a real app, you'd download this as JSON or CSV
  }
}

