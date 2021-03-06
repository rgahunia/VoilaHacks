import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/advisor', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/advuser', title: 'Client Profile',  icon:'pe-7s-user', class: '' },
    { path: '/advtable', title: 'Client List',  icon:'pe-7s-note2', class: '' },
   // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'adv-sidebar',
  templateUrl: './advsidebar.component.html'
})
export class AdvSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
