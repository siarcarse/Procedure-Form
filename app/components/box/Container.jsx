import React from 'react';

export default class Grid extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <div className='container'>
                {children}
            </div>
        );
    }
}
