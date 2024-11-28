
# Monolith Archietecture
- When apps were developed traditionally, they were developed using monolith archietecture
- Project has APIs, UI , Authentication, DB Connectivity, SMS code.
- Backend developers, frontend developers used to work on the same project

# Microservice Archietecture
- World is moving towards microservice archietecture.
- In microservice archietecture, we have different services for different job like backend service, UI project, authentication service, DB Connectivity, SMS service, Email notification 
- All services combined together forms a big app.
- aka Single Responsibility Principle (SRP) where each and every service has its own job
- aka Separation Of Concern
- All these services are deployed
- Here we can have 
    backend service written in Java, 
    UI project written in React, 
    authentication service, 
    DB Connectivity written in python, 
    SMS service written in Golang, 
    Email notification
    (i.e you can write service in any archietecture you want to) 
- All these services run on different port
i.e on different ports we can deploy differnt service
Example:
  :1234 => UI                     /
  :1000 => Backend service        /api
  :3000 => SMS service            /sms
- All these services talk to each other

# Notes

- We don't want to use hardcoded data
-In this episode we'll see how to fetch data from API and populate our page dynamically
- Let's see how to make API call in React

# Ways to make API call

I]  Loads -> API -> Render

- As soon as our app loads, we can make API call and get the data and we can render on to the UI
- When we open a website, it doesn't show anything and as soon as API responds it quickly shows the UI.

II]  Loads -> render -> API -> Render

- As soon as our page loads we quickly render our UI and now we'll make API call and as soon as we get result from API we'll re-render our app using new data from the API
- Whenever page loads we'll quickly render skeleton, as soon as skeleton is rendered we'll make a API call, and whenever API reqponds we'll re-render the data on web page

- We'll always use 2nd approach in React beacuse 
    -it gives better UX
    - better UI
    - user doesn't see lag or jitteriness

- React has best render cycle


# useEffect hook

- 1st parameter is callback function
- 2nd parameter is dependency array

    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(" ");
        const json = data.json;
        console.log(json);
    }

- This callback function is called after component renders.

For fetching the data we'll use fetch() which is a super power given by browser

# Note 
- Watch CORS video from YT

# YT CORS by Akshay Saini
- CORS is a mechanism which uses additional HTTP header to tell the browser whether a specific web app can share resource with another web app but both the web app should have different origin.
- Both the web apps should have differnt origin
- Suppose they have same origin then they can share the resourses very easily
- But what if they don't have same origin then they need to follow the CORS mechanism
    # What do we mean by origin ?
    - Domain name - akshaysaini.in
    Suppose akshaysaini.in wants to access the file from another domain name suppose google.com/api/getData then it was not allowed earlier.
    - differnt ports, different protocols were also not allowed earlier

    # How resourse sharing between two web application works?
    - Suppose we have 2 apps on different origin and they want to share resourses
    - Here what happens is CORS preflight mechanism is followed
    - This means that preflight aka options call is made before the actual api call is made
    - Server takes the responsibility of verifying whether this call is valid or not
    - If this call is valid then origin2 will send some additional HTTP headers
    - Then the auctual call is made.
    - By this resource is shared 
    - Server sets up header Access-Control-Allow-Origin:*
- Install CORS chrome extension

# CORS
- Our brower blocks us to call API from one origin to different origin
- So if there is origin mismatch then browser blocks that API call.
- That is CORS policy
- Way to get rid of this CORS
  I] CORS chrome extension
 II] corsproxy.io


# Shimmer UI

- When we render page, we get blank page (i.e. data takes time to load)
- So instead of blank page we can load loading screen 
    if(listOfRestaurant.length === 0){
        return <h1>Loading...</h1>
    }

- But is showing spinner a good way ?
=> No
- So instead of Loading we'll show shimmer UI
- Today in industry shimmer UI is used.
- Shimmer UI means we load fake page until we get actual data from api 
- All the new web apps are following shimmer UI


# Conditional Rendering

- Rendering on the basis of condition is known as conditional rendering
    if(listOfRestaurant.length === 0){
        return <Shimmer />
    }

# Login-Logout button

- If u want to make ur component dyanamic, if you want something should change in your component then we should use local state variables
- Here is where usestate local variables comes into picture
- This is why use state variables

Is React refreshing whole header or it is just refreshing "LOGIN" button
=> Whole header component is refershed quickly
- To see this console.log("Header renderd");

- Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

# How can we able to update const state variables in useState. So how can we modify it?

- Whenever we update this value, react is updating this btnNameReact and it is calling this header once again

- Initially btnNameReact variable value is "Login" But as soon as we call setBtnNameReact the value of btnNameReact becomes "Logout" 
- This btnNameReact is a new variable having value "Logout"
- It is all performed by diff alogorithm (i.e reconciliation process)


# Search button 
- To track the value inside the input box whatever user is typing in, we have the bind this value with local state variable of react

const [searchText, setSearchText] = useState("")

- and bind this search text with input box

<div className="search">
    <input 
        type="text"                 className="search-box" 
        value={searchText}                   
    />

# When we try to type anything insode the search box it is not showing So we have to use onChange

<div className="search">
    <input 
        type="text" 
        className="search-box" 
        value={searchText}
        onChange={
            (e)=>{
              setSearchText(e.target.value);
            }}
    />

# We are updating listOfRestaurant with filteredList
- So instead of this, we'll keep another copy of filtered list
- So we'll create another copy of filteredList

- When body component rendered for the first time it makes an API call
- and it updates the listOfRestaurant as well as filteredRestaurant
- So now we'll use ListOfRestaurant intact
- Whenever we want to filter something then we'll use listOfRestaurant 
- Then we'll update the listOfRestaurant
- Whenever we'll search something then filteredRestaurant will get updated

<button 
    className="serach-btn" 
    onClick={()=>{
        //Filter the restaurant cards and update the UI
        
        const filteredRestaurant = listOfRestaurant.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilterdRestaurant(filteredRestaurant);
    }}
>
    Search
</button>

{
    filteredRestaurant.map((restaurant)=>(
    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
}