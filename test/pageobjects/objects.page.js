const { $x } = require('@wdio/globals'); // Use $x from globals
const Page = require('./page');

class Objects extends Page {
  ElementTitleExpect(element, expectText) {
    const textInput = $x(`//div[contains(@data-testid,'${element}')]`)[0];
    // Assuming you want to set a value to the found element
    return textInput.setValue(expectText);
  }
}

module.exports = new Objects();
