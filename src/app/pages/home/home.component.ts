import { Component } from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  constructor(private auth: AuthService, private router: Router) {}

  produtos = [
    {
      id: 1,
      nome: 'Dog Punho',
      preco: 49.90,
      imagem: 'assets/images/image.jpg'
    },
    {
      id: 2,
      nome: 'Dog joia',
      preco: 29.90,
      imagem: 'assets/images/image2.jpg'
    },
    {
      id: 3,
      nome: 'Dog aponta',
      preco: 39.90,
      imagem: 'assets/images/image3.jpg'
    }

  ];

  comprar(produto: any) {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/produto', produto.id]);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
