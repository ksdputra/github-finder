import React, { useContext } from 'react';
import { Alert as AlertUI } from '@material-ui/lab'
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <AlertUI severity={alert.type} onClose={alertContext.removeAlert}>{alert.msg}</AlertUI>
    )
  );
};

export default Alert