import React from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import app from '../firebase'
import { auth } from '../firebase'
// import userEvent from '@testing-library/user-event'

class GoogleSignIn extends React.Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "pop-up",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (<>
                    {/* <div>Signed In</div> */}
                    <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                    {/* <h1>Welcome {firebase.auth().currentUser.displayName}</h1> */}
                </>
                ) :
                    (<StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    )}
            </div>
        )
    }
}

export default GoogleSignIn;