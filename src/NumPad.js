import React,{Component} from 'react';

export default class PadBanks extends Component { 
    constructor(props){
        super(props)
        this.state=({
            style:{
                
            },
            name:''
        })
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyPress);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',this.handleKeyPress);
    }
    handleKeyPress(e){
        if(e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }

    playSound(e){
        const sound=document.getElementById(this.props.keyTrigger);
        sound.play();
        this.setState({
            style: {
                backgroundColor: "grey"
            },
            name: this.props.id
        })
        setTimeout(()=>this.setState({
            style:{
                
            }
        }),50)
        this.props.updateDisplay(this.props.clipId.replace(/-/g,' '));
    }

    render(){
        return (
            <div className="drum-pad" id={this.props.clipId} style={this.state.style} onClick={this.playSound}>
                   <audio id={this.props.keyTrigger} class="clip" src={this.props.src}></audio>
                   {this.props.keyTrigger}
           </div>
      )
    }

}
