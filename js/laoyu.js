$(document).ready(function() {
  function set_recite() {
    $("li .content").each(function(){
      var text = $(this).text();
      var words = text.split(" ");
      var head = words.slice(0, 2); 
      var tail = words.slice(2);
      head = head[0] + " " + head[1] + " ";
      tail = tail.join(" ");
      $(this).text(head);
      var insert = '<div class="meaning">' + tail + '</div>';
      $(insert).appendTo(this).hide();
    }); 
    $('#stream li').hover(function() {
      var meaning = $(this).find('.meaning');
      meaning.show();
    }, function() {
      var meaning = $(this).find('.meaning');
      meaning.hide();
    });
  }
  set_recite();
});
