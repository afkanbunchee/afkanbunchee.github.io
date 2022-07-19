import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'แนวปฏิบัติการดำเนินงาน' },
  { h: 'การจัดทำตัววัดผลการดำเนินงานต่าง ๆ (KPI)' },
  { h: 'การจัดการสินค้าคงคลังและห่วงโซ่อุปทาน' },
  { h: 'การประเมินมูลค่าธุรกิจ' },
  { h: 'การศึกษาการจัดทำราคาและการไหลของกระบวนการทำงาน' },
  { h: 'การวางแผนความสำเร็จทางธุรกิจ' },
  { h: 'การจัดทำโบนัสและเบี้ยขยันให้กับพนักงาน' },
  { h: 'แนวทางการปฏิบัติตามกฎเกณฑ์และกฎหมายต่าง ๆ' },
  { h: 'การจัดการความเสี่ยง' },
];

const taxes = [
  { h: 'วางแผนและให้คำปรึกษาด้านภาษี' },
  { h: 'ภาษีภาครัฐและภาษีท้องถิ่น' },
  { h: 'การแยกต้นทุน' },
  { h: 'การเตรียมตัวขอคืนภาษี' },
  { h: 'ปรับปรุงข้อมูลกฎหมายทางภาษีและระเบียบปฏิบัติทางบัญชีที่เกี่ยวข้องกับธุรกิจให้เป็นปัจจุบัน' },
];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'การจัดทำงบประมาณทางการเงินต่าง ๆ' },
  { h: 'จัดทำบัญชีและการตรวจสอบแผนสวัสดิการและผลประโยชน์พนักงาน' },
  { h: 'การประเมินการควบคุมภายใน' },
  { h: 'จัดทำบัญชีให้เป็นไปตามกฎเกณฑ์และกฎหมายต่าง ๆ' },
  { h: 'การตรวจสอบความถูกต้องในการบันทึกบัญชีและการทุจริต' },
];

export default function ManufacturingIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี จะเริ่มจากการให้บริการทางบัญชีและการช่วยเหลือดูแลมาตรการทางภาษีต่าง ๆ
            ซึ่งอาจรวมถึงการให้คำปรึกษาทางด้วยธุรกิจด้วย
            สำหรับผู้ประกอบการที่ต้องการความช่วยเหลือในการเริ่มวางแผนทางการเงิน
            จนถึงผู้ประกอบการที่ต้องการวางแผนที่จะขายธุรกิจในอนาคต เราจะคอยช่วยเหลือในการจัดหาข้อมูลเชิงลึก ไอเดีย
            และความรู้ทางด้านต่าง ๆ ไม่ว่าจะเป็นการให้ข้อมูลทางภาษี การฝึกอบรมและการจ้างพนักงาน
            หรือแม้กระทั่งการวิเคราะห์ความสามารถในการทำกำไรของการดำเนินธุรกิจ
            เราจะพยายามช่วยเหลือท่านในการติดต่อประสานงานกับบุคคลต่าง ๆ เพื่อลดภาษี เพิ่มกำไร
            และสร้างโอกาสทางธุรกิจให้กับท่านให้ได้มากที่สุด
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
  query ManufacturingIndustryThQuery {
    industriesThJson(link: { eq: "/industries/manufacturing" }) {
      name
      description
      link
    }
  }
`;
