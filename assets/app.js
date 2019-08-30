console.log("connected");

$(document).on("click", "#skills", function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $("#feed").offset().top
  }, 'slow');
  $("#feed").html(`<div id='skills-bg'><p class='h4 p-2 my-3 skills-header text-white'>HTML: 92%</p>
    <div class="progress">
  <div id='html-bar' class="progress-bar progress-bar animated slideInLeft slower bg-danger" role="progressbar" style="width: 92%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div><p class='h4 p-2 my-3  skills-header text-white'>CSS: 87%</p> <div class="progress">
  <div id='css-bar' class="progress-bar progress-bar animated slideInLeft slower bg-danger" role="progressbar" style="width: 87%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div><p class='h4 p-2 my-3  skills-header text-white'>Javascript: 94%</p> <div class="progress">
  <div id='javascript-bar' class="progress-bar progress-bar animated slideInLeft slower bg-danger" role="progressbar" style="width: 94%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div><p class='h4 p-2 my-3  skills-header text-white'>SQL: 92%</p> <div class="progress">
  <div id='sql-bar' class="progress-bar progress-bar animated slideInLeft slower bg-danger" role="progressbar" style="width: 95%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div></div>`);
})



$(document).on("click", "#resume", (event) => {
  event.preventDefault();
  console.log("clicked");
  $('html, body').animate({
    scrollTop: $("#resume-feed").offset().top
  }, 'slow');
  $("#resume-feed").html(`<iframe src='Keenan Mapp Dev Resume.pdf'>hello</</iframe>`)
});

const logos = [
  "./assets/images/bootstrap.png",
  "./assets/images/firebase.png",
  "./assets/images/handlebars.png",
  "./assets/images/inquirer.svg",
  "./assets/images/jquery.jpg",
  "./assets/images/mongo.png",
  "./assets/images/mysql.png",
  "./assets/images/node.png",
  "./assets/images/react.png",
  "./assets/images/sequelize.png",
]

console.log(logos.length)

$(document).on("click", "#technologies", (event) => {
  event.preventDefault();
  console.log("clicked tech");
  $('html, body').animate({
    scrollTop: $("#tech-feed").offset().top
  }, 'slow');
  var row = $("<div>");
  row.addClass("container mx-auto animated fadeIn slow");
  logos.forEach(image => {
    var logo = $("<img>");
    logo.attr("src", image);
    logo.addClass("img-thumbnail my-2 mx-2 p-2");
    row.append(logo);
  })
  $('#tech-feed').html(row);

});
