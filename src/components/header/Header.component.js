import React from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from  "./Header.style"
import {default as CartIcon} from "../cart-icon/CartIcon.container";
import {default as CartDropdown} from "../cart-dropdown/CartDropdown.container";
import { auth } from "../../service/firebase/Firebase.utils";


function Header({currentUser, hidden }){
   
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
        <OptionLink OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden  ? null : <CartDropdown />}
  </HeaderContainer>
   )
};

export default Header;
