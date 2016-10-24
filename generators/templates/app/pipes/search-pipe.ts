'use strict';

import {Pipe} from "@angular/core";

@Pipe({
    name: 'SearchPipe'
})

export class SearchPipe {

 transform (value: any, searchString: any) {
    if(value==null || value=="") {
      return null;
    }
    else if(searchString !== undefined && searchString != null){
        return value.filter((item: any)=>item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    else {
        return value;
    }
  }
}
