import classes from './MealsSummary.module.css';
import React from 'react'

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals and enjoy delicious food delivered to your door.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary
