import axios from "axios";

const Auth = (props) => {


    const onSubmit = (e) => {

        e.preventDefault();
        const { value } = e.target[0];
        authenticate(value);
    };


    function authenticate(username) {

        const url = "http://localhost:3001/authenticate";
        const body = {
            username : username
        };

        axios.post(
            url,
            body    
        )
        .then( response => {
            props.onAuth({ ...response.data, secret: username });
        })
        .catch( error => {
            console.log('error', error);
        });
    }


    return (

        <div className="background">

            <form onSubmit={onSubmit} className="form-card">

                <div className="form-title">Welcome </div>
                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit" >Enter</button>
                </div>
            </form>


        </div>
    );
;}

export default Auth;