'use strict';

import R from 'ramda';

export default (from, to) => {
  return {
    type: 'cast',
    from: from,
    to: R.equals('Function', R.type(to)) ? to : global[to]
  };
};
