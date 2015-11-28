Router.configure({
  layoutTemplate: 'base'
});

//Check if user is login before allowing access to any page
//Allow Register and Login page to render anyways
Router.onBeforeAction(function() {
	if(! Meteor.userId()) {
	   this.render('login');
	   this.layout(null);
	}else{
	   this.next();
	}
},{ except: ['login', 'register'] });


Router.route('/home', function(){
  this.render('home');
  this.layout('layout');
})

Router.route('/', function(){
  this.render('home');
  this.layout('layout');
})


Router.route('/dashboard', function(){
  this.render('dashboard');
})

Router.route('/login', function(){
  this.render('login');
  this.layout(null);
})

Router.route('/question2', function(){
  this.render('question2');
  this.layout('layout');
})

Router.route('/question3', function(){
  this.render('question3');
  this.layout('layout');
})

Router.route('/score', function(){
  this.render('score');
  this.layout('layout');
})

Router.route('/register', function(){
  this.render('register');
  this.layout(null);
})