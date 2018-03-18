import {Component,Input ,OnInit} from '@angular/core';
import { IRootObject } from './RootObject';
import { BlueMixService } from './bluemix-service';
import {Pipe} from  '@angular/core';
// Tell Angular2 we're creating a Pipe with TypeScript decorators

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
    .ccell {
      display: block;
      background-color: #dcdccc;
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
  templateUrl: './revision-list.component.html',
  //pipes:numberPipe
})

export class revisionListComponent  implements OnInit { 
  tblRow= new Array(18);
  tblcol= new Array(10);
  maxCount: number = 173;
  selRecitalNumber:number;
  @Input() revisionList: number[] = [];
  @Input() title:string;
  @Input() revisionData : any[];
  @Input() confidanceList:number[]=[];

  
  rootResults: IRootObject[] =  [];
  errorMessage: string;
  


  selRevision(_rarticleNumber)
  {
    
    this.selRecitalNumber=_rarticleNumber;
   
  }

  constructor(private _blueMixService: BlueMixService) {
  }

  ngOnInit(): void {
     
  }
  

}
