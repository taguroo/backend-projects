/* 

define functional component Card receiving props: (children, isHighlighted)

create container class variable
if isHighlighted is true:
    add highlighted border/shadow style to class variable
else:
    add standard border style to class variable

return div element with the container class:
    render children prop inside (allows nesting any content) 
    
*/

export default function Card({children, isHighlighted}) {
    const containerClass = isHighlighted ? "card border-highlighted" : "card boder-standard";

    return (
        <div className={containerClass}>
            {children}
        </div>
    );
};