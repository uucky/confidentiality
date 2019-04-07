import types from './types';

const { TEXT, SELECT } = types;

const set4 = {
  q1: {
    question: 'I have ______ sibling(s)',
    type: TEXT,
  },
  q2: {
    question: 'I have a better connection with _____.',
    type: SELECT,
    options: {
      a: 'my mom',
      b: 'my dad',
      c: 'neither of my parent',
    },
  },
  q3: {
    question: 'My childhood best friend’s name was _____.',
    type: TEXT,
  },
  q4: {
    question: 'I would rather spend a day with ______.',
    type: SELECT,
    options: {
      a: 'my family',
      b: 'my friends',
      c: 'myself',
    },
  },
  q5: {
    question: 'If I could change a genetic trait my parents gave me, I would change my _____________',
    showcase: 'If <username> could change a genetic trait of theirs, they would change their <blank>.',
    type: TEXT,
  },
  q6: {
    question: 'I would say I have a best friend who also considers me their best friend:_______.',
    type: SELECT,
    options: {
      a: 'Yes',
      b: 'No',
      c: 'I don’t know',
    },
  },
  q7: {
    question: 'Someone I would not be able to live without is ________.',
    type: TEXT,
  },
  q8: {
    question: 'If your family and friends did not like your significant other, would you reconsider having a relationship with that person?_______',
    type: SELECT,
    options: {
      a: 'Yes',
      b: 'No',
    },
  },
  q9: {
    question: 'A secret only my best friends know is ___________________________.',
    showcase: 'A secret only <username>’s best friend knows about is <blank>.',
    type: TEXT,
  },
  q10: {
    question: 'My family’s favourite place to go on vacation is _____________',
    type: TEXT,
  },
  q11: {
    question: 'A personality trait that I would say defines my family is ____________.',
    type: TEXT,
  },
  q12: {
    question: 'I would like to have (a number) _______ child.',
    type: TEXT,
  },
  q13: {
    question: 'A role that I take on in my family is _______ (caretaker, breadwinner, cleaner, cook).',
    type: TEXT,
  },
  q14: {
    question: 'A secret within my family is that _________.',
    showcase: '<username>’s family secret is that <blank>.',
    type: TEXT,
  },
  q15: {
    question: 'My family’s largest feud was about _________.',
    showcase: '<username>’s largest family feud was about <blank>.',
    type: TEXT,
  },
};

export default set4;
