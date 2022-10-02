import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mysnap!: FaceSnap;
  othersnap!: FaceSnap;
  lastsnap!: FaceSnap;

  ngOnInit(): void {
    this.mysnap = {
      title: 'Rojo',
      description: 'Mon pdp',
      createDate: new Date(),
      snaps: 0,
      imageUrl: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
      issnaped: false,
      location: "Madagascar",
    };
    this.othersnap = {
      title: 'Sariaka',
      description: 'Mon pdc',
      createDate: new Date(),
      snaps: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      issnaped: false,
      location: "Europe",
    };
    this.lastsnap = {
      title: 'Amboro',
      description: 'Mon pdp',
      createDate: new Date(),
      snaps: 0,
      imageUrl: 'https://st2.depositphotos.com/1772227/11813/i/600/depositphotos_118131960-stock-photo-mangrove-tree-on-the-sea.jpg',
      issnaped: false,
    };
  }
}