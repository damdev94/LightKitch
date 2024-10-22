export const getCardsData = (t) => [
  {
    number: '1',
    backgroundColor: "rgb(255, 186, 0)",
    imageUrl: 'url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984570/LightKitch/whatis_edtjd5.png)',
    textTitle: (
      <>
        <h2>{t('cardsData.0.textTitle.0')} <strong>{t('cardsData.0.textTitle.1.strong')}</strong></h2>
      </>
    ),
    text: (
      <>
        <p>{t('cardsData.0.text.0.0')}</p>
        <br />
        <p>{t('cardsData.0.text.1.0')}</p>
      </>
    ),
    backgroundSize: 'cover',
  },
  {
    number: '2',
    backgroundColor: "rgba(169, 174, 202, 1)",
    imageUrl: 'url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/9059760-scaled_legyuv.jpg)',
    textTitle: (
      <>
        <h2>{t('cardsData.1.textTitle.0')} <strong>{t('cardsData.1.textTitle.1.strong')}</strong></h2>
      </>
    ),
    text: (
      <>
        <p>{t('cardsData.1.text.0.0')}</p>
      </>
    ),
    backgroundSize: 'contain',
  },
  {
    number: '3',
    backgroundColor: "rgba(199, 206, 102, 1)",
    imageUrl: 'url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/4267558-scaled_kigrhz.jpg)',
    textTitle: (
      <>
        <h2>{t('cardsData.2.textTitle.0')} <strong>{t('cardsData.2.textTitle.1.strong')}</strong> {t('cardsData.2.textTitle.2')} <strong>cuisines virtuelles?</strong></h2>
      </>
    ),
    text: (
      <>
        <p>{t('cardsData.2.text.0.0')}</p>
      </>
    ),
    backgroundSize: '60%',
    rotateBackground: true,
  },
  {
    number: '4',
    backgroundColor: "rgba(63, 173, 192, 1)",
    imageUrl: 'url(https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/1234_uqtwrf.png)',
    textTitle: (
      <>
        <h2>{t('cardsData.3.textTitle.0')} <strong>{t('cardsData.3.textTitle.1.strong')}</strong> {t('cardsData.3.textTitle.2')}</h2>
      </>
    ),
    text: (
      <>
        <p>{t('cardsData.3.text.0.0')}</p>
        <br />
        <p>{t('cardsData.3.text.1.0')}</p>
      </>
    ),
    backgroundSize: 'cover',
  },
];

