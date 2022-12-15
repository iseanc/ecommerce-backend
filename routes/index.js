const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// TODO: Do something here: GET RID OF IT, OR CORRECT IT SO OTHER PATHS CAN WORK
// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

module.exports = router;