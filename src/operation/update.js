'use strict';

import R from 'ramda';

export default (from, fn) => {
  return {
    type: 'update',
    from: from,
    to: R.equals('Function', R.type(fn)) ? fn : () => { return fn; },
  };
};
