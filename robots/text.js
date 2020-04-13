const algorithmia = require('algorithmia');
const algorithmiaApiKey = require('../credentials/algorithmia').apiKey;
const setenceBoundaryDetection = require('sbd');

async function robot(content) {
  await fetchContentFromWikipedia(content);
  sanitizeContent(content);
  breakContentIntoSentences(content);

 async function fetchContentFromWikipedia(content) {
    const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey);
    const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2');
    const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm);
    const wikipediaContent = wikipediaResponse.get();
    
    content.sourceContentOriginal = wikipediaContent.content;
  }

  function sanitizeContent(content) {
    const withoutBlankLinesAndMarkdown = removeBlankLineAndMarkdown(content.sourceContentOriginal);
    const withoutDatesInParentheses = removeDatesInParentheses(withoutBlankLinesAndMarkdown);

    content.sourceContentSanitized = withoutDatesInParentheses;

    function removeBlankLineAndMarkdown(text) {
      const allLines = text.split('\n');

      const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
        if (line.trim().length === 0 || line.trim().startsWith('=')) {
          return false;
        }

        return true;
      });

      return withoutBlankLinesAndMarkdown.join('');
    } 
  }

  function removeDatesInParentheses(text) {
    return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ');
  }

  function breakContentIntoSentences(content) {
    content.sentences = [];

    const sentences = setenceBoundaryDetection.sentences(content.sourceContentSanitized);
    sentences.forEach((sentence) => {
      content.sentences.push({
        text: sentence,
        keywords: [],
        images: []
      })
    })
  }
}

module.exports = robot;