import './Login.css';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {
    var query = new URLSearchParams(useLocation().search);
    var qlogout = query.get("logout");

    useEffect(() => {
        //parametre olarak verilen metot login bileşeni sayfada render olunca çalışır.
        if (qlogout == "success") {
            toast("You have logged out succesfully!");
        }
    }, [qlogout]); //[qlogout] aldığımız parametreye göre çalışıyor.Yani bu parametre değiştikçe çalışşsın.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);

    const handleSubmit = function (e) {
        e.preventDefault();
        axios.get("https://localhost:44331/api/Account/Login", {
            username: email,
            password: password
        }).then(function
            (response) {
            console.log(response);
        }).catch(function (error) {
            const data = error.response.data;
            const messages = [];
            for (const key in error.response.data) {
                messages.push(...data[key]);
            }
            console.log(messages.join(''));
        });



        //todo:apiye istekte bulun
        //hata gelirse hata mesajı göster
        //token gelirse kaydet kogin et ve home'a yönlendir

    };

    return (
        <Card className="card-login">
            <Card.Body className="p-sm-4">
                <ToastContainer />
                <h1 className="text-center">Login</h1>
                {/* {email} {password} {rememberMe ? "remember" : "don't remember"} */}
                <Alert variant="danger">
                    ---
                    </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onInput={(e) => setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onInput={(e) => setPassword(e.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
                <div className="text-center mt-3">
                    <Link to="/register">Register as a new user</Link>
                </div>

            </Card.Body>
        </Card>
    )
}

export default Login;
