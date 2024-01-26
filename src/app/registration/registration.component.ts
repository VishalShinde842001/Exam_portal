import { Component, OnInit } from '@angular/core';
import { User } from '../login.service';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 
  user:User=new User('','',0,'');

  constructor(private registrationservice:RegistrationService,private router:Router) { }

  saveToDb()
  {
    this.registrationservice.saveToDb(this.user).subscribe(
      answer =>
      {

      if(answer)
      {
         
         sessionStorage.setItem("message","registration succeesful");
        
        this.router.navigate(['login']);
        
      }

    },
    error=>
    {
      
      sessionStorage.setItem("message","registration Unsucceesful");
        
    });
  }
}
