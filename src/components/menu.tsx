import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext, useEffect, useState } from 'react';
import { pageContext } from '../contexts/page-context';

export default function Menu() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      menuThJson {
        header {
          link
          text
        }
        pricing {
          link
          text
        }
      }
      menuEnJson {
        header {
          link
          text
        }
        pricing {
          link
          text
        }
      }
    }
  `);
  const { lang } = useContext(pageContext);
  const [drawerShowed, setDrawerShowed] = useState(false);
  const [pathTh, setPathTh] = useState('/');
  const [pathEn, setPathEn] = useState('/en');

  useEffect(() => {
    const path = window.location.pathname;
    setPathTh((path.startsWith('/en') ? path.substring(3) : path) || '/');
    setPathEn((path.startsWith('/en') ? path : `/en${path}`) || '/en');
  }, []);

  const logo =
    lang === 'th' ? (
      <StaticImage src='../images/logo-th.png' alt='เอเอฟ การบัญชี' height={40} placeholder='blurred' />
    ) : (
      <StaticImage src='../images/logo-en.png' alt='AF Kanbunchee' height={40} placeholder='blurred' />
    );

  const menu: any[] = lang === 'th' ? data.menuThJson.header : data.menuEnJson.header;

  const langSwitcher =
    lang === 'th' ? (
      <Link to={pathEn}>
        <StaticImage src='../images/en.png' alt='EN' height={24} placeholder='blurred' />
      </Link>
    ) : (
      <Link to={pathTh}>
        <StaticImage src='../images/th.png' alt='TH' height={24} placeholder='blurred' />
      </Link>
    );

  const pricing = lang === 'th' ? data.menuThJson.pricing : data.menuEnJson.pricing;

  let drawerClass =
    'fixed -mx-56 w-56 sm:-mx-80 sm:w-80 z-20 bg-zinc-800 text-white min-h-screen max-h-screen p-6 duration-200 overflow-y-auto lg:hidden';
  if (drawerShowed) {
    drawerClass += ' translate-x-56 sm:translate-x-80';
  }

  return (
    <>
      <div className={drawerClass}>
        <div className='flex flex-col'>
          {menu.map((m) => (
            <div className='my-4 hover:underline underline-offset-4'>
              <Link to={m.link}>{m.text}</Link>
            </div>
          ))}
          <div className='my-4 hover:underline underline-offset-4'>
            <Link to={pricing.link}>{pricing.text}</Link>
          </div>
        </div>
      </div>
      <section className='w-full bg-white bg-opacity-80 fixed z-10 p-6'>
        <div className='flex flex-row mx-auto max-w-screen-xl items-center'>
          <div>{logo}</div>
          <div className='flex-1 flex justify-end items-center'>
            {menu.map((m) => (
              <div className='hidden lg:inline-block mx-4 text-gray-700 hover:text-green-600 hover:underline underline-offset-8'>
                <Link to={m.link}>{m.text}</Link>
              </div>
            ))}
            <div className='hidden sm:inline-block ml-10 mr-2'>
              <Link to={pathEn}>
                <StaticImage src='../images/en.png' alt='EN' height={24} placeholder='blurred' />
              </Link>
            </div>
            <div className='hidden sm:inline-block mx-2'>
              <Link to={pathTh}>
                <StaticImage src='../images/th.png' alt='TH' height={24} placeholder='blurred' />
              </Link>
            </div>
            <div className='inline-block sm:hidden mx-2'>{langSwitcher}</div>
            <Link to={pricing.link} className='hidden lg:inline-block ml-4 text-white bg-green-600 p-2 rounded-xl'>
              {pricing.text}
            </Link>
            <div
              className='inline-block lg:hidden ml-6 text-green-600 cursor-pointer text-2xl w-10 text-center'
              onClick={() => {
                setDrawerShowed(!drawerShowed);
              }}>
              <FontAwesomeIcon icon={drawerShowed ? faTimes : faBars} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
