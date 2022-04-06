import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import { useEffect } from 'react';

//CONTROL VALUES
var charWidth = 1.5;
var spaceWidth = 8;
var animSpeed = 10;
var fadeSec = 2.75;
var lineSpace = 25;

var text = "is my name, but that is but a label... ";
//var moreText = "彩夏は人間です。女性です。大人な感じが好きです彼女は。しかも31歳です。日本人です。苗字は澤村です。はい、終わり。";

function writeChars(p, t, lim) {
	var zone = document.getElementById(p);
    if (zone === null) { return false };
    console.log("zone",zone);
	var width = 0;
	var top = 0;
	console.log(zone);
	var chars = t.split("");
	for (var i = 0; i < chars.length; i++) {
		var s = "<span id ='" + p + "char" + i +
				"' class='writer' style='top:" + top + "px; left:" + width + 
				"px;animation:charAnim " + fadeSec + "s linear " + i/animSpeed + "s forwards;'>"
				+ chars[i] + "</span>";
		var node = document.createElement("div");
		node.innerHTML = s;
		zone.appendChild(node);
		var blah = document.getElementById(p + "char" + i);
		if (blah.offsetWidth == 0) {
			width += spaceWidth;
		}
		else {
			width += blah.offsetWidth+charWidth;
		}
		if (width >= lim && blah.offsetWidth == 0) {
			width = 0;
			top += lineSpace;
		}
		console.log(width);
	}
}

// setTimeout(function() {
// 	writeChars("para2",moreText, 400);
// }, 6000);

function Blurb() {

    useEffect( () => {
        console.log("1");
        writeChars("para1",text, 350);
    },[]);
    
    return (
<div id="para1"></div>
    );
}

export default Blurb;