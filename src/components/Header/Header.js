import React from 'react';
import style from './Header.module.css';
import resume from '../../assets/resume.svg';

function Header() {
  return (
    <div className={style.header_container}>
      <div className={style.header_left}>
        <p className={style.header_title}>Free Resume Builder</p>
      </div>
      <div className={style.header_right}>
        <img className={style.header_img} src={resume} alt="resume" />
      </div>
    </div>
  );
}

export default Header;
