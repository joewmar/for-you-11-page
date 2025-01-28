import { Component } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [ReactiveFormsModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  formData: FormGroup;
  constructor(
    private _tempDataService: TempDataService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) 
  { 
    this.formData = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    if(this.formData.valid) {
      if(this._tempDataService.checkPassword(this.formData.value.password)) {
        this._tempDataService.set(this.formData.value);
        this._router.navigate(['/message']);
      } else {
        alert('Password is incorrect');
      }
    }
  }
}
