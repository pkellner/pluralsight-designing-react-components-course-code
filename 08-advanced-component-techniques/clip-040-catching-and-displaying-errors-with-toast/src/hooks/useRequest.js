import React, { useReducer, useEffect } from 'react';
import requestReducer, { REQUEST_STATUS } from '../reducers/request';
import axios from 'axios';
import {
  GET_ALL_FAILURE,
  GET_ALL_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS,
  PUT
} from '../actions/request';
import { store } from 'react-notifications-component';

const useRequest = (baseUrl, routeName) => {
  const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await await axios.get(`${baseUrl}/${routeName}`, {
          cancelToken: signal.current.token,
        });
        dispatch({  
          type: GET_ALL_SUCCESS,
          records: response.data,
        });
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_ALL_FAILURE,
            error: e,
          });
      }
      }
    };
    fetchData();
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [baseUrl, routeName]);

  const propsLocal = {
    records,
    status,
    error,
    put: React.useCallback(async (record) => {
      try {
        dispatch({
          type: PUT,
          record,
        });
        await axios.put(`${baseUrl}/${routeName}/${record.id}`, record);
        dispatch({
          type: PUT_SUCCESS,
          record: record,
        });
        // store.addNotification({
        //   title: 'Favorite Status Updated',
        //   message: `Speaker: ${record.firstName} ${record.lastName}`,
        //   type: 'success',
        //   insert: 'top',
        //   container: 'top-right',
        //   animationIn: ['animated', 'fadeIn'],
        //   animationOut: ['animated', 'fadeOut'],
        //   dismiss: {
        //     duration: 3000,
        //     onScreen: true,
        //   },
        // });
      } catch (e) {
        dispatch({
          type: PUT_FAILURE,
          error: e,
        });
        store.addNotification({
          title: 'Favorite Status Update Failure.  Setting Back...',
          message: `Speaker: ${record.firstName} ${record.lastName}`,
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      }
    },[]),
  };
  return propsLocal;
};

export default useRequest;
