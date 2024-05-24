var textarea = document.createElement('textarea');
textarea.id = 'textInput';
textarea.placeholder = 'Enter your text here';
document.getElementById('root').appendChild(textarea);

var submitBtn = document.createElement('button');
submitBtn.id = 'submitBtn';
submitBtn.textContent = 'Submit';
document.getElementById('root').appendChild(submitBtn);

document.getElementById('root').addEventListener('click', function(event) {
  if (event.target && event.target.id === 'submitBtn') {
    var textInput = document.getElementById('textInput').value;
    var words = textInput.split(/\s+/);
    var wordFreq = {};

    // Count word frequencies
    words.forEach(function(word) {
      if (word in wordFreq) {
        wordFreq[word]++;
      } else {
        wordFreq[word] = 1;
      }
    });

    // Sort word frequencies
    var sortedWords = Object.keys(wordFreq).sort(function(a, b) {
      return wordFreq[b] - wordFreq[a];
    });

    var existingResult = document.getElementById('resultTable');
    if (existingResult) {
      existingResult.remove();
    }

    // Create result table
    var resultHTML = '<table id="resultTable"><tr><th>Word</th><th>Frequency</th></tr>';
    for (var i = 0; i < Math.min(5, sortedWords.length); i++) {
      var word = sortedWords[i];
      resultHTML += '<tr><td>' + word + '</td><td>' + wordFreq[word] + '</td></tr>';
    }
    resultHTML += '</table>';
    document.getElementById('root').innerHTML += resultHTML;

    console.log(wordFreq);
  }
});
