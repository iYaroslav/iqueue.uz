import styles from './Works.module.scss';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'next-i18next';
import "swiper/css";
import 'swiper/css/pagination';

const categories = [
  { label: 'financial_sector', translationKey: 'financial_sector' },
  { label: 'clinic_and_laboratoriees', translationKey: 'clinic_and_laboratoriees' },
  { label: 'public_sector', translationKey: 'public_sector' }
];

const works = [
  [
    {
      img: 'images/works/works2.jpg',
      // feat: [
      //   {
      //     isActive: true,
      //     title: {
      //       uz: "Navbat tizimi",
      //       ru: "Система очередей",
      //       en: "Queue System",
      //     }
      //   },
      //   {
      //     isActive: false,
      //     title: {
      //       uz: "Soliq",
      //       ru: "Налоговая",
      //       en: "Tax",
      //     }
      //   }
      // ]
    },
    {
      img: 'images/works/works3.jpg',
    },
    {
      img: 'images/works/works4.jpg',
    },
    {
      img: 'images/works/works10.jpg',
    },
  ],
  [
    {
      img: 'images/works/works6.jpg',
    },
    {
      img: 'images/works/works8.jpg',
    },
  ],
  [
    {
      img: 'images/works/works1.jpg',
    },
    {
      img: 'images/works/works5.jpg',
    },
    {
      img: 'images/works/works7.jpg',
    },
    {
      img: 'images/works/works9.jpg',
    }
  ]
]

const Works = () => {
  const { t } = useTranslation('common');
  const [activeLine, setActiveLine] = useState(0);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const activeWorks = works[activeLine];

  return (
    <section className={styles.works}>
      <div className="container">
        <h3 className={styles.worksTitle}>
          {t('cases_title')}
        </h3>
        <p className={styles.worksText}>
          {t('cases_subtitle')}
        </p>
      </div>

      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${styles.categoryListItem} ${activeLine === index ? styles.active : ''}`}
            onClick={() => setActiveLine(index)}
          >
            {t(category.translationKey)}
          </li>
        ))}
      </ul>

      <div className={`container ${styles.worksSlider}`}>
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className={`swiperWorks ${styles.worksSwiper}`}
        >
          {activeWorks.map((el, index) => (
            <SwiperSlide key={index}>
              <div className={styles.worksContent}>
                <div className={styles.worksContentTop}>
                  {el.feat?.map((category, index) => (
                    <div key={index} className={`${styles.worksContentInfo} ${category.isActive === true ? styles.active : ''}`}>
                      {category.title[currentLang]}
                    </div>
                  ))}
                </div>
                <div className={styles.worksContentImg}>
                  <img loading='lazy' src={el.img} alt={t('work_content')} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Works;
