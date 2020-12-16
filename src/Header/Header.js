import React from 'react'
import  './Header.styled.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to={!user &&  '/'}>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to='/login'>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello, 
                        {user ? 'Sign In' : 'Sign Out'}</span>
                    <span className="header__optionLineTwo">Account & Lists</span>
                </div>
                </Link>
              

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
