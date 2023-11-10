import { Col, Row, Select, Table } from 'antd';
import React, { useState } from 'react'

function HistoryPDF() {
  const [selectedTableType, setSelectedTableType] = useState();
  const FORMSPOTCHECK = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Nama Penemudi',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Tipe Kendaraaan',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Nopol Kendaraan',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Rute',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Hari Tanggal',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const FORMFITTOWORK = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Nama Driver',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Tanggal Pemeriksaan',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Jam Pemeriksaan',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Petugas Pemeriksa',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const FORMPEMERIKSAANKENDARAAN = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'NO. MOBIL',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'KILOMETER',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'DRIVER',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'JENIS MOBIL',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Oli Mesin',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  
  function PilihTable(e) {
    if (e === 1) {
      return FORMSPOTCHECK;
    } else if (e === 2) {
      return FORMFITTOWORK;
    } else if (e === 3) {
      return FORMPEMERIKSAANKENDARAAN;
    } else {
      return FORMSPOTCHECK; // Default return
    }
  }
  return (
    <div>
      <div className='select-atas mt-10'>
        <Row>
          <Col md={6}>
            {/* <p>Cari History PDF</p> */}
            <Select placeholder={"Cari History PDF"} style={{ width: "100%" }}
              onChange={(e) => setSelectedTableType(e)}>
              <option value={1}>Form Spot Check</option>
              <option value={2}>Form Fit To Work </option>
              <option value={3}>Form Pemeriksaan Kendaraan</option>
            </Select>
          </Col>
        </Row>
      </div>
      <Table className='mt-6' dataSource={""} columns={PilihTable(selectedTableType)} />
    </div>
  )
}

export default HistoryPDF