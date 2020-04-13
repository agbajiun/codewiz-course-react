import React from 'react';
import {withRouter} from 'react-router-dom';

import '../select/select.component';
import './circle.styles.scss';
import {default as Select} from 'react-select'


//const handleChange = () => ();

const Circle = ({title, imageUrl, size, color, options}) => (
    <div className={`${color} circle`}>
        <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <Select options={options}/>
        </div>
    </div>
    
);

export default Circle;