import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  generateSrcSet(srcSet: any) {
    return srcSet.join();
  }

}
