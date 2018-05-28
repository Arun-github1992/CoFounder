import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ismenuOpen: boolean ;
  sideNavTabs: any;
  clickedSideBarTab: any;
  isScrolling: boolean;
   @ViewChild('bodyRef') bodyRef;
  constructor() { }
  ngOnInit() {
    // this.homeComponent=this.homeRef;
    this.sideNavTabs = [
      {tabName: 'Home',
        id: 'home'},
      {tabName: 'Services',
        id: 'services'},
      {tabName: 'Gallery',
        id: 'gallery'},
      {tabName: 'Contact Us',
        id: 'contact'}];
  }
    toggleNav() {
      this.ismenuOpen = ! this.ismenuOpen;
  }

    menuItemClick(tab) {
      // this.clickedSideBarTab = tab;
      this.ismenuOpen = ! this.ismenuOpen;
      this.bodyRef.onNavClick(tab);
      window.scroll(0, 100);
    }

    scroll() {
      this.isScrolling = true;
    }
}
