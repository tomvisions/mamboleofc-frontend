import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ContactService} from "./contact.service";
import {ImageService} from "../image.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  selectedContactUsForm: FormGroup;
  contactCoverImage;

  constructor(
    private _formBuilder: FormBuilder,
    private _contactUsService: ContactService,
    private _imageService:ImageService
  ) {
    this.selectedContactUsForm = this._formBuilder.group({});
  }


  ngOnInit(): void {
    this.contactCoverImage = this._imageService.loadImage1920x940('contact-us-hero2.jpg');

    // Create the selected product form
    this.selectedContactUsForm = this._formBuilder.group({
      name: '',
      email: '',
      phone: '',
      subject: '',
      body: '',
    });
  }

  submitContact() {
    // Get the product object
    const contactUs = this.selectedContactUsForm.getRawValue();
    contactUs['email_type'] = 'contact-us';
    // Update the product on the server
    this._contactUsService.sendContactUs(contactUs).subscribe((contact) => {
      if (contact['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
