//import 'rc-tree-select/assets/index.css';
import '../../../assets/jquery/tree/themes/proton/style.css';
import React from 'react';
//import  '../../../assets/jquery/tree/jstree.js';
import '../../../assets/jquery/tree/jstree.js';
//import data from './TreeData.json';
import FieldSet from './FieldSet.jsx';
//import TreeSelect from 'rc-tree-select';
//import { gData } from './TreeData.js';
import './Tree.css';

const TreeField = React.createClass({
    getInitialState() {
        return {
            value: '0-0-0-0-value',
            multipleValue: []
        };
    },
    componentDidMount() {
        $('#examsTree').jstree({
            'core': {
                'data': [{
                    'id': '641',
                    'code': '0403001',
                    'duration': '30',
                    'text': '0403001 -  Cerebro -  30 Min.',
                    'state': [{
                        'opened': 'false',
                        'selected': 'false'
                    }],
                    'children': null,
                    'lastChild': 'yes',
                    'icon': 'glyphicon glyphicon-minus'
                }],
                'themes': {
                    'name': 'proton',
                    'responsive': true
                }
            },
            'plugins': ['checkbox', 'search', 'sort'],
            'search': { 'show_only_matches': true }
        });
        $('#searchExam').keyup(() => {
            const to = setTimeout(() => {
                const v = $('#searchExam').val();
                $('#examsTree').jstree(true).search(v);
            }, 250);
        });
        $('#examsButton').click(() => {
            $('.listContainer').show();
        });
        $(document).mousedown((e) => {
            var listContainer = $('.listContainer');
            if (!listContainer.is(e.target) && listContainer.has(e.target).length === 0) {
                listContainer.hide();
            }
        });
    },
    onChange(value) {
        this.setState({ value });
    },
    onMultipleChange(value) {
        this.setState({ multipleValue: value });
    },
    render() {
        return (
            <FieldSet></FieldSet>
            /*<div style={{margin: 20}}>
                <TreeSelect
                    id='examTree'
                    style={{width: 300}}
                    dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
                    treeData={gData} treeLine
                    value={this.state.value}
                    treeDefaultExpandAll
                    placeholder={<i>Holi</i>}
                    searchPlaceholder='Examenes Qlos'
                    treeNodeFilterProp='title'
                    treeCheckable
                    onChange={this.onChange} />
            </div>*/
        );
    }
});
export default TreeField;
