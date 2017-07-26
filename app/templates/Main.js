import React, {Component} from 'react'
import Left from './Left';
import Navbar from './Navbar';

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
            "#b0d3d1",
            "rgb(80, 144, 128)",
            "#06214c",
            "rgb(181, 126, 121)",
            "rgb(50, 128, 160)"
        ];
        return themeColor[themeid];
    }
    
    render() {
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
                        <div id="content" onMouseEnter={this.changeThemeToDefault}></div>
                    </div>
                    <div className="right" onMouseEnter={this.changeThemeToDefault}></div>
                </div>
            </div>
        )
    }
}


export default Main