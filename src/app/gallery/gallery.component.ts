import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  galleryList: any;
  ngOnInit() {
    this.galleryList = [
      {imageUrl: './../../assets/images/gallery/1.jpg',
        id: '1'},
      {imageUrl: './../../assets/images/gallery/2.jpg',
      id: '2'},
      {imageUrl: './../../assets/images/gallery/3.jpg',
      id: '3'},
      {imageUrl: './../../assets/images/gallery/4.jpg',
      id: '4'},
      {imageUrl: './../../assets/images/gallery/5.jpg',
      id: '5'},
      {imageUrl: './../../assets/images/gallery/6.jpg',
        id: '6'},
        {imageUrl: './../../assets/images/gallery/7.jpg',
        id: '7'},
        {imageUrl: './../../assets/images/gallery/8.jpg',
        id: '8'},
        {imageUrl: './../../assets/images/gallery/9.jpg',
        id: '9'},
        {imageUrl: './../../assets/images/gallery/10.jpg',
        id: '10'},
        {imageUrl: './../../assets/images/gallery/11.jpg',
        id: '11'},
        {imageUrl: './../../assets/images/gallery/12.jpg',
        id: '12'}];
  }

}
