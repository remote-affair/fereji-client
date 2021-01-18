export class FileHelper {
  static saveAs(file: any, fileName: string) {
    // set proper file type excel downloads
    // can be application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for .xlsx
    // or application/vnd.ms-excel for .xls file formats
    if (file.type === 'application/ms-excel') {
      file = new Blob([file], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
    }

    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;

    a.click();
  }
}
