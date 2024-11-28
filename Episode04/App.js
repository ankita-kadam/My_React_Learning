import React from 'react';
import ReactDOM from 'react-dom/client';

//Header
const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// } 
// or we can directly give in style  attribute

/*
const RestaurantCard = (props) =>{
    console.log(props);
    return(
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};
*/

/*
const RestaurantCard = (props) =>{
    const {resName, cuisine} = props;
    return(
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};
*/
/*
const RestaurantCard = ({resName,cuisine}) =>{ //This is destructring
   
    return(
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f"></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};
*/
/*
const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName="KFC" cuisine="Burger, French fries, Coke"/>
               
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian"/>
            </div>
        </div>
    );
};
*/
/*
const RestaurantCard = (props) =>{ //This is destructring
    const {resData}=props;
 
     return(
         <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
             <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
             <h3>{resData.info.name}</h3>
             <h4>{resData.info.cuisines.join(", ")}</h4>
             <h4>{resData.info.avgRating} Rating</h4>
             <h4>{resData.info.costForTwo}</h4>
             <h4>{resData.info.sla.deliveryTime} minutes</h4>
         </div>
     );
 };
*/

const RestaurantCard = (props) =>{ //This is destructring
   const {resData}=props;

   const{name, 
    cuisines,
    avgRating,
    costForTwo,
   } =resData.info;
    return(
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resList=[
      {
        "info": {
          "id": "150591",
          "name": "Satkar Restaurant",
          "cloudinaryImageId": "rvxp5xbniat84r6efku2",
          "locality": "Sinchai Colony",
          "areaName": "Satkar Chowk",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Salads",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "21553",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.2K+",
          "sla": {
            "deliveryTime": 59,
            "lastMileTravel": 12.1,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "12.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 22:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "151649",
          "name": "Hotel Sai Nath & Sai Restaurant",
          "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
          "locality": "railway station",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "101802",
          "avgRatingString": "4.3",
          "totalRatingsString": "901",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "618037",
          "name": "Jai Ganesh Bhojnalaya",
          "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
          "locality": "Railway Colony",
          "areaName": "Bus stand",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Chinese"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "368432",
          "avgRatingString": "4.0",
          "totalRatingsString": "261",
          "sla": {
            "deliveryTime": 61,
            "lastMileTravel": 11.3,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "11.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "195429",
          "name": "Sanju Ka Dhaba",
          "cloudinaryImageId": "hjao7sorzggaeqito6au",
          "locality": "Vishnu Nagar",
          "areaName": "Prasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "177443",
          "avgRatingString": "4.5",
          "totalRatingsString": "1.1K+",
          "sla": {
            "deliveryTime": 58,
            "lastMileTravel": 14.9,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "14.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/sanju-ka-dhaba-vishnu-nagar-prasia-road-rest195429",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "774546",
          "name": "Shree Naivedyam",
          "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
          "locality": "Khajri Road",
          "areaName": "Chhindwara City",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "South Indian",
            "Pizzas",
            "Beverages"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "428968",
          "avgRatingString": "4.2",
          "totalRatingsString": "71",
          "sla": {
            "deliveryTime": 60,
            "lastMileTravel": 11.7,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "11.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "213358",
          "name": "Apni Rasoi Family Dhaba",
          "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
          "locality": "Vishnu Nagar",
          "areaName": "Parasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Indian",
            "South Indian",
            "Chinese"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "35024",
          "avgRatingString": "4.0",
          "totalRatingsString": "1.2K+",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 13.9,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "13.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 21:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-rest213358",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "151518",
          "name": "Bakery World",
          "cloudinaryImageId": "mt2aggiscfl3yviatwng",
          "locality": "Parasia Road",
          "areaName": "Parasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Ice Cream",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "40363",
          "avgRatingString": "4.3",
          "totalRatingsString": "241",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 12.6,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "12.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1099",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "658210",
          "name": "The Fusion Lounge",
          "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          "locality": "Triloki nagar",
          "areaName": "Railway Station",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "395453",
          "avgRatingString": "4.1",
          "totalRatingsString": "275",
          "sla": {
            "deliveryTime": 72,
            "lastMileTravel": 10.2,
            "serviceability": "SERVICEABLE",
            "slaString": "70-75 mins",
            "lastMileTravelString": "10.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "898041",
          "name": "Thikana",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
          "locality": "RANGLA PUNJAB PARASIA ROAD",
          "areaName": " ADARSH NAGAR CHHINDWARA",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 3.6,
          "parentId": "215738",
          "avgRatingString": "3.6",
          "totalRatingsString": "5",
          "sla": {
            "deliveryTime": 65,
            "lastMileTravel": 13.6,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "13.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-17 23:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-e7fd851c-149a-4186-8e1d-48169f9f84f6"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
];


const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>  
                <RestaurantCard resData={resList[2]}/>  
                <RestaurantCard resData={resList[3]}/>  
                <RestaurantCard resData={resList[4]}/>  
                <RestaurantCard resData={resList[5]}/>  
                <RestaurantCard resData={resList[6]}/>  
                <RestaurantCard resData={resList[7]}/>      */}
                             {/* prop    argument   */}

                { //By using map we can reduce our code
                    resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>  {/* Componenet Composition */}
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);