import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-naps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-active-facesnap',
  templateUrl: './active-facesnap.component.html',
  styleUrls: ['./active-facesnap.component.scss']
})
export class ActiveFacesnapComponent implements OnInit {
  facesnap!: FaceSnap;

  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string; 
  titleButton!: string;
  issnaped!: boolean;

  constructor(private facesnapservice : FaceSnapsService, 
              private route : ActivatedRoute) {

  }
  ngOnInit() {
    const snapId = +this.route.snapshot.params['id']
    this.facesnap = this.facesnapservice.getFaceSnapById(snapId);

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
