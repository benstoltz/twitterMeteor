//
//Meteor.publish('twitter', function (query) {
//    var self = this;
//
//    try {
//        Twit = new TwitMaker({
//            consumer_key: "eqOV0Iu2M1114ILJW87nHMoxX",
//            consumer_secret: "8Gg7KoKpcRJlADXWRXb78PaaHcx6KAIU4Q4sxbeatC0Bpyf9gh",
//            access_token: "477055521-PpCBhLezySPX8CWmSCyUxRmQU7AMZyB5PqyvPNJF",
//            access_token_secret: "PdPH2nrikeBGiHlfg3vm2dWys6knZSQYYMvnF5xFKy14G"
//        });
//
//        var stream = Twit.stream('statuses/filter', { track: 'obama' });
//
//        stream.on('tweet', function (tweet) {
//            console.log(tweet.text);
//            _.each(tweet, function (tweet) {
//                var tweet = {
//                    text: tweet.text
//                };
//            })
//
//            self.added('tweets', Random.id(), tweet);
//        });
//
//        self.ready();
//    } catch(error) {
//        console.log(error);
//    }
//});


//var twitter = Meteor.startup(function () {
//    // code to run on server at startup
//    Twit = new TwitMaker({
//        consumer_key: "eqOV0Iu2M1114ILJW87nHMoxX",
//        consumer_secret: "8Gg7KoKpcRJlADXWRXb78PaaHcx6KAIU4Q4sxbeatC0Bpyf9gh",
//        access_token: "477055521-PpCBhLezySPX8CWmSCyUxRmQU7AMZyB5PqyvPNJF",
//        access_token_secret: "PdPH2nrikeBGiHlfg3vm2dWys6knZSQYYMvnF5xFKy14G"
//    });
//
//    var stream = Twit.stream('statuses/filter', { track: 'ebola'});
//
//    stream.on('tweet', function (tweet) {
//        //console.log(tweet.text)
//        var tweeeeet = {
//            text: tweet.text,
//            geo: tweet.geo
//        };
//        console.log(tweeeeet.text)
//        console.log(tweeeeet.geo)
//    })
//
//
//});
