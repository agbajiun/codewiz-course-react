import React from 'react';
import {useHistory} from 'react-router-dom';

import '../select/select.component';
import '../button/button.component';
import './circle.styles.scss';
import {default as Select} from 'react-select';
import Button from '../button/button.component';

class Circle extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            selectedOption: null,
        };
        this.handleChange = selectedOption => {
            this.setState({ selectedOption });
            console.log(`Option selected:`, selectedOption.value);
        };
        
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className={`${this.props.color} circle`}>
                <div className="content">
                    <h2 className="title">{this.props.title.toUpperCase()}</h2>
                    <Select value={selectedOption} options={this.props.options} onChange={this.handleChange}/>
                    <Button url={this.props.url} name={this.props.name} btn={this.props.btn}/>
                </div>
            </div>  
        );
    }
}


// const Circle = ({title, size, color, options}) => (
//     <div className={`${color} circle`}>
//         <div className="content">
//             <h2 className="title">{title.toUpperCase()}</h2>
//             <Select options={options}/>
//             <input type="submit" value="Submit" />
//         </div>
//     </div>
    
// );
export default Circle;