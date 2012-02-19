$(document).ready(function() {
  function get_word() {
    var rss_url = 'http://api.fanfou.com/statuses/user_timeline/greword.rss';
    $.getFeed({
      url: rss_url,
      success: function(feed){
        word = feed.items[0].title.split(' ')[0];
        meaning = feed.items[0].title.split(' ').slice(1).join(' ');
        var notification = webkitNotifications.createNotification(
          '../icons/icon48.jpeg',
          word,
          meaning
        );
        notification.show();
      }
    });
  }
  $('body').everyTime('600s', get_word)
  get_word();
});
