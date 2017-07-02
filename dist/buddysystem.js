module.exports = elements => {
  Array.prototype.forEach.call(elements, obj => {
    obj.innerHTML = obj.innerHTML.replace(/([^]*[^\s])([ ]+)([^\s])/, (_match, before, spacesToReplace, after) => {
      return before + spacesToReplace.replace(' ', '&nbsp;') + after;
    });
  });
};
