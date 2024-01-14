import { Fragment } from "react";

import classes from './Header.module.css';
import mealsImage from "../../assets/meal.jpeg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Happy Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            <div className={classes["main-image"]}>
                {/*   */} {/* */}
                <img src={mealsImage} alt="meal" /> {/* */}
                {/* */}
            </div>
        </Fragment>
    );
}

export default Header;