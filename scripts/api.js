'use strict';
/* global $ api*/

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-daniel';
  const getItems = function(){
    fetch(`${BASE_URL}/items`)
      .then(response => response.json())
      .then(data => console.log(data));
  };
  return {
    getItems: getItems
  };
})();