import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,  SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

 @Input('srvElement') element:{name:string, type:string, content:string}
 @Input () name:string;
 @ViewChild('heading',{static:true}) header:ElementRef;
 @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;
  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes:SimpleChanges){

    console.log('NgOnChanges callled');
    console.log(changes)

  }

  ngOnInit() {
    console.log('NgOnInit called');
    console.log('TextContent:'+ this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph:'+ this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ngdocheck called !');

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text Content of Paragraph:'+ this.paragraph.nativeElement.textContent);
  }

ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
}

ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
  console.log('TextContent:'+ this.header.nativeElement.textContent);

}

ngAfterViewChecked(): void {
console.log('ngAfterViewChecked called');
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called!')
}

}
