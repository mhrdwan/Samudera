import { Col, Row, Select, Table } from 'antd';
import React from 'react'

function HistoryPDF() {
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div>
      <div className='select-atas mt-10'>
        <Row>
          <Col md={6}>
            {/* <p>Cari History PDF</p> */}
            <Select placeholder={"Cari History PDF"} style={{ width: "100%" }} />
          </Col>
        </Row>
      </div>
      <Table className='mt-6' dataSource={""} columns={columns} />
    </div>
  )
}

export default HistoryPDF