import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function CheckList({ header, list }: { header: string; list: { h?: string; t?: string }[] }) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-black text-opacity-90 my-8'>{header}</h1>
      <ul>
        {list.map((s) => (
          <li className='mb-4 flex flex-row'>
            <span className='text-green-600'>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <div className='ml-4'>
              {s.h && <span className='text-green-600'>{s.h}</span>}
              {s.t && <span className='text-black text-opacity-70'>{s.h ? ` ${s.t}` : s.t}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
