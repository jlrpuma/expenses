import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";

import middleware from "./middleware";
import reducers from "./reducers/index";

// creating the store
// export const configureStore = createStore(reducers)


/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @param funcs The functions to compose.
 * @returns R function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */

export const configureStore = (services) => createStore(
    reducers,
    compose(applyMiddleware(...middleware.map(f => f(services))))
    )