import React, {Component} from 'react'
import Section from './Section';
import '../scss/content.scss';

class Content extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let themeColor = this.props.getThemeColor(this.props.theme);

        return(
            <div id="content-list">
                <ul>
                    <Section themeColor={themeColor} />
                    <Section themeColor={themeColor} />
                    <Section themeColor={themeColor} />
                    <Section themeColor={themeColor} />
                    <Section themeColor={themeColor} />
                </ul>
                <ul id="pagination">
                    <p className="page prev disabled transition" style={{"color":themeColor}}>«</p>
                    <p className="page normal current transition" style={{"background":themeColor}}>0</p>
                    <a className="page normal active transition" href="" style={{"color":themeColor}}>1</a>
                    <a className="page next active transition" href="" style={{"color":themeColor}}>»</a>
                </ul>
            </div>
        )
    }
}

export default Content