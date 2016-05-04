'use strict';

import R from 'ramda';

export default (to, fn) => {
  return {
    type: 'create',
    from: R.equals('Function', R.type(fn)) ? fn : () => { return fn; },
    to: to
  };
};
