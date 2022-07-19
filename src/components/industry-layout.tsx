import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { pageContext } from '../contexts/page-context';
import Layout from './layout';

export default function IndustriesLayout({
  title,
  subtitle,
  url,
  children,
}: React.PropsWithChildren<{ title: string; subtitle: string; url: string }>) {
  const data = useStaticQuery(graphql`
    query IndustriesLayoutQuery {
      allIndustriesThJson {
        nodes {
          name
          link
        }
      }
      allIndustriesEnJson {
        nodes {
          name
          link
        }
      }
    }
  `);

  const { lang } = useContext(pageContext);

  const industries = lang === 'th' ? data.allIndustriesThJson.nodes : data.allIndustriesEnJson.nodes;
  return (
    <Layout
      page='industries'
      title={lang === 'th' ? `กลุ่มธุรกิจ${title}` : `${title} Industry`}
      description={subtitle}
      url={url}>
      <div className='w-full py-8 px-6'>
        <div className='mx-auto max-w-screen-xl flex flex-row'>
          <div className='flex-1 flex flex-col'>
            <h3 className='text-black text-opacity-90'>{lang === 'th' ? 'กลุ่มธุรกิจ' : 'Industries'}</h3>
            <h1 className='text-black text-opacity-90 my-4'>{title}</h1>
            <div>{children}</div>
          </div>
          <div className='w-80 ml-8 hidden lg:block'>
            <div className='border-2 border-green-600'>
              <div className='bg-green-600 text-white p-4 mb-2'>
                {lang === 'th' ? 'กลุ่มธุรกิจลูกค้า' : 'Industry Sectors'}
              </div>
              <ul className='py-4'>
                {industries.map((i) => (
                  <li className='mb-4'>
                    <Link to={i.link} className='text-green-600 hover:underline ml-4'>
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
