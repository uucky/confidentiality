import types from './types';

const { TEXT, SELECT } = types;

const set2 = {
  q1: {
    question: 'Do you have boyfriend or girlfriend?',
    type: TEXT,
  },
  q2: {
    question: 'Which do you think is more important in a relationship?',
    type: SELECT,
    options: {
      a: 'My lover must be interesting enough',
      b: 'My lover must be good-looking.',
    },
  },
  q3: {
    question: 'Which season do you think is the best for dating?',
    type: SELECT,
    options: {
      a: 'Spring',
      b: 'Summer',
      c: 'Fall',
      d: 'Winter',
    },
  },
};

export default set2;
