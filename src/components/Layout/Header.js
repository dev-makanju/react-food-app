import { Fragment } from 'react';
import mealsImage from '../../assets/tomato-g.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
   return (
      <Fragment>
         <header className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
         </header>
         <div className={classes['main-image']}>
            <img src={mealsImage} alt="The background"/>
         </div>
      </Fragment>
   );
}

export default Header;