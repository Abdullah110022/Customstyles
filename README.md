# Customstyles

Contains custom CSS styles and JS styles needed for the project.

## CSS

| Classes       | Styles           					  |
|:-------------:|:--------------------------------------------------------------------------------|
| dark-ripple  | to produce ripple effect on choosing dark mode |
| ripple  | to produce ripple effect on a button or enclosed container on click |
| jus-(s/c/e)-item-(s/c/e)  | flex, justify-content (start/center/end), align-items (start/center/end) |
| bt-(xs/s/m/l/xl/fluid/gen) | <ul><li>adds size styling to button</li><li>fluid take whole width of the container</li><li>gen changes width depending upong the screen width</li></ul>|
| bt-(color) | color can be (success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |
| box-shadow-eq-(sm/md/lg) | adds shadow to the container without x and y offset |
| clr-(color) | for text color, color can be (success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |
| bg-(color) | for background, color can be (success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |
| bor-(color) | for border color, color can be (success/danger/info/orange/amber/green/emerald/teal/primary/sky/blue/fuchsia/purple/violet/pink/rose/slate/secondary/neutral/black) |
| focus-field | it is assigned by default to the parent div of input element using stimulus controller for placeholder to work |
| (blur/focus)-placeholder | necessary styling which is applied on the span and make it placeholder when input tag is clicked, focus-placeholder runs when input tag is focused and blur runs the same way |
| flash-(notice/danger/success) | adds necessary styling to the flash message container div |

## JS

| Functions     | what does it do? | Arguments |
|:-------------:|-----------------------------------------|:--------------------------------|
| ripple  | for ripple effect on click | ripple(ele, clas = "ripple", endWait = true, hidetime = 500)|
| addPlaceholder  | for placeholder blur and focus effect | addPlaceholder(ele)|

## Stimulus Controller

| Controller | How to? |
| :--------:| :------------------------------------------------------------------- |
| Ripple | To add ripple effect just add data-controller="ripple" on the button on which ripple effect is needed, ripple controller must be placed in controller directory with custom.js and must be registered in index.js for it to work|
| Placeholder | applies focus and blur effect of placeholder to the input tag container when input tag container is connected. input tag container must container data-controller only for it to work and must contain only input tag |
