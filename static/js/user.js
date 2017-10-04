var name = window.location.href.split(".")[0].split("//")[1];
$.ajax({
    url: "https://api.github.com/users/"+name,
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(user) {
        console.log(user);
        if (user['bio'] == null) { var bio = '\t'; }
        else { var bio = user['bio'] }
        if (user['name'] == null) { var name = user['login']; }
        else { var name = user['name']; }
        $("head").append("<title>"+name+"</title><link rel='icon' type='image/png' href='"+user['avatar_url']+"'/>");
        $("header").prepend("<a href='https://github.com/"+user['login']+"'><img class='repo-container' id='avatar' src='"+user['avatar_url']+"'></a>");
        $("header").append("<div id='user-stats' class='repo-container'><h1 id='title'>"+name+"</h1><p id='bio'>"+bio+"</p><hr><div id='blog-link'><a href='"+user['blog']+"'><i class='fa fa-link' aria-hidden='true'></i> "+user['blog']+"</a></div></div>");
        // HACK: hide #blog-link after adding it to the body
        if (user['blog'] == "") { $("#blog-link").css("display", "none"); }
        else { $("#blog-link").css("display", "block"); }
    }
});
