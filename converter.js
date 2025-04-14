// Character mappings for conversion
const unicodeToWinChar = {
  က: "u",
  ခ: "c",
  ဂ: "*",
  ဃ: "C",
  င: "i",
  စ: "p",
  ဆ: "q",
  ဇ: "Z",
  ဈ: "ps",
  ဉ: "O",
  ည: "n",
  ဋ: "#",
  ဌ: "X",
  ဍ: "!",
  ဎ: "!",
  ဏ: "P",
  တ: "w",
  ထ: "x",
  ဒ: "'",
  ဓ: '"',
  န: "e",
  ပ: "y",
  ဖ: "z",
  ဗ: "A",
  ဘ: "b",
  မ: "r",
  ယ: ",",
  ရ: "&",
  လ: "v",
  ဝ: "0",
  သ: "o",
  ဟ: "[",
  ဠ: "V",
  အ: "t",

  // Vowels
  "ါ": "g",
  "ာ": "m",
  "ိ": "d",
  "ီ": "D",
  "ု": "k",
  "ူ": "l",
  "ေ": "a",
  "ဲ": "J",
  "ံ": "H",
  "့": "h",
  "း": ";",
  "်": "f",
  "ျ": "s",
  "ြ": "j",
  "ွ": "G",
  "ှ": "S",
  // Marks
  "္": "f",
  // Numbers
  "၀": "0",
  "၁": "1",
  "၂": "2",
  "၃": "3",
  "၄": "4",
  "၅": "5",
  "၆": "6",
  "၇": "7",
  "၈": "8",
  "၉": "9",
  // Punctuation
  "၊": "/",
  "။": "?",
  " ": " ",
  "?": "?",
  "။": "/",
  "၊": "?",
  '"': '"',
  '"': '"',
  "\n": "\n",
  // Special Characters
  "၏":"\\",
  "ဩ":"Mo",
  "၎င်း": "4if;",
  ဿ: "ó",
  "၍": "í",
  "၌": "ü",
  "၎": "¤",
  င်္: "F",
  ဉာ: "ˆ",
  ဦ: "OD",
  ဣ: "£",
};

const zawgyiToWinChar = {
  က: "u",
  ခ: "c",
  ဂ: "*",
  ဃ: "C",
  င: "i",
  စ: "p",
  ဆ: "q",
  ဇ: "Z",
  ဈ: "ps",
  ဉ: "O",
  ည: "n",
  ဋ: "#",
  ဌ: "X",
  ဍ: "!",
  ဎ: "!",
  ဏ: "P",
  တ: "w",
  ထ: "x",
  ဒ: "'",
  ဓ: '"',
  န: "e",
  ပ: "y",
  ဖ: "z",
  ဗ: "A",
  ဘ: "b",
  မ: "r",
  ယ: ",",
  ရ: "&",
  လ: "v",
  ဝ: "0",
  သ: "o",
  ဟ: "[",
  ဠ: "V",
  အ: "t",

  // Extras
  // "ဋ္ဌာ":"|m",

  // Vowels
  "ါ": "g",
  "ာ": "m",
  "ိ": "d",
  "ီ": "D",
  "ု": "k",
  "ူ": "l",
  "ေ": "a",
  "ဲ": "J",
  "ံ": "H",
  "့": "h",
  "း": ";",
  "်": "f",
  "ျ": "s",
  "ြ": "j",
  "ွ": "G",
  "ှ": "S",
  // Marks
  "္": "f",
  // Numbers
  "၀": "0",
  "၁": "1",
  "၂": "2",
  "၃": "3",
  "၄": "4",
  "၅": "5",
  "၆": "6",
  "၇": "7",
  "၈": "8",
  "၉": "9",
  // Punctuation
  "၊": "/",
  "။": "?",
  " ": " ",
  "?": "?",
  ".": ".",
  ",": ",",
  '"': '"',
  '"': '"',
  "\n": "\n",
  // Special Characters
  "၎င်း": "4if;",
  ဿ: "ó",
  "၏":"\\",
  "ဩ":"Mo",
  "၍": "í",
  "၌": "ü",
  "၎": "¤",
  "င်္": "F",
  ဉာ: "ˆ",
  ဦ: "OD",
  ဣ: "£",
};

// Add direct mappings for common E vowel combinations
// This explicitly maps each ေ + consonant combination to the correct Win Innwa output
// const eVowelMappings = {
//   "ေရှ": "a&S",  
//   "ေက": "au",
//   "ေခ": "ac",
//   "ေဂ": "a*",
//   "ေဃ": "aC",
//   "ေင": "ai",
//   "ေစ": "ap",
//   "ေဆ": "aq",
//   "ေဇ": "aZ",
//   "ေဈ": "aps",
//   "ေဉ": "aO",
//   "ေည": "an",
//   "ေဋ": "a#",
//   "ေဌ": "aX",
//   "ေဍ": "a!",
//   "ေဎ": "a!",
//   "ေဏ": "aP",
//   "ေတ": "aw",
//   "ေထ": "ax",
//   "ေဒ": "a'",
//   "ေဓ": 'a"',
//   "ေန": "ae",
//   "ေပ": "ay",
//   "ေဖ": "az",
//   "ေဗ": "aA",
//   "ေဘ": "ab",
//   "ေမ": "ar",
//   "ေယ": "a,",
//   "ေရ": "a&",
//   "ေလ": "av",
//   "ေဝ": "a0",
//   "ေသ": "ao",
//   "ေဟ": "a[",
//   "ေဠ": "aV",
//   "ေအ": "at",
  

  
// };

// Function to reorder င်္ with adjacent characters
function reorderNgaThet(text) {
  // Create a pattern to match င်္ followed by any Myanmar character
  const ngaThetPattern = /(င်္)([\u1000-\u109F])/g;

  // Replace each occurrence by reversing the order
  return text.replace(ngaThetPattern, function (match, ngaThet, nextChar) {
    return nextChar + ngaThet;
  });
}

// Function to reorder ေ (E vowel) with adjacent characters
// function fixEVowelOrder(text) {
//   // Create a pattern to match ေ followed by any Myanmar consonant
//   const eVowelPattern = /(ေ)([\u1000-\u1021])/g;

//   // Replace each occurrence by reversing the order
//   return text.replace(eVowelPattern, function (match, nextChar, eVowel) {
//     return nextChar + eVowel;
//   });
// }

// Function to handle Ya Pint + U vowel combinations
function handleYaPint(text) {
  // This regex matches Ya Pint followed by U vowels
  return text.replace(/(ျ)(ု|ူ)/g, function (match, ya, u) {
    // Convert to Win-Innwa format
    return u === "ု" ? "sK" : "sL";
  });
}

