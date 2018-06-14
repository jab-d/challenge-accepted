$(document).ready(function () {

    //Global Variables
    var userId;    
    var challenges;
    var url = window.location.search; 
    var challengeContainer = $(".challenge-container");
    
    //GOING TO ADD THIS TO A FUNCTION
    if (url.indexOf("?User_id=") !== -1) {
        userId = url.split("=")[1];
        getChallenges(userId);
    }
    else {
        getChallenges();
    }
//=====================================================================================//
// FUNCTION THAT PULLS CHALLENGES FROM DATABASE
//=====================================================================================//

    function getChallenges(user) {
        userId = user || "";
        if (userId) {
            userId = "/?author_id=" + userId;
        }
        $.get("/api/challenges" + userId, function (data) {
            challenges = data;
            if (!challenges || !challenges.length) {
                displayEmpty(user);
            }
            else {
                initializeCards();
            }
        });
    }
//=====================================================================================//
// FUNCTION THAT FOR-LOOPS THRU OUR CHALLENGES OBJECT
//=====================================================================================//

    function initializeCards() {
        console.log("Challenges", challenges);
        challengeContainer.empty();
        var challengesToAdd = [];
        for (var i = 0; i < challenges.length; i++) {
            challengesToAdd.push(createCards(challenges[i]));
        }
        challengeContainer.append(challengesToAdd);
    }
//=====================================================================================//
// FUNCTION THAT TAKES GENERATES ALL HTML WITHIN CHALLENGES CONTAINER
//=====================================================================================//

    function createCards(challenge) {

        
        // Variables for Challenges Construct
        var challengeRow = $("<div>")
        challengeRow.addClass("row")
        var challengeCard = $("<div>");
        challengeCard.addClass("col s12 m6");
        var challengeCardHeading = $("<div>");
        challengeCardHeading.addClass("card blue-grey darken-1");
        var cardContent = $("<div>");
        cardContent.addClass("card-content white-text")
        var challengeTitle = $("<span>");
        challengeTitle.addClass("card-title")
        challengeTitle.text(challenge.challenge_name + " ");
        var challengeAuthor = $("<p>");
        challengeAuthor.text("Written by: " + challenge.User.name);
        challengeAuthor.css({"margin-top": "-8px"});
        var challengeLocation = $("<p>");
        challengeLocation.text("Location: " + challenge.location);
        challengeLocation.css({"margin-bottom" : "20px"})
        var challengeBody = $("<p>");
        challengeBody.text(challenge.description);
        challengeBody.css({"font-size": "20px"})
        var challengeAction = $("<div>")
        challengeAction.addClass("card-action")
        var optionOne = $("<a>");
        optionOne.text("Challenge Accepted!");
        var points = $("<a>")
        points.css({float: "right"})
        points.text("Points: " + challenge.points)
        //   var formattedDate = new Date(challenge.createdAt);
        //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  
        // APPENDS
        challengeRow.append(challengeCard);
        challengeCard.append(challengeCardHeading);
        challengeCardHeading.append(cardContent);
        cardContent.append(challengeTitle);
        cardContent.append(challengeAuthor);
        cardContent.append(challengeLocation);
        cardContent.append(challengeBody);
        challengeCardHeading.append(challengeAction);
        challengeAction.append(optionOne);
        challengeAction.append(points);
        // newChallengeDate.text(formattedDate);
        // newChallengeTitle.append(newPostDate);
  
        challengeRow.data("challenge", challenge);
        return challengeRow;
    }

    initializeCards();
});
