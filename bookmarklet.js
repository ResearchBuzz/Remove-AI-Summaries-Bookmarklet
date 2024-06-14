javascript:(function(){
  var query = prompt("Enter your search query:");
  if (query !== null && query !== "") {
    var modifiedQuery = query + " -nobodyaskedyou";
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(modifiedQuery);
    window.open(searchUrl, "_blank");
  }
})();
