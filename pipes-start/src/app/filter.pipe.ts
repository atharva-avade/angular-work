import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propName:string): any {
    if(value.length===0|| filterString==''){
      //here value stands for and array 
      return value
    }
    const resultArray=[]
    for(const items of value){
      if(items[propName]===filterString){//items.value===filterString it can also be written like this 
      resultArray.push(items)
      }
    }
    return resultArray;
  }
}
