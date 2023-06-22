 import React from "react";
import Pdf from "react-to-pdf";
const Resume = () => {

    const ref = React.createRef();

    return (
        <div>
            <img src="../../public/Ibrahim-resume-M.pdf" style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
            <Pdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Download resume</button>
                )}
            </Pdf>
            
        </div>
    );
};

export default Resume;