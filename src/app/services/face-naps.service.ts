import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{

    faceSnaps : FaceSnap[] = [
        {
            id: 1,
            title: 'Rojo valisoa andrianantenaina',
            description: 'Mon pdp',
            createDate: new Date(),
            snaps: 150,
            imageUrl: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
            issnaped: false,
            location: "Madagascar",
        },
        {
            id: 2,
            title: 'Sariaka henikahaja',
            description: 'Mon pdp',
            createDate: new Date(),
            snaps: 0,
            imageUrl: 'https://thumbs.dreamstime.com/b/arbre-de-lever-de-soleil-d-acacia-6484080.jpg',
            issnaped: false,
            location: "Madagascar",
        },
        {
            id: 3,
            title: 'Amboro nao',
            description: 'Mon pdp',
            createDate: new Date(),
            snaps: 0,
            imageUrl: 'https://st2.depositphotos.com/1772227/11813/i/600/depositphotos_118131960-stock-photo-mangrove-tree-on-the-sea.jpg',
            issnaped: false,
        },
          
    ];

    getAllfacesnap(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap non trouvé!');
        }
    }

    snapFaceSnapById(faceSnapId: number, snapNoType: 'snap' | 'unsnap'): void {
        const faceSnaps = this.getFaceSnapById(faceSnapId);
        snapNoType === 'snap'? faceSnaps.snaps++:   faceSnaps.snaps --;
    }
  
}