import { faChevronRight, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';

const fbBangphliTh = (
  <StaticImage
    src='../images/fb-bangphli-th.png'
    alt='FB บางพลี'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

const fbBangphliEn = (
  <StaticImage
    src='../images/fb-bangphli-en.png'
    alt='FB Bang Phli'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

const fbLatKrabangTh = (
  <StaticImage
    src='../images/fb-latkrabang-th.png'
    alt='FB ลาดกระบัง'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

const fbLatKrabangEn = (
  <StaticImage
    src='../images/fb-latkrabang-en.png'
    alt='FB Lat Krabang'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

const fbSaimaiTh = (
  <StaticImage
    src='../images/fb-saimai-th.png'
    alt='FB สายไหม'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

const fbSaimaiEn = (
  <StaticImage
    src='../images/fb-saimai-en.png'
    alt='FB Saimai'
    layout='fixed'
    placeholder='blurred'
    objectFit='contain'
    width={119}
    height={50}
  />
);

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allAddressesThJson {
        nodes {
          short
          address
          tel
          mobile
        }
      }
      allAddressesEnJson {
        nodes {
          short
          address
          tel
          mobile
        }
      }
      allServicesThJson {
        nodes {
          name
          link
        }
      }
      allServicesEnJson {
        nodes {
          name
          link
        }
      }
    }
  `);
  const { lang } = useContext(pageContext);

  const addresses: any[] = lang === 'th' ? data.allAddressesThJson.nodes : data.allAddressesEnJson.nodes;
  const services: any[] = lang === 'th' ? data.allServicesThJson.nodes : data.allServicesEnJson.nodes;

  return (
    <>
      <section className='w-full bg-gray-100 px-6 py-12'>
        <div className='mx-auto max-w-screen-xl grid grid-cols-2 xl:grid-cols-4'>
          <div className='col-span-2 sm:col-span-1 flex flex-col'>
            <h3 className='font-bold text-black text-opacity-90'>
              {lang === 'th' ? 'เอเอฟ การบัญชี' : 'AF Kanbunchee'}
            </h3>
            {addresses.map((a) => (
              <>
                <div className='text-green-600 font-bold mt-4'>{a.short}</div>
                <div className='flex flex-row mt-1'>
                  <div className='text-green-600 w-6'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className='flex-1'>
                    <span className='text-green-600'>{lang === 'th' ? 'ที่อยู่' : 'Address'} : </span>
                    <span className='text-black text-opacity-70'>{a.address}</span>
                  </div>
                </div>
                <div className='flex flex-row mt-1'>
                  <div className='text-green-600 w-6'>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className='flex-1'>
                    <span className='text-green-600'>{lang === 'th' ? 'โทร' : 'Tel.'} : </span>
                    <span className='text-black text-opacity-70'>
                      {a.tel}
                      {a.tel && ', '}
                      {a.mobile}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className='col-span-2 sm:col-span-1 mt-4 sm:mt-0 flex flex-col'>
            <div className='px-0 sm:px-12'>
              <h3 className='font-bold text-black text-opacity-90'>
                {lang === 'th' ? 'บริการของเรา' : 'Our Services'}
              </h3>
              <ul>
                {services.map((s) => (
                  <li className='mt-4'>
                    <span className='text-green-600'>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <Link to={s.link} className='text-black text-opacity-70 ml-4 hover:underline'>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-span-2 flex flex-col mt-4 xl:mt-0'>
            <h3 className='font-bold text-black text-opacity-90'>{lang === 'th' ? 'ติดตามเรา' : 'Stay Connected'}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 my-5 w-64 sm:w-96'>
              <div>
                <a href='https://www.facebook.com/Afkanbunchee' target='_blank'>
                  {lang === 'th' ? fbBangphliTh : fbBangphliEn}
                </a>
              </div>
              <div>
                <a href='https://www.facebook.com/M2ALL-109192255190426' target='_blank'>
                  {lang === 'th' ? fbLatKrabangTh : fbLatKrabangEn}
                </a>
              </div>
              <div>
                <a href='https://www.facebook.com/groups/459096718947366' target='_blank'>
                  {lang === 'th' ? fbSaimaiTh : fbSaimaiEn}
                </a>
              </div>
            </div>
            <h3 className='font-bold my-2 text-black text-opacity-90'>{lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}</h3>
            <div className='mt-2 text-black text-opacity-70'>
              {lang === 'th' ? (
                <p>
                  เรา คือ ทีมงานมืออาชีพทางบัญชี มีใบประกอบวิชาชีพรับอนุญาตตามที่กฎหมายกำหนด ดังนั้น
                  ท่านจึงสามารถไว้วางใจ ในคุณภาพของบริการที่เรามีให้กับท่าน เราสามารถให้บริการได้
                  ตั้งแต่การจดทะเบียนเริ่มต้นกิจการ การวางระบบบัญชี การทำบัญชี การตรวจสอบบัญชี การวางแผนภาษีอากร
                </p>
              ) : (
                <p>
                  We are a team of professional accountants who is responsible for keeping and interpreting financial
                  records. We accountants are responsible for a wide range of finance-related tasks.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className='block bg-green-600 p-6 text-center text-white'>
        <span>COPYRIGHT © AF KANBUNCHEE LIMITED PARTNERSHIP 2022. </span>
        <br className='lg:hidden' />
        <a href='https://www.freepik.com/'>DESIGNED BY FREEPIK</a>
      </div>
    </>
  );
}
