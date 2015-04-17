if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

      var api = Meteor.npmRequire('sunlight-congress-api');

      var success = function (data) {
          console.log(data);
      };

      api.init("9f64292279cc4c40aea72946979597a2");

      var votes = api.votes().filter("year", "2014").call(success);




  });
}
