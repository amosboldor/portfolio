(function (module) {

  function Project (opts) {
    for (key in opts) {
      this[key] = opts[key];
    }
  };

  Project.projects = [];

  Project.prototype.toHtml = function() {
    var source = $('#projects-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Project.loadAll = function (inputData) {
    inputData.forEach(function(ele) {
      Project.projects.push(new Project(ele));
    });
  };

  Project.ajaxGetJSON = function () {
    $.ajax({
      url: '/../data/myProjects.json',
      method: 'GET',
      success: function (data, textStatus, jqXHR) {
        Project.loadAll(data);
        var stringifyedData = JSON.stringify(data);
        localStorage.setItem('projectArticles', stringifyedData);
        localStorage.setItem('ETag', jqXHR.getResponseHeader('ETag'));
        projectView.renderIndexPage();
      }
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectArticles) {
      $.ajax({
        url: '/../data/myProjects.json',
        method: 'HEAD',
        success: function (data, textStatus, jqXHR) {
          if (localStorage.ETag === jqXHR.getResponseHeader('ETag')) {
            console.log('Has Not Changed');
            var parsedData = JSON.parse(localStorage.projectArticles);
            Project.loadAll(parsedData);
            projectView.renderIndexPage();
          } else {
            console.log('Has Changed');
            Project.ajaxGetJSON();
          }
        }
      });

    } else {
      Project.ajaxGetJSON();
    }
  };

  Project.numWordsAll = function() {
    return Project.projects.map(function(project) {
      return project.description.split(' ').length;
    })
    .reduce(function(prev, next) {
      return prev + next;
    });
  };

  module.Project = Project;
})(window);
