'use strict';

require('source-map-support/register');
var generatorReactSdk = require('@asyncapi/generator-react-sdk');
var jsxRuntime = require('C:/Users/ahmed/AppData/Roaming/npm/node_modules/@asyncapi/cli/node_modules/@asyncapi/generator/node_modules/react/cjs/react-jsx-runtime.production.min.js');

function index ({
  asyncapi
}) {
  return /*#__PURE__*/jsxRuntime.jsx(generatorReactSdk.File, {
    name: "client.py",
    children: asyncapi.info().title()
  });
}

module.exports = index;
//# sourceMappingURL=index.js.map
