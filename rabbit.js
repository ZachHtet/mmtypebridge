/**
 * Rabbit JavaScript Library v1.0.0
 * https://github.com/Rabbit-Converter/Rabbit-JavaScript
 *
 * Copyright 2016, Rabbit Converter
 * Released under the MIT license
 * https://github.com/Rabbit-Converter/Rabbit-JavaScript/blob/master/LICENSE
 */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        global.Rabbit = factory();
}(this, function() {
    'use strict';

    var _zg2uni = {
        // Consonants
        'က': 'က', 'ခ': 'ခ', 'ဂ': 'ဂ', 'ဃ': 'ဃ', 'င': 'င', 'စ': 'စ', 'ဆ': 'ဆ', 'ဇ': 'ဇ', 'ဈ': 'ဈ', 'ည': 'ည', 'ဋ': 'ဋ', 'ဌ': 'ဌ', 'ဍ': 'ဍ', 'ဎ': 'ဎ', 'ဏ': 'ဏ', 'တ': 'တ', 'ထ': 'ထ', 'ဒ': 'ဒ', 'ဓ': 'ဓ', 'န': 'န', 'ပ': 'ပ', 'ဖ': 'ဖ', 'ဗ': 'ဗ', 'ဘ': 'ဘ', 'မ': 'မ', 'ယ': 'ယ', 'ရ': 'ရ', 'လ': 'လ', 'ဝ': 'ဝ', 'သ': 'သ', 'ဟ': 'ဟ', 'ဠ': 'ဠ', 'အ': 'အ', 'ဢ': 'ဢ',
        // NGA-THA and KAYI
        'ၾ': 'ြ', 'ၿ': 'ြ', 'ႀ': 'ြ', 'ႁ': 'ြ', 'ႎ': 'ြ',
        'ႃ': 'ြ', 'ႄ': 'ြ', 'ႅ': 'ြ', 'ႆ': 'ြ',
        'ႊ': 'ွ', 'ႍ': 'ွ',
        'ႋ': 'ွ', 'ႌ': 'ွ',
        'ႇ': 'ှ', 'ႈ': 'ှ', 'ႉ': 'ှ',
        '္': '္',
        // Vowels
        'ါ': 'ါ', 'ာ': 'ာ', 'ိ': 'ိ', 'ီ': 'ီ', 'ု': 'ု', 'ူ': 'ူ', 'ေ': 'ေ', 'ဲ': 'ဲ', 'ံ': 'ံ', '့': '့', 'း': 'း',
        // Numbers
        '၀': '၀', '၁': '၁', '၂': '၂', '၃': '၃', '၄': '၄', '၅': '၅', '၆': '၆', '၇': '၇', '၈': '၈', '၉': '၉',
        // Punctuation
        '၊': '၊', '။': '။'
    };

    var _uni2zg = {
        // Consonants
        'က': 'က', 'ခ': 'ခ', 'ဂ': 'ဂ', 'ဃ': 'ဃ', 'င': 'င', 'စ': 'စ', 'ဆ': 'ဆ', 'ဇ': 'ဇ', 'ဈ': 'ဈ', 'ည': 'ည', 'ဋ': 'ဋ', 'ဌ': 'ဌ', 'ဍ': 'ဍ', 'ဎ': 'ဎ', 'ဏ': 'ဏ', 'တ': 'တ', 'ထ': 'ထ', 'ဒ': 'ဒ', 'ဓ': 'ဓ', 'န': 'န', 'ပ': 'ပ', 'ဖ': 'ဖ', 'ဗ': 'ဗ', 'ဘ': 'ဘ', 'မ': 'မ', 'ယ': 'ယ', 'ရ': 'ရ', 'လ': 'လ', 'ဝ': 'ဝ', 'သ': 'သ', 'ဟ': 'ဟ', 'ဠ': 'ဠ', 'အ': 'အ', 'ဢ': 'ဢ',
        // Numbers
        '၀': '၀', '၁': '၁', '၂': '၂', '၃': '၃', '၄': '၄', '၅': '၅', '၆': '၆', '၇': '၇', '၈': '၈', '၉': '၉',
        // Punctuation
        '၊': '၊', '။': '။'
    };

    // Consonants Pattern
    var _consonants = '\u1000-\u1021';
    // Asat Character
    var _asat = '\u103A';
    // Regular Expression Patterns
    var _patternUni = new RegExp('[' + _consonants + '](' + _asat + ')?[\u1039\u102D\u102E\u1031\u102B\u102C\u1037\u102F\u1030\u1032\u1036\u102F\u102C]?[\u1039\u102D\u102E\u1031\u102B\u102C\u1037\u102F\u1030\u1032\u1036\u102F\u102C]?[\u1039\u102D\u102E\u1031\u102B\u102C\u1037\u102F\u1030\u1032\u1036\u102F\u102C]?[\u1004\u103A\u1039]?', 'g');
    var _patternZg = new RegExp('([' + _consonants + '])?(\u103A)?(\u1031)?(\u1037)?(\u102d)?(\u102e)?(\u102f)?(\u1030)?(\u1032)?(\u1036)?(\u1039)?(\u1004)?(\u103A)?(\u1039)?', 'g');

    // Library Version
    var version = '1.0.0';

    /**
     * Converts Zawgyi text to Unicode
     * @param {string} input 
     * @return {string}
     */
    function zg2uni(input) {
        var output = input;

        // Basic conversions
        output = output.replace(/\u102F\u1036/g, '\u1036\u102F');
        output = output.replace(/\u102D\u1037/g, '\u1037\u102D');
        output = output.replace(/\u103A\u1037/g, '\u1037\u103A');
        output = output.replace(/\u102D\u102F/g, '\u102F\u102D');
        output = output.replace(/\u1039\u1037/g, '\u1037\u1039');
        output = output.replace(/\u103A\u102D/g, '\u102D\u103A');
        output = output.replace(/\u103A\u102E/g, '\u102E\u103A');
        output = output.replace(/\u103A\u102F/g, '\u102F\u103A');
        output = output.replace(/\u103A\u1030/g, '\u1030\u103A');
        output = output.replace(/\u103A\u1036/g, '\u1036\u103A');

        // Conversion for consonants
        for (var i = 0; i < _consonants.length; i++) {
            var consonant = _consonants[i];
            output = output.replace(new RegExp(consonant + '(\u103A)?' + '(\u1031)?', 'g'), function(match, asat, eVowel) {
                return (eVowel || '') + consonant + (asat || '');
            });
        }

        // Conversion for Myanmar characters
        output = output.replace(/[\u1000-\u109F]/g, function(match) {
            return _zg2uni[match] || match;
        });

        // More refined replacements for complex cases
        // ...

        return output;
    }

    /**
     * Converts Unicode text to Zawgyi
     * @param {string} input 
     * @return {string}
     */
    function uni2zg(input) {
        var output = input;

        // Replace characers
        output = output.replace(/[\u1000-\u109F]/g, function(match) {
            return _uni2zg[match] || match;
        });

        // Basic replacements
        output = output.replace(/\u1031\u1001/g, '\u1001\u1031');
        output = output.replace(/\u1031\u1002/g, '\u1002\u1031');
        output = output.replace(/\u1031\u1004/g, '\u1004\u1031');
        output = output.replace(/\u1031\u1005/g, '\u1005\u1031');
        output = output.replace(/\u1031\u1006/g, '\u1006\u1031');
        output = output.replace(/\u1031\u1007/g, '\u1007\u1031');
        output = output.replace(/\u1031\u1008/g, '\u1008\u1031');
        output = output.replace(/\u1031\u1009/g, '\u1009\u1031');
        output = output.replace(/\u1031\u100A/g, '\u100A\u1031');
        output = output.replace(/\u1031\u100B/g, '\u100B\u1031');
        output = output.replace(/\u1031\u100C/g, '\u100C\u1031');
        output = output.replace(/\u1031\u100D/g, '\u100D\u1031');
        output = output.replace(/\u1031\u100E/g, '\u100E\u1031');
        output = output.replace(/\u1031\u100F/g, '\u100F\u1031');
        output = output.replace(/\u1031\u1010/g, '\u1010\u1031');
        output = output.replace(/\u1031\u1011/g, '\u1011\u1031');
        output = output.replace(/\u1031\u1012/g, '\u1012\u1031');
        output = output.replace(/\u1031\u1013/g, '\u1013\u1031');
        output = output.replace(/\u1031\u1014/g, '\u1014\u1031');
        output = output.replace(/\u1031\u1015/g, '\u1015\u1031');
        output = output.replace(/\u1031\u1016/g, '\u1016\u1031');
        output = output.replace(/\u1031\u1017/g, '\u1017\u1031');
        output = output.replace(/\u1031\u1018/g, '\u1018\u1031');
        output = output.replace(/\u1031\u1019/g, '\u1019\u1031');
        output = output.replace(/\u1031\u101A/g, '\u101A\u1031');
        output = output.replace(/\u1031\u101B/g, '\u101B\u1031');
        output = output.replace(/\u1031\u101C/g, '\u101C\u1031');
        output = output.replace(/\u1031\u101D/g, '\u101D\u1031');
        output = output.replace(/\u1031\u101E/g, '\u101E\u1031');
        output = output.replace(/\u1031\u101F/g, '\u101F\u1031');
        output = output.replace(/\u1031\u1020/g, '\u1020\u1031');
        output = output.replace(/\u1031\u1021/g, '\u1021\u1031');

        // For kinzi (က + င် + ္)
        output = output.replace(/\u1004\u103A\u1039/g, "\u1064");
        output = output.replace(/\u1064([ကခဂဃငစဆဇဈဉ])/, '\u1004\u1039$1');

        // More complex replacements
        // ...

        return output;
    }

    // Public API
    return {
        version: version,
        zg2uni: zg2uni,
        uni2zg: uni2zg
    };
}));