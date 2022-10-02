import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-naps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  facesnaptab!: FaceSnap[];

  constructor( private facesnapservice : FaceSnapsService) { }

  ngOnInit(): void {
    this.facesnaptab = this.facesnapservice.getAllfacesnap();
  }
}
