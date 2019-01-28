/* eslint-disable quotes */
'use strict';
/* global $ api store*/

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-daniel';
  const getItems = function(){
    return fetch(`${BASE_URL}/items`)
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
  const createItem = function(name) {
    const newItem = JSON.stringify({
      name: name
    });
    
    return fetch(`${BASE_URL}/items`, { 
      method: "POST", 
      headers: new Headers({ 'Content-Type': 'application/json' }), 
      body: newItem })
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
  const updateItem = function( id, updateData ) {
    
    return fetch( `${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( updateData )
    })
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
  const deleteItem = function (id){
    return fetch( `${BASE_URL}/items/${id}`, {
      method: "DELETE",
      
    })
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
  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem
  };
})();