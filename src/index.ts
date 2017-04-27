/**
 * # React Specific API
 *
 *
 * UI-Router for React relies heavily on [`@uirouter/core`](http://github.com/ui-router/core).
 * The following APIs are extensions to the core ui-router APIs, specific to `ui-router-react`.
 *
 * @preferred
 * @reactapi
 * @module react
 */ /** */
export {trace} from "@uirouter/core";
export {ReactStateDeclaration} from "./interface";

export * from './components/components';

export {UIRouterReact} from "./core";

export {
  hashLocationPlugin,
  pushStateLocationPlugin,
  memoryLocationPlugin,
  servicesPlugin
} from '@uirouter/core';