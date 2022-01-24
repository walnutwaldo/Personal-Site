import React, {Component} from "react";

export class Redirect extends Component {

    componentWillMount() {
        // window.location = this.props.url;
    }

    render() {
        return (
            <div className={"d-table-cell fullscreen align-middle mt-5"}>
                <div className={"text-center"}>
                    <h2>
                        Redirecting ...
                    </h2>
                    <p>Click <a href={this.props.url}>here</a> if you are not redirected automatically</p>
                </div>
            </div>
        );
    }

}

export default Redirect;