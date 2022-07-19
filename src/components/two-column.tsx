import React from 'react';

export default function TwoColumn({ img, children }: React.PropsWithChildren<{ img: React.ReactNode }>) {
  return (
    <div className='w-full p-6'>
      <div className='mx-auto max-w-screen-xl flex flex-col md:flex-row'>
        <div className='flex-1 flex flex-row items-center'>{img}</div>
        <div className='flex-1 ml-0 md:ml-8 flex flex-row items-center'>
          <div className='flex flex-col w-full'>{children}</div>
        </div>
      </div>
    </div>
  );
}
