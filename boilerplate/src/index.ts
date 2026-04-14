import { Hono } from 'hono';
import type { Env } from './types';

// Import ticker pages as you add them
// import { bxIndexHTML, bxMemoHTML, bxPresentationHTML, bxModelHTML, bxConsensusHTML } from './pages/bx';

const app = new Hono<{ Bindings: Env }>();

// Landing page with index of available tickers
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Research Portal</title>
<style>
body{font-family:system-ui;max-width:720px;margin:80px auto;padding:0 24px;line-height:1.7;color:#111}
h1{font-size:28px;font-weight:800;margin-bottom:16px}
p{color:#555}
ul{list-style:none;padding:0;margin-top:24px}
li{padding:16px 0;border-bottom:1px solid #eee}
a{color:#B8973E;text-decoration:none;font-weight:600}
a:hover{text-decoration:underline}
</style>
</head>
<body>
<h1>Research Portal</h1>
<p>Institutional equity research built with the <code>stock-pitch</code> Claude Code plugin.</p>
<ul>
  <li><a href="/research/bx/">BX — Blackstone</a> &nbsp;· Alternative Asset Management</li>
  <!-- Add your tickers here -->
</ul>
</body>
</html>`);
});

// Ticker routing pattern (repeat for each ticker):
//
// if (path === '/research/bx' || path === '/research/bx/') return c.html(bxIndexHTML);
// if (path === '/research/bx/memo.html') return c.html(bxMemoHTML);
// if (path === '/research/bx/presentation.html') return c.html(bxPresentationHTML);
// if (path === '/research/bx/model.html') return c.html(bxModelHTML);
// if (path === '/research/bx/consensus.html') return c.html(bxConsensusHTML);

// For a cleaner pattern, register each ticker as its own sub-app:
// app.route('/research/bx', bxApp);

// 404 fallback
app.notFound((c) => c.text('Not Found', 404));

export default app;
