# appscriptHivervinculoPDF

📌 Generación de Enlaces a PDF en Google Drive a listarlos en Google Sheets

✔️ Descripción

Este script automatiza la generación de enlaces a archivos PDF almacenados en una carpeta específica de Google Drive. Los enlaces se insertan en una columna de una hoja de cálculo de Google Sheets, permitiendo un acceso rápido a los documentos generados.
Funcionalidad

Busca archivos PDF en una carpeta de Google Drive basándose en un identificador único ("Correlativo No.").
Si el archivo PDF existe, genera un enlace público de acceso directo.
Inserta el enlace en la hoja de cálculo como un hipervínculo.

Si el archivo no se encuentra, muestra un mensaje indicando que no se encontró el PDF.


📌 Requisitos

Una hoja de cálculo en Google Sheets con una columna que contenga el identificador único ("Correlativo No.").
Una carpeta en Google Drive donde se almacenan los archivos PDF.
Permisos adecuados para acceder y modificar la hoja de cálculo y la carpeta en Google Drive.


✔️ Variables Clave

DESTINATION_FOLDER_ID: ID de la carpeta de Google Drive donde se almacenan los archivos PDF.


🛠️ Cómo Funciona

generatePdfLinks()
Obtiene la hoja activa y sus datos.

✔️ Verifica si existe la columna "PreInforme PDF Link"; si no, la crea.

✔️ Recorre las filas y obtiene el identificador único de la columna "Correlativo No.".

✔️ Busca el archivo PDF en la carpeta especificada.

✔️ Si encuentra el archivo, genera un enlace directo y lo inserta en la hoja como un hipervínculo.

✔️ Si no encuentra el archivo, muestra "PDF no encontrado" en la celda correspondiente.
getFileByName(fileName, folderId)

✔️ Busca un archivo específico por su nombre dentro de la carpeta de Google Drive.
Devuelve el primer archivo encontrado o null si no existe.


📎 Instrucciones de Uso

Reemplazar DESTINATION_FOLDER_ID con el ID de la carpeta de Google Drive donde se encuentran los archivos PDF.

Asegurarse de que la hoja de cálculo contiene una columna "Correlativo No." con los nombres de los archivos sin la extensión.

Ejecutar generatePdfLinks() desde el Editor de Secuencias de Comandos en Google Sheets.

Verificar que la columna "PreInforme PDF Link" contenga los enlaces generados.


✔️ Posibles Errores y Soluciones

"Documento no encontrado" en la celda: Verificar que el nombre del archivo en la carpeta coincida exactamente con el "Correlativo No." de la hoja de cálculo.

No se genera la columna "PreInforme PDF Link" automáticamente: Asegurarse de que la hoja de cálculo no tenga restricciones de edición.

El enlace generado no abre el PDF: Verificar los permisos del archivo en Google Drive para permitir el acceso.


✔️ Contacto

Desarrollado por: María Eugenia Szwedowski
📞 Cel: +598 91074131
