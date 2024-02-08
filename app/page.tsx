import Footer from "./components/Footer/Footer";
import "./page.module.scss";
import Category from "./sections/Category/Category";
import Companies from "./sections/Companies/Companies";
import Contacts from "./sections/Contacts/Contacts";
import Guide from "./sections/Guide/Guide";
import Home from "./sections/Home/Home";
import News from "./sections/News/News";
import Products from "./sections/Products/Products";

export default function Page() {
  return (
    <>
      <Home/>
      <Products/>
      <Guide/>
      <Category/>
      <Companies/>
      <News/>
      <Contacts/>
    </>
  );
}
