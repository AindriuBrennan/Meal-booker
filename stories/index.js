import React from 'react';
import { storiesOf } from '@storybook/react';
import login from '../src/components/login';
import signUp from '../src/components/signUp';
import searchMealForm from '../src/components/searchMeal';

//Login story

storiesOf("Meal Booker/Login", module).add("default", () => (
    <login />
));

storiesOf("Meal Booker/Sign Up", module).add("default", () => (
    <signUp />
));

storiesOf("Meal Booker/Search", module).add("default", () => (
    <searchMealForm />
))