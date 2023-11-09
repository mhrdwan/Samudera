import React from "react";
import logo from "../assets/Samudera.png";


function Print_FR_PK() {
    
  return (
    <div className="overflow-hidden p-10">
      <table width="100%" className="border-solid border-black border-2">
        <tr>
          <td
            width="30%"
            align="center"
            className="border-solid border-black border-2"
          >
            {" "}
            <img src={logo} />
          </td>
          <td
            className="border-solid border-black border-2 text-4xl font-bold"
            align="center"
          >
            FORMULIR PEMERIKSAAN KENDARAAN
          </td>
        </tr>
      </table>
      <div className="row border-solid border-black border-2">
        <div className="col-md-12 ">
          <div className="col-md-24 flex justify-end">
            <p className="pull-right text-2xl">FR/SKI-PR-10/07 rev.02</p>
            <br />
          </div>
        </div>
      </div>
      <table width="100%">
        <tr>
          <td className=" border-black border-2 font-bold" width="50%">
            NO. MOBIL <span style={{ marginLeft: "11%" }}>:</span>{" "}
          </td>
          <td className=" border-black border-2 font-bold" width="50%">
            DRIVER <span style={{ marginLeft: "11%" }}>:</span>{" "}
          </td>
        </tr>
        <tr>
          <td className=" border-black border-2 font-bold" width="50%">
            KILOMETER<span style={{ marginLeft: "11%" }}>:</span>{" "}
          </td>
          <td className=" border-black border-2 font-bold" width="50%">
            JENIS MOBIL<span style={{ marginLeft: "7%" }}>:</span>{" "}
          </td>
        </tr>
      </table>
      <>
        <div className="flex row">
          <table width="50%">
            <thead>
              {/* MESIN  */}
              <>
                <tr>
                  <th className="border-2 border-solid w-0 border-black">
                    NO.
                  </th>
                  <th className="border-2 border-black w-60" colSpan={2}>
                    JENIS PEMERIKSAAAN
                  </th>
                  <th className="border-2 border-black " colSpan={3}>
                    HASIL
                  </th>
                </tr>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    colSpan={3}
                    style={{ backgroundColor: "orange" }}
                  >
                    A. MESIN
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    BAIK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    TIDAK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Oli Mesin*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Air Radiator*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Fan Belt
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Fuel Filter
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Oil Filter
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Saringan Udara
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Minyak Power Stering*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Minyak Kopling*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
              </>

              {/* HEAD */}
              <>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    colSpan={3}
                    style={{ backgroundColor: "orange" }}
                  >
                    B. HEAD
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    BAIK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    TIDAK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kaca Depan dan Kaca Spion
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Wiper
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Regulator Kaca Jendela
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Seatbelt 3 Titik Retractable*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Jok
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Handle & Kunci Pintu
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Panel Dashboard
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kebersihan dan Kerapihan Kabin
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      9
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Klakson*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      10
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Alarm Mundur*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      11
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Ganjal Ban, Dongkrak, Kunci Roda*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      12
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kontainer Penyimpanan
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      13
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kondisi Rem*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      14
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Accu*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      15
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Perisai Kolong Head*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      16
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Utama*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      17
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Sein*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      18
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Standby / DRL*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      19
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Rem*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      20
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Baut Roda Head*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
              </>

              {/* CHASIS */}
              <>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    colSpan={3}
                    style={{ backgroundColor: "orange" }}
                  >
                    C. CHASIS
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    BAIK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    TIDAK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Mundur*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Rem*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Lampu Sein*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kondisi Ban*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Baut Roda Chasis*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Ban Cadangan*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Twist Lock*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Perisai Kolong Chasis*
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      borderLeft: "1px solid black",
                      borderRight: "1px solid black",
                      paddingRight: "30px",
                    }}
                  >
                    Berdasarkan hasil pemeriksaan yang telah dilakukan, maka
                    pada saat ini yang bersangkutan dinyatakan :{" "}
                    <p>
                      <b>LAYAK / TIDAK LAYAK** BEROPERASI</b>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      borderLeft: "1px solid black",
                    }}
                  >
                    Notes:
                  </td>
                  <td colSpan={5} style={{ borderRight: "1px solid black" }}>
                    {" "}
                    *Critical Item
                  </td>
                </tr>
                <tr
                  style={{
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  <td></td>
                  <td colSpan={5} style={{ borderRight: "1px solid black" }}>
                    {" "}
                    **Coret Salah Satu
                  </td>
                </tr>
              </>
            </thead>
          </table>
          <table width="50%">
            <thead>
              {/* PERLENGKAPAN KESELAMATAN  */}
              <>
                <tr>
                  <th className="border-2 border-solid w-0 border-black">
                    NO.
                  </th>
                  <th className="border-2 border-black w-60" colSpan={2}>
                    JENIS PEMERIKSAAAN
                  </th>
                  <th className="border-2 border-black" colSpan={3}>
                    HASIL
                  </th>
                </tr>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    style={{ backgroundColor: "orange" }}
                    colSpan={3}
                  >
                    D. PERLENGKAPAN KESELAMATAN
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    BAIK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    TIDAK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Helm Safety
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Rompi Reflektor / Seragam Lapangan
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Sepatu Safety
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kacamata Safety
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Spill Kit (Pasir / Serbuk Kayu)
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Sarung Tangan Karet
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Sekop
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Ember Penampung
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      9
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Plastik Limbah B3
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      10
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Kerucut Pengaman Bereflektor
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      11
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Segi Tiga Pengaman
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      12
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      APAR
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      13
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      P3K
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      14
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Senter
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
              </>

              {/* DOKUMEN */}
              <>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    style={{ backgroundColor: "orange" }}
                    colSpan={3}
                  >
                    E. DOKUMEN
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    BAIK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    TIDAK
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Buku KIR Head
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Buku KIR Casis
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      STNK
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Uji Emisi
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      SIM
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      ID Card Pelabuhan
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      RHM / JMO Update Terbaru
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Induksi
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
              </>

              {/* SAFE TO LOAD / UNLOAD */}
              <>
                <tr>
                  <td
                    className="border-2 border-solid border-black text-center font-bold "
                    style={{ backgroundColor: "orange" }}
                    colSpan={3}
                  >
                    G. SAFE TO LOAD / UNLOAD
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    LOAD
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    UNLOAD
                  </td>
                  <td className="border-2 border-solid border-black  font-bold text-center">
                    KETERANGAN
                  </td>
                </tr>
                <>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      1
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={3}
                    >
                      Pastikan Area Muat/Bongkar Aman
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      2
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Hend Rem
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      3
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Matikan Mesin
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      4
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Cabut Kunci & Beri Kunci ke Petugas
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      5
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Pasang Ganjal Ban
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      6
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Pasang Safety Cone
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      7
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Periksa Twist Lock
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      8
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Periksa Seal / Gembok
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      9
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Periksa Tetesan Oli / Kebocoran
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>

                  <tr>
                    <td className="border-2 border-solid border-black text-center ">
                      10
                    </td>
                    <td
                      className="border-2 border-solid border-black text-start "
                      colSpan={2}
                    >
                      Periksa Susunan Barang
                    </td>

                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                    <td className="border-2 border-solid border-black "></td>
                  </tr>
                </>
              </>
            </thead>
          </table>
        </div>
        <div className="row flex">
          <table width="50%">
            <tr>
              <th
                className="border-2 border-solid w-0 border-black font-bold"
                colSpan={5}
              >
                Diperiksa Oleh Sopir/Driver :
              </th>
              <th className="border-2 w-44 border-black font-bold">Tanggal</th>
              <th className="border-2 border-black font-bold">TDD</th>
            </tr>
            <tr>
              <td
                className="border-2 border-solid border-black text-center h-28 "
                colSpan={5}
              ></td>
              <td className="border-2 border-solid border-black "></td>
              <td className="border-2 border-solid border-black "></td>
            </tr>
          </table>
          <table width="50%">
            <tr>
              <th
                className="border-2 border-solid w-0 border-black font-bold"
                colSpan={5}
              >
                Diketahui Oleh Staff Operasional :
              </th>
              <th className="border-2 w-48 border-black font-bold">Tanggal</th>
              <th className="border-2 border-black font-bold">TDD</th>
            </tr>
            <tr>
              <td
                className="border-2 border-solid border-black text-center h-28"
                colSpan={5}
              ></td>
              <td className="border-2 border-solid border-black "></td>
              <td className="border-2 border-solid border-black "></td>
            </tr>
          </table>
         
        </div>
        <table width="100%">
            <th className="border-2 border-solid w-0 border-black text-left h-28 font-bold">
                Keterangan :
            </th>
          </table>
      </>
    </div>
  );
}

export default Print_FR_PK;
