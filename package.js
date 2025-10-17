Package.describe({
  summary: "Configure security policies enforced by the browser",
  name: "qrl:browser-policy",
  version: "1.2.0"
});

Package.onUse(function (api) {
  api.versionsFrom('3.0');
  api.use('modules');
  api.use(['browser-policy-content@2.0.0', 'browser-policy-framing@1.1.3'], 'server');
  api.imply(['browser-policy-common@1.0.13'], 'server');
  api.mainModule('browser-policy.js', 'server');
});

Package.onTest(function (api) {
  api.use(["tinytest", "browser-policy", "ejson", "underscore"], "server");
  api.addFiles("browser-policy-test.js", "server");
});
