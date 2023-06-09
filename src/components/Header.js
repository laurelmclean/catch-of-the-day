import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
    return (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    )
};

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}
