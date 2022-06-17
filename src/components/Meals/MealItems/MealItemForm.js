import { useRef , useState } from 'react'
import classes from './MealItemsForm.module.css'
import Input from '../../UI/Input'

const MealItemsForm = props => {
   const [ amountIsValid , SetAmountIsValid ] =  useState(true);
   const amountInputRef =  useRef();

   const submitHandler = event => {
      event.preventDefault()
      
      //get ref value
      const enteredAmount = amountInputRef.current.value;
      //convert it from deafualt string to number
      const enteredValueNumber = +enteredAmount

      if(enteredAmount.trim().lenght === 0 || 
         enteredValueNumber < 1 || 
         enteredValueNumber > 5)
      {
         SetAmountIsValid(false); 
         return
      }
      
      props.onAddToCart(enteredValueNumber)
   }
           
    return (
       <form className={classes.form} onSubmit={submitHandler}>
         <Input 
            ref={amountInputRef}
            label="Amout" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
         }}
         />
         <button>+ Add</button>
         {!amountIsValid && <p>Please entrer a valid amount (1-5).</p>}
       </form>
    )
}

export default MealItemsForm