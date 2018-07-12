# Building Widgets

## Pre-req's 
- understanding of building components
- understanding of ngrx/store

## Being Smart 
The dashboard is the smart component of the app so all events emitted from its children should be pushed to it. 

In Dashboard world that is the widget data properties changing

```typescript
// we use ngrx/store here for our data model 
constructor(
    private store: Store<AppStore>,
  ){
    this.widgets = this.store.select('widgets');
  }
```

The magic happens here 
```typescript
<!-- dashboard.component.html -->
  <gridster *ngIf="options" [options]="options" class="dashboard-holder">
    <gridster-item [item]="toGridster(widget)"
                   class="widget box"
      <!-- async pipe so we can get up to date info on our observables -->
                   *ngFor="let widget of widgets  | async"
                   >

      <dashboard-widgetx class="gridster-item-content widgetx"
                         [widget]="widget"
                         [editMode]="editMode"
                         > </dashboard-widgetx>
    </gridster-item>
  </gridster>

```



The smart component also dispatch actions for changes to state of the app
This is done via the event emitters from the children components

```typescript
  removeWidget(key){
    this.store.dispatch(new RemoveWidget({id:key}));
  }
```


## Being Dumb
Our widgets are dumb components so essentially they are for presentation

Before you even connect it to firebase / data source we can build one
Use the Mock widget to fill in your data


```typescript
//dashboard/_test/MockWidget.ts
const mockWidget = {
  identifier: "historical-usage",
  position: {
    desktop: {
      x: 0,
      y: 0,
      cols: 3,
      rows: 20
    }
  },
  size: {
    cols: 3,
    rows: 20
  },
  widget_options: {
    planID: 166859
  },
  id: "This" + random(0,5),
  // first one is date and usage
  data:{}
}

```

Your Component should look something like this 
```typescript
@Component({
  selector: 'widget-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoricalComponent implements OnInit, AfterViewInit {
  // When your ready change this to @Input() widget:Widget;
  widget = mockWidget;
  // optional you can choose to include AFDB to structure queries
  constructor(private db: AngularFireDatabase) {

  }
  ngAfterViewInit(){

  }
  ngOnInit() {
    this.widget.id = this.widget.id  + random(0,5);
  }

}

```
Now your off to the races create your template and scss

### WidgetxComponent
This component is the house of the internal widget will cover such things
as options and various other wants of the customers needs

Or we can call it what it is a switch statement for all the widgets that get made
Add the widget here 

```html
<ng-container [ngSwitch]="widget?.identifier">
  <widget-usage *ngSwitchCase="'plan-usage'" [widget]="widget"></widget-usage>
  <widget-usage *ngSwitchCase="'tail-usage'" [widget]="widget"></widget-usage>
  <widget-usage *ngSwitchCase="'plan-app-usage'" [widget]="widget"></widget-usage>
  <widget-multi-widget  *ngSwitchCase="'multi-usage'" [widget]="widget"> </widget-multi-widget>
  <widget-multi-widget  *ngSwitchCase="'multi-tail-usage'" [widget]="widget"> </widget-multi-widget>
  <widget-historical *ngSwitchCase="'historical-usage'" > </widget-historical>
  <widget-multi-widget *ngSwitchCase="'acft-status'" [widget]="widget"> </widget-multi-widget>
  <widget-multi-widget  *ngSwitchCase="'multi-acft-status'" [widget]="widget"> </widget-multi-widget>
  <ng-container *ngSwitchDefault>
    <div>NO DATA FOR WIDGET</div>
  </ng-container>
</ng-container>
```
