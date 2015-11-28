Transitioner.transition({
  fromRoute: 'question3',
  toRoute: 'score',
  velocityAnimation: {
    "in": 'transition.slideRightBigIn',
    out: 'transition.slideLeftBigOut'
  }
});



Template.question3.events({
    'click .clickedButton1': function() {
      //if clicked, return the color
      var playerId = "blue";

      updateScore(playerId, Session.get('random color 1'));
      Session.set('random color 1',RandomColorCall());

    },

