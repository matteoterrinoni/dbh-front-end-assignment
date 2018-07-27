const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/db.json`);
const getUserErrors = require(`${__dirname}/../models/user/validate`);

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

router.render = (req, res) => {
  const response = res.locals.data;

  if (res.statusCode === 404) {
    res.status(404).jsonp({
      success: false,
      message: 'User does not exist',
    });
  } else {
    res.jsonp(response);
  }
};

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  const user = req.body;
  const errors = getUserErrors(user);
  if (req.method === 'PUT') {
    if (errors) {
      res.status(400).jsonp({
        success: false,
        message: "there's some error",
        errors,
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// Use default router
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running @ 5000');
});
