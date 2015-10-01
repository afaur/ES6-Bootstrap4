// Add own String method for uppercasing
// the first char of each word in a string.
if (!String.prototype.titleize) {
  String.prototype.titleize = function() {
    'use strict';
    var finalWords = [];
    let words = String(this).split(" ");
    for (let word of words) {
      let firstChar = word.charAt(0).toUpperCase();
      finalWords.push(firstChar + word.substr(1));
    }
    return finalWords.join(" ");
  };
}

import {Person} from './model/Person';

global.app = function () {
  var tom = new Person('tom', 'jones');
  console.log(tom.firstName);
  console.log(tom.lastName);
  console.log(tom.fullName);
};

import {Alert} from './bootstrap/alert';
import {Button} from './bootstrap/button';
import {Carousel} from './bootstrap/Carousel';
import {Collapse} from './bootstrap/collapse';
import {Dropdown} from './bootstrap/dropdown';
import {Modal} from './bootstrap/modal';
import {Popover} from './bootstrap/popover';
import {Scrollspy} from './bootstrap/scrollspy';
import {Tooltip} from './bootstrap/tooltip';
