import classes from './MealsSummary.module.css'

const MealsSummary =  () => {
   return (
      <section className={classes.summary}>
         <h2>Delicious Foods , Delivered to You</h2>
         <p>
            choose your favourite meal from our broad selection of available meals 
            and enjoys a deliocious lunch at home
         </p>
         <p>
            All our meals are cooked with high quality ingrdient, 
            just in time and course by expirience chefs 
         </p>
      </section>
   );
}

export default MealsSummary;