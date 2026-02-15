function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const existing = sheet.getRange("A:A").getValues().flat();
  if (existing.includes(data.trackingNumber)) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Tracking number sudah digunakan!"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    data.trackingNumber,
    data.statusPesanan,
    data.namaPembeli,
    data.nomborTelefon,
    data.jenisPembayaran,
    data.pesanan,
    data.kuantiti,
    data.jumlahHarga,
    data.tarikhDibuat,
    data.tarikhSelesai,
    data.lokasiKoordinat,
    data.historyNote
  ]);

  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: "Pesanan berjaya disimpan!"
  })).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  const headers = values.shift();
  
  const tracking = e.parameter.tracking;
  if (!tracking) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Tracking number diperlukan."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  const row = values.find(r => r[0] === tracking);
  if (!row) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Pesanan tidak dijumpai."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    trackingNumber: row[0],
    namaPembeli: row[2],        // ← tambah ini
    statusPesanan: row[1],
    tarikhDibuat: row[8],
    tarikhSelesai: row[9],
    historyNote: row[11],
    jumlahHarga: row[7],
    jenisPembayaran: row[4],
    lokasiKoordinat: row[10]
  })).setMimeType(ContentService.MimeType.JSON);
}
