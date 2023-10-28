import React from 'react'
import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd'
import { useNavigate } from 'react-router-dom'

function FORMSPOTCHECK() {
    const pindah = useNavigate()
    function pindahhalaman() {
        pindah("/Print_FR_KLI_PR")
    }
    return (
        <div className='  w-full min-h-screen mb-10'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center  w-full font-bold'>FORM SPOT CHECK</div>
                <button className='py-2 font-semibold px-5 rounded-md bg-blue-500 text-white hover:text-white hover:shadow-4 shadow-lg' onClick={pindahhalaman}>Print</button>
            </div>
            <Form>
                <Row className='mt-8'>
                    <Col sm={4} className='ms-3'>
                        <Form.Item
                            label="Nama Pengemudi"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={4} className='ms-3'>
                        <Form.Item
                            label="Tipe Kendaraaan"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={4} className='ms-3'>
                        <Form.Item
                            label="Nopol Kendaraan"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={4} className='ms-3'>
                        <Form.Item
                            label="Rute"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={4} className='ms-3'>
                        <Form.Item
                            label="Hari Tanggal"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>
                <div className='flex justify-center font-bold'>A. PENGECEKAN UMUM
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa SIM B II Umum, STNK, KIR yang masih valid dan
                            sesuai</div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa JMP Terbaru</div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengisi Trip Plan</div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Melakukan Fit to Work Test</div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mendapat Briefing JMP
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Melakukan Pemeriksaan Kendaraan Sebelum Berangkat
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa Surat Jalan / DN / Packing List
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pemahaman terkait proses delivery (LSR, JMP, DWH, dll)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Jam Istirahat dan DWH sesuai standard
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban & Baut Ban
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Lampu - lampu
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi APAR Baik dan Tidak Kadaluarsa
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi P3K Lengkap dan Tidak Kadaluarsa
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Spill Kit Lengkap
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Seatbelt Berfungsi Dengan Baik
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>B. PENGECEKAN AREA LOADING / UNLOADING
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memarkirkan Kendaraan di Area yang Aman
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengaktifkan Handbrake / Rem Tangan

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mematikan Mesin
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mencabut Kunci
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memasang Ganjal Ban
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memasang Kerucut / Safety Cone
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Twislock Terkunci
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Seal
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak terdapat Ceceran / Rembesan Oli (B3)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan APD yang di Persyaratkan
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak merokok diluar smoking area
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>C. SAAT DI PERJALANAN
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan Seat Belt Tiga Titik Retractable
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak Menggunakan Alat Komunikasi
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menyalakan Lampu DRL
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak Mengangkut Penumpang yang Tidak Berkepentingan
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak melebihi batas kecepatan (sesuai jalan yang dilewati)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak merokok di dalam kabin
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengikuti rute sesuai dengan JMP
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan APD (min. safety shoes & rompi reflektor)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>D. TRANSPORT DANGEROUS (B3)
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kendaraan terpasang Simbol B3
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen Izin Angkutan B3 (Kemenhub)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen MSDS
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa APD (sesuai dengan MSDS)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa Peralatan & Kelengkapan tanggap darurat (sesuai
                            MSDS)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen Kartu Pengawas
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa SOP Bongkar Muat B3
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='Komentar' />
                    </Col>
                </Row>
            </Form >
        </div>
    )
}

export default FORMSPOTCHECK