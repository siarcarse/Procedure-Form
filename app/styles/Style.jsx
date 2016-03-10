import React from 'react';
import * as colors from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

export default class Styles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, color, ...props } = this.props;
        const colorTheme = color || 'teal500';
        const muiTheme = getMuiTheme({
            palette: {
                accent1Color: colors[colorTheme],
                primary1Color: colors.red500,
                alternateTextColor: colors.grey50
            },
            flatButton: {
                color: colors[colorTheme]
            }
        });
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {children}
                </div>
            </MuiThemeProvider>
        );
    }
}
