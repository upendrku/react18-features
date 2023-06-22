Server React DOM APIs
The react-dom/server APIs let you render React components to HTML on the server. These APIs are only used on the server at the top level of your app to generate the initial HTML. A framework may call them for you. Most of your components don’t need to import or use them.

---

Server APIs for Node.js Streams

These methods are only available in the environments with Node.js Streams:
renderToPipeableStream renders a React tree to a pipeable Node.js Stream.
renderToStaticNodeStream renders a non-interactive React tree to a Node.js Readable Stream.

---

Server APIs for Web Streams

These methods are only available in the environments with Web Streams, which includes browsers, Deno, and some modern edge runtimes:
renderToReadableStream renders a React tree to a Readable Web Stream.

---

Server APIs for non-streaming environments

These methods can be used in the environments that don’t support streams:
renderToString renders a React tree to a string.
renderToStaticMarkup renders a non-interactive React tree to a string.

They have limited functionality compared to the streaming APIs.
