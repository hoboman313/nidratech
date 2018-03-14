import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  collapsed: true,
  year: computed(function () {
    return new Date().getFullYear();
  })
});
