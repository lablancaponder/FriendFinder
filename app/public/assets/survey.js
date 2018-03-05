
  <div id="results-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h2 class="modal-title"><strong>Best Match</strong></h2>
        </div>
        <div class="modal-body">
          <h2 id="match-name"></h2>
          <img id="match-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg" alt="">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

// CSS =========================================
    var config = {
      ".form-check": {},
      ".form-check-deselect": {
        allow_single_deselect: true
      },
      ".form-check-no-single": {
        disable_search_threshold: 10
      },
      ".form-check-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".form-check-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".form-check").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });
