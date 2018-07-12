import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcftInterestComponent } from './acft-interest.component';
import { Store, StoreModule, StateObservable, ActionsSubject,ReducerManager,ReducerManagerDispatcher } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


xdescribe('AcftInterestComponent', () => {
  let component: AcftInterestComponent;
  let fixture: ComponentFixture<AcftInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcftInterestComponent ],
      
      providers: [
  Store , ActionsSubject, ReducerManager, ReducerManagerDispatcher, {
                    provide: StateObservable, useValue: {
                        params: function() {
                            return {
                                id: 'store-id'
                            };
                        }
                    }
                },

],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcftInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
