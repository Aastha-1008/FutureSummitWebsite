import React,{useState,useEffect} from "react";
import '../Home.scss'

const HomeTop = () => {

    const bgImg = [
        {
            img: "https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/fbs-banner-image-1-4.jpg"
        },
        {
            img: "https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/awards-image.jpg"
        },
        {
            img: "https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/saudi-image.jpg"
        }
    ];

    const [currInd, setCurrInd] = useState(0);

    useEffect(() => {
        console.log(currInd);
        const s = setTimeout(
            () => setCurrInd((prevInd) => prevInd === bgImg.length - 1 ? 0 : prevInd + 1)
            , 10000);
        return () => clearTimeout(s);
    }, [currInd]);

    return(
        <div className="homeimg">
            {
                bgImg.map(({ img }, index) => (
                    (index === currInd) && <div className="bg_img zoomInEffect" key={index}>
                        <img src={img} alt="future summit" />
                    </div>
                ))
            }
            <img className="line1" src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/pattern-1.png" alt="line1"/>
            <img className="line2" src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/shape-2.png" alt="line2"/>
        </div>
    );
}

export default HomeTop;