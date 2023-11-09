import React from "react";
import logo from "../assets/Samudera.png";
import TabPane from "antd/es/tabs/TabPane";

function Print_FR_SPOT_CHECK() {
  const namaDriver = "Nama Pengemudi";
  const tanggalPemeriksaan = "Tanggal Pemeriksaan";
  const jamPemeriksaan = "Jam Pemeriksaan";
  const petugasPemeriksa = "Petugas Pemeriksa";
  const tipeKendaraan = "Tipe Kendaraan";
  const noPol = "Nopol Kendaraan";
  const rute = "Rute";
  const hariTuanggal = "Hari Tanggal";
  return (
    <div className="overflow-hidden  p-5 ">
      <table
        width="100%"
        className="border-solid border-black border-2"
        style={{ borderBottom: "none" }}
      >
        <tr style={{ border: "2px solid black" }} className="h-20">
          <td width="25%">
            <img src={logo} width="100%" />
          </td>
          <td
            align="center"
            colSpan="3"
            className="border-solid border-black border-1"
          >
            <b className="text-2xl">FORM SPOT CHECK</b>
          </td>
        </tr>
        <tr>
          <td colSpan={1}></td>
          <td
            style={{ display: "flex", justifyContent: "end" }}
            className="p-2"
          >
            <small>FR/SKI-PR-10/05 rev.05</small>
          </td>
        </tr>
        <tr className="h-10">
          <td width="10%" className="p-2">
            {namaDriver}
          </td>{" "}
          <td width="100%" className="p-2">
            :{" "}
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "none",
                backgroundColor: "black",
              }}
            />
          </td>
        </tr>
        <tr className="h-10">
          <td width="10%" className="p-2">
            {tipeKendaraan}
          </td>{" "}
          <td width="100%" className="p-2">
            :{" "}
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "none",
                backgroundColor: "black",
              }}
            />
          </td>
        </tr>
        <tr className="h-10">
          <td width="10%" className="p-2">
            {noPol}
          </td>{" "}
          <td width="100%" className="p-2">
            :{" "}
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "none",
                backgroundColor: "black",
              }}
            />
          </td>
        </tr>
        <tr className="h-10">
          <td width="10%" className="p-2">
            {rute}
          </td>{" "}
          <td width="100%" className="p-2">
            :{" "}
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "none",
                backgroundColor: "black",
              }}
            />
          </td>
        </tr>
        <tr className="h-10">
          <td width="10%" className="p-2">
            {hariTuanggal}
          </td>{" "}
          <td width="100%" className="p-2 ">
            :{" "}
            <hr
              style={{
                width: "100%",
                height: "1px",
                border: "none",
                backgroundColor: "black",
              }}
            />
          </td>
        </tr>
        <tr className="h-10"></tr>
      </table>
  

      {/* TABLE */}
      <>
        <table className="tg border w-full border-2 border-solid border-black ">
          <thead>
            <tr>
              <th
                className="border-2 border-solid w-0 border-black"
                rowSpan={2}
              >
                NO
              </th>
              <th className="border-2 border-black" rowSpan="2" colSpan={2}>
                Kriteria Penilaian
              </th>
              <th className="border-2 border-black" colSpan="2">
                Penilian
              </th>
              <th
                className="border-2 border-black w-40"
                rowSpan="2"
                colSpan={2}
              >
                Komentar
              </th>
            </tr>
            <tr>
              <td
                className="border-2 border-solid border-black text-center w-16 font-bold"
                rowSpan="1"
              >
                OK
              </td>
              <td className="border-2 border-solid border-black text-center w-16 font-bold">
                NOT OK
              </td>
            </tr>

            {/* PENGECEKAN UMUM */}
            <>
              <tr>
                <td
                  className="border-2 border-solid border-black text-center font-bold"
                  rowSpan="2"
                >
                  A
                </td>
              </tr>

              <tr>
                <td
                  className="border-2 border-solid border-black text-start font-bold"
                  style={{ backgroundColor: "orange" }}
                  colSpan={5}
                >
                  PENGECEKAN UMUM
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  1
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa SIM B II Umum, STNK, KIR yang masih valid dan sesuai
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  2
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa JMP Terbaru
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  3
                </td>
                <td className="border-2 border-solid border-black">
                  Mengisi Trip Plant
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  4
                </td>
                <td className="border-2 border-solid border-black">
                  Melakukan Fit to Work Test
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  5
                </td>
                <td className="border-2 border-solid border-black">
                  Mendapatkan Briefing JMP
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  6
                </td>
                <td className="border-2 border-solid border-black">
                  Melakukan Pemeriksaan Kendaraan Sebelumm Berangkat
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  7
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa Surat Jalan / DN / Packing List
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  8
                </td>
                <td className="border-2 border-solid border-black">
                  Pemahaman terkait proses dekivery (LSR, JMP, DWH, dll)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  9
                </td>
                <td className="border-2 border-solid border-black">
                  Jam Istirahat dan DWH sesuai standard
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  10
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi Ban & Baut Ban
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  11
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi Lampu - Lampu
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  12
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi APAR Baik dan Tidak Kedaluarsa
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  13
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi P3K Lengkap dan Tidak Kadaluarsa
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  14
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi Spill Kit Lengkap
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  15
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi SeatBelt Berfungsi Dengan Baik
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
            </>

            {/* PENGECEKAN AREA LOADING / UNDLOADING */}
            <>
              <tr>
                <td
                  className="border-2 border-solid border-black text-center font-bold"
                  rowSpan="2"
                >
                  B
                </td>
              </tr>

              <tr>
                <td
                  className="border-2 border-solid border-black text-start font-bold"
                  style={{ backgroundColor: "orange" }}
                  colSpan={5}
                >
                  PENGECEKAN AREA LOADING / UNLOADING
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  1
                </td>
                <td className="border-2 border-solid border-black">
                  Memarkirkan Kendaraan di Area yang Aman
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  2
                </td>
                <td className="border-2 border-solid border-black">
                  Mengaktifkan Handbrake / Rem Tangan
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  3
                </td>
                <td className="border-2 border-solid border-black">
                  Mematikan Mesin
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  4
                </td>
                <td className="border-2 border-solid border-black">
                  Mencabut Kunci
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  5
                </td>
                <td className="border-2 border-solid border-black">
                  Memasang Ganjal Ban
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  6
                </td>
                <td className="border-2 border-solid border-black">
                  Memasang Kerucut / Safety Cone
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  7
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi Twislock Terkunci
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  8
                </td>
                <td className="border-2 border-solid border-black">
                  Kondisi Seal
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  9
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak terdapat Ceceran / Rembesan Oli (B3)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  10
                </td>
                <td className="border-2 border-solid border-black">
                  Menggunakan APD yang di Persyaratkan
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  11
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak merokok diluar smoking area
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
            </>

            {/* SAAT DI PERJALANAN */}
            <>
              <tr>
                <td
                  className="border-2 border-solid border-black text-center font-bold"
                  rowSpan="2"
                >
                  C
                </td>
              </tr>

              <tr>
                <td
                  className="border-2 border-solid border-black text-start font-bold"
                  style={{ backgroundColor: "orange" }}
                  colSpan={5}
                >
                  SAAT DI PERJALANAN
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  1
                </td>
                <td className="border-2 border-solid border-black">
                  Menggunakan Seat Belt Tiga Titik Retractable
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  2
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak Menggunakan Alat Komunikasi
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  3
                </td>
                <td className="border-2 border-solid border-black">
                  Menyalakan Lampu DRL
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  4
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak Mengangkut Penampung yang Tidak Berkepentingan
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  5
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak melebihi batas kecepatan (sesuai jakan yang dilewati)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  6
                </td>
                <td className="border-2 border-solid border-black">
                  Tidak merokok dalam kabin
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  7
                </td>
                <td className="border-2 border-solid border-black">
                  Mengikuti rute sesuai dengan JMP
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  8
                </td>
                <td className="border-2 border-solid border-black">
                  Menggunakan APD (min. safety shoes & rompi reflektor)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
            </>

            {/* TRANSPORT DANGEROUS (3) */}
            <>
              <tr>
                <td
                  className="border-2 border-solid border-black text-center font-bold"
                  rowSpan="2"
                >
                  D
                </td>
              </tr>

              <tr>
                <td
                  className="border-2 border-solid border-black text-start font-bold"
                  style={{ backgroundColor: "orange" }}
                  colSpan={5}
                >
                  TRANSPORT DANGEROUS (3)
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  1
                </td>
                <td className="border-2 border-solid border-black">
                  Kendaraan terpasang Simbol B3
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  2
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa dokumen Izin Angkutan B3 (Kemenhub)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  3
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa dokumen MSDS
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  4
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa APD (sesuai dengan MSDS)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  5
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa Peralatan & Kelengkapan tanggap darurat (sesuai MSDS)
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  6
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa dokumen Kartu Pengawas
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
              <tr>
                <td></td>
                <td className="border-2 border-solid border-black text-center ">
                  7
                </td>
                <td className="border-2 border-solid border-black">
                  Membawa SOP Bongkar Muat B3
                </td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
                <td className="border-2 border-solid border-black "></td>
              </tr>
            </>
          </thead>
          <tbody>{/* Add more rows with data as needed */}</tbody>
        </table>
      </>
      <br />

      {/* PERHITUNGAN */}

      <>
        <table className="tg border w-full ">
          <thead>
            <tr>
              <th className=" w-0 " rowSpan={2}>
                Penilaian:
              </th>
              <th rowSpan="2" colSpan={2}>
                <div>
                  <div>Safe Observations</div>
                  <hr
                    style={{
                      width: "100%",
                      height: "1px",
                      border: "none",
                      backgroundColor: "black",
                    }}
                  />
                  <div>Total Safe + At Risk Observations</div>
                </div>
              </th>
              <th className=" h-28 text-left" rowSpan={2}>
                X 100 %
              </th>
              <th className="border-2 border-black h-28 text-left" colSpan="2">
                Pengemudi :
              </th>
              <th
                className="border-2 border-black w-40 text-left" // Tambahkan class "text-left" untuk meletakkan teks di sebelah kiri
                rowSpan="2"
                colSpan={2}
              >
                Diketahui Oleh :
              </th>
            </tr>
            <tr>
              <td
                className="border-2 border-solid border-black w-30 h-28 font-bold text-left"
                rowSpan="1"
              >
                Diperiksa oleh:
              </td>
            </tr>
          </thead>
          <tbody>{/* Add more rows with data as needed */}</tbody>
        </table>
        <table>
          <tr>
            <th class="font-bold">SCORE</th>
            <td>
              <div class="w-44 h-20 ml-4  border border-black"></div>
            </td>
          </tr>
        </table>
        <div class="mt-4 " style={{marginLeft: '3%'}}>
          <p>* Nilai standar minimum kelulusan 55%</p>
          <p>
            * Jika terdapat kerusakan, laporkan kepada bagian operasional untuk
            dilakukan perbaikan.
          </p>
          <p>
            * Jika nilai dibawah standar minimum kelulusan, maka driver akan
            dilakukan bimbingan atau refreshment oleh bagian Operation atau HSE.
          </p>
        </div>
      </>
    </div>
  );
}

export default Print_FR_SPOT_CHECK;
