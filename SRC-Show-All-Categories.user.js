// ==UserScript==
// @name         SRC-Show-All-Categories
// @namespace    https://github.com/OceanBagel
// @version      1.0.2
// @description  Userscript for showing all categories on speedrun.com
// @author       OceanBagel
// @match        https://www.speedrun.com/*
// @icon         https://drive.google.com/uc?id=1evLQo0tDq48SnI_tLlXEeofU_kQ5Mcbd&export=download
// @homepageURL  https://github.com/OceanBagel/SRC-Show-All-Categories
// @downloadURL  https://github.com/OceanBagel/SRC-Show-All-Categories/raw/main/SRC-Show-All-Categories.user.js
// @updateURL    https://github.com/OceanBagel/SRC-Show-All-Categories/raw/main/SRC-Show-All-Categories.user.js

// ==/UserScript==
function getElementsStartsWithId( id ) {
  var children = document.body.getElementsByTagName('*');
  var elements = [], child;
  for (var i = 0, length = children.length; i < length; i++) {
    child = children[i];
    if (child.id.substr(0, id.length) == id) {
      elements.push(child);
    }
  }
  return elements;
}


(function() {
    'use strict';
    var miscElement = document.body.getElementById("miscellaneous")
    miscElement.style.display = "block"
    var catElements = getElementsStartsWithId("category")
    for (var i = 0, length = catElements.length; i < length; i++) {
        catElements[i].style.display = "block"
    }
    var caretElements = getElementsStartsWithId("pending-caret")
    for (var j = 0, length2 = catElements.length; j < length2; j++) {
        caretElements[j].style.display = "none"
    }
})();
