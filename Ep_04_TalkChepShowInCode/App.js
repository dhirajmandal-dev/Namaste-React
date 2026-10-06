import ReactDOM from "react-dom/client";

// header
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KMq_H3wojpd9e7gv-HuFDOENo8slhPQjoiC2DpiIIw&s=10"
          alt="logo"
        />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCardContainer = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, deliveryTime } = resData;

  return (
    <div className="card">
      <div className="res-img">
        <img
          src="https://static.apps.ristaapps.com/b/b646d853-c880-4b1f-a032-202f2710162a/images/68428f5710badf1a6227f1c2/original.jpg"
          alt="res-image"
        />
      </div>
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisines">{cuisine?.join(", ")}</h4>
      <h4 className="res-rating">{rating}</h4>
      <h4 className="res-rating">{deliveryTime}</h4>
    </div>
  );
};

const restaurantsList = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: ["North Indian", "Chinese"],
    rating: 4.5,
    deliveryTime: "25-30 min",
    priceForTwo: 450,
    location: "Pune",
    isVeg: false,
    image: "https://example.com/spice-garden.jpg",
  },
  {
    id: 2,
    name: "Green Leaf",
    cuisine: ["South Indian", "Pure Veg"],
    rating: 4.2,
    deliveryTime: "20-25 min",
    priceForTwo: 300,
    location: "Pune",
    isVeg: true,
    image: "https://example.com/green-leaf.jpg",
  },
  {
    id: 3,
    name: "Pizza Hub",
    cuisine: ["Pizza", "Italian"],
    rating: 4.6,
    deliveryTime: "30-35 min",
    priceForTwo: 550,
    location: "Mumbai",
    isVeg: false,
    image: "https://example.com/pizza-hub.jpg",
  },
  {
    id: 4,
    name: "Burger Singh",
    cuisine: ["Burgers", "Fast Food"],
    rating: 4.1,
    deliveryTime: "20-25 min",
    priceForTwo: 350,
    location: "Nagpur",
    isVeg: false,
    image: "https://example.com/burger-singh.jpg",
  },
  {
    id: 5,
    name: "Maharaja Thali",
    cuisine: ["North Indian", "Rajasthani"],
    rating: 4.7,
    deliveryTime: "35-40 min",
    priceForTwo: 500,
    location: "Pune",
    isVeg: true,
    image: "https://example.com/maharaja-thali.jpg",
  },
  {
    id: 6,
    name: "Dragon Bowl",
    cuisine: ["Chinese", "Asian"],
    rating: 4.3,
    deliveryTime: "25-30 min",
    priceForTwo: 600,
    location: "Mumbai",
    isVeg: false,
    image: "https://example.com/dragon-bowl.jpg",
  },
  {
    id: 7,
    name: "Dosa Corner",
    cuisine: ["South Indian"],
    rating: 4.4,
    deliveryTime: "15-20 min",
    priceForTwo: 250,
    location: "Nagpur",
    isVeg: true,
    image: "https://example.com/dosa-corner.jpg",
  },
  {
    id: 8,
    name: "Tandoori Nights",
    cuisine: ["North Indian", "Mughlai"],
    rating: 4.8,
    deliveryTime: "30-35 min",
    priceForTwo: 700,
    location: "Pune",
    isVeg: false,
    image: "https://example.com/tandoori-nights.jpg",
  },
  {
    id: 9,
    name: "Cafe Coffee House",
    cuisine: ["Cafe", "Desserts", "Beverages"],
    rating: 4.0,
    deliveryTime: "15-20 min",
    priceForTwo: 400,
    location: "Mumbai",
    isVeg: true,
    image: "https://example.com/cafe-coffee-house.jpg",
  },
  {
    id: 10,
    name: "Biryani Express",
    cuisine: ["Biryani", "Hyderabadi"],
    rating: 4.6,
    deliveryTime: "25-30 min",
    priceForTwo: 500,
    location: "Pune",
    isVeg: false,
    image: "https://example.com/biryani-express.jpg",
  },
];

// body
const BodyContainer = () => {
  return (
    <div className="body-container">
      <div className="search-box">
        <p>Search</p>
      </div>
      <div className="card-container">
        {restaurantsList.map((restaurants) => (
          <ResCardContainer key={restaurants.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <BodyContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
