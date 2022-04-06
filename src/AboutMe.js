import {Row,Col,Container} from 'react-bootstrap';
import './App.css';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// function wobbleTextInlineStyle() {
//      let randomRotate = randomInteger(-90,90).toString();
//     return ({
//         transform: `rotate(${randomRotate}deg)`,
//         "-webkit-transform": `rotate(${randomRotate}deg)`,
//         "-moz-transform": `rotate(${randomRotate}deg)`,
//         "-o-transform": `rotate(${randomRotate}deg)`,
//         "-ms-transform": `rotate(${randomRotate}deg)`,
//         "background-color": `white`
//     })
// }

// function wobbleText(textToShow) {
//     let textArray = textToShow.split("");

//     let bob = "";

//     textArray.forEach((textItem) => {
//         let randomRotate = randomInteger(-90,90).toString();
//         //console.log(<div style={wobbleTextInlineStyle()}>{textItem}</div>);
//     //bob+= `<div style=${wobbleTextInlineStyle}>${textItem}</div>`
//         //return (<>{textItem}</>)
//         bob+= `<div style={{transform: rotate(${randomRotate}deg)}}>${textItem}</div>`

//     });
// console.log(bob)
//     return bob
// }


function AboutMe() {
return (
    <>
    <Container className="BlueGradientBG" style={{ "height": window.innerHeight }}>
        <Row>
            <Col>
                {"KEiRoN".split("").map((textToRotate) => {
                    let rotateDeg = randomInteger(-20,20).toString() + "deg"
                    return(<div style={{ color: "white", width: "4rem", fontFamily: "Got_Heroin", fontSize: "8rem", display: "inline-block", float: "left", transform: `rotate(${rotateDeg})`}}>{textToRotate}</div>)
                })}
            </Col>
        </Row>
    </Container>
    </>
)


}

export default AboutMe;