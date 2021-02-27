/**
 * @param {string} content
 * @param {"plain"|"csv"} textType - plain/csv
 * @param {string} fileName
 */
function downloadFile(content, textType, fileName) {
  let element = document.createElement('a');
  element.setAttribute('href', `data:${textType};charset=utf-8,` + encodeURIComponent(content));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default downloadFile