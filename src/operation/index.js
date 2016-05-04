'use strict';

import create from './create';
import remove from './remove';
import rename from './rename';
import update from './update';
import cast from './cast';
import transform from './transform';

export default {
  create: create,
  remove: remove,
  rename: rename,
  update: update,
  cast: cast,
  transform: transform,
  list: [ 
    create,
    remove,
    rename,
    update,
    cast,
    transform
  ]
};
