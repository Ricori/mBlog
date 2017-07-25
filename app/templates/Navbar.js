import React, {Component} from 'react'
import '../scss/navbar.scss';

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    //窗口大小调整后强制刷新
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
    }
    onWindowResize = () =>{
        this.forceUpdate();
    }

    //取当前主题下的颜色
    getThemeColor(themeid){
        return themeid == 1 ? "rgb(80, 144, 128)" : "rgb(128, 141, 106)";
    }

    render() {
        const titleBar = this.refs.titleBar;
        const titleBarStyle = {};

        if(titleBar){
            const nav = this.refs["span" + this.props.theme];
            const left = nav ? nav.offsetLeft : titleBar.offsetLeft + 10;
            titleBarStyle.width = nav ? nav.offsetWidth + 20 : titleBar.offsetWidth;
            titleBarStyle.backgroundColor = nav ? this.getThemeColor(this.props.theme) : 'rgba(0, 0, 0, 0)';
            titleBarStyle.transform = nav ? `translateX(${left - 10}px)` : titleBar.style.transform;
        }

        return (
            <div id="nav-bar">
                <nav className="list">
                    <li className="create" onMouseEnter={() => this.props.changeTheme(1)}>
                        <a href="/category/Create"><span ref="span1">Create</span></a>
                    </li>
                    <li className="skill" onMouseEnter={() => this.props.changeTheme(2)}>
                        <a href="/category/Skill"><span ref="span2">Skill</span></a>
                    </li>
                    <li className="art" onMouseEnter={() => this.props.changeTheme(3)}>
                        <a href="/category/Art"><span ref="span3">Art</span></a>
                    </li>
                    <li className="life" onMouseEnter={() => this.props.changeTheme(4)}>
                        <a href="/category/Life"><span ref="span4">Life</span></a>
                    </li>
                </nav>
                <div className="bar-container">
                    <span className="bar" ref="titleBar"
                        style={titleBarStyle}
                    ></span>
                </div>
            </div>
        )
    }

}

export default Navbar