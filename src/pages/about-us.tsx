import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

const img1 = (
  <StaticImage
    src='../images/cer-bangphli.jpg'
    alt='ใบรับรองสภาวิชาชีพบัญชี เอเอฟ การบัญชี'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img2 = (
  <StaticImage
    src='../images/cer-latkrabang.jpg'
    alt='ใบรับรองสภาวิชาชีพบัญชี เอ็มทู ออล'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img3 = (
  <StaticImage
    src='../images/cer-saimai.jpg'
    alt='ใบรับรองสภาวิชาชีพบัญชี บานาน่า ลีฟ คอนซัลแทนท์'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const scopes = [
  {
    h: 'วางระบบบัญชี',
    t: 'ออกแบบ จัดวาง และประเมินระบบบัญชีและการควบคุมภายในตามมาตรฐานการบัญชีและหลักการบัญชีที่รับรองทั่วไป รวมถึงการระบุปัญหาและกำหนดกลยุทธ์ในการแก้ปัญหาทางบัญชี เพื่อให้องค์กรสามารถดำเนินงานได้อย่างมีประสิทธิภาพ',
  },
  {
    h: 'จัดทำสมุดบัญชี',
    t: 'บันทึกและจำแนก รายได้และค่าใช้จ่ายต่าง ๆ ตลอดจนการจัดทำและปรับปรุงรายงานทางการเงินที่สำคัญต่าง ๆ',
  },
  {
    h: 'จัดการดูแลวางแผนภาษีและการคืนภาษี',
    t: 'เพื่อให้มั่นใจได้ว่าจะมีการชำระภาษีได้อย่างถูกต้องและมีประสิทธิภาพ',
  },
  {
    h: 'ตรวจสอบความถูกต้อง',
    t: 'ของเครื่องมือทางการเงินต่าง ๆ เพื่อให้เป็นไปตามกฏระเบียบข้อบังคับของหน่วยงานราชการต่าง ๆ',
  },
  {
    h: 'ให้คำปรึกษาทางธุรกิจ',
    t: 'ช่วยให้คำแนะนำองค์กรของท่านในการลดต้นทุน เพิ่มรายได้และผลกำไร',
  },
  {
    h: 'การตรวจสอบบัญชี',
    t: 'ทำการค้นหาและระบุความผิดปกติ ความคลาดเคลื่อนต่าง ๆ ในระบบบัญชี',
  },
  {
    t: 'ปรับสมุดบัญชีต่าง ๆ ให้เป็นปัจจุบัน',
  },
  {
    t: 'ทำงานและประสานงานร่วมกับผู้ตรวจสอบบัญชีจากภายนอก',
  },
  {
    t: 'บันทึกการชำระเงินและการเบิกจ่ายต่าง ๆ',
  },
];

export default function AboutUsPage() {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout
        page='about-us'
        title='เกี่ยวกับเรา'
        description='เรา คือ ทีมงานมืออาชีพทางบัญชี เราช่วยวางระบบบัญชี จัดทำรายการทางบัญชี และการวางแผนภาษีอากร มีใบประกอบวิชาชีพรับอนุญาตตามที่กฎหมายกำหนด'
        url='/about-us'>
        <div className='w-full py-8 px-6'>
          <div className='mx-auto max-w-screen-xl flex flex-col'>
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1'>
                <h1 className='text-black text-opacity-90'>เกี่ยวกับเรา</h1>
                <div className='mt-8 text-black text-opacity-70'>
                  เรา คือ ทีมงานมืออาชีพทางบัญชี เราช่วยวางระบบบัญชี จัดทำรายการทางบัญชี และการวางแผนภาษีอากร
                  มีใบประกอบวิชาชีพรับอนุญาตตามที่กฎหมายกำหนด ดังนั้น ท่านจึงสามารถไว้วางใจ
                  ในคุณภาพของบริการที่เรามีให้กับท่าน ไม่ว่าจะเป็นกิจการผลิตสินค้าเพื่อขาย กิจการซื้อมา-ขายไป
                  กิจการขนส่ง กิจการรับเหมาก่อสร้าง กิจการห้างทอง กิจการร้านขายยา กิจการประเภทบริการทุกประเภท
                  ทั้งขนาดเล็ก กลาง ใหญ่ เราสามารถให้บริการได้ ตั้งแต่การจดทะเบียนเริ่มต้นกิจการ การวางระบบบัญชี
                  การทำบัญชี การตรวจสอบบัญชี ให้คำปรึกษาทางธุรกิจ การวางแผนภาษีอากร พร้อมจัดการเรื่องภาษีอากร
                  อันยุ่งยากให้กับท่านได้ทั้งหมด
                </div>
                <Button to='/contact-us' text='ติดต่อเรา' className='my-8' />
                <h1 className='text-black text-opacity-90 my-8'>เราทำอะไร?</h1>
                <ul>
                  {scopes.map((s) => (
                    <li className='border-l-green-600 border-l-4 shadow-md p-4 w-full mb-4'>
                      {s.h && <span className='text-green-600'>{s.h}</span>}
                      {s.t && <span className='text-black text-opacity-70'>{s.h ? ` ${s.t}` : s.t}</span>}
                    </li>
                  ))}
                </ul>
                <Button to='/services' text='บริการของเรา' className='my-8' />
              </div>
              <div className='flex flex-col md:ml-8 my-2 md:my-0'>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img1}</div>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img2}</div>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img3}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </pageContext.Provider>
  );
}
