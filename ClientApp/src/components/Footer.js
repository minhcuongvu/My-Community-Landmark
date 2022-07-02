import React from 'react';
import styles from '../custom.scss';
import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top__items">
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
          </div>
        </div>
        <div className="footer__bot">
          <div className="footer__bottom__items">
            <div className="footer__bottom__item">
              <div>Logo</div>
              <div>Image</div>
            </div>
            <div className="footer__bottom__item">
              <div className="footer__bottom__item-a footer__text">
                © Copyright 2022 My Community Diary
              </div>
              <div className="footer__bottom__item-a footer__text">
                Text App to 0488 884 151
              </div>
            </div>
            <div className="footer__bottom__item">
              <ul>
                <li className="footer__bottom__list__item">Media 1</li>
                <li className="footer__bottom__list__item">Media 2</li>
              </ul>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer__bottom__items footer__text">
            Community Information Support Services acknowledges the Aboriginal
            people of the many traditional lands and language groups of A
            ustralia. We acknowledge the wisdom of Aboriginal Elders both past
            and present and recognise the positive contribution to the health
            and wellbeing of the com munity by the cultural heritage, values and
            beliefs of Aboriginal communities today.
          </div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
          </a>
        </div>
      </div>
    </footer>
  );
}
