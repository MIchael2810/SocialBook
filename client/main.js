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

Template.Michael.helpers({
	profFname(){
		return userDB.findOne({}).FirstName;


	}
}); 


Template.addProfile.events({ 
 'click .js-saveProfile'(event, instance) { 

 	var fName = $("#exampleModal input[name='FirstName']").val();
 	var lName = $("#exampleModal input[name='LastName']").val();
 	var Image = $("#exampleModal input[name='Image']").val();
 	
 	console.log("The first name is",fName)
	console.log("The Last name is",lName)
 	console.log("The Image",Image)

	$("#exampleModal input[name='FirstName']").val('');
	$("#exampleModal input[name='LastName']").val('');
	$("#exampleModal input[name='Image']").val('');
	
	$("#exampleModal").modal("hide");
	userDB.insert({'FirstName':fName, 'LastName':lName, 'Image':Image});
  },
});