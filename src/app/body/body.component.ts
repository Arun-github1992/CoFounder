import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) { }
  navTabs: any;

  ngOnInit() {
    this.navTabs = [
      {tabName: 'Home',
        id: 'home'},
      {tabName: 'Services',
        id: 'services'},
      {tabName: 'Gallery',
        id: 'gallery'},
      {tabName: 'Contact Us',
        id: 'contact'}];
  }


  onNavClick(tab) {
    if (tab.tabName === 'Home') {
      this.router.navigate(['']);
    } else if (tab.tabName === 'Services') {
      this.router.navigate(['services']);
    } else if (tab.tabName === 'Gallery') {
      this.router.navigate(['gallery']);
    } else if (tab.tabName === 'Contact Us') {
      this.router.navigate(['contact']);
    }
  }
}
