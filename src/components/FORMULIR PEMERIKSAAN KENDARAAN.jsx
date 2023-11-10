import { Button, Col, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function FORMULIRPEMERIKSAANKENDARAAN() {
    const pindah = useNavigate()
    function pindahhalaman() {
        pindah("/Print_FR_PK")
    }
    return (
        <>
            <Form className='w-full min-h-screen '>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center  w-full font-bold'>FORMULIR PEMERIKSAAN KENDARAAN</div>
                    <button className='py-2 font-semibold px-5 rounded-md bg-blue-500 text-white hover:text-white hover:shadow-4 shadow-lg' onClick={pindahhalaman}>Print</button>
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
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Air Radiator*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Fan Belt
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Fuel Filter
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Oil Filter
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Saringan Udara
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Minyak Power Stering*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Minyak Kopling*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>B. HEAD
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kaca Depan dan Kaca Spion
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Wiper
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Regulator Kaca Jendela

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Seatbelt 3 Titik Retractable*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Jok
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Handle & Kunci Pintu
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Panel Dashboard

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kebersihan dan Kerapihan Kabin

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Klakson*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Alarm Mundur*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ganjal Ban, Dongkrak, Kunci Roda*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kontainer Penyimpanan

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Rem*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Accu*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Perisai Kolong Head
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Utama*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Sein*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Standby / DRL*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Rem*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Baut Roda Head*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban Head*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Stiker Reflektor Head*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>C. CHASIS
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Mundur*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Lampu Rem*

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kondisi Ban*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Baut Roda Chasis*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ban Cadangan*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Twist Lock*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Perisai Kolong Chasis*
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>D. PERLENGKAPAN KESELAMATAN
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Helm Safety
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Rompi Reflektor / Seragam Lapangan
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div> Sepatu Safety
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kacamata Safety
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Spill Kit (Pasir / Serbuk Kayu)
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Sarung Tangan Karet
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Sekop

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Ember Penampung
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Plastik Limbah B3
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Kerucut Pengaman Bereflektor
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Segi Tiga Pengaman
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>APAR
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>P3K
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Senter
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <div className='flex justify-center font-bold mt-5'>E. DOKUMEN</div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Buku KIR Head

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Buku KIR Casis
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>STNK
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Uji Emisi
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>SIM
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>ID Card Pelabuhan
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>RHM / JMP Update Terbaru

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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Induksi
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
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pastikan Area Muat/Bongkar Aman</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Hand Rem</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Matikan Mesin</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Cabut Kunci & Beri Kunci ke Petugas</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pasang Ganjal Ban</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Pasang Safety Cone</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Twist Lock</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Seal / Gembok</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Tetesan Oli / Kebocoran</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Periksa Susunan Barang</div>
                    </Col>
                   <div className='md:grid grid grid-cols-2'>
                   <Col sm={4}>
                        <Select placeholder="Oke Atau Tidak">
                            <option value={0}>OKE</option>
                            <option value={1}>NOT OKE</option>
                        </Select>
                    </Col>
                    <Col>
                        <Input placeholder='KETERANGAN' />
                    </Col>
                   </div>
                </Row>

            </Form>
        </>
    )
}

export default FORMULIRPEMERIKSAANKENDARAAN