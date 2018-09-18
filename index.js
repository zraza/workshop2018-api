var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

const attendees = [
  'Alex Thomas',
  'Chris Dix',
  'Chris Monkman',
  'Daniel Almaguermelendez',
  'Gillan Cash',
  'Michael Lord',
  'Thiruppathi Muthukumar'
];

const topics = [
  {
    id: 1,
    day: 1,
    progress: 'completed',
    title: 'React introduction'
  },
  {
    id: 2,
    day: 1,
    progress: 'started',
    title: 'React Components'
  },
  {
    id: 3,
    day: 1,
    progress: 'pending',
    title: 'Introduction to JSX'
  },
  {
    id: 4,
    day: 1,
    progress: 'pending',
    title: "What's new in ES6"
  },
  {
    id: 5,
    day: 1,
    progress: 'pending',
    title: 'Introduction to yarn'
  },
  {
    id: 6,
    day: 1,
    progress: 'pending',
    title: 'Introduction to create-react-app'
  },
  {
    id: 7,
    day: 1,
    progress: 'pending',
    title: 'Introduction to jest'
  },
  {
    id: 8,
    day: 1,
    progress: 'pending',
    title: 'Introduction to state'
  },
  {
    id: 9,
    day: 1,
    progress: 'pending',
    title: 'Lifecycle hooks'
  },
  {
    id: 10,
    day: 2,
    progress: 'pending',
    title: 'Presentational and Container Components'
  },
  {
    id: 11,
    day: 2,
    progress: 'pending',
    title: 'Fetching REST Data'
  },
  {
    id: 12,
    day: 2,
    progress: 'pending',
    title: 'Higher-Order Components'
  },
  {
    id: 13,
    day: 2,
    progress: 'pending',
    title: 'Introduction to styled-components'
  },
  {
    id: 14,
    day: 2,
    progress: 'pending',
    title: 'Event Handling'
  },
  {
    id: 15,
    day: 2,
    progress: 'pending',
    title: 'Introduction to React Router'
  },
  {
    id: 16,
    day: 2,
    progress: 'pending',
    title: 'Introduction to React Context'
  },
  {
    id: 17,
    day: 2,
    progress: 'pending',
    title: 'Introduction to Storybook'
  }
];

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/topics', function(req, res) {
  var day = req.query.day;
  if (!day) return res.json(topics.map(topic => topic.title));
});

app.get('/topics-with-detail', function(req, res) {
  var day = parseInt(req.query.day || 1);
  return res.json(topics.filter(topic => topic.day === day));
});

app.post('/topic/:id', function(req, res) {
  const { progress } = req.body;
  const id = parseInt(req.params.id);
  const topic = topics.find(topic => topic.id === id);
  topic.progress = progress;
  return res.json(topic);
});

app.get('/attendees', function(req, res) {
  res.json(attendees);
});

var port = 3131;
app.listen(port, () => console.log(`listening on port ${port}!`));
