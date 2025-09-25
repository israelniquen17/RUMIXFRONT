// productos.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define una interfaz para tipar mejor los datos de los productos
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
  imports: [CommonModule], 
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  // Inicializamos la variable como null. Será null si el modal está cerrado.
  productoSeleccionado: Producto | null = null; 

  // Definición de todos tus productos
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Morral Clásico',
      descripcion: 'Un morral práctico y elegante para el día a día.',
      imagenUrl: 'https://i.ibb.co/k27ZjThK/morral.jpg',
      imagenAlt: 'morral',
      especificaciones: [
        'Material: Lona de alta resistencia.',
        'Dimensiones: 35cm x 28cm x 12cm.',
        'Características: Correa ajustable, dos bolsillos exteriores, compartimento interno acolchado.',
        'Detalle: Ideal para tablets o libros. Cierre de hebilla de seguridad.'
      ]
    },
    {
      id: 2,
      nombre: 'Mochila Urbana',
      descripcion: 'Mochila moderna con gran capacidad y diseño minimalista.',
      imagenUrl: 'https://i.ibb.co/gZFmwvDw/mochila.jpg',
      imagenAlt: 'mochila',
      especificaciones: [
        'Material: Nylon impermeable de primera calidad.',
        'Dimensiones: 45cm x 30cm x 15cm.',
        'Características: Puerto USB de carga (cable no incluido), soporte para botella lateral, espalda ergonómica.',
        'Detalle: Perfecta para la universidad o viajes cortos.'
      ]
    },
    {
      id: 3,
      nombre: 'Mochila con Bolsillo',
      descripcion: 'Mochila pequeña con bolsillo transparente para diseño personalizado.',
      imagenUrl: 'https://i.ibb.co/bjJ7s1yy/mochila-bolsillo.jpg',
      imagenAlt: 'mochila-bolsillo',
      especificaciones: [
        'Material: Lona resistente y PVC transparente.',
        'Dimensiones: 30cm x 25cm x 10cm.',
        'Características: Bolsillo frontal personalizable, correas ajustables y ligeras.',
        'Detalle: Ideal para llevar tus esenciales con un toque de diseño único.'
      ]
    },
    {
      id: 4,
      nombre: 'Cartuchera Doble',
      descripcion: 'Cartuchera de gran espacio con compartimentos dobles.',
      imagenUrl: 'https://i.ibb.co/rL73QvX/Cartuchera.jpg',
      imagenAlt: 'Cartuchera',
      especificaciones: [
        'Material: Poliéster durable.',
        'Dimensiones: 22cm x 10cm x 7cm.',
        'Características: Doble cremallera principal, resistente a salpicaduras, fácil de limpiar.',
        'Detalle: Almacena hasta 50 lápices y marcadores.'
      ]
    },
    {
      id: 1,
      nombre: 'Morral Clásico',
      descripcion: 'Un morral práctico y elegante para el día a día.',
      imagenUrl: 'https://i.ibb.co/k27ZjThK/morral.jpg',
      imagenAlt: 'morral',
      especificaciones: [
        'Material: Lona de alta resistencia.',
        'Dimensiones: 35cm x 28cm x 12cm.',
        'Características: Correa ajustable, dos bolsillos exteriores, compartimento interno acolchado.',
        'Detalle: Ideal para tablets o libros. Cierre de hebilla de seguridad.'
      ]
    },
    {
      id: 2,
      nombre: 'Mochila Urbana',
      descripcion: 'Mochila moderna con gran capacidad y diseño minimalista.',
      imagenUrl: 'https://i.ibb.co/gZFmwvDw/mochila.jpg',
      imagenAlt: 'mochila',
      especificaciones: [
        'Material: Nylon impermeable de primera calidad.',
        'Dimensiones: 45cm x 30cm x 15cm.',
        'Características: Puerto USB de carga (cable no incluido), soporte para botella lateral, espalda ergonómica.',
        'Detalle: Perfecta para la universidad o viajes cortos.'
      ]
    },
    {
      id: 3,
      nombre: 'Mochila con Bolsillo',
      descripcion: 'Mochila pequeña con bolsillo transparente para diseño personalizado.',
      imagenUrl: 'https://i.ibb.co/bjJ7s1yy/mochila-bolsillo.jpg',
      imagenAlt: 'mochila-bolsillo',
      especificaciones: [
        'Material: Lona resistente y PVC transparente.',
        'Dimensiones: 30cm x 25cm x 10cm.',
        'Características: Bolsillo frontal personalizable, correas ajustables y ligeras.',
        'Detalle: Ideal para llevar tus esenciales con un toque de diseño único.'
      ]
    },
    {
      id: 4,
      nombre: 'Cartuchera Doble',
      descripcion: 'Cartuchera de gran espacio con compartimentos dobles.',
      imagenUrl: 'https://i.ibb.co/rL73QvX/Cartuchera.jpg',
      imagenAlt: 'Cartuchera',
      especificaciones: [
        'Material: Poliéster durable.',
        'Dimensiones: 22cm x 10cm x 7cm.',
        'Características: Doble cremallera principal, resistente a salpicaduras, fácil de limpiar.',
        'Detalle: Almacena hasta 50 lápices y marcadores.'
      ]
    }
  ];

  // Función para abrir el modal, recibe el producto como argumento
  abrirModalEspecificaciones(producto: Producto): void {
    this.productoSeleccionado = producto;
  }

  // Función para cerrar el modal
  cerrarModal(): void {
    this.productoSeleccionado = null;
  }
}