import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Move extends Component{

    static propTypes = {
        move: PropTypes.object.isRequired
    }

    render(){

        const {move} = this.props
        console.log(move)
        return(
            <div>
                <b>uf</b>
            </div>
        )
    }
}

export default Move