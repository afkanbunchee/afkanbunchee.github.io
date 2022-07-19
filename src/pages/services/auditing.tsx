import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const scopes = [
  { h: 'บริการรับตรวจสอบบัญชี โดยผู้สอบบัญชีรับอนุญาตสำหรับบริษัทและห้างหุ้นส่วนขนาดใหญ่ (CPA)' },
  { h: 'บริการรับตรวจสอบบัญชี โดยผู้สอบบัญชีภาษีอากร สำหรับห้างหุ้นส่วนขนาดเล็ก (TA)' },
  { h: 'ตรวจสอบบัญชี-งบการเงิน', t: 'โดยทีมงานผู้สอบบัญชีรับอนุญาตที่ได้มาตรฐาน' },
  {
    h: 'เสนอข้อสังเกตต่อผู้บริหาร',
    t: 'เพื่อให้ทราบถึงข้อบกพร่องในการควบคุมภายในทางบัญชีที่สำคัญ ซึ่งได้พบในระหว่างปฏิบัติงานตรวจสอบบัญชี',
  },
  {
    h: 'บริการยื่นงบการเงินพร้อมจัดเตรียมรายละเอียดประกอบการยื่นงบการเงิน นำส่งกระทรวงพาณิชย์',
    t: 'ได้แก่ แบบนำส่งงบการเงิน (ส.บช.3), สำเนารายชื่อผู้ถือหุ้น (บอจ.5)',
  },
];

export default function AuditingServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <ServiceLayout
        title={data.servicesThJson.name}
        subtitle={data.servicesThJson.description}
        url={data.servicesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี มีความภูมิใจที่จะได้ร่วมงานกับท่านในการบริการที่มากกว่าการตรวจสอบบัญชี
            ซึ่งนอกจากการตรวจสอบและการประเมินต่าง ๆ แล้ว
            เรายังมีการนำเสนอแนวทางการจัดการและการแก้ไขปัญหาไปยังท่านผู้ประกอบการ
            ซึ่งจะช่วยให้ท่านได้มองเห็นศักยภาพและโอกาสที่จะพัฒนาทางธุรกิจ ผ่านข้อมูลต่าง ๆ
            ที่เป็นตัวขับเคลื่อนธุรกิจและการเงินของท่าน
          </div>
          <CheckList header='บริการปิดบัญชีรายปีพร้อมตรวจสอบ' list={scopes} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query AuditingServiceThQuery {
    servicesThJson(link: { eq: "/services/auditing" }) {
      name
      description
      link
    }
  }
`;
