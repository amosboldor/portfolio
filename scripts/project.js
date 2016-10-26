var projects = [];

function Project (options) {
  this.snapShotUrl = options.snapShotUrl;
  this.name = options.name;
  this.timeTook = options.timeTook;
  this.githubUrl = options.githubUrl;
  this.description = options.description;
};

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.find('#project-snapShotUrl').attr('src', this.snapShotUrl);
  $newProject.find('#project-name').text(this.name);
  $newProject.find('#project-timeTook').text(this.timeTook);
  $newProject.find('#poroject-githubUrl').attr('href', this.githubUrl);
  $newProject.find('#project-description').text(this.description);
  $newProject.removeClass('template');
  console.log('sup');
  return $newProject;
};

myProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(proj) {
  $('#projects').append(proj.toHtml());
});
