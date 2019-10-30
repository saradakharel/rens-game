const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const answers = require('./routes/api/answers');

// routes
app.use('api/v1/answers', answers);

app.get('/', (_, res) => {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
