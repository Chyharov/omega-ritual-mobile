import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import s from '../MainHeader/MainHeader.module.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Logo />
        <Link className={s.header__linkBack} to="/">
          <MdOutlineArrowBackIos />Назад
        </Link>
      </div>
    </header>
  );
};

export default Header;
