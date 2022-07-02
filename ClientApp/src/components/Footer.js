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
          </div>
        </div>
        <div className="footer__bot">
          <div className="footer__bottom__items">
            <div className="footer__bottom__item">
              <a href="/">
                <img
                  alt="logo"
                  height={54}
                  width={240}
                  src="/directory-logo.svg"
                />
              </a>
              <a href="/">
                <img
                  alt="cie-logo"
                  height={54}
                  width={108}
                  src="/cie-logo.svg"
                />
              </a>
            </div>
            <div className="footer__bottom__item">
              <div className="footer__bottom__item-a footer__text">
                © Copyright 2022 My Community Diary
              </div>
              <div className="footer__bottom__item-a footer__text">
                Text App - 0488 884 151
              </div>
            </div>
            <div className="footer__bottom__item">
              <ul>
                <li className="footer__bottom__list__item">
                  <a href="/">
                    <img
                      alt="linkedin"
                      height={35}
                      width={35}
                      src="/linkedin-svgrepo-com.svg"
                    />
                  </a>
                </li>
                <li className="footer__bottom__list__item">
                  <a href="/">
                    <img
                      alt="twitter"
                      height={35}
                      width={35}
                      src="/twitter-svgrepo-com.svg"
                    />
                  </a>
                </li>
                <li className="footer__bottom__list__item">
                  <a href="/">
                    <img
                      alt="facebook"
                      height={35}
                      width={35}
                      src="/facebook-svgrepo-com.svg"
                    />
                  </a>
                </li>
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
        </div>
      </div>
    </footer>
  );
}
