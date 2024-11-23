- Today we are going to see React Hooks

- It is best practice to keep separate file for separate components

- Everything u do can be done using React


# React advantages
- used to make large scalable performant ready applications

- Read about React file structure from React official website


- Whernever you have hardcoded data, never keep it inside components folder.
- The best practice is to keep it in folder named utils/common
- It is best practice to name constants in capital letter.

# Import & Export
1. Default Export
    - module cannot have multiple default export
    
    const Component="";
    export default Component;
    - to import it 
    import Component from "path";

    e.g
     export default CDN_URL;
    - to import named export write 
    import CDN_URL from "../utils/constants";

2. Named Export
    - when we have to send multiple exports then use named export
    export const Component="";
    - to import named export write 
    import { Component } from "path";
    e.g 
    export const CDN_URL="";
    export const LOGO_URL="";
    - to import named export write 
    import { CDN_URL } from "../utils/constants";

# NOTE 
- Developer would have exported this React in node_modules, thus while importing we do default import.
- That's why we are able to import it.


# React Hooks
- normal JS utility function
- There are 2 very imp react hooks
 I] useState()
    - used to create super powerful state variable in react.
    - u have to import it like named import
    - it maintains the state of your component

        import {useState} from "react"
        const {listOfRestaurant} = useState();

    - Whenever set variable updates, react re-renders it's component
    - The logic of updating the UI is known as re-rendering
    - whenever we call useState(), it give a state variables which is inside of an array.
    - To modify the state variables we need function which comes as the 2nd parameter in this array. 
    - The nomenclature that we follow is use "state" word before name of state variable
    e.g const [listOfRestaurants,setListOfRestaurant] =useState([])

II] useEffect()





# Actual DOM
<div>
    <div>
    <img/>
    </div>
</div>

# Virtual DOM
- It is not an actual DOM
- It is representation of actual DOM
- It is normal JS object (you can see in console.log(<Body/>) in App.js )


# Diff and Reconciliation Algorithm (React Fiber)
- In React16, a new algorithm came out that algo is known as React Fiber.
- Suppose there are 15 resCard and using filter there are 3 resCards then React finds out the diiference between virtual DOM of  old object and new object and so it then updates it.
- Virtual DOM is representation of actual DOM which is normal JS object.
- Diff algo finds out the difference between two virtual DOMs.
  
# Diff Algorithm
- It finds out the difference between updated virtual DOM(new) and Actual virtual DOM (old) and actually updates the DOM on every render cycle

# Why React is fast?
- Because it has virtual DOM and diff algorithm which can do efficient DOM operation

# Note 
- Read React fiber Archietecture (https://github.com/acdlite/react-fiber-architecture)