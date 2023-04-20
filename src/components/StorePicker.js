import React from "react";
import { getFunName } from "../helpers";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function StorePicker(props) {
    const [input, setInput] = useState(getFunName())

    return (
        <form className="store-selector">
            <h2>Please Enter A Store</h2>
            <input type="text" placeholder="Store Name" defaultValue={input} onChange={(evt) => setInput(evt.target.value)}/>
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                props.history.push(`/store/${input}`);
            }}>Visit Store</button>
        </form>
    )
};

export default withRouter(StorePicker);
