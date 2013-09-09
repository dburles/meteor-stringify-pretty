Package.describe({
  summary: "Pretty JSON.stringify Shortcut"
});

Package.on_use(function (api, where) {
  api.add_files('pretty.js', ['server', 'client']);
  if (api.export)
    api.export('p');
});
