import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';

export default function IndustryCard({
  header,
  link,
  index,
  children,
}: React.PropsWithChildren<{
  header: string;
  link: string;
  index: number;
}>) {
  const { lang } = useContext(pageContext);
  const bgClassName = `${index % 2 == 1 ? 'bg-white' : 'bg-green-600'} w-full flex flex-col items-center p-8 relative`;
  const starClassName = `${index % 2 == 1 ? 'text-green-600' : 'text-white'} text-4xl`;
  const headerClassName = `${
    index % 2 == 1 ? 'text-black text-opacity-90' : 'text-white'
  } leading-normal mt-8 text-center`;
  const descClassName = `${
    index % 2 == 1 ? 'text-black text-opacity-70' : 'text-white'
  } flex-1 text-center leading-8 mt-4`;
  const linkClassName = `${index % 2 == 1 ? 'text-black text-opacity-70' : 'text-white'} mt-8 hover:underline`;
  return (
    <div className={bgClassName} style={{ minHeight: '357px' }}>
      <div className='absolute top-5 left-5 text-black text-opacity-10 text-6xl'>{index}.</div>
      <div className={starClassName}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h2 className={headerClassName}>{header}</h2>
      <div className={descClassName}>{children}</div>
      <Link to={link} className={linkClassName}>
        {lang === 'th' ? 'รายละเอียดเพิ่มเติม' : 'More Information'}
      </Link>
      <div className='border-2 border-green-800 absolute bottom-0 w-full'></div>
    </div>
  );
}
