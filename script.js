$("button").on("click", function () {
  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dX61JR8gJJ6WF07Whu5dsiCSSF99bKsY";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
    // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

    console.log(response);

    // Step 2: since the image information is inside of the data key,
    const results = response.data

    // =============== put step 2 in between these dashes ==================

    // ========================

    for (var i = 0; i < results.length; i++) {

      // Step 3: uncomment the for loop above and the closing curly bracket below.
      const animalDiv = $('<div>');
      const p = $('<p>');
      // Set the inner text of the paragraph to the rating of the image in results[i].
      p.text("rating:" + results[i].rating)
      // Make an image tag with jQuery and store it in a variable named animalImage.
      const animalImage = $('<img>');
      // Set the image's src to results[i]'s fixed_height.url.
      animalImage.attr("src", results[i].images.fixed_height.url)
      // Append the p variable to the animalDiv variable.
      animalDiv.append(p)
      // Append the animalImage variable to the animalDiv variable.
      animalDiv.append(animalImage)
      // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
      $('#gifs-appear-here').prepend(animalDiv)
      // ============= put step 3 in between these dashes ======================

      // ==================================
      // }

    }
  });

});