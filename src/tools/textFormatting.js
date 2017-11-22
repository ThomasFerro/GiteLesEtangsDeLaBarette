// Format text to HTML, creating 'a' tags when finding mail()
export function textToHtml(text) {
  if (text) {
    return text.replace(/mail\((.*)\)/gi,
    '<a href="mailto:$1">$1</a>');
  }
  return '';
}
