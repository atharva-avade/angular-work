import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {
  //Araange
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
//execute before executing the test till everything is configured
//configure-testing module
//set module, - import componets,providers etc
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ]
    })
    .compileComponents();
  }));

  //here it will first the the instance of a fixture ,component etc
//if there are 10 spec it will be executed 10 times
//this is important place to set your data before you execute your spec
  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //Act
    let reviewCommentActive=false;

    //Assert
    expect(component).toBeTruthy();
  });
});
