import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

const lineQR = {
  '../images/line-bangphli.jpg': (
    <StaticImage
      src='../images/line-bangphli.jpg'
      alt='Line Bangphli'
      width={220}
      height={220}
      layout='fixed'
      placeholder='blurred'
    />
  ),
  '../images/line-latkrabang.jpg': (
    <StaticImage
      src='../images/line-latkrabang.jpg'
      alt='Line Lat Krabang'
      width={220}
      height={220}
      layout='fixed'
      placeholder='blurred'
    />
  ),
  '../images/line-saimai.jpg': (
    <StaticImage
      src='../images/line-saimai.jpg'
      alt='Line Saimai'
      width={220}
      height={220}
      layout='fixed'
      placeholder='blurred'
    />
  ),
};

const map = {
  '0113555000020': (
    <iframe
      className='w-full'
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7754.951445261194!2d100.71051!3d13.628801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5d4e5204e585%3A0x7c800e1913129467!2z4Lir4LmJ4Liy4LiH4Lir4Li44LmJ4LiZ4Liq4LmI4Lin4LiZ4LiI4Liz4LiB4Lix4LiUIOC5gOC4reC5gOC4reC4nyDguIHguLLguKPguJrguLHguI3guIrguLU!5e0!3m2!1sth!2sth!4v1656334739813!5m2!1sth!2sth'
      height='220'
      style={{ border: 0 }}
      allowFullScreen={false}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  ),
  '0105557054307': (
    <iframe
      className='w-full'
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.8507454333035!2d100.7796172!3d13.754555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67dfa044fbd5%3A0x79a3eff66d9b1f34!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC5h-C4oeC4l-C4uSDguK3guK3guKUg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1656335243386!5m2!1sth!2sth'
      height='220'
      style={{ border: 0 }}
      allowFullScreen={false}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  ),
  '0103555008543': (
    <iframe
      className='w-full'
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.0497152415408!2d100.6291507!3d13.9111717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7d1d61c5f9ef%3A0x851fefc81cbb602d!2z4Lir4LiI4LiBLuC4muC4suC4meC4suC4meC5iOC4siDguKXguLXguJ8g4LiE4Lit4LiZ4LiL4Lix4Lil4LmB4LiX4LiZ4LiX4LmM!5e0!3m2!1sth!2sth!4v1656335305058!5m2!1sth!2sth'
      height='220'
      style={{ border: 0 }}
      allowFullScreen={false}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  ),
};

const telLink = (tel: string | null) =>
  tel
    ? tel.split(',').map((t, index) => (
        <span>
          {index > 0 && ', '}
          <a href={`tel:${t.replaceAll('-', '').trim()}`}>{t}</a>
        </span>
      ))
    : '-';

export default function ContactUsPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='contact-us'
        title='Contact Us'
        description='Contact accounting offices including AF Kanbunchee (Bang Phli), M2 All (Lat Krabang), Banana Leaf Consultant (Saimai)'
        url='/en/contact-us'>
        <div className='w-full py-8 px-6'>
          <div className='mx-auto max-w-screen-xl flex flex-col'>
            <h1 className='text-black text-opacity-90'>Contact Us</h1>
            {data.allAddressesEnJson.nodes.map((n) => (
              <div className='flex flex-col lg:flex-row mt-8'>
                <div className='flex-1 grid grid-cols-3'>
                  <h2 className='col-span-3 text-black text-opacity-90 mb-2'>{n.name}</h2>
                  <div className='text-green-600 mt-2'>Juristic Name</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{n.bizname}</div>
                  <div className='text-green-600 mt-2'>Juristic ID</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{n.bizid}</div>
                  <div className='text-green-600 mt-2'>Contact Person</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{n.contactperson}</div>
                  <div className='text-green-600 mt-2'>Address</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{n.address}</div>
                  <div className='text-green-600 mt-2'>Tel</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{telLink(n.tel)}</div>
                  <div className='text-green-600 mt-2'>Mobile</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{telLink(n.mobile)}</div>
                  <div className='text-green-600 mt-2'>Fax</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>{telLink(n.fax)}</div>
                  <div className='text-green-600 mt-2'>Email</div>
                  <div className='col-span-2 text-black text-opacity-70 mt-2'>
                    <a href={`mailto:${n.email}`}>{n.email}</a>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center'>
                  <div className='my-4 lg:my-0 lg:pl-4 sm:pr-4'>
                    <Link to={n.qrlink} target='_blank'>
                      {lineQR[n.qr]}
                    </Link>
                  </div>
                  <div className='my-4 lg:my-0 sm:pl-4 flex-1'>{map[n.bizid]}</div>
                </div>
              </div>
            ))}
            <h1 className='text-black text-opacity-90 my-8'>Working Hours</h1>
            <div className='flex flex-col'>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Monday</div>
                <div className='text-black text-opacity-70'>8 : 00 am - 5 : 00 pm</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Tuesday</div>
                <div className='text-black text-opacity-70'>8 : 00 am - 5 : 00 pm</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Wednesday</div>
                <div className='text-black text-opacity-70'>8 : 00 am - 5 : 00 pm</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Thursday</div>
                <div className='text-black text-opacity-70'>8 : 00 am - 5 : 00 pm</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Friday</div>
                <div className='text-black text-opacity-70'>8 : 00 am - 5 : 00 pm</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Saturday</div>
                <div className='text-black text-opacity-70'>Holiday</div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className='w-32 text-black text-opacity-90'>Sunday</div>
                <div className='text-black text-opacity-70'>Holiday</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query ContactUsEnQuery {
    allAddressesEnJson {
      nodes {
        name
        bizname
        bizid
        contactperson
        address
        tel
        mobile
        fax
        email
        qr
        qrlink
        gps
        gpsthumb
      }
    }
  }
`;
