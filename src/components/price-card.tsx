import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';

export default function PriceCard({
  header,
  price,
  index,
  children,
}: React.PropsWithChildren<{
  header: string;
  price: string;
  index: number;
}>) {
  const { lang } = useContext(pageContext);
  return (
    <div className='bg-white w-full flex flex-col items-center p-8 relative' style={{ minHeight: '400px' }}>
      <div className='absolute top-5 left-5 text-black text-opacity-10 text-6xl'>{index}.</div>
      <div className='text-green-600 text-4xl'>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h1 className='text-black text-opacity-90 leading-normal mt-8 text-center'>{header}</h1>
      <div className='text-black text-opacity-70 flex-1 text-center leading-8 my-4'>{children}</div>
      <h1 className='text-green-600 text-center'>
        {price}
        <br />
        {lang === 'th' ? 'บาท' : 'THB'}
      </h1>
      <div className='border-2 border-green-800 absolute bottom-0 w-full'></div>
    </div>
  );
}
