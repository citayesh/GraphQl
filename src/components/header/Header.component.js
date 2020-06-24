import React from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../firebase/Firebase.utils";
import {useSelector } from 'react-redux';
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selecetCurrentUser} from "../../redux/user/user.selector"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from  "./Header.style"
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

function Header(){
   const currentUser=useSelector(state=>selecetCurrentUser(state))
   const hidden=useSelector(state=>selectCartHidden(state)) 
   return (
   <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink OptionLink as='div' onClick={() => auth.signOut()
        }>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
   )
};

export default Header;
