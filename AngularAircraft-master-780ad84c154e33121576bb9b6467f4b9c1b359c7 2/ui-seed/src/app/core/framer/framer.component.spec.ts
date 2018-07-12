/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramerComponent } from './framer.component';
import { SafeResourcePipe } from '../shared/pipes/safe-resource.pipe';
import { ActivatedRoute, Params }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let routerMock = { data: Observable.of({framerPath: 'google.com'})};

describe('FramerComponent', () => {
  let component: FramerComponent;
  let fixture: ComponentFixture<FramerComponent>;
  let de: DebugElement
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramerComponent, SafeResourcePipe ],
      providers: [{provide: ActivatedRoute, useValue: routerMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramerComponent);
    component = fixture.componentInstance;
  });

  it('should create the iframe', () => {
    expect(component).toBeTruthy();
    const iframe: HTMLElement  = fixture.debugElement.nativeElement;
    iframe.remove();
  });

  xit('should create iframe with source as google.com', () => {
    fixture.detectChanges();
    const iframe: HTMLElement  = fixture.debugElement.nativeElement.querySelector('iframe');
    expect(iframe.getAttribute('src')).toBe('google.com');
    iframe.remove();

  });

});

