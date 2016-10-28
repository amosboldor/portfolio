var projects = [];

function Project (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Project.prototype.toHtml = function() {
  var source = $('#projects-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

myProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(proj) {
  $('#projects').append(proj.toHtml());
});
