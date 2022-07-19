import React from 'react';
import Button from './button';

const gridCols = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
};

export default function Grid({
  header,
  cols,
  link,
  linkName,
  children,
}: React.PropsWithChildren<{ header: string; cols: number; link?: string; linkName?: string }>) {
  return (
    <div className='w-full bg-gray-100 px-6 py-8'>
      <div className='mx-auto max-w-screen-xl flex flex-col'>
        <h1 className='text-black text-opacity-90 leading-normal text-center mb-6'>{header}</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols[cols]} gap-8`}>{children}</div>
        {link && <Button to={link} text={linkName || ''} wrapped className='mx-auto mt-8 mb-2' />}
      </div>
    </div>
  );
}
