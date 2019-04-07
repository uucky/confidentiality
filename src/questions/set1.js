import types from './types';

const { TEXT, SELECT } = types;

const set1 = {
  q1: {
    question: 'In my friend group, the role I play is  ______ (smart one, funny one, partier, etc.). ',
    type: TEXT,
  },

  q2: {
    question: 'I am more of an ________.',
    type: SELECT,
    options: {
      a: 'introvert (I get energy from spending time alone)',
      b: 'extrovert (I get energy by spending time socializing)',
      c: 'ambivert (I get energy from both at times)',
    },
  },

  q3: {
    question: 'My ideal job would be _______.'
    type: TEXT,
  },

  q4: {
    question: 'Out of the following, I would most hate to be called ______.',
    showcase: '<username> would most hate to be called <blank>.',
    type: SELECT,
    options: {
      a: 'ordinary',
      b: 'ignorant',
      c: 'cowardly',
      d: 'selfish',
    },
  },

  q5: {
    question: 'My biggest concern with my future career is _______ (failure, stress, etc.).',
    showcase: "<username>'s biggest concern about their future career is <blank>.",
    type: TEXT,
  },

  q6: {
    question: 'A time where I used creativity to solve a problem is _______.',
    type: TEXT,
  },

  q7: {
    question: 'I would evaluate my own personal success by _______.',
    type: TEXT,
  },

  q8: {
    question: 'Will attending university contribute greatly to my future success?',
    type: TEXT,
  },

  q9: {
    question: 'The name of my high school was _______.',
    showcase: "<username>'s high school was called <blank>.",
    type: TEXT,
  },

  q10: {
    question: 'My greatest weakness is _______ (public speaking, punctuality, etc.).',
    showcase: "<username>'s greatest weakness is <blank>.",
    type: TEXT,
  },

  q11: {
    question: 'My notion of success has changed since I left school in the following way: _______.',
    type: TEXT,
  },

  q12: {
    question: 'How important is it for me to be able to achieve my life goals?',
    type: SELECT,
    options: {
      a: 'extremely important',
      b: 'important',
      c: 'somewhat important',
      d: 'not so important',
      e: 'not at all important',
    },
  },

  q13: {
    question: 'In a group or team setting, the role I play is usually _______.',
    type: SELECT,
    options: {
      a: 'the one who does their part',
      b: 'the one who relies on others to help',
      c: 'the one who oversees everything',
      d: 'the one who has to do someone elses part',
      e: 'the one who doesnt show up to meetings',
    },
  },

  q14: {
    question: 'When someone interrupts me in the middle of a task, I feel _______.',
    type: TEXT,
  },

  q15: {
    question: 'The skill I have which will be most useful for my future career is _______ (graphic design, website development, public speaking, etc.).',
    type: TEXT,
  },
};

export default set1;
