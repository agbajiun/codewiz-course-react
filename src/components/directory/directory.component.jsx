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

                },
                {
                  title: 'competitions',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets',
                  color: 'dark-green'
                },
                {
                  title: 'robotics',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers',
                  color: 'purple'
                },
                {
                  title: 'gaming',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                  color: 'orange'
                },
                {
                  title: 'misc',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                  color: 'teal'
                }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({title, id, size, color}) => (
                    <Circle key={id} title={title} size={size} color={color}/>
                ))
                }
            </div>
        );
    }
}

export default Directory;