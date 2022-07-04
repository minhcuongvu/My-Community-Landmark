import React from 'react';
import uuid from 'react-uuid';

export default function FooterItem({ title, labels }) {
  return (
    <div className="footer__top__item">
      <div className="footer__top__item__title no-select">{title}</div>
      <ul className="footer__top__item__list">
        {labels?.map((label) => (
          <li className="footer__top__list__item no-select" key={`${uuid()}}`}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
