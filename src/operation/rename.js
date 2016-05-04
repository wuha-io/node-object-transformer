'use strict';

export default (from, to) => {
  return {
    type: 'rename',
    from: from,
    to: to
  };
};
