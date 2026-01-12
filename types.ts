
export enum Page {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  SCHOOL_DATA = 'SCHOOL_DATA',
  MAIL_INCOMING = 'MAIL_INCOMING',
  MAIL_OUTGOING = 'MAIL_OUTGOING',
  TEACHER_DATA = 'TEACHER_DATA',
  STUDENT_DATA = 'STUDENT_DATA',
  PPDB = 'PPDB',
  INVENTORY = 'INVENTORY',
  REPORTS = 'REPORTS',
  SETTINGS = 'SETTINGS',
  ATTENDANCE = 'ATTENDANCE'
}

export interface Teacher {
  id: string;
  nama: string;
  nip: string;
  nuptk: string;
  jabatan: string;
  status: string;
  golongan: string;
  pendidikan: string;
  tmt: string;
}

export interface Student {
  id: string;
  kelas: string;
  nisn: string;
  nik: string;
  nama: string;
  jk: 'L' | 'P';
  ttl: string;
  alamat: string;
  namaOrtu: string;
}

export interface AttendanceRecord {
  id: string;
  teacherName: string;
  nip: string;
  jamDatang: string;
  jamPulang: string;
  tanggal: string;
  status: 'Hadir' | 'Alpa' | 'Izin' | 'Cuti';
}
