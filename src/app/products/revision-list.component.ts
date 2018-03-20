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
  @Input() rconfList: number[] = [];
  @Input() IsSearch=false;
  
  rootResults: IRootObject[] =  [];
  errorMessage: string;
  
  getRandomColor(_number) {
   
    let notSure: any;
    var color = '#2171b5';
    var val;
   
    
    if (this.rconfList != undefined && this.rconfList !== null) {
       for (let i = 0; i < this.rconfList.length; i++) {
          
          notSure=this.rconfList[i];
          if(_number == notSure.number)
          {
            val=notSure.value;
            break;
          }
       }
        if(this.IsSearch)
        {
              if (val >=0.5 && val <=1.0) 
              {
                color="#08306b";
              }
              else if (val >=0.4 && val <=0.5)
              {
                color="#08519c";
              }
              else if (val >=0.3 && val <=0.4)
              {
                color="#2171b5";
              }
              else if (val >=0.2 && val <=0.3)
              {
                color="#4292c6";
              }
              else if (val >=0.1 && val <=0.2)
              {
                color='#6baed6';
              }
                else if (val >=0.05 && val <=0.1)
              {
                color="#9ecae1";
              }
              else if (0.00 <=val && val <=0.05 )
              {
                color="#c6dbef";
              }
        }
        else
        {
          if (val >= 0.5) 
          {
            color="#08306b";
          }
          
        } 
      }
     
      
    return color;
  }


  selRevision(_rarticleNumber)
  {
    
    this.selRecitalNumber=_rarticleNumber;
   
  }

  constructor(private _blueMixService: BlueMixService) {
  }

  ngOnInit(): void {
     
  }
  

}
