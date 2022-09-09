# Customstyles

Contains custom CSS styles and JS styles needed for the project.

## CSS

| Classes       | Styles           					  |
|:-------------:|:--------------------------------------------------------------------------------:|
| dark-ripple  | to produce ripple effect on choosing dark mode |
| ripple  | to produce ripple effect on a button or enclosed container on click |
| jus-(s/c/e)-item-(s/c/e)  | flex, justify-content (start/center/end), align-items (start/center/end) |
| bt-(xs/s/m/l/xl/fluid/gen) | adds styling to button where fluid take whole width of the container, gen changes width depending upong the screen width|
| bt-color | color can be success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |

## JS

| Functions     | what does it do? | Arguments |
|:-------------:|:-----------------------------------------:|:--------------------------------|
| ripple  | for ripple effect on click | ripple(ele, clas = "ripple", endWait = true, hidetime = 500)|

## Stimulus Controller

| Controller | How to? |
| :--------:| :-------------------------------------------------------------------: |
| Ripple | To add ripple effect just add data-controller="ripple" on the button on which ripple effect is needed, ripple controller must be placed in controller directory with custom.js and must be registered in index.js for it to work|
