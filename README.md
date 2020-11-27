# smooth-scrolling.js

**smooth-scrolling.js** is a simple, light and short JavaScript code that makes smooth scrolling effect easy to implementate.

<hr>


### Importing:

- For **test purposes**, you can simply copy and paste the code below right before the enclosing tag of the HTML element 'body' on your page.

    ``` <script src="https://joseguilhermefmoura.github.io/smooth-scrolling.js/smooth-scrolling.min.js"></script> ```

- For **study purposes** you should download the <a href="smooth-scrolling.js">smooth-scrolling.js</a> file and read the commentaries that are written inside the file. It's well documented.


- For **real products**, you should download and use the minified version of smooth-scrolling.js, the <a href="smooth-scrolling.min.js">smooth-scrolling.min.js</a>, which is even lightest.

### Implementing:

1. Put your page content inside a ```div``` containing ```ss--container__body``` class.

2. Then, put this ```div``` you just created inside a new ```div``` containing ```ss--container``` class.

3. Break a line and create a empty ```div``` containing the class ```ss--container--hitbox```.



After all, your code should look like this and already working:

```
<div class="ss--container">
    <div class="ss--container__body">

        ...

    </div>
</div>
<div class="ss--container--hitbox"></div>
```

<hr>

This software is licensed under the MIT LICENSE. Read more on <a href="LICENSE">LICENSE file</a>.
