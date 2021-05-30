# Int Input Cleaner

node module for use in frontent that takes string number inputs and converts it to float.

Whilst this may seem useless, don't forget that a few countries in the EU use a comma instead of a dot for the decimal sign. This can cause some issues and shouls be adressed at textinput on your projects. 
Use this function as some sort of middleware that checks and converts your number strings into floats for further use in your code.

## Install 

https://www.npmjs.com/package/int-input-cleaner

````
npm install int-input-cleaner
````

## Usage

Using this is fairly simple, import it into your project and simply use it like a normal function. It will return either a float or NaN.

This means that in your code you can just run a check on the return value of intCleaner() and handle the return value.

here in the demo is an example of the function in use. Taken from one of my projects where I first ran into the decimal issue.

````javascript
const intCleaner = require('int-input-cleaner')

// your code here

// A snipped from a React Native app, where form input is locally stored before being dispatched to redux on submit. 
// Locally storage is done in string format and before submission 
    const [formData, setFormData] = useState('')

    const submitExpense = () => {

            
            const expense = intCleaner(formData)

            if(!expense) {
            // carry out some personalized error handling action 
            }
            
            // the redux action 
            logExpense(expense)

        setFormData('')
    }

// your code here
````

## Contributing
nothing really to say here, but go ahead if you think theres something to add or improve :)
