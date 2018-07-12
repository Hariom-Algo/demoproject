import { SafeResourcePipe } from './safe-resource.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

xdescribe('SafeResourcePipe', () => {
  let pipe;
  
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
	SafeResourcePipe,
	DomSanitizer

      ]
    });
  });

  beforeEach(inject([SafeResourcePipe,DomSanitizer], (p,s) => {
    pipe = new SafeResourcePipe(s);
  }));

  
  it('should throw if not used with a string', () => {
    //must use arrow function for expect to capture exception
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform(undefined)).toThrowError(Error);
    expect(() => pipe.transform({})).toThrowError(Error);
  });

  it('transform() cleans url', () => {
    // since this function sanitizer bypassSecurit trust resource
    let res = pipe.transform('some/url/#/test');
    setTimeout(() => { expect(res['changingThisBreaksApplicationSecurity']).toBe('some/url/#/test', 'Got the correct url'); }, 500);

  });

});
