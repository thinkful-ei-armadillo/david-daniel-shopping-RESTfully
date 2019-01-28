/* eslint-disable quotes */
'use strict';
/* global $ api store*/

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-daniel';
  
  const listApiFetch =  function(...args) {
    return fetch( ...args )
      .then(res => {
        if (!res.ok) store.errorHandling = true;
        return res.json();
      })
      .then(data => {
        if (store.errorHandling) throw new Error(data.message);
        return data;
      })
      .catch( err => alert(err.message));
  };
  
  
  const getItems = function(){
    return listApiFetch( `${BASE_URL}/items` );
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({
      name: name
    });
    return listApiFetch( `${BASE_URL}/items`, { 
      method: "POST", 
      headers: new Headers({ 'Content-Type': 'application/json' }), 
      body: newItem } );
  };
  const updateItem = function( id, updateData ) {
    return listApiFetch( `${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( updateData )
    } );
  };
  const deleteItem = function (id){
    return listApiFetch( `${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });
  };
  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem
  };
})();