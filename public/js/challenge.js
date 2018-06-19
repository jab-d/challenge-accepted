
$(document).ready(function () {

    //Global Variables
    var userId;
    var cardContent;
    var challenges = [];
    var userObject = [];
    var url = window.location.search;
    var challengeContainer = $(".challenge-container");

    $(document).on("click", "button.challengeAccepted", challengeCompleteButton);
    $(document).on("click", "button.viewCardInfo", challengeInfoButton);

    //=====================================================================================//
    // Function THAT PULLS USERID FROM URL
    //=====================================================================================//
    function getUserId() {
        if (url.indexOf("?user_id=") !== -1) {
            userId = url.split("=")[1];
            console.log("userId: ", userId)
        }
    }
    //=====================================================================================//
    // FUNCTION THAT PULLS CHALLENGES FROM DATABASE
    //=====================================================================================//
    function getChallenges(user) {
        $.get("/api/challenges", function (data) {
            challenges = data;
            initializeCards();
        });
    }
    //=====================================================================================//
    // FUNCTION THAT FOR-LOOPS THRU OUR CHALLENGES OBJECT
    //=====================================================================================//
    function initializeCards() {
        console.log("Challenges", challenges);
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
        challengeCard.addClass("col s12 m7");
        var challengeCardHeading = $("<div>");
        challengeCardHeading.addClass("card");
        var cardImageContainer = $("<div>");
        cardImageContainer.addClass("card-image");
        var cardImage = ("<img class='responsive-img' src='" + challenge.image + "'>")
        var challengeTitle = $("<span>");
        challengeTitle.addClass("card-title")
        challengeTitle.text(challenge.challenge_name + " ");
        cardContent = $("<div>");
        cardContent.addClass("card-content")
        var challengeAuthor = $("<p>");
        challengeAuthor.text("Created by: " + challenge.challenge_maker);
        challengeAuthor.css({ "margin-top": "-8px" });
        var challengeLocation = $("<p>");
        challengeLocation.text("Location: " + challenge.location);
        challengeLocation.css({ "margin-bottom": "20px" })
        var challengeBody = $("<p>");
        challengeBody.text(challenge.description);
        challengeBody.css({ "font-size": "20px" })
        var challengeAction = $("<div>")
        challengeAction.addClass("card-action")
        var optionOne = $("<button>");
        optionOne.addClass("challengeAccepted")
        optionOne.text("Challenge Accepted!");
        var optionTwo = $("<button>");
        optionTwo.addClass("viewCardInfo right")
        optionTwo.text("Card Info")
        var points = $("<a>")
        points.css({ float: "right" })
        points.text("Points: " + challenge.points)

        // APPENDS
        challengeRow.append(challengeCard);
        challengeCard.append(challengeCardHeading);
        challengeCardHeading.append(cardImageContainer)
        challengeCardHeading.append(cardContent);
        cardImageContainer.append(cardImage);
        cardImageContainer.append(challengeTitle);
        cardContent.append(challengeAuthor);
        cardContent.append(challengeLocation);
        cardContent.append(challengeBody);
        challengeCardHeading.append(challengeAction);
        challengeAction.append(optionOne);
        challengeAction.append(optionTwo);
        challengeAction.append(points);
        challengeRow.data("challenge", challenge);
        return challengeRow;
    }
    //=====================================================================================//
    // FUNCTION THAT FIND THE SPECIFIC CHALLENGE ID #
    //=====================================================================================//
    function challengeCompleteButton() {
        var challengeId = $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .data("challenge");

        var tacos = {
            completed: true,
            UserId: userId,
            ChallengeId: challengeId.id
        }
        acceptChallenge(tacos);
    }
    //=====================================================================================//
    // POST FUNCTION THAT ATTACHES USER TO CHALLENGE
    //=====================================================================================//
    function acceptChallenge(ramen) {
        $.post("/challenge/action", ramen, function () {
            // window.location.href = "/challenges";
        });
    }
    //=====================================================================================//
    // FUNCTION THAT FINDS THE USERS THAT COMPLETED SPECIFIC CHALLENGE
    //=====================================================================================//

    function challengeInfoButton() {
        usersObject = $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .data("challenge");

        var usersCompleted = usersObject.Users
        var usersToAdd = []
        for (var i = 0; i < usersCompleted.length; i++) {
            populateUsers(usersCompleted[i])
            // console.log(usersCompleted[i].name + " Points Earned: " + usersCompleted[i].points_earned)
        }
    }
    //=====================================================================================//
    // FUNCTION THAT GENERATES CARD USERS
    //=====================================================================================//

    function populateUsers(users) {
        console.log(users.name + " Points: " + users.points_earned);

    }
    //==============================================================================================//
    getUserId();
    getChallenges();

});
