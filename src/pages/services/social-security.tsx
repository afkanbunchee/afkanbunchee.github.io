import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const fillings = [
  { h: 'บริการจัดเตรียมและนำส่งแบบฟอร์มสำนักงานประกันสังคมต่าง ๆ' },
  { h: 'บริการจัดเตรียมและนำส่งแบบแผนสำหรับการเกษียณต่าง ๆ' },
  { h: 'บริการจัดเตรียมข้อมูลที่จำเป็นสำหรับสื่อสารกับพนักงาน' },
];

const plans = [
  { h: 'การจัดส่งเงินสมทย' },
  { h: 'การจัดเตรียมแบบประกันสังคม ณ สิ้นปี' },
  { h: 'การตรวจสอบการปฏิบัติตามข้อกำหนด' },
  { h: 'ปรังปรุงข้อมูลให้มีความทันสมัย' },
  { h: 'การวางแผนและการประสานงานฝ่ายที่เกี่ยวข้อง' },
  { h: 'การปรับปรุงบันทึกการใช้บริการต่าง ๆ ให้มีความสมบูรณ์และเป็นปัจจุบัน' },
];

const audits = [
  { h: 'แผนประกันพนักงานแบบเดี่ยวและแบบกลุ่ม' },
  { h: 'แผนประกันสุขภาพและสวัสดิการ' },
  { h: 'แผนผลประโยชน์พนักงานทั้งแบบบำเหน็จและบำนาญ' },
];

export default function SocialSecurityServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <ServiceLayout
        title={data.servicesThJson.name}
        subtitle={data.servicesThJson.description}
        url={data.servicesThJson.link}>
        <div className='text-black text-opacity-70'>
          เรามีผู้เชี่ยวชาญในแผนสวัสดิการของพนักงาน ที่พร้อมให้คำปรึกษา ตรวจสอบ และดูแลในการจัดทำแผนฯ
          ทีมของเรามีความเชี่ยวชาญและยินดีที่จะตอบคำถามของท่านในเรื่องแผนการเกษียณและภาษีต่าง ๆ ที่เกี่ยวข้อง
        </div>
        <CheckList header='บริการจัดส่งแบบฟอร์มประกันสังคม' list={fillings} />
        <CheckList header='แผนการเกษียณ' list={plans} />
        <CheckList header='บริการตรวจสอบแผน' list={audits} />
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query SocialSecurityServiceThQuery {
    servicesThJson(link: { eq: "/services/social-security" }) {
      name
      description
    }
  }
`;
