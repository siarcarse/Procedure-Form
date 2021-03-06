import React from 'react';
import { indigo500 } from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: indigo500
    }
});

export default class StyleIndigo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, ...props } = this.props;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {children}
                </div>
            </MuiThemeProvider>
        );
    }
}
