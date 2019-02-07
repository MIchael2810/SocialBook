import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.Michael.events({
  'click .js-like'(event, instance) {
  	console.log("YAY");
  },
'click .js-dislike'(event, instance) {
  	console.log("OoF");

  	},
});



Template.addProfile.events({ 
 'click .js-saveProfile'(event, instance) { 
 	var fName = $("#exampleModal input[name='FirstName']").val();
 	console.log("The first name is")

 	var lName = $("#exampleModal input[name='LasttName']").val();
 	console.log("The Last name is")

 	var Image = $("#exampleModal input[name='Image']").val();
 	console.log("The Image")


var fName = $("#exampleModal input[name='FirstName']").val('');
 	console.log("The first name is")

 	var lName = $("#exampleModal input[name='LasttName']").val('');
 	console.log("The Last name is")

 	var Image = $("#exampleModal input[name='Image']").val('');
 	console.log("The Image")

	$("#exampleModal").modal("hide");
  },
});