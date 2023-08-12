// create web server

const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/comments', (req, res) => {
  res.send(comments.getComments());
});

app.post('/api/comments', (req, res) => {
  const { author, text } = req.body;
  comments.addComment(author, text);
  res.send(comments.getComments());
});

app.delete('/api/comments/:id', (req, res) => {
  comments.deleteComment(req.params.id);
  res.send(comments.getComments());
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});