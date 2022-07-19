import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/button';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import TwoColumn from '../components/two-column';
import { pageContext } from '../contexts/page-context';

const img1 = (
  <StaticImage
    src='../images/whoweare.png'
    alt='เราเป็นใคร?'
    width={720}
    height={523}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img2 = (
  <StaticImage
    src='../images/problems.png'
    alt='ไม่รู้จะจัดการปัญหาได้อย่างไร'
    width={720}
    height={480}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const problems = [
  'ต้องการเริ่มต้นธุรกิจ แต่ไม่รู้จะเริ่มอย่างไร',
  'บัญชีที่ทำอยู่ ไม่ถูกต้องตามมาตรฐานที่กฎหมายกำหนด เป็นเหตุให้ถูกเรียกตรวจและเสียเบี้ยปรับ',
  'ขาดคนทำบัญชี',
  'บัญชีที่ทำอยู่ไม่สามารถนำมาใช้ในการบริหารงานและวางแผนธุรกิจได้',
  'ขาดการวางแผนภาษี ทำให้เสียภาษีไม่ถูกต้องและเหมาะสม ต้องรับภาระภาษีโดยไม่จำเป็น',
  'พบปัญหาในการติดต่อหน่วยงานราชการ เช่น กรมสรรพากร,สนง.ประกันสังคม,กรมสวัสดิการคุ้มครองแรงงานฯ',
  'หมดเวลาไปกับการทำบัญชี ไม่มีเวลาเหลือไปบริหารงานด้านอื่นของกิจการ',
  'ต้องแบกภาระค่าใช้จ่ายจ้างพนักงานบัญชีประจำ ซึ่งจะมีค่าใช้จ่ายตามมาอีกมากมาย เช่น ค่าใช้จ่ายสรรหาบุคคลใหม่,สวัสดิการพนักงาน และพนักงานเข้า-ออกบ่อย',
];

export default function IndexPage() {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout
        page='home'
        title='วางระบบบัญชี ออกรายงานทางการเงิน วางแผนภาษีอากร'
        description='เอเอฟ การบัญชี คือ ทีมงานมืออาชีพทางบัญชี วางระบบบัญชี จัดทำรายการทางบัญชี และการวางแผนภาษีอากร มีใบประกอบวิชาชีพรับอนุญาตตามที่กฎหมายกำหนด'
        url='/'>
        <TwoColumn img={img1}>
          <h1 className='text-black text-opacity-90 leading-normal'>เราเป็นใคร?</h1>
          <div className='mt-2 mb-6 text-black text-opacity-70'>
            เรา คือ ทีมงานมืออาชีพทางบัญชี เราช่วยวางระบบบัญชี จัดทำรายการทางบัญชี และการวางแผนภาษีอากร
            มีใบประกอบวิชาชีพรับอนุญาตตามที่กฎหมายกำหนด ดังนั้น ท่านจึงสามารถไว้วางใจ
            ในคุณภาพของบริการที่เรามีให้กับท่าน ไม่ว่าจะเป็นกิจการผลิตสินค้าเพื่อขาย กิจการซื้อมา-ขายไป กิจการขนส่ง
            กิจการรับเหมาก่อสร้าง กิจการห้างทอง กิจการร้านขายยา กิจการประเภทบริการทุกประเภท ทั้งขนาดเล็ก กลาง ใหญ่
            เราสามารถให้บริการได้ ตั้งแต่การจดทะเบียนเริ่มต้นกิจการ การวางระบบบัญชี การทำบัญชี การตรวจสอบบัญชี
            ให้คำปรึกษาทางธุรกิจ การวางแผนภาษีอากร พร้อมจัดการเรื่องภาษีอากร อันยุ่งยากให้กับท่านได้ทั้งหมด
            ที่เราที่เดียว
          </div>
          <Button to='/about-us' text='ดูเพิ่มเติม' wrapped />
        </TwoColumn>
        <Grid header='โปรโมชั่น' cols={3} link='/services' linkName='ดูบริการทั้งหมด'>
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
        <TwoColumn img={img2}>
          <h1 className='text-black text-opacity-90 leading-normal mb-4'>ปัญหาเหล่านี้จะหมดไป</h1>
          <div className='mt-2 mb-6 text-black text-opacity-70 flex flex-col'>
            {problems.map((p) => (
              <div className='border-l-green-600 border-l-4 shadow-md p-4 w-full mb-4'>{p}</div>
            ))}
          </div>
        </TwoColumn>
      </Layout>
    </pageContext.Provider>
  );
}
