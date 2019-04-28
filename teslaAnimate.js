// LIBRARY START //
let animationCount = 0;
const prefixArray = ["-webkit-","-moz-","-o-","-ms-"];

// Prefixes passed strings
function prefixer(prefixArray, ElToPrefix) {
  let prefixed = "";
  prefixArray.forEach(function (i) {
    prefixed += i + ElToPrefix;
  });
  prefixed += ElToPrefix; 
  return prefixed;
};

// Generates style and keyframes with prefixes
function generateStyle(target, translateX, translateY, inlineFix, animationName) {
  let baseKeyframes = "{from { opacity:0; " + prefixer(prefixArray, "transform: translate(" + translateX + ", " + translateY + ");") + "} to { opacity:1; " + prefixer(prefixArray, "transform: translate(0px,0px);") + "} }";
	let keyframes = target + "{opacity: 0;" + inlineFix + "} " + prefixer(prefixArray, "@keyframes " + animationName + baseKeyframes);
  return keyframes;
};

// Display:inline Fix checker
function inlineFixCheck(element) {
  let targetElement = document.querySelector(element);
  let targetStyle = getComputedStyle(targetElement);
  return targetStyle.display == "inline" ? "display: inline-block;" : "";
};

// Primary call function
function teslaAnimate(params = {}) {
	// set variables or defaults
	let target = params.target != undefined ? params.target : ".teslaAnimate";
	let transitionTime = params.transitionTime != undefined ? params.transitionTime : 0.5;
	let delay = params.delay != undefined ? params.delay : 1;
	let delayIncrement = params.delayIncrement != undefined ? params.delayIncrement : 0.1;
	let translateY = params.translateY != undefined ? params.translateY : "60px";
  let translateX = params.translateX != undefined ? params.translateX : "0";
	let timingFunction = params.timingFunction != undefined ? params.timingFunction : "cubic-bezier(0.25, 0.1, 0.25, 1.0)";
  let animationName = "teslaAnimate-" + animationCount; 
  
  // Display:inline Fix
  let inlineFix = inlineFixCheck(target);
  
  // Generate style and keyframes   
  let keyframes = generateStyle(target, translateX, translateY, inlineFix, animationName);
  
	// Create style block, insert styles and keyframes, append to head of dom
	var styleBlock = document.createElement("style");
	styleBlock.type = "text/css"; 
	styleBlock.innerHTML = keyframes;
	document.getElementsByTagName('head')[0].appendChild(styleBlock);

	// Create animation string and append to each target
	let elements = document.querySelectorAll(target);
  elements.forEach(function(i){
    let animationString = transitionTime + "s " + timingFunction + " " + delay + "s forwards " + animationName;
    i.style.webkitTransform = animationString;
    i.style.mozTransform = animationString;
    i.style.msTransform = animationString;
    i.style.oTransform = animationString;
    i.style.animation = animationString;
    delay += delayIncrement;
  }); 
  
  animationCount++;
}; 
// LIBRARY END // 

// Default parameters 
teslaAnimate({
  target: "h1 span",
  transitionTime: 0.5,
  delay: 1,
  delayIncrement: 0.1,
  translateX: "0",
  translateY: "15px",
  timingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
});  
teslaAnimate({
  target: "h6",
  delay: 2.5,
  transitionTime: 1,
  translateY: "30px"
}); 
teslaAnimate({
  target: "h6 + p",
  delay: 3,
  transitionTime: 1,
  translateY: "30px"
}); 
teslaAnimate({
  target: ".badge",
  delay: 4,
  delayIncrement: 0.2,
  translateX: "-20px",
  translateY: "20px"
});   
teslaAnimate({
  target: ".card",
  delay: 3.5,
  transitionTime: 1,
  translateY: "15px"
});