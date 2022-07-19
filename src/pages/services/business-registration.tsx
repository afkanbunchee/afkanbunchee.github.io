import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const services = [
  {
    h: 'จดทะเบียนบริษัทจำกัด, ห้างหุ้นส่วนจำกัด, จดทะเบียนคณะบุคคล, จดทะเบียนห้างร้านต่าง ๆ',
  },
  {
    h: 'จดทะเบียนแก้ไขเปลี่ยนแปลง',
    t: 'เช่น แก้ไขเปลี่ยนแปลงกรรมการ, เปลี่ยนที่ตั้งสำนักงาน, เพิ่มทุน/ลดทุน ฯลฯ',
  },
  {
    h: 'จดทะเบียนเลิก',
    t: 'ทั้งห้างหุ้นส่วนหรือเลิกบริษัท และชำระบัญชี',
  },
  {
    h: 'ขอเลขประจำตัวผู้เสียภาษีอากร',
    t: 'ของคณะบุคคลหรือนิติบุคคล',
  },
  {
    h: 'จดทะเบียนเข้าระบบภาษีมูลค่าเพิ่ม ภาษีธุรกิจเฉพาะ',
    t: 'และดำเนินการขอ User ID, Password เพื่อยื่นแบบทางอินเทอร์เน็ต ฯลฯ',
  },
  {
    h: 'แจ้งการเปลี่ยนแปลงภาษีต่าง ๆ ต่อกรมสรรพากร',
    t: 'เช่น แจ้งย้ายเข้า-ออก, ย้ายที่อยู่, แจ้งเปลี่ยนชื่อ หรือ เปลี่ยนลักษณะการประกอบธุรกิจ ฯลฯ',
  },
  {
    h: 'ขึ้นทะเบียนประกันสังคม',
    t: 'นายจ้าง, ลูกจ้าง, แจ้งการเปลี่ยนแปลงต่าง ๆ ต่อ สนง.ประกันสังคม, ยื่นเรื่องขอ Username Password เพื่อดำเนินการต่าง ๆ กับสำนักงานประกันสังคม ฯลฯ',
  },
  {
    h: 'จดทะเบียนเครื่องหมายการค้า',
  },
];

export default function BusinessRegistrationServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <ServiceLayout
        title={data.servicesThJson.name}
        subtitle={data.servicesThJson.description}
        url={data.servicesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี เราเข้าใจดีว่าเวลาของท่านมีค่ามากขนาดไหน เรายินดีให้บริการงานจดทะเบียนนิติบุคคลแก่ท่าน
            ด้วยความเป็นมืออาชีพ เข้าใจในรายละเอียด และขั้นตอนการดำเนินงานและกฎหมายที่เกี่ยวข้องเป็นอย่างดี
            เรายินดีเสนองานบริการ การจดทะเบียนนิติบุคคล ที่จะทำให้คุณประหยัดทั้งเวลาและค่าใช้จ่าย ด้วยงานที่มีคุณภาพ
            เสร็จทันเวลาที่กำหนด ด้วยขั้นตอนที่เป็นระบบ
          </div>
          <CheckList header='บริการจดทะเบียน' list={services} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query BusinessRegistrationServiceThQuery {
    servicesThJson(link: { eq: "/services/business-registration" }) {
      name
      description
      link
    }
  }
`;
