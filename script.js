//NY Times Search

let searchTerm = "";
let numberRecords = "5";
let startYear = "";
let endYear = "";

$('#run-search').on('click', function (event) {
  event.preventDefault();

  searchTerm = $('#search-term').val().trim();
  numberRecords = $('#article-count').val().trim();
  startYear = $('#start-year').val().trim();
  endYear = $('#end-year').val().trim();

  console.log(numberRecords);

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=8uZlW4ti3KyZlYaruw98zWMq4mpcN0wG";

  $.ajax({
    url: queryURL,
    method: "Get"
  }).then(function (response) {
    console.log(response);
    
    const results = response.response.docs;
    console.log(results[0]);
    for (var i = 0; i < results.length; i++) {
      const articleDiv = $('<div>');
      const pTag = $('<p>');
      pTag.text('Article:' + JSON.stringify(results[i]));
      articleDiv.append(pTag);
      $('#search-form').append(articleDiv);
      // console.log(results[i]);

    }

  });
});