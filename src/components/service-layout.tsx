import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

export default function ServiceLayout({
  title,
  subtitle,
  url,
  children,
}: React.PropsWithChildren<{ title: string; subtitle: string; url: string }>) {
  const data = useStaticQuery(graphql`
    query ServicesLayoutQuery {
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

  const services = lang === 'th' ? data.allServicesThJson.nodes : data.allServicesEnJson.nodes;
  return (
    <Layout
      page='services'
      title={lang === 'th' ? `บริการ${title}` : `${title} Service`}
      description={subtitle}
      url={url}>
      <div className='w-full py-8 px-6'>
        <div className='mx-auto max-w-screen-xl flex flex-row'>
          <div className='flex-1 flex flex-col'>
            <h3 className='text-black text-opacity-90'>{lang === 'th' ? 'บริการ' : 'Services'}</h3>
            <h1 className='text-black text-opacity-90 my-4'>{title}</h1>
            <div>{children}</div>
          </div>
          <div className='w-80 ml-8 hidden lg:block'>
            <div className='border-2 border-green-600'>
              <div className='bg-green-600 text-white p-4 mb-2'>{lang === 'th' ? 'บริการของเรา' : 'Our Services'}</div>
              <ul className='py-4'>
                {services.map((s) => (
                  <li className='mb-4'>
                    <Link to={s.link} className='text-green-600 hover:underline ml-4'>
                      {s.name}
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
