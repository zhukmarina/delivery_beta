import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CartForm from "../../components/CartForm";
import CartItem from "../../components/CartItem";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  const { cartItems } = useSelector(({ cartItems }) => cartItems, shallowEqual);


  return (
    <>
      <h1 style={{ color: "white" }}>CART</h1>
      <div className={styles.cartContent}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cartItems.map((element) => {
            return (
              <CartItem
                key={element.id}
                url={element.url}
                count={element.count}
                price={element.price}
                name={element.name}
                id={element.id}
              />
            );
          })}
        </div>    
                     
        
        <div className={styles.cartForm}>
          <CartForm />
        </div>
        
      </div>
    </>
  );
};

export default CartPage;
