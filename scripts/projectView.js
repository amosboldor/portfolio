var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('main section[id=\"' + $(this)[0].attributes[1].value + '\"]').fadeIn();
  });
};

projectView.handleMainNav();
