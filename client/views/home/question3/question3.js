var Circles = new Meteor.Collection('circles');

//score
var score = 0;
var time_played = 0;

var setScore = function(){
  console.log(time_played);
  if(time_played >=4){
    var s = score/time_played;
    Session.setPersistent('memory_score', s);
    score = 0;
    time_played = 0;
    Router.go('/score')
    // $(".game-content").hide();
    // $(".score-popup").hide();
    // $(".score-popup-zero").hide();
    // $("#question4").show();

  }
}

var updateScore = function(playerId, random_color){
    time_played++;
    if(playerId == random_color) {
       score += 100;
        $(".score-popup").show(800, function(){
            $(".score-popup").hide();
        });
    }
    else{
      $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
        });
    }
    setScore();
}

var RandomColorCall = function(){
  something=Random.choice(["blue","red","green","yellow","black"]);
  return something
};




Template.question3.helpers({
    random_color: function(){
        Session.set('random color 1', RandomColorCall());
        return Session.get('random color 1');
    }
});



Template.question3.events({
    'click .clickedButton1': function() {
      //if clicked, return the color
      var playerId = "blue";

      updateScore(playerId, Session.get('random color 1'));
      Session.set('random color 1',RandomColorCall());

    },
    'click .clickedButton2': function() {
      //if clicked, return the color
      var playerId = "red";
      
      updateScore(playerId, Session.get('random color 1'));

      Session.set('random color 1',RandomColorCall());

    },
        'click .clickedButton3': function() {
      //if clicked, return the color
      var playerId = "yellow";
     

      updateScore(playerId, Session.get('random color 1'));

      Session.set('random color 1',RandomColorCall());


    },
        'click .clickedButton4': function() {
      var playerId = "green";
  
      updateScore(playerId, Session.get('random color 1'));

      Session.set('random color 1',RandomColorCall());


    },
    'click .clickedButton5': function() {
      var playerId = "black";
      updateScore(playerId, Session.get('random color 1'));

      Session.set('random color 1',RandomColorCall());

    },

});

