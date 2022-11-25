import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToast } from '../../redux/actions';
import ToastStyle from '../../components/Toast';
import ToastWrapper from '../../components/ToastWrapper';
import PortalWrapper from '../PortalWrapper';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);

  const onExpire = () => dispatch(deleteToast(toast.id));

  return (
    <PortalWrapper id={'portalElemnet'}>
      <ToastWrapper>
        <ToastStyle isSuccess={toast.isSuccess} key={toast.id} onExpire={onExpire}>
          {toast.message}
        </ToastStyle>
      </ToastWrapper>
    </PortalWrapper>
  );
};

export default Toast;
