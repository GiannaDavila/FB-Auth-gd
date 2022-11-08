import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDA01Uy5Pzk9yAhWoM84lgnTj4ZpN085rQ",
    authDomain: "fb-auth-gd.firebaseapp.com",
    projectId: "fb-auth-gd",
    storageBucket: "fb-auth-gd.appspot.com",
    messagingSenderId: "14363149803",
    appId: "1:14363149803:web:6f599e0658cb25d2af05ae"
};

export default function Signup({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        //prevent from webcite refreshing
        const app = initializeApp(firebaseConfig)//connects to fiebase 
        const auth = getAuth(app)// conects us to firebase auth 
        const response = await createUserWithEmailAndPassword(auth, email, password)// signs us in 
            .catch(alert);
        setUser(response.user)
    }
    return (
        <>
            <h1>Signup</h1>
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
                    <button type="submit">Signup</button>
                </label>
            </form>
        </>
    )
}