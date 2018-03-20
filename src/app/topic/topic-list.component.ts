import { Component,OnInit,Input  } from '@angular/core';
import { NgModule } from '@angular/core';
import { ITopic } from './topic';
import { BlueMixService } from '../products/bluemix-service';
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
    .adiv {
        border-radius: 25px;
        background: #73AD21;
        padding: 20px; 
        width: 200px;
        height: 20px; 
    }
    .button {
        background-color: #C0C0C0;
        border: none;
        color: #585050;
        padding: 10px;
        height:40px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 13px;
        margin: 6px 6px;
        border-radius: 15px;
        
    }
    .btn:focus,.btn:active {
                background-color: #2171b5 !important;
        color:white;
        border-radius: 15px;
     }
    .active {
        background-color: #2171b5 !important;
        color:white;
      }
  
    `],
    
})
export class topicListComponent implements OnInit { 
    selTopic: string;
    allTopics: ITopic[] =  [];
    public edited = false;
    public isOpen =false;
    pageTitle: string = 'The General Data Protection Regulation (EU) 2016/679 ';
    selectedTitle: string = '<div>Heloo</div>';
    errorMessage: string;
    dataResults: IRootObject;
    test:IRootObject;
    SearchValue :string='';
    results: IResult[] =  [];
    numberList:number[]=[];
    tsList:string[]=[];
    _listFilter: string;
    filteredProducts: IResult[];
    products: IResult[] = [];
    
    rTitles = new Array();
    aTitles=new Array();
    aconfList=new Array();
    rconfList=new Array();

    tempSubTopic:string[]=[];
    articlNumList:number[]=[];
    recitleNumList:number[]=[];
    recitleNumList1:number[]=[];
    articlNumList1:number[]=[];
    confidanceList:number[]=[];
    confidance:number=0;
    temp:number;
    isSearch=false;



    calling = false;
    subTopicList = new Array();
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


    //search 
    getSearchResult(topic:string)
    {
     // alert(this.SearchValue);
     this.isSearch=true;
     this.calling = true;
        this._topicService.getSearchData(this.SearchValue)
        .subscribe(resultArray => {
         this.dataResults=resultArray;
         this.recitleNumList = [];
         this.articlNumList = [];
         this.aTitles=[];
         this.rTitles=[];
         this.aconfList=[];
         this.rconfList=[];
         let notSure: any; 
         this.confidanceList=[];
         if(this.dataResults != undefined && this.dataResults !== null){
         
         for(let i = 0; i < this.dataResults.results.length; i++){
            
            this.temp = Number((this.dataResults.results[i].index));
          
             if(this.dataResults.results[i].title.includes("Recital"))
             {    
              this.rconfList.push({number:this.temp,value:a});
              this.recitleNumList.push(this.temp);
              this.rTitles.push({title:this.dataResults.results[i].title, number: this.dataResults.results[i].index, text: this.dataResults.results[i].text});
             }
             else
             {
               
                this.temp = Number(this.dataResults.results[i].title.match(/\d+/g).map(Number));
                this.aconfList.push({number:this.temp,value:a});
                this.articlNumList.push(this.temp);
                this.aTitles.push({title:this.dataResults.results[i].title, number:this.temp, text: this.dataResults.results[i].text});
             }
             
             notSure=this.dataResults.results[i].result_metadata;
             var a=notSure.confidence;
            
            
             if (Number(a) >= 0.5)
             {
                 this.confidanceList.push(this.temp);
                 
             }
          }
          this.calling = false;
     console.log(this.dataResults.results);
     console.log(this.aconfList);
     console.log(this.rconfList);
       
   
    }

        },
        error => this.errorMessage = <any>error);
    }
    


    getSubTopicsData(topic:string)
    {
        this.isSearch=false;
      
        this.calling = true;
        this.GetTopicDataFromService(topic);
       
    }

    getSubTopics(topic:string)
    {
       
        this.isSearch=false;
       
        this.calling = true;
        this.GetTopicDataFromService(topic);
        this.selTopic=topic;
        this.edited = true;
        
     }
   
    GetTopicDataFromService(topic:string)
    {
        topic="topics::"+topic;
        this._topicService.getTopicDataFromService(topic)
        .subscribe(resultArray => {
         this.dataResults=resultArray;
         if(this.dataResults != undefined && this.dataResults !== null){
         this.recitleNumList = [];
         this.articlNumList = [];
         this.rTitles=[];
         this.aTitles=[];
         this.calling = false;
         for(let i = 0; i < this.dataResults.results.length; i++){

            this.temp = Number((this.dataResults.results[i].index));
            var a= this.dataResults.results[i].result_metadata;
             if(this.dataResults.results[i].title.includes("Recital"))
             {
              this.recitleNumList.push(this.temp);
              this.rTitles.push({title:this.dataResults.results[i].title, number: this.dataResults.results[i].index, text: this.dataResults.results[i].text});
             }
             else
             {
                this.temp = Number(this.dataResults.results[i].title.match(/\d+/g).map(Number));
                this.articlNumList.push(this.temp);
                this.aTitles.push({title:this.dataResults.results[i].title, number:this.temp, text: this.dataResults.results[i].text});
             }
          }

     
    }

        },
        error => this.errorMessage = <any>error);
    }
    
    constructor(private _topicService: BlueMixService) {
       
    }


    ngOnInit(): void {
    
      // this.calling=false;
         
        this._topicService.getTopics()
        .subscribe(topics => {
            this.allTopics = topics;
            for(let i = 0; i < this.allTopics.length; i++){
                var a=this.allTopics[i].subtopics;
               
                this.subTopicList.push({topic:this.allTopics[i].topics, subTTopic:a});
                //console.log(this.subTopicList);
            }

        },
        error => this.errorMessage = <any>error);

        
    }
    
}
