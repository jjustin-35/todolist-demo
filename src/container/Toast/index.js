import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToast } from '../../redux/actions';
import { ToastStyle } from '../../components/Toast';
import { ToastWrapper } from '../../components/ToastWrapper';
import { PortalWrapper } from '../PortalWrapper';

const Toast = () => {
    const dispatch = useDispatch();
    const toasts = useSelector(state => state.toast);

    useEffect(()=>{
        if(toasts.length !== 0){
            setTimeout(()=>{
                toasts.forEach(toast=>{
                    console.log(toast.id)
                    dispatch(deleteToast(toast.id));
                })
            }, 3000)
        }
    }, [toasts])
    return (
        <PortalWrapper id={"portalElemnet"}>
            <ToastWrapper>
                {toasts.map(toast => (
                    <ToastStyle isSuccess={toast.isSuccess} key={toast.id}>
                        {toast.message}
                    </ToastStyle>
                ))}
            </ToastWrapper>
        </PortalWrapper>
    )
};

Toast.propTypes = {
    toast: propTypes.any
}

export {Toast};