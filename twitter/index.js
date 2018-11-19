const Twit = require('twit');

const T = new Twit({
    consumer_key:         'jaec1gzjvUEH3m0rBzI0lesWe',
    consumer_secret:      'Yl2ruQYn4yAI92cCrQ7E1ycdoF8a5kJJxKB1KkJ0EekvzqXvPg',
    access_token:         '3003116730-sL8ICd3r19woBjqwqmlgXasNzMzhwJj5Ej6iO9Q',
    access_token_secret:  'PXLnuElROCTOjNAyEwEOap7sDamKrTFI42apzrGYOi7Km',
    timeout_ms:           60*1000,
    strictSSL:            true,
});

const searchTweets = ($lat, callback) => {
        callback($lat);
        //test
    // T.get('search/tweets', { geocode: $lat+','+$lng+',1km', count: 100 }, function (err, data, response) {
    //     if (err) {
    //         console.log('ERROR: ', err);
    //         return;
    //     }
    //     if(!(query in OldStatuses)){
    //         OldStatuses[query] = [];
    //     }

    //     for(let i = 0; i < data.statuses.length; i++){
    //         const newId = data.statuses[i].id;
    //         let isEqual = false;
    //         for(let j = 0; j < OldStatuses[query]; j++){
    //             const oldId = OldStatuses[query].id;
    //             if(oldId === newId){
    //                 isEqual = true;
    //                 break;
    //             }
    //         }

    //         if(!isEqual){
    //             OldStatuses[query] = data.statuses;
    //             break;
    //         }
    //     }
    //     callback(data.statuses);
    // });
};

const queries = [];
let index = -1;
const OldStatuses = {}; // key -> value === query -> statuses


const interval = setInterval(() => {
    if(index < 0 && queries.length == 0) return;

    index++;
    if(index >= queries.length){
        index = 0;
    } 

    searchTweets(queries[index],tweets => {
        console.log(index, tweets);
    });
}, 2000);

module.exports = {
    push_query: function(query, callback){
        if(queries.indexOf(query) == -1 && query.length > 0){
            queries.unshift(query);
        }
    }
}