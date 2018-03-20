import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  tblRow = new Array(11);
  tblcol = new Array(10);
  maxrCount: number = 99;
  articleNumber: number;
  //articleList: number[] = [11, 20, 171,173];
  @Input() title: string;
  @Input() data: string;
  @Input() articleList: number[] = [11, 20, 171, 173];
  @Input() articleData: any[];
  @Input() rootResults: IRootObject[] = [];
  @Input() confidanceList: number[] = [];
  @Input() aconfList: number[] = [];
  @Input() IsSearch=false;
  errorMessage: string;
  topicName: string;
  selArticalNumber: number;
 


  getRandomColor(_number) {
   
    let notSure: any;
    var color = '#2171b5';
    var val;
   
    debugger;
    if (this.aconfList != undefined && this.aconfList !== null) {
       for (let i = 0; i < this.aconfList.length; i++) {
          
          notSure=this.aconfList[i];
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

    selArticle(_articleNumber)
    {
      this.selArticalNumber = 0;
      this.selArticalNumber = _articleNumber;
    }


    constructor(private ref: ChangeDetectorRef) {

    }


    ngOnInit(): void {

    }


  }