import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Left from './Left';
import Navbar from './Navbar';
import Content from './Content';

class Main extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        theme : 0
    }

    changeThemeToDefault = () =>{
        if(this.state.theme != 0){
            this.setState({theme : 0})
        }
    }

    changeTheme = (themeid) => {
        if(this.state.theme != themeid){
            this.setState({theme : themeid})
        }
    }

    getThemeColor(themeid){
        const themeColor = [
            "rgb(80, 139, 216)",
            "rgb(80, 144, 128)",
            "#06214c",
            "rgb(181, 126, 121)",
            "rgb(50, 128, 160)"
        ];
        return themeColor[themeid];
    }
    
    render() {
        console.log(this.props.match);
        return (
            <div id="container-content">
                <Left pic={this.state.theme} />
                <div id="main">
                    <div className="left" onMouseEnter={this.changeThemeToDefault}></div>
                    <div className="middle" >
                        <Navbar theme={this.state.theme} 
                        changeTheme={this.changeTheme}
                        getThemeColor={this.getThemeColor}
                        />
                        <div id="content" onMouseEnter={this.changeThemeToDefault}>
                            <Content theme={this.state.theme} 
                            getThemeColor={this.getThemeColor}
                            />
                        </div>
                    </div>
                    <div className="right" onMouseEnter={this.changeThemeToDefault}></div>
                </div>
            </div>       
        )
    }
}


export default Main