import { useTranslation } from 'next-i18next';
import { forwardRef } from 'react';
import styles from './Footer.module.scss';

const Footer = forwardRef(({ mainRef, companyRef, productsRef, contactsRef, plusRef, currentBlock, setCurrentBlock }, ref) => {
    const { t } = useTranslation('common');

    const changeBlock = (block) => {
        if (block === 'main' && mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (block === 'company' && companyRef.current) {
            companyRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (block === 'products' && productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (block === 'contacts' && contactsRef.current) {
            contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer ref={ref} className={styles.footer}>
            <div className="container">
                <div id="contacts" className={styles.footerTop}>
                    <div className={styles.footerContact}>
                        <a className={styles.footerContactPhone} href="tel:+998903289788">+998903289788</a>
                        <a className={styles.footerContactAddress} href="#">{t('address')}</a>
                        <ul className={styles.footerContactSocial}>
                            <li>
                                <a href="#">
                                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0432 30.8671C18.0432 30.8671 31.0638 25.383 35.5795 23.452C37.3106 22.6796 43.1812 20.2078 43.1812 20.2078C43.1812 20.2078 45.8907 19.1265 45.6649 21.7527C45.5896 22.8341 44.9875 26.6188 44.3854 30.7126C43.4822 36.5057 42.5038 42.8395 42.5038 42.8395C42.5038 42.8395 42.3533 44.6161 41.0738 44.925C39.7944 45.2339 37.6869 43.8437 37.3106 43.5346C37.0095 43.303 31.6658 39.8271 29.709 38.1278C29.1821 37.6643 28.5801 36.7375 29.7842 35.6561C32.4938 33.1071 35.7301 29.9403 37.6869 27.932C38.5901 27.0051 39.4932 24.8423 35.73 27.4685C30.3864 31.2533 25.1179 34.8064 25.1179 34.8064C25.1179 34.8064 23.9137 35.5788 21.6558 34.8836C19.3978 34.1885 16.7636 33.2616 16.7636 33.2616C16.7636 33.2616 14.9574 32.103 18.0432 30.8671Z" fill="#152040" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6188 46.8156L18.9147 38.2787C17.0631 34.9532 16.4749 31.0726 17.2579 27.349C18.0409 23.6255 20.1426 20.3087 23.1775 18.0073C26.2123 15.7059 29.9767 14.5743 33.7798 14.8202C37.5829 15.066 41.1697 16.6728 43.8819 19.3457C46.5941 22.0186 48.2498 25.5784 48.5453 29.3717C48.8407 33.165 47.7561 36.9374 45.4904 39.9968C43.2246 43.0561 39.9298 45.1971 36.2105 46.027C32.4911 46.8568 28.5968 46.3198 25.2421 44.5144L16.6188 46.8156ZM25.6579 41.3199L26.1912 41.6357C28.6211 43.0736 31.4592 43.6686 34.2631 43.328C37.0671 42.9875 39.6795 41.7305 41.6932 39.7529C43.7069 37.7753 45.0088 35.1883 45.3959 32.3949C45.7831 29.6015 45.2338 26.7588 43.8337 24.3096C42.4336 21.8604 40.2613 19.9424 37.6553 18.8545C35.0493 17.7666 32.156 17.5698 29.4263 18.2949C26.6966 19.02 24.2839 20.6262 22.564 22.8633C20.8442 25.1003 19.9139 27.8424 19.9181 30.6624C19.9158 33.0006 20.5635 35.2936 21.7892 37.2861L22.1236 37.8366L20.8401 42.6013L25.6579 41.3199Z" fill="#152040" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.9881 35.0393L37.1256 32.5393C36.8231 32.4037 36.491 32.3475 36.1608 32.3759C35.8305 32.4043 35.513 32.5165 35.2381 32.7018L32.1006 34.7893C30.1884 33.8605 28.6402 32.3211 27.7006 30.4143L29.7756 27.2393C29.9597 26.9641 30.0721 26.6473 30.1026 26.3177C30.1332 25.9881 30.0809 25.6561 29.9506 25.3518L27.4381 19.4893C27.2628 19.0934 26.9659 18.7637 26.5906 18.5479C26.2152 18.3322 25.7809 18.2416 25.3506 18.2893C23.6626 18.5104 22.1123 19.337 20.988 20.6153C19.8637 21.8937 19.2419 23.5368 19.2381 25.2393C19.2381 35.1643 27.3131 43.2393 37.2381 43.2393C38.9405 43.2355 40.5837 42.6137 41.862 41.4894C43.1404 40.3651 43.967 38.8148 44.1881 37.1268C44.2358 36.6965 44.1452 36.2621 43.9294 35.8868C43.7137 35.5114 43.384 35.2146 42.9881 35.0393Z" fill="#152040" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerCenter}>
                    <div className={styles.footerLogo}>
                        <img loading="lazy" src="images/logo.svg" alt="logo footer" />
                    </div>
                </div>
                <nav className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        <li className={styles.footerNavListItem}>
                            <button onClick={() => changeBlock('main')} className={styles.footerNavListLink}>
                                {t('main')}
                            </button>
                        </li>
                        <li className={styles.footerNavListItem}>
                            <button onClick={() => changeBlock('company')} className={styles.footerNavListLink}>
                                {t('about_us')}
                            </button>
                        </li>
                        <li className={styles.footerNavListItem}>
                            <button onClick={() => changeBlock('products')} className={styles.footerNavListLink}>
                                {t('products')}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
});

export default Footer;
