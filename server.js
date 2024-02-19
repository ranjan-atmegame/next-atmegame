const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const cors = require("cors");

console.log(process.env.NODE_ENV);
const dev = process.env.NODE_ENV !== "production";

// const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port });
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      //Validate request
      cors({
        // Set the browser cache time for preflight responses
        maxAge: 86400,
        preflightContinue: true, // Allow us to manually add to preflights
      });

      if (req.method === "OPTIONS") {
        res.setHeader("Cache-Control", "public, max-age=86400");
        // No Vary required: cors sets it already set automatically
        return res.end();
      }

      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      //   const { pathname, query } = parsedUrl;

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
});
