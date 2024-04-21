// Create textarea
var textarea = document.createElement('textarea');
textarea.id = 'textInput';
textarea.placeholder = 'Enter your text here';
document.getElementById('root').appendChild(textarea);

// Create submit button
var submitBtn = document.createElement('button');
submitBtn.id = 'submitBtn';
submitBtn.textContent = 'Submit';
document.getElementById('root').appendChild(submitBtn);

// Event listener for submit button
document.getElementById('submitBtn').addEventListener('click', function() {
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


  var resultHTML = '<table><tr><th>Word Name</th><th>Word Frequency</th></tr>';
  for (var i = 0; i < Math.min(5, sortedWords.length); i++) {
    var word = sortedWords[i];
    resultHTML += '<tr><td>' + word + '</td><td>' + wordFreq[word] + '</td></tr>';
  }
  resultHTML += '</table>';
  document.getElementById('root').innerHTML += resultHTML;

  
  console.log(wordFreq);
});
