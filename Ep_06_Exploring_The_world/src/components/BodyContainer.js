import ResCardContainer from "./ResCardContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// body
const BodyContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  function HandleSearch() {
    const search = searchText.toLocaleLowerCase();
    const result = restaurants.filter((res) => {
      const { name, cuisines, avgRating } = res?.info;
      return (
        name.toLowerCase().includes(search) ||
        cuisines.some((cuisine) => cuisine.toLowerCase().includes(search)) ||
        avgRating?.toString().includes(search)
      );
    });
    setFilteredRestaurants(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.529180108889875&lng=73.87290381169781&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurant =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurants(restaurant);
    setFilteredRestaurants(restaurant);
  };

  // conditional rendering with if statement 
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // conditional rendering with ternary operator
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-box">
        <input
          className="input-box"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button className="search-btn" onClick={HandleSearch}>
          Search
        </button>
      </div>

      <div className="card-container">
        {filteredRestaurants.map((restaurants) => (
          <ResCardContainer key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
