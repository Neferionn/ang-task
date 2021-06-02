import { Component, Input, OnInit } from '@angular/core';
import { NewThings, Zone } from '../mainpage.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  @Input() zone!: Zone;
  list: { [id: number]: [] };

  constructor() {
    this.list = {};
  }

  ngOnInit(): void {
    console.log(this.zone);
    // @ts-ignore
    for (let thing: NewThings of this.zone.things) {
      // console.log(this.list[thing.id] === undefined);
      if (this.list[thing.id] === undefined) {
        // this.list[thing.id].push(thing.id);
      }
    }
  }
}
