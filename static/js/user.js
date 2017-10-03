$.ajax({
    url: "https://api.github.com/users/Cutwell",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(user) {
        console.log(user);
        $("head").append("<title>"+user['name']+"</title><link rel='icon' type='image/png' href='"+user['avatar_url']+"'/>");
        $("header").prepend("<a href='https://github.com/Cutwell'><img class='repo-container' id='avatar' src='"+user['avatar_url']+"'></a>");
        $("header").append("<div id='user-stats' class='repo-container'><i class='fa fa-book' aria-hidden='true'></i> "+user['public_repos']+" <i class='fa fa-users' aria-hidden='true'></i> "+user['followers']+" </div>");
    }
});
