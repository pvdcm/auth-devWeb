import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // corrigido aqui (plural)
})
export class ProductsComponent {
  id: string | null = null;
  produto: any;

  produtos = [
    { id: 1, nome: 'Dog Punho', preco: 49.90, imagem: 'assets/images/image.jpg' },
    { id: 2, nome: 'Dog Joia', preco: 29.90, imagem: 'assets/images/image2.jpg' },
    { id: 3, nome: 'Dog Aponta', preco: 39.90, imagem: 'assets/images/image3.jpg' }
  ];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(this.id);
    this.produto = this.produtos.find(p => p.id === idNumber);
  }
}
