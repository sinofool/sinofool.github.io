function showLogin() {
    $("#loginArea").show();
    $("#infoArea").hide();
    $("#logoutArea").hide();
}
function showLogout() {
    $("#loginArea").hide();
    $("#infoArea").show();
    $("#logoutArea").show();
}

function generateUser(profile) {
    return "<div><img src=" + profile.profile_picture + "></div><div>" + profile.full_name + "</div>";
}