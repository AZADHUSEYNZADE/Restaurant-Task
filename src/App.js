import "./App.css";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
import NewOrder from "./components/NewOrder";
import Home from "./components/Home";
import { Routes, Route, useParams } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/detail/:id" element={<OrderDetail />} />
        <Route path="/newOrder" element={<NewOrder />} />
      </Routes>
    </div>
  );
}

export default App;
