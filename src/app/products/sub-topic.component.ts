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
  templateUrl: './sub-topic.component.html'
})

export class revisionListComponent  implements OnInit { 
  rootResults: IRootObject[] =  [];
  errorMessage: string;
  

  constructor(private _dataServicService: BlueMixService) {
  }

  ngOnInit(): void {
     
  }
  

}
