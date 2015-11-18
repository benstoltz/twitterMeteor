//if (Meteor.isClient) {
//  // counter starts at 0
//  Session.setDefault('counter', 0);
//
//  Template.hello.helpers({
//    counter: function () {
//      return Session.get('counter');
//    }
//  });
//
//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set('counter', Session.get('counter') + 1);
//    }
//  });
//}

//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//      Twit = new TwitMaker({
//          consumer_key: "eqOV0Iu2M1114ILJW87nHMoxX",
//          consumer_secret: "8Gg7KoKpcRJlADXWRXb78PaaHcx6KAIU4Q4sxbeatC0Bpyf9gh",
//          access_token: "477055521-PpCBhLezySPX8CWmSCyUxRmQU7AMZyB5PqyvPNJF",
//          access_token_secret: "PdPH2nrikeBGiHlfg3vm2dWys6knZSQYYMvnF5xFKy14G"
//      });
//
//      var stream = Twit.stream('statuses/sample');
//
//      stream.on('tweet', function (tweet) {
//          console.log(tweet);
//      })
//
//
//
//
//  });

