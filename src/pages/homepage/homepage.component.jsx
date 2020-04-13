import React from 'react';

import Directory from '../../components/directory/directory.component';
import Circle from '../../components/circle/circle.component';

import './homepage.styles.scss';

const options = [
    { value: '6', label: 'Age 6' },
    { value: '7', label: 'Age 7' },
    { value: '8', label: 'Age 8' },
    { value: '9', label: 'Age 9' },
    { value: '10', label: 'Age 10' },
    { value: '11', label: 'Age 11' },
    { value: '12', label: 'Age 12' },
    { value: '13', label: 'Age 13' },
  ];

const HomePage = () => (
    <div className="homepage">
        <Circle key='2' title='Pick the age' size='small' color='home-blue' options={options}/>
    </div>
);

export default HomePage;