// Convert Unicode text to Win Innwa text
function unicodeToWinText(unicode) {
  try {
    
    // Reorder Nga Thet combinations first
    unicode = reorderNgaThet(unicode);
    unicode = handleYaPint(unicode);
    unicode = unicode.replace(/ဍ္ဎ/g, "¹");
    unicode = unicode.replace(/ဋ္ဌ/g, "|");

    // Double story characters with ု (K)
    unicode = unicode.replace(/္တု/g, "†K");
    unicode = unicode.replace(/္ထု/g, "¦K");
    unicode = unicode.replace(/္ဓု/g, "¨K");
    unicode = unicode.replace(/္ခု/g, "©K");
    unicode = unicode.replace(/္မု/g, "®K");
    unicode = unicode.replace(/္ဆု/g, "°K");
    unicode = unicode.replace(/္ဒု/g, "´K");
    unicode = unicode.replace(/္စု/g, "öK");
    unicode = unicode.replace(/္ဗု/g, "ºK");
    unicode = unicode.replace(/္ဂု/g, "¾K");
    unicode = unicode.replace(/္ဇု/g, "ÆK");
    unicode = unicode.replace(/္ဘု/g, "ÇK");
    unicode = unicode.replace(/္ဏု/g, "ÖK");
    unicode = unicode.replace(/္ပု/g, "ÜK");
    unicode = unicode.replace(/္ဖု/g, "æK");
    unicode = unicode.replace(/္နု/g, "éK");
    unicode = unicode.replace(/္ဎု/g, "·K");
    
    // Double story characters with ူ (L)
    unicode = unicode.replace(/္တူ/g, "†L");
    unicode = unicode.replace(/္ထူ/g, "¦L");
    unicode = unicode.replace(/္ဓူ/g, "¨L");
    unicode = unicode.replace(/္ခူ/g, "©L");
    unicode = unicode.replace(/္မူ/g, "®L");
    unicode = unicode.replace(/္ဆူ/g, "°L");
    unicode = unicode.replace(/္ဒူ/g, "´L");
    unicode = unicode.replace(/္စူ/g, "öL");
    unicode = unicode.replace(/္ဗူ/g, "ºL");
    unicode = unicode.replace(/္ဂူ/g, "¾L");
    unicode = unicode.replace(/္ဇူ/g, "ÆL");
    unicode = unicode.replace(/္ဘူ/g, "ÇL");
    unicode = unicode.replace(/္ဏူ/g, "ÖL");
    unicode = unicode.replace(/္ပူ/g, "ÜL");
    unicode = unicode.replace(/္ဖူ/g, "æL");
    unicode = unicode.replace(/္နူ/g, "éL");
    unicode = unicode.replace(/္ဎူ/g, "·L");

  
    
    
    // Handle double story characters first
    unicode = unicode.replace(/င်္/g, "F");
    unicode = unicode.replace(/္တ/g, "†");
    unicode = unicode.replace(/္ထ/g, "¦");
    unicode = unicode.replace(/္ဓ/g, "¨");
    unicode = unicode.replace(/္ခ/g, "©");
    unicode = unicode.replace(/္မ/g, "®");
    unicode = unicode.replace(/္ဆ/g, "°");
    unicode = unicode.replace(/္ဒ/g, "´");
    unicode = unicode.replace(/္စ/g, "ö");
    unicode = unicode.replace(/္ဗ/g, "º");
    unicode = unicode.replace(/္ဂ/g, "¾");
    unicode = unicode.replace(/္ဇ/g, "Æ");
    unicode = unicode.replace(/္ဘ/g, "Ç");
    unicode = unicode.replace(/္ဏ/g, "Ö");
    unicode = unicode.replace(/္ပ/g, "Ü");
    unicode = unicode.replace(/္ဖ/g, "æ");
    unicode = unicode.replace(/္န/g, "é");
    unicode = unicode.replace(/္ဎ/g, "·");
    
    
    
    
    
    // Remove duplicated section without vowel marks
    unicode = unicode.replace(/င်္ဂြိို/g, "ì");
    unicode = unicode.replace(/ဏ္ဍ/g, "‹");

    // Direct mapping for ေ vowel combinations
    

    // Special cases for characters with ါ် combination
    unicode = unicode.replace(/ခေါ်/g, "ac:");
    unicode = unicode.replace(/ငေါ်/g, "‌ai:");
    unicode = unicode.replace(/ဂေါ်/g, "a*:");
    unicode = unicode.replace(/ဒေါ်/g, "a':");
    unicode = unicode.replace(/ပေါ်/g, "ay:");
    unicode = unicode.replace(/ဝေါ်/g, "a0:");

    // ေ + ှ combinations
    unicode = unicode.replace(/ကှေ/g, "auS");
    unicode = unicode.replace(/ခှေ/g, "acS");
    unicode = unicode.replace(/ဂှေ/g, "a*S");
    unicode = unicode.replace(/ဃေ/g, "aCS");
    unicode = unicode.replace(/စှေ/g, "apS");
    unicode = unicode.replace(/ဆှေ/g, "aqS");
    unicode = unicode.replace(/ညှေ/g, "anS");
    unicode = unicode.replace(/ဏှေ/g, "aPS");
    unicode = unicode.replace(/တှေ/g, "awS");
    unicode = unicode.replace(/ထှေ/g, "axS");
    unicode = unicode.replace(/ဒှေ/g, "a'S");
    unicode = unicode.replace(/ဓှေ/g, 'a"S');
    unicode = unicode.replace(/နှေ/g, "aES");
    unicode = unicode.replace(/ပှေ/g, "ayS");
    unicode = unicode.replace(/ဖှေ/g, "azS");
    unicode = unicode.replace(/ဗှေ/g, "aAS");
    unicode = unicode.replace(/ဘှေ/g, "abS");
    unicode = unicode.replace(/မှေ/g, "arS");
    unicode = unicode.replace(/ယှေ/g, "a,S");
    unicode = unicode.replace(/ရှေ/g, "a&S");
    unicode = unicode.replace(/လှေ/g, "aS");
    unicode = unicode.replace(/ဝှေ/g, "a0S");
    unicode = unicode.replace(/သှေ/g, "aoS");
    unicode = unicode.replace(/ဟှေ/g, "a[S");
    unicode = unicode.replace(/အှေ/g, "atS");
    
    // Basic ေ vowel with consonants
    unicode = unicode.replace(/ကေ/g, "au");
    unicode = unicode.replace(/ခေ/g, "ac");
    unicode = unicode.replace(/ဂေ/g, "a*");
    unicode = unicode.replace(/ဃေ/g, "aC");
    unicode = unicode.replace(/ငေ/g, "ai");
    unicode = unicode.replace(/စေ/g, "ap");
    unicode = unicode.replace(/ဆေ/g, "aq");
    unicode = unicode.replace(/ဇေ/g, "aZ");
    unicode = unicode.replace(/ဈေ/g, "aps");
    unicode = unicode.replace(/ညေ/g, "an");
    unicode = unicode.replace(/ဋေ/g, "a#");
    unicode = unicode.replace(/ဌေ/g, "aX");
    unicode = unicode.replace(/ဍေ/g, "a!");
    unicode = unicode.replace(/ဎေ/g, "a!");
    unicode = unicode.replace(/ဏေ/g, "aP");
    unicode = unicode.replace(/တေ/g, "aw");
    unicode = unicode.replace(/ထေ/g, "ax");
    unicode = unicode.replace(/ဒေ/g, "a'");
    unicode = unicode.replace(/ဓေ/g, 'a"');
    unicode = unicode.replace(/နေ/g, "ae");
    unicode = unicode.replace(/ပေ/g, "ay");
    unicode = unicode.replace(/ဖေ/g, "az");
    unicode = unicode.replace(/ဗေ/g, "aA");
    unicode = unicode.replace(/ဘေ/g, "ab");
    unicode = unicode.replace(/မေ/g, "ar");
    unicode = unicode.replace(/ယေ/g, "a,");
    unicode = unicode.replace(/ရေ/g, "a&");
    unicode = unicode.replace(/လေ/g, "av");
    unicode = unicode.replace(/ဝေ/g, "a0");
    unicode = unicode.replace(/သေ/g, "ao");
    unicode = unicode.replace(/ဟေ/g, "a[");
    unicode = unicode.replace(/ဠေ/g, "aV");
    unicode = unicode.replace(/အေ/g, "at");

    // Consonant + wa hswe combinations with E vowel
    unicode = unicode.replace(/ကွေ/g, "auG");
    unicode = unicode.replace(/ခွေ/g, "acG");
    unicode = unicode.replace(/ဂွေ/g, "a*G");
    unicode = unicode.replace(/ဃွေ/g, "aCG");
    unicode = unicode.replace(/ငွေ/g, "aiG");
    unicode = unicode.replace(/စွေ/g, "apG");
    unicode = unicode.replace(/ဆွေ/g, "aqG");
    unicode = unicode.replace(/ဇွေ/g, "aZG");
    unicode = unicode.replace(/ဈွေ/g, "aQG");
    unicode = unicode.replace(/ညွေ/g, "anG");
    unicode = unicode.replace(/ဋွေ/g, "a#G");
    unicode = unicode.replace(/ဌွေ/g, "aXG");
    unicode = unicode.replace(/ဍွေ/g, "a!G");
    unicode = unicode.replace(/ဎွေ/g, "a!G");
    unicode = unicode.replace(/ဏွေ/g, "aPG");
    unicode = unicode.replace(/တွေ/g, "awG");
    unicode = unicode.replace(/ထွေ/g, "axG");
    unicode = unicode.replace(/ဒွေ/g, "a'G");
    unicode = unicode.replace(/ဓွေ/g, 'a"G');
    unicode = unicode.replace(/နွေ/g, "aeG");
    unicode = unicode.replace(/ပွေ/g, "ayG");
    unicode = unicode.replace(/ဖွေ/g, "azG");
    unicode = unicode.replace(/ဗွေ/g, "aAG");
    unicode = unicode.replace(/ဘွေ/g, "abG");
    unicode = unicode.replace(/မွေ/g, "arG");
    unicode = unicode.replace(/ယွေ/g, "a,G");
    unicode = unicode.replace(/ရွေ/g, "a&G");
    unicode = unicode.replace(/လွေ/g, "avG");
    unicode = unicode.replace(/ဝွေ/g, "a0G");
    unicode = unicode.replace(/သွေ/g, "aoG");
    unicode = unicode.replace(/ဟွေ/g, "a[G");
    unicode = unicode.replace(/ဠွေ/g, "aVG");
    unicode = unicode.replace(/အွေ/g, "atG");

    // Consonant + wa hswe + sha htoe combinations with E vowel
    unicode = unicode.replace(/ကွှေ/g, "auT");
    unicode = unicode.replace(/ခွှေ/g, "acT");
    unicode = unicode.replace(/ဂွှေ/g, "a*T");
    unicode = unicode.replace(/ဃွှေ/g, "aCT");
    unicode = unicode.replace(/ငွှေ/g, "aiT");
    unicode = unicode.replace(/စွှေ/g, "apT");
    unicode = unicode.replace(/ဆွှေ/g, "aqT");
    unicode = unicode.replace(/ဇွှေ/g, "aZT");
    unicode = unicode.replace(/ဈွှေ/g, "aQT");
    unicode = unicode.replace(/ညွှေ/g, "anT");
    unicode = unicode.replace(/ဋွှေ/g, "a#T");
    unicode = unicode.replace(/ဌွှေ/g, "aXT");
    unicode = unicode.replace(/ဍွှေ/g, "a!T");
    unicode = unicode.replace(/ဎွှေ/g, "a!T");
    unicode = unicode.replace(/ဏွှေ/g, "aPT");
    unicode = unicode.replace(/တွှေ/g, "awT");
    unicode = unicode.replace(/ထွှေ/g, "axT");
    unicode = unicode.replace(/ဒွှေ/g, "a'T");
    unicode = unicode.replace(/ဓွှေ/g, 'a"T');
    unicode = unicode.replace(/နွှေ/g, "aeT");
    unicode = unicode.replace(/ပွှေ/g, "ayT");
    unicode = unicode.replace(/ဖွှေ/g, "azT");
    unicode = unicode.replace(/ဗွှေ/g, "aAT");
    unicode = unicode.replace(/ဘွှေ/g, "abT");
    unicode = unicode.replace(/မွှေ/g, "arT");
    unicode = unicode.replace(/ယွှေ/g, "a,T");
    unicode = unicode.replace(/ရွှေ/g, "a&T");
    unicode = unicode.replace(/လွှေ/g, "avT");
    unicode = unicode.replace(/ဝွှေ/g, "a0T");
    unicode = unicode.replace(/သွှေ/g, "aoT");
    unicode = unicode.replace(/ဟွှေ/g, "a[T");
    unicode = unicode.replace(/ဠွှေ/g, "aVT");
    unicode = unicode.replace(/အွှေ/g, "atT");

    // E vowel + consonant + ya yit combinations
    unicode = unicode.replace(/ကျေ/g, "aus");
    unicode = unicode.replace(/ချေ/g, "acs");
    unicode = unicode.replace(/ဂျေ/g, "a*s");
    unicode = unicode.replace(/ဃျေ/g, "aCs");
    unicode = unicode.replace(/ငျေ/g, "ais");
    unicode = unicode.replace(/စျေ/g, "aps");
    unicode = unicode.replace(/ဆျေ/g, "aqs");
    unicode = unicode.replace(/ဇျေ/g, "aZs");
    unicode = unicode.replace(/ဈျေ/g, "aQs");
    unicode = unicode.replace(/ညျေ/g, "ans");
    unicode = unicode.replace(/ဋျေ/g, "a#s");
    unicode = unicode.replace(/ဌျေ/g, "aXs");
    unicode = unicode.replace(/ဍျေ/g, "a!s");
    unicode = unicode.replace(/ဎျေ/g, "a!s");
    unicode = unicode.replace(/ဏျေ/g, "aPs");
    unicode = unicode.replace(/တျေ/g, "aws");
    unicode = unicode.replace(/ထျေ/g, "axs");
    unicode = unicode.replace(/ဒျေ/g, "a's");
    unicode = unicode.replace(/ဓျေ/g, 'a"s');
    unicode = unicode.replace(/နျေ/g, "aes");
    unicode = unicode.replace(/ပျေ/g, "ays");
    unicode = unicode.replace(/ဖျေ/g, "azs");
    unicode = unicode.replace(/ဗျေ/g, "aAs");
    unicode = unicode.replace(/ဘျေ/g, "abs");
    unicode = unicode.replace(/မျေ/g, "ars");
    unicode = unicode.replace(/ယျေ/g, "a,s");
    
    unicode = unicode.replace(/လျေ/g, "avs");
    unicode = unicode.replace(/ဝျေ/g, "a0s");
    unicode = unicode.replace(/သျေ/g, "aos");
    unicode = unicode.replace(/ဟျေ/g, "a[s");
    unicode = unicode.replace(/ဠျေ/g, "aVs");
    unicode = unicode.replace(/အျေ/g, "ats");

    // E vowel + consonant + ya yit + sha htoe combinations
    unicode = unicode.replace(/ကျှေ/g, "auQ");
    unicode = unicode.replace(/ချှေ/g, "acQ");
    unicode = unicode.replace(/ဂျှေ/g, "a*Q");
    unicode = unicode.replace(/ဃျှေ/g, "aCQ");
    unicode = unicode.replace(/ငျှေ/g, "aiQ");
    unicode = unicode.replace(/စျှေ/g, "apQ");
    unicode = unicode.replace(/ဆျှေ/g, "aqQ");
    unicode = unicode.replace(/ဇျှေ/g, "aZQ");
    unicode = unicode.replace(/ဈျှေ/g, "aQQ");
    unicode = unicode.replace(/ညျှေ/g, "anQ");
    unicode = unicode.replace(/ဋျှေ/g, "a#Q");
    unicode = unicode.replace(/ဌျှေ/g, "aXQ");
    unicode = unicode.replace(/ဍျှေ/g, "a!Q");
    unicode = unicode.replace(/ဎျှေ/g, "a!Q");
    unicode = unicode.replace(/ဏျှေ/g, "aPQ");
    unicode = unicode.replace(/တျှေ/g, "awQ");
    unicode = unicode.replace(/ထျှေ/g, "axQ");
    unicode = unicode.replace(/ဒျှေ/g, "a'Q");
    unicode = unicode.replace(/ဓျှေ/g, 'a"Q');
    unicode = unicode.replace(/နျှေ/g, "aeQ");
    unicode = unicode.replace(/ပျှေ/g, "ayQ");
    unicode = unicode.replace(/ဖျှေ/g, "azQ");
    unicode = unicode.replace(/ဗျှေ/g, "aAQ");
    unicode = unicode.replace(/ဘျှေ/g, "abQ");
    unicode = unicode.replace(/မျှေ/g, "arQ");
    unicode = unicode.replace(/ယျှေ/g, "a,Q");
    unicode = unicode.replace(/ရျှေ/g, "a&Q");
    unicode = unicode.replace(/လျှေ/g, "avQ");
    unicode = unicode.replace(/ဝျှေ/g, "a0Q");
    unicode = unicode.replace(/သျှေ/g, "aoQ");
    unicode = unicode.replace(/ဟျှေ/g, "a[Q");
    unicode = unicode.replace(/ဠျှေ/g, "aVQ");
    unicode = unicode.replace(/အျှေ/g, "atQ");

    // E vowel + consonant + ya yit + wa hswe combinations
    unicode = unicode.replace(/ကျွေ/g, "ausR");
    unicode = unicode.replace(/ချွေ/g, "acsR");
    unicode = unicode.replace(/ဂျွေ/g, "a*sR");
    unicode = unicode.replace(/ဃျွေ/g, "aCsR");
    unicode = unicode.replace(/ငျွေ/g, "aisR");
    unicode = unicode.replace(/စျွေ/g, "apsR");
    unicode = unicode.replace(/ဆျွေ/g, "aqsR");
    unicode = unicode.replace(/ဇျွေ/g, "aZsR");
    unicode = unicode.replace(/ဈျွေ/g, "aQsR");
    unicode = unicode.replace(/ညျွေ/g, "anR");
    unicode = unicode.replace(/ဋျွေ/g, "a#sR");
    unicode = unicode.replace(/ဌျွေ/g, "aXsR");
    unicode = unicode.replace(/ဍျွေ/g, "a!sR");
    unicode = unicode.replace(/ဎျွေ/g, "a!sR");
    unicode = unicode.replace(/ဏျွေ/g, "aPsR");
    unicode = unicode.replace(/တျွေ/g, "awsR");
    unicode = unicode.replace(/ထျွေ/g, "axsR");
    unicode = unicode.replace(/ဒျွေ/g, "a'sR");
    unicode = unicode.replace(/ဓျွေ/g, 'a"sR');
    unicode = unicode.replace(/နျွေ/g, "aesR");
    unicode = unicode.replace(/ပျွေ/g, "aysR");
    unicode = unicode.replace(/ဖျွေ/g, "azsR");
    unicode = unicode.replace(/ဗျွေ/g, "aAsR");
    unicode = unicode.replace(/ဘျွေ/g, "absR");
    unicode = unicode.replace(/မျွေ/g, "arsR");
    unicode = unicode.replace(/ယျွေ/g, "a,sR");
    unicode = unicode.replace(/ရျွေ/g, "a&sR");
    unicode = unicode.replace(/လျွေ/g, "avsR");
    unicode = unicode.replace(/ဝျွေ/g, "a0sR");
    unicode = unicode.replace(/သျွေ/g, "aosR");
    unicode = unicode.replace(/ဟျွေ/g, "a[sR");
    unicode = unicode.replace(/ဠျွေ/g, "aVsR");
    unicode = unicode.replace(/အျွေ/g, "atsR");

    // E vowel + consonant + ya yit + wa hswe + sha htoe combinations
    unicode = unicode.replace(/ကျွှေ/g, "ausW");
    unicode = unicode.replace(/ချွှေ/g, "acsW");
    unicode = unicode.replace(/ဂျွှေ/g, "a*sW");
    unicode = unicode.replace(/ဃျွှေ/g, "aCsW");
    unicode = unicode.replace(/ငျွှေ/g, "aisW");
    unicode = unicode.replace(/စျွှေ/g, "apsW");
    unicode = unicode.replace(/ဆျွှေ/g, "aqsW");
    unicode = unicode.replace(/ဇျွှေ/g, "aZsW");
    unicode = unicode.replace(/ဈျွှေ/g, "aQsW");
    unicode = unicode.replace(/ညျွှေ/g, "ansW");
    unicode = unicode.replace(/ဋျွှေ/g, "a#sW");
    unicode = unicode.replace(/ဌျွှေ/g, "aXsW");
    unicode = unicode.replace(/ဍျွှေ/g, "a!sW");
    unicode = unicode.replace(/ဎျွှေ/g, "a!sW");
    unicode = unicode.replace(/ဏျွှေ/g, "aPsW");
    unicode = unicode.replace(/တျွှေ/g, "awsW");
    unicode = unicode.replace(/ထျွှေ/g, "axsW");
    unicode = unicode.replace(/ဒျွှေ/g, "a'sW");
    unicode = unicode.replace(/ဓျွှေ/g, 'a"sW');
    unicode = unicode.replace(/နျွှေ/g, "aesW");
    unicode = unicode.replace(/ပျွှေ/g, "aysW");
    unicode = unicode.replace(/ဖျွှေ/g, "azsW");
    unicode = unicode.replace(/ဗျွှေ/g, "aAsW");
    unicode = unicode.replace(/ဘျွှေ/g, "absW");
    unicode = unicode.replace(/မျွှေ/g, "arsW");
    unicode = unicode.replace(/ယျွှေ/g, "a,sW");
    unicode = unicode.replace(/ရျွှေ/g, "a&sW");
    unicode = unicode.replace(/လျွှေ/g, "avsW");
    unicode = unicode.replace(/ဝျွှေ/g, "a0sW");
    unicode = unicode.replace(/သျွှေ/g, "aosW");
    unicode = unicode.replace(/ဟျွှေ/g, "a[sW");
    unicode = unicode.replace(/ဠျွှေ/g, "aVsW");
    unicode = unicode.replace(/အျွှေ/g, "atsW");

    
    // က combinations
    unicode = unicode.replace(/ကြုံ့/g, "BuHKU");
    unicode = unicode.replace(/ကြို/g, "BudK");
    unicode = unicode.replace(/ကြိူ/g, "BudL");
    unicode = unicode.replace(/ကြိ/g, "Bud");
    unicode = unicode.replace(/ကြီ/g, "BuD");
    unicode = unicode.replace(/ကြုံ/g, "BuHK");
    unicode = unicode.replace(/ကြု/g, "MuK");
    unicode = unicode.replace(/ကြူ/g, "MuL");
    unicode = unicode.replace(/ကြေ/g, "aMu");
    unicode = unicode.replace(/ကြဲ/g, "BuJ");
    unicode = unicode.replace(/ကြံ/g, "MuH");
    unicode = unicode.replace(/ကြ့/g, "Muh");
    unicode = unicode.replace(/ကြွ/g, "<u");

    // ခ combinations
    unicode = unicode.replace(/ခြုံ့/g, "NcHKU");
    unicode = unicode.replace(/ခြို/g, "NcdK");
    unicode = unicode.replace(/ခြိူ/g, "NcdL");
    unicode = unicode.replace(/ခြိ/g, "Ncd");
    unicode = unicode.replace(/ခြီ/g, "NcD");
    unicode = unicode.replace(/ခြုံ/g, "NcHK");
    unicode = unicode.replace(/ခြု/g, "jcK");
    unicode = unicode.replace(/ခြူ/g, "jcL");
    unicode = unicode.replace(/ခြေ/g, "ajc");
    unicode = unicode.replace(/ခြဲ/g, "NcJ");
    unicode = unicode.replace(/ခြံ/g, "jcH");
    unicode = unicode.replace(/ခြ့/g, "jch");
    unicode = unicode.replace(/ခြွ/g, ">c");

    // ဂ combinations
    unicode = unicode.replace(/ဂြုံ့/g, "N*HKU");
    unicode = unicode.replace(/ဂြို/g, "N*dK");
    unicode = unicode.replace(/ဂြိူ/g, "N*dL");
    unicode = unicode.replace(/ဂြိ/g, "N*d");
    unicode = unicode.replace(/ဂြီ/g, "N*D");
    unicode = unicode.replace(/ဂြုံ/g, "N*HK");
    unicode = unicode.replace(/ဂြု/g, "j*K");
    unicode = unicode.replace(/ဂြူ/g, "j*L");
    unicode = unicode.replace(/ဂြေ/g, "aj*");
    unicode = unicode.replace(/ဂြဲ/g, "N*J");
    unicode = unicode.replace(/ဂြံ/g, "j*H");
    unicode = unicode.replace(/ဂြ့/g, "j*h");
    unicode = unicode.replace(/ဂြွ/g, ">*");

    // ဃ combinations
    unicode = unicode.replace(/ဃြုံ့/g, "BCHKU");
    unicode = unicode.replace(/ဃြို/g, "BCdK");
    unicode = unicode.replace(/ဃြိူ/g, "BCdL");
    unicode = unicode.replace(/ဃြိ/g, "BCd");
    unicode = unicode.replace(/ဃြီ/g, "BCD");
    unicode = unicode.replace(/ဃြုံ/g, "BCHK");
    unicode = unicode.replace(/ဃြု/g, "MCK");
    unicode = unicode.replace(/ဃြူ/g, "MCL");
    unicode = unicode.replace(/ဃြေ/g, "aMC");
    unicode = unicode.replace(/ဃြဲ/g, "BCJ");
    unicode = unicode.replace(/ဃြံ/g, "MCH");
    unicode = unicode.replace(/ဃြ့/g, "MCh");
    unicode = unicode.replace(/ဃြွ/g, "<C");

    // င combinations
    unicode = unicode.replace(/ငြုံ့/g, "NiHKU");
    unicode = unicode.replace(/ငြို/g, "NidK");
    unicode = unicode.replace(/ငြိူ/g, "NidL");
    unicode = unicode.replace(/ငြိ/g, "Nid");
    unicode = unicode.replace(/ငြီ/g, "NiD");
    unicode = unicode.replace(/ငြုံ/g, "NiHK");
    unicode = unicode.replace(/ငြု/g, "jiK");
    unicode = unicode.replace(/ငြူ/g, "jiL");
    unicode = unicode.replace(/ငြေ/g, "aji");
    unicode = unicode.replace(/ငြဲ/g, "NiJ");
    unicode = unicode.replace(/ငြံ/g, "jiH");
    unicode = unicode.replace(/ငြ့/g, "jih");
    unicode = unicode.replace(/ငြွ/g, ">i");

    // စ combinations
    unicode = unicode.replace(/စြုံ့/g, "NpHKU");
    unicode = unicode.replace(/စြို/g, "NpdK");
    unicode = unicode.replace(/စြိူ/g, "NpdL");
    unicode = unicode.replace(/စြိ/g, "Npd");
    unicode = unicode.replace(/စြီ/g, "NpD");
    unicode = unicode.replace(/စြုံ/g, "NpHK");
    unicode = unicode.replace(/စြု/g, "jpK");
    unicode = unicode.replace(/စြူ/g, "jpL");
    unicode = unicode.replace(/စြေ/g, "ajp");
    unicode = unicode.replace(/စြဲ/g, "NpJ");
    unicode = unicode.replace(/စြံ/g, "jpH");
    unicode = unicode.replace(/စြ့/g, "jph");
    unicode = unicode.replace(/စြွ/g, ">p");

    // ဆ combinations
    unicode = unicode.replace(/ဆြုံ့/g, "BqHKU");
    unicode = unicode.replace(/ဆြို/g, "BqdK");
    unicode = unicode.replace(/ဆြိူ/g, "BqdL");
    unicode = unicode.replace(/ဆြိ/g, "Bqd");
    unicode = unicode.replace(/ဆြီ/g, "BqD");
    unicode = unicode.replace(/ဆြုံ/g, "BqHK");
    unicode = unicode.replace(/ဆြု/g, "MqK");
    unicode = unicode.replace(/ဆြူ/g, "MqL");
    unicode = unicode.replace(/ဆြေ/g, "aMq");
    unicode = unicode.replace(/ဆြဲ/g, "BqJ");
    unicode = unicode.replace(/ဆြံ/g, "MqH");
    unicode = unicode.replace(/ဆြ့/g, "Mqh");
    unicode = unicode.replace(/ဆြွ/g, "<q");

    // ဇ combinations
    unicode = unicode.replace(/ဇြုံ့/g, "NZHKU");
    unicode = unicode.replace(/ဇြို/g, "NZdK");
    unicode = unicode.replace(/ဇြိူ/g, "NZdL");
    unicode = unicode.replace(/ဇြိ/g, "NZd");
    unicode = unicode.replace(/ဇြီ/g, "NZD");
    unicode = unicode.replace(/ဇြုံ/g, "NZHK");
    unicode = unicode.replace(/ဇြု/g, "jZK");
    unicode = unicode.replace(/ဇြူ/g, "jZL");
    unicode = unicode.replace(/ဇြေ/g, "ajZ");
    unicode = unicode.replace(/ဇြဲ/g, "NZJ");
    unicode = unicode.replace(/ဇြံ/g, "jZH");
    unicode = unicode.replace(/ဇြ့/g, "jZh");
    unicode = unicode.replace(/ဇြွ/g, ">Z");

    // ည combinations
    unicode = unicode.replace(/ညွှ/g, "ò");

    // ဏ combinations
    unicode = unicode.replace(/ဏြုံ့/g, "BPHKU");
    unicode = unicode.replace(/ဏြို/g, "BPdK");
    unicode = unicode.replace(/ဏြိူ/g, "BPdL");
    unicode = unicode.replace(/ဏြိ/g, "BPd");
    unicode = unicode.replace(/ဏြီ/g, "BPD");
    unicode = unicode.replace(/ဏြုံ/g, "BPHK");
    unicode = unicode.replace(/ဏြု/g, "MPK");
    unicode = unicode.replace(/ဏြူ/g, "MPL");
    unicode = unicode.replace(/ဏြေ/g, "aMP");
    unicode = unicode.replace(/ဏြဲ/g, "BPJ");
    unicode = unicode.replace(/ဏြံ/g, "MPH");
    unicode = unicode.replace(/ဏြ့/g, "MPh");
    unicode = unicode.replace(/ဏြွ/g, "<P");

    // တ combinations
    unicode = unicode.replace(/တြုံ့/g, "BwHKU");
    unicode = unicode.replace(/တြို/g, "BwdK");
    unicode = unicode.replace(/တြိူ/g, "BwdL");
    unicode = unicode.replace(/တြိ/g, "Bwd");
    unicode = unicode.replace(/တြီ/g, "BwD");
    unicode = unicode.replace(/တြုံ/g, "BwHK");
    unicode = unicode.replace(/တြု/g, "MwK");
    unicode = unicode.replace(/တြူ/g, "MwL");
    unicode = unicode.replace(/တြေ/g, "aMw");
    unicode = unicode.replace(/တြဲ/g, "BwJ");
    unicode = unicode.replace(/တြံ/g, "MwH");
    unicode = unicode.replace(/တြ့/g, "Mwh");
    unicode = unicode.replace(/တြွ/g, "<w");

    // ထ combinations
    unicode = unicode.replace(/ထြုံ့/g, "BxHKU");
    unicode = unicode.replace(/ထြို/g, "BxdK");
    unicode = unicode.replace(/ထြိူ/g, "BxdL");
    unicode = unicode.replace(/ထြိ/g, "Bxd");
    unicode = unicode.replace(/ထြီ/g, "BxD");
    unicode = unicode.replace(/ထြုံ/g, "BxHK");
    unicode = unicode.replace(/ထြု/g, "MxK");
    unicode = unicode.replace(/ထြူ/g, "MxL");
    unicode = unicode.replace(/ထြေ/g, "aMx");
    unicode = unicode.replace(/ထြဲ/g, "BxJ");
    unicode = unicode.replace(/ထြံ/g, "MxH");
    unicode = unicode.replace(/ထြ့/g, "Mxh");
    unicode = unicode.replace(/ထြွ/g, "<x");

    // ဒ combinations
    unicode = unicode.replace(/ဒြုံ့/g, "N'HKU");
    unicode = unicode.replace(/ဒြို/g, "N'dK");
    unicode = unicode.replace(/ဒြိူ/g, "N'dL");
    unicode = unicode.replace(/ဒြိ/g, "N'd");
    unicode = unicode.replace(/ဒြီ/g, "N'D");
    unicode = unicode.replace(/ဒြုံ/g, "N'HK");
    unicode = unicode.replace(/ဒြု/g, "j'K");
    unicode = unicode.replace(/ဒြူ/g, "j'L");
    unicode = unicode.replace(/ဒြေ/g, "aj'");
    unicode = unicode.replace(/ဒြဲ/g, "N'J");
    unicode = unicode.replace(/ဒြံ/g, "j'H");
    unicode = unicode.replace(/ဒြ့/g, "j'h");
    unicode = unicode.replace(/ဒြွ/g, ">'");

    // ဓ combinations
    unicode = unicode.replace(/ဓြုံ့/g, "N\"HKU");
    unicode = unicode.replace(/ဓြို/g, "N\"dK");
    unicode = unicode.replace(/ဓြိူ/g, "N\"dL");
    unicode = unicode.replace(/ဓြိ/g, 'N"d');
    unicode = unicode.replace(/ဓြီ/g, 'N"D');
    unicode = unicode.replace(/ဓြုံ/g, "N\"HK");
    unicode = unicode.replace(/ဓြု/g, 'j"K');
    unicode = unicode.replace(/ဓြူ/g, 'j"L');
    unicode = unicode.replace(/ဓြေ/g, 'aj"');
    unicode = unicode.replace(/ဓြဲ/g, 'N"J');
    unicode = unicode.replace(/ဓြံ/g, 'j"H');
    unicode = unicode.replace(/ဓြ့/g, 'j"h');
    unicode = unicode.replace(/ဓြွ/g, '>"');

    // န combinations
    unicode = unicode.replace(/နြုံ့/g, "NEHKU");
    unicode = unicode.replace(/နြို/g, "NEdK");
    unicode = unicode.replace(/နြိူ/g, "NEdL");
    unicode = unicode.replace(/နြိ/g, "NEd");
    unicode = unicode.replace(/နြီ/g, "NED");
    unicode = unicode.replace(/နြုံ/g, "NEHK");
    unicode = unicode.replace(/နြု/g, "jEK");
    unicode = unicode.replace(/နြူ/g, "jEL");
    unicode = unicode.replace(/နြေ/g, "ajE");
    unicode = unicode.replace(/နြဲ/g, "NEJ");
    unicode = unicode.replace(/နြံ/g, "jEH");
    unicode = unicode.replace(/နြ့/g, "jEh");
    unicode = unicode.replace(/နြွ/g, '>E');

    // ပ combinations
    unicode = unicode.replace(/ပြုံ့/g, "NyHKU");
    unicode = unicode.replace(/ပြို/g, "NydK");
    unicode = unicode.replace(/ပြိူ/g, "NydL");
    unicode = unicode.replace(/ပြိ/g, "Nyd");
    unicode = unicode.replace(/ပြီ/g, "NyD");
    unicode = unicode.replace(/ပြုံ/g, "NyHK");
    unicode = unicode.replace(/ပြု/g, "jyK");
    unicode = unicode.replace(/ပြူ/g, "jyL");
    unicode = unicode.replace(/ပြေ/g, "ajy");
    unicode = unicode.replace(/ပြဲ/g, "NyJ");
    unicode = unicode.replace(/ပြံ/g, "jyH");
    unicode = unicode.replace(/ပြ့/g, "jyh");
    unicode = unicode.replace(/ပြွ/g, ">y");

    // ဖ combinations
    unicode = unicode.replace(/ဖြုံ့/g, "NzHKU");
    unicode = unicode.replace(/ဖြို/g, "NzdK");
    unicode = unicode.replace(/ဖြိူ/g, "NzdL");
    unicode = unicode.replace(/ဖြိ/g, "Nzd");
    unicode = unicode.replace(/ဖြီ/g, "NzD");
    unicode = unicode.replace(/ဖြုံ/g, "NzHK");
    unicode = unicode.replace(/ဖြု/g, "jzK");
    unicode = unicode.replace(/ဖြူ/g, "jzL");
    unicode = unicode.replace(/ဖြေ/g, "ajz");
    unicode = unicode.replace(/ဖြဲ/g, "NzJ");
    unicode = unicode.replace(/ဖြံ/g, "jzH");
    unicode = unicode.replace(/ဖြ့/g, "jzh");
    unicode = unicode.replace(/ဖြွ/g, ">z");

    // ဗ combinations
    unicode = unicode.replace(/ဗြုံ့/g, "NAHKU");
    unicode = unicode.replace(/ဗြို/g, "NAdK");
    unicode = unicode.replace(/ဗြိူ/g, "NAdL");
    unicode = unicode.replace(/ဗြိ/g, "NAd");
    unicode = unicode.replace(/ဗြီ/g, "NAD");
    unicode = unicode.replace(/ဗြုံ/g, "NAHK");
    unicode = unicode.replace(/ဗြု/g, "jAK");
    unicode = unicode.replace(/ဗြူ/g, "jAL");
    unicode = unicode.replace(/ဗြေ/g, "ajA");
    unicode = unicode.replace(/ဗြဲ/g, "NAJ");
    unicode = unicode.replace(/ဗြံ/g, "jAH");
    unicode = unicode.replace(/ဗြ့/g, "jAh");
    unicode = unicode.replace(/ဗြွ/g, ">A");

    // ဘ combinations
    unicode = unicode.replace(/ဘြုံ့/g, "BbHKU");
    unicode = unicode.replace(/ဘြို/g, "BbdK");
    unicode = unicode.replace(/ဘြိူ/g, "BbdL");
    unicode = unicode.replace(/ဘြိ/g, "Bbd");
    unicode = unicode.replace(/ဘြီ/g, "BbD");
    unicode = unicode.replace(/ဘြုံ/g, "BbHK");
    unicode = unicode.replace(/ဘြု/g, "MbK");
    unicode = unicode.replace(/ဘြူ/g, "MbL");
    unicode = unicode.replace(/ဘြေ/g, "aMb");
    unicode = unicode.replace(/ဘြဲ/g, "BbJ");
    unicode = unicode.replace(/ဘြံ/g, "MbH");
    unicode = unicode.replace(/ဘြ့/g, "Mbh");
    unicode = unicode.replace(/ဘြွ/g, "<b");

    // မ combinations
    unicode = unicode.replace(/မြုံ့/g, "NrHKU");
    unicode = unicode.replace(/မြို/g, "NrdK");
    unicode = unicode.replace(/မြိူ/g, "NrdL");
    unicode = unicode.replace(/မြိ/g, "Nrd");
    unicode = unicode.replace(/မြီ/g, "NrD");
    unicode = unicode.replace(/မြုံ/g, "NrHK");
    unicode = unicode.replace(/မြု/g, "jrK");
    unicode = unicode.replace(/မြူ/g, "jrL");
    unicode = unicode.replace(/မြေ/g, "ajr");
    unicode = unicode.replace(/မြဲ/g, "NrJ");
    unicode = unicode.replace(/မြံ/g, "jrH");
    unicode = unicode.replace(/မြ့/g, "jrh");
    unicode = unicode.replace(/မြွ/g, ">r");

    // ယ combinations
    unicode = unicode.replace(/ယြုံ့/g, "B,HKU");
    unicode = unicode.replace(/ယြို/g, "B,dK");
    unicode = unicode.replace(/ယြိူ/g, "B,dL");
    unicode = unicode.replace(/ယြိ/g, "B,d");
    unicode = unicode.replace(/ယြီ/g, "B,D");
    unicode = unicode.replace(/ယြုံ/g, "B,HK");
    unicode = unicode.replace(/ယြု/g, "M,K");
    unicode = unicode.replace(/ယြူ/g, "M,L");
    unicode = unicode.replace(/ယြေ/g, "aM,");
    unicode = unicode.replace(/ယြဲ/g, "B,J");
    unicode = unicode.replace(/ယြံ/g, "M,H");
    unicode = unicode.replace(/ယြ့/g, "M,h");
    unicode = unicode.replace(/ယြွ/g, ">,");

    // ရ combinations
    unicode = unicode.replace(/‌‌ရှေ့/g, 'a&SU');
    unicode = unicode.replace(/ရှံ့/g, '&SHU');
    unicode = unicode.replace(/ရှ့/g, '&SU');
    unicode = unicode.replace(/ရွ/g, 'Ô');
    unicode = unicode.replace(/ရဲ့/g, '&JU');
    unicode = unicode.replace(/ရှု/g, '½I');
    unicode = unicode.replace(/ရွှ/g, 'Õ');
    unicode = unicode.replace(/ရှူ/g, '½SL');
    unicode = unicode.replace(/ရ့/g, '&U');

    // လ combinations
    unicode = unicode.replace(/လြုံ့/g, "BvHKU");
    unicode = unicode.replace(/လြို/g, "BvdK");
    unicode = unicode.replace(/လြိူ/g, "BvdL");
    unicode = unicode.replace(/လြိ/g, "Bvd");
    unicode = unicode.replace(/လြီ/g, "BvD");
    unicode = unicode.replace(/လြုံ/g, "BvHK");
    unicode = unicode.replace(/လြု/g, "MvK");
    unicode = unicode.replace(/လြူ/g, "MvL");
    unicode = unicode.replace(/လြေ/g, "aMv");
    unicode = unicode.replace(/လြဲ/g, "BvJ");
    unicode = unicode.replace(/လြံ/g, "MvH");
    unicode = unicode.replace(/လြ့/g, "Mvh");
    unicode = unicode.replace(/လြွ/g, "<v");

    // ဝ combinations
    unicode = unicode.replace(/ဝြုံ့/g, "N0HKU");
    unicode = unicode.replace(/ဝြို/g, "N0dK");
    unicode = unicode.replace(/ဝြိူ/g, "N0dL");
    unicode = unicode.replace(/ဝြိ/g, "N0d");
    unicode = unicode.replace(/ဝြီ/g, "N0D");
    unicode = unicode.replace(/ဝြုံ/g, "N0HK");
    unicode = unicode.replace(/ဝြု/g, "j0K");
    unicode = unicode.replace(/ဝြူ/g, "j0L");
    unicode = unicode.replace(/ဝြေ/g, "aj0");
    unicode = unicode.replace(/ဝြဲ/g, "N0J");
    unicode = unicode.replace(/ဝြံ/g, "j0H");
    unicode = unicode.replace(/ဝြ့/g, "j0h");
    unicode = unicode.replace(/ဝြွ/g, ">0");

    // သ combinations
    // unicode = unicode.replace(/သြုံ့/g, "BoHKU");
    // unicode = unicode.replace(/သြို/g, "BodK");
    // unicode = unicode.replace(/သြိူ/g, "BodL");
    // unicode = unicode.replace(/သြိ/g, "Bod");
    // unicode = unicode.replace(/သြီ/g, "BoD");
    // unicode = unicode.replace(/သြုံ/g, "BoHK");
    // unicode = unicode.replace(/သြု/g, "joK");
    // unicode = unicode.replace(/သြူ/g, "joL");
    // unicode = unicode.replace(/သြေ/g, "ajo");
    // unicode = unicode.replace(/သြဲ/g, "BoJ");
    // unicode = unicode.replace(/သြံ/g, "joH");
    // unicode = unicode.replace(/သြ့/g, "joh");
    // unicode = unicode.replace(/သြွ/g, "<o");

    // ဟ combinations
    unicode = unicode.replace(/ဟြုံ့/g, "B[HKU");
    unicode = unicode.replace(/ဟြို/g, "B[dK");
    unicode = unicode.replace(/ဟြိူ/g, "B[dL");
    unicode = unicode.replace(/ဟြိ/g, "B[d");
    unicode = unicode.replace(/ဟြီ/g, "B[D");
    unicode = unicode.replace(/ဟြုံ/g, "B[HK");
    unicode = unicode.replace(/ဟြု/g, "M[K");
    unicode = unicode.replace(/ဟြူ/g, "M[L");
    unicode = unicode.replace(/ဟြေ/g, "aM[");
    unicode = unicode.replace(/ဟြဲ/g, "B[J");
    unicode = unicode.replace(/ဟြံ/g, "M[H");
    unicode = unicode.replace(/ဟြ့/g, "M[h");
    unicode = unicode.replace(/ဟြား/g, "M[m;");

    // အ combinations
    unicode = unicode.replace(/အြုံ့/g, "BtHKU");
    unicode = unicode.replace(/အြို/g, "BtdK");
    unicode = unicode.replace(/အြိူ/g, "BtdL");
    unicode = unicode.replace(/အြိ/g, "Btd");
    unicode = unicode.replace(/အြီ/g, "BtD");
    unicode = unicode.replace(/အြုံ/g, "BtHK");
    unicode = unicode.replace(/အြု/g, "MtK");
    unicode = unicode.replace(/အြူ/g, "MtL");
    unicode = unicode.replace(/အြေ/g, "aMt");
    unicode = unicode.replace(/အြဲ/g, "BtJ");
    unicode = unicode.replace(/အြံ/g, "MtH");
    unicode = unicode.replace(/အြ့/g, "Mth");
    unicode = unicode.replace(/အြား/g, "Mtm;");

    // Direct replacements for Ya Yit
    unicode = unicode.replace(/ကြ/g, "Mu");
    unicode = unicode.replace(/ခြ/g, "jc");
    unicode = unicode.replace(/ဂြ/g, "j*");
    unicode = unicode.replace(/ဃြ/g, "MC");
    unicode = unicode.replace(/ငြ/g, "ji");
    unicode = unicode.replace(/စြ/g, "jp");
    unicode = unicode.replace(/ဆြ/g, "Mq");
    unicode = unicode.replace(/ဇြ/g, "jZ");
    unicode = unicode.replace(/ဈြ/g, "jQ");
    unicode = unicode.replace(/ညြ/g, "jn");
    unicode = unicode.replace(/ဋြ/g, "j#");
    unicode = unicode.replace(/ဌြ/g, "jX");
    unicode = unicode.replace(/ဍြ/g, "j!");
    unicode = unicode.replace(/ဎြ/g, "j!");
    unicode = unicode.replace(/ဏြ/g, "MP");
    unicode = unicode.replace(/တြ/g, "Mw");
    unicode = unicode.replace(/ထြ/g, "Mx");
    unicode = unicode.replace(/ဒြ/g, "j'");
    unicode = unicode.replace(/ဓြ/g, 'j"');
    unicode = unicode.replace(/နြ/g, "je");
    unicode = unicode.replace(/ပြ/g, "jy");
    unicode = unicode.replace(/ဖြ/g, "jz");
    unicode = unicode.replace(/ဗြ/g, "jA");
    unicode = unicode.replace(/ဘြ/g, "Mb");
    unicode = unicode.replace(/မြ/g, "jr");
    unicode = unicode.replace(/ယြ/g, "M,");
    unicode = unicode.replace(/ရြ/g, "j&");
    unicode = unicode.replace(/လြ/g, "Mv");
    unicode = unicode.replace(/ဝြ/g, "j0");
    unicode = unicode.replace(/သြ/g, "jo");
    unicode = unicode.replace(/ဟြ/g, "M[");
    unicode = unicode.replace(/ဠြ/g, "jV");
    unicode = unicode.replace(/အြ/g, "Mt");

    // Apply direct mapping for E vowel combinations first
    // This happens before the character-by-character conversion
    // for (const [unicodeCombo, winEquivalent] of Object.entries(
    //   eVowelMappings
    // )) {
    //   unicode = unicode.replace(new RegExp(unicodeCombo, "g"), winEquivalent);
    // }

    // Character-by-character processing for remaining characters
    let result = "";
    let i = 0;

    while (i < unicode.length) {
      // Standard character conversion
      const char = unicode[i];
      result += unicodeToWinChar[char] || char;
      i++;
    }

    return result;
  } catch (e) {
    console.error("Unicode to Win conversion failed:", e);
    throw new Error(`Unicode to Win conversion failed: ${e.message}`);
  }
}

