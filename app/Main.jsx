/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import { teal500 } from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ProcedureForm from './components/form/ProcedureForm.jsx';
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: teal500
    }
});

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
                label='Okey'
                secondary={true}
                onTouchTap={this.handleRequestClose}
                keyboardFocused={true}
            />
        );

        return (
            <Grid>
                <Row center='xs' center='md' around='xs' around='md'>
                    <Col xs={6} sm={6} md={6} lg={6} >
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <div>
                                <Dialog
                                    open={this.state.open}
                                    title='Super Secret Password'
                                    actions={standardActions}
                                    onRequestClose={this.handleRequestClose}
                                    >
                                    <ProcedureForm />
                                </Dialog>
                                <h1>material-ui</h1>
                                <h2>example project</h2>
                                <RaisedButton
                                  label='Hazme Click ctm'
                                  primary={true}
                                  onTouchTap={this.handleTouchTap}
                                />
                            </div>
                        </MuiThemeProvider>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Main;
