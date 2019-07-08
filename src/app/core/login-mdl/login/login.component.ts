import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	registerForm: FormGroup;
	submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
	  this.registerForm = this.formBuilder.group({
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            passwd: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  // convenience getter for easy access to form fields
	get f() { return this.registerForm.controls; }
	
	onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }else{
			var uname=this.registerForm.controls['email'].value;
			var pass=this.registerForm.controls['passwd'].value;
			if(uname==='abc@abc.com' && pass==='admin123'){
				this.router.navigate(['/mainpage']);
			}
			
			
			//console.log(this.registerForm.value);
		}

        alert('SUCCESS!! :-)')
    }

}
