# Overview
> Changes for soon to be tagged as 0.0.0-1

## Project changes
- Updates to package json removed some and upgraded some 
- We need to run our tests on a ubuntu machine or something else ... docker
- karma conf updates
- Added a git101 for new developers to the project in the README
- Added more info to the CI readme
- Wholesale linter changes ;)

## App Module
- Streamlined app module to load core and dashboard 
- just gotta move a couple components into either a widget module or just in dashboard
  - I think we should make a widget module so we can use it with other things gneeric

## Core Module
- Added nav bar integration with initial styling -- fixed the nav we broke ;)
  - Submenu for settings for user and afct of interest prototype
- Added sidenav component but not working
- Added a test directory to the core module for containing mock objects 
- Added model directory for keeping our business logic in typescript
- Added framer component to integrate with core application
- Added initial login template with styling by Antonio
- Added a pipe for Safe Resource URL in a shared folder

### FROM TODO.md in core module
- [x] inject auth service into user service
- [x] Code coverage for user service


## Dashboard Module
- Integrated add widget into the dashboard module
- added model and services directory
 
#### classes of importance 
```ts
export interface WidgetTypes // for service for now will integrate with other
export interface WidgetType // interface will be class
enum WidgetTypes // enumerable for clarification for future widget directive
```
### widget-directive
- Unsure about if this should be directive or not or if our widgets should be in module
- I figure the directive can handle the generic abilities that all widgets have
  - sizes 
  - placement 
  - other shtuff
   
### widget-service
- Service does basic crud operations against a users widgets
- gets widget types for add-widget
- we can integrate remove update etc ... this.widgetService.remove(widgetId)

### add-widget
- Component is integrated with the current add button
- Contains 3 filters: plans,tails, and widget types
  - Filters are not activated as we only have few widgets better to implement this later STORY
- Has Cancel Button
- Has a child component of widget-viewer
  - filteredWidgets are delivered to widget viewer to display current (images)
  - We can later load our real widgets here and let them customize before adding

## Routing 
- auth guard added  
  - users will not be able to navigate to the dashboard and other components if they are not authed
- added legacy app routes
- sidenav component consumes the router and provides the navigation lists


## More Testing 
- More unittests added as needed
- need to develop e2e plan

## Documentation
- Added a bunch of README's todos ,changelists 
- Added a folder for sprints and stories under the docs/ directory
- Need to develop a e2e plan