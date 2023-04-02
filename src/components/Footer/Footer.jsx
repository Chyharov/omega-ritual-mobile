import s from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__container}>
          <a
            href="https://goo.gl/maps/f8b4aQGY6j4d34Gu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={s.footer__title}>
              м.Київ, вул. Колоскова 9 (район Совського кладовища)
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
