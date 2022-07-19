import React from 'react';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import PriceCard from '../components/price-card';
import { pageContext } from '../contexts/page-context';

export default function PricingPage() {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout
        page='services'
        title='อัตราค่าบริการ'
        description='อัตราค่าบริการ จดทะเบียนธุรกิจ จัดทำบัญชี ตรวจสอบบัญชี จดเปลี่ยนแปลงกรมพัฒนาธุรกิจฯ จดเลิกกิจการและชำระบัญชี ขึ้นทะเบียนประกันสังคม'
        url='/pricing'>
        <Grid header='โปรโมชั่น' cols={3}>
          <Card image='../images/registration.png' header='จดทะเบียนธุรกิจ'>
            12,000 บาท
            <br />
            ฟรีทำบัญชีเดือนแรก
            <br />
            ลด 20% เดือนที่สอง
          </Card>
          <Card image='../images/accounting.png' header='จัดทำบัญชี'>
            2,500 บาท/เดือน
            <br />
            ฟรีเดือนแรก
            <br />
            ลด 10% เดือนที่สอง
          </Card>
          <Card image='../images/audit.png' header='ตรวจสอบบัญชี'>
            5,000 บาท
            <br />
            งบเปล่าไม่ดำเนินการ
          </Card>
        </Grid>
        <Grid header='อัตราค่าบริการ' cols={3}>
          <PriceCard index={1} header='จดทะเบียนธุรกิจ' price='14,000'>
            บริการจดทะเบียนจัดตั้งบริคณห์สนธิและจดตั้งบริษัท
            <br />
            <span className='text-red-700'>รวมค่าธรรมเนียมทุกประเภท</span>
          </PriceCard>
          <PriceCard index={2} header='จดทะเบียนตั้งห้างหุ้นส่วนฯ' price='6,500'>
            บริการจองชื่อนิติบุคคล
            <br />
            บริการจัดเตรียมแบบฟอร์มจดทะเบียน
            <br />
            บริการจดทะเบียนจัดตั้งห้างฯ
            <br />
            <span className='text-red-700'>รวมค่าธรรมเนียมทุกประเภท</span>
          </PriceCard>
          <PriceCard index={3} header='จดเปลี่ยนแปลงกรมพัฒนาธุรกิจฯ' price='3,500'>
            จดเปลี่ยนแปลงที่อยู่, แก้ไขกรรมการเข้าออก, เปลี่ยนแปลงอำนาจกรรมการ, วัตถุประสงค์, รายชื่อผู้ถือหุ้น,
            เพิ่มทุน
            <br />
            <span className='text-red-700'>ไม่รวมค่าธรรมเนียม</span>
          </PriceCard>
          <PriceCard index={4} header='จดทะเบียนพาณิชย์ จดทะเบียนร้านค้า คณะบุคคล' price='3,000'></PriceCard>
          <PriceCard index={5} header='ขอมีเลขผู้เสียภาษีอากรและจดภาษีมูลค่าเพิ่มที่สรรพากร' price='3,000'></PriceCard>
          <PriceCard index={6} header='ขึ้นทะเบียนประกันสังคม' price='3,000'></PriceCard>
          <PriceCard index={7} header='จดเปลี่ยนแปลงสรรพากร' price='3,500'>
            แจ้งเปลี่ยนชื่อ,ที่อยู่สถานประกอบการ, เพิ่ม(ลด)สาขา, เปลี่ยนประเภทการประกอบกิจการ ฯลฯ
          </PriceCard>
          <PriceCard index={8} header='จดเลิกกิจการและชำระบัญชี' price='15,000'>
            <span className='text-red-700'>รวมค่าธรรมเนียมทุกประเภทและค่าลงหนังสือพิมพ์</span>
          </PriceCard>
          <PriceCard index={9} header='ขอเลขประจำตัวผู้เสียภาษีคณะบุคคล' price='3,000'>
            <span className='text-red-700'>รวมค่าธรรมเนียมทุกประเภท</span>
          </PriceCard>
        </Grid>
      </Layout>
    </pageContext.Provider>
  );
}
