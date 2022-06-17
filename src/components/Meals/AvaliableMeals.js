import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItems  from './MealItems/MealItems'

const DUMMY_DATA = [
   {
      id:'m1',
      name:'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id:'m2',
      name:'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id:'m3',
      name:'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id:'m4',
      name:'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id:'m5',
      name:'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   }
]

const AvailableMeals = () => {
   const mealsList = DUMMY_DATA.map( meal => 
      (<MealItems 
         key={meal.id} 
         id={meal.id}
         name={meal.name}
         description={meal.description}
         price={meal.price}
       />)
   );

   return (
      <section className={classes.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
    )
}

export default AvailableMeals;