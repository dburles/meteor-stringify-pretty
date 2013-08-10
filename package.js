Package.describe({
  summary: "Pretty JSON.stringify Shortcut"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  
  api.add_files(['pretty.js'], where);
});
