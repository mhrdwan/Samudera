import { Checkbox } from "antd";
import React from "react";
import logo from "../assets/Samudera.png";

function Print_FR_KLI_PR() {
  const namaDriver = "Nama Driver";
  const tanggalPemeriksaan = "Tanggal Pemeriksaan";
  const jamPemeriksaan = "Jam Pemeriksaan";
  const petugasPemeriksa = "Petugas Pemeriksa";

  return (
    <div className="overflow-hidden  p-10">
      <table width="100%" className="border-solid border-black border-2">
        <tr style={{ border: "2px solid black" }} className="h-20">
          <td width="25%" align="">
            <img align="center" src={logo} width="100%" />
          </td>
          <td
            align="center"
            colSpan="3"
            className="border-solid border-black border-1"
          >
            <b className="text-2xl">FORMULIR FIT TO WORK</b>
          </td>
        </tr>
      </table>
      <div className="row ">
        <div className="col-md-12 ">
          <div className="col-md-24 flex justify-end">
            <p className="pull-right">
              {" "}
              <input
                type="text"
                placeholder="                 FR/SK-PR-10/06"
                onChange={(e) => {
                  if (e.target.value === "...") {
                    // Jika input hanya berisi titik-titik, setel nilai input ke string kosong
                    e.target.value = "";
                  }
                }}
              />
            </p>
            <br />
          </div>
        </div>
      </div>
      <table width="100%" className="border-solid border-black border-1">
        <tr className="h-10">
          <td width="10%">{namaDriver}</td>{" "}
          <td width="250px">
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
          <td width="10%">{tanggalPemeriksaan}</td>{" "}
          <td width="250px">
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
          <td width="10%">{jamPemeriksaan}</td>{" "}
          <td width="250px">
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
          <td width="10%">{petugasPemeriksa}</td>{" "}
          <td width="250px">
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
      </table>
      <br />

      <table className="tg border w-full ">
        <thead>
          <tr>
            <th className="border-2 border-solid w-0 border-black" rowSpan={2}>
              NO
            </th>
            <th className="border-2 border-black w-32" rowSpan="2">
              Item Pemeriksaan
            </th>
            <th className="border-2 border-black" colSpan="2">
              Jawaban
            </th>
            <th className="border-2 border-black w-40" rowSpan="2">
              Catatan
            </th>
          </tr>
          <tr>
            <td
              className="border-2 border-solid border-black text-center w-16 font-bold"
              rowSpan="1"
            >
              YA
            </td>
            <td className="border-2 border-solid border-black text-center w-16 font-bold">
              TIDAK
            </td>
          </tr>
          <tr>
            <td
              className="border-2 border-solid border-black text-center font-bold"
              rowSpan="9"
            >
              1
            </td>
          </tr>

          <tr>
            <td
              className="border-2 border-solid border-black text-start font-bold"
              colSpan={4}
            >
              Penampilan
            </td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              a. Mata Merah, Berkaca - kaca atau berair
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              b. Muka Merah
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              c. Tampak Ngantuk (sering menguap)
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              d. Pandangan Kosong (fokus)
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              e. Tampak linglung/bingung
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              f. Badan tremor atau berkedut
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              g. Pakaian acak - acakan
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>

          <tr>
            <td
              className="border-2 border-solid border-black text-center font-bold"
              rowSpan="7"
            >
              2
            </td>
          </tr>

          <tr>
            <td
              className="border-2 border-solid font-bold border-black text-start"
              colSpan={4}
            >
              Perilaku
            </td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              a. Jalan Sempoyongan/bergoyang
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">b. Gelisah</td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              c. Kesulitan mengingat (konsentrasi)
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              d. Agresif, mencari perkara
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black w-64 ">
              e. Cara bicara tidak jelas, seperti orang tidak sadar benar
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td
              className="border-2 border-solid border-black text-center font-bold"
              rowSpan="3"
            >
              3
            </td>
          </tr>

          <tr>
            <td
              className="border-2 border-solid font-bold border-black text-start"
              colSpan={4}
            >
              Lain -Lain
            </td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              Apakah anda sedang minum obat (baik obat resep ataupun obat bebas)
              yang dapat mempengaruhi kemampuan mengemudi/menimbulkan rasa
              mengantuk
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td
              className="border-2 border-solid border-black font-bold text-center"
              rowSpan={3}
            >
              4
            </td>
            <td className="border-2 border-solid border-black font-bold">
              Konsumsi Alkohol
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              a. Konsumsi Alkohol dalam 24 jam terakhir
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black ">
              b. Bau alkohol (minuman keras)
            </td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
            <td className="border-2 border-solid border-black "></td>
          </tr>
          <tr>
            <td className="border-2 border-solid border-black text-center font-bold">
              5
            </td>
            <td className="border-2 border-solid border-black font-bold">
              Durasi Tidur (pada malam sebelumnya)
            </td>
            <td
              className="border-2 border-solid border-black "
              colSpan={2}
            ></td>
            <td
              className="border-2 border-solid border-black font-bold"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Durasi Istirahat sebelumnya : <span>(Min. 11 Jam)</span>
            </td>
          </tr>
         
          <tr className="border-2 border-black  border-solid font-bold">
            
            <td
              style={{
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderLeftStyle: "solid",
                borderRightStyle: "solid",
              }}
              colSpan="12"
            >
              <p
                className="s1"
                style={{
                  paddingTop: "8pt",
                  paddingLeft: "2pt",
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                Tanda Vital:
              </p>
              <p
                className="s1"
                style={{
                  paddingTop: "1pt",
                  paddingLeft: "2pt",
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                Tekanan Darah
              </p>
              <p
                className="s1"
                style={{
                  paddingTop: "1pt",
                  paddingLeft: "2pt",
                  paddingRight: "384pt",
                  textIndent: "0pt",
                  lineHeight: "109%",
                  textAlign: "left",
                }}
              >
                Sistolik:<u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </u>mmHg ,
                Diastolik:<u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </u>
                mmHg 
              </p>
              <p
                className="s1"
                style={{
                  paddingLeft: "2pt",
                  paddingRight: "537pt",
                  textIndent: "0pt",
                  lineHeight: "109%",
                  textAlign: "left",
                }}
              >
                Standar Sistolik 100 - 130 mmHg
              </p>
              <p
                className="s1"
                style={{
                  paddingLeft: "2pt",
                  paddingRight: "537pt",
                  textIndent: "0pt",
                  lineHeight: "109%",
                  textAlign: "left",
                }}
              >
                Standar Diastolik 60 - 80 mmHg
              </p>
              <p
                className="s1"
                style={{
                  paddingLeft: "2pt",
                  paddingRight: "537pt",
                  textIndent: "0pt",
                  lineHeight: "109%",
                  textAlign: "left",
                }}
              >
                Suhu Badan:<u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </u>
              </p>
              <p
                className="s1"
                style={{
                  paddingLeft: "2pt",
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                Briefing JMP:{" "}
                <span class="s4">
                  <input type="checkbox" />
                  sudah{" "}
                </span>
                <span class="s5">
                  <input type="checkbox" />
                  Belum
                </span>
              </p>
              <p className="text-sm font-bold text-center mt-3 ">
                Catatan: Selama masa Pandemik Covid-19 periksa jika ada gejala
                batuk, flu, demam, anosmia (gangguan penciuman dan pengecapan)
              </p>
              <p className="bg-black border-solid mx-10 mt-5">
                <th />
              </p>
              <p className="bg-black border-solid mx-10 mt-5">
                <th />
              </p>
              <p className="bg-black border-solid mx-10 mt-5">
                <th />
              </p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                style={{
                  paddingLeft: "35pt",
                  textIndent: "0pt",
                  lineHeight: "1pt",
                  textAlign: "left",
                }}
              />
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                style={{
                  paddingLeft: "35pt",
                  textIndent: "0pt",
                  lineHeight: "1pt",
                  textAlign: "left",
                }}
              />
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                style={{
                  paddingLeft: "35pt",
                  textIndent: "0pt",
                  lineHeight: "1pt",
                  textAlign: "left",
                }}
              />
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                className="s2 text-sm font-semibold"
                style={{
                  paddingLeft: "1pt",
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                Berdasarkan hasil pemeriksaan yang telah dilakukan, maka pada
                saat ini yang bersangkutan dinyatakan:
              </p>
              <tr className="">
                <td className="border-2 border-l-0 ml-4 border-solid border-black w-14 h-6"></td>
                <td className=" w-96 ml-96 text-xs">Laik bertugas mengemudi</td>
              </tr>
              <tr className="">
                <td className="border-2  border-l-0 ml-4 border-solid border-black w-14 h-6"></td>
                <td className=" w-96 text-xs ">
                  Laik bertugas mengemudi dengan catatan sebagai berikut :
                </td>
              </tr>
              <tr className="">
                <td className="border-2 border-l-0 ml-4 border-solid border-black w-14 h-6"></td>
                <td className=" w-96 ml-96 text-xs">
                  Tidak laik bertugas mengemudi
                </td>
              </tr>
              <div className=" flex ml-40">
                <p className=" border-solid flex justify-end mt-5 w-60 bg-black ml-96 ">
                  <th />
                </p>
              </div>
              <div className=" flex ml-32">
                <div className=" border-solid flex justify-end w-60 k ml-96 mb-7">
                  (Tandatangan Pemeriksa)
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>{/* Add more rows with data as needed */}</tbody>
      </table>
     
    </div>
  );
}

export default Print_FR_KLI_PR;
