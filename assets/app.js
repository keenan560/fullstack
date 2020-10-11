console.log("connected");

$(document).on("click", "#resume", (event) => {
  event.preventDefault();
  console.log("clicked");
  $("html, body").animate(
    {
      scrollTop: $("#resume-feed").offset().top,
    },
    "slow"
  );
  $("#resume-feed").html(
    `<iframe src='assets/FullStack Web Developer Resume-KMv1.pdf'>hello</</iframe>`
  );
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
];

console.log(logos.length);

$(document).on("click", "#technologies", (event) => {
  event.preventDefault();
  console.log("clicked tech");
  $("html, body").animate(
    {
      scrollTop: $("#tech-feed").offset().top,
    },
    "slow"
  );
  var row = $("<div>");
  row.addClass("container mx-auto animated fadeIn slow");
  logos.forEach((image) => {
    var logo = $("<img>");
    logo.attr("src", image);
    logo.addClass("img-thumbnail my-2 mx-2 p-2");
    row.append(logo);
  });
  $("#tech-feed").html(row);
});
