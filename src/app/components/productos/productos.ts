import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  imagenAlt: string;
  especificaciones: string[];
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  productoSeleccionado: Producto | null = null;

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Cilindro',
      descripcion: 'Bolso cilíndrico',
      imagenUrl: 'https://i.ibb.co/r2DvY1hr/Cilindro.png',
      imagenAlt: 'Cilindro deportivo',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color).',
        'Dimensiones: 21 cm alto x 26 cm ancho x 20 de circunferencia.',
        'Características: Cinta de mano para fácil transporte y cierre superior.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 2,
      nombre: 'Carterita Casual',
      descripcion: 'Carterita de mano con diseño elegante y moderno.',
      imagenUrl: 'https://i.ibb.co/WWKgfx53/Cartera.png',
      imagenAlt: 'Carterita casual',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Dimensiones: 16cm de alto  x 24 cm de ancho',
        'Características:Dos asas de mano, cierre superior, acabado reforzado.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 3,
      nombre: 'Cartuchera ',
      descripcion: 'Cartuchera resistente y práctica para útiles o lo que necesites.',
      imagenUrl: 'https://i.ibb.co/jvBrVWrz/Cartuchera.png',
      imagenAlt: 'Cartuchera transparente',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Dimensiones: 15 cm de alto x 23 cm de ancho',
        'Características: Cierre superior y asa de mano para fácil transporte.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 4,
      nombre: 'Chimpunera',
      descripcion: 'Chimpunera espaciosa resistente y con diseño moderno.',
      imagenUrl: 'https://i.ibb.co/xSvhPWg2/Chimpunera.png',
      imagenAlt: 'Chimpunera',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Dimensiones: 28cm de alto x 16 cm de ancho',
        'Características: Cierre superior, asa de mano reforzada.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 5,
      nombre: 'Mochila',
      descripcion: 'Mochilita juvenil con diseño divertido y funcional.',
      imagenUrl: 'https://i.ibb.co/5hsxbkRB/Mochila.png',
      imagenAlt: 'Mochila Mickey',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Dimensiones: 25 cm alto x 20.5 cm ancho',
        'Características: Cintas, cierre reforzado, diseño juvenil.',
      'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 6,
      nombre: 'Morral Urbano',
      descripcion: 'Morral moderno con gran capacidad y estilo.',
      imagenUrl: 'https://i.ibb.co/5xWX3RYf/Morral.png',
      imagenAlt: 'Morral urbano',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color).',
        'Dimensiones: 24.5 cm de alto x 20cm de ancho',
        'Características: Correa ajustable , cierre superior , siempre reforzado.',
       'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 7,
      nombre: 'Morral Circular',
      descripcion: 'Bolso redondo con diseño moderno y original.',
      imagenUrl: 'https://i.ibb.co/Q7MWQ7Pj/Morral-Circular.png',
      imagenAlt: 'Morral circular',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Diámetro: 54 cm.',
        'Características: Correa ajustable, cierre  resistente.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    },
    {
      id: 8,
      nombre: 'Morral Hechado',
      descripcion: 'Morral estilo horizontal con correa ancha y diseño moderno.',
      imagenUrl: 'https://i.ibb.co/3y5g0G9B/Morral-hechado.png',
      imagenAlt: 'Morral hechado',
      especificaciones: [
        'Tela:Tetron + Oxford (Dibujo a full color). ',
        'Dimensiones: 20 cm de alto x 25 cm de ancho',
        'Características: Correa ajustable con cierre superior reforzado.',
        'Detalle: Diseño de su preferencia (deportes, logos, nombres, etc.).'
      ]
    }
  ];

  abrirModalEspecificaciones(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  cerrarModal(): void {
    this.productoSeleccionado = null;
  }
}
