import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormServicesService } from './../shared/form-services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-mentor-reg',
  templateUrl: './mentor-reg.component.html',
  styleUrls: ['./mentor-reg.component.css']
})
export class MentorRegComponent implements OnInit {
  sections: any;
  mentorForm: any[];
  favoriteSeason: string;
  mentorFormDetails: any;
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  genderList: String[];
  signupForm: FormGroup;
  filedata: any;
  constructor(private router: Router, private formServicesService: FormServicesService) { }
  ngOnInit() {

    this.createFormModal();
    this.sections = [
      {
        name: 'Services',
        id: 'services',
        desc: 'We offer a full range of salon treatments and styling services provided bya team of professional stylists.',
        img: './../../assets/images/cards/contact.jpg'
      },
      {
        name: 'Gallery',
        id: 'gallery',
        desc: 'Checkout our works in unique photo gallery',
        img: './../../assets/images/cards/contact.jpg'
      },
      {
        name: 'Who we are',
        id: 'contact',
        desc: 'Contact us to know more about us ',
        img: './../../assets/images/cards/contact.jpg'
      }];
  }

  onCardClick(tab) {
    if (tab.id === 'services') {
      this.router.navigate(['services']);
    } else if (tab.id === 'gallery') {
      this.router.navigate(['gallery']);
    } else if (tab.id === 'contact') {
      this.router.navigate(['contact']);
    }
  }



  createFormModal() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl(),
      currentlevel: new FormControl(),
      gender: new FormControl(),
      cmnts: new FormControl(),
      mentorRegAgree: new FormControl(),
      resume: new FormControl()
    });
    this.getMentorFormFields();
  }

  getMentorFormFields(): void {
    this.formServicesService.getMentorRegFields()
      .subscribe(
        result => {
          this.mentorFormDetails = result;
          this.mentorForm = result.formFields;
          console.log(this.mentorForm);
        },
        error => console.log(error)
      );
  }

  fileUpload(e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }
}

