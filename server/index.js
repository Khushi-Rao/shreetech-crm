const express = require('express');
const leadsRouter = require('./routes/leads');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Route 1: Health check — the simplest possible route.
// GET /api/status → returns server info
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    message: 'ShreeTech CRM Server is running',
    company: 'ShreeTech Solutions',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Route 2: Mount the leads router
// Any request starting with /api/leads will be handled by leadsRouter
app.use('/api/leads', leadsRouter);

// Route 3: Catch-all for unknown routes — like the default case in a switch statement
// If no route above matched, we send a 404 error
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.url}`
  });
});

// app.listen() is like the infinite while(1) loop in a C server.
// It tells Node.js: "start listening on port 3000 for incoming connections"
app.listen(PORT, () => {
  console.log(`✅ ShreeTech CRM Server running on http://localhost:${PORT}`);
  console.log(`📋 API Status: http://localhost:${PORT}/api/status`);
  console.log(`👥 Leads API:  http://localhost:${PORT}/api/leads`);
});