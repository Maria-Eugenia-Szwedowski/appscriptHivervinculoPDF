

function generatePdfLinks() {
  const DESTINATION_FOLDER_ID =  '____________FOLDER_ID____________';
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var formValues = dataRange.getValues();
  var headers = formValues[0];
 
  // Asegurarse de que la columna para los enlaces no existe
  var linkColumnIndex = headers.indexOf("PreInforme PDF Link");
  if (linkColumnIndex === -1) {
    sheet.insertColumnAfter(headers.length); // Insertar una columna al final
    sheet.getRange(1, headers.length + 1).setValue("PDF Link"); // Establecer encabezado
    linkColumnIndex = headers.length;
  }
 
  for (var rowIndex = 1; rowIndex < formValues.length; rowIndex++) {
    var formRow = formValues[rowIndex];
    var correlativoNo = formRow[headers.indexOf("Correlativo No.")]; // Cambiar según el nombre de la columna
   
    if (correlativoNo) {
      var pdfFileName = correlativoNo + ".pdf";
      var pdfFile = getFileByName(pdfFileName, DESTINATION_FOLDER_ID);
     
      if (pdfFile) {
        var pdfLink = "https://drive.google.com/uc?id=" + pdfFile.getId();
        sheet.getRange(rowIndex + 1, linkColumnIndex + 1).setValue('=HYPERLINK("' + pdfLink + '"; "Ver PDF")');
      } else {
        sheet.getRange(rowIndex + 1, linkColumnIndex + 1).setValue("PDF no encontrado");
      }
    }
  }
}


function getFileByName(fileName, folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByName(fileName);
 
  while (files.hasNext()) {
    var file = files.next();
    return file; // Devolver el primer archivo con el nombre coincidente
  }
 
  return null; // Si no se encuentra ningún archivo
}
