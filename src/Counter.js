import React, { Component } from 'react'
  
class Count extends Component {
    constructor(props){
        super(props)
        this.state = {
        count : 0,
        disableButton: true
        }
        this.increment= this.increment.bind(this)
     
        this.decrement= this.decrement.bind(this)
        this.goBack= this.goBack.bind(this)
      
       }
       increment(){
        this.setState((preState)=>({
        count: preState.count +1
       }), ()=>{
         if(this.state.count >= 10){
            this.setState({count: 10});
            this.setState({disableButton: false});
          }
         })

       }
       goBack(){
         this.setState({count : 0});
         this.setState({disableButton: true})
       }
       decrement(){
    
        this.setState({
         count: this.state.count - 1 
        }, ()=>{
          if(this.state.count < 0){
            this.setState({count: 0})
            alert(" error")
          }
          if(this.state.count <= 10){
            this.setState({disableButton: true});
          }
        })
        }
  render() {
    const{count} = this.state
     let style={
        countStyle: {fontSize: '10em', margin:0},
        buttonStyle:{
            fontSize:'1.2em',padding:'10px',borderRadius:'10px',margin: '10px' , backgroundColor:'antiquewhite'
        },
        goBackButton : {
          display: 'none'
        },
        goBackButtonDisplay: {
          display: 'unset'
        }
     }
    return (
        <>
     <p style={style.countStyle}>{count}</p>
     <button style={style.buttonStyle} onClick={this.increment}>INCREMENT</button>

     <button style={style.buttonStyle} onClick={this.decrement}>DECREMENT</button>
     <button style={this.state.disableButton === true ? style.goBackButton : style.goBackButtonDisplay } onClick={this.goBack}>GO BACK TO 0</button>
     </>
    )
  }
}

export default Count
