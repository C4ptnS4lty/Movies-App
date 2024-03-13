//Jonathan Lahmann 3/12/2024

let movieList = [];
let currentID = 0;

$(function() {
    console.log("it responds");

    $("#new-movie-form").on("submit", function(evt) {

        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = { title, rating, currentID};

        const HTMLtoAppend = createMovieDataHTML(movieData);

        currentID++;

        movieList.push(movieData);

        $("#movie-table-body").append(HTMLtoAppend);
        $("#new-movie-form").trigger("reset");
    });


    // when the delete button is clicked, remove the closest parent tr and remove from the array of movies

  $("tbody").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = movieList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    movieList.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
  });
});

/* createMovieDataHTML accepts an object with title and rating keys and returns a string of HTML */

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }