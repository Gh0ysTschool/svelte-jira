const express = require('express');
const fallback = require('express-history-api-fallback');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(`${__dirname}/public`));

app.use(fallback(`${__dirname}/public/index.html`));
app.listen(process.env.PORT || 8081);
