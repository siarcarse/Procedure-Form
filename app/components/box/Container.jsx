import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

export default class Container extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <Grid>
                <Row center='md' center='xs'>
                    <Col type='container' {...props} >
                        {children}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
