import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { pageContext } from '../contexts/page-context';
import bgAboutUs from '../images/aboutus.jpg';
import bgContactUs from '../images/contactus.jpg';
import favIcon from '../images/favicon.ico';
import bgIndustries from '../images/industries.jpg';
import bgServices from '../images/services.jpg';
import Footer from './footer';
import Hero from './hero';
import Menu from './menu';

const bg = (img: string) => (
  <div
    className='w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 bg-cover bg-bottom'
    style={{ backgroundImage: `url(${img})` }}></div>
);

export default function Layout({
  page,
  title,
  description,
  url,
  children,
}: React.PropsWithChildren<{ page?: string; title?: string; description?: string; url?: string }>) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  let hero;
  switch (page) {
    case 'home':
      hero = <Hero />;
      break;
    case 'about-us':
      hero = bg(bgAboutUs);
      break;
    case 'services':
      hero = bg(bgServices);
      break;
    case 'industries':
      hero = bg(bgIndustries);
      break;
    case 'contact-us':
      hero = bg(bgContactUs);
      break;
    default:
      hero = <div className='w-full h-24'></div>;
      break;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <pageContext.Consumer>
        {({ lang }) => (
          <Helmet>
            <html lang={lang} />
            <title>
              {title ? `${title} | ` : ''}
              {lang === 'th' ? 'เอเอฟ การบัญชี' : 'AF Kanbunchee'}
            </title>
            <meta name='description' content={description} />
            <meta
              name='keywords'
              content={
                lang === 'th'
                  ? 'รับทำบัญชี,จดทะเบียนบริษัท,ตรวจสอบบัญชี,วางระบบบัญชี,วางระบบภาษี,ภาษีมูลค่าเพิ่ม,การวิเคราะห์งบการเงิน,ที่ปรึกษาทางการเงิน'
                  : 'accounting,business registration,auditing,accounting system,tax planning,vat,financial statements,financial consulting'
              }
            />
            <meta
              property='og:title '
              content={`${title ? `${title} | ` : ''}${lang === 'th' ? 'เอเอฟ การบัญชี' : 'AF Kanbunchee'}`}
            />
            <meta property='og:type' content='website' />
            <meta
              property='og:image'
              content={`${data.site.siteMetadata.siteUrl}/${lang === 'th' ? 'ogimage-th.png' : 'ogimage-en.png'}`}
            />
            <meta property='og:url' content={`${data.site.siteMetadata.siteUrl}${url ? url : ''}`} />
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={`${data.site.siteMetadata.siteUrl}${url ? url : ''}`} />
            <meta
              property='twitter:title'
              content={`${title ? `${title} | ` : ''}${lang === 'th' ? 'เอเอฟ การบัญชี' : 'AF Kanbunchee'}`}
            />
            <meta property='twitter:description' content={description} />
            <meta
              property='twitter:image'
              content={`${data.site.siteMetadata.siteUrl}/${lang === 'th' ? 'ogimage-th.png' : 'ogimage-en.png'}`}
            />
            <link rel='icon' type='image/x-icon' href={favIcon}></link>
            <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${url ? url : ''}`}></link>
          </Helmet>
        )}
      </pageContext.Consumer>
      <Menu />
      {hero}
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