// Convert Zawgyi text to Win Innwa text
function zawgyiToWinText(zawgyi) {
  try {
    // Reorder Nga Thet combinations first
    zawgyi = reorderNgaThet(zawgyi);
    zawgyi = handleYaPint(zawgyi);

    // Direct mapping for E vowel combinations from working copy
    // ေ + ှ combinations
    zawgyi = zawgyi.replace(/ကှေ/g, "auS");
    zawgyi = zawgyi.replace(/ခှေ/g, "acS");
    zawgyi = zawgyi.replace(/ဂှေ/g, "a*S");
    zawgyi = zawgyi.replace(/ဃေ/g, "aCS");
    zawgyi = zawgyi.replace(/စေ/g, "apS");
    zawgyi = zawgyi.replace(/ဆေ/g, "aqS");
    zawgyi = zawgyi.replace(/ဇေ/g, "aZS");
    zawgyi = zawgyi.replace(/ညှေ/g, "anS");
    zawgyi = zawgyi.replace(/ဏှေ/g, "aPS");
    zawgyi = zawgyi.replace(/တှေ/g, "awS");
    zawgyi = zawgyi.replace(/ထှေ/g, "axS");
    zawgyi = zawgyi.replace(/ဒှေ/g, "a'S");
    zawgyi = zawgyi.replace(/ဓှေ/g, 'a"S');
    zawgyi = zawgyi.replace(/နှေ/g, "aES");
    zawgyi = zawgyi.replace(/ပှေ/g, "ayS");
    zawgyi = zawgyi.replace(/ဖှေ/g, "azS");
    zawgyi = zawgyi.replace(/ဗှေ/g, "aAS");
    zawgyi = zawgyi.replace(/ဘှေ/g, "abS");
    zawgyi = zawgyi.replace(/မှေ/g, "arS");
    zawgyi = zawgyi.replace(/ယှေ/g, "a,S");
    zawgyi = zawgyi.replace(/ရှေ/g, "a&S");
    zawgyi = zawgyi.replace(/လှေ/g, "aS");
    zawgyi = zawgyi.replace(/ဝှေ/g, "a0S");
    zawgyi = zawgyi.replace(/သှေ/g, "aoS");
    zawgyi = zawgyi.replace(/ဟှေ/g, "a[S");
    zawgyi = zawgyi.replace(/အှေ/g, "atS");

    // Special cases for characters with ါ် combination
    zawgyi = zawgyi.replace(/ခေါ်/g, "ac:");
    zawgyi = zawgyi.replace(/ငေါ်/g, "‌ai:");
    zawgyi = zawgyi.replace(/ဂေါ်/g, "a*:");
    zawgyi = zawgyi.replace(/ဒေါ်/g, "a':");
    zawgyi = zawgyi.replace(/ပေါ်/g, "ay:");
    zawgyi = zawgyi.replace(/ဝေါ်/g, "a0:");

    // Basic ေ vowel with consonants
    zawgyi = zawgyi.replace(/ကေ/g, "au");
    zawgyi = zawgyi.replace(/ခေ/g, "ac");
    zawgyi = zawgyi.replace(/ဂေ/g, "a*");
    zawgyi = zawgyi.replace(/ဃေ/g, "aC");
    zawgyi = zawgyi.replace(/ငေ/g, "ai");
    zawgyi = zawgyi.replace(/စေ/g, "ap");
    zawgyi = zawgyi.replace(/ဆေ/g, "aq");
    zawgyi = zawgyi.replace(/ဇေ/g, "aZ");
    zawgyi = zawgyi.replace(/ဈေ/g, "aps");
    zawgyi = zawgyi.replace(/ညေ/g, "an");
    zawgyi = zawgyi.replace(/ဋေ/g, "a#");
    zawgyi = zawgyi.replace(/ဌေ/g, "aX");
    zawgyi = zawgyi.replace(/ဍေ/g, "a!");
    zawgyi = zawgyi.replace(/ဎေ/g, "a!");
    zawgyi = zawgyi.replace(/ဏေ/g, "aP");
    zawgyi = zawgyi.replace(/တေ/g, "aw");
    zawgyi = zawgyi.replace(/ထေ/g, "ax");
    zawgyi = zawgyi.replace(/ဒေ/g, "a'");
    zawgyi = zawgyi.replace(/ဓေ/g, 'a"');
    zawgyi = zawgyi.replace(/နေ/g, "ae");
    zawgyi = zawgyi.replace(/ပေ/g, "ay");
    zawgyi = zawgyi.replace(/ဖေ/g, "az");
    zawgyi = zawgyi.replace(/ဗေ/g, "aA");
    zawgyi = zawgyi.replace(/ဘေ/g, "ab");
    zawgyi = zawgyi.replace(/မေ/g, "ar");
    zawgyi = zawgyi.replace(/ယေ/g, "a,");
    zawgyi = zawgyi.replace(/ရေ/g, "a&");
    zawgyi = zawgyi.replace(/လေ/g, "av");
    zawgyi = zawgyi.replace(/ဝေ/g, "a0");
    zawgyi = zawgyi.replace(/သေ/g, "ao");
    zawgyi = zawgyi.replace(/ဟေ/g, "a[");
    zawgyi = zawgyi.replace(/ဠေ/g, "aV");
    zawgyi = zawgyi.replace(/အေ/g, "at");

    // Special cases
    zawgyi = zawgyi.replace(/ခေါ်/g, "‌ac:");

    // Consonant + wa hswe combinations with E vowel
    zawgyi = zawgyi.replace(/ကြေ/g, "auG");
    zawgyi = zawgyi.replace(/ခြေ/g, "acG");
    zawgyi = zawgyi.replace(/ဂြေ/g, "a*G");
    zawgyi = zawgyi.replace(/ဃြေ/g, "aCG");
    zawgyi = zawgyi.replace(/ငြေ/g, "aiG");
    zawgyi = zawgyi.replace(/စြေ/g, "apG");
    zawgyi = zawgyi.replace(/ဆြေ/g, "aqG");
    zawgyi = zawgyi.replace(/ဇြေ/g, "aZG");
    zawgyi = zawgyi.replace(/ဈြေ/g, "aQG");
    zawgyi = zawgyi.replace(/ညြေ/g, "anG");
    zawgyi = zawgyi.replace(/ဋြေ/g, "a#G");
    zawgyi = zawgyi.replace(/ဌြေ/g, "aXG");
    zawgyi = zawgyi.replace(/ဍြေ/g, "a!G");
    zawgyi = zawgyi.replace(/ဎြေ/g, "a!G");
    zawgyi = zawgyi.replace(/ဏြေ/g, "aPG");
    zawgyi = zawgyi.replace(/တြေ/g, "awG");
    zawgyi = zawgyi.replace(/ထြေ/g, "axG");
    zawgyi = zawgyi.replace(/ဒြေ/g, "a'G");
    zawgyi = zawgyi.replace(/ဓြေ/g, 'a"G');
    zawgyi = zawgyi.replace(/နြေ/g, "aeG");
    zawgyi = zawgyi.replace(/ပြေ/g, "ayG");
    zawgyi = zawgyi.replace(/ဖြေ/g, "azG");
    zawgyi = zawgyi.replace(/ဗြေ/g, "aAG");
    zawgyi = zawgyi.replace(/ဘြေ/g, "abG");
    zawgyi = zawgyi.replace(/မြေ/g, "arG");
    zawgyi = zawgyi.replace(/ယြေ/g, "a,G");
    zawgyi = zawgyi.replace(/ရြေ/g, "a&G");
    zawgyi = zawgyi.replace(/လြေ/g, "avG");
    zawgyi = zawgyi.replace(/ဝြေ/g, "a0G");
    zawgyi = zawgyi.replace(/သြေ/g, "aoG");
    zawgyi = zawgyi.replace(/ဟြေ/g, "a[G");
    zawgyi = zawgyi.replace(/ဠြေ/g, "aVG");
    zawgyi = zawgyi.replace(/အြေ/g, "atG");

    // Add all other E vowel combinations as in the Unicode function
    // E vowel + consonant + ya yit combinations, etc.
    zawgyi = zawgyi.replace(/ကျေ/g, "aus");
    zawgyi = zawgyi.replace(/ချေ/g, "acs");
    zawgyi = zawgyi.replace(/ဂျေ/g, "a*s");
    zawgyi = zawgyi.replace(/ဃျေ/g, "aCs");
    zawgyi = zawgyi.replace(/ငျေ/g, "ais");
    zawgyi = zawgyi.replace(/စျေ/g, "aps");
    zawgyi = zawgyi.replace(/ဆျေ/g, "aqs");
    zawgyi = zawgyi.replace(/ဇျေ/g, "aZs");
    zawgyi = zawgyi.replace(/ဈျေ/g, "aQs");
    zawgyi = zawgyi.replace(/ညျေ/g, "ans");
    zawgyi = zawgyi.replace(/ဋျေ/g, "a#s");
    zawgyi = zawgyi.replace(/ဌျေ/g, "aXs");
    zawgyi = zawgyi.replace(/ဍျေ/g, "a!s");
    zawgyi = zawgyi.replace(/ဎျေ/g, "a!s");
    zawgyi = zawgyi.replace(/ဏျေ/g, "aPs");
    zawgyi = zawgyi.replace(/တျေ/g, "aws");
    zawgyi = zawgyi.replace(/ထျေ/g, "axs");
    zawgyi = zawgyi.replace(/ဒျေ/g, "a's");
    zawgyi = zawgyi.replace(/ဓျေ/g, 'a"s');
    zawgyi = zawgyi.replace(/နျေ/g, "aes");
    zawgyi = zawgyi.replace(/ပျေ/g, "ays");
    zawgyi = zawgyi.replace(/ဖျေ/g, "azs");
    zawgyi = zawgyi.replace(/ဗျေ/g, "aAs");
    zawgyi = zawgyi.replace(/ဘျေ/g, "abs");
    zawgyi = zawgyi.replace(/မျေ/g, "ars");
    zawgyi = zawgyi.replace(/ယျေ/g, "a,s");
    zawgyi = zawgyi.replace(/ရျေ/g, "a&s");
    zawgyi = zawgyi.replace(/လျေ/g, "avs");
    zawgyi = zawgyi.replace(/ဝျေ/g, "a0s");
    zawgyi = zawgyi.replace(/သျေ/g, "aos");
    zawgyi = zawgyi.replace(/ဟျေ/g, "a[s");
    zawgyi = zawgyi.replace(/ဠျေ/g, "aVs");
    zawgyi = zawgyi.replace(/အျေ/g, "ats");

    // Additional special cases from working copy
    zawgyi = zawgyi.replace(/ခေါ်/g, "ac:");
    zawgyi = zawgyi.replace(/ဂေါ်/g, "a*:");
    zawgyi = zawgyi.replace(/ဒေါ်/g, "aK:");
    zawgyi = zawgyi.replace(/ပေါ်/g, "ay:");
    zawgyi = zawgyi.replace(/ဝေါ်/g, "aE:");

    // Handle double story characters first
    zawgyi = zawgyi.replace(/င္/g, "F");
    zawgyi = zawgyi.replace(/တၱ/g, "wå");
    zawgyi = zawgyi.replace(/ထၱ/g, "x¦");
    zawgyi = zawgyi.replace(/ဓၱ/g, '"¨');
    zawgyi = zawgyi.replace(/ခၱ/g, "c©");
    zawgyi = zawgyi.replace(/မၱ/g, "r®");
    zawgyi = zawgyi.replace(/ဆၱ/g, "q°");
    zawgyi = zawgyi.replace(/ဒၱ/g, "'´");
    zawgyi = zawgyi.replace(/ဗၱ/g, "Aº");
    zawgyi = zawgyi.replace(/ဂၱ/g, "*¾");
    zawgyi = zawgyi.replace(/ဇၱ/g, "ZÆ");
    zawgyi = zawgyi.replace(/ဘၱ/g, "bÇ");
    zawgyi = zawgyi.replace(/ဏၱ/g, "PÖ");
    zawgyi = zawgyi.replace(/ပၱ/g, "yÜ");
    zawgyi = zawgyi.replace(/ဖၱ/g, "zæ");
    zawgyi = zawgyi.replace(/နၱ/g, "eé");
    zawgyi = zawgyi.replace(/ဎၱ/g, "!·");
    zawgyi = zawgyi.replace(/င္ဂၢုိ/g, "ì");
    zawgyi = zawgyi.replace(/ဏၭ/g, "‹");

    // Complex combinations with multiple vowels
    zawgyi = zawgyi.replace(/ၾကီး/g, "BuD;");
    zawgyi = zawgyi.replace(/ႀကိဳ/g, "BudK");
    zawgyi = zawgyi.replace(/ႀကိူ/g, "BudL");
    zawgyi = zawgyi.replace(/ႀကိ/g, "Bud");
    zawgyi = zawgyi.replace(/ႀကီ/g, "BuD");
    zawgyi = zawgyi.replace(/ၾကဳ/g, "MuK");
    zawgyi = zawgyi.replace(/ၾကူ/g, "MuL");
    zawgyi = zawgyi.replace(/ေျဃ/g, "aMC");
    zawgyi = zawgyi.replace(/ႁဃဲ/g, "BCJ");
    zawgyi = zawgyi.replace(/ျဃံ/g, "MCH");
    zawgyi = zawgyi.replace(/ျဃ့/g, "MCh");
    zawgyi = zawgyi.replace(/ျဃြ/g, "<C");

    // Similar patterns for other consonants with Ra Medial + vowels
    zawgyi = zawgyi.replace(/ၿခိဳ/g, "NcdK");
    zawgyi = zawgyi.replace(/ၿခိူ/g, "NcdL");
    zawgyi = zawgyi.replace(/ၿခိ/g, "Ncd");
    zawgyi = zawgyi.replace(/ၿခီ/g, "NcD");
    zawgyi = zawgyi.replace(/ျခဳ/g, "jcK");
    zawgyi = zawgyi.replace(/ျခူ/g, "jcL");
    zawgyi = zawgyi.replace(/ေျခ/g, "ajc");
    zawgyi = zawgyi.replace(/ၿခဲ/g, "NcJ");
    zawgyi = zawgyi.replace(/ျခံ/g, "jcH");
    zawgyi = zawgyi.replace(/ျခ့/g, "jch");
    zawgyi = zawgyi.replace(/ျခြ/g, ">c");

    // ဂ combinations
    zawgyi = zawgyi.replace(/ၿဂိဳ/g, "N*dK");
    zawgyi = zawgyi.replace(/ၿဂိူ/g, "N*dL");
    zawgyi = zawgyi.replace(/ၿဂိ/g, "N*d");
    zawgyi = zawgyi.replace(/ၿဂီ/g, "N*D");
    zawgyi = zawgyi.replace(/ျဂဳ/g, "j*K");
    zawgyi = zawgyi.replace(/ျဂူ/g, "j*L");
    zawgyi = zawgyi.replace(/ေျဂ/g, "aj*");
    zawgyi = zawgyi.replace(/ၿဂဲ/g, "N*J");
    zawgyi = zawgyi.replace(/ျဂံ/g, "j*H");
    zawgyi = zawgyi.replace(/ျဂ့/g, "j*h");
    zawgyi = zawgyi.replace(/ျဂြ/g, ">*");

    // ဃ combinations
    zawgyi = zawgyi.replace(/င္ဃ/g, "CF");
    zawgyi = zawgyi.replace(/ႁဃိ/g, "BCd");
    zawgyi = zawgyi.replace(/ႁဃီ/g, "BCD");
    zawgyi = zawgyi.replace(/ျဃဳ/g, "MCK");
    zawgyi = zawgyi.replace(/ျဃူ/g, "MCL");
    zawgyi = zawgyi.replace(/ေျဃ/g, "aMC");
    zawgyi = zawgyi.replace(/ႁဃဲ/g, "BCJ");
    zawgyi = zawgyi.replace(/ျဃံ/g, "MCH");
    zawgyi = zawgyi.replace(/ျဃ့/g, "MCh");
    zawgyi = zawgyi.replace(/ျဃြ/g, "<C");

    // Apply direct mapping for E vowel combinations first
    // This happens before the character-by-character conversion
    // for (const [unicodeCombo, winEquivalent] of Object.entries(
    //   eVowelMappings
    // )) {
    //   zawgyi = zawgyi.replace(new RegExp(unicodeCombo, "g"), winEquivalent);
    // }

    // Character-by-character processing for remaining characters
    let result = "";
    let i = 0;

    while (i < zawgyi.length) {
      // Standard character conversion
      const char = zawgyi[i];
      result += zawgyiToWinChar[char] || char;
      i++;
    }

    return result;
  } catch (e) {
    console.error("Zawgyi to Win conversion failed:", e);
    throw new Error(`Zawgyi to Win conversion failed: ${e.message}`);
  }
}

