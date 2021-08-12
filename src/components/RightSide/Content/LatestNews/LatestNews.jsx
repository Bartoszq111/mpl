import SideBar from "../SideBar/SideBar";

const LatestNews = () => {
  return (
    <>
      <div className="app__rightside__content__latestnews">
        <div className="app__rightside__content__latestnews__title">
          Nowy wygląd?
        </div>
        <img
          src="https://i.imgur.com/kXr7EO0.png"
          className="app__rightside__content__latestnews__image"
          alt="News"
        />
        <div className="app__rightside__content__latestnews__content">
          <p>
            Witajcie gracze i graczki!
            <br />
            <br />
            Jako, iż nasza ekipa robi wszystko ze starannością i dbałością dla
            was, postanowiłem rozpocząć tworzenie nowego stylu launchera!
            <br />
            <br />
            Styl przybrał nazwę "Callipso" i prawdopodobnie do 15-30 dni uda mi
            się stworzyć jego layout.
            <br />
            <br />
            Na obecną chwilę mogę napisać, iż szykuje się pare dodatków w nowym
            wyglądzie, całkowita zmiana stylu oraz pełno eastereggów.
          </p>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default LatestNews;
