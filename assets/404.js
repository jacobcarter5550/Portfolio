// Array of Jokes
var Jokes = [
    "I just got fired from my job at the keyboard factory. They told me I wasn't putting in enough shifts.",
    "We'll we'll we'll...if it isn't autocorrect.",
    "Q. Which type of vegetable tries to be cool, but is only partly successful at it?\n\nA. The radish.",
    "The world tongue-twister champion just got arrested. I hear they're gonna give him a really tough sentence."
    ];
    
    // function to check cookie (true if exists, false if not)
    function checkCookie(){
        var joke = getCookie();
        if (joke != "") {
          return true;
        } else {
          return false;
        }
    }
    // set the cookie so can be referenced later
    function setCookie(cvalue){
        var cname = "joke";
        var d = new Date();
        d.setTime(d.getTime() + ( 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    // actually acquire the cookie and read it
    function getCookie() {
        var cname = "joke";
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function ShowJoke(){
      let randomNum = ~~(Math.random() * Jokes.length); // pick a random number from 0 to length of jokes
      if(checkCookie()){ // check if cookie exists
        while(Jokes[randomNum] != getCookie()) randomNum = ~~(Math.random() * Jokes.length);
        } // while cookie's joke != generated joke
      document.getElementById('Joke').textContent = Jokes[randomNum]; // set content
      setCookie(Jokes[randomNum]); // set cookie
    }
    window.onload = ShowJoke(); // run on window load