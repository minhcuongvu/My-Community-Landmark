import React from 'react';

export default function Banner() {
  return (
    <section className="wrapper">
      <div className="wrapper__banner">
        <div className="wrapper__banner__container">
          <div className="container__items">
            <img className="banner__img" src="/hero24.webp" alt="banner-img" />
            <div className="container__item">
              <div className="Title__box Title__box__cursor">
                <h4 className="Title__box__title text__title text__title__color">
                  Everything you need
                  <br />
                  local is
                  <span>a click away</span>
                </h4>
              </div>
              <div className="Title__box__subtitle text__title__color">
                Discover your local
                <span>Community Landmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
