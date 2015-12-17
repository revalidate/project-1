//* CLIENT-SIDE JS

// var newsOrgs = [];
// newsOrgs.push({
//              name: 'NPR',
//              url: 'http://www.npr.org/',
//              founder: 'Bill Siemering',
//              summary: 'Great storytelling and rigorous reporting. These are the passions that fuel us. Our business is telling stories, small and large, that start conversations, increase understanding, enrich lives and enliven minds.',
//              review: [
//              {date: Date.now(), score: 3, comment: "woke news, they make an effort to educate on subjects that bring a positive impact on the reader rather than fear based reporting."},
//              {date: Date.now(), score: 2, comment: "woke news, they make an effort to educate on subjects that bring a positive impact on the reader rather than fear based reporting."}
//              ]
//            });
// newsOrgs.push({
//              name: 'The Guardian',
//              url: 'http://www.theguardian.com/us',
//              founder: 'John Edward Taylor',
//              summary: 'Covering American and international news for an online, global audience. Our team of US-based journalists is most recently renowned for its Pulitzer Prize-winning revelations based on the disclosures made by whistleblower Edward Snowden.',
//              review: [
//              {date: Date.now(), score: 4, comment: "woke news, they make an effort to educate on subjects that bring a positive impact on the reader rather than fear based reporting."},
//              {date: Date.now(), score: 5, comment: "woke news, they make an effort to educate on subjects that bring a positive impact on the reader rather than fear based reporting."}
//              ]
//            });

$(document).ready(function() {
  console.log('app.js loaded!');

// READS DATABASE AND RENDERS TO HOMEPAGE (index.html)
  $.get('/api/newsorgs').success(function (newsOrgs) {
    // console.log("newsOrgs", newsOrgs);
    newsOrgs.forEach(function(newsOrg) {
      renderNewsOrg(newsOrg);
    });
  });


// showId = the unique id inside the html endpoint of specific news org (show.html page)
  var url = window.location.href.split("/");
  var showId = url[url.length-1];
  // console.log(id);

// READS DATABASE AND RENDERS TO UNIQUE NEWS ORG TO (show.html) ON "MORE INFO" BUTTON ON (index.html)
  $.get('/api/newsorgs/' + showId).success(function (newsOrgs) {
    // console.log("more info");
    renderMoreInfoOrg(newsOrgs);
  });


// CREATE NEWS ORG AND REDIRECTS TO HOMEPAGE (index.html) WITH NEW ORG
  $('#neworg-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/newsorgs', formData, function(newsorg) {
      console.log('new news org after POST', newsorg);
      renderNewsOrg(newsorg);  //render the server's response
    });

    //Redirects to HomePage (index.html) after successful create
    window.location.href = "http://localhost:3000/";
  });


// DELETES SPECIFIC NEWS ORG & REDIRECTS TO HOMEPAGE (index.html) WITH DELETED ORG
  $("#basicNews").on('click', ".delete-newsorg", function(e) {
    console.log("delete this newsorg:", showId);
    $.ajax({
      method: 'DELETE',
      url: ('/api/newsorgs/' + showId),
      success: function() {
        console.log("successfully deleted news org");
        $('[data-org-id='+ showId + ']').remove();
      }
    });

    //Redirects to HomePage (index.html) after successful delete
    window.location.href = "http://localhost:3000/";
  });


// UPDATE Edit Button
 $("#basicNews").on('click', "#edit-newsorg", function(e) {
    console.log("edit this newsorg:", showId);

    //Shows "Save Changes" Button & Hides "Edit" Button
    $(this).parent().find('#save-newsorg').toggle();
    $(this).toggle();

    //Changes Name, Founder, Url, Summary into input boxes
    var orgName = $('[data-org-id=' + showId + ']').find("h2").text();
    var orgFounder = $('[data-org-id=' + showId + ']').find(".founder").text();
    var orgUrl = $('[data-org-id=' + showId + ']').find(".url").text();
    var orgSummary = $('[data-org-id=' + showId + ']').find("p").text();
    $('[data-org-id=' + showId + ']').find("h2").html("<textarea id='edit-name' name='name'>" + orgName + "</textarea>");
    $('[data-org-id=' + showId + ']').find(".founder").html("<textarea id='edit-founder' name='founder'>" + orgFounder + "</textarea>");
    $('[data-org-id=' + showId + ']').find(".url").html("<textarea id='edit-url' name='url'>" + orgUrl + "</textarea>");
    $('[data-org-id=' + showId + ']').find("p").html("<textarea class='form-control' id='edit-summary' name='summary'>" + orgSummary + "</textarea>");
  });


