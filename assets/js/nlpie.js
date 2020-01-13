$(document).ready(()=>{
  $( ".dl-link" ).click(function() {
    window.location = $(this).data("href");
  });
  $( ".dl-link" ).each(function() {
    var dlLink = this;
    var downloadServer = $(this).data("download-server");
    var downloadType = $(this).data("download-type");
    var downloadFileName = $(this).data("file-name");
    $.getJSON(downloadServer + "/" + downloadType + "-file-info/" + downloadFileName, function( data ) {
      $(dlLink).find(".dl-time").text(data.date);
      $(dlLink).find(".dl-size").text(data.size);
    });
  });
});
