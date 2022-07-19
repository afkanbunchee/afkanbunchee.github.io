import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'การวางแผนจัดทำกลยุทธ์' },
  { h: 'บริการให้คำปรึกษาด้านภาษี' },
  { h: 'วิเคราะห์ทุน' },
  { h: 'การวางแผนจัดทำสวัสดิการพนักงาน' },
  { h: 'การศึกษาเปรียบเทียบ' },
  { h: 'การจัดการด้านการเงิน ทุน และทรัพยากร' },
  { h: 'การประเมินความเสี่ยงจากการบันทึกบัญชีผิดพลาดและการทุจริต' },
  { h: 'ให้คำปรึกษาและตรววจสอบการควบคุมภายใน' },
  { h: 'บริการให้คำแนะนำและการจัดการความเสี่ยง' },
];

const taxes = [
  { h: 'การจัดการดูแลและการรักษาสถานภาพการยกเว้นทางภาษี' },
  { h: 'การจัดการประเด็นรายได้ต่าง ๆ ที่ไม่เกี่ยวข้องกับองค์กร' },
];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'การตรวจสอบรายครั้ง' },
  { h: 'การตรวจสอบทุน' },
  { h: 'การตรวจสอบศักยภาพ' },
  { h: 'จัดเตรียมแผนในการตรวจสอบ' },
  { h: 'กระทบยอดบัญชีธนาคาร' },
  { h: 'การจัดทำสมุดบัญชี การจัดการใบรับและการเบิกจ่าย' },
  { h: 'จัดทำการตรวจสอบภายใน' },
];

export default function NonProfitIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            นอกจากข้อจำกัดทั้งด้านเงินทุนและทรัพยากรแล้ว
            เราทราบดีกว่าองค์กรที่ไม่แสวงหาผลกำไรจะต้องเผชิญกับความยุ่งยากหลายอย่างตั้งแต่ด้านการจัดทำบัญชีจนถึงความซับซ้อนทางด้านภาษีและการตรวจสอบ
            เอเอฟ การบัญชี มีการจัดเตรียมแนวทางการปฏิบัติงานต่าง ๆ ที่จำเป็นต่อการดำเนินงานและการให้บริการต่อชุมชน
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
  query NonProfitIndustryThQuery {
    industriesThJson(link: { eq: "/industries/non-profit" }) {
      name
      description
      link
    }
  }
`;
