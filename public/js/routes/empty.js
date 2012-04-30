// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/server", "templates/confirm", "smog/notify"], function(server, templ, notify) {
    return function(_arg) {
      var name;
      name = _arg.name;
      $('#content').append(templ({
        title: 'Empty',
        text: 'Emptying a collection will remove every document it contains.\nYou will not be able to recover any data lost.'
      }));
      $('#confirm-modal').modal().css({
        'margin-left': function() {
          return -($(this).width() / 2);
        }
      });
      $('#confirm-modal').on('hidden', function() {
        return $('#confirm-modal').remove();
      });
      return $('#confirm-button').click(function() {
        return server.collection({
          collection: name.toLowerCase(),
          type: 'empty'
        }, function(err) {
          if (err != null) {
            return notify.error("Error emptying collection: " + err);
          }
          $('#confirm-modal').modal('hide');
          notify.success("Collection emptied");
          return window.location.hash = "#/collection/" + name;
        });
      });
    };
  });

}).call(this);
