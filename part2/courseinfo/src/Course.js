import React from 'react';
import { Content } from './Content';
import { Total } from './Total';
import { Header } from './Header';


export const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }