(function(module) {
  var repoController = {};

  repoController.reveal = function() {
    $('.tab-content').hide();
    $('#github-repos').fadeIn();
  };

  module.repoController = repoController;
})(window);
