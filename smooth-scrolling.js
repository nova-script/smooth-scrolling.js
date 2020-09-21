/*   
 *    __ RESUME:
 *       JavaScript library to easily implement smooth scrolling effect.
 * 
 *    __ WHY TO USE:
 *       @1 * [It's VANILLA - no other libraries or frameworks needed - !]
 *       @2 * [It's WELL DOCUMENTED and made with love! |<3|]
 * 
 *    __ USEFULL INFO:
 *       @1 * [Created and Maintained by: José Guilherme Fernandes Moura]
 *       @2 * [GitHub Repository: https://github.com/joseguilhermefmoura/smooth-scrolling.js]
 * 
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
     *       In lines [36] to [38], there are configuration variables that allows the javascript
     *       to identify in the HTML structure the elements that it will work on, by using CSS classes.
     * 
     *       According to /README.md, in order to change the default CSS classes configuration,
     *       it's just needed to change the variable string attribution to a preferred one.
     * 
     *       ---
     *    
     *       In line [40], there is a configuration object with properties that controls
     *       the delay and the timing function to be executed.
     *       
     */
    const _container = '.container'
    const _containerBody = '.container__body'
    const _containerHitbox = '.container--hitbox'
  
    const _parameters = {
      duration:          1000, // (ms)
      timingFunction:   'cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }
}
  
new SmoothScroll()