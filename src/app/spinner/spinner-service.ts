import {Component,Input ,OnInit} from '@angular/core';


@Component({
    selector: 'spinner',
    template: `
      <img [src]="loadingImage" />
    `
  })

export class SpinnerComponent   implements OnInit { 
   


  selRevision(_rarticleNumber)
  {
     
             
  }

  constructor(private _recitalService: SpinnerComponent ) {
  }

  ngOnInit(): void {
     
  }
  

}
