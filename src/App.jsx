import Home from "./pages/home/Home";
import Food from "./pages/food/Food";
import User from "./pages/user/User";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import ProductDetail from "./pages/home/ProductDetail";
import RecipeDetail from "./pages/food/RecipeDetail";
import UserDetail from "./pages/user/UserDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/user" element={<User />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/recipes/:id" element={<RecipeDetail/>} />
          <Route path="/users/:id" element={<UserDetail/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
