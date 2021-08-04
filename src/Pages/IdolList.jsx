import React from 'react';
import { withRouter } from 'react-router-dom';
import Dexie from 'dexie';
import { AwesomeButton as Button } from "react-awesome-button";

class IdolList extends React.Component {
    constructor(props) {
        super(props);
        // initDbConnection
        this.db = new Dexie('Idols');
        this.db.version(1).stores({ friends: "++id,name,age" });
        this.state = {str: "hello"};
    }

    render() {
        return (
            <div>
                <h2>IdolList Page</h2>
                <Button type="primary" onPress={ () => this.props.history.push('idolEditor') } >Button</Button>;
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default withRouter(IdolList);