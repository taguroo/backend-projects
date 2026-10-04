/* 

define functional component PricingCard receiving props: (plan)

return Card wrapper component, passing plan.isPopular to isHighlighted prop:
    if plan.isPopular is true:
        render Badge component passing "Most Popular" as text prop
    
    render plan.title in title tag
    render plan.description in paragraph tag
    render plan.price formatted with currency sign
    
    render FeatureList component passing plan.features to features prop
    
    if plan.isPopular is true:
        render primary filled action button displaying plan.buttonText
    else:
        render secondary outlined action button displaying plan.buttonText

*/

import Card from "./Card";
import Badge from "./Badge"; 
import FeatureList from "./FeatureList";

export default function PricingCard({plan}) {
    const buttonClass = plan.isPopular ? "btn-primary" : "btn-secondary"

    return (
        <Card isHighlighted={plan.isPopular}>
            {plan.isPopular && <Badge text={"Most Popular"}/>}

            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            <p>{plan.price} $</p>

            <FeatureList features={plan.features}/>

            <button className={buttonClass}>
                {plan.buttonText}
            </button>
        </Card>
    )
}