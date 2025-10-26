import { timezoneContent } from "../../contents/gen-Info-cont"
import "../../styles/contentStyles.css"

export default function TimezonePage() {
    const word = "Why";

            
    return(
        <div>
            <meta name="description" content="Timezones explained and how they work"/>
            <meta name="description" content="Am and Pm difference and how are they different"/>
            
            <title>time-zones</title>
            <div className="headings">
                <h1>Time zones & AM-PM</h1>
                <h2>Understanding Time Zones — The Global Clock System</h2>
                
                <h3>Why does the time zone exist?</h3>
                <div className="context" >
                    {timezoneContent}
                </div>
            </div>
        </div>
    )
}
