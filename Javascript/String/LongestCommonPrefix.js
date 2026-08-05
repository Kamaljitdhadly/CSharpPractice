function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  let i = 0;

  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
}

const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // fl