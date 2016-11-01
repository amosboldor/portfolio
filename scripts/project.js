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

Project.projects.forEach(function(proj) {
  $('#projects').append(proj.toHtml());
});

Project.fetchAll = function() {
  if (localStorage.projectArticles) {
    var parsedData = JSON.parse(localStorage.projectArticles);
    Project.loadAll(parsedData);
    projectView.renderIndexPage();
  } else {
    $.getJSON('/../data/myProjects.json', function ( data ) {
      Project.loadAll(data);
      var stringifyedData = JSON.stringify(data);
      localStorage.setItem('projectArticles', stringifyedData);
      projectView.renderIndexPage();
    });
  }
};
