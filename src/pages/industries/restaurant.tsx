import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'วิเคราะห์โครงสร้างองค์กรและการลงทุน' },
  { h: 'จัดทำแม่แบบสำหรับวิเคราะห์ข้อมูลทางการเงิน' },
  { h: 'จัดทำแนวปฏิบัติสำหรับรายงานการจ่ายเงินเดือนและทิป' },
  { h: 'การเลือกระบบขายหน้าร้าน (POS)' },
  { h: 'วิเคราะห์การออกบัตรกำนัล' },
  { h: 'การจัดทำเมนู' },
  { h: 'การจัดการสินค้าคงคลัง' },
];

const taxes = [
  { h: 'วางแผนและให้คำปรึกษาด้านภาษี' },
  { h: 'ภาษีท้องถิ่น' },
  { h: 'การจัดทำกลยุทธ์เพื่อประหยัดภาษี' },
  { h: 'ภาษีธุรกิจร้านอาหาร' },
  { h: 'ปรับปรุงข้อมูลกฎหมายทางภาษีและระเบียบปฏิบัติทางบัญชีที่เกี่ยวข้องกับธุรกิจให้เป็นปัจจุบัน' },
  { h: 'การแยกต้นทุน' },
];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'ออกแบบการควบคุมภายในและการตรวจสอบการทุจริต' },
  { h: 'ประเมิณรายได้กับบิลเงินสด' },
  { h: 'ประเมินรายได้แฟรนไชส์' },
  { h: 'จัดทำบัญชีและการตรวจสอบแผนสวัสดิการและผลประโยชน์พนักงาน' },
];

export default function RestaurantIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี มีความยินดีที่จะช่วยเหลือผู้ประกอบร้านอาหารในการเริ่มต้นจัดทำระบบการควบคุมภายใน
            การออกแบบระบบหลังบ้าน การเลือกซอฟต์แวร์บัญชี และการให้ความช่วยเหลือด้านอื่น ๆ
            ด้วยบุคลากรที่มีความเชี่ยวชาญทั้งด้านภาษี การให้คำปรึกษา และการทำบัญชี
            เพื่อให้มั่นใจได้ว่าท่านจะได้ผลลัพธ์ทางธุรกิจที่น่าพอใจ
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
  query RestaurantIndustryThQuery {
    industriesThJson(link: { eq: "/industries/restaurant" }) {
      name
      description
      link
    }
  }
`;