// UPDATE Save Changes Button
  $("#basicNews").on('click', "#save-newsorg", function(e) {
    console.log("save this newsorg:", showId);

    //Shows "Edit" Button & Hides "Save Changes" Button
    $(this).parent().find('#edit-newsorg').toggle();
    $(this).toggle();

    var name = $('#edit-name').val();
    var founder = $('#edit-founder').val();
    var url = $('#edit-url').val();
    var summary = $('#edit-summary').val();

    var formData = {
      name: name,
      url: url,
      founder: founder,
      summary: summary
    };

    console.log(formData);

    var putUrl = "/api/newsorgs/" + showId;

    console.log(putUrl);

    $.ajax({
      method: "PUT",
      url: putUrl,
      data: formData,
      success: function(data) {
        console.log("success");
      },
      error: function(error) {
        console.log("you have failed!");
      }
    });

    //Redirects to HomePage (index.html) after successful update
    window.location.href = "http://localhost:3000/";
  });


  //READ all reviews and render to show.html page
  $.get('/api/newsorgs/' + showId).success(function (newsOrgs) {
    console.log("reivew for", newsOrgs);
    var review = newsOrgs.review;
    review.forEach(function(e){
      renderReview(e);
    });
  });


  // CREATE "add review" button - pops up modal
  $('.new-review').on('click', function(e) {
    e.preventDefault();
    $('#reviewModal').modal();
  });

  // CREATE new review on show.html page via modal on "save" button on modal
  $('#saveReview').on('click', function handleNewReviewSubmmit (e){
      var newScore = $('#score').val();
      var newComment = $('#comment').val();

      var formData = {
        score: newScore,
        comment: newComment
      };

      var postUrl = '/api/newsorgs/' + showId;

      $.post(postUrl, formData, function(review) {
        console.log('successfully posted review:', review);
        renderReview(review);
      });

      // Hides Modal
      $('#reviewModal').modal('hide');
  });

});


// fumction renders single news org onto index.html, later called above
function renderNewsOrg(newsOrgs) {
  // console.log('rendering news organization:', newsOrgs);

  var newsOrgHtml =

"<!-- one news org -->" +
"        <div class='row newsorg' data-org-id='" + newsOrgs._id + "'>" +
"          <h2>" + newsOrgs.name + "</h2>" +
"          <h4>" + newsOrgs.founder + "</h4>" +
"          <h4><a href='" + newsOrgs.url + "'</a>" + newsOrgs.url + "</a></h4>" +
"          <div class='rating'>" +
"              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>" +
"          </div>" +
"          <br>" +
"          <p>" + newsOrgs.summary + "</p>" +
"          <button class='btn-primary more-info'><a href='/newsorgs/" + newsOrgs._id + "'>more info</a></button>" +
"          <br>" +
"          <hr>" +
"        </div>" +
"<!-- end one news org -->";


  $('#newsOrgs').append(newsOrgHtml);
 }


 // function renders a single news org and renders it on show.html, later called above
function renderMoreInfoOrg(newsOrgs) {
  // console.log('more info on :', newsOrgs.name);

  var moreInfoHtml =

"<!-- one news org -->" +
"        <div class='row newsOrg' data-org-id='" + newsOrgs._id + "'>" +
"          <h2>" + newsOrgs.name + "</h2>" +
"          <button class='btn-primary delete-newsorg'>delete</button>" +
"          <button class='btn-primary' id='edit-newsorg'>edit</button>" +
"          <button hidden class='btn-primary' id='save-newsorg'>save changes</button>" +
"          <h4 class='founder'>" + newsOrgs.founder + "</h4>" +
"          <h4 class='url'><a href='" + newsOrgs.url + "'</a>" + newsOrgs.url + "</a></h4>" +
"          <br>" +
"          <p>" + newsOrgs.summary + "</p>" +
"          <br>" +
"          </div>" +
"<!-- end one news org -->";

      $('#basicNews').append(moreInfoHtml);
 }


// function renders a single review and renders it under "User Reviews" on show.html, later called above
 function renderReview(review) {
  // console.log('review for one org :', review);

  var reviewHtml =
"    <!-- one review -->" +
"    <div id='test' data-review-id='" + review._id + "'>" +
"      <div class='user-review'>"+ moment(review.date).format("MMMM Do YYYY") + "</div>" +
"      <div class='user-review'>" + review.score + "</div>" +
"      <div class='user-review'>" + review.comment + "</div>" +
"      <br>" +
"    </div>" +
"    <hr>" +
"    <!-- end one review -->";


      $('#allReviews').append(reviewHtml);
 }
