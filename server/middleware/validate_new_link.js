const Joi = require("joi");

module.exports = function (req, res, next) {
  const data = req.body;

  const schema = Joi.object().keys({
    directedLink: Joi.string().domain().required(),
    shortenedLinkCode: Joi.string().required(),
  });

  const validation = schema.validate(data);

  if (validation.error) {
    res.send({ error: validation.error.details[0].message });
    return;
  }
  next();
};
