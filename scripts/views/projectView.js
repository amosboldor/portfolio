(function (module) {
  var projectView = {};

  projectView.renderIndexPage = function() {
    Project.projects.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    $('footer').html('<p>' + 'Number of words in every description: ' + Project.numWordsAll() + '</p>');
  };

  Project.fetchAll();

  module.projectView = projectView;
})(window);
