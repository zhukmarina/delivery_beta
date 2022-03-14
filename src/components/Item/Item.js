import React from "react";
import styles from "./Item.module.scss";
import { Button } from "@mui/material";
import {addCartItemAC} from "../../appStore/actionCreators/cartActionCreator"
import { setIsFavoriteCreator } from "../../appStore/actionCreators/actionCreator"
import { ReactComponent as AddToFavorite } from "../../assets/star-plus.svg";
import { ReactComponent as RemoveFromFavorite } from "../../assets/star-remove.svg";
import { useDispatch } from "react-redux";


const Item = (props) => {
  const { url, name, price, id, isFavorite  } = props;
// console.log(isFavorite)
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <div
        className={styles.favourite}
        onClick={() => dispatch(setIsFavoriteCreator({ name }))}>
        {!isFavorite ? <AddToFavorite /> : <RemoveFromFavorite />}
      
      </div>

      <img className={styles.img} src={url} alt={name}></img>
      <span>{name}</span>
      <span>{price}</span>
      <Button variant="contained" onClick={() =>{
        dispatch(addCartItemAC({id , name }))
        console.log(name)
      }
       
        
        }>
        Add to card
      </Button>
    </div>
  );
};

export default Item;
