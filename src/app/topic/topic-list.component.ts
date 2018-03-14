import { Component,OnInit,Input  } from '@angular/core';
import { NgModule } from '@angular/core';
import { ITopic } from './topic';
import { BlueMixService } from '../products/bluemix-service';
import { articleListComponent } from '../products/article-list.component';
import { IRootObject } from '../products/RootObject';
import { IResult } from '../products/result';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'pm-products',
    templateUrl: './topic-list.component.html',
    styles: [`
    table .collapse.in {
        display:table-row;
    }
    `],
    
})
export class topicListComponent implements OnInit { 
    selTopic: string;
    allTopics: ITopic[] =  [];
    public edited = false;
    public isOpen =false;
    pageTitle: string = 'Home screen';
    selectedTitle: string = '<div>Heloo</div>';
    errorMessage: string;
    dataResults: IRootObject;

    results: IResult[] =  [];
    numberList:number[]=[];
    tsList:string[]=[];
    _listFilter: string;
    filteredProducts: IResult[];
    products: IResult[] = [];
    
    title1 = new Array();

    articlNumList:number[]=[9,10];
    recitleNumList = new Array(9,3);
  


    temp:number;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
   
    performFilter(filterBy: string): IResult[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IResult) =>
              product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    getSubTopics(topic:string )
    {
       
        this._topicService.getServiceData(topic)
        .subscribe(resultArray => {
        this.selTopic=topic;
         this.edited = true;
         this.selTopic=topic;
        
         this.dataResults=resultArray;
         //const filters = Array.of(this.dataResults.map(f => f.result));

         if(this.dataResults != undefined && this.dataResults !== null){
         for(let i = 0; i < this.dataResults.results.length; i++){

            this.temp = Number((this.dataResults.results[i].index));
             if(this.dataResults.results[i].title.includes("Recital"))
             {
              this.articlNumList.push(this.temp);
              this.recitleNumList.push(this.temp);
             }
             else
             {
                this.articlNumList.push(this.temp);
               
             }
            this.title1.push({title:this.dataResults.results[i].title, number: this.dataResults.results[i].index, text: this.dataResults.results[i].text});
        }
      //  this.articleNum=this.articlNumList.toString();
       // this.recitaNum=this.recitleNumList.toString();
      //  this.articleNum=this.recitaNum;
        console.log(this.articlNumList);
        console.log(this.recitleNumList);
    }

        },
        error => this.errorMessage = <any>error);
       
       
       
    }

    
    
    

    constructor(private _topicService: BlueMixService) {
        
    }

    ngOnInit(): void {
        this._topicService.getTopics()
        .subscribe(topics => {
            this.allTopics = topics;
           
        },
        error => this.errorMessage = <any>error);

        
    }
    
}
