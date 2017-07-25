import React, {Component} from 'react'
import '../scss/left.scss';

class Left extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        ypic : 1,
        change : false
    }

    componentDidMount(){
        this.state.ypic = this.props.pic;
        this.state.change = true;
    }

    componentDidUpdate() {
        this.state.ypic = this.props.pic;
        this.state.change = !this.state.change;
    }

    render() {
        var change = this.state.change,
            pic1 = change?this.state.ypic:this.props.pic,
            pic2 = change?this.props.pic:this.state.ypic;
        return (
            <div id="left">
                <div className={"image image" + pic1} 
                     style={{"zIndex":change?9:10,"opacity":change?0:1}} >
                </div>
                <div className={"image image" + pic2} 
                     style={{"zIndex":change?10:9,"opacity":change?1:0}} >
                </div>
            </div>
        )
    }
}

export default Left