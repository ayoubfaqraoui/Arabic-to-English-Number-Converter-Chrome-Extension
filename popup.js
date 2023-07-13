document.addEventListener('DOMContentLoaded', function() {
  var arabicNumberInput = document.getElementById('arabicNumber');
  var englishNumberInput = document.getElementById('englishNumber');

  arabicNumberInput.addEventListener('input', function() {
    var arabicNumber = arabicNumberInput.value;
    var englishNumber = convertToEnglishNumber(arabicNumber);
    englishNumberInput.value = englishNumber;
    copyToClipboard(englishNumber);
  });

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(function() {
        console.log('Text copied to clipboard: ' + text);
      })
      .catch(function(error) {
        console.error('Error copying text to clipboard: ', error);
      });
  }

    // Focus on the Arabic number input field when the extension is opened
    arabicNumberInput.focus();


});

function convertToEnglishNumber(arabicNumber) {
  var arabicToEnglish = {
    '\u0660': '0',
    '\u0661': '1',
    '\u0662': '2',
    '\u0663': '3',
    '\u0664': '4',
    '\u0665': '5',
    '\u0666': '6',
    '\u0667': '7',
    '\u0668': '8',
    '\u0669': '9'
  };

  var englishNumber = '';
  for (var i = 0; i < arabicNumber.length; i++) {
    var char = arabicNumber[i];
    englishNumber += arabicToEnglish[char] || char;
  }

  return englishNumber;
}
