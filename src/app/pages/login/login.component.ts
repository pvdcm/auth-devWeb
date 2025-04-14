import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {

  email = '';
  password = '';
  
  constructor(private auth: AuthService, private router: Router) {}
  
  login() {
    this.auth.login(this.email, this.password).then(() => {
      this.router.navigate(['/dashboard']);
    }).catch(err => alert(err.message));
  }

}
