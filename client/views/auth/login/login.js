Template.login.events({
	'click .login-btn': function(e){
		 e.preventDefault();
		 var email = $('#login-email').val();
     var password = $('#login-password').val();

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err, result){
      	if(err){
      		console.log(err);
      	}else{
          var user = Meteor.user();
          if(Roles.userIsInRole(user, ['admin'])){
            return Router.go('/dashboard');
          }
      		return Router.go('/home');
      	}
      });
      return false;
	}
})