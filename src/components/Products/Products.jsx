import { forwardRef, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

const products = [
  [
    {
      name: {
        uz: 'Dasturiy ta\'minotli СУО iQueue',
        en: 'System Terminal iQueue with Software',
        ru: 'СУО iQueue c ПО'
      },
      desc: {
        uz: '23.8 dyuymli sensorli ekranga ega tizim terminali. "iQueue" QMS dasturi navbat moduli, virtual operatorlar va statistikani o\'z ichiga oladi.',
        en: 'System terminal with a 23.8” touchscreen in a floor-standing design. QMS iQueue software with a built-in queue module, virtual operators, and statistics.',
        ru: 'Cистемный терминал с сенсорным экраном 23.8” в напольном исполнении. ПО QMS “iQueue” со встроенным модулем очереди, виртуальных операторов и статистики.'
      },
      img: 'images/products/item4.png',
      featureOne: 'Быстрый доступ к информации',
      featureTwo: 'Оценка качества обслуживания по QR-коду'
    },
    {
      name: {
        uz: 'Dasturiy ta\'minotli СУО QMS iQ 2',
        en: 'System Terminal QMS iQ 2 with Software',
        ru: 'СУО QMS iQ 2 с ПО'
      },
      desc: {
        uz: '23.8 dyuymli sensorli ekranga ega tizim terminali. "iQueue" QMS dasturi navbat moduli, virtual operatorlar va statistikani o\'z ichiga oladi.',
        en: 'System terminal with a 23.8” touchscreen in a floor-standing design. QMS iQueue software with a built-in queue module, virtual operators, and statistics.',
        ru: 'Cистемный терминал с сенсорным экраном 23.8”  в напольном исполнении. ПО QMS “iQueue” со встроенным модулем очереди, виртуальных операторов и статистики.'
      },
      img: 'images/products/item5.png'
    },
    {
      name: {
        uz: 'Axborot kioski',
        en: 'Information Kiosk',
        ru: 'Информационный киоск'
      },
      desc: {
        uz: 'Ma\'lumot olish uchun avtomatlashtirilgan dasturiy-apparat majmuasi. Xizmat ko\'rsatish sifatini baholash uchun QR dasturini ulash mumkin.',
        en: 'Automated hardware and software complex for providing reference information. QR service quality assessment software can be connected.',
        ru: 'Автоматизированный программно-аппаратный комплекс для предоставления справочной информации. Возможно подключение ПО QR оценки качества обслуживания.'
      },
      img: 'images/products/item7.png'
    },
    {
      name: {
        uz: 'Dasturiy ta\'minotli СУО iQ 3',
        en: 'System Terminal iQ 3 with Software',
        ru: 'СУО iQ 3 c ПО'
      },
      desc: {
        uz: '15 dyuymli sensorli ekranga ega tizim terminali. "iQueue" QMS dasturi navbat moduli, virtual operatorlar va statistikani o\'z ichiga oladi.',
        en: 'System terminal with a 15” touchscreen in a floor-standing design. QMS iQueue software with a built-in queue module, virtual operators, and statistics.',
        ru: 'Cистемный терминал с сенсорным экраном 15,0” в напольном исполнении. ПО QMS “iQueue” со встроенным модулем очереди, виртуальных операторов и статистики.'
      },
      img: 'images/products/item6.png'
    },
    {
      name: {
        uz: 'Xizmat ko\'rsatish sifatini baholash iQueue',
        en: 'Service Quality Assessment iQueue',
        ru: 'Оценка качества обслуживания iQueue'
      },
      desc: {
        uz: 'Xizmat ko\'rsatish sifatini baholash uchun maxsus moduli — Customer Satisfaction Index iQueue.',
        en: 'Individual module for measuring customer satisfaction index (Customer Satisfaction Index iQueue).',
        ru: 'Индивидуальный модуль для замера индекса удовлетворенности качеством обслуживания — Customer Satisfaction Index iQueue.'
      },
      img: 'images/products/item10.png'
    },
  ],
  [
    {
      name: {
        uz: 'Xizmat sifatini baholash pulti',
        en: 'Service Quality Assessment Console',
        ru: 'Пульт оценки качества обслуживания'
      },
      desc: {
        uz: 'Stol usti xizmat ko\'rsatish sifatini baholash pulti. Moslashtiriladigan sensorli ekran.',
        en: 'Desktop service quality assessment console. Customizable touchscreen.',
        ru: 'Настольный пульт оценки качества обслуживания планшетного типа. Интерактивный настраиваемый сенсорный экран.'
      },
      img: 'images/products/item3.png'
    },
    {
      name: {
        uz: 'Xizmat ko\'rsatish sifatini baholash iQueue',
        en: 'Service Quality Assessment iQueue',
        ru: 'Оценка качества обслуживания iQueue'
      },
      desc: {
        uz: 'Xizmat ko\'rsatish sifatini baholash uchun maxsus moduli — Customer Satisfaction Index iQueue. Sensorli ekran.',
        en: 'Individual module for measuring customer satisfaction index — Customer Satisfaction Index iQueue. Touchscreen.',
        ru: 'Индивидуальный модуль для замера индекса удовлетворенности качеством обслуживания — Customer Satisfaction Index iQueue. Сенсорный экран.'
      },
      img: 'images/products/item9.png'
    },
    {
      name: {
        uz: 'Xizmat ko\'rsatish sifatini baholash pulti QMS iQ',
        en: 'Service Quality Assessment Console QMS iQ',
        ru: 'Пульт оценки качества обслуживания QMS iQ'
      },
      desc: {
        uz: '7 dyuymli displeyli stol usti yoki polga o\'rnatiladigan xizmat ko\'rsatish pulti.',
        en: 'Desktop or floor-standing service quality assessment console with a 7” display.',
        ru: 'Настольный пульт оценки качества обслуживания. Информационный дисплей с диагональю 7” в настольном и напольном исполнении.'
      },
      img: 'images/products/item11.png'
    },
    {
      name: {
        uz: 'To\'rt raqamli operator tablosi',
        en: 'Four-Digit Operator Display',
        ru: 'Четырехзначное табло оператора'
      },
      desc: {
        uz: 'Asosiy tabloda ko\'rsatilgan mijoz haqida ma\'lumotni ko\'rsatish uchun qurilma.',
        en: 'A device for duplicating the information of the main display for a specific called client.',
        ru: 'Устройство, позволяющее продублировать информацию главного табло по конкретному вызванному клиенту.'
      },
      img: 'images/products/item13.png'
    }
  ],
  [
    {
      name: {
        uz: 'Asosiy LED axborot tablosi',
        en: 'Main LED Information Display',
        ru: 'Главное информационное табло LЕD'
      },
      desc: {
        uz: 'Navbatning joriy holatini ko\'rsatish uchun kutish zonasida joylashgan qurilma. Mijozni vizual va ovozli chaqirish.',
        en: 'A device located in the waiting area for displaying the current status of the queue. Visual and sound client call.',
        ru: 'Устройство, находящееся в зоне ожидания и применяемое для отображения текущего состояния очереди. Визуальный и звуковой вызов клиента.'
      },
      img: 'images/products/item8.png'
    },
    {
      name: {
        uz: 'Mobil ilova',
        en: 'Mobile Application',
        ru: 'Мобильное приложение'
      },
      desc: {
        uz: 'Bizning navbat tizimimiz o\'rnatilgan muassasada navbatni bron qilish uchun mobil ilova. Buyurtmachi sayti bilan sinxronlashadi.',
        en: 'Mobile application for booking a queue in an institution where our systems are installed. Synchronizes with the customer’s website.',
        ru: 'Мобильное приложение для бронирования очереди в учреждение, где установлены наши СУО. Синхронизируется с сайтом Заказчика.'
      },
      img: 'images/products/item12.png'
    },
    {
      name: {
        uz: 'Virtual mijoz chaqirish pulti',
        en: 'Virtual Client Call Console',
        ru: 'Виртуальный пульт вызова клиента'
      },
      desc: {
        uz: 'Navbatdagi mijozni chaqirish, boshqa operatorga yo\'naltirish yoki xizmatni yakunlash uchun ishlatiladi.',
        en: 'Used for calling a client from the queue, redirecting the client to another operator, or completing the service.',
        ru: 'Применяется для вызова клиента из очереди, позволяет перенаправить клиента к другому оператору или завершить обслуживание.'
      },
      img: 'images/products/item15.jpg'
    }
  ]
];

const categories = [
  { label: 'ruller_one', translationKey: 'ruller_one' },
  { label: 'ruller_two', translationKey: 'ruller_two' },
  { label: 'ruller_three', translationKey: 'ruller_three' }
];

import styles from './Products.module.scss';

const Products = forwardRef(({ }, ref) => {
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeLine, setActiveLine] = useState(0);

  const activeProducts = products[activeLine];

  return (
    <section ref={ref} className={styles.products}>
      <div className="container">

        <h3 className={styles.productsTitle}>
          {t('our_products')}
        </h3>
        <p className={styles.productsText}> {t('they_trust_us_subtitle')}</p>
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
      <div className="container">
        <div className={styles.productsContent}>
          <ul className={styles.productsList}>
            {activeProducts.map((product, index) => (
              <li key={index} className={styles.productsItem}>
                <div className={styles.productsItemImg}>
                  <img
                    loading="lazy"
                    src={product.img}
                    alt={product.name[currentLang]}
                  />
                </div>
                <h3 className={styles.productsItemTitle}>{product.name[currentLang]}</h3>
                <p className={styles.productsItemText}>{product.desc[currentLang]}</p>
                <ul className={styles.productsItemList}>
                  <li>{product.featureOne}</li>
                  <li>{product.featureTwo}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section >
  )
});

export default Products