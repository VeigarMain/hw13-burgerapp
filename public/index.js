
$(function () {
  $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
        console.log(id);
      var newDevouredState = {
          devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
      }).then(
          function () {
              console.log("changed devoured to", newDevoured);
              location.reload();
          }
      );
  });

  $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        console.log($("#cb").val());
      var newBurger = {
          burger_name: $("#cb").val(),
          devoured: $("[name=devoured]:checked").val()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });
});