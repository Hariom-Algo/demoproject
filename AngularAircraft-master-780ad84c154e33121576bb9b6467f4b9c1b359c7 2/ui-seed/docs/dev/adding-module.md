# Adding a module

To add a new module you must first edit routes.ts

```js
// src/app/routing/routes.ts

  {
    path: 'dashboard', //create your new path
    component: DashboardComponent, // Your Component here
    canActivate: [ AuthGuard ] //authguard ensures user is logged in
  },
```



Add the module to `app.module.ts`

```js
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ ...
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    DashboardModule,
    // ADD it here
    SomeNewModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```