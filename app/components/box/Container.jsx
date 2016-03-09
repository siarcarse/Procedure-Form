import React from 'react';
import {Grid} from 'react-flexbox-grid/lib';
import {Row, Col} from 'react-materialize';

export default class Layout extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <Grid>
                <Row>
                    <Col {...props} >
                        {children}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
