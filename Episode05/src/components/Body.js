import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {

    // State variable- Super powerful variable
    const [listOfRestaurants,setListOfRestaurant] =useState(resList);   //This is array destructuring

    /*
            OR
    const arr = useState(resList);
    const [listOfRestaurant,setListOfRestaurant]=arr;
            OR
    const arr=useState(resList);
    const listOfRestaurant=arr[0];
    cont setListOfRestaurant=arr[1];
    // beacause we know useState returns an array
    */


    // Normal JS variable
    // let listOfRestaurants=[
    // {
    //    "info": {
    //     "id": "150591",
    //     "name": "Satkar Restaurant",
    //     "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    //     "locality": "Sinchai Colony",
    //     "areaName": "Satkar Chowk",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "North Indian",
    //       "South Indian",
    //       "Indian",
    //       "Salads",
    //       "Desserts"
    //     ],
    //     "avgRating": 4.3,    
    //     "sla": {
    //       "deliveryTime": 59,
    //     }
    //     }
    // },
    // {
    //     "info": {
    //      "id": "150191",
    //      "name": "Dominos",
    //      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    //      "locality": "Sinchai Colony",
    //      "areaName": "Satkar Chowk",
    //      "costForTwo": "₹250 for two",
    //      "cuisines": [
    //        "North Indian",
    //        "South Indian",
    //        "Indian",
    //        "Salads",
    //        "Desserts"
    //      ],
    //      "avgRating": 4.3,    
    //      "sla": {
    //        "deliveryTime": 59,
    //      }
    //      }
    //  },
    // {
    //     "info": {
    //         "id": "150592",
    //         "name": "KFC",
    //         "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    //         "locality": "Sinchai Colony",
    //         "areaName": "Satkar Chowk",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //           "North Indian",
    //           "South Indian",
    //           "Indian",
    //           "Salads",
    //           "Desserts"
    //         ],
    //         "avgRating": 3.3,    
    //         "sla": {
    //           "deliveryTime": 59,
    //         }
    //         }
    // }
    // ];

    return(
      <div className="body">
        <div className="filter">
            <button 
            className="filter-btn"
            onClick={()=>{
            /*    //Filter logic
                listOfRestaurants=listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                console.log(listOfRestaurants);
            */
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                )
                setListOfRestaurant(filteredList);
            }}
            >
                Show Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
         {
          listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
         }
        </div>
      </div>
    );
};

export default Body;