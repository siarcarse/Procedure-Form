import 'rc-tree-select/assets/index.css';
import React from 'react';
import TreeSelect from 'rc-tree-select';
import { gData } from 'rc-tree-select/lib/util.js';
import './Tree.css';

const TreeField = React.createClass({
    getInitialState() {
        return {
            value: '0-0-0-0-value',
            multipleValue: []
        };
    },
    onChange(value) {
        console.log('onChange', value);
        this.setState({value});
    },
    onMultipleChange(value) {
        console.log('onMultipleChange', value);
        this.setState({multipleValue: value});
    },
    render() {
        return (
            <div style={{margin: 20}}>
                <TreeSelect style={{width: 300}}
                    dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
                    treeData={gData} treeLine
                    value={this.state.value}
                    treeDefaultExpandAll
                    placeholder={<i>Holi</i>}
                    searchPlaceholder='please search'
                    treeNodeFilterProp='title'
                    treeCheckable
                    onChange={this.onChange} />
            </div>
        );
    }
});
export default TreeField;