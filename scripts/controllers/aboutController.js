(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#aboutme').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
