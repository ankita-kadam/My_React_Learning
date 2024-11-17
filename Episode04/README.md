- First thing before building a food ordering app is planning on pen & paper
- Name your app - Swiggy
_______________________________________
| LOGO                HOME  ABOUT  ^    |
|_______________________________________|
|  __________                           |
| |__________|search                    |
|   __     __      __     __            |           
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

- you should not use index as key
- Not using  key is not acceptable
- Thus use unique id from backend