import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../scss/navbar.scss';

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    //窗口大小调整后强制重新渲染
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
    }
    onWindowResize = () =>{
        this.forceUpdate();
    }

    render() {
        const titleBar = this.refs.titleBar;
        const titleBarStyle = {};
        if(titleBar){
            const nav = this.refs["span" + this.props.theme];
            if(nav){
                const left = nav.offsetLeft;
                titleBarStyle.width = nav.offsetWidth + 20;
                titleBarStyle.backgroundColor = this.props.getThemeColor(this.props.theme);
                titleBarStyle.transform = `translateX(${left - 10}px)`;
            }else{
                const left = titleBar.offsetLeft + 10;
                titleBarStyle.width = titleBar.offsetWidth;
                titleBarStyle.backgroundColor = 'rgba(0, 0, 0, 0)';
                titleBarStyle.transform = titleBar.style.transform;
            }
        }

        return (
            <Router>
            <div id="nav-bar">
                <nav className="list">
                    <li className="create" onMouseEnter={() => this.props.changeTheme(1)}>
                        <Link to="/category/Create"><span ref="span1">Create</span></Link>
                    </li>
                    <li className="skill" onMouseEnter={() => this.props.changeTheme(2)}>
                        <Link to="/category/Skill"><span ref="span2">Skill</span></Link>
                    </li>
                    <li className="art" onMouseEnter={() => this.props.changeTheme(3)}>
                        <Link to="/category/Art"><span ref="span3">Art</span></Link>
                    </li>
                    <li className="life" onMouseEnter={() => this.props.changeTheme(4)}>
                        <Link to="/category/Life"><span ref="span4">Life</span></Link>
                    </li>
                </nav>
                <div className="bar-container">
                    <span className="bar" ref="titleBar"
                        style={titleBarStyle}
                    ></span>
                </div>
            </div>
            </Router>
        )
    }

}

export default Navbar