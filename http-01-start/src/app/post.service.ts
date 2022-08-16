import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class PostsService{

    error=new Subject<string>();

    constructor(private http:HttpClient){}

    CreateAndStorePosts(title:string ,content:string){

        const postData:Post={title:title,content:content}

          this.http
    .post<{name:string}>('https://ng-complete-guide-a618f-default-rtdb.firebaseio.com/posts.json',postData,
    {
        observe:'response'//this default by which we get the extracted body data of the response data
    }
    ).subscribe(responseData=>{
      console.log(responseData.body)
    },error=>{
        this.error.next(error.message);
    });

    }

    fetchPosts(){
        let SearchParams=new HttpParams();
        SearchParams=SearchParams.append('print','pretty')
        SearchParams=SearchParams.append('custom','key')
    return this.http //here we return the observable in app.component and we subscribe there 
    .get<{[key :string]:Post}>('https://ng-complete-guide-a618f-default-rtdb.firebaseio.com/posts.json', //we use placeholder property name  by using square brackets but to specify the type
    {
        headers:new HttpHeaders({'CustomHeader':'Hello'}),
        params: SearchParams//new HttpParams().set('print','pretty')
    }) 
    .pipe(map((responseData)=>{ 
      const PostArray:Post[]=[];
      if(responseData.hasOwnProperty){ //good practice to use if statment if you are using for in loop ,to check if the response data has key at its property not a property of any prototype
      for(const key in responseData){
        PostArray.push({...responseData[key],id:key}) //... is a spread operator which take all the key value pairs in the object to array
      }
    }
    return PostArray;
    }),
    catchError(erroRes=>{
        //send to analytics server
     return  throwError(erroRes)

    })
    );
}

    deletePosts(){
      return this.http.delete('https://ng-complete-guide-a618f-default-rtdb.firebaseio.com/posts.json',{
        observe:'events',
        responseType:'text' //default is json i.e we the response data in json format ,so it tells angular parse and convert into javascript object

      }).pipe(tap(event=>{
        console.log(event);
        if(event.type===HttpEventType.Sent){
            //..
        }
        if(event.type===HttpEventType.Response){
            console.log(event.body);
            //..
        }
      })
      );
    }
}