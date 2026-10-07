import { IMAGE_URL } from "../utils/constant";

const ResCardContainer = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData.info;

  return (
    <div className="card">
      <div className="res-img">
        <img src={IMAGE_URL + cloudinaryImageId} alt="res-image" />
      </div>
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisines">{cuisines?.join(", ")}</h4>
      <h4 className="res-rating">{avgRating}</h4>
      <h4 className="res-rating">{deliveryTime}</h4>
    </div>
  );
};

export default ResCardContainer;
