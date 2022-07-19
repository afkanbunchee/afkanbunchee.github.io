import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';
import Button from './button';

export default function Hero() {
  const { lang } = useContext(pageContext);

  const img =
    lang === 'th' ? (
      <StaticImage
        src='../images/home-th.png'
        alt='จัดการปัญหาบัญชีต่างๆ'
        width={616}
        height={536}
        layout='constrained'
        placeholder='blurred'
        objectFit='contain'
      />
    ) : (
      <StaticImage
        src='../images/home-en.png'
        alt='Manage Accounting Issues'
        width={616}
        height={536}
        layout='constrained'
        placeholder='blurred'
        objectFit='contain'
      />
    );

  const title =
    lang === 'th'
      ? 'ปัญหาบัญชีและภาษีจะหมดไป เมื่อท่านใช้บริการของเรา'
      : 'If it is difficult for you, just come to us, and we can help you';
  const subtitle =
    lang === 'th'
      ? 'ปรึกษาฟรี ไม่มีค่าใช้จ่าย โดยผู้ทำบัญชีที่มีความเชี่ยวชาญ มีประสบการณ์ตรงในวิชาชีพบัญชีและตรวจสอบบัญชี'
      : 'Free consulting by professional accountants in accounting and auditing';

  return (
    <section id='hero' className='w-full bg-gray-100'>
      <div className='block bg-gray-200 hero-space'></div>
      <div className='mx-auto max-w-screen-xl flex flex-row'>
        <div className='flex-1 flex justify-center items-center'>
          <div className='p-6'>
            <div className='text-center md:text-left'>
              <h1 className='px-4 text-black text-opacity-90 leading-normal'>{title}</h1>
              <div className='px-4 mt-2 text-black text-opacity-70'>{subtitle}</div>
            </div>
            <div className='mt-6 text-center md:text-left flex flex-col md:flex-row gap-4'>
              <Button
                to={lang === 'th' ? '/services' : '/en/services'}
                className='mx-4'
                text={lang === 'th' ? 'ดูบริการของเรา' : 'Find Out More'}
                wrapped
              />
              <Button
                to={lang === 'th' ? '/contact-us' : '/en/contact-us'}
                className='mx-4 md:mx-0'
                text={lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                altColor
                wrapped
              />
            </div>
          </div>
        </div>
        <div className='flex-1 justify-center p-6 hidden md:flex'>{img}</div>
      </div>
    </section>
  );
}
