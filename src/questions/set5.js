import types from './types';

const { TEXT, SELECT } = types;

const set5 = {
  q1: {
    question: 'When I am feeling down, I ______.',
    type: SELECT,
    options: {
      a: 'share it with family and friends',
      b: 'bear it without telling anyone',
      c: 'venting your anger to others',
    },
  },

  q2: {
    question: 'If I could write a letter to my 12 year old self, I would say ______.',
    type: TEXT,
  },

  q3: {
    question: 'My childhood dream was to be ______.',
    type: TEXT,
  },

  q4: {
    question: 'If I am asked for an interview or profile, I consider my best trait to be ______.',
    type: TEXT,
  },

  q5: {
    question: 'It would hurt me the most to ______.',
    type: SELECT,
    options: {
      a: 'be ignored',
      b: 'be lonely',
      c: "love someone who doesn't love me back",
      d: 'see my hard work not translating into results',
      e: 'to be second best',
    },
  },

  q6: {
    question: 'My favourite cultural/family tradition that I take part in is _______.',
    type: TEXT,
  },

  q7: {
    question: 'If it was discovered that personality traits were partly genetic and could be removed with gene therapy, would it be ethical to edit out negative character traits that harm others like extreme aggression, compulsive lying, or cruelty?',
    type: TEXT,
  },

  q8: {
    question: 'I would consider myself ______ to talk to.',
    type: SELECT,
    options: {
      a: 'easy',
      b: 'hard',
    },
  },

  q9: {
    question: 'If I had to choose my partner from these two options, I would choose ______.',
    type: SELECT,
    options: {
      a: 'someone I love',
      b: 'someone who loves me',
    },
  },

  q10: {
    question: 'The moment in my life that I regret the most is ______.',
    showcase: 'The moment in their life that <username> regrets the most is <blank>.',
    type: TEXT,
  },

  q11: {
    question: 'If I had only 24 hours left to live, the most important thing I would do is ______.',
    showcase: 'If <username> only had 24 hours to live, the most important thing they would do is <blank>.',
    type: TEXT,
  },

  q12: {
    question: "I  ______ been attracted to my best friend's partner.",
    type: SELECT,
    options: {
      a: 'have',
      b: 'have not',
    },
  },

  q13: {
    question: 'My kink is ______.',
    showcase: "<username>'s kink is <blank>",
    type: TEXT,
  },

  q14: {
    question: 'The language(s) I can speak is/are ______.',
    type: TEXT,
  },

  q15: {
    question: 'My biggest weakness is ______.',
    showcase: "<username>'s biggest weakness is <blank>",
    type: TEXT,
  },
};

export default set5;