// Create a reverse mapping for Win Innwa to Unicode
const winToUnicodeChar = {};
for (const [key, value] of Object.entries(unicodeToWinChar)) {
  if (value && value.length === 1) {
    // Only add simple one-to-one mappings initially
    winToUnicodeChar[value] = key;
  }
}

// Function to convert Win Innwa text to Unicode
function winToUnicodeText(win) {
  try {
    // Special sequences and combinations - need to handle these first

    // Double story characters
    win = win.replace(/F/g, "င်္");
    win = win.replace(/wå/g, "တ္တ");
    win = win.replace(/x¦/g, "ထ္ထ");
    win = win.replace(/"¨/g, "ဓ္ဓ");
    win = win.replace(/c©/g, "ခ္ခ");
    win = win.replace(/r®/g, "မ္မ");
    win = win.replace(/q°/g, "ဆ္ဆ");
    win = win.replace(/'´/g, "ဒ္ဒ");
    win = win.replace(/Aº/g, "ဗ္ဗ");
    win = win.replace(/\*¾/g, "ဂ္ဂ");
    win = win.replace(/ZÆ/g, "ဇ္ဇ");
    win = win.replace(/bÇ/g, "ဘ္ဘ");
    win = win.replace(/PÖ/g, "ဏ္ဏ");
    win = win.replace(/yÜ/g, "ပ္ပ");
    win = win.replace(/zæ/g, "ဖ္ဖ");
    win = win.replace(/eé/g, "န္န");
    win = win.replace(/!·/g, "ဎ္ဎ");
    win = win.replace(/‹/g, "ဏ္ဍ");
    win = win.replace(/¹/g, "ဍ္ဎ");
    win = win.replace(/ì/g, "င်္ဂြို");

    // ြ + ု/ူ (Ra Medial + vowel) combinations with big consonants
    // B + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/B([a-zA-Z])K/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြု" : match;
    });

    win = win.replace(/B([a-zA-Z])L/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြူ" : match;
    });

    // M + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/M([a-zA-Z])K/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြု" : match;
    });

    win = win.replace(/M([a-zA-Z])L/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြူ" : match;
    });

    // ြ + ု/ူ (Ra Medial + vowel) combinations with small consonants
    // N + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/N([a-zA-Z])K/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြု" : match;
    });

    win = win.replace(/N([a-zA-Z])L/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြူ" : match;
    });

    // j + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/j([a-zA-Z])K/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြု" : match;
    });

    win = win.replace(/j([a-zA-Z])L/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? unicodeChar + "ြူ" : match;
    });

    // Complex Ra Medial combinations with vowels
    // က + Ra combinations
    win = win.replace(/BuD;/g, "ကြီး");
    win = win.replace(/BudK/g, "ကြို");
    win = win.replace(/BudL/g, "ကြိူ");
    win = win.replace(/Bud/g, "ကြိ");
    win = win.replace(/BuD/g, "ကြီ");
    win = win.replace(/MuK/g, "ကြု");
    win = win.replace(/MuL/g, "ကြူ");
    win = win.replace(/aMu/g, "ကြေ");
    win = win.replace(/BuJ/g, "ကြဲ");
    win = win.replace(/MuH/g, "ကြံ");
    win = win.replace(/Muh/g, "ကြ့");
    win = win.replace(/\<u/g, "ကြွ");

    // ခ + Ra combinations
    win = win.replace(/NcdK/g, "ခြို");
    win = win.replace(/NcdL/g, "ခြိူ");
    win = win.replace(/Ncd/g, "ခြိ");
    win = win.replace(/NcD/g, "ခြီ");
    win = win.replace(/jcK/g, "ခြု");
    win = win.replace(/jcL/g, "ခြူ");
    win = win.replace(/ajc/g, "ခြေ");
    win = win.replace(/NcJ/g, "ခြဲ");
    win = win.replace(/jcH/g, "ခြံ");
    win = win.replace(/jch/g, "ခြ့");
    win = win.replace(/\>c/g, "ခြွ");

    // ဂ + Ra combinations
    win = win.replace(/N\*dK/g, "ဂြို");
    win = win.replace(/N\*dL/g, "ဂြိူ");
    win = win.replace(/N\*d/g, "ဂြိ");
    win = win.replace(/N\*D/g, "ဂြီ");
    win = win.replace(/j\*K/g, "ဂြု");
    win = win.replace(/j\*L/g, "ဂြူ");
    win = win.replace(/aj\*/g, "ဂြေ");
    win = win.replace(/N\*J/g, "ဂြဲ");
    win = win.replace(/j\*H/g, "ဂြံ");
    win = win.replace(/j\*h/g, "ဂြ့");
    win = win.replace(/\>\*/g, "ဂြွ");

    // Handle all other Ra Medial combinations following the pattern above

    // Handle E vowel combinations
    win = win.replace(/a([a-zA-Z0-9])/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? "ေ" + unicodeChar : match;
    });

    // Handle special combined cases
    win = win.replace(/a([a-zA-Z])G/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? "ေ" + unicodeChar + "ွ" : match;
    });

    win = win.replace(/a([a-zA-Z])T/g, function (match, consonant) {
      const unicodeChar = winToUnicodeChar[consonant];
      return unicodeChar ? "ေ" + unicodeChar + "ွှ" : match;
    });

    // Character-by-character conversion for remaining characters
    let result = "";
    let i = 0;

    while (i < win.length) {
      let matched = false;

      // Check for multi-char sequences that weren't handled above
      for (let len = 3; len > 0; len--) {
        if (i + len <= win.length) {
          const seq = win.substring(i, i + len);
          if (winToUnicodeChar[seq]) {
            result += winToUnicodeChar[seq];
            i += len;
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        // Handle the standard character conversion
        const char = win[i];
        result += winToUnicodeChar[char] || char;
        i++;
      }
    }

    return result;
  } catch (e) {
    console.error(e);
    throw new Error(`Win to Unicode conversion failed: ${e.message}`);
  }
}

