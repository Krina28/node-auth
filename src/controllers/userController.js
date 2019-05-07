module.exports = {

  getAllUsers: function (req, res) {
    try {
      return res.send({ status: 200, message: 'Success' });
    } catch (e) {
      console.log('>>>>>>>e', e)
      return res.status(400).send('Invalid JSON string')
    }
  }

}
