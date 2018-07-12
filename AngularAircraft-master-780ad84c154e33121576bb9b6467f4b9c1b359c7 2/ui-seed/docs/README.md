# Dashboard Documentation 

### Table of Contents

[Developer materials for project](./dev/)

[Code Coverage](./cabin-dashboard-docs/coverage.html)

[Code Documentation](./cabin-dashboard-docs/index.html)

[Architechture](./arch/ngrx.md)

[Release Notes](./release-notes/)



### Generating documentation
```sh
#run all of the doc generation
npm run doc
#serve docs on your local machine
compodoc -p src/tsconfig.json -d docs/cabin-dashboard-docs/

```

### Lint -meh maybe remove linting i dont like
To keep in line with the typescript styling we can run ng lint which will run a typescript linter
```sh
ng lint 
#to auto fix test 
ng lint --fix
```



