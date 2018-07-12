# Styling 

## SCSS
We will be using sass to do our scss

[scss](http://sass-lang.com/guide)



## BEMit naming conventions
[BEMIT Cheatsheet](https://gist.github.com/stephenway/a6145d9b4430e8c55a77) 


## Global Styles

Global css will be defined in `src/styles.scss` file
Extensions etc will be stored in the `src/css/`

```scss

/* You can add global styles to this file, and also import other style files */
$primary : rgb(0,82,136);
$button-focus-border: black;

// These are bulma imports which we can remove later
@import "~bulmaswatch/lux/_variables";
@import "~bulma/bulma.sass";
@import "~bulmaswatch/lux/_overrides";

```





### Code Sample
This example does not follow the bemit naming guide but does follow along with what the dom is doing

We try to stick to using `flex` Sample component

scss in a component
```scss
// import our global style sheet
@import "../../../styles.scss";
:host{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  background-color:$light;
  height:100%;
  }
```