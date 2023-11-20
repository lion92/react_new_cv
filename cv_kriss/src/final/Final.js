import React, {useRef} from 'react';
import Header from "../header/Header";
import Projets from "../projets/Projets";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Final = () => {
    const pdfref = useRef();


    const downloadPDF = () => {
        const input = pdfref.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);

            // doc and image dimensions
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 5

            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Garph.pdf');
        });
}
        return (
            <div>

                    <button style={{width:"10em", height:"4em", borderRadius:"10px", color:"violet", backgroundColor:"gray", fontSize:"30px"}} onClick={downloadPDF}>dl pdf</button>
                <div ref={pdfref}>
                    <Header></Header>
                    <Projets></Projets>
                </div>

            </div>
        );
    };

export default Final;