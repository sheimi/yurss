/**
 * Word object of my english website
 * to operate words
 *{
 *   "pk": 2, 
 *     "model": "words.words", 
 *     "fields": {
 *       "synonym": [], 
 *       "meaning": "this is the meaning", 
 *       "user": 1, "
 *       "last_visit_time": "2011-09-30 05:53:52", 
 *       "word": "word", 
 *       "antonym": [], 
 *       "add_time": "2011-09-30 05:53:52"
 *     }
 *}
 *
 */

(function(window) {

  var WORD_URL = '/words/crud';
  var error_message = {
    GET_WORDS: 'can not get words',
    GET_WORD: 'can not get word',
    GET_WORD_LIST: 'can not get word list',
    DELETE_WORD: 'can not delete word',
    UPDATE_WORD: 'can not update word',
    ADD_WORD: 'can not add word'
  }
  var success_message = {
    GET_WORDS: 'get words success',
    GET_WORD: 'get word success',
    GET_WORD_LIST: 'get word list success',
    DELETE_WORD: 'delete word success',
    UPDATE_WORD: 'update word success',
    ADD_WORD: 'add word success' 
  }
  window.words = {
    make_word_li: function(word, oper) {
      var li =  '<li class="word-li">' +
                  '<div class="word-id-col" style="display: none">' + word.pk + '</div>' +
                  '<div class="word-col">' + word.fields.word + '</div>' +
                  '<div class="meaning-col">' + word.fields.meaning + '</div>' +
                  '<div class="clear"></div>' +
                '</li>';
      return li;
    },

    make_mini_word_li: function(word) {
      var li =  '<li class="word-li">' +
                  '<div class="word-col-mini">' + word.fields.word + '</div>' +
                  '<div class="meaning-col-mini">' + word.fields.meaning + '</div>' +
                '</li>';
      return li;
    },

    append_li: function(li, field) {
      $(li).hide().appendTo(field).slideDown('slow');
    },
    
    prepend_li: function(li, field) {
      $(li).hide().prependTo(field).slideDown('slow');
    }
  }
    
})(window);
