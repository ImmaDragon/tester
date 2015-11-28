Template.register.events({
	'click .register-btn': function(e){
		 e.preventDefault();
     user = {};
     user.name = $('#register-name').val();
		 user.email = $('#register-email').val();
     user.password = $('#register-password').val();
    

     if($('#admin').is(':checked')){
       user.role = "admin";
     }else{
      user.role = "user";
     }

     Meteor.call('register', user, function(error, result){
        if(!error){
          Router.go('/login');
        }
     });
	}

});