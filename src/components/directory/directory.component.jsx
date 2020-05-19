import React from 'react';

import Circle from '../circle/circle.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
          sections: [{
            title: 'coding',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats',
            color: 'green',
            name: 'View Course',
            btn: 'button2',
            options: [
              { value: 'aic', label: 'AIC' },
              { value: 'des', label: 'DES' },
              { value: 'ghj', label: 'GHJ' }
            ]
          },
          {
            title: 'competitions',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets',
            color: 'dark-green',
            name: 'View Course',
            btn: 'button3',
            options: [
              { value: 'abd', label: 'ABD' },
              { value: 'dqf', label: 'DQF' },
              { value: 'gzi', label: 'GZI' }
            ]
          },
          {
            title: 'robotics',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers',
            color: 'purple',
            name: 'View Course',
            btn: 'button3',
            options: [
              { value: 'arc', label: 'ARC' },
              { value: 'def', label: 'DEF' },
              { value: 'gyi', label: 'GYI' }
            ]
          },
          {
            title: 'gaming',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
            color: 'orange',
            name: 'View Course',
            btn: 'button4',
            options: [
              { value: 'abc', label: 'ABC' },
              { value: 'def', label: 'DEF' },
              { value: 'ghi', label: 'GHI' }
            ],
            Age: 6,
            courses: [
              {
                title: 'Robotics', 
                value: 'robotics', 
                color: 'purple',
                btn: 'button3',
                options:[
                  { value: 'wedo', label: 'WeDo' }
                ]
              },
              {
                title: 'Competitions', 
                value: 'competitions', 
                color: 'dark-green',
                btn: 'button3',
                options:[
                  { value: 'flljr', label: 'FLL Junior' }
                ]
              },
              {
                title: 'Coding', 
                value: 'coding', 
                color: 'green',
                btn: 'button2',
                options:[
                  { value: 'scratch', label: 'Scratch' }, 
                  { value: 'mobileapps', label: 'Mobile Apps' }
                ]
              }
            ]
          }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                //console.log(this.state.sections)
                this.state.sections.map(({title, id, size, color, options, name, btn}) => (
                    <Circle key={id} title={title} size={size} color={color} options={options} name={name} btn={btn}/>
                ))
                }
            </div>
        );
    }
}

export default Directory;