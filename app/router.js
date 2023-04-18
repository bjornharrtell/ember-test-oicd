import EmberRouter from '@ember/routing/router';
import config from 'ember-test-oicd/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('authenticated', { path: '' }, function () {
    this.route('test');
  });
  this.route('login');
});
