import React, { Component } from 'react'

export class LiveAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [],
            user_id : 2
        }
    }
    render() {
        return (
        <div>LiveAuction</div>
        )
    }
}

export default LiveAuction