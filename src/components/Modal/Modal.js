import React from 'react';
import styles from './Modal.module.scss';
import {Button} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../appStore/actionCreators/modalActionCreator';
import { removeCartItemAC } from '../../appStore/actionCreators/cartActionCreator';

const Modal= () => {
    const {isOpen, name, id} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const closeModal = () => dispatch(setIsOpenModal(false))
    if (!isOpen) return null;

    return (
         <div className={styles.root}>
             <div className={styles.background} onClick={closeModal}/>
             <div className={styles.content}>
                 <div className={styles.closeWrapper}>
                     <Button onClick={closeModal} className={styles.btn} variant="contained" color="error">X</Button>
                 </div>
                 <h2>Do you really want to delete {name} ?</h2>
                 <div className={styles.buttonContainer}>
                     <Button
                         onClick={() =>{
                            dispatch(removeCartItemAC({id}))
                            dispatch(setIsOpenModal(false))
                         }
                     } variant="contained" color="error">Yes</Button>
                     <Button onClick={closeModal} variant="contained">No</Button>
                 </div>
             </div>
         </div>
    );
};

export default Modal;