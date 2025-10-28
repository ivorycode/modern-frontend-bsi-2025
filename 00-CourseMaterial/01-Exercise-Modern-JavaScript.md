## Exercise 1: Scope

Inspect the code in the example `02-Language/91-CapturingScope/index.html`.  

Click on the numbers and the Buttons: Did you expect the given behaviour?  

Change the code, so that:

- when you click on a number then that number is displayed in the alert dialog 
- clicking the button "Task 2"  shows an increasing number in the alert
- clicking the button "Task 3"  shows an consistent message in the alert

Try to solve the problem with ES2015 constructs (`let` and `for-of`-loop).

*Advanced:* Try to solve the problem with `var` only, by introducing closures.



## Exercise 2: From Spaghetti to Modules

Inspect the example `02-Language/92-Spaghetti`: Include the new functionality on the page by un-commenting the commented code in `index.html`.  
Why is there a side-effect from the newly included functionality on the existing functionality?

Change the example, so that there are no side-effects between the existing and the newly included functionality.

Try to solve the problem with ES2015 modules.

*Advanced:* Solve the problem without ES2015 modules. Use IIFEs/closures to wrap each functionality in a module that is completely isolated.



## Exercise 3: Add 3rd Party Module

Start in the playground `99-playground/browser-plain`.

In `app.js` add:
```
import chalk from "https://cdn.skypack.dev/chalk-web";

...

const colorOption = {
  "background-color": "blue",
  color: "yellow",
  "font-size": "56px",
};
chalk(colorOption, "Success!");
```



**Using Import-Map:**
In `index.html`:

<script type="importmap">
    {
      "imports": {
        "chalk-web": "https://cdn.skypack.dev/chalk-web"
      }
    }
</script>

Then in `app.js`:
```
import chalk from "chalk-web";
```

This code is now "portable" to projects using a bundler.
