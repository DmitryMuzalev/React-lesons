import style from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

export default function News(props) {
  if (!props.news.length) {
    const newNews = [
      {
        id: 1,
        logo: './image/adidas__logo.jpg',
        author: 'Adidas',
        date: {
          day: '13 May',
          time: '20:30',
        },
        message: {
          title: 'adidas opened a house of new opportunities',
          text: 'Moscow, Kuznetsky most 7. As many as four floors of sport, innovation and opportunity. Meet our biggest flagship sports store adidas Moscow',
          image: './image/adidas__image.webp',
        },
        likes: 25,
        comments: 18,
        reposts: 15,
        views: 48,
      },
      {
        id: 2,
        logo: './image/adobe__logo.png',
        author: 'Adobe',
        date: {
          day: '1 May',
          time: '18:48',
        },
        message: {
          title: 'Adobe to Host Q&A meeting at Adobe Summit',
          text: 'Together, the two companies are updating the PDF experience and value users have come to expect in Microsoft Edge by powering the built-in PDF reader with the Adobe Acrobat PDF engine. This will give users a unique PDF experience that includes higher fidelity for more accurate colors and graphics, improved performance, strong security for PDF handling and greater accessibility—including better text selection and read-aloud narration. These capabilities will continue to be free of cost.',
          image: './image/adobe__image.jpg',
        },
        likes: 18,
        comments: 5,
        reposts: 10,
        views: 55,
      },
      {
        id: 3,
        logo: './image/bmw__logo.webp',
        author: 'BMW',
        date: {
          day: '25 April',
          time: '12:53',
        },
        message: {
          title:
            '2024 BMW X6 M Competition Comes to Amelia in Frozen Pure Grey',
          text: 'Yet, the 617 horsepower twin-turbo V8 engine is a real highlight for me, especially since it’s a brand new development from BMW M. The S68 engine provides impressive acceleration and power, so no wonder BMW has decided to use that engine in the upcoming BMW M5 as well.',
          image: './image/bmw__image.jpg',
        },
        likes: 25,
        comments: 18,
        reposts: 15,
        views: 80,
      },
    ];
    props.setNews(newNews);
  }

  const newsList = props.news.map((n) => {
    return (
      <NewsItem
        key={n.id}
        id={n.id}
        logo={n.logo}
        author={n.author}
        date={n.date}
        message={n.message}
        likes={n.likes}
        comments={n.comments}
        reposts={n.reposts}
        views={n.views}
      />
    );
  });

  return (
    <div className={style.news}>
      <h2 className={style.news__title}>News</h2>
      <ul className={style.news__list}>{newsList}</ul>
    </div>
  );
}
