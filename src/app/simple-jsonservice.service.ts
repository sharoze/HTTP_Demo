import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SampleModel } from './Models/SampleModel';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SimpleJSONServiceService {

  _sampleModels: SampleModel[];
  url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    // return this.getAll();
  }


   getAll() {
    return   this.httpClient.get<SampleModel[]>(this.url);
  //  .subscribe(arg => {this._sampleModels = arg});
//  console.log(this._sampleModels);

//  return this._sampleModels;
  }

getByID(id:string){
  console.log(this.url+id);
  return this.httpClient.get<SampleModel>(this.url+id);
}

}
