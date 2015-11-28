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
        'click #question2': function() {
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

        Template.home.events({

            //if button 1 is clicked. save the session and --> Router.go('/question2')
    'click .clickedButton1': function() {
      //if clicked, return the color
      Session.set('var1', 1);
      Router.go('/question2');
    },
    'click .clickedButton2': function() {
      //if clicked, return the color
      Session.set('var2', 1);
      Router.go('/question2');
    },
    'click .clickedButton3': function() {
      //if clicked, return the color
      Session.set('var3', 1);
      Router.go('/question2');
    },
    'click .clickedButton4': function() {
      //if clicked, return the color
      Session.set('var4', 1);
      Router.go('/question2');
    },
    'click .clickedButton5': function() {
      Session.set('var5', 1);
      Router.go('/question2');
    },
    'click .clickedButton6': function() {
      Session.set('var6', 1);
      Router.go('/question2');
    },
    'click .clickedButton7': function() {
      Session.set('var7', 1);
      Router.go('/question2');
    },
    'click .clickedButton8': function() {
      Session.set('var8', 1);
      Router.go('/question2');
    },
    'click .clickedButton9': function() {
      Session.set('var9', 1);
      Router.go('/question2');
    }



    });

