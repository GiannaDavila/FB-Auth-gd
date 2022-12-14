import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,
     signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDA01Uy5Pzk9yAhWoM84lgnTj4ZpN085rQ",
    authDomain: "fb-auth-gd.firebaseapp.com",
    projectId: "fb-auth-gd",
    storageBucket: "fb-auth-gd.appspot.com",
    messagingSenderId: "14363149803",
    appId: "1:14363149803:web:6f599e0658cb25d2af05ae"
};

export default function Login({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        //prevent from webcite refreshing
        const app = initializeApp(firebaseConfig)//connects to fiebase 
        const auth = getAuth(app)// conects us to firebase auth 
        const response = await signInWithEmailAndPassword(auth, email, password)// signs us in 
            .catch(alert);
        setUser(response.user)
    }
    const handleGoogleLogin = async (e) => {
        e.preventDefault()
        //prevent from webcite refreshing
        const app = initializeApp(firebaseConfig)//connects to fiebase 
        const auth = getAuth(app)// conects us to firebase auth 
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        .catch(alert);
        setUser(response.user)
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:
                    <input type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password">Password:{' '}
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="*********" />
                    <br />
                    <button type="submit">Login</button>
                </label>
            </form>
            <br/>
            <button onClick={handleGoogleLogin}>Sign in with google</button>
        </>
    )
}