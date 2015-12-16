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
             summary: 'Covering American and international news for an online, global audience. Our team of US-based journalists is most recently renowned for its Pulitzer Prize-winning revelations based on the disclosures made by whistleblower Edward Snowden.'
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
newsOrgs.push({
             name: 'Wall St. Journal',
             url: 'http://www.wsj.com/',
             founder: 'Charles H. Dow',
             summary: 'The Wall Street Journal delivers news, analysis and insights to help you succeed. When you read The Wall Street Journal you become part of a global conversation about business, politics, technology and culture. You have access to the world through news coverage from more than 1,800 journalists in 45 countries and you join a community of more than 2.2 million subscribers in the U.S. and 31 million unique users per month worldwide as part of the Wall Street Journal Digital Network.'
           });
newsOrgs.push({
             name: 'The Economist',
             url: 'http://www.economist.com/',
             founder: 'James Wilson',
             summary: 'The Economist is an authoritative weekly newspaper focusing on international politics and business news and opinion. The Economist is one of the most widely recognised and well-read current affairs publications, with a growing global circulation of around 1.5m readers and a reputation for incisive analysis and opinion on every aspect of world events.'
           });
newsOrgs.push({
             name: 'BBC',
             url: 'http://www.bbc.co.uk/',
             founder: 'John Charles Walsham Reith',
             summary: 'The BBC is the world’s leading public service broadcaster. Funded primarily through the television licence fee, the BBC provides audiences in the UK with high quality and distinctive services across television, radio and online. In the UK the BBC provides 10 network television services, 10 network radio services, 46 radio services in the nations and regions of the UK, plus an extensive online presence. The BBC also delivers impartial news and information to audiences around the globe through the World Service.'
           });
newsOrgs.push({
             name: 'The Huffington Post',
             url: 'http://www.huffingtonpost.com/',
             founder: 'Jonah Peretti, Andrew Breitbart, Arianna Huffington, and Kenneth Lerer',
             summary: 'The Huffington Post has over 90 sections globally, covering politics, business, entertainment, environment, technology, media, lifestyle, culture, comedy, healthy living, womens interest, local news and so much more.'
           });
newsOrgs.push({
             name: 'VICE',
             url: 'http://www.vice.com/',
             founder: 'Suroosh Alvi, Shane Smith, and Gavin McInnes',
             summary: 'VICE News is an international news organization created by and for a connected generation. We provide an unvarnished look at some of the most important events of our time, highlight under-reported stories from around the globe, and get to the heart of the matter with reporters who call it like they see it.',
           });


// // populate each albums song list
// newsOrgs.forEach(function(newsOrg) {
//   newsOrg.songs = sampleSongs;
// });


db.NewsOrg.remove({}, function(err, success){
  console.log("deleted all data");
  db.NewsOrg.create(newsOrgs, function(err, newsOrgs){
    if (err) { return console.log('ERROR', err); }
    console.log("all news organizations:", newsOrgs);
    console.log("created", newsOrgs.length, "news organizations");
    process.exit();
  });

});