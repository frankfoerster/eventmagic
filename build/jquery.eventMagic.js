/** jquery.eventMagic - v0.0.1 */
(function($) {

  function run(bind, events) {
    var i, _i, len = events.length, _len, el, _el, evt, _evt, fn;

    bind = (bind != 'on' && bind != 'off') ? 'on' : bind;

    for (i = 0; i < len; i++) {
      el = events[i][0];
      if (typeof events[i][2] !== 'undefined') {
        _el = events[i][1];
        for (_i = 0, _len = events[i][2].length; _i < _len; _i++) {
          _evt = events[i][2][_i][0];
          fn = events[i][2][_i][1];
          el[bind](_evt, _el, fn);
        }
      } else {
        evt = events[i][1];
        el[bind](evt);
      }
    }
  }

  $.extend({

    attachEvents: function(events) {
      run('on', events);
    },

    detachEvents: function(events) {
      run('off', events);
    }

  });


})(jQuery);