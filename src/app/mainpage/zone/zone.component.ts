import {Component, Input, OnInit} from '@angular/core';
import {NewThings, Zone} from '../mainpage.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  @Input() zone!: Zone;
  list: [NewThings[]];

  constructor() {
    // @ts-ignore
    this.list = [];
  }

  ngOnInit(): void {
    for (const thing of this.zone.things) {
      if (thing.joinedWith === null) {
        this.list.push([thing]);
      }
    }
    for (const thing of this.zone.things) {
      if (thing.joinedWith !== null) {
        const lis = this.list.find(l => l[0].id === thing.joinedWith);
        if (lis !== undefined) {
          lis.push(thing);
        }
      }
    }
    console.log(this.list);
  }
}
