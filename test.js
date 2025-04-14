// Simple test for converting "ေဆ" to "aq"

// Basic mapping
const unicodeToWinChar = {
  'ဆ': 'q',
  'ေ': 'a',
  'း': ';'
};

// Test function that directly maps "ေဆ" pattern to "aq"
function convertToWin(text) {
  // Pre-process special patterns
  text = text.replace(/ေ([\u1000-\u1021])/g, function(match, char) {
    return 'EVOWEL' + char;
  });
  
  // Character by character conversion
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i+6) === 'EVOWEL') {
      const nextChar = text[i+6];
      result += 'a' + unicodeToWinChar[nextChar];
      i += 6; // Skip the marker
      continue;
    }
    
    result += unicodeToWinChar[text[i]] || text[i];
  }
  
  return result;
}

// Test cases
const tests = [
  { input: 'ဆ', expected: 'q' },
  { input: 'ေဆ', expected: 'aq' },
  { input: 'ဆေ', expected: 'qa' }, // This should never happen in Myanmar
  { input: 'ေဆး', expected: 'aq;' }
];

// Run tests
tests.forEach(test => {
  const result = convertToWin(test.input);
  console.log(`Input: "${test.input}", Expected: "${test.expected}", Result: "${result}" - ${result === test.expected ? 'PASS' : 'FAIL'}`);
});

// Log the actual characters and their codes for debugging
console.log('\nCharacter codes:');
for (let i = 0; i < 'ေဆး'.length; i++) {
  const char = 'ေဆး'[i];
  console.log(`Char: ${char}, Unicode: U+${char.charCodeAt(0).toString(16).toUpperCase()}`);
} 