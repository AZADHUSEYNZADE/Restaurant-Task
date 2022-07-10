import "./App.css";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
import NewOrder from "./components/NewOrder";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Foods from "./components/Foods";
import NewMeal from "./components/NewMeal";
import Waiters from "./components/Waiters";
import NewWaiter from "./components/NewWaiter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/newMeal" element={<NewMeal />} />
        <Route path="/detail/:id" element={<OrderDetail />} />
        <Route path="/newOrder" element={<NewOrder />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/newWaiter" element={<NewWaiter />} />
      </Routes>
    </div>
  );
}

export default App;
