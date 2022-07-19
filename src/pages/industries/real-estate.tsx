import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'การประเมินและจัดโครงสร้างของกลุ่มธุรกิจอสังหาริมทรัพย์' },
  { h: 'วิเคราะห์ทางเลือกทางการเงิน' },
];

const taxes = [
  { h: 'การวางแผนการลดหย่อนภาษี' },
  { h: 'ภาษีจากการซื้อขายอสังหาริมทรัพย์' },
  { h: 'การวางแผนทางการเงินและอสังหาริมทรัพย์สำหรับบุคคล นักลงทุน นักพัฒนา และผู้ชำนาญการต่าง ๆ' },
  { h: 'รับปรึกษาโครงการที่มีปัญหา ประกอบด้วยการยึดทรัพย์ การฟื้นตัว และการปรับโครงสร้างต่าง ๆ' },
  { h: 'วิเคราะห์สัญญาเช่าทั้งฝั่งผู้เช่าและผู้ให้เช่า' },
];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'ตรวจสอบค่าเช่า' },
  { h: 'ตรวจสอบนายหน้า' },
  { h: 'การตรวจสอบความถูกต้องในการบันทึกบัญชีและการทุจริต' },
  { h: 'ตรวจสอบการหมุนลูกหนี้' },
];

export default function RealEstateIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            ไม่ว่าคุณกำลังเผชิญกับสถานการณ์ที่ธุรกิจของคุณไม่ได้เป็นไปตามเป้าหมาย กำลังหาวิธีการคืนกำไรจากลงทุน
            หรือมองหาแหล่งทุนใหม่ ๆ สำหรับโครงการ เรามีทีมงานมืออาชีพที่มีความรู้ในธุรกิจ ความเข้าใจเชิงลึก ประสบการณ์
            ความสัมพันธ์ และทรัพยากร ที่จะช่วยตอบโจทย์ธุรกิจของท่าน
          </div>
          <CheckList header='บริการให้คำปรึกษา' list={consultings} />
          <CheckList header='บริการด้านภาษี' list={taxes} />
          <CheckList header='บริการด้านบัญชี' list={accountings} />
        </div>
      </IndustryLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query RealEstateIndustryThQuery {
    industriesThJson(link: { eq: "/industries/real-estate" }) {
      name
      description
      link
    }
  }
`;
