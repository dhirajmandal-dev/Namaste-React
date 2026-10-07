import { IMAGE_URL } from "../utils/constant";

const ResCardContainer = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, deliveryTime } = resData;

  return (
    <div className="card">
      <div className="res-img">
        <img src={IMAGE_URL} alt="res-image" />
      </div>
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisines">{cuisine?.join(", ")}</h4>
      <h4 className="res-rating">{rating}</h4>
      <h4 className="res-rating">{deliveryTime}</h4>
    </div>
  );
};

export default ResCardContainer;
