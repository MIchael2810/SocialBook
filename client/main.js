import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.Michael.events({
  'click .js-like'(event, instance) {
  	console.log("YAY");
  },
'click .js-dislike'(event, instance) {
  	console.log("OoF");
  },
});
