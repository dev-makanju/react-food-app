import { useContext , useEffect , useState} from 'react';
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
   const [btnIsHighlited , setBtnIsHighlited] = useState(false)
   const cartCtx = useContext(CartContext)
   const numberOfCartItems = cartCtx.items.reduce((curNumber , item ) => {
      return curNumber + item.amount;
   }, 0); 

   const { items } = cartCtx;

   const btnClasses = `${classes.button} ${ btnIsHighlited ? classes.bump : '' }`;
   useEffect( () => {
      if(items.length === 0){
         return;
      }
      setBtnIsHighlited(true)

      const timer = setTimeout( () => {
         setBtnIsHighlited(false)
      } , 300)


      return () => {
         clearTimeout(timer)
      }
   } , [items])

   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className={classes.icon}></span>
         <span>Your Cart</span>
         <span className={classes.badge }>{numberOfCartItems}</span>
      </button>
   )
}

export default HeaderCartButton;