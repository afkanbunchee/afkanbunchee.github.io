import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'การจัดทำข้อตกลงการร่วมลงทุน' },
  { h: 'การวางแผนวัยเกษียณ' },
  { h: 'การวางแผนกลยุทธ์ระยะยาว' },
  { h: 'การประเมินมูลค่าธุรกิจ' },
  { h: 'การจัดการกฎหมายว่าด้วยการบัญชี' },
];

const taxes = [{ h: 'วางแผนและให้คำปรึกษาด้านภาษี' }, { h: 'ให้ความช่วยเหลือด้านภาษี' }];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'จัดการทำกระทบยอดทางบัญชี' },
  { h: 'จัดทำบัญชีและการตรวจสอบแผนสวัสดิการและผลประโยชน์พนักงาน' },
  { h: 'จัดวางการควบคุมภายในและการวิเคราะห์' },
  { h: 'จัดทำงบการเงินต่าง ๆ ด้วยวิธีการที่หลากหลาย เช่น การใช้เกณฑ์คงค้าง เกณฑ์เงินสด หรือ ภาษีเงินได้ เป็นต้น' },
];

export default function LawFirmIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี มีความมุ่งมั่นที่จะคอยให้ความช่วยเหลือท่านทั้งแบบบุคคลและแบบทีม ไม่ว่าจะเป็นด้านบริการ
            ด้านความสามารถ และด้านทรัพยากร นอกจากนี้เรายังให้ความช่วยเหลือลูกค้าของเราในด้านกฎหมายระหว่างประเทศอีกด้วย
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
  query LawFirmIndustryThQuery {
    industriesThJson(link: { eq: "/industries/law-firm" }) {
      name
      description
      link
    }
  }
`;
