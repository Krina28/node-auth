module.exports  = {
	getAllUsers: async function(req, res){

		try {
     console.log('>>>CALL')
      
      res.send({status:200, message: 'Success'});
    } catch (e) {
    	console.log('>>>>>>>e',e)
      res.status(400).send('Invalid JSON string')
    }

	}

}