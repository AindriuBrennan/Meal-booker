import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from '../src/components/login';
import SignUp from '../src/components/signUp';
import SearchMealForm from '../src/components/searchMeal';


//Login story

storiesOf("Meal Booker/Login", module).add("default", () => (
    <Login />
));

storiesOf("Meal Booker/Sign Up", module).add("default", () => (
    <SignUp />
));

storiesOf("Meal Booker/Search", module).add("default", () => (
    <SearchMealForm />
));

