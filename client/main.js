import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.Michael.events({
   'click .js-like'(event, instance) {
  	console.log("YAY");
  	var profID = this._id;
  	var numLikes = userDB.findOne({_id:  profID}).like;
  	if (!numLikes) {
  		numLikes = 0;
  	
  	}
  	numLikes = numLikes + 1;
  	console.log("you have",numLikes);
  	userDB.update ({_id:profID}, {$set:{'like':numLikes}});
    },

	

	'click .js-dislike'(event, instance) {
  	console.log("OoF");
  	var profID = this._id;
  	var numDislikes = userDB.findOne({_id:  profID}).dislike;
  	if (!numDislikes) {
  		numDislikes = 0;

  	}
  	numDislikes = numDislikes + 1;
  	console.log("you have",numDislikes);
  	userDB.update ({_id:profID}, {$set:{'dislike':numDislikes}});

  	},
 	'click .js-delete'(event, instance){ 
 		var profID = this._id;
 		$("#" + profID).fadeOut("slow", "swing",function () {
 		userDB.remove({_id: profID});
		});
		$("#exampleModal2").modal('hide');
 	},
 	'click .js-editProfile'(event, instance){
 		$("#exampleModal2").modal('show');
 	}
});

Template.Michael.helpers({
	profAll(){
		return userDB.find({});
 


	}
}); 


Template.addProfile.events({ 
 'click .js-saveProfile'(event, instance) { 

 	var fName = $("#exampleModal input[name='FirstName']").val();
 	var lName = $("#exampleModal input[name='LastName']").val();
 	var Imagepic = $("#exampleModal input[name='Imagepic']").val();
 	if(Imagepic ==""){
 		Imagepic ="bear.gif";
 	}
 	
 	console.log("The first name is",fName)
	console.log("The Last name is",lName)
 	console.log("The Image",Imagepic)

	$("#exampleModal input[name='FirstName']").val('');
	$("#exampleModal input[name='LastName']").val('');
	$("#exampleModal input[name='Imagepic']").val('');
	
	$("#exampleModal").modal("hide");
	userDB.insert({'FirstName':fName, 'LastName':lName, 'Imagepic':Imagepic});
  },
});
