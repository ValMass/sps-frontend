import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private route: ActivatedRoute, public fb: FormBuilder, private datePipe: DatePipe) { }


  ngOnInit(): void {

    this.route.data.subscribe(
      data => {
      console.log('Data umpa :', data);
      console.log('diobestia :', data.user );
      console.log('status :', data.user.status);

      const birth = new Date(data.user.data.birthdate);


      this.profileForm = this.fb.group({
        firstName: [data.user.data.name],
        lastName: [data.user.data.surname],
        address: [data.user.data.address],
        datadinascita: [ this.datePipe.transform(birth,'dd-MM-yyyy')],
        email: [data.user.data.birthplace],
        tipologiacontratto: [data.user.data.contracttype],
        distaccatoa: [data.user.data.distaccatoa],
        sededilavoro: [data.user.data.sededilavoro],
        rimborsostimato: [data.user.data.valorerimborsistimato],
        buonipasto: [data.user.data.buonipastobool],
      });
    } );
  }

  submit() {
      const name = this.fc.firstName.value;
      const surname = this.fc.lastName.value;

  }

  get fc() { return this.profileForm.controls; }
}
