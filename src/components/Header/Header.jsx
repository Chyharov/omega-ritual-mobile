// import { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import Navigation from '../Navigation/Navigation';
import s from '../Header/Header.module.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  // const [isActive, setIsActive] = useState(false);

  // const isMobile = useMediaQuery({ query: '(max-width: 767.99px)' });
  // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  // const handleScroll = () => {
  //   if (isMobile && window.scrollY > 120 && !isActive) {
  //     setIsActive(true);
  //     return;
  //   }
  //   if (isTablet && window.scrollY > 80 && !isActive) {
  //     setIsActive(true);
  //     return;
  //   }
  //   setIsActive(false);
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);

  //   // eslint-disable-next-line
  // }, []);

  return (
    <header>
      {/* <header className={isActive === true ? s['header--active'] : s.header}> */}
      <div className={'container ' + s.header__container}>
        <Logo />
        {/* <Navigation /> */}
      </div>
    </header>

    // <div className={s.header}>
    //   <img
    //     className={s.header__img}
    //     loading="lazy"
    //     src={logo}
    //     alt="header__img"
    //   />
    //   <div className={s.header__title}>
    //     <h1>ОМЕГА-РИТУАЛ</h1>
    //     <p>похоронний дім</p>
    //   </div>
    // </div>
  );
};

export default Header;
