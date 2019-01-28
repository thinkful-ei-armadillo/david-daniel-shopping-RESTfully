/* eslint-disable quotes */
'use strict';
/* global $ api*/

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-daniel';
  const getItems = function(){
    return fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(data => data);
  };
  const createItem = function(name) {
    const newItem = JSON.stringify({
      name: name
    });
    return fetch(`${BASE_URL}/items`, { 
      method: "POST", 
      headers: new Headers({ 'Content-Type': 'application/json' }), 
      body: newItem })
      .then(response => response.json())
      .then(data => data);
  };
  const updateItem = function( id, updateData ) {
    // updateData is in this format { name: newName }
    return fetch( `${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( updateData )
    });
  };
  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem
  };
})();