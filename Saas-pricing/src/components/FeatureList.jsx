/* 

define functional component FeatureList receiving props: (features)

return unordered list (ul) container:
    loop through features array:
        for each feature item:
            render FeatureItem component
            pass feature.text as text prop
            pass feature.isIncluded as isIncluded prop
            set unique key using feature.id
  
*/
import FeatureItem from './FeatureItem';

export default function FeatureList({features}) {
    return (
        <ul>
            {features.map((feature) => (
            <FeatureItem
                key={feature.id}
                text={feature.text}
                isIncluded={feature.isIncluded}
            />
            ))}
        </ul>
    );
}