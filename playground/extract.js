const unescape = require("unescape");

const extract = (sentence) => {
  let cleaned = "";
  let i = 0;
  for (; i < sentence.length; i++) {
    if (sentence.substr(i, 5) === "<span") {
      i += 5;
      let countClose = 0,
        countOpen = 0;
      while (countClose !== 2) {
        if (sentence[i] === ">") countClose++;
        else if (sentence[i] === "<") countOpen++;
        else if (countClose === 1 && !countOpen) cleaned += sentence[i];
        i++;
      }
      break;
    }
    cleaned += sentence[i];
  }
  cleaned += extract(sentence.slice(i, sentence.length));
  return unescape(cleaned, "all");
};

const exp1 = `Akash (IAST: Ākāśa &quot;Sky&quot;) is a medium-range
mobile surface-to-air missile defense system developed
by the Defence Research and Development Organisation`;

console.log(unescape(exp1, "all"));
