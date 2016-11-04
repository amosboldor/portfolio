(function (module) {
  var newProject = {};

  newProject.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#project-json').on('focus', function(){
      $(this).select();
    });
    $('#new-form').on('change', newProject.create);
  };

  newProject.create = function() {
    $('#project-preview').empty();
    var formProject = new Project({
      snapShotUrl: $('#snap-shot-url').val(),
      name: $('#project-name').val(),
      timeTook: $('#time-took').val(),
      githubUrl: $('#github-url').val(),
      description: $('#project-description').val(),
    });
    $('#project-preview').append(formProject.toHtml('#project-template'));
    $('#export-field').show();
    $('#project-json').val(JSON.stringify(formProject) + ',');
  };

  newProject.initNewArticlePage();

  module.newProject = newProject;
})(window);