export const getArticlesData = (t) => [
  {
    id: 1,
    title: t('articles.0.title'),
    author: t('articles.0.author'),
    category: t('articles.0.category'),
    image: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1728907319/LightKitch/article1_s7har4.jpg',
    date: t('articles.0.date'),
    text: (
      <>
        <p>
          {t('articles.0.content.0.text')} <strong>{t('articles.0.content.0.strong')}</strong> {t('articles.0.content.0.text2')} <strong>{t('articles.0.content.0.strong2')}</strong> {t('articles.0.content.0.text3')}
        </p>
        <br />

        <h3>{t('articles.0.content.1.title')}</h3>
        <p>
          {t('articles.0.content.1.content.text')} <strong>{t('articles.0.content.1.content.strong')}</strong>, {t('articles.0.content.1.content.text2')} <em>{t('articles.0.content.1.content.em')}</em>, {t('articles.0.content.1.content.text3')}
        </p>
        <br />

        <p>
          {t('articles.0.content.2.text')}
        </p>
        <br />

        <h3>{t('articles.0.content.3.title')}</h3>
        <br />
        <p>
          {t('articles.0.content.3.text')}
        </p>
        <br />

        <h3>{t('articles.0.content.4.title')}</h3>
        <br />
        <p>
          {t('articles.0.content.4.content.0.text')}
        </p>
        <p>
          {t('articles.0.content.4.content.1.text')}
        </p>
        <br />

        <h3>{t('articles.0.content.5.title')}</h3>
        <br />
        <p>
          {t('articles.0.content.5.text')}
        </p>
        <br />

        <p><strong>{t('articles.0.content.6.strong')}</strong></p>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: t('articles.1.title'),
    author: t('articles.1.author'),
    category: t('articles.1.category'),
    image: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984559/LightKitch/124428-1-400x250_utowjg.jpg',
    date: t('articles.1.date'),
    text: (
      <>
        <p>
          {t('articles.1.content.0.text')}
        </p>

        <br />

        <h3>{t('articles.1.content.1.title')}</h3>
        <p>
          {t('articles.1.content.1.text')}
        </p>

        <br />

        <h3>{t('articles.1.content.2.title')}</h3>
        <p>
          {t('articles.1.content.2.text')}
        </p>

        <br />

        <h3>{t('articles.1.content.3.title')}</h3>
        <p>
          {t('articles.1.content.3.text')}
        </p>

        <br />

        <h3>{t('articles.1.content.4.title')}</h3>
        <p>
          {t('articles.1.content.4.text')}
        </p>

        <br />

        <p>
          {t('articles.1.content.5.text')}
        </p>

        <br />

        <h3>{t('articles.1.content.6.title')}</h3>
        <p>
          {t('articles.1.content.6.text')}
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: t('articles.2.title'),
    author: t('articles.2.author'),
    category: t('articles.2.category'),
    image: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1727984560/LightKitch/2149255928-1-400x250_jri2zw.jpg',
    date: t('articles.2.date'),
    text: (
      <>
        <p>
          {t('articles.2.content.0.text')}
          <strong>{t('articles.2.content.0.strong')}</strong>
          {t('articles.2.content.0.text2')}
          <strong>{t('articles.2.content.0.strong2')}</strong>
          {t('articles.2.content.0.text3')}
          <strong>{t('articles.2.content.0.strong3')}</strong>
          {t('articles.2.content.0.text4')}
          <strong>{t('articles.2.content.0.strong4')}</strong>
          {t('articles.2.content.0.text5')}
        </p>

        <br/>

        <p>
          {t('articles.2.content.1.text')}
        </p>

        <br/>

        <h3>{t('articles.2.content.2.title')}</h3>
        <p>
          {t('articles.2.content.2.content.text')}
          <strong>{t('articles.2.content.2.content.strong')}</strong>
          {t('articles.2.content.2.content.text2')}
          <strong>{t('articles.2.content.2.content.strong2')}</strong>
          {t('articles.2.content.2.content.text3')}
          <strong>{t('articles.2.content.2.content.strong3')}</strong>
          {t('articles.2.content.2.content.text4')}
        </p>

        <br/>

        <h3>{t('articles.2.content.3.title')}</h3>
        <p>
          {t('articles.2.content.3.text')}
        </p>

        <br/>

        <h3>{t('articles.2.content.4.title')}</h3>
        <p>
          {t('articles.2.content.4.text')}
        </p>

        <br/>

        <h3>{t('articles.2.content.5.title')}</h3>
        <p>
          {t('articles.2.content.5.text')}
        </p>
      </>
    ),
  },
];

export const getIntegrationSteps = (t, langageCode) => [

  {
    number: "1",
    text: <>
      {t('integration_section.steps.0.text.0')} <strong>{t('integration_section.steps.0.text.1.strong')}</strong> {t('integration_section.steps.0.text.2')}
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "20vw",
    left: "7.5vw"
  },
  {
    number: "2",
    text: <>
      {t('integration_section.steps.1.text.0')} <strong>{t('integration_section.steps.1.text.1.strong')}</strong> {t('integration_section.steps.1.text.2')} <strong>{t('integration_section.steps.1.text.3.strong')}</strong>
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "30vw",
    left: "30.5vw"
  },
  {
    number: "3",
    text: <>
      {t('integration_section.steps.2.text.0')} <strong>{t('integration_section.steps.2.text.1.strong')}</strong> {t('integration_section.steps.2.text.2')}
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "41.5vw",
    left: "55vw"
  },
  {
    number: "4",
    text: <>
      {t('integration_section.steps.3.text.0')} <strong>{t('integration_section.steps.3.text.1.strong')}</strong>
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "51vw",
    left: "38.5vw"
  },
  {
    number: "5",
    text: <>
      {t('integration_section.steps.4.text.0')} <strong>{t('integration_section.steps.4.text.1.strong')}</strong> {t('integration_section.steps.4.text.2')}
    </>,
    textSide: langageCode === 'ar' ? true : false,
    top: "63.5vw",
    left: "35vw"
  },
  {
    number: "6",
    text: <>
      {t('integration_section.steps.5.text.0')} <strong>{t('integration_section.steps.5.text.1.strong')}</strong>
    </>,
    textSide: langageCode === 'ar' ? true : false,
    top: "74vw",
    left: "57.5vw"
  },
  {
    number: "7",
    text: <>
      <strong>{t('integration_section.steps.6.text.0.strong')}</strong> {t('integration_section.steps.6.text.1')}
    </>,
    textSide: langageCode === 'ar' ? true : false,
    top: "85vw",
    left: "57.5vw"
  },
  {
    number: "8",
    text: <>
      {t('integration_section.steps.7.text.0')} <strong>{t('integration_section.steps.7.text.1.strong')}</strong> {t('integration_section.steps.7.text.2')} <strong>{t('integration_section.steps.7.text.3.strong')}</strong> {t('integration_section.steps.7.text.4')}
    </>,
    textSide: langageCode === 'ar' ? true : false,
    top: "95vw",
    left: "57.5%"
  },
  {
    number: "9",
    text: <>
      <strong>{t('integration_section.steps.8.text.0.strong')}</strong> {t('integration_section.steps.8.text.1')} <strong>{t('integration_section.steps.8.text.2.strong')}</strong>
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "104vw",
    left: "58vw"
  },
  {
    number: "10",
    text: <>
      <strong>{t('integration_section.steps.9.text.0.strong')}</strong> {t('integration_section.steps.9.text.1')}
    </>,
    textSide: langageCode === 'ar' ? false : true,
    top: "114vw",
    left: "46vw"
  }
];
