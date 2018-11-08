import axios from 'axios';
import * as types from './actionTypes';
//const keys = require("../config/keys");

export function addMerchant(merchant) {
    // console.log(merchant);
    // return dispatch => {
    //     axios
    //         .post(keys.ServicePath + "/api/AddMerchant", merchant)
    //         .then(res => {
    //             if (res.data.Success) {
    //                 dispatch(setMerchants(res.data.data));
    //             }
    //         })
    //         .catch(e => {
    //             console.log("catch error", JSON.stringify(e));
    //         });

    // }

    return { type: types.ADD_MERCHANT, merchant};
}

export function editMerchant(merchant) {
    return { type: types.EDIT_MERCHANT, merchant};
}

export function deleteMerchant(id) {
    return { type: types.DELETE_MERCHANT, id};
}

export function setMerchants(merchants) {
    return { type: types.SET_MERCHANTS, merchants};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}

export function getMerchants() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
       //  axios
       //    .get(keys.ServicePath+"/api/GetMerchantList")
          .then(response => {
              console.log(response.data)
            dispatch(setMerchants(response.data));
            dispatch(ajaxLoading(false));
          })
          .catch(error => {
            console.error(error);
            dispatch(ajaxLoading(false));
          });
    };
}