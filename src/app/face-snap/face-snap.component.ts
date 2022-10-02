import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string; 
  titleButton!: string;
  issnaped!: boolean;

  ngOnInit() {
    this.title = 'Rojo';
    this.description = 'Mon pdp';
    this.createDate = new Date();
    this.snaps = 0;  
    this.imageUrl = 'https://www.01net.com/app/uploads/2020/12/MEA-Photos-App-windows-10-1.jpg';
    this.issnaped = false;
    this.titleButton = 'oh snaped'
  }
  onClickSnaps(){
    if (this.issnaped == false){
      this.facesnap.snaps ++;
      this.titleButton =  'oups snaped';
      this.issnaped = true;
    }
    else {
      this.issnaped = false;
      this.facesnap.snaps --;
      this.titleButton =  'oh snaped';
    }
  }
}
