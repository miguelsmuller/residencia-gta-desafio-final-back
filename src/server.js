const app = require('./app');

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
