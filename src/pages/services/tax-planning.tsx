import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const businessItems = [
  { h: 'การจัดเตรียมขอคืนภาษีขององค์กร หุ้นส่วน และรายได้ต่าง ๆ ที่เกี่ยวข้อง' },
  { h: 'บริการผู้เชี่ยวชาญภาษีระดับท้องถิ่นและภาครัฐ' },
  { h: 'ช่วยเหลือในการจัดวางโครงสร้างทางภาษี และ รายการทางภาษี' },
  { h: 'การวางแผนภาษี' },
  { h: 'ช่วยเหลือในการจัดการภาษีระหว่างประเทศ' },
  { h: 'เป็นตัวแทนในการติดต่อประสานงานกับหน่วยงานสรรพากร องค์กรท้องถิ่น และ องค์กรภาครัฐ' },
  { h: 'จัดเตรียมแผนสำหรับสวัสดิการและโบนัส' },
  { h: 'เป็นตัวแทนในการควบรวมกิจการ' },
  { h: 'ดูแลเรื่องเครดิตทางภาษี' },
  { h: 'การศึกษาวิเคราะห์ต้นทุนทางภาษี' },
  { h: 'ดูแลเรื่องเครดิตภาษีท้องถิ่น' },
  { h: 'แจ้งให้ทราบถึงผลกระทบต่อธุรกิจของท่าน หากมีการเปลี่ยนแปลงทางกฎหมายที่เกี่ยวข้องกับภาษี' },
];

const individualItems = [
  { h: 'การจัดเตรียมขอคืนภาษีและรายได้ต่าง ๆ ที่เกี่ยวข้อง' },
  { h: 'บริการผู้เชี่ยวชาญภาษีระดับท้องถิ่นและภาครัฐ' },
  { h: 'การวางแผนภาษี' },
  { h: 'ช่วยเหลือในการจัดการภาษีระหว่างประเทศ' },
  { h: 'เป็นตัวแทนในการติดต่อประสานงานกับหน่วยงานสรรพากร องค์กรท้องถิ่น และ องค์กรภาครัฐ' },
  { h: 'การวางแผนลงทุนในหุ้น' },
  { h: 'การวางแผนการจัดการด้านอสังหาริมทรัพย์' },
  { h: 'การวิเคราะห์การลงทุนสำหรับการวางแผนในการเกษียณ' },
  { h: 'การลดหย่อนภาษีจากการบริจาคต่าง ๆ' },
  { h: 'การวางแผนเพื่อผลประโยชน์ทางธุรกิจอย่างใกล้ชิด' },
  { h: 'แจ้งให้ทราบถึงผลกระทบต่อท่าน หากมีการเปลี่ยนแปลงทางกฎหมายที่เกี่ยวข้องกับภาษี' },
];

const investmentItems = [
  { h: 'การจัดเตรียมขอคืนภาษีและรายได้ต่าง ๆ ที่เกี่ยวข้อง' },
  { h: 'บริการผู้เชี่ยวชาญภาษีระดับท้องถิ่นและภาครัฐ' },
  { h: 'การวางแผนภาษี' },
  { h: 'ช่วยเหลือในการจัดการภาษีระหว่างประเทศ' },
  { h: 'เป็นตัวแทนในการติดต่อประสานงานกับหน่วยงานสรรพากร องค์กรท้องถิ่น และ องค์กรภาครัฐ' },
  { h: 'การจัดเตรียมและการวางแผนด้านอสังหาริมทรัพย์' },
  { h: 'วิเคราะห์การหาแหล่งทุน' },
  { h: 'การวางแผนที่เกี่ยวข้องกับภาครัฐ' },
  { h: 'การจัดเตรียมและการวางแผนการร่วมทุน' },
  { h: 'การจัดเตรียมและการวางแผนการลงทุนในกองทุนรวมโครงสร้างพื้นฐาน (IFF)' },
];

export default function TaxPlanningServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <ServiceLayout
        title={data.servicesThJson.name}
        subtitle={data.servicesThJson.description}
        url={data.servicesThJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            นอกเหนือจากการวางแผนและบริการจัดเตรียมทางด้านภาษีแล้ว
            เรายังมีทีมงานที่มีศักยภาพที่มีความรู้ในการวางแผนและให้คำแนะนำในด้านต่าง ๆ ทั้งด้านบุคคล องค์กร หุ้นส่วน
            อสังหาริมทรัพย์ การลงทุน และการขอคืนภาษี
          </div>
          <CheckList header='ด้านธุรกิจองค์กร' list={businessItems} />
          <CheckList header='ด้านบุคคล' list={individualItems} />
          <CheckList header='ด้านการลงทุน' list={investmentItems} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query TaxPlanningServiceThQuery {
    servicesThJson(link: { eq: "/services/tax-planning" }) {
      name
      description
      link
    }
  }
`;
