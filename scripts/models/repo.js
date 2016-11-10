(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.when(
     $.get('/github/users/amosboldor/repos', function(data){
       repos.allRepos = data;
     }),
     $.get('/github/users/amosboldor/followers', function(data){
       repos.followers = data;
     })
    ).done(callback);
  };

  repos.withTheAttribute = function(myAttr) {

    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
