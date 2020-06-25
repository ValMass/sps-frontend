import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Response } from '@app/models/response';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  items;
  checkoutForm: FormGroup;

  constructor(
    //private cartService: CreateUserComponent,
    private formBuilder: FormBuilder,
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        surname: '',
        email: '',
        address: '',
        birthdate: '',
        birthplace: '',
        worklocation: '',

      });
    }

  ngOnInit(): void {
     // this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

  }

}
