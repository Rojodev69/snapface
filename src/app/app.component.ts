import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  facesnaptab!: FaceSnap[];

  ngOnInit(): void {
    this.facesnaptab = [
      {
        title: 'Rojo',
        description: 'Mon pdp',
        createDate: new Date(),
        snaps: 150,
        imageUrl: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        issnaped: false,
        location: "Madagascar",
      },
      {
        title: 'Rojo',
        description: 'Mon pdp',
        createDate: new Date(),
        snaps: 0,
        imageUrl: 'https://thumbs.dreamstime.com/b/arbre-de-lever-de-soleil-d-acacia-6484080.jpg',
        issnaped: false,
        location: "Madagascar",
      },
      {
        title: 'Amboro',
        description: 'Mon pdp',
        createDate: new Date(),
        snaps: 0,
        imageUrl: 'https://st2.depositphotos.com/1772227/11813/i/600/depositphotos_118131960-stock-photo-mangrove-tree-on-the-sea.jpg',
        issnaped: false,
      },
      
    ]
  }
}