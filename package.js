Package.describe({
  summary: "Configure security policies enforced by the browser",
  name: "qrl:browser-policy",
  version: "1.1.1"
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.3.1');
  api.use('modules');
  api.use(['browser-policy-content', 'browser-policy-framing'], 'server');
  api.imply(['qrl:browser-policy-common@1.0.13'], 'server');
  api.mainModule('browser-policy.js', 'server');
});

Package.onTest(function (api) {
  api.use(["tinytest", "browser-policy", "ejson", "underscore"], "server");
  api.addFiles("browser-policy-test.js", "server");
});
