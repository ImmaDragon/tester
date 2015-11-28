Transitioner.transition({
  fromRoute: 'question2',
  toRoute: 'question3',
  velocityAnimation: {
    "in": 'transition.slideRightBigIn',
    out: 'transition.slideLeftBigOut'
  }
});


var RandomLetterCall = function(){
  something=Random.choice(["blue","green","grey","light_purple","orange"]);// "light purple","orange"
  return something
};


//score
var score = 0;
var time_played = 0;

var setScore = function(){
  if(time_played >=4){
    var s = score/time_played;
    Session.setPersistent('attention_score', s);
    $(".game-content").hide();
    $(".score-popup").hide();
    $(".score-popup-zero").hide();
    $("#question3").show();
    score = 0;
    time_played = 0;
  }
}

//variables
var randomLetter = new ReactiveDict;
var clickedLetter = new ReactiveDict;



Template.question2.helpers({
    random: function(){
      //set initial random letter
      randomLetter.set('randomLetter', RandomLetterCall());
      return randomLetter.get("randomLetter");
   }
});


  Template.question2.events({
    'click #question3': function(){
      Router.go('/question3');
    },
    'click .btn-one': function () {
      clickedLetter.set('clickedLetter','blue')

      if (clickedLetter.get('clickedLetter') == randomLetter.get('randomLetter')){
         score = score + 100;
         time_played++;
         $(".score-popup").show(800, function(){
            $(".score-popup").hide();
         });
      }else{
        time_played++;
         $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
         });
      }

      setScore();
      //set new random Letter
      randomLetter.set('randomLetter', RandomLetterCall());

    },
    'click .btn-two': function () {
      //after each click change the letter
      clickedLetter.set('clickedLetter','green')

      if (clickedLetter.get('clickedLetter') == randomLetter.get('randomLetter')){
         score = score + 100;
         time_played++;
         $(".score-popup").show(800, function(){
            $(".score-popup").hide();
         });
      }else{
        time_played++;
         $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
         });
      }
    
       setScore();
      //set new random Letter
      randomLetter.set('randomLetter', RandomLetterCall());
    },
    'click .btn-three': function () {
      //after each click change the letter
      clickedLetter.set('clickedLetter','grey')

      if (clickedLetter.get('clickedLetter') == randomLetter.get('randomLetter')){
         score = score + 100;
         time_played++;
         $(".score-popup").show(800, function(){
            $(".score-popup").hide();
         });
      }else{
        time_played++;
         $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
         });
      }     

       setScore();
      //set new random Letter
      randomLetter.set('randomLetter', RandomLetterCall());
    },
    
    'click .btn-four': function () {
      //after each click change the letter
      clickedLetter.set('clickedLetter','light_purple')

      if (clickedLetter.get('clickedLetter') == randomLetter.get('randomLetter')){
         score = score + 100;
         time_played++;
         $(".score-popup").show(800, function(){
            $(".score-popup").hide();
         });
      }else{
        time_played++;
         $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
         });
      }

       setScore();
      //set new random Letter
      randomLetter.set('randomLetter', RandomLetterCall());

    },
     
     'click .btn-five': function () {
      //after each click change the letter
      clickedLetter.set('clickedLetter','orange')

      
      if (clickedLetter.get('clickedLetter') == randomLetter.get('randomLetter')){
         score = score + 100;
         time_played++;
         $(".score-popup").show(800, function(){
            $(".score-popup").hide();
         });
      }else{
        time_played++;
         $(".score-popup-zero").show(500, function(){
            $(".score-popup-zero").hide();
         });
      }

       setScore();
      //set new random Letter
      randomLetter.set('randomLetter', RandomLetterCall());
      
    }
  });