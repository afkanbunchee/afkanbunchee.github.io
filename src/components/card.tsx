import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';
import Button from './button';

export default function Card({
  image,
  header,
  link,
  children,
}: React.PropsWithChildren<{
  image: string;
  header: string;
  link?: string;
}>) {
  const img = {
    '../images/accounting.png': (
      <StaticImage
        src='../images/accounting.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
    '../images/audit.png': (
      <StaticImage
        src='../images/audit.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
    '../images/registration.png': (
      <StaticImage
        src='../images/registration.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
    '../images/revenue.png': (
      <StaticImage
        src='../images/revenue.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
    '../images/socialsec.png': (
      <StaticImage
        src='../images/socialsec.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
    '../images/taxplan.png': (
      <StaticImage
        src='../images/taxplan.png'
        alt={header}
        layout='fixed'
        placeholder='blurred'
        objectFit='contain'
        width={64}
        height={64}
      />
    ),
  };
  const { lang } = useContext(pageContext);
  return (
    <div className='bg-white w-full flex flex-col items-center p-8' style={{ minHeight: '357px' }}>
      <div className='bg-green-600 p-2 rounded'>{img[image]}</div>
      <h2 className='text-black text-opacity-90 leading-normal mt-8 text-center'>{header}</h2>
      <div className='flex-1 text-black text-opacity-70 text-center leading-8 mt-4'>{children}</div>
      {link && <Button to={link} className='mt-4' text={lang === 'th' ? 'เพิ่มเติม' : 'More'} />}
    </div>
  );
}
