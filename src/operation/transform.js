'use strict';

export default (from, operations) => {
  return {
    type: 'transform',
    from: from,
    operations: operations
  };
};
