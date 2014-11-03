/*!
 * nodeonly-user
 */

/**
 * Expose
 */

module.exports = function(options) {
  options = options || {}
  return function(req, res, next) {
		console.log(req.url)
		var exception = ['/users/login','/users/register']
		if (exception.contain(req.url) == true) {
			next();
			return;
		}
	
		if (req.session.user) {
	    next();
	  } else {
	    res.redirect('/users/login');
	  }
  }
}

//
// module.exports = userMiddleware
//
// /**
//  * User Middleware for express
//  *
//  * Some common methods and statics to user schema
//  *
//  * @param {Schema} schema
//  * @param {Object} options
//  * @api public
//  */
//
// function userMiddleware(req,res,next){
// 	console.log(req.url)
// 	var exception = ['/users/login','/users/register']
// 	if (exception.contain(req.url) == true) {
// 		next();
// 		return;
// 	}
//
// 	if (req.session.user) {
//     next();
//   } else {
//     res.redirect('/users/login');
//   }
// }