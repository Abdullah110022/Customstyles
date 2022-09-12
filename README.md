# Customstyles

Contains custom CSS styles and JS styles needed for the project.

## CSS

| Classes       | Styles           					  |
|:-------------:|:--------------------------------------------------------------------------------|
| dark-ripple  | to produce ripple effect on choosing dark mode |
| ripple  | to produce ripple effect on a button or enclosed container on click |
| jus-(s/c/e)-item-(s/c/e)  | flex, justify-content (start/center/end), align-items (start/center/end) |
| bt-(xs/s/m/l/xl/fluid/gen) | <ul><li>adds size styling to button</li><li>fluid take whole width of the container</li><li>gen changes width depending upong the screen width</li></ul>|
| bt-color | color can be (success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |
| box-shadow-eq-(sm/md/lg) | adds shadow to the container without x and y offset |

## JS

| Functions     | what does it do? | Arguments |
|:-------------:|-----------------------------------------|:--------------------------------|
| ripple  | for ripple effect on click | ripple(ele, clas = "ripple", endWait = true, hidetime = 500)|

## Stimulus Controller

| Controller | How to? |
| :--------:| :------------------------------------------------------------------- |
| Ripple | To add ripple effect just add data-controller="ripple" on the button on which ripple effect is needed, ripple controller must be placed in controller directory with custom.js and must be registered in index.js for it to work|
