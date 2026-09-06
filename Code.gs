function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Climate Week Medellín 2026')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
