const Twit = require('twit');

const T = new Twit({
    consumer_key:         'jaec1gzjvUEH3m0rBzI0lesWe',
    consumer_secret:      'Yl2ruQYn4yAI92cCrQ7E1ycdoF8a5kJJxKB1KkJ0EekvzqXvPg',
    access_token:         '3003116730-sL8ICd3r19woBjqwqmlgXasNzMzhwJj5Ej6iO9Q',
    access_token_secret:  'PXLnuElROCTOjNAyEwEOap7sDamKrTFI42apzrGYOi7Km',
    timeout_ms:           60*1000,
    strictSSL:            true,
});

const searchTweets = (query, callback) => {
    // if(query === null){
    //     res.json("");
    //     return ;
    // }
    // query.replace(/[^a-zA-Z0-9À-ž\s]/g, "");
    callback(query);
    // T.get('search/tweets', { q: query+' since:2018-07-11', count: 100 }, function (err, data, response) {
    //     if (err) {
    //         console.log('ERROR: ', err);
    //         return;
    //     }
    //     callback(data.statuses);
    // });
};

const queries = [];
let index = -1;

const interval = setInterval(() => {
    if(index < 0 && queries.length == 0) return;

    index++;
    if(index >= queries.length){
        index = 0;
    } 

    searchTweets(queries[index], (tweets) => {
        console.log(index, tweets);
    });
}, 2000);

module.exports = {
    push_query: function(query, callback){
        if(queries.indexOf(query) == -1){
            queries.unshift(query);
        }
    }
}