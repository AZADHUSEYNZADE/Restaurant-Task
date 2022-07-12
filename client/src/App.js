import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Foods from "./pages/Foods";
import Waiters from "./pages/Waiters";
import NewWaiter from "./pages/Waiters/create";
import Home from "./pages/Home";
import OrderDetail from "./pages/Orders/details";
import NewOrder from "./pages/Orders/create";
import Orders from "./pages/Orders";
import NewFood from "./pages/Foods/create";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="orders">
          <Route path="" index element={<Orders />} />
          <Route path="new" element={<NewOrder />} />
          <Route path=":id" element={<OrderDetail />} />
        </Route>

        <Route path="foods">
          <Route path="" element={<Foods />} />
          <Route path="new" element={<NewFood />} />
        </Route>

        <Route path="waiters">
          <Route path="" element={<Waiters />} />
          <Route path="new" element={<NewWaiter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
