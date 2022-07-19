import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

const NotFoundPage = () => {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout>
        <div className='flex flex-col items-center p-12'>
          <h1 className='text-3xl text-green-600'>404</h1>
          <h2 className='text-2xl text-green-600'>ขออภัย ไม่พบหน้าเว็บไซต์</h2>
          <div className='mb-8'>
            <StaticImage
              src='../images/notfound.png'
              alt='ไม่พบหน้าเว็บไซต์'
              layout='constrained'
              placeholder='blurred'
              objectFit='contain'
            />
          </div>
          <Button to='/' text='กลับสู่หน้าหลัก' />
        </div>
      </Layout>
    </pageContext.Provider>
  );
};

export default NotFoundPage;
