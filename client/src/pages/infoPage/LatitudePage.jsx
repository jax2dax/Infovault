import { latitudeContentContent } from "../../contents/gen-Info-cont"
import "../../styles/contentStyles.css"

export default function     LatitudePage() {
    const word = "Why";

            
    return(
        <div>
            <meta name="description" content="Curious about latitudes and longitudes? Discover how these coordinate systems work, why we need them for GPS and maps, and how they affect time zones worldwide." />
        
            <title>time-zones</title>
            <div className="headings">
                <h1>Imaginary Lines</h1>
                <h2>Latitude and Longitude</h2>
                
                <h3>Why do we create imaginary lines?</h3>
                <div className="context" >
                    {latitudeContent}
                </div>
            </div>
        </div>
    )
}
