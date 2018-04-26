import React, {Component} from 'react'

class Home extends Component{
    
    componentWillMount(){
        fetch('https://pokerola.herokuapp.com/api/move',{method:'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }})
          .then(res => res.json())
          .then(data => {
            console.log(data.moves)
          })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        document.getElementById('title').innerHTML = 'Home'
        return(
            <div className="Home">
                <h1>Home Page</h1>
                <p>lorem</p>
            </div>
        )
    }
}

export default Home