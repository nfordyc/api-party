import React, { Component } from 'react'

class GithubUser extends Component {
    render() {
        return <h1>{this.props.match.params.username}</h1>
    }
}

export default GithubUser