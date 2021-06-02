import { Component, OnInit } from '@angular/core';
import * as thingsData from '../../assets/newthings.json';
import { HttpClient } from '@angular/common/http';

export interface NewThings {
  id: number;
  areaId: number;
  joinedWith: number;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}

export class Zone {
  constructor(id: number, title: string, things: NewThings[]) {
    this.id = id;
    this.title = title;
    this.things = things;
  }

  id: number;
  title: string;
  things: NewThings[];
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  things: NewThings[] = [];
  zone1: Zone | undefined;
  zone2: Zone | undefined;
  zone3: Zone | undefined;
  zone4: Zone | undefined;

  constructor(private http: HttpClient) {}
  ngOnInit(): any {
    this.http.get('../../assets/newthings.json').subscribe((res) => {
      this.things = res as NewThings[];
      this.zone1 = new Zone(
        1791,
        'Zona 1',
        this.things.filter((t) => t.areaId === 1791)
      );
      this.zone2 = new Zone(
        1892,
        'Zona 2',
        this.things.filter((t) => t.areaId === 1892)
      );
      this.zone3 = new Zone(
        1900,
        'Zona 4',
        this.things.filter((t) => t.areaId === 1900)
      );
      this.zone4 = new Zone(
        1901,
        'Zona 5',
        this.things.filter((t) => t.areaId === 1901)
      );
    });
  }
}
