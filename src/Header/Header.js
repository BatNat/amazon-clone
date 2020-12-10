import React from 'react'
import  './Header.styled.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';

function Header() {
	const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
                {/* Logo  */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Sign in</span>
                    <span className="header__optionLineTwo">Account & Lists</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
		<span className="header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}
export default Header