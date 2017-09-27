$.ajax({
    url: "https://api.github.com/users/Cutwell/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
        var repo_html = "";
        res.map((repo) => {
            repo_html += "<span><div class='repo-container'><div class='"+repo['language']+"-tag'></div><a class='repo-link' href='"+repo["html_url"]+"'><h1 class='repo-name'>"+repo['name']+"</h1></a><p class='repo-desc'>"+repo['description']+"</p></div></span>";
        });
        $("#repository-list").html(repo_html);
    }
});
