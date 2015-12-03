$(document).ready(function(){


//calls repos for list group items
$.ajax({
 type: "GET",
 url: "https://api.github.com/users/WolfgangHall/repos",
 success: function(repos) {
  for (var i = 0; i < repos.length; i++) {
   var newListItem = buildListGroup (repos[i]);
   $(".list-group").append(newListItem);
  }
 },
 error: function (jqXHR, textStatus) {
  alert("Something is wrong here");
 }
});

function buildListGroup (repoData) {
 var commitsApiUrl = "https://api.github.com/repos/";
 commitsApiUrl += repoData.owner.login + "/";
 commitsApiUrl += repoData.name + "/commits";

 var newLink = $("<a>")
  .attr("href", commitsApiUrl)
  .addClass("list-group-item")
  .append(repoData.full_name);
  return newLink
 }


//calls commit messages for table

});