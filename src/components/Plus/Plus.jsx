import styles from './Plus.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'next-i18next';

const Plus = () => {
  const { t } = useTranslation('common');

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    const activePaginationBullet = document.querySelector('.swiper-pagination-bullet-active');
    const allBullets = document.querySelectorAll('.swiper-pagination-bullet');

    allBullets.forEach((bullet) => {
      if (bullet !== activePaginationBullet) {
        bullet.style.setProperty('--progress-width', '0%');
      }
    });

    if (activePaginationBullet) {
      const invertedProgress = ((1 - progress) * 100) + 10;
      activePaginationBullet.style.setProperty('--progress-width', `${invertedProgress}%`);
    }
  };

  return (
    <section className={styles.plus}>
      <div className="container">
        <h3 className={styles.plusTitle}>
          {t('advantages_title')}
        </h3>
        <p className={styles.plusText}>
          {t('advantages_subtitle')}
        </p>

        <div className={styles.plusContent}>
          <ul className={styles.plusList}>
            <li className={styles.plusListItem}>
              <div className={styles.plusListItemImg}>
                <img loading='lazy' src="images/plus1.png" alt="plus" />
              </div>
              <div className={styles.plusItemContent}>
                <div className={styles.plusItemTop}>
                  <div className={styles.plusItemInfo}>
                    {t('advantages_block1_button1')}
                  </div>
                  <div className={`${styles.plusItemInfo} ${styles.active}`}>
                    {t('advantages_block1_button2')}
                  </div>
                </div>
                <div className={styles.plusItemArticle}>
                  <h2 className={styles.plusItemNum}>01</h2>
                  <h3 className={styles.plusItemTitle}>
                    {t('advantages_block1_title')}
                  </h3>
                  <p className={styles.plusItemText}>
                    {t('advantages_block1_subtitle')}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.plusListItem}>
              <div className={styles.plusListItemImg}>
                <img loading='lazy' src="images/plus2.png" alt="plus" />
              </div>
              <div className={styles.plusItemContent}>
                <div className={styles.plusItemTop}>
                  <div className={styles.plusItemInfo}>
                    {t('advantages_block2_button1')}
                  </div>
                </div>
                <div className={styles.plusItemArticle}>
                  <h2 className={styles.plusItemNum}>02</h2>
                  <h3 className={styles.plusItemTitle}>
                    {t('advantages_block2_title')}
                  </h3>
                  <p className={styles.plusItemText}>
                    {t('advantages_block2_subtitle')}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.plusListItem}>
              <div className={styles.plusListItemImg}>
                <img loading='lazy' src="images/plus3.png" alt="plus" />
              </div>
              <div className={styles.plusItemContent}>
                <div className={styles.plusItemTop}>
                  <div className={styles.plusItemInfo}>
                    {t('advantages_block3_button1')}
                  </div>
                </div>
                <div className={styles.plusItemArticle}>
                  <h2 className={styles.plusItemNum}>03</h2>
                  <h3 className={styles.plusItemTitle}>
                    {t('advantages_block3_title')}
                  </h3>
                  <p className={styles.plusItemText}>
                    {t('advantages_block3_subtitle')}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div className={styles.plusSwiper}>
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles.plusListItem}>
                  <div className={styles.plusListItemImg}>
                    <img loading='lazy' src="images/plus1.png" alt="plus" />
                  </div>
                  <div className={styles.plusItemContent}>
                    <div className={styles.plusItemTop}>
                      <div className={styles.plusItemInfo}>
                        {t('advantages_block1_button1')}
                      </div>
                      <div className={`${styles.plusItemInfo} ${styles.active}`}>
                        {t('advantages_block1_button2')}
                      </div>
                    </div>
                    <div className={styles.plusItemArticle}>
                      <h2 className={styles.plusItemNum}>01</h2>
                      <h3 className={styles.plusItemTitle}>
                        {t('advantages_block1_title')}
                      </h3>
                      <p className={styles.plusItemText}>
                        {t('advantages_block1_subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.plusListItem}>
                  <div className={styles.plusListItemImg}>
                    <img loading='lazy' src="images/plus2.png" alt="plus" />
                  </div>
                  <div className={styles.plusItemContent}>
                    <div className={styles.plusItemTop}>
                      <div className={styles.plusItemInfo}>
                        {t('advantages_block2_button1')}
                      </div>
                    </div>
                    <div className={styles.plusItemArticle}>
                      <h2 className={styles.plusItemNum}>02</h2>
                      <h3 className={styles.plusItemTitle}>
                        {t('advantages_block2_title')}
                      </h3>
                      <p className={styles.plusItemText}>
                        {t('advantages_block2_subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.plusListItem}>
                  <div className={styles.plusListItemImg}>
                    <img loading='lazy' src="images/plus3.png" alt="plus" />
                  </div>
                  <div className={styles.plusItemContent}>
                    <div className={styles.plusItemTop}>
                      <div className={styles.plusItemInfo}>
                        {t('advantages_block3_button1')}
                      </div>
                    </div>
                    <div className={styles.plusItemArticle}>
                      <h2 className={styles.plusItemNum}>03</h2>
                      <h3 className={styles.plusItemTitle}>
                        {t('advantages_block3_title')}
                      </h3>
                      <p className={styles.plusItemText}>
                        {t('advantages_block3_subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plus;
