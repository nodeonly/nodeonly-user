## nodeonly-user

Some generic methods, statics and virtuals used for user schemas

[![npm version](https://badge.fury.io/js/nodeonly-user.svg)](http://badge.fury.io/js/nodeonly-user)

## Installation

```sh
$ npm install nodeonly-user
```

or include it in `package.json`

## Usage

```js
var mongoose = require('mongoose')
var userPlugin = require('nodeonly-user')

var UserSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' }
})

UserSchema.plugin(userPlugin.schema, {})

mongoose.model('User', UserSchema)
```


## todo

```
app.use(function(req,res,next){
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
});
```


## License

apache v2
