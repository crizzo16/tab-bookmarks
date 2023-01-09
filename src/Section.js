import React from "react";
import Link from "./Link";

function Section(props) {
    return (
        <React.Fragment>
            <div>
                <div className="sec-header" style={{backgroundColor: props.color}}>
                    <h3>{props.name}</h3>
                </div>
            </div>
            {props.links.map((eagle) => {
                return <Link name={eagle.name} icon={eagle.icon} link={eagle.link}  />
            })}
        </React.Fragment>
    );
}

export default Section;