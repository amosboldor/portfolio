(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/amosboldor/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function (data) {
        console.log(data);
        data.forEach(function (obj) {
          repos.allRepos.push(obj);
        });
        callback();
      }
    });
  };

  repos.withTheAttribute = function(myAttr) {

    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
