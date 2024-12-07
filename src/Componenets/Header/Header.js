import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch, BsCart3 } from "react-icons/bs";
import Lowerheader from "../Header/Lowerheader";
import { DataContext } from "../Dataprovider/DataProvider";
// header

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <header className={classes.header_container}>
        {/* Logo and delivery information */}
        <div className={classes.logo_container}>
          <Link to="/" className={classes.logo_link}>
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="Amazon Logo"
              className={classes.logo_image}
            />
          </Link>
          <div className={classes.delivery_info}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to </p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className={classes.search_container}>
          <select name="category" id="category-select">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search amazon product" />
          <BsSearch size={25} className={classes.search_icon} />
        </div>

        {/* Right-side links */}
        <div className={classes.order_container}>
          <Link to="#" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
            />
            <select name="language" id="language-select">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to="/auth" alt="">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </Link>

          <Link to="/Order">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BsCart3 size={35} />
            <span>{totalItem}</span> {/* Display totalItem value */}
          </Link>
        </div>
      </header>
      <Lowerheader />
    </section>
  );
}

export default Header;
