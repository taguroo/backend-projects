/*

define functional component Badge receiving props: (text)
return span element styled as a pill/badge:
    display the text prop inside the span

*/

export default function Badge({text}) {
    return (
        <span className="badge">
            {text}
        </span>
    );
}