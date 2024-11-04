import { forwardRef } from 'react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Banner.module.scss';

const Banner = forwardRef(({ }, ref) => {
    const { t } = useTranslation('common'); // Подключаем перевод
    const [currentItem, setCurrentItem] = useState(3);

    const changeItem = (id) => {
        setCurrentItem(id);
    };

    return (
        <section ref={ref} className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <div className={styles.dopText}>{t('exp')}</div> {/* 12 лет на рынке Узбекистана */}
                    <h1>{t('banner_title')}</h1> {/* Сертифицированный производитель ПО и железа */}
                    <p>{t('banner_subtitle')}</p> {/* Мы - компания "Mobile Solutions"... */}
                </div>
                <div className={styles.flexitem}>
                    <div className={styles.item}>
                        <div className={`${styles.imagesitem} ${styles.iconone}`}>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.846 19.7142C20.589 19.7142 24.4296 15.8742 24.4296 11.1428C24.4296 10.8931 24.419 10.6461 24.3982 10.4023L21.8005 12.9971C21.1576 13.6392 20.2862 13.9999 19.3775 13.9999H16.4168C14.5233 13.9999 12.9883 12.4649 12.9883 10.5714V7.61655C12.9883 6.70657 13.35 5.83392 13.9938 5.19082L16.585 2.60255C16.3417 2.58191 16.0952 2.57136 15.846 2.57136C11.103 2.57136 7.26243 6.41133 7.26243 11.1428C7.26243 11.8205 7.34074 12.477 7.48784 13.1049C7.7458 14.2061 7.48414 15.4761 6.57049 16.3887L3.38362 19.572C2.4912 20.4634 2.4912 21.9076 3.38362 22.799L4.19678 23.6113C5.09061 24.5041 6.54086 24.5041 7.4347 23.6113L10.6372 20.4124C11.5461 19.5045 12.8086 19.2419 13.9056 19.4948C14.527 19.638 15.1762 19.7142 15.846 19.7142ZM15.846 21.9999C21.849 21.9999 26.7154 17.139 26.7154 11.1428C26.7154 9.87127 26.4965 8.6508 26.0944 7.51691C25.8372 6.79136 24.9209 6.64954 24.3762 7.19357L20.1852 11.3799C19.9709 11.594 19.6804 11.7142 19.3775 11.7142H16.4168C15.7856 11.7142 15.274 11.2025 15.274 10.5714V7.61655C15.274 7.31322 15.3945 7.02234 15.6092 6.80797L19.7973 2.62449C20.3427 2.07976 20.2007 1.16209 19.474 0.905139C18.3394 0.503963 17.1182 0.285645 15.846 0.285645C9.84307 0.285645 4.97671 5.14655 4.97671 11.1428C4.97671 11.9972 5.07553 12.8287 5.26237 13.6262C5.35853 14.0367 5.25343 14.4736 4.95515 14.7715L1.76828 17.9548C-0.0179735 19.7391 -0.0179758 22.6319 1.76828 24.4162L2.58144 25.2284C4.36769 27.0127 7.26378 27.0127 9.05004 25.2284L12.2525 22.0295C12.5493 21.7331 12.9835 21.6279 13.3922 21.7221C14.1808 21.9039 15.0022 21.9999 15.846 21.9999Z" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.blockitem}>
                            <h6>{t('card1_title')}</h6> {/* Сервис */}
                            <p>{t('card1_subtitle')}</p> {/* Поддержка Програмного обеспечия по всем регионам */}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.imagesitem} ${styles.icontwo}`}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.4778 0.285645H10.5221C9.76813 0.285624 9.12725 0.285606 8.5977 0.333554C8.03676 0.384343 7.50785 0.49486 7.0008 0.77005C6.24646 1.17945 5.58379 1.90222 5.24124 2.68917C4.94293 3.37448 4.9104 4.09879 4.95714 4.92225C4.24452 4.79499 3.49892 4.86176 2.84499 5.08505C1.4803 5.55104 0.285721 6.7704 0.285721 8.66659C0.285721 10.4584 1.35389 12.0869 2.742 13.2189C3.91468 14.1753 5.42618 14.8749 7.03292 15.0805C7.22678 15.5405 7.43425 15.9781 7.65559 16.3914C8.47912 17.9292 9.53617 19.1941 10.839 19.9803C10.8012 20.613 10.7091 21.0443 10.606 21.3462C10.4784 21.7197 10.3201 21.9377 10.1486 22.1292C10.0783 22.2078 10.018 22.2692 9.94327 22.3454C9.90389 22.3855 9.86043 22.4298 9.80943 22.4828C9.67986 22.6174 9.5177 22.793 9.36938 23.0097C9.04023 23.4906 8.85715 24.0576 8.85715 24.8L8.85716 26.5714C8.85717 27.2026 9.36884 27.7142 10 27.7142H18C18.6312 27.7142 19.1428 27.2026 19.1428 26.5714L19.1429 24.7999C19.1429 24.0576 18.9598 23.4906 18.6306 23.0097C18.4823 22.793 18.3201 22.6174 18.1906 22.4828C18.1396 22.4298 18.0962 22.3856 18.0568 22.3454C17.9821 22.2693 17.9217 22.2078 17.8514 22.1292C17.6799 21.9377 17.5216 21.7197 17.394 21.3462C17.2909 21.0443 17.1988 20.613 17.161 19.9802C18.4638 19.194 19.5208 17.9291 20.3443 16.3914C20.5656 15.9781 20.7731 15.5405 20.9669 15.0806C22.5737 14.8749 24.0853 14.1753 25.258 13.2189C26.6461 12.0869 27.7143 10.4584 27.7143 8.66659C27.7143 6.7704 26.5197 5.55104 25.155 5.08505C24.501 4.86175 23.7554 4.79498 23.0427 4.92227C23.0894 4.09881 23.0569 3.37448 22.7586 2.68917C22.4161 1.90222 21.7534 1.17945 20.999 0.77005C20.492 0.49486 19.9631 0.384343 19.4022 0.333554C18.8726 0.285606 18.2317 0.285624 17.4778 0.285645ZM14.9413 20.7873C14.6371 20.8333 14.3234 20.8571 13.9999 20.8571C13.6766 20.8571 13.3629 20.8333 13.0587 20.7873C12.9953 21.2819 12.8974 21.7092 12.769 22.085C12.5216 22.8094 12.1799 23.2872 11.8514 23.654C11.7451 23.7727 11.6258 23.8944 11.5361 23.986C11.5055 24.0172 11.4783 24.045 11.4562 24.0679C11.3514 24.1768 11.2948 24.2434 11.2556 24.3006C11.2098 24.3676 11.1429 24.4757 11.1429 24.7999L11.1429 25.4285H16.8571L16.8571 24.8C16.8571 24.4757 16.7902 24.3676 16.7444 24.3006C16.7052 24.2434 16.6486 24.1768 16.5438 24.0679C16.5361 24.0599 16.5278 24.0513 16.5189 24.0422C16.5023 24.0252 16.4838 24.0063 16.4639 23.986C16.3742 23.8944 16.2549 23.7727 16.1486 23.654C15.8201 23.2872 15.4784 22.8094 15.231 22.085C15.1027 21.7092 15.0047 21.2819 14.9413 20.7873ZM23.8134 11.4476C23.2402 11.9151 22.563 12.2933 21.8421 12.5397C22.2735 10.9952 22.5933 9.29033 22.8078 7.47441C23.0937 7.18851 23.7458 7.01915 24.4164 7.24814C25.0041 7.44881 25.4286 7.8961 25.4286 8.66659C25.4286 9.54148 24.8777 10.5796 23.8134 11.4476ZM6.15778 12.5397C5.72635 10.9952 5.40659 9.2904 5.19206 7.47456C4.90616 7.18866 4.25422 7.01915 3.58359 7.24814C2.99591 7.44881 2.57143 7.8961 2.57143 8.66659C2.57143 9.54148 3.12231 10.5796 4.18658 11.4476C4.75978 11.915 5.43689 12.2932 6.15778 12.5397ZM8.09111 2.77896C8.22158 2.70815 8.40941 2.64567 8.80381 2.60996C9.21808 2.57245 9.75479 2.57136 10.5714 2.57136H17.4285C18.2451 2.57136 18.7818 2.57245 19.196 2.60996C19.5904 2.64567 19.7783 2.70815 19.9087 2.77896C20.215 2.94518 20.5238 3.28194 20.6628 3.60144C20.8099 3.93927 20.8086 4.32167 20.6718 5.89626C20.331 9.81725 19.528 13.074 18.3293 15.3123C17.1357 17.5411 15.6721 18.5714 13.9999 18.5714C12.3277 18.5714 10.8641 17.5411 9.67054 15.3123C8.4718 13.074 7.66883 9.81725 7.32806 5.89626C7.19122 4.32167 7.18995 3.93927 7.33701 3.60144C7.47608 3.28194 7.78484 2.94518 8.09111 2.77896Z" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.blockitem}>
                            <h6>{t('card2_title')}</h6> {/* Высокое качество */}
                            <p>{t('card2_subtitle')}</p> {/* Надежное оборудование международного уровня */}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={`${styles.imagesitemlast} ${styles.iconthree}`}>
                            <img loading="lazy" src="images/logo-clients.png" alt="" />
                        </div>
                        <div className={styles.blockitem}>
                            <h6>{t('card3_title')}</h6> {/* 2000+ */}
                            <p>{t('card3_subtitle')}</p> {/* Довольных партнеров */}
                        </div>
                    </div>
                </div>
                <div className={`${styles.flexitem} ${styles.flexitemMob}`}>
                    <div
                        onClick={() => changeItem(1)}
                        className={`${styles.item} ${currentItem == 1 ? styles.active : ''}`}
                    >
                        <div className={styles.itemHeader}>
                            <h3>{t('card1_title')}</h3> {/* Сервис */}
                            <div className={styles.itemHeaderIcon}>
                                <svg
                                    className={styles.plus}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 4C14.5523 4 15 4.44772 15 5V13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H15V23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23V15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H13V5C13 4.44772 13.4477 4 14 4Z"
                                        fill="#8E9FB9"
                                    />
                                </svg>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23 13H15H5C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H15H23C23.5523 15 24 14.5523 24 14C24 13.4477 23.5523 13 23 13Z"
                                        fill="#152040"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.blockitem}>
                                <p>{t('card1_subtitle')}</p> {/* Поддержка Програмного обеспечия 24/7 */}
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => changeItem(2)}
                        className={`${styles.item} ${styles.itemSecond} ${currentItem == 2 ? styles.active : ''}`}
                    >
                        <div className={styles.itemHeader}>
                            <h3>{t('card2_title')}</h3> {/* Высокое качество */}
                            <div className={styles.itemHeaderIcon}>
                                <svg
                                    className={styles.plus}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 4C14.5523 4 15 4.44772 15 5V13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H15V23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23V15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H13V5C13 4.44772 13.4477 4 14 4Z"
                                        fill="#8E9FB9"
                                    />
                                </svg>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23 13H15H5C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H15H23C23.5523 15 24 14.5523 24 14C24 13.4477 23.5523 13 23 13Z"
                                        fill="#152040"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.blockitem}>
                                <p>{t('card2_subtitle')}</p> {/* Надежное оборудование международного уровня */}
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => changeItem(3)}
                        className={`${styles.item} ${styles.itemLast} ${currentItem == 3 ? styles.active : ''}`}
                    >
                        <div className={styles.itemHeader}>
                            <h3>{t('partners')}</h3> {/* 2000+ */}
                            <div className={styles.itemHeaderIcon}>
                                <svg
                                    className={styles.plus}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 4C14.5523 4 15 4.44772 15 5V13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H15V23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23V15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H13V5C13 4.44772 13.4477 4 14 4Z"
                                        fill="#8E9FB9"
                                    />
                                </svg>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23 13H15H5C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H15H23C23.5523 15 24 14.5523 24 14C24 13.4477 23.5523 13 23 13Z"
                                        fill="#152040"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.itemContent}>
                            <div className={`${styles.imagesitemlast} ${styles.iconthree}`}>
                                <img loading="lazy" src="images/logo-clients.png" alt="" />
                            </div>
                            <div className={styles.blockitem}>
                                <h6>{t('card3_title')}</h6> {/* 2000+ */}
                                <p className={styles.other}>{t('card3_subtitle')}</p> {/* Довольных партнеров */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomIcon}>
                        <svg className={styles.bottomIconArrow} width="8" height="55" viewBox="0 0 8 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.44127 0H3.44127V48.25H0.0441589L3.94127 55L7.83839 48.25H4.44127V0Z" fill="black" />
                        </svg>
                        <svg className={styles.bottomIconSquare} width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-1.24873" y="23" width="35" height="35" rx="5.5" transform="rotate(-45 -1.24873 23)" stroke="url(#paint0_diamond_312_29)" />
                            <defs>
                                <radialGradient id="paint0_diamond_312_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.4584 21.9706) rotate(88.2101) scale(45.2769)">
                                    <stop stopColor="#50DD3D" />
                                    <stop offset="1" stopColor="#0F7D00" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <h3>{t('scroll')}</h3> {/* Проскрольте чтобы увидеть больше */}
                </div>
            </div>
        </section>
    );
});

export default Banner;