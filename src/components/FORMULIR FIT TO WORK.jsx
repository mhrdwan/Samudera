import React from 'react'
import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd'
import { useNavigate } from 'react-router-dom'

function FORMULIRFITTOWORK() {
    const pindah = useNavigate()
    function pindahhalaman() {
        pindah("/Print_FR_KLI_PR")
    }
    return (
        <div className='w-full min-h-screen '>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center  w-full font-bold'>FORMULIR FIT TO WORK</div>
                <button className='py-2 font-semibold px-5 rounded-md bg-blue-500 text-white hover:text-white hover:shadow-4 shadow-lg'  onClick={pindahhalaman}>Print</button>
            </div>
            <Form>
                <Row className='mt-8'>
                    <Col className='ms-3'>
                        <Form.Item
                            label="Nama Driver"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='ms-3'>
                        <Form.Item
                            label="Tanggal Pemeriksaan"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='ms-3'>
                        <Form.Item
                            label="Jam Pemeriksaan"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className='ms-3'>
                        <Form.Item
                            label="Petugas Pemeriksa"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>


                </Row>
                <div className='flex justify-center font-bold'>Item Pemeriksaan
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Mata Merah, Berkaca - kaca atau berair</div>
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
                        <div> Muka Merah</div>
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
                        <div>Tampak Ngantuk (sering menguap)</div>
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
                        <div>Pandangan Kosong (fokus)</div>
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
                        <div>Tampak linglung/bingung
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
                        <div>Badan tremor atau berkedut
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
                        <div>Pakaian acak - acakan
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
                <div className='flex justify-center font-bold mt-5'>Perilaku
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Jalan Sempoyongan/bergoyang
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
                        <div>Gelisah

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
                        <div>Kesulitan mengingat (konsentrasi)
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
                        <div>Agresif, mencari perkara
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
                        <div>. Cara bicara tidak jelas, seperti orang tidak sadar
                            benar
                        </div>
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>Lain -Lain
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Apakah anda sedang minum obat (baik obat resep
                            ataupun obat bebas) yang dapat mempengaruhi
                            kemampuan mengemudi/menimbulkan rasa
                            mengantuk
                        </div>
                    </Col>
                </Row>
                <div className='flex justify-center font-bold mt-5'>Konsumsi Alkohol
                </div>
                <Row className='flex items-center mt-5'>
                    <Col sm={10} className='ms-3 '>
                        <div>Konsumsi Alkohol dalam 24 jam terakhir
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
                        <div> Bau alkohol (minuman keras)
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

export default FORMULIRFITTOWORK