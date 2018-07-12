import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { SafeResourcePipe  } from '../shared/pipes/safe-resource.pipe';

@Component({
  selector: 'app-framer',
  templateUrl: './framer.component.html',
  styleUrls: ['./framer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FramerComponent {

  @Input() src ;
  @Input() active? = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() {}

  closeModal(){
    this.active = false;
    this.close.emit(true)
  }
}
