/* 

define functional component FeatureItem receiving props: (text, isIncluded)

if isIncluded is true:
    set icon to green checkmark
    set text color to active/dark
else:
    set icon to gray cross
    set text color to muted/gray

return list item (li) containing:
    icon element
    text element displaying text prop

*/

export default function FeatureItem({text, isIncluded}) {
    const icon = isIncluded ? "✓" : "✕";
    const itemClassName = isIncluded ? "feature-item active" : "feature-item muted";

    return (
            <li className={itemClassName}>
                <span className="icon">{icon}</span>
                <span className="text">{text}</span>
            </li>
        );
}
