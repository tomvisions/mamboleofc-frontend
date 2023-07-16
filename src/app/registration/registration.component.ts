import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegistrationService} from "./registration.service";
import {ImageService} from "../image.service";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  selectedRegistrationForm: FormGroup;
  contactCoverImage;
  tournamentLogo;
  constructor(
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _imageService:ImageService,
    private _metaTagService: Meta
  ) {
    this.selectedRegistrationForm = this._formBuilder.group({});
  }


  ngOnInit(): void {

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Registration Form',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tom Cruickshank' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
    this.contactCoverImage = this._imageService.loadImage1920x940('contact-us-hero2.jpg');
    this.tournamentLogo = this._imageService.loadImage200x200('tournament-logo-2023.jpeg');
    // Create the selected product form
    this.selectedRegistrationForm = this._formBuilder.group({
      team_name: '',
      name: '',
      email: '',
    });
  }


  submitRegistration() {
    // Get the product object
    const registration = this.selectedRegistrationForm.getRawValue();
    registration['email_type'] = 'tournament_registration';
    // Update the product on the server
    this._registrationService.sendRegistration(registration).subscribe((register) => {
      if (register['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
