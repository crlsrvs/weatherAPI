const Joi = require('joi')

const BAD_REQUEST = 400

function validate(data, schema) {
  const { error } = schema.validate(data)
  return error
}

function validationHandler(schema, check = 'body') {
  return function(req, res, next) {

    const error = validate(req[check], schema)

    if (error) {

      res.status(BAD_REQUEST).json({
        data: {},
        status: BAD_REQUEST,
        message: error.message
      })

    } else {
      next()
    }

  }
}

module.exports = validationHandler