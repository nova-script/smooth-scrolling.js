/*     __ RESUME:
 *       JavaScript library to easily implement smooth scrolling effect.
 * 
 *    __ WHY TO USE:
 *       @1 * [It's VANILLA - no other libraries or frameworks needed - !]
 *       @2 * [It's WELL DOCUMENTED and made with love! |<3|]
 *       @3 * [It runs FAST! (+- 40 lines of code)]
 * 
 *    __ USEFULL INFO:
 *       @1 * [Created and Maintained by: José Guilherme Fernandes Moura]
 *       @2 * [GitHub Repository: https://github.com/joseguilhermefmoura/smooth-scrolling.js]
*/
class SmoothScroll {
  constructor() {
    /*    ## CONFIGURATION VARIABLES SECTION ##
     *    
     *    __ TIPS:
     *       @1 * [Every configuration variable starts it's name with '_' character (underline)]
     * 
     *    __ RESUME: 
     *    
     *       In lines [33] to [35], there are configuration variables that allows the javascript
     *       to identify in the HTML structure the elements that it will work on, by using CSS classes.
     * 
     *       According to /README.md, in order to change the default CSS classes configuration,
     *       it's just needed to change the variable string attribution to a preferred one.
     * 
     *       ---
     *    
     *       In line [37], there is a configuration object with properties that controls
     *       the delay and the timing function to be executed.
     */
    const _container       = '.ss--container'
    const _containerBody   = '.ss--container__body'
    const _containerHitbox = '.ss--container--hitbox'

    const  _parameters = {
      duration:          1000,
      timingFunction:   'cubic-bezier(0.23, 1, 0.32, 1)'
    }

    // Load necessary HTML elements, getting them by predefined CSS classes
    this.necessaryElements = {
      container:     document.querySelector(_container),
      containerBody: document.querySelector(_containerBody),
      hitbox:        document.querySelector(_containerHitbox),
    }

    // Load necessary parameters, getting them by predefined JS-object
    this.parameters = {
      containerHeight: this.necessaryElements.containerBody.offsetHeight,
      duration:        _parameters.duration,
      timingFunction:  _parameters.timingFunction,
    }

    // When the DOM is loaded, then initiate the smooth scrolling main methods
    document.addEventListener('DOMContentLoaded', () => { 
      this.initStyle()
      this.initListeners()
    })
  }

  initStyle() {
    /*    ## ADDING NEEDED CSS STYLES ##
     *    
     *    _ RESUME:
     *      The whole idea of this script is to create a main container and a secondary container.
     *      The main container is the actual content container, that will be fixed without overflow-y
     *      and updating it's translateY() CSS property.
     *      The secondary container is a fake one, without content inside, that will be responsible
     *      only for displaying the overflow-y by having the same height as the main container.
     */

    // Set the container necessary style [100% size fixed container over the container hitbox]
    this.necessaryElements.container.style.overflow = 'hidden'
    this.necessaryElements.container.style.position = 'fixed'
    this.necessaryElements.container.style.height   = '100vh'

    // Set the container hitbox necessary style [it's height must be equal to the main container height]
    this.necessaryElements.hitbox.style.height = this.parameters.containerHeight + 'px'
    
    // Set containerBody style
    this.necessaryElements.containerBody.style.transform  = 'translateY(' + (window.scrollY) + 'px)' // Scroll to current scroll
    this.necessaryElements.containerBody.style.transition = 'transform ' + this.parameters.duration + 'ms ' + this.parameters.timingFunction
  }

  initListeners() {
    window.addEventListener('scroll', () => {this.handleScroll()} )
    window.addEventListener('resize', () => {this.handleResize()} )
  }

  handleScroll(_event) {
    // On scrolling, translate the containerBody to the current window scroll position
    this.necessaryElements.containerBody.style.transform = 'translateY(' + (window.scrollY * -1) + 'px)'
  }

  handleResize() {
    // On window resizing, updates the following variables:
    this.parameters.containerHeight            = this.necessaryElements.containerBody.offsetHeight
    this.necessaryElements.hitbox.style.height = this.parameters.containerHeight + 'px'
  }
}

// Call smooth scrolling
new SmoothScroll()