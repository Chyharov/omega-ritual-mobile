import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__container}>
          <h1 className={s.hero__title}>СКЛАД-МАГАЗИН РИТУАЛЬНОЇ АТРИБУТИКИ</h1>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
