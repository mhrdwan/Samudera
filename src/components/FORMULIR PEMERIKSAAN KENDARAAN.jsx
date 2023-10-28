import { Button, Col, Form, Input, Row, Select } from 'antd'
import React from 'react'

function FORMULIRPEMERIKSAANKENDARAAN() {
    return (
        <>
            <Form className='w-full min-h-screen '>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center  w-full font-bold'>FORMULIR PEMERIKSAAN KENDARAAN</div>
                    <button className='py-2 font-semibold px-5 rounded-md bg-blue-500 text-white hover:text-white hover:shadow-4 shadow-lg'>Print</button>
                </div>

                <Row className='mt-5'>
                    <Col>
                        <Form.Item
                            className='ms-3'
                            label="NO. MOBIL"
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}

                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            className='ms-3'
                            label="KILOMETER "
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}

                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            className='ms-3'
                            label="DRIVER"
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}

                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            className='ms-3'
                            label="JENIS MOBIL "
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}

                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <div className='flex justify-center font-bold'>A. MESIN
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Oli Mesin*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Air Radiator*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Fan Belt
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Fuel Filter
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Oil Filter
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Saringan Udara
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Minyak Power Stering*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Minyak Kopling*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>B. HEAD
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kaca Depan dan Kaca Spion
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Wiper
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Regulator Kaca Jendela

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Seatbelt 3 Titik Retractable*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Jok
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Handle & Kunci Pintu
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Panel Dashboard

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kebersihan dan Kerapihan Kabin

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Klakson*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Alarm Mundur*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ganjal Ban, Dongkrak, Kunci Roda*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kontainer Penyimpanan

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Rem*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Accu*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Perisai Kolong Head
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Utama*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Sein*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Standby / DRL*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Rem*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Baut Roda Head*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban Head*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Stiker Reflektor Head*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>C. CHASIS
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Mundur*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Rem*

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Baut Roda Chasis*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ban Cadangan*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Twist Lock*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Perisai Kolong Chasis*
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>D. PERLENGKAPAN KESELAMATAN
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Helm Safety
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Rompi Reflektor / Seragam Lapangan
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div> Sepatu Safety
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kacamata Safety
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Spill Kit (Pasir / Serbuk Kayu)
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Sarung Tangan Karet
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Sekop

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ember Penampung
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Plastik Limbah B3
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kerucut Pengaman Bereflektor
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Segi Tiga Pengaman
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>APAR
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>P3K
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Senter
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>E. DOKUMEN</div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Buku KIR Head

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Buku KIR Casis
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>STNK
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Uji Emisi
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>SIM
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>ID Card Pelabuhan
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>RHM / JMP Update Terbaru

                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Induksi
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pastikan Area Muat/Bongkar Aman</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Hand Rem</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Matikan Mesin</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Cabut Kunci & Beri Kunci ke Petugas</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pasang Ganjal Ban</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pasang Safety Cone</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Twist Lock</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Seal / Gembok</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Tetesan Oli / Kebocoran</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Susunan Barang</div>
                    </Col>
                    <Col sm={4}>
                        <Select style={{ width: "50%" }} placeholder="Oke Atau Tidak">
                            <option value={0}>Baik</option>
                            <option value={1}>Tidak</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                </Row>

            </Form>
        </>
    )
}

export default FORMULIRPEMERIKSAANKENDARAAN