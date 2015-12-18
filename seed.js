// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var newsOrgs = [];
newsOrgs.push({
            name: 'NPR',
            url: 'http://www.npr.org/',
            founder: 'Bill Siemering',
            summary: 'Great storytelling and rigorous reporting. These are the passions that fuel us. Our business is telling stories, small and large, that start conversations, increase understanding, enrich lives and enliven minds.',
            review: [
               {score: 5, comment: "non biased news, no back end agenda"},
               {score: 4, comment: ""},
               {score: 4, comment: ""},
               {score: 4, comment: "trust them"},
               {score: 5, comment: "Listen to NPR like couple of times a week"},
               {score: 4, comment: "I prefer reading my news from them. They're pretty straight forward. They obviously have a bias but I think they remove the emotional aspect of news, where I think somethinkg like Fox generates a lot of emotional response. They elicit outrage."}
             ]
           });
newsOrgs.push({
            name: 'The Guardian',
            url: 'http://www.theguardian.com/us',
            founder: 'John Edward Taylor',
            summary: 'The Guardian is a British national daily newspaper.  It contains nearly all of the content of the newspapers The Guardian and The Observer, as well as a substantial body of web-only work produced by its own staff, including a rolling news service. Our team of US-based journalists is most recently renowned for its Pulitzer Prize-winning revelations based on the disclosures made by whistleblower Edward Snowden.',
            review: [
               {score: 2, comment: "Don't know too much about them. A lot of news article on facebook link to their articles but I'm a little weary on their credibility"}
            ]
           });
newsOrgs.push({
            name: 'New York Times',
            url: 'http://www.nytimes.com/',
            founder: 'Henry Jarvis Raymond & George Jones',
            summary: 'Because we’re journalists, we’re impatient. We want to gather the news as quickly as possible, using any technological resource available. And when we’re as sure of the story as we can be, we want to share it immediately, in whatever way reaches the most people. The Internet didn’t plant these ideas in our heads. We’ve always been this way.',
            review: [
               {score: 4, comment: ""},
               {score: 3, comment: ""},
               {score: 3, comment: "I used to have my homepage set to New York Times. I still will occassionally go to their website to catch up on world news. They've been around for a while so I trust them to a degree, but that also gives me a reason to be skeptical."},
               {score: 4, comment: "their data visualizations are cool"}
             ]
           });
newsOrgs.push({
             name: 'CNN',
             url: 'http://www.cnn.com/',
             founder: 'Ted Turner',
             summary: 'CNN.com is among the worlds leaders in online news and information delivery. Staffed 24 hours, seven days a week by a dedicated staff in CNNs world headquarters in Atlanta, Georgia, and in bureaus worldwide, CNN.com relies heavily on CNNs global team of almost 4,000 news professionals. CNN.com features the latest multimedia technologies, from live video streaming to audio packages to searchable archives of news features and background information. The site is updated continuously throughout the day.',
             review: [
                 {score: 4, comment: "democratic agenda but much more reliable than fox"},
                 {score: 3, comment: ""},
                 {score: 5, comment: "I occasionally read news from cnn"}
             ]
           });
newsOrgs.push({
             name: 'Wall St. Journal',
             url: 'http://www.wsj.com/',
             founder: 'Charles H. Dow',
             summary: 'The Wall Street Journal delivers news, analysis and insights to help you succeed. When you read The Wall Street Journal you become part of a global conversation about business, politics, technology and culture. You have access to the world through news coverage from more than 1,800 journalists in 45 countries and you join a community of more than 2.2 million subscribers in the U.S. and 31 million unique users per month worldwide as part of the Wall Street Journal Digital Network.',
             review: [
                {score: 2, comment: "been around for decades so I trust the brand"},
                {score: 5, comment: "only news org that is more trusted than distrusted across all ideological groups"},
                {score: 3, comment: ""}
             ]
           });
newsOrgs.push({
             name: 'The Economist',
             url: 'http://www.economist.com/',
             founder: 'James Wilson',
             summary: 'The Economist is an authoritative weekly newspaper focusing on international politics and business news and opinion. The Economist is one of the most widely recognised and well-read current affairs publications, with a growing global circulation of around 1.5m readers and a reputation for incisive analysis and opinion on every aspect of world events.',
             review: [
              {score: 3, comment: ""},
              {score: 5, comment: "Looooove, love, love The Economist. I get their paper magazine in the mail and love the content they publish. Always find it relevant and interesting. I trust in their journalism."},
              {score: 5, comment: "their political cartoons are amazing"}
             ]
           });
newsOrgs.push({
             name: 'BBC',
             url: 'http://www.bbc.co.uk/',
             founder: 'John Charles Walsham Reith',
             summary: 'The BBC is the world’s leading public service broadcaster. Funded primarily through the television licence fee, the BBC provides audiences in the UK with high quality and distinctive services across television, radio and online. In the UK the BBC provides 10 network television services, 10 network radio services, 46 radio services in the nations and regions of the UK, plus an extensive online presence. The BBC also delivers impartial news and information to audiences around the globe through the World Service.',
             review: [
                {score: 2, comment: "again non biased, focus on equalized world news, equally focused on all parts of the world rather than just first world countries, trustworthy brand"},
                {score: 5, comment: ""},
                {score: 3, comment: ""}
             ]
           });
