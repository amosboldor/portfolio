(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').html());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#github-repos').append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
    $('.followers').append(
       repos.followers.map(followersCompiler)
     );
  };

  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
