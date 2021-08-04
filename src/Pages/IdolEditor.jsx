import React from 'react';
import Dexie from 'dexie';
import Dropzone from 'react-dropzone'
import { withRouter } from 'react-router-dom';
import { AwesomeButton as Button } from "react-awesome-button";
import { toast } from 'react-toastify';

class IdolEditor extends React.Component {
    constructor(props) {
        super(props);
        // initDbConnection
        this.db = new Dexie('Idols');
        this.db.version(1).stores({ friends: "++id,name,age" });
        this.state = {file: null};
        this.addIdol = this.addIdol.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    addIdol() {
        const db = this.db;
        db.transaction('rw', db.friends, async() => {
            // Make sure we have something in DB:
            let id = '';
            if ((await db.friends.where({name: 'Josephine'}).count()) === 0) {
                id = await db.friends.add({name: "Josephine", age: 21});
                toast (`Addded friend with id ${id}`);
            } else {
                id = await db.friends.add({name: "Josephine", age: 21 + Math.random(), pic: this.state.file});
                toast (`Addded friend with id ${id}`);
            }
            // Query:
            const youngFriends = await db.friends.where("id").equals(id).toArray();
            // Show result:
            toast ("My young friends: " + JSON.stringify(youngFriends));
        
        }).catch(e => {
            toast(e.stack || e);
        });
        toast('add idol!', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    handleFile(acceptedFiles) {
        const imageType = /^image\//;
        if (Array.isArray(acceptedFiles)) {
            if (imageType.test(acceptedFiles[0].type)) {
                this.setState({
                    file: acceptedFiles[0]
                }, () => console.log(this.state.file))
            } else toast('不支持的格式！');
        }
    }

    render() {
        const { file } = this.state;
        return (
            <div style={{ color: "black"}}>
                <Button type="primary" onPress={ () => this.props.history.goBack() } >Back</Button>
                <Dropzone onDrop={ this.handleFile }>
                    {({getRootProps, getInputProps, isDragActive}) => (
                        <section>
                            <div {...getRootProps()}>
                                <h2>IdolEditor Page</h2>
                                <p>IdolEditor about...</p>
                                { file ? (<img src={ window.URL.createObjectURL(file) } alt="idol" />) : null}
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                }
                            </div>
                        </section>
                    )}
                </Dropzone>
                <Button type="primary" onPress={ () => this.addIdol() } >保存</Button>
            </div>
        )
    }
}



export default withRouter(IdolEditor);