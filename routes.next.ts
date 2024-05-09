/**
 * An array of routes that are accessible to the public
 * These routes do not need authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are not accessible to the public once they are are authenticated
 * Redirect user to the "/" page once authenticated
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * The prefix for API authentication route
 * Routes that start with this are used for API authentication purposes
 * @type {string}
 *
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";
