# Unittesting


## Pre-req's 
understanding karma and jasmine

## Resources
- [angular 4 testing guide](https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0)
- [Testing Dumb Components](netbasal.com/testing-dumb-components-in-angular-ba90a97a7129)


## Testing Services

Mock a lot of it 

```js
//authentication.service.ts

const MockDoc = {
  location: {href: ''}
};

describe('AuthenticationService', () => {
  // This shows how we can mock Http services for unittests
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      {provide: AngularFireAuth, useValue: AfAuthMock},
      {provide: DOCUMENT, useValue: MockDoc},
      {provide: ConfigurationService, useValue: ConfigMock},
      Http,
      AuthenticationService,
    ]);
    // Optional to use a mock back end provider when working.
    this.service = this.injector.get(AuthenticationService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.connection = connection);
  });

  it('should create', () => {
    expect(this.service).toBeTruthy();
  });

  it('signout() should log the user out', fakeAsync(() => {
    const spy = spyOn(FireMock, 'signOut');
    this.service.logout();
    expect(spy.calls.any()).toBe(true, 'Firebase auth signout called');
  }));

  it('authenticate() should log user in and authenticate', fakeAsync(() => {
    const spy = spyOn(FireMock, 'signInWithCustomToken');
    const res = this.service.authenticate();
    this.connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({jwt: 'fakejwttoken'}),
    })));
    tick();

    expect(spy.calls.any()).toBe(true, 'sign in to firebase initiated');
  }));

  it('authenticate() got an error', fakeAsync(() => {
    this.service.authenticate();
    this.connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({error: 'Some error occured'}),
    })));
    tick();

    //no not  anymore We will use the router here.
    //expect(this.service.document.location.href).toBe(ConfigMock.getLoginUrl());

  }));
});
```



## Testing Dumb Components
Idea behind this is to use your host component as your smart component passing data to your dumb component i.e the one that you are testing.

```js
// mock object
const mockWidget = {
  identifier: "plan-usage",
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
  id: '-KpZoDfufZPzsFalAvlc',
  data:{}
}

// reference
// go netbasal.com/testing-dumb-components-in-angular-ba90a97a7129
function createHostComponent( template : string ): ComponentFixture<HostComponent> {
  TestBed.overrideComponent(HostComponent, { set: { template: template } });
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<HostComponent>;
}

// Mock out the host or smart component
@Component({ selector: 'host-for-test', template: '' })
class HostComponent {
  widget = mockWidget;
}
// Mock out the component you want to test
@Component({ selector: 'widget-usage', template: '' })
class MockUsageComponent {
  @Input() widget;
}


describe('WidgetxComponent', () => {

  let fixture: ComponentFixture<HostComponent>;
  const getWidget = () : HTMLElement => fixture.debugElement.query(By.css('.widgetx')) ?
    fixture.debugElement.query(By.css('.widgetx')).nativeElement : null

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
	HostComponent,
	MockUsageComponent,
	WidgetxComponent
      ]
    });
  });

  it('should create passed a widget', () => {
    const template = '<dashboard-widgetx [widget]="widget"></dashboard-widgetx>';
    fixture = createHostComponent(template);
    expect(getWidget()).toBeDefined();
  });

  xit('should remove a widget', () => {
    const template = '<dashboard-widgetx [widget]="widget"></dashboard-widgetx>';
    fixture = createHostComponent(template);
    const widgetxComp = fixture.debugElement.query(By.directive(WidgetxComponent)) as DebugElement;
    const removeWid = widgetxComp.query(By.css('.delete')) as DebugElement;

    let $event;
    widgetxComp.componentInstance.remove.subscribe( val => $event = val);
    removeWid.triggerEventHandler('click', null);
    expect($event).toEqual(mockWidget.id);
  });
});


describe('WidgetxComponent component methods testingzz2', () => {

  let fixture: ComponentFixture<WidgetxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockUsageComponent, WidgetxComponent]
    });
    fixture = TestBed.createComponent(WidgetxComponent);
  });

  it('should set the chart type', () => {
    fixture.componentInstance.setChart('pieChart');
    expect(fixture.componentInstance.chartType).toBe('pieChart');
  });

});


```

