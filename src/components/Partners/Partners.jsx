import { useTranslation } from 'next-i18next';
import styles from './Partners.module.scss';

const Partners = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.partners}>
      <div className="container">
        <h3 className={styles.partnersTitle}>
          {t('they_trust_us_title')}
        </h3>
        <p className={styles.partnersText}>
          {t('they_trust_us_subtitle')}
        </p>
        <ul className={styles.partnersList}>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.04.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.30.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.33.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.37.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.41.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.45.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.48.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.55.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.17.59.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.18.03.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.18.07.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/2024-10-15 12.18.10.jpg" />
          </li>
          <li className={styles.partnersListItem}>
            <img className={styles.partnersListImage} src="images/partners/Screenshot_2023_09_13_15_30_49_031_org_telegram_messenger_edit_removebg.png" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Partners;
