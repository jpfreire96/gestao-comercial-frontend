import { Component } from "react";
import "./login.css"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                login:"",
                password:""
            }
        }

        this.dataForm = this.dataForm.bind(this);
    }

    dataForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    render() {
        return (
            <div>
                <div  className="white-box" style={{margin:'80px 35% 0 35%'}}>
                    <form className="form-auth" action="javascript:void(0)">
                        <div>
                            <label>Login:</label>
                            <input name="login" type="text" value={this.state.form.login} onChange={this.dataForm}/>
                        </div>

                        <div>
                            <label>Senha:</label>
                            <input name="senha" type="password" value={this.state.form.senha}/>
                            <a style={{marginTop:'5px'}} className="esqueci-senha">Esqueci minha senha</a>
                        </div>

                        <div>
                            <button className="btn-primary-button">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;