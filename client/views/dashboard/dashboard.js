Meteor.subscribe('patientScore');
Meteor.subscribe('patient');
Meteor.subscribe('patientDateFlag');

var data = [
	{'name': 'ABCA', last_visited: '12-10-2014', game_this_week: '42', spatial: '8.8%', memory: '-7.3%', attention: '5.8%'},
	{'name': 'PQRS', last_visited: '12-10-2014', game_this_week: '42', spatial: '8.8%', memory: '-7.3%', attention: '5.8%'},
	{'name': 'PQRS', last_visited: '12-10-2014', game_this_week: '42', spatial: '8.8%', memory: '-7.3%', attention: '5.8%'},
	{'name': 'XYZS', last_visited: '12-10-2014', game_this_week: '42', spatial: '8.8%', memory: '-7.3%', attention: '5.8%'}

];


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});

Template.dashboard.helpers({
	patientData: function(){
		return patient_scores;
	}
})

var patient_scores = [];

Template.dashboard.onCreated(function(){
	var patient = Patient.find({}).fetch();
	//console.log(patient);
	for(var i=0; i<patient.length; i++){
		var p = {};
		p.name = patient[i].name;
		p.spatial = 0;
		p.memory = 0;
		p.attention = 0;
		p.num_of_games = 0;

		var id = patient[i].patient_id;
		var patient_score = PatientScore.find({patient_id: id}).fetch();
		var no_of_scores = patient_score.length;
		p.num_of_games = no_of_scores;
		
		for(var j=0; j<patient_score.length; j++){
			p.spatial += patient_score[j].spatial_score;
			p.memory += patient_score[j].memory_score;
			p.attention += patient_score[j].attention_score;
		}

		if(no_of_scores>0){
		   p.spatial = (p.spatial / no_of_scores).toFixed(2);
		   p.memory = (p.memory / no_of_scores).toFixed(2);
		   p.attention = (p.attention / no_of_scores).toFixed(2);
		}
		patient_scores.push(p);
	}
	console.log(patient_scores);
});


Template.dashboard.onRendered(function(){
	new Chartist.Line('#graph', {
	  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	  series: [
	    [40, 100, 50, 80, 51, 10, 40],
	    [50, 40, 60, 70, 30, 23, 21],
	    [65, 60, 55, 78, 69, 48, 55],
	    [90, 78, 93, 78, 70, 60, 66],
	    [78, 60, 45, 78, 69, 45, 55]
	  ]
	}, {
	  fullWidth: true,
	  chartPadding: {
	    right: 40
	  }
	});

});

Template.dashboard.events({

});

