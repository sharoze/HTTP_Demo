import { Component, OnInit } from '@angular/core';
import { SimpleJSONServiceService } from './simple-jsonservice.service';
import { SampleModel } from './Models/SampleModel';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'SimpleHttpServices';
  showByGetDelete:boolean;
  showPostPutPatch:boolean;
  sampleModels: SampleModel[];
  sampleModelsBkup:SampleModel[];
  inputModel:SampleModel;
  isDeleteBtnClick:boolean;

/**
 *
 */
constructor(private service: SimpleJSONServiceService) {
  // super();
}

ngOnInit(): void {
  // ...
this.showByGetDelete=true;
this.showPostPutPatch=false;
this.getPages();
this.inputModel= new SampleModel();
this.isDeleteBtnClick=false;
}

getPages():void{
  this.service.getAll().subscribe((arg) => {
    this.sampleModels=[];
    this.sampleModels =this.sampleModelsBkup= arg;

    console.log(arg);
    console.log(this.sampleModels);
  });

}

onGetAll():void
{
this.showGetAll();
this.getPages();
}

   showGetAll():void{
     this.showByGetDelete=false;
     this.showPostPutPatch=false;

  }

  showGetById():void
  {
    this.showByGetDelete=true;
    this.showPostPutPatch=false;
  }
  onGetById():void{
    this.showGetById();
  }

  GetById(inputID:string):void{

this.service.getByID(inputID).subscribe((res) => {

  if(!this.isDeleteBtnClick){
  this.sampleModels=[];
  this.sampleModels.push(res);
  }
  else
  {
    console.log(this.sampleModels);
    let index  = this.sampleModels.findIndex(element=>element.id==res.id);
    console.log(index);
    console.log(res);
    this.sampleModels.splice(index,1);
    console.log(this.sampleModels);
  }
});

  }

  onDeleteById():void{
    this.showGetById();
this.isDeleteBtnClick=true;
  }

  showPatch():void{
    this.showByGetDelete=false;
    this.showPostPutPatch=true;
  }
  onPatch():void{
    this.showPatch();
  }
  onPut():void{
    this.showPatch();
  }

  onPost():void{
    this.showPatch();
  }

}
