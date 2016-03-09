import React from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import {Row, Col} from 'react-flexbox-grid/lib';
import TreeField from '../field/TreeField.jsx';
export default class ProcedureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeValue: '0-0-0-0-value',
            multipleValue: [],
            controlledDate: new Date(),
            controlledTime: new Date()
        };
    }
    _handleChange = (event, date) => {
        this.setState({
            controlledDate: date
        });
    };
    render() {
        return (
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <DatePicker
                        hintText='Portrait Dialog'
                        value={this.state.controlledDate}
                        onChange={this._handleChange}
                        autoOk={true}
                        disabled={true}
                    />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <TimePicker
                        format='24hr'
                        value={this.state.controlledTime}
                        autoOk={true}
                        disabled={true}
                    />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <TreeField />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <TextField
                        hintText='Hint Text'
                        floatingLabelText='Floating Label Text'
                    />
                </Col>
                <br/>
                <TextField
                    defaultValue='Default Value'
                />
                <br/>
                <TextField
                    hintText='Hint Text'
                    floatingLabelText='Floating Label Text'
                />
                <br/>
                <TextField
                    hintText='Password Field'
                    floatingLabelText='Password'
                    type='password'
                />
                <br/>
                <TextField
                    hintText='MultiLine with rows: 2 and rowsMax: 4'
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                /><br/>
                <TextField
                    hintText='Message Field'
                    floatingLabelText='MultiLine and FloatingLabel'
                    multiLine={true}
                    rows={2}
                />
            </Row>
        );
    }
}
