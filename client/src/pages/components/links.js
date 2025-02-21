import { createComponent } from "./_index";

/**
 * @param {HTMLElement} element 
 * @param {string} url 
 * @param {string} text 
 * @param {boolean} isNoop 
 * @param {string} className 
 * @returns 
 */
export function FancyLink(
  element = null, 
  url,
  text = url,
  isNoop = true,
  className = undefined
) {
  /**
   * @type {HTMLAnchorElement}
   */
  const fancyLink = element
    ? initFromElement(element)
    : initFromScratch(url, text, isNoop, className);
  
  return fancyLink;
}

/**
 * @param {HTMLAnchorElement}
 */
function initFromElement(element) {
  return element;
}

/**
 * @param {string} url 
 * @param {string} text 
 * @param {boolean} isNoop 
 * @param {string} className 
 * @returns 
 */
function initFromScratch(url, text, isNoop, className) {
  /**
   * @type {HTMLAnchorElement}
   */
  const fancyLink = createComponent("fancy-link");

  fancyLink.classList.add(className);
  fancyLink.href = url;
  fancyLink.textContent = text;

  if (isNoop) {
    fancyLink.target = "_blank";
    fancyLink.rel = "noopener noreferrer";
  }

  return fancyLink;
}
