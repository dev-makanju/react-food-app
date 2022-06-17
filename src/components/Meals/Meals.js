import { Fragment } from 'react';

import MealsSumary from './MealsSummary';
import AvailableMeals  from './AvaliableMeals';

const Meals = () => {
    return <Fragment>
       <MealsSumary />
       <AvailableMeals />
    </Fragment>
}

export default Meals