newsOrgs.push({
             name: 'The Huffington Post',
             url: 'http://www.huffingtonpost.com/',
             founder: 'Jonah Peretti, Andrew Breitbart, Arianna Huffington, and Kenneth Lerer',
             summary: 'The Huffington Post has over 90 sections globally, covering politics, business, entertainment, environment, technology, media, lifestyle, culture, comedy, healthy living, womens interest, local news and so much more.',
             review: [
                {score: 3, comment: "great trendy pieces and varied opinion pieces"},
                {score: 3, comment: "lots of dumb articles but all over fb"},
                {score: 2, comment: "they have a lot of opinion pieces that are a hit or miss but in terms of actual news, they aren't really a credible source for me."}
             ]
           });
newsOrgs.push({
             name: 'VICE',
             url: 'http://www.vice.com/',
             founder: 'Suroosh Alvi, Shane Smith, and Gavin McInnes',
             summary: 'VICE News is an international news organization created by and for a connected generation. We provide an unvarnished look at some of the most important events of our time, highlight under-reported stories from around the globe, and get to the heart of the matter with reporters who call it like they see it.',
             review: [
                 {score: 4, comment: "woke news, they make an effort to educate on subjects that bring a positive impact on the reader rather than fear based reporting."},
                 {score: 4, comment: "more emphasis on entertainment"},
                 {score: 4, comment: ""}
             ]
           });
newsOrgs.push({
             name: 'Fox News',
             url: 'http://www.foxnews.com/',
             founder: 'Rupert Murdoch and Roger Ailes',
             summary: 'FOX News Channel (FNC) is a 24-hour all-encompassing news service dedicated to delivering breaking news as well as political and business news. A top five cable network, FNC has been the most watched news channel in the country for more than ten years and according to Public Policy Polling, is the most trusted television news source in the country. Owned by News Corp., FNC is available in more than 90 million homes and dominates the cable news landscape, routinely notching the top ten programs in the genre.',
             review: [
                 {score: 0, comment: "shit"},
                 {score: 1, comment: "republican agenda absolute ass"},
                 {score: 0, comment: ""},
                 {score: 2, comment:"Low key feel like Fox tries to cover and spin topics just to spur public interest."},
                 {score: 1, comment: "fox news is terrible"}
             ]
           });
newsOrgs.push({
             name: 'NBC News',
             url: 'http://www.NBCNews.com',
             founder: 'David Sarnoff',
             summary: 'A leading source of global news and information for more than 75 years. The National Broadcasting Company (NBC) is an American commercial broadcasting television network and former radio network headquartered in the GE Building in New York Citys Rockefeller Center with additional major offices near Los Angeles and in Chicago.',
             review: [
                 {score: 0, comment: "biased"},
                 {score: 2, comment: ""},
                 {score: 2, comment: "Another news organization that has penetrated mainstream media due to being around for so long. I can't really say I trust them."}
             ]
           });
newsOrgs.push({
             name: 'Times of India',
             url: 'http://timesofindia.indiatimes.com/',
             founder: 'unknown',
             summary: 'The Times of India (ToI), the world’s largest selling English-language newspaper, was founded at a time when the Mughal emperor Bahadur Shah Zafar still sat at his throne in Delhi, the seven islands of Bombay had not yet been fully joined, and there was no such thing as the Indian Railways. Originally The Bombay Times and Journal of Commerce, it was renamed The Times of India after a merger with other papers. The Times Group is the country’s largest media conglomerate.',
             review: [
                 {score: 0, comment: "sensationalized entertainment disguised as news, the voice of the news screams for attention, which tells me that the substance is low"},
                 {score: 3, comment: "Low key feel like Indian news tries to cover and spin topics just to spur public interest like Fox."}
             ]
           });
newsOrgs.push({
             name: 'Yahoo! News',
             url: 'http://news.yahoo.com/',
             founder: 'Jerry Yang and David Filo',
             summary: 'Yahoo News originated as a pure Internet-based news aggregator by Yahoo. Articles in Yahoo News originally came from news services, such as Associated Press, Reuters, Agence France-Presse (AFP), Fox News, ABC News, NPR, USA Today, CNN.com, CBC News, Seven News, and BBC News.',
             review: [
                 {score: 2, comment: "varied news, it's okay, nothing special"},
                 {score: 1, comment: ""},
                 {score: 3, comment: ""}
             ]
           });
newsOrgs.push({
             name: 'Al Jazeera',
             url: 'http://www.aljazeera.com/',
             founder: 'Hamad bin Khalifa Al Thani',
             summary: 'At Al Jazeera English, we focus on people, and the events that impact their lives. We bring topics to light that often go underreported, listening to all sides of the story and giving a voice to the voiceless. We are reshaping global media and constantly working to strengthen our reputation as one of the world’s most respected news and current affairs channels.',
             review: [
                 {score: 5, comment: "I love al jazeera. I think they're probably the best news organization around"},
                 {score: 4, comment: "Al Jazeera is my go to place for real news on anything related to the Middle East or Islam. They cut through all the islamaphobia that western media tries to perpetuate. Really great source."}
             ]
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