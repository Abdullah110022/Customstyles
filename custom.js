// This file contains functions for ripple effect(ripple)

// ripple => addKeyFrames must be called once before calling ripple function, creates ripple effect on the provided element.
//        => ele - for element on which ripple effect is needed, time - needed to specify time after which the animation disappears, clas - specific class for ripple must be same as that included in css for ripple effect to work
const ripple = (ele, clas = "ripple", endWait = true, hidetime = 500) =>
{
  ele.onclick = function (e) {
    if (ele.parentElement.querySelector(`span.${clas}`) != null && endWait )
    {
      return;
    }
    let ripple = document.createElement("span");
    ripple.classList.add(clas);
    ele.appendChild(ripple);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    setTimeout(() => {
        ripple.remove();
    }, hidetime);
  };
}

export {ripple}
