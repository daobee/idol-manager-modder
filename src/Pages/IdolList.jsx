import React from 'react';
import Dexie from 'dexie';
import { AwesomeButton as Button } from "react-awesome-button";
import { toast } from 'react-toastify';

class IdolList extends React.Component {
    constructor(props) {
        super(props);
        // initDbConnection
        this.db = new Dexie('Idols');
        this.db.version(1).stores({ friends: "++id,name,age" });
        this.state = {str: "hello"};
    }

    addIdol() {
        const db = this.db;
        db.transaction('rw', db.friends, async() => {
            // Make sure we have something in DB:
            if ((await db.friends.where({name: 'Josephine'}).count()) === 0) {
                const id = await db.friends.add({name: "Josephine", age: 21});
                toast (`Addded friend with id ${id}`);
            }
            // Query:
            const youngFriends = await db.friends.where("age").below(25).toArray();
            // Show result:
            toast ("My young friends: " + JSON.stringify(youngFriends));
        
        }).catch(e => {
            toast(e.stack || e);
        });
        toast('add idol!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    render() {
        return (
            <div>
                <h2>IdolList Page</h2>
                <Button type="primary" onPress={ () => this.addIdol() } >Button</Button>;
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default IdolList;