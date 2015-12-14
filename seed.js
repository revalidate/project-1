// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var newsOrgs = [];
newsOrgs.push({
             name: 'NPR',
             url: 'http://www.npr.org/',
             founder: 'Bill Siemering',
             summary: 'Great storytelling and rigorous reporting. These are the passions that fuel us. Our business is telling stories, small and large, that start conversations, increase understanding, enrich lives and enliven minds.'
           });
newsOrgs.push({
             name: 'The Guardian',
             url: 'http://www.theguardian.com/us',
             founder: 'John Edward Taylor',
             summary: 'Covering American and international news for an online, global audience. Our team of US-based journalists is most recently renowned for its Pulitzer Prize-winning revelations based on the disclosures made by whistleblower Edward Snowden'
           });
newsOrgs.push({
             name: 'New York Times',
             url: 'http://www.nytimes.com/',
             founder: 'Henry Jarvis Raymond & George Jones',
             summary: 'Because we’re journalists, we’re impatient. We want to gather the news as quickly as possible, using any technological resource available. And when we’re as sure of the story as we can be, we want to share it immediately, in whatever way reaches the most people. The Internet didn’t plant these ideas in our heads. We’ve always been this way.'
           });
newsOrgs.push({
             name: 'CNN',
             url: 'http://www.cnn.com/',
             founder: 'Ted Turner',
             summary: 'CNN.com is among the worlds leaders in online news and information delivery. Staffed 24 hours, seven days a week by a dedicated staff in CNNs world headquarters in Atlanta, Georgia, and in bureaus worldwide, CNN.com relies heavily on CNNs global team of almost 4,000 news professionals. CNN.com features the latest multimedia technologies, from live video streaming to audio packages to searchable archives of news features and background information. The site is updated continuously throughout the day.'
           });


// // populate each albums song list
// newsOrgs.forEach(function(newsOrg) {
//   newsOrg.songs = sampleSongs;
// });


db.NewsOrg.remove({}, function(err, success){
  console.log("deleted all data");
  // db.NewsOrg.create(newsOrgs, function(err, newsOrgs){
    // if (err) { return console.log('ERROR', err); }
    // console.log("all news organizations:", newsOrgs);
    // console.log("created", newsOrgs.length, "news organizations");
    process.exit();
  // });

});