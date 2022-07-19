import { Link } from 'gatsby';
import React from 'react';

export default function Button({
  className,
  to,
  text,
  altColor,
  wrapped,
}: {
  className?: string;
  to: string;
  text: string;
  altColor?: boolean;
  wrapped?: boolean;
}) {
  const clazz = `${wrapped ? '' : `${className} `}${
    altColor
      ? 'inline-block text-black text-opacity-90 bg-white p-3 shadow'
      : 'inline-block text-white bg-green-600 p-3 shadow'
  }`;
  return wrapped ? (
    <div className={className}>
      <Link to={to} className={clazz}>
        {text}
      </Link>
    </div>
  ) : (
    <Link to={to} className={clazz}>
      {text}
    </Link>
  );
}
