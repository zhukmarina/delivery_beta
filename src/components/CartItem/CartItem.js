import React from 'react';
import styles from './CartItem.module.scss';
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setIsOpenModal, setModalParams } from '../../appStore/actionCreators/modalActionCreator';



const CartItem = (props) => {
  const {name, price, count, id, } = props;
  
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(setModalParams({ name, id, }));
    dispatch(setIsOpenModal(true));
}


    return (
        <div className={styles.countItem}>
          <div className={styles.wrapper}>
            
            {/* <img className={styles.img} src={url} alt={name}></img> */}
            <span>{name}</span>
            <div>
              <span>{price}</span>
            </div  >
            
          </div>

          <div className={styles.wrapper}>
              <span>{count}</span>             
              {/* <Button color="success" className={styles.btn} variant="contained">BUY</Button>  */}
              
                                        
              <Button onClick={handleDelete} color="error" className={styles.btn} variant="contained">DEL</Button>
              
          </div>
        </div>
    )
 
}

export default CartItem;