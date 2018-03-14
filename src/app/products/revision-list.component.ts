import {Component,Input ,OnInit} from '@angular/core';
import { IRootObject } from './RootObject';
import { BlueMixService } from './bluemix-service';
@Component({
  selector: 'revisionS',
  styles: [`
    .rcell {
      display: block;
      background-color: #dcdcdc;
      text-align: center;
      width:100%;
    }
    .ncell {
      display: block;
      text-align: center;
      width:100%;
    }
    .txtdiv {
      white-space: nowrap; 
      width: 30em; 
      overflow: hidden;
      text-overflow: ellipsis; 
     
  }
  `],
  templateUrl: './revision-list.component.html'
})

export class revisionListComponent  implements OnInit { 
  tblRow= new Array(18);
  tblcol= new Array(10);
  maxCount: number = 173;
  selRecitalNumber:number;
  revisionList: number[] = [41,157,47,50,138,40,121,37,46,55];
  @Input() title:string;
  @Input() revisionData : any[];
  
  rootResults: IRootObject[] =  [];
  errorMessage: string;
  


  selRevision(_rarticleNumber)
  {
    alert(_rarticleNumber);
    this.selRecitalNumber=_rarticleNumber;
  }

  constructor(private _blueMixService: BlueMixService) {
  }

  ngOnInit(): void {
     
  }
  

}
