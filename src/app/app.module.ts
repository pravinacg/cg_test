import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { topicListComponent } from './topic/topic-list.component';
import { revisionListComponent } from './products/revision-list.component';
import { articleListComponent } from './products/article-list.component';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    topicListComponent,
    revisionListComponent,
    articleListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
