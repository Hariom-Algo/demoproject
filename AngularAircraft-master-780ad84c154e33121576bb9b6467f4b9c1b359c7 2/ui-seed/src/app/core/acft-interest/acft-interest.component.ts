import { Component, OnInit, ViewChild, EventEmitter, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store'
import { getCompanyTails, getTailsOfInt, getCompanyName } from '../store/reducers/user.reducer'
import { Observable } from 'rxjs/Observable';
import { map,flatMap } from 'lodash';


@Component({
  selector: 'core-acft-interest',
  templateUrl: './acft-interest.component.html',
  styleUrls: ['./acft-interest.component.scss'],

})


export class AcftInterestComponent implements OnInit {
  

   @ViewChild('select,select2') selectElRef;
   @ViewChild('select1') selectElRef1;
  
  companyTails ={} ;
  tailsOfInt = [];

  array = [];
  
  constructor(private store: Store<AppStore>) {
    
 this.companyTails  = this.store.select(getCompanyTails)


  this.store.select(getCompanyTails)
       .subscribe((data) => {
         for ( var index in data ) {
          this.array.push(data[index]);
      }
       
        });
  
    this.store.select(getTailsOfInt).map(val => {
      if(val === 'None')
        this.tailsOfInt= new Array()
    })
  
  }

   
  selectedValues = [];
  selectedTails = [];
  
  ngOnInit() {
    this.updateSelectList();    
    this.updateSelectListTails();

  }

  
  updateSelectList() {
    let options = this.selectElRef.nativeElement.options;
    for(let i=0; i < options.length; i++) {
      options[i].selected = this.selectedValues.indexOf(options[i].value) > -1;
    }
  }

  change(options) {
    this.selectedValues = Array.apply(null,options)
      .filter(option => option.selected)
      .map(option => option.value)
  }

  updateSelectListTails() {
    let options = this.selectElRef1.nativeElement.options;
    for(let i=0; i < options.length; i++) {
      options[i].selected = this.selectedTails.indexOf(options[i].value) > -1;
    }
  }

  changeTails(options) {
    this.selectedTails = Array.apply(null,options)
      .filter(option => option.selected)
      .map(option => option.value)
  }

  
  doAdd() {
    for (let i = 0; i < this.selectedValues.length; i++) {
      let o = this.selectedValues[i];
      this.tailsOfInt.push(o);
      var arrlen = this.array.length;
      for (var j = 0; j<arrlen; j++) {
        if (this.selectedValues[i] == this.array[j]) {
          this.array = this.array.slice(0, j).concat(this.array.slice(j+1, arrlen));
        }//if close
      }//for close
      }

    }

    doRemove() {

        for (var i = 0; i<this.selectedTails.length; i++) {
          this.array.push(this.selectedTails[i]);
      var arrlen = this.tailsOfInt.length;
      for (var j = 0; j<arrlen; j++) {
        if (this.selectedTails[i] == this.tailsOfInt[j]) {
          this.tailsOfInt = this.tailsOfInt.slice(0, j).concat(this.tailsOfInt.slice(j+1, arrlen));
        }//if close
      }//for close
    }//for close

    }

}
