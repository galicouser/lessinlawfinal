const app = require('./server.js'); // Use require instead of import

const PORT = process.env.NODE_PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
