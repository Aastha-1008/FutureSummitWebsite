import React from "react";
import { TopicHighlightsData } from "./TopicHighlightsData";

import './TopicHighlights.scss';

const TopicHighlights = () => {
    return (
        <div className="highlightsDataCards">
            {
                TopicHighlightsData.map(({ image, content }, index) => (
                    <div className="highlights" key={index}>
                        <div className="highlightkey">{index + 1}</div>
                        <div className="highlightimagecontent">
                            <img src={image} alt="imageUrl" className="highlightimg" />
                            <p>{content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TopicHighlights;