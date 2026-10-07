import ResCardContainer from "./ResCardContainer";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

// body
const BodyContainer = () => {


  const [searchText, setSearchText] = useState("");
  const [searchBtn, setSearchBtn] = useState(restaurantsList);


  function HandleSearch() {
    const search = searchText.toLocaleLowerCase();
    const result = restaurantsList.filter((res) => {
      return (
        res.name.toLowerCase().includes(search) ||
        res.cuisine.some((cusine) => cusine.toLowerCase().includes(search)) ||
        res.rating.toString().includes(search)
      );
    });
    setSearchBtn(result);
  }


  return (
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
        {searchBtn.map((restaurants) => (
          <ResCardContainer key={restaurants.id} resData={restaurants} />
        ))}
      </div>

    </div>
  );
};

export default BodyContainer;
