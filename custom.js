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

export {ripple}

