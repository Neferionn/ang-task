import {Component, Input, OnInit} from '@angular/core';
import {Zone} from '../../mainpage.component';

@Component({
  selector: 'app-primary-square',
  templateUrl: './primary-square.component.html',
  styleUrls: ['./primary-square.component.scss']
})
export class PrimarySquareComponent implements OnInit {
  @Input() color!: string;
  @Input() defaultSku!: string;
  @Input() sku!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
