import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import HikeCalculator from "./pages/HikeCalculator";
import Context from "./pages/ContextAPI/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./CartProject/Components/Product";
import Cart from "./CartProject/Components/Cart";
import Dashboard from "./CartProject/Components/Dashboard";
import RootLayout from "./CartProject/Components/RootLayout";
import Todos from "./Todos";
import UsersDashboard from "./useContext Hook/UsersDashboard";
import FlexBox from "./CSSStudy/FlexBox";
import WaterMarkRemoval from "./pages/RapidAPI/WaterMarkRemoval";
import LoginAuth from "./pages/LoginAuth";
import Posts from "./pages/Posts";
import MERN from "./MERN";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import LoginM from "./components/LoginM";
import Prime from "./MiniProjects/Prime";
import AddProduct from "./components/AddProduct";
import DemoScript from "./ReactUdemy/02-JS-REVIEW/DemoScript";
import Filter from "./MiniProjects/Filter";
import Second from "./MiniProjects/FrontEnd Mentor/Second";
import ProductList from "./components/ProductList";
import Arr from "./JScript/Arr";
import UpdateProduct from "./components/UpdateProduct";
import AppTable from "./MiniProjects/Table/AppTable";
import Pizza from "./ReactUdemy/pizza-menu/indexP";
import FirstReactApp from "./ReactUdemy/Steps/FirstReactApp";
import TimeCounter from "./ReactUdemy/Steps/TimeCounter";
import ListApp from "./ReactUdemy/Travel/ComponentsT/ListApp";
import FlashCards from "./ReactUdemy/FCards/FlashCards";
import Acc from "./ReactUdemy/Accordian/Acc";
import Fundamentals1 from "./JScript/Fundamentals1";
import CarouselComp from "./components/CarouselComp";
import FilterRecord from "./FilterRecord";

function App() {


  return (
    <>
      <div className="App">
        <FilterRecord />
      </div>
    </>
  );
}

export default App;
