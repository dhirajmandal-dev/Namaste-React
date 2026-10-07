import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";

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
