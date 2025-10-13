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
      nombre: 'Cilindro Deportivo',
      descripcion: 'Bolso cilíndrico ideal para gimnasio o viajes cortos.',
      imagenUrl: 'https://i.ibb.co/cn1mBdy/Barril.jpg',
      imagenAlt: 'Cilindro deportivo',
      especificaciones: [
        'Material: Lona impermeable reforzada.',
        'Dimensiones: 45cm x 25cm x 25cm.',
        'Características: Correa ajustable, bolsillo lateral con cierre, base antideslizante.',
        'Detalle: Ideal para ropa deportiva o accesorios de entrenamiento.'
      ]
    },
    {
      id: 2,
      nombre: 'Carterita Casual',
      descripcion: 'Cartera compacta con diseño elegante para uso diario.',
      imagenUrl: 'https://i.ibb.co/JfBkLHp/Cartera.jpg',
      imagenAlt: 'Carterita casual',
      especificaciones: [
        'Material: Cuero sintético premium.',
        'Dimensiones: 25cm x 18cm x 7cm.',
        'Características: Correa ajustable, cierre magnético, bolsillo interno.',
        'Detalle: Perfecta para salidas o eventos casuales.'
      ]
    },
    {
      id: 3,
      nombre: 'Cartuchera Transparente',
      descripcion: 'Cartuchera pequeña con frente transparente para personalizar.',
      imagenUrl: 'https://i.ibb.co/NnZrvVJY/Cartuchera.jpg',
      imagenAlt: 'Cartuchera transparente',
      especificaciones: [
        'Material: PVC y lona resistente.',
        'Dimensiones: 20cm x 10cm x 6cm.',
        'Características: Cierre superior, espacio para útiles escolares o cosméticos.',
        'Detalle: Ideal para colegio o universidad.'
      ]
    },
    {
      id: 4,
      nombre: 'Chimpunera Escolar',
      descripcion: 'Cartuchera doble con gran capacidad y diseño resistente.',
      imagenUrl: 'https://i.ibb.co/XZbVF7DJ/Chimpunera.jpg',
      imagenAlt: 'Chimpunera escolar',
      especificaciones: [
        'Material: Poliéster duradero.',
        'Dimensiones: 22cm x 10cm x 8cm.',
        'Características: Dos compartimentos con cierre, interior forrado.',
        'Detalle: Capacidad para hasta 60 lápices o marcadores.'
      ]
    },
    {
      id: 5,
      nombre: 'Mochila Mickey',
      descripcion: 'Mochila temática de Mickey Mouse, práctica y moderna.',
      imagenUrl: 'https://i.ibb.co/1GXNWdZd/Mochila-Mickey.jpg',
      imagenAlt: 'Mochila Mickey',
      especificaciones: [
        'Material: Lona gruesa estampada.',
        'Dimensiones: 40cm x 30cm x 15cm.',
        'Características: Correas ajustables, cierre reforzado, diseño juvenil.',
        'Detalle: Ideal para niños o fanáticos de Disney.'
      ]
    },
    {
      id: 6,
      nombre: 'Morral Urbano',
      descripcion: 'Morral moderno con gran capacidad y estilo minimalista.',
      imagenUrl: 'https://i.ibb.co/V0WNy0tw/Morrak.jpg',
      imagenAlt: 'Morral urbano',
      especificaciones: [
        'Material: Nylon impermeable premium.',
        'Dimensiones: 45cm x 30cm x 15cm.',
        'Características: Compartimento para laptop, puerto USB (cable no incluido).',
        'Detalle: Ideal para trabajo o universidad.'
      ]
    },
    {
      id: 7,
      nombre: 'Morral Circular',
      descripcion: 'Bolso redondo con diseño moderno y original.',
      imagenUrl: 'https://i.ibb.co/LDrZwPzv/Morral-Circular.jpg',
      imagenAlt: 'Morral circular',
      especificaciones: [
        'Material: Lona gruesa reforzada.',
        'Diámetro: 30cm.',
        'Características: Correa ajustable, cierre de cremallera resistente.',
        'Detalle: Perfecto para un look urbano y casual.'
      ]
    },
    {
      id: 8,
      nombre: 'Morral Hechado',
      descripcion: 'Morral estilo horizontal con correa ancha y diseño moderno.',
      imagenUrl: 'https://i.ibb.co/ycM4bzLz/Morral-hechado.jpg',
      imagenAlt: 'Morral hechado',
      especificaciones: [
        'Material: Poliéster y cuero sintético.',
        'Dimensiones: 35cm x 25cm x 10cm.',
        'Características: Correa de hombro acolchada, múltiples bolsillos.',
        'Detalle: Ideal para llevar laptop o cuadernos.'
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
