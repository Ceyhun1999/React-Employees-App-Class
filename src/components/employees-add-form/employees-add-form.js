import { Component } from "react";
import "./employees-add-form.css";

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: '',
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        let { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        onChange={this.onValueChange}
                        value={name}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        onChange={this.onValueChange}
                        value={salary}

                    />
                    <button
                        onClick={(e) => this.props.onAddItem(e, name, salary)}
                        type="submit"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}
