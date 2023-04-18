import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { debug } from '@ember/debug';

export default class TestRoute extends Route {
  @service session;

  async model() {
    debug('TestRoute model');
    return {
      data: {
        attributes: {
          version: 'this is just a test',
        },
      },
    };
  }
}
