import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-secondary-square',
  templateUrl: './secondary-square.component.html',
  styleUrls: ['./secondary-square.component.scss']
})
export class SecondarySquareComponent implements OnInit {
  @Input() defaultSku!: string;
  @Input() sku!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
