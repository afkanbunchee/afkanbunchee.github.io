import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'การจัดทำข้อตกลงการร่วมลงทุน' },
  { h: 'การวิเคราะห์การซื้อและการเช่ายืมอุปกรณ์เครื่องมือ' },
  { h: 'การวางแผนกลยุทธ์ระยะยาว' },
  { h: 'การประเมินมูลค่าธุรกิจ' },
];

const taxes = [
  { h: 'วางแผนและให้คำปรึกษาด้านภาษี' },
  { h: 'ให้ความช่วยเหลือด้านภาษีทางวิชาชีพทันตแพทย์' },
  { h: 'ปรับปรุงข้อมูลกฎหมายทางภาษีและระเบียบปฏิบัติทางบัญชีที่เกี่ยวข้องกับธุรกิจให้เป็นปัจจุบัน' },
  { h: 'จัดเตรียม ภ.ง.ด.94 และ ภ.ง.ด.90/91 สำหรับยื่นภาษีเงินได้ตามมาตรา 40(1)(2)(8)' },
];

const accountings = [
  { h: 'ตรวจสอบ ตรวจทาน และรวบรวมข้อมูลงบการเงิน' },
  { h: 'จัดทำงบการเงินต่าง ๆ ด้วยวิธีการที่หลากหลาย เช่น การใช้เกณฑ์คงค้าง เกณฑ์เงินสด หรือ ภาษีเงินได้ เป็นต้น' },
  { h: 'จัดทำบัญชีและการตรวจสอบแผนสวัสดิการและผลประโยชน์พนักงาน' },
  { h: 'จัดวางการควบคุมภายในและการวิเคราะห์' },
  { h: 'การตรวจสอบการทุจริต' },
];

export default function DentalIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <IndustryLayout
        title={data.industriesThJson.name}
        subtitle={data.industriesThJson.description}
        url={data.industriesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            เอเอฟ การบัญชี มีการให้บริการด้านภาษี การบัญชี และให้คำปรึกษาการให้บริการทันตกรรม
            เราได้มีการออกแบบการบริการให้เหมาะสมกับลูกค้าในทุกช่วงของกิจกรรมการปฏิบัตงาน ที่เอเอฟ การบัญชี
            คุณจะได้รับทราบและเข้าใจในทุก ๆ กระบวนการ ตั้งแต่การจัดวางระบบบัญชีจนถึงการวิเคราะห์รายการทางการเงิน
            เพื่อที่จะสามารถนำไปใช้ในการวางแผนภาษีรวมถึงการวางแนวปฏิบัติในการทำงานทั้งในส่วนของผู้ให้บริการและผู้มารับบริการ
            เรายินดีทำงานเคียงข้างคุณในทุกย่างก้าวเพื่อให้บรรลุเป้าหมายทางการเงินและทางธุรกิจ
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
  query DentalIndustryThQuery {
    industriesThJson(link: { eq: "/industries/dental" }) {
      name
      description
      link
    }
  }
`;
