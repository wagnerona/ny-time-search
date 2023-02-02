
$('#run-search').on('click', function (event) {
  event.preventDefault();

  let searchTerm = $('#search-term').val().trim()
  let numberRecords = $('#article-count').val().trim()
  let startYear = $('#start-year').val().trim()
  let endYear = $('#end-year').val().trim()

  console.log(numberRecords);
})