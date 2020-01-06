import { connect } from 'react-redux';

import Header from '../components/Header';

function showBackButton(pathname) {
  return pathname !== '/' ? true : false
}
  
function showCartButton(pathname) {
  return !pathname.includes('cart') ? true : false
};

const HeaderContainer = connect((state, ownProps) => (
  {
    children: ownProps.children,
    cartItems: state.cart.length,
    backButton: showBackButton(ownProps.location.pathname),
    cartButton: showCartButton(ownProps.location.pathname)  
  }
))(Header);

export default HeaderContainer;
