- First thing before building a food ordering app is planning on pen & paper
- Name your app - Swiggy
_______________________________________
| LOGO                HOME  ABOUT  ^    |
|_______________________________________|
|  __________                           |
| |__________|search                    |
|   __     __      __     __                     
|  |__|   |__|    |__|   |__|           |
|   __     __      __     __            |
|  |__|   |__|    |__|   |__|           |
|                                       |
|links                                  |
|_______________________________________|

1) Header
    - LOGO
    - Nav Items
2) Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - Img
            - Name of the restaurant
            - Rating
            - cuisine
3) Footer
    - Copyright
    - Link
    - Address
    - Contact

- Component is normal JS function which returns JSX
- Component is like a function as we use it to reuse 
 Thus reusable component and we can render it with different data

- If we want different restaurant cards then we use props
- props means properties
- passing a prop to a component is like passing argument to a function

- the data from backend comes in the form of json

# Confict Driven UI
- Our website is driven by data
- data is coming from backend 
- If you want different color bg in each city then u can send color from backend (i.e in json)

Array.protytype.join
-To join array

# Optional chaining
- const {cloudanaryImageId, name, cuisines, deliveryTime}= resData?.data;
- used to access data without throwing an error 
- It is a JS feature that allows you to access properties of an object or elements of an array without having to check whether the object or  array is null or undefined first. 
 (i.e we don't have to check if it is undefined beacuse it will throw an error)
- It is represented by the ?. operator 
- can be used to concisely access deeply nested properties without having to write a long chain of if statements to check for null or undefined

const user = {
    name: "Thapa",
    age:28,
    address:{
        street: "Main st",
        city: "New Road",
        state: "PK",
        zip: 10101,
    },
};

console.log(user.address.city)  //New Road

console.log(user.address.country) //undefined

console.log(user.address?.country) //undefined


console.log(user.address.roadNumber); //undefined

console.log(user.address.roadNumber.houseNumber); // throws Error - cannot find properties of undefined

console.log(user.address.roadNumber?.houseNumber); //undefined

console.log(user.address?.roadNumber?.houseNumber); //undefined

- Optional chaining can also be used to access elements of an array in JS.
- It works in a similar way to accessing properties of an object, but using the ?.[] operator instead of the ?. operator

const users =[
    {name:"John", age: 30},
    {name:"Jane", age:25},
    {name:"Bob", age:35},
];

console.log(users[1].name);  // {name:'Jane', age: 25}
console.log(users[1].name);  //Jane
console.log(users[3].name); // Error - cannot read properties of undefiend

console.log(users[3]?.name); // undefined


# Key in component
- you should not use index as key
- Not using  key is not acceptable
- Thus use unique id from backend