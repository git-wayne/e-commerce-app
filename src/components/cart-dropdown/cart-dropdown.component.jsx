import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
        {}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
