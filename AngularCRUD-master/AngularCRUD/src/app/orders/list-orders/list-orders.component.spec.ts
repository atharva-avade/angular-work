//import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { ListOrdersComponent } from './list-orders.component';

fdescribe("this is my first Jasmine testing",()=>{

  it("first test script",()=>{
   const  tax=10*2
  expect(tax).toBe(10)

    console.log("I am inside the test script ")

  })
})
/*
describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

