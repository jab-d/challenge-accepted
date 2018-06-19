
$(document).ready(function () {

    //Global Variables
    var id;
    var userId;
    var cardContent;
    var challenges = [];
    var userObject = [];
    var url = window.location.search;
    var challengeContainer = $(".challenge-container");

    $(document).on("click", "button.challengeComplete", challengeCompleteButton);

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
    // FUNCTION THAT FIND THE SPECIFIC CHALLENGE ID #
    //=====================================================================================//
    function challengeCompleteButton() {
        var id = $(this)
            .closest('[data-post]')
            .attr("data-post");

        var challengeComplete = {
            completed: true,
            UserId: userId,
            ChallengeId: id
        }
        acceptChallenge(challengeComplete);
    }
    //=====================================================================================//
    // POST FUNCTION THAT ATTACHES USER TO CHALLENGE
    //=====================================================================================//
    function acceptChallenge(data) {
        $.post("/challenge/action", data, function () {
            window.location.href = "/feed?user_id=" + userId;
        });
    }

    getUserId();

});
