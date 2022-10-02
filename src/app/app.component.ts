import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mysnap!: FaceSnap

  ngOnInit(): void {
    this.mysnap = new FaceSnap(
      'Rojo',
      'Mon pdp',
      new Date(),
      0,
      'https://www.01net.com/app/uploads/2020/12/MEA-Photos-App-windows-10-1.jpg',
      false,
    )
    
  }
}
