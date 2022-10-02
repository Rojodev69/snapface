import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-naps.service';

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

  constructor(private facesnapservice : FaceSnapsService) {

  }



  ngOnInit() {
    this.title = 'Rojo';
    this.description = 'Mon pdp';
    this.createDate = new Date();
    this.snaps = 0;  
    this.imageUrl = 'https://www.01net.com/app/uploads/2020/12/MEA-Photos-App-windows-10-1.jpg';
    this.issnaped = false;
    this.titleButton = 'oh snaped';
  }
  onClickSnaps(){
    if (this.facesnap.issnaped == false){
      this.facesnapservice.snapFaceSnapById(this.facesnap.id,'snap');
      this.titleButton =  'oups snaped';
      this.facesnap.issnaped = true;
    }
    else {
      this.facesnap.issnaped = false;
      this.facesnapservice.snapFaceSnapById(this.facesnap.id,'unsnap');
      this.titleButton =  'oh snaped';
    }
  }
}
