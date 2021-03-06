// flow-typed signature: dd6bc947906a9c851441fbe462c7678d
// flow-typed version: <<STUB>>/redux-logger_v^3.0.1/flow_v0.46.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'redux-logger'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */
import type { Middleware } from 'redux'

declare module 'redux-logger' {
  declare type Options<S, A> = {
    collapsed: (
      getState: () => S,
      action: A,
      logEntry: { error?: mixed },
    ) => boolean,
  }
  declare module.exports: {
    createLogger: <S, A>(options: Options<S, A>) => Middleware<S, A>,
  }

  /**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
}
declare module 'redux-logger/dist/index' {
  declare module.exports: any
}
declare module 'redux-logger/dist/index.min' {
  declare module.exports: any
}
declare module 'redux-logger/lib/core' {
  declare module.exports: any
}
declare module 'redux-logger/lib/defaults' {
  declare module.exports: any
}
declare module 'redux-logger/lib/diff' {
  declare module.exports: any
}
declare module 'redux-logger/lib/helpers' {
  declare module.exports: any
}
declare module 'redux-logger/lib/index' {
  declare module.exports: any
}
declare module 'redux-logger/src/core' {
  declare module.exports: any
}
declare module 'redux-logger/src/defaults' {
  declare module.exports: any
}
declare module 'redux-logger/src/diff' {
  declare module.exports: any
}
declare module 'redux-logger/src/helpers' {
  declare module.exports: any
}
declare module 'redux-logger/src/index' {
  declare module.exports: any

  // Filename aliases
}
declare module 'redux-logger/dist/index.js' {
  declare module.exports: $Exports<'redux-logger/dist/index'>
}
declare module 'redux-logger/dist/index.min.js' {
  declare module.exports: $Exports<'redux-logger/dist/index.min'>
}
declare module 'redux-logger/lib/core.js' {
  declare module.exports: $Exports<'redux-logger/lib/core'>
}
declare module 'redux-logger/lib/defaults.js' {
  declare module.exports: $Exports<'redux-logger/lib/defaults'>
}
declare module 'redux-logger/lib/diff.js' {
  declare module.exports: $Exports<'redux-logger/lib/diff'>
}
declare module 'redux-logger/lib/helpers.js' {
  declare module.exports: $Exports<'redux-logger/lib/helpers'>
}
declare module 'redux-logger/lib/index.js' {
  declare module.exports: $Exports<'redux-logger/lib/index'>
}
declare module 'redux-logger/src/core.js' {
  declare module.exports: $Exports<'redux-logger/src/core'>
}
declare module 'redux-logger/src/defaults.js' {
  declare module.exports: $Exports<'redux-logger/src/defaults'>
}
declare module 'redux-logger/src/diff.js' {
  declare module.exports: $Exports<'redux-logger/src/diff'>
}
declare module 'redux-logger/src/helpers.js' {
  declare module.exports: $Exports<'redux-logger/src/helpers'>
}
declare module 'redux-logger/src/index.js' {
  declare module.exports: $Exports<'redux-logger/src/index'>
}
