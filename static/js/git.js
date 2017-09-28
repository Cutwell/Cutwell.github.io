$.ajax({
    url: "https://api.github.com/users/Cutwell/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
        var repo_html = "";
        res.map((repo) => {
            console.log(repo);
            repo_html += "<span><div class='repo-container'><div title='Language: "+repo['language']+"' class='"+repo['language']+"-tag'><p class='repo-stats'><i class='fa fa-star' aria-hidden='true'></i> "+repo['stargazers_count']+" <i class='fa fa-eye' aria-hidden='true'></i> "+repo['watchers']+" <i class='fa fa-code-fork' aria-hidden='true'></i> "+repo['forks_count']+" </p></div><a class='repo-link' href='"+repo["html_url"]+"'><h1 class='repo-name'>"+repo['name']+"</h1><p class='repo-desc'>"+repo['description']+"</p></a></div></span>";
        });
        $("#repository-list").html(repo_html);
    }
});
