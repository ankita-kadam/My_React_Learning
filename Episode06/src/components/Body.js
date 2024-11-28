import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant]=useState([]);

    const[filteredRestaurant,setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);


    const fetchData = async () =>{

        const data= await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4903765&lng=73.812866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json  = await data.json();

        console.log(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
                
        //Optional Chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };
    /*
    if(listOfRestaurant.length === 0){
        return <h1>Loading...</h1>
    }
    */
    
    /*
    // Conditional Rendering
    if(listOfRestaurant.length === 0){
        return  <Shimmer/>;
    }
    */

    
    console.log("Body rendered");

    return listOfRestaurant.length === 0 ? <Shimmer /> :(
        <div className="body">
           <div className="filter">
               <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    />
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
               </div>
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList=listOfRestaurant.filter(
                        (res)=>res.info.avgRating > 4
                    )
                    setListOfRestaurant(filteredList);
                }}>
                    Show Top Rated Restaurant
                </button>
            </div> 
            
            <div className="res-container">  
               {
                filteredRestaurant.map((restaurant)=>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
};

export default Body;