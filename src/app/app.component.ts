import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { TopicService } from './topic/topic-service';
import { BlueMixService } from './products/bluemix-service';
@NgModule({
  imports: []
})

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
  </div>
  `,
  providers: [ TopicService,BlueMixService ]
})
export class AppComponent { }