// Create a reverse mapping for Win Innwa to Zawgyi
const winToZawgyiChar = {};
for (const [key, value] of Object.entries(zawgyiToWinChar)) {
  if (value && value.length === 1) {
    // Only add simple one-to-one mappings initially
    winToZawgyiChar[value] = key;
  }
}

// Function to convert Win Innwa text to Zawgyi
function winToZawgyiText(win) {
  try {
    // Special sequences and combinations - need to handle these first

    // Double story characters
    win = win.replace(/F/g, "င္");
    win = win.replace(/wå/g, "တၱ");
    win = win.replace(/x¦/g, "ထၱ");
    win = win.replace(/"¨/g, "ဓၱ");
    win = win.replace(/c©/g, "ခၱ");
    win = win.replace(/r®/g, "မၱ");
    win = win.replace(/q°/g, "ဆၱ");
    win = win.replace(/'´/g, "ဒၱ");
    win = win.replace(/Aº/g, "ဗၱ");
    win = win.replace(/\*¾/g, "ဂၱ");
    win = win.replace(/ZÆ/g, "ဇၱ");
    win = win.replace(/bÇ/g, "ဘၱ");
    win = win.replace(/PÖ/g, "ဏၱ");
    win = win.replace(/yÜ/g, "ပၱ");
    win = win.replace(/zæ/g, "ဖၱ");
    win = win.replace(/eé/g, "နၱ");
    win = win.replace(/!·/g, "ဎၱ");
    win = win.replace(/‹/g, "ဏၭ");
    win = win.replace(/ì/g, "င္ဂၢုိ");

    // ြ + ု/ူ (Ra Medial + vowel) combinations with big consonants
    // B + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/B([a-zA-Z])K/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        // For Zawgyi, we use different forms of Ra Medial
        return "ႀ" + zawgyiChar + "ု";
      }
      return match;
    });

    win = win.replace(/B([a-zA-Z])L/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ႀ" + zawgyiChar + "ူ";
      }
      return match;
    });

    // M + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/M([a-zA-Z])K/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ၾ" + zawgyiChar + "ု";
      }
      return match;
    });

    win = win.replace(/M([a-zA-Z])L/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ၾ" + zawgyiChar + "ူ";
      }
      return match;
    });

    // ြ + ု/ူ (Ra Medial + vowel) combinations with small consonants
    // N + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/N([a-zA-Z])K/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ၿ" + zawgyiChar + "ု";
      }
      return match;
    });

    win = win.replace(/N([a-zA-Z])L/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ၿ" + zawgyiChar + "ူ";
      }
      return match;
    });

    // j + consonant + K/L -> consonant + ြ + ု/ူ
    win = win.replace(/j([a-zA-Z])K/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ျ" + zawgyiChar + "ု";
      }
      return match;
    });

    win = win.replace(/j([a-zA-Z])L/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      if (zawgyiChar) {
        return "ျ" + zawgyiChar + "ူ";
      }
      return match;
    });

    // Complex Ra Medial combinations with vowels for specific consonants
    // က + Ra combinations
    win = win.replace(/BuD;/g, "ႀကီး");
    win = win.replace(/BudK/g, "ႀကိဳ");
    win = win.replace(/BudL/g, "ႀကိူ");
    win = win.replace(/Bud/g, "ႀကိ");
    win = win.replace(/BuD/g, "ႀကီ");
    win = win.replace(/MuK/g, "ၾကဳ");
    win = win.replace(/MuL/g, "ၾကူ");
    win = win.replace(/aMu/g, "ေၾက");
    win = win.replace(/BuJ/g, "ၾကဲ");
    win = win.replace(/MuH/g, "ၾကံ");
    win = win.replace(/Muh/g, "ၾက့");
    win = win.replace(/\<u/g, "ၾကြ");

    // ခ + Ra combinations
    win = win.replace(/NcdK/g, "ၿခိဳ");
    win = win.replace(/NcdL/g, "ၿခိူ");
    win = win.replace(/Ncd/g, "ၿခိ");
    win = win.replace(/NcD/g, "ၿခီ");
    win = win.replace(/jcK/g, "ျခဳ");
    win = win.replace(/jcL/g, "ျခူ");
    win = win.replace(/ajc/g, "ေျခ");
    win = win.replace(/NcJ/g, "ၿခဲ");
    win = win.replace(/jcH/g, "ျခံ");
    win = win.replace(/jch/g, "ျခ့");
    win = win.replace(/\>c/g, "ျခြ");

    // ဂ + Ra combinations
    win = win.replace(/N\*dK/g, "ၿဂိဳ");
    win = win.replace(/N\*dL/g, "ၿဂိူ");
    win = win.replace(/N\*d/g, "ၿဂိ");
    win = win.replace(/N\*D/g, "ၿဂီ");
    win = win.replace(/j\*K/g, "ျဂဳ");
    win = win.replace(/j\*L/g, "ျဂူ");
    win = win.replace(/aj\*/g, "ေျဂ");
    win = win.replace(/N\*J/g, "ၿဂဲ");
    win = win.replace(/j\*H/g, "ျဂံ");
    win = win.replace(/j\*h/g, "ျဂ့");
    win = win.replace(/\>\*/g, "ျဂြ");

    // Add more consonant combinations as needed following the pattern above

    // Handle E vowel combinations
    win = win.replace(/a([a-zA-Z0-9])/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      return zawgyiChar ? "ေ" + zawgyiChar : match;
    });

    // Handle special combined cases
    win = win.replace(/a([a-zA-Z])G/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      return zawgyiChar ? "ေ" + zawgyiChar + "ြ" : match;
    });

    win = win.replace(/a([a-zA-Z])T/g, function (match, consonant) {
      const zawgyiChar = winToZawgyiChar[consonant];
      return zawgyiChar ? "ေ" + zawgyiChar + "ႊ" : match;
    });

    // Character-by-character conversion for remaining characters
    let result = "";
    let i = 0;

    while (i < win.length) {
      let matched = false;

      // Check for multi-char sequences that weren't handled above
      for (let len = 3; len > 0; len--) {
        if (i + len <= win.length) {
          const seq = win.substring(i, i + len);
          if (winToZawgyiChar[seq]) {
            result += winToZawgyiChar[seq];
            i += len;
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        // Handle the standard character conversion
        const char = win[i];
        result += winToZawgyiChar[char] || char;
        i++;
      }
    }

    return result;
  } catch (e) {
    console.error(e);
    throw new Error(`Win to Zawgyi conversion failed: ${e.message}`);
  }
}

