import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {onClick, className, filled, children} = this.props;

        const additionalClasses = `border border-2 border-blue-600 transition py-2 px-4 rounded-full ` +
            (filled ? "bg-blue-600 text-white hover:bg-white hover:text-blue-600" :
                "hover:bg-blue-600 hover:text-white bg-white text-blue-600");

        return (<button className={className + " " + additionalClasses} onClick={onClick}>
            {children}
        </button>)
    }

}

export default Button;