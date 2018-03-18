import {Component,Input ,OnInit , ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';
import { IRootObject } from './RootObject';

@Component({
  selector: 'articleS',
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
  templateUrl: './article-list.component.html'
})

export class articleListComponent implements OnInit { 
  tblRow= new Array(8);
  tblcol= new Array(13);
  maxrCount: number = 99;
  articleNumber:number;
  //articleList: number[] = [11, 20, 171,173];
  @Input() title:string;
  @Input() data : string;
  @Input() articleList: number[] = [11, 20, 171,173];
  @Input() articleData : any[];
  @Input() rootResults: IRootObject[] =  [];
  @Input() confidanceList:number[]=[];


  errorMessage: string;
  topicName:string;
  selArticalNumber:number;

  selArticle(_articleNumber)
  {
    this.selArticalNumber=0;
     this.selArticalNumber=_articleNumber;
   }

  constructor(private ref:ChangeDetectorRef) {
   
  }

 
  ngOnInit(): void {
     
  }
  

}