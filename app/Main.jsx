/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import { indigo500 } from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import {Row, Col} from 'react-flexbox-grid/lib';
import Grid from './components/box/Container.jsx';
import ProcedureForm from './components/form/ProcedureForm.jsx';
import CardPanel from './components/box/Card.jsx';
import Styles from './styles/Style.jsx';

const styles = {
    Dialog: {
        backgroundColor: indigo500,
        color: 'white'
    }
};
class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false
        };
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    handleTouchTap() {
        this.setState({
            open: true
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label='Cancelar'
                secondary={true}
                onTouchTap={this.handleRequestClose}
                keyboardFocused={true}
            />
        );

        return (
            <Grid>
                <Row center='xs' center='md' around='xs' around='md'>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <Styles color='indigo500'>
                            <Dialog
                                open={this.state.open}
                                titleStyle = {styles.Dialog}
                                title='Ingreso de Procedimientos'
                                actions={standardActions}
                                onRequestClose={this.handleRequestClose}
                                >
                                <CardPanel
                                    title='Formulario de ingreso'
                                    subtitle='Procedimientos'
                                >
                                    <ProcedureForm />
                                </CardPanel>
                            </Dialog>
                            <h1>material-ui</h1>
                            <h2>example project</h2>
                            <RaisedButton
                              label='Hazme Click ctm'
                              primary={true}
                              onTouchTap={this.handleTouchTap}
                            />
                        </Styles>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Main;
