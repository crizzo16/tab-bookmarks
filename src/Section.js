import Link from "./Link";

function Section(props) {
    return (
        <div className="sec">
            <h1>{props.name}</h1>
            <div className="bookmarks">

            </div>
        </div>
    );
}

export default Section;