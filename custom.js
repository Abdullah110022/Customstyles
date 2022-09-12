// This file contains functions for ripple effect(ripple)

// ripple => addKeyFrames must be called once before calling ripple function, creates ripple effect on the provided element.
//        => ele - for element on which ripple effect is needed, time - needed to specify time after which the animation disappears, clas - specific class for ripple must be same as that included in css for ripple effect to work
//        => endwait - flag to wait for the animation to end or not
const ripple = (ele, clas = "ripple", endWait = true, hidetime = 500) =>
{
  ele.onmousedown = function (e) {
    if (ele.parentElement.querySelector(`span.${clas}`) != null && endWait )
    {
      return;
    }
    console.log(ele.tagName);
    let ripple = document.createElement("span");
    ripple.classList.add(clas);
    let target = e.target;
    if (e.target.tagName == "SPAN")
    {
      target = e.target.parentElement
    }
    let x = e.clientX - (target.offsetLeft - window.scrollX);
    let y = e.clientY - (target.offsetTop - window.scrollY);
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ele.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, hidetime);
  };
}

// Adds placeholder to the div, div must contain only input field with data-controller = 'placeholder'
// Input field must contain a name so that placeholder is applied with same html as that of name of input
const addPlaceholder = (ele) =>
{
  let placeholder = document.createElement("span");
  let inpTag = ele.querySelector("input");
  placeholder.classList.add(inpTag.value == '' ? "blur-placeholder" : "focus-placeholder");
  let inpName = ele.querySelector("input").name;
  placeholder.innerHTML = `${inpName.charAt(0).toUpperCase() + inpName.slice(1)}`;
  inpTag.onfocus=function(){
    let span = inpTag.parentElement.querySelector("span");
    span.classList.remove("blur-placeholder");
    span.classList.add("focus-placeholder");
  }
  inpTag.onblur=function(){
    if (inpTag.value == '')
    {
      let span = inpTag.parentElement.querySelector("span");
      span.classList.remove("focus-placeholder");
      span.classList.add("blur-placeholder");
    }
  }
  placeholder.onclick=function(){
    this.parentElement.querySelector("input").focus();
  }
  ele.appendChild(placeholder);
}

export {ripple, addPlaceholder}

