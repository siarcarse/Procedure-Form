import React from 'react';

export default class FieldSet extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //const { children, ...props } = this.props;
        return (
            <fieldset>
                <div className='form-group'>
                    <div className='input-group'>
                        <div className='input-group-addon' id='exam'>
                            <span className='glyphicon glyphicon-folder-close'></span>
                        </div>
                        <button type='text' id='examsButton' className='form-control'>Selecione examenes
                            <span className='glyphicon glyphicon-triangle-bottom'></span>
                        </button>
                    </div>
                    <div className='listContainer' hidden>
                        <div className='backGroundExams'>
                        </div>
                        <div className='showSearchExam'>
                            <input type='text' id='searchExam' className='form-control' placeholder='Buscar examenes' />
                        </div>
                        <div className='showExamsList'>
                            <div id='examsTree'></div>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }
}
