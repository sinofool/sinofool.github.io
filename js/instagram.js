$(function () {
    console.log("ready!");
    var hash = window.location.hash;
    if (hash.substr(0, 14) == '#access_token=') {
        var token = hash.substr(14);
        console.log("Good we have token");
        showLogout();
        getUserInfo(token);
    } else {
        console.log("We need login");
        showLogin();
    }
});

function showFollowers(token) {
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/follows?access_token=" + token,
        success: function (response) {
            console.log("Follow list");
            console.log(response);
            for (let follower of response.data) {
                $("#followers").append(generateUser(follower));
            }
        },
        dataType: "jsonp"
    })
}

function getUserInfo(token) {
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/?access_token=" + token,
        success: function (response) {
            console.log("Here is my info");
            console.log(response);
            $("#myInfo").html(generateUser(response.data));
            $("#showFollowers").click(showFollowers(token));
        },
        dataType: "jsonp"
    });
}