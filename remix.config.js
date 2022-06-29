/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    // Step 1) added this first to squash "possibly an ESM only package" warning during build
    "@apollo/client",
    // Step 2) added these to resolve warnings caused by step 1
    /^ts-invariant.*/,
    "zen-observable-ts",
  ],
};
