$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $("#nav-list").toggleClass("is-active");
  });
});
