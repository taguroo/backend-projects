/*

define functional component PricingGrid receiving props: (plans)

return grid section element:
    loop through plans array:
        for each plan object:
            render PricingCard component
            pass plan object to plan prop
            set unique key using plan.id

*/
import PricingCard from './PricingCard';
import { plansData } from '../data/plansData';

export default function PricingGrid() {
    return (
        <section className="pricing-grid">
            {plansData.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
            ))}
        </section>
    )   
}