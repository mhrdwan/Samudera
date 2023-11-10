import React from 'react'
import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd'
import { useNavigate } from 'react-router-dom'

function FORMSPOTCHECK() {
    const pindah = useNavigate()
    function pindahhalaman() {
        pindah("/Print_FR_SPOT_CHECK")
    }

    return (
        <div className='  w-full overflow-hidden min-h-screen '>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center  w-full font-bold'>FORM SPOT CHECK</div>
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                />
                <label htmlFor="fileInput" className='py-2 font-semibold px-5 w-32 rounded-md mr-5 bg-red-500 text-white hover:text-white hover:shadow-4 shadow-lg cursor-pointer text-center'>
                    Upload File
                </label>
                <button className='py-2 font-semibold px-5 rounded-md mr-5 bg-blue-500 text-white hover:text-white hover:shadow-4 shadow-lg' onClick={pindahhalaman}>Print</button>
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
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>
                            Input Nomor Surat</div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        {/* <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col> */}
                        <Col>
                            <Input style={{width :"100%"}} placeholder='Input' />
                        </Col>
                    </div>

                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa SIM B II Umum, STNK, KIR yang masih valid dan
                            sesuai</div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>

                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col md={10} className='ms-3 '>
                        <div>Membawa JMP Terbaru</div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4} className=''>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengisi Trip Plan</div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Melakukan Fit to Work Test</div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mendapat Briefing JMP
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Melakukan Pemeriksaan Kendaraan Sebelum Berangkat
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa Surat Jalan / DN / Packing List
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pemahaman terkait proses delivery (LSR, JMP, DWH, dll)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Jam Istirahat dan DWH sesuai standard
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban & Baut Ban
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Lampu - lampu
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi APAR Baik dan Tidak Kadaluarsa
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi P3K Lengkap dan Tidak Kadaluarsa
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Spill Kit Lengkap
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Seatbelt Berfungsi Dengan Baik
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>B. PENGECEKAN AREA LOADING / UNLOADING
                </div>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memarkirkan Kendaraan di Area yang Aman
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengaktifkan Handbrake / Rem Tangan

                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mematikan Mesin
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mencabut Kunci
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memasang Ganjal Ban
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Memasang Kerucut / Safety Cone
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Twislock Terkunci
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Seal
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak terdapat Ceceran / Rembesan Oli (B3)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan APD yang di Persyaratkan
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak merokok diluar smoking area
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>C. SAAT DI PERJALANAN
                </div>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan Seat Belt Tiga Titik Retractable
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak Menggunakan Alat Komunikasi
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menyalakan Lampu DRL
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak Mengangkut Penumpang yang Tidak Berkepentingan
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak melebihi batas kecepatan (sesuai jalan yang dilewati)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Tidak merokok di dalam kabin
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mengikuti rute sesuai dengan JMP
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Menggunakan APD (min. safety shoes & rompi reflektor)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>D. TRANSPORT DANGEROUS (B3)
                </div>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kendaraan terpasang Simbol B3
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen Izin Angkutan B3 (Kemenhub)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen MSDS
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa APD (sesuai dengan MSDS)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa Peralatan & Kelengkapan tanggap darurat (sesuai
                            MSDS)
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa dokumen Kartu Pengawas
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
                <Row gutter={[16, 16]} className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Membawa SOP Bongkar Muat B3
                        </div>
                    </Col>
                    <div className='md:grid grid grid-cols-2'>
                        <Col sm={4}>
                            <Select placeholder="Oke Atau Tidak">
                                <option value={0}>OKE</option>
                                <option value={1}>NOT OKE</option>
                            </Select>
                        </Col>
                        <Col>
                            <Input placeholder='Komentar' />
                        </Col>
                    </div>
                </Row>
            </Form >
        </div>
    )
}

export default FORMSPOTCHECK