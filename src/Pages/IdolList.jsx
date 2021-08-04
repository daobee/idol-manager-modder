import React from 'react';
import { withRouter } from 'react-router-dom';
import Dexie from 'dexie';
import { AwesomeButton as Button } from "react-awesome-button";
import IdolCard from './IdolCard';

class IdolList extends React.Component {
    constructor(props) {
        super(props);
        // initDbConnection
        this.db = new Dexie('Idols');
        this.db.version(1).stores({ friends: "++id,name,age" });
        this.state = {idols: []};
        this.queryIdols(this.db);
    }

    async queryIdols(db) {
        // const idols = await db.friends.where("id").aboveOrEqual(0).toArray();
        const idols = await db.friends.where("id").equals(22).toArray();
        this.setState({
            idols: idols
        })
    }

    render() {
        const { idols } = this.state;
        return (
            <div style={{ color: "black"}}>
                <h2>IdolList Page</h2>
                <Button type="primary" onPress={ () => this.props.history.push('idolEditor') } >Button</Button>
                <Button type="primary" onPress={ () => this.queryIdols(this.db) } >刷新</Button>
                <main>
                    <p>This section contains information about...</p>
                    {idols[0] ? (<IdolCard idol={ idols[0] }/>) : 'wu'}
                </main>
            </div>
        )
    }
}



export default withRouter(IdolList);