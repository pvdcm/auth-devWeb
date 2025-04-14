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
      nome: 'Camiseta Básica',
      preco: 49.90,
      imagem: 'https://via.placeholder.com/200x200?text=Camiseta'
    },
    {
      id: 2,
      nome: 'Caneca Estilosa',
      preco: 29.90,
      imagem: 'https://via.placeholder.com/200x200?text=Caneca'
    },
    {
      id: 3,
      nome: 'Boné Casual',
      preco: 39.90,
      imagem: 'https://via.placeholder.com/200x200?text=Boné'
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
