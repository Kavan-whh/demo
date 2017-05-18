import React, {Component} from 'react';
import Search from './search.jsx';
export default class struct extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div>
                <Search />
                {/* 递归组件 */}


            </div>
        );
    }
};
