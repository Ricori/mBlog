import React, {Component} from 'react'

class Section extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section>
                <a title="test123" href="">
                    <h2 className="transition">测试文章</h2>
                </a>
                <header>
                    <p className="tags">
                        <span className="transition" style={{"background":this.props.themeColor}}>类别</span>
                        <a className="transition" href="/category/Create">Create</a>
                    </p>
                    <p className="tags">
                        <span className="transition" style={{"background":this.props.themeColor}}>时刻</span>
                        <a className="transition">2017.10.10</a>
                    </p>
                    <p className="tags">
                        <span className="transition" style={{"background":this.props.themeColor}}>标签</span>
                        <a className="transition" href="/tag/tagt">tags</a>
                    </p>
                </header>
                <summary>
                    测试文字测试文字测试文字测试文字测试文字
                    测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
                    测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
                    测试文字测试文字
                    测试文字测试文字测试文字测试文字
                </summary>
                <footer>
                    <div className="hr transition" ></div>
                </footer>
            </section>
        )
    }
}

export default Section