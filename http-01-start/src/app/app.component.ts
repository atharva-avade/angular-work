import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'
import { Post } from './post.model';
import { PostsService } from './post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts:Post[] = [];
  isFetching=false;
  error=null
private errorSub:Subscription;
  constructor(private http: HttpClient,private postservice:PostsService) {}

  ngOnInit() {
  this.errorSub= this.postservice.error.subscribe(errorMessage=>{
      this.error=errorMessage
    })

        this.isFetching=true
       this.postservice.fetchPosts().subscribe(posts=>{
        this.isFetching=false;
        this.loadedPosts=posts;
       },error=>{
          this.isFetching=false;
        this.error=error.message
      
       }
       );
  }

  onCreatePost(postData: Post) {
    // Send Http request
  
    this.postservice.CreateAndStorePosts(postData.title,postData.content)
   // console.log(postData);
  }

  onFetchPosts() {
    //Send Http request
      this.isFetching=true
          this.postservice.fetchPosts().subscribe(posts=>{
        this.isFetching=false;
        this.loadedPosts=posts;
       },error=>{
          this.isFetching=false;
        this.error=error.message
        console.log(error)
       });
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
    this.postservice.deletePosts().subscribe(()=>
    {
      this.loadedPosts=[];
    })
  }

onHandleError(){
  this.error=null
}

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  
}
