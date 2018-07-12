
// describe('Router tests', () => {
//   //setup
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule.withRoutes(routes),
//         AppModule
//       ]
//     });
//   });

//   //specs
//   it('can navigate to home (async)', async(() => {
//     let fixture = TestBed.createComponent(TestComponent);
//     TestBed.get(Router)
//       .navigate(['/home'])
//         .then(() => {
//           expect(location.pathname.endsWith('/home')).toBe(true);
//         }).catch(e => console.log(e));
//   }));

//   it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
//     let fixture = TestBed.createComponent(TestComponent);
//     TestBed.get(Router).navigate(['/home']);
//     fixture.detectChanges();
//     //execute all pending asynchronous calls
//     tick();
//     expect(location.pathname.endsWith('/home')).toBe(true);
//   }));

//   it('can navigate to home (done)', done => {
//     let fixture = TestBed.createComponent(TestComponent);
//     TestBed.get(Router)
//       .navigate(['/home'])
//         .then(() => {
//           expect(location.pathname.endsWith('/home')).toBe(true);
//           done();
//         }).catch(e => console.log(e));
//   });
// });
