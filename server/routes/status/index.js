module.exports = (router) => {
  router.route('/status')
  .get((req, res) => {
     res.status(200).json({ status: 'ok'});
  });
}