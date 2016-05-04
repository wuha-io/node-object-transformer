'use strict';

import vm from 'vm';

export default (script, ctx) => (new vm.Script(script)).runInContext(new vm.createContext(ctx));
