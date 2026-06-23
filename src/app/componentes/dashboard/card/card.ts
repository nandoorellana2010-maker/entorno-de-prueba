import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Procto} from

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  producto: Procto null = null;
}
