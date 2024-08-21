import React, {useContext, useEffect} from 'react';
import {UserContext} from "../context/UserProvider.jsx"
import IssueList from "./IssueList.jsx"
import IssueForm from './IssueForm.jsx';

function Profile() {

    const { user, getUserIssues, issues } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
    }, [])
    console.log(issues)
    return ( 
        <>
            <h1>Username: {user.username} </h1>
            <IssueForm />
            <IssueList issues={issues} />
        </>
     );
}

export default Profile;