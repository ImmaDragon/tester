Meteor.subscribe('patientScore');
Meteor.subscribe('patient');
Meteor.subscribe('patientDateFlag');

var alerts = [];

Template.navigation.onCreated(function(){
	var dateFlags = PatientDateFlag.find({alert:true}).fetch();
});


Template.navigation.helpers({
	'no_of_alerts': function(){
		return PatientDateFlag.find({alert:true}).count();
	},
	'patientAlert': function(){
		return PatientDateFlag.find({alert:true});
	}
})