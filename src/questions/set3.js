import types from './types';

const { TEXT, SELECT } = types;

const set3 = {
  q1: {
    question: 'I am more of an ______.',
    type: SELECT,
    options: {
      a: 'introvert (I get energy from spending time alone)',
      b: 'extrovert (I get energy by spending time socializing)',
      c: 'ambivert (I get energy from both at times)',
    },
  },

  q2: {
    question: 'I consider myself more ______.',
    type: SELECT,
    options: {
      a: 'emotional',
      b: 'rational',
      c: 'balanced',
    },
  },

  q3: {
    question: 'My zodiac sign is ______.',
    type: TEXT,
  },

  q4: {
    question: 'My favourite hobby is ______.',
    type: TEXT,
  },

  q5: {
    question: 'My favourite genre of music is ______.',
    type: TEXT,
  },

  q6: {
    question: 'A celebrity or historical figure I would most like to get a drink with is ______.',
    type: TEXT,
  },

  q7: {
    question: 'If I could live anywhere in the world, I would live in ______.',
    type: TEXT,
  },

  q8: {
    question: 'The thing that most draws me to another person is their ______.',
    type: TEXT,
  },

  q9: {
    question: 'The language(s) I can speak is/are ______.',
    type: TEXT,
  },

  q10: {
    question: 'My preferred type of pet to have is ______.',
    type: TEXT,
  },

  q11: {
    question: 'I would most hate to be called ______.',
    type: SELECT,
    options: {
      a: 'ordinary',
      b: 'ignorant',
      c: 'cowardly',
      d: 'selfish',
    },
  },

  q12: {
    question: 'I find the most meaning in my life when I am ______ (working hard on a project, improving a skill, with someone I love, etc.).',
    showcase: '<username> finds the most meaning in their life when they are <blank>.',
    type: TEXT,
  },

  q13: {
    question: 'My golden rule is ______.',
    showcase: "<username>'s golden rule is <blank>.",
    type: TEXT,
  },

  q14: {
    question: 'I live ______.',
    showcase: '<username> lives <blank>.',
    type: SELECT,
    options: {
      a: 'alone',
      b: 'with a roommate or friend',
      c: 'with my family',
    },
  },

  q15: {
    question: 'My kink is ______.',
    showcase: "<username>'s kink is <blank>.",
    type: TEXT,
  },
};

export default set3;
