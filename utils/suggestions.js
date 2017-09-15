import adjectives from './adjectives';
import nouns from './nouns';

export default function() {
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  let nounOne = nouns[Math.floor(Math.random() * nouns.length)];
  let nounTwo;
  do {
    nounTwo = nouns[Math.floor(Math.random() * nouns.length)];
  } while (nounOne === nounTwo);
  return adjective + ' ' + nounOne + ' ' + nounTwo;
}
