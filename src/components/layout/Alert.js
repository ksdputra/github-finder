import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../../actions/alertActions';
import { Alert as AlertUI } from '@material-ui/lab';

export const Alert = () => {

  const dispatch = useDispatch()

  const alert = useSelector(state => state.alert)

  return (
    alert !== null && (
      <AlertUI severity={alert.type} onClose={() => dispatch(removeAlert())}>{alert.msg}</AlertUI>
    )
  );
};

export default Alert