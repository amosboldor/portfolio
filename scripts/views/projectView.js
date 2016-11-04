var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('main section[id=\"' + $(this)[0].attributes[1].value + '\"]').fadeIn();
    $('main section[id=\"project-' + $(this)[0].attributes[1].value + '\"]').fadeIn();
  });
};

projectView.renderIndexPage = function() {
  Project.projects.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
  projectView.handleMainNav();
  $('footer').html('<p>' + 'Number of words in every description: ' + Project.numWordsAll() + '</p>');
};

Project.fetchAll();
