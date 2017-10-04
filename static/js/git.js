var name = window.location.href.split(".")[0].split("//")[1];
$.ajax({
    url: "https://api.github.com/users/"+name+"/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
        var repo_html = "";
        res.sort(function(a, b) {
            return a.id - b.id;
        })
        res.reverse();
        res.map((repo) => {
            if (repo['description'] == null) { var desc = '\t'; }
            else { var desc = repo['description']; }
            repo_html += "<span><div class='repo-container'><div class='null-tag'><div title='Language: "+repo['language']+"' class='"+repo['language']+"-tag'><p class='repo-stats'><i class='fa fa-star' aria-hidden='true'></i> "+repo['stargazers_count']+" <i class='fa fa-eye' aria-hidden='true'></i> "+repo['watchers_count']+" <i class='fa fa-code-fork' aria-hidden='true'></i> "+repo['forks_count']+" </p></div></div><a class='repo-link' href='"+repo["html_url"]+"'><h1 class='repo-name'>"+repo['name']+"</h1></a><p class='repo-desc'>"+desc+"</p></div></span>";
        });
        $("#repository-list").html(repo_html);
    }
});
