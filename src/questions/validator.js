import Joi from 'joi';
import questions from './index';
import types from './types';

const { TEXT, SELECT } = types;

const questionGroupsSchema = Joi.object().pattern(
  /^set\d$/, Joi.object().pattern(
    /^q\d{1,2}$/, Joi.alternatives().try(
      Joi.object().keys({
        question: Joi.string().required(),
        showcase: Joi.string(),
        type: TEXT,
      }),
      Joi.object().keys({
        question: Joi.string().required(),
        showcase: Joi.string(),
        type: SELECT,
        options: Joi.object().pattern(
          /^[a-z]$/, Joi.string()
        ),
      }),
    )
  )
);

const validate = () => {
  const { error } = questionGroupsSchema.validate(questions);
  if (error) throw new Error(error);
  console.info('Questions are OK');
};

validate();
