$(document).ready(function () {

  // GLOBAL VARIABLES
  var userId;
  var challengeId;  
  var updating = false;  
  var url = window.location.search;    

  // jQUERY OBJECTS LINKED TO CHALLENGE SUBMIT FORM
  var pointsInput = $("#points")  
  var locationInput = $("#location")
  var challengeForm = $("#challengeForm");
  var descriptionInput = $("#description");  
  var challengeNameInput = $("#challengeName");

  $(challengeForm).on("submit", handleFormSubmit);

//=====================================================================================//
// FUNCTION THAT TAKES PULLS OUR USERS FROM THE DATABASE
//=====================================================================================//

  function checkForUser() {

    if (url.indexOf("?challenge_id=") !== -1) {
      challengeId = url.split("=")[1];
      getChallengeData(challengeId, "challenge");
      console.log("challenge #", challengeId)
    }

    else if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
    }
  }

//=====================================================================================//
// FUNCTION THAT CREATES CONTENT FOR RES.BODY 
//=====================================================================================//

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!challengeNameInput.val().trim() || !locationInput.val().trim() || !descriptionInput.val().trim() || !pointsInput.val().trim()) {
      console.log("missing something")
    }

    var newChallenge = {
      challenge_name: challengeNameInput.val().trim(),
      location: locationInput.val().trim(),
      description: descriptionInput.val().trim(),
      points: pointsInput.val().trim(),
      UserId: userId
    };
    console.log(newChallenge)

    if (!updating) {
      submitChallenge(newChallenge);
    }
  }
//=====================================================================================//
// POST FUNCTION -- SUBMITS CHALLENGE ALONG SIDE USER WHO CREATED IT 
//=====================================================================================//

  function submitChallenge(challenge) {
    $.post("/api/challenges", challenge, function () {
      window.location.href = "/api/challenges";
    });
  }

  checkForUser();
});

