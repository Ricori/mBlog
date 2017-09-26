import React, {Component} from 'react'
import '../scss/content.scss';

class Content extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div id="content" onMouseEnter={this.props.changeThemeToDefault}>
               
            </div>
        )
    }
}

export default Content