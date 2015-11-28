Meteor.subscribe('patientScore');
Meteor.subscribe('patient');
Meteor.subscribe('patientDateFlag');

Transitioner.transition({
  fromRoute: 'home',
  toRoute: 'question2',
  velocityAnimation: {
    "in": 'transition.slideRightBigIn',
    out: 'transition.slideLeftBigOut'
  }
});


 //insert to the data base
    Template.home.events({
        'click #home': function() {
            var day = $("#day").val();
            var month = $("#month").val();
            var year = $("#year").val();

            var todaysDate = new Date();
            var todaysDay = todaysDate.getDay() + 1;
            var todaysMonth = todaysDate.getMonth() + 1;
            var todaysYear = todaysDate.getFullYear();

            var dateScore = 0;

            if(day == todaysDay){ dateScore += 20}
            if(month == todaysMonth){ dateScore += 40}
            if(year == todaysYear){ dateScore += 40}

            //Update the alert if score is below 60
            if(dateScore<60){

                var flagId = PatientDateFlag.find({patient_id: Meteor.userId()}).fetch()[0]._id;
                Meteor.call('updateAlertFlag', flagId, true, function(error, result){
                    if(error){
                        console.log(error);
                    }
                });

            }else{
                var flagId = PatientDateFlag.find({patient_id: Meteor.userId()}).fetch()[0]._id;
                Meteor.call('updateAlertFlag', flagId, false, function(error, result){
                    if(error){
                        console.log(error);
                    }
                });
            }

            Session.setPersistent('spatial_score', dateScore);
            Router.go('/question2');

        },
            //if button 1 is clicked. save the session and --> Router.go('/question2')
    'click .btn-one': function() {
      //if clicked, return the color
      Session.set('var1', 1);
      var getVar =Session.get('var1');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-two': function() {
      //if clicked, return the color
      Session.set('var2', 1);
      var getVar =Session.get('var2');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-three': function() {
      //if clicked, return the color
      Session.set('var3', 1);
      var getVar =Session.get('var3');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-four': function() {
      //if clicked, return the color
      Session.set('var4', 1);
      var getVar =Session.get('var4');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-five': function() {
      Session.set('var5', 1);
      var getVar =Session.get('var5');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-six': function() {
      Session.set('var6', 1);
      var getVar =Session.get('var6');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-seven': function() {
      Session.set('var7', 1);
      var getVar =Session.get('var7');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-eight': function() {
      Session.set('var8', 1);
      var getVar =Session.get('var8');
      console.log(getVar);
      Router.go('/question2');
    },
    'click .btn-nine': function() {
      Session.set('var9', 1);
      var getVar =Session.get('var9');
      console.log(getVar);
      Router.go('/question2');
    }



    });