// Add event listeners for conversion
document.addEventListener("DOMContentLoaded", function () {
  const unicodeBox = document.getElementById("unicode");
  const zawgyiBox = document.getElementById("zawgyi");
  const winBox = document.getElementById("win");

  // Wire up the conversion functions
  unicodeBox.addEventListener("input", function () {
    try {
      if (typeof Rabbit === "undefined")
        throw new Error("Rabbit library not loaded");
      const unicodeText = unicodeBox.value;

      // Convert Unicode to Zawgyi using Rabbit
      const zawgyiText = Rabbit.uni2zg(unicodeText);
      zawgyiBox.value = zawgyiText;

      // Direct Unicode to Win Innwa conversion
      const winText = unicodeToWinText(unicodeText);
      winBox.value = winText;

      // Log for debugging purposes
      console.log("Unicode:", unicodeText);
      console.log("Converted to Zawgyi:", zawgyiText);
      console.log("Direct Unicode to Win:", winText);
    } catch (e) {
      console.error(e);
      showErrorToast(e.message);
    }
  });

  zawgyiBox.addEventListener("input", function () {
    try {
      if (typeof Rabbit === "undefined")
        throw new Error("Rabbit library not loaded");
      const zawgyiText = zawgyiBox.value;

      // Convert Zawgyi to Unicode using Rabbit
      const unicodeText = Rabbit.zg2uni(zawgyiText);
      unicodeBox.value = unicodeText;

      // Convert Zawgyi to Win Innwa directly
      const winText = zawgyiToWinText(zawgyiText);
      winBox.value = winText;

      // Log for debugging purposes
      console.log("Zawgyi:", zawgyiText);
      console.log("Converted to Unicode:", unicodeText);
      console.log("Direct Zawgyi to Win:", winText);
    } catch (e) {
      console.error(e);
      showErrorToast(e.message);
    }
  });

  winBox.addEventListener("input", function () {
    try {
      if (typeof Rabbit === "undefined")
        throw new Error("Rabbit library not loaded");
      const winText = winBox.value;

      // Convert Win to Zawgyi directly
      const zawgyiText = winToZawgyiText(winText);
      zawgyiBox.value = zawgyiText;

      // Convert Win to Unicode directly
      const unicodeText = winToUnicodeText(winText);
      unicodeBox.value = unicodeText;

      // Log for debugging purposes
      console.log("Win Innwa:", winText);
      console.log("Converted to Zawgyi:", zawgyiText);
      console.log("Converted to Unicode:", unicodeText);
    } catch (e) {
      console.error(e);
      showErrorToast(e.message);
    }
  });

  // Load initial content
  if (unicodeBox.value) {
    const event = new Event("input");
    unicodeBox.dispatchEvent(event);
  } else {
    // Set the pangram in the boxes on load
    unicodeBox.value =
      "သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။";
    const event = new Event("input");
    unicodeBox.dispatchEvent(event);
  }

  // Helper function to show error toast
  function showErrorToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    toastMessage.textContent = "Error: " + message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
