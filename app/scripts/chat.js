$(document).ready(function()
{
  var ref = document.referrer;

  if (ref.length < 3)
  {
    ref = "./index.html";
  }

  $("#main").attr("src", ref);

});
