// ====================================================================
// KONFIGURASI MODULAR SURVEY (CONFIG-DRIVEN)
// Cukup edit file ini untuk membuat atau mengubah jenis survey apapun!
// ====================================================================

const SURVEY_CONFIG = {
  // 1. Identitas Survey
  title: "Survey Kinerja Operation Lead",
  subtitle: "Khusus Kepala Cabang PT Duta Mitra Solusindo. Mengisi hanya butuh sekitar 1 menit.",
  company: "PT Duta Mitra Solusindo",

  // 2. Nama Tab di Google Sheet (Memungkinkan 1 Google Spreadsheet untuk banyak jenis survey)
  sheetName: "Jawaban",

  // 3. Label Peran
  respondentLabel: "Nama Kepala Cabang",        // Label untuk orang yang mengisi survey
  respondentPlaceholder: "Pilih nama Anda",
  targetLabel: "Operation Lead yang dinilai",  // Subjek yang dinilai (kosongkan "" jika survey umum/tanpa subjek)

  // 4. Daftar Pertanyaan (Bebas: bisa 1, 2, 3, 5, 10, atau berapapun)
  questions: [
    "Apakah Operation Lead mampu memastikan seluruh kebutuhan operasional pelanggan terpenuhi secara tepat waktu dan sesuai standar layanan?",
    "Apakah Operation Lead responsif dan mampu menyelesaikan setiap permasalahan operasional serta keluhan pelanggan dengan cepat dan tepat?",
    "Apakah Operation Lead mampu membangun koordinasi, komunikasi, dan pengawasan yang efektif terhadap tim operasional dan pengemudi?"
  ],

  // 5. Penilaian Bintang
  enableRating: true,                          // true = aktifkan bintang 1-5, false = sembunyikan
  ratingLabel: "Penilaian keseluruhan",
  ratingHint: "Ketuk bintang untuk menilai (1 = sangat kurang, 5 = sangat baik)",

  // 6. Kolom Keterangan / Masukan Tambahan
  enableNotes: true,                           // true = aktifkan textarea catatan, false = sembunyikan
  notesLabel: "Keterangan",
  notesOptionalText: "(opsional)",
  notesPlaceholder: "Tulis masukan atau catatan bila ada",
  notesMaxLength: 500,

  // 7. Pesan Sukses
  successTitle: "Survey terkirim",
  successMessage: "Terima kasih. Jawaban Anda sudah tercatat.",

  // 8. URL Web App Google Apps Script
  endpoint: "https://script.google.com/macros/s/AKfycbzUzD6WnPShAdpJ2TeOtIWJkCvhykspCwoipc-xiIvv-FG1eNYSUxHeStU_h9LqPiv38g/exec",

  // 9. Daftar Peserta & Subjek Penilaian
  branches: [
    { cabang: "JAKARTA 1", kepala: "DANI ANDRIANTO", target: "GILANG FITRIANSYAH" },
    { cabang: "JAKARTA 1", kepala: "CRISTIAN SUHERMAN", target: "ADLIAN HANDRA" },
    { cabang: "JAKARTA 2", kepala: "HENRY IKHSAN", target: "YUANDA" },
    { cabang: "JAKARTA 4", kepala: "HENDRA ATH", target: "RINO PARIPURNA" },
    { cabang: "BANDUNG", kepala: "CRISTOPER LEE", target: "IKHSAN FAJAR FEBRIYANTO" },
    { cabang: "LAMPUNG", kepala: "RENDI ANDIKA", target: "BOBY MUHAMMAD AZIZ" },
    { cabang: "MEDAN", kepala: "RICKY JOSUA", target: "SAPRODIN" },
    { cabang: "PALEMBANG", kepala: "MUHAMMAD AFIF", target: "ARIANTO SAPUTRA" },
    { cabang: "PEKANBARU", kepala: "TAUVID KONGDRO", target: "DESAN PRIONO AMHAN" },
    { cabang: "BALI", kepala: "NOVIN SUJARWO", target: "ANAK AGUNG NGURAH ALIT W" },
    { cabang: "BANJARMASIN", kepala: "HAMZAH GUNA WIJAYA", target: "FAKHRUL RAHMAN" },
    { cabang: "MAKASAR", kepala: "AGUS SETIANA", target: "DEDI" },
    { cabang: "MAKASAR", kepala: "HENCE KOSASIH", target: "FINSA SATRIO" },
    { cabang: "MALANG", kepala: "MARDI PRASETYO", target: "KIKY RIZKY ANANDA" },
    { cabang: "SEMARANG", kepala: "ARIS PRIYANTO", target: "HIMAWAN RIZKI UTOMO" },
    { cabang: "SURABAYA", kepala: "DIAH ELISABET KUSNAENI", target: "AH FIKRI KHOIRUR R" }
  ]
};

// Kompatibilitas mundur jika ada script lama yang mengakses langsung
const ENDPOINT = SURVEY_CONFIG.endpoint;
const BRANCHES = SURVEY_CONFIG.branches;
const QUESTIONS = SURVEY_CONFIG.questions;
