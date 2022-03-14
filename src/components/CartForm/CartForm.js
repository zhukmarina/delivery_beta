import React from 'react';
import styles from './CartForm.module.scss';
import {Formik,Form} from "formik";
import CustomInput from '../CustomInput';
import {Button} from "@mui/material";
import * as yup from "yup";
import { removeFromLS } from '../../utils/localStorage';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../appStore/actionCreators/modalActionCreator';

const CartForm = ()=>{
    

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required('Нужно ввести имя')
            .min(2, 'Минимум 2 символа')
            .max(24, 'Максимум 24 символа'),
        lastname :  yup.string()
        .required("Введите фамилию"),   
        age: yup.string()
            .required('Нужно ввести возраст')
            .matches(/[0-9]/, 'Только цифры'),
        direction: yup.string().required('Введите адресс')
    });


    const initialValues = {
        name: '',
        lastname: '',
        age: '',
        direction: '',
        
    }

    const handleSubmit = (val, actions) => {
        removeFromLS("cart")
        console.log(val)
        actions.resetForm();
        actions.setSubmitting(true)
        setTimeout(()=>{
            actions.setSubmitting(false);
        },2000)
        
    }

    return (
        <>
            <h1>Checkout order</h1>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                {({ isSubmitting}) => {
                    return (
                        <Form>
                            <CustomInput
                                name='name'
                                label='name'
                                type='text'
                                
                            />
                            <CustomInput
                                name='lastname'
                                label='lastname'
                                type='text'
                            />
                            <CustomInput
                                name='age'
                                label='age'
                                type='text'
                            />

                            <CustomInput
                                name='direction'
                                label='direction'
                                type='text'
                            />

                            
                            <Button  disabled={isSubmitting} variant="contained" type='submit' >Checkout</Button>
                        </Form>)
                }}


            </Formik>

        </>
    )
}

export default CartForm;