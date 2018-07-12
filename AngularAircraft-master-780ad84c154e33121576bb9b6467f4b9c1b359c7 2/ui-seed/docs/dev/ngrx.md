# Ngrx/store

> [@ngrx/store](https://gist.github.com/btroncone/a6e4347326749f938510)

## Store

Current Structure of the Store.

```sh
├── actions
│   ├── dashboard.actions.ts
│   ├── user.actions.ts
│   └── widget.actions.ts
├── app-store.ts
├── effects
│   ├── dashboard.effects.ts
│   ├── index.ts
│   ├── user.effects.ts
│   └── widget.effects.ts
└── reducers
    ├── index.ts
    ├── user.reducer.ts
    ├── widget.reducer.spec.ts
    └── widget.reducer.ts

```

## Building the store for the data point


### Services

Build your services to interact with the store to retrieve data from firebase, ADC or any other data point.



```typescript 
   // FROM widget.service.ts

  /**
  * fetch - get the user widgets
  *
  */
  fetch(): Observable<Widget[]>{
    this.widgets =  this.db.list(`/dashboard_user/${this.userId}/widgets`);

    // This is where the magic happens
    return this.widgets.switchMap((widgets:Widget[]) => {
	// change name to widget data
      // Get the payload for the widget in this case we only have plans
      let widgetData$ = this.widgetData(widgets);
      // Now we must combine the data

      return Observable.combineLatest(widgetData$, (...widData) => {
	console.log(widData);
	return widgets.map((widget, index) => {
	  const data = widData[index];
	  widget.id = widget.$key;
	  if (widget.data !== data) {
            return Object.assign({}, widget, { data });
	  }
          return widget;
	})});
    })
  }

```

### Reducers
This is where we change state of of application

```typescript
//todo set init state
export function widgetReducer(state: any = [], action: any): any {
  console.log(action);
  switch (action.type) {
    
  case WidgetActions.FETCH_WIDGETS:
    return [];
   
  case WidgetActions.FETCH_WIDGETS_SUCCESS:
    return action.payload;
   

```


### Effects
This is where the async actions take place and dispatches new actions.

```typescript
//widget.effects.ts

  loadWidgets$ = this.actions$
    .ofType(WidgetActions.FETCH_WIDGETS)
    .switchMap(() => this.widgetService.fetch())
    .map((widgets:Widget[]) => new  WidgetActions.FetchWidgetsSuccess(widgets));



```

### Actions
Essentially are classes for actions which will change the state of the application

```typescript
// widget.actions.ts
export const FETCH_WIDGETS = 'FETCH_WIDGETS';
export const FETCH_WIDGETS_SUCCESS = 'FETCH_WIDGETS_SUCCESS';
export const FETCH_WIDGETS_FAILURE = 'FETCH_WIDGETS_FAILURE';

export class FetchWidgets implements Action{
  readonly type = FETCH_WIDGETS;
}

export class FetchWidgetsSuccess implements Action{
  readonly type = FETCH_WIDGETS_SUCCESS;
  constructor(public payload: Widget[]) {}
```

### In your component
```typescript
  constructor(
    private store: Store<AppStore>,
  ){
    this.widgets = this.store.select('widgets');
  }
```


### Selecting slices of state
You can also create functions to only grab pieces of state 
```typescript 
//user.reducer.ts
export const getUserId = createSelector(getUserState, (u:User) =>{
  if(u) return u.userId;
});
```

Then in your component

```js
//widget.service.ts
  constructor(private db: AngularFireDatabase,
              private store: Store<AppStore>) {
    // the database will eventually move to store so we just pass the parameter string of the stuff we want.
    this.store.select(getUserId).combineLatest().subscribe(id => this.userId = id);
  }

```



## core-module
The two main things I think of here will be APP State and User

User will encompass your general user needs
APP state will encompass things for offline mode, themes etc...

## dashboard-module
widgets really based off of the slice of store we use from our core module





../arch/ngrx/ngrx-tools2.png

### TODO 
 - [] Move the widgets out of the core module into a feature module
 - [] Build and APPSTATE