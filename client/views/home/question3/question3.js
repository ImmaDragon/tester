// Here is the top 3 songs played by mvps of this team


// 1)
// 2)
// 3)



// 1)
// 2)
// 3)

// plays song immediately of 1)
// plays song immediately of 2)
// plays song immediately of 3)

// also find a way to display profile data, data analytics data, position data what it is.



Template.question3.events({
//   questi
// Router.go('/question2');

'click #btn-one': function(){
console.log('PLAY YOUTUBE SONG');
        onYouTubeIframeAPIReady = function () {

        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player("player", {
            height: "200",
            width: "400",
            // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
            videoId: "LdH1hSWGFGU",
            // Events like ready, state change,
            events: {
                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();
                }
            }
        });
    };
    YT.load();

PlayersList.insert({name:'john connor'},
    {position:'left field'},
    {music:'If I were a boy'},
    {profile:'John connors was born in 1966 and did a lot of baseball and grew up to become the mlb of I dont care'}
    );

//var id = myGames.fetch()[0]._id;
//console.log(id);
//PlayersList.remove({id});



},
        'click #btn-two': function() {
      Router.go('/Position');
    },
        'click #btn-three': function() {
      Router.go('/Music');
    }



// if button one is clicked,
// players insert.
// name: "john connor"
// position: "left field"
// music: "if i were a boy"
// profile information: "somethign something someting etcetc. this is really long just like my jesus"





});
