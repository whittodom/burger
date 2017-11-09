$(function() {
  $(".devour").on("submit", function(event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isDevoured");

    var isDevouredState = {
      devoured: isDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevouredState
    }).then(
      function() {
        console.log("changed devour to", isDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
