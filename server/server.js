Meteor.startup(function () {
        //PatientScore.remove({});
        //Patient.remove({});
       


  //       var date = new Date()
  //   	PatientScore.insert({
		// 	patient_id: 'fHkMy9eiyf4zdsZ9G',
		// 	date_created: date,
		// 	spatial_score: 10,
		// 	memory_score: 20,
		// 	attention_score: 30
		// });

  //   	date = new Date(date);
  //   	date.setDate(date.getDate()+1);

		// PatientScore.insert({
		// 	patient_id: 'fHkMy9eiyf4zdsZ9G',
		// 	date_created: date,
		// 	spatial_score: 50,
		// 	memory_score: 12,
		// 	attention_score: 11
		// });

		// date = new Date(date);
  //   	date.setDate(date.getDate()+1);
		// PatientScore.insert({
		// 	patient_id: 'fHkMy9eiyf4zdsZ9G',
		// 	date_created: date,
		// 	spatial_score: 50,
		// 	memory_score: 12,
		// 	attention_score: 11
		// });
     
    		
});




Meteor.publish('patientScore', function(){
	return PatientScore.find({});
});


Meteor.publish('patient', function(){
	return Patient.find({});
});

Meteor.publish('patientDateFlag', function(){
	return PatientDateFlag.find({});
});



Meteor.methods({
	'register': function(user) {
		id = Accounts.createUser({
	        email: user.email,
	        password: user.password,
	        profile: { name: user.name }
     	});
     	
     	if(user.role == 'user'){
     		PatientDateFlag.insert({
				patient_id: id,
				name: user.name,
				alert: false
			});

			 Patient.insert({
	        	patient_id: id,
	        	name: user.name,
       		 });
     	}

        Roles.addUsersToRoles(id, user.role);
	},
	'insertPatientScore': function(id, date, spatial, memory, attention){
		PatientScore.insert({
			patient_id: id,
			date_created: date,
			spatial_score: spatial,
			memory_score: memory,
			attention_score: attention
		});
	},
	'updateAlertFlag': function(id, flag){
		console.log(id);
		PatientDateFlag.update(id,
			{$set: {alert: flag}}
		);
	}
	
});