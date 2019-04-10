import types from './types';

const { TEXT, SELECT } = types;

const set2 = {
  q1: {
    question: 'My relationship status is _______ (single, taken, complicated, etc).',
    type: TEXT,
  },
  q2: {
    question: 'My ideal partner should be _______.',
    type: SELECT,
    options: {
      a: 'intelligent',
      b: 'good-looking',
    },
  },
  q3: {
    question: 'My sexual orientation is ________.',
    type: TEXT,
  },
  q4: {
    question: 'I think ______ is the best season for dating.',
    type: SELECT,
    options: {
      a: 'Spring',
      b: 'Summer',
      c: 'Fall',
      d: 'Winter',
    },
  },
  q5: {
    question: 'My gender is ______.',
    type: TEXT,
  },
  q6: {
    question: 'I am _____ premarital sex.',
    showcase: '<username> is <blank> premarital sex.',
    type: SELECT,
    options: {
      a: 'for',
      b: 'against',
      c: 'neutral about',
    },
  },
  q7: {
    question: 'The personality trait I value most in my partner is that they are __________.',
    type: TEXT,
  },
  q8: {
    question: 'I have ______ sexual experience before.',
    showcase: '<username> has <blank> sexual experiences before.',
    type: SELECT,
    options: {
      a: 'had',
      b: 'never had',
    },
  },
  q9: {
    question: 'My most embarrassing moment with my partner is ________________________.',
    type: TEXT,
  },
  q10: {
    question: 'My sex-drive is ______.',
    showcase: '<username>’s sex drive is <blank>.',
    type: SELECT,
    options: {
      a: 'higher than most',
      b: 'lower than most',
      c: 'average',
    },
  },
  q11: {
    question: 'I use a dating app (once an hour, every day, never)_______________.',
    type: TEXT,
  },
  q12: {
    question: 'I will ____________ when my partner betrays me.',
    type: SELECT,
    options: {
      a: 'choose to forgive them',
      b: 'break up with them',
      c: 'take my revenge on them',
    },
  },
  q13: {
    question: 'I think _______(male / female) should pay for a first date.',
    type: TEXT,
  },
  q14: {
    question: 'I _______ checked the cellphone which belongs to partner without them knowing.',
    showcase: '<username> <blank> checked their partner’s cellphone without them knowing.',
    type: SELECT,
    options: {
      a: 'have',
      b: 'haven’t',
    },
  },
  q15: {
    question: 'The most important part of a relationship for me is______.',
    type: SELECT,
    options: {
      a: 'having someone to confide in',
      b: 'equal effort',
      c: 'sex',
    },
  },
};

export default set2;
