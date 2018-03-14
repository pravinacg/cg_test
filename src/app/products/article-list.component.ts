import {Component,Input ,OnInit , ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';
import { IRecital } from './Recital';
import { RecitalService } from './recital-service';
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
  `],
  templateUrl: './article-list.component.html'
})

export class articleListComponent implements OnInit { 
  tblRow= new Array(8);
  tblcol= new Array(10);
  maxrCount: number = 103;
  articleNumber:number;
  //articleList: number[] = [11, 20, 171,173];
  @Input() title:string;
  @Input() data : string;
  @Input() articleList: number[] = [11, 20, 171,173];
  
  @Input() rootResults: IRootObject[] =  [];
  arRecitals: IRecital[] =  [];
  errorMessage: string;
  topicName:string;
  

  selArticle(_articleNumber)
  {
        //this.articleList='';
      // alert(this.arNumber);
       
      //alert(this.articleList);
       
      
  }

  constructor(private ref:ChangeDetectorRef) {
   
  }

  selRevision(_rarticleNumber)
  {
     

      
  }

 
  ngOnInit(): void {
     
  }
  

}