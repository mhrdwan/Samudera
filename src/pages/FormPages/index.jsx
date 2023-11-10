import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd'
import React from 'react'
import FORMSPOTCHECK from '../../components/FormSpotCheck';

function FormPages() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'FORM SPOT CHECK',
      children: <FORMSPOTCHECK />,
    },
    {
      key: '2',
      label: 'FORM FIT TO WORK',
      // children: <FORMULIRFITTOWORK />
    },
    {
      key: '3',
      label: 'FORM PEMERIKSAAN KENDARAAN',
      // children: <FORMULIRPEMERIKSAANKENDARAAN />,
    },
  ];
  return (
    <div className=' '>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

    </div>
  )
}

export default FormPages



