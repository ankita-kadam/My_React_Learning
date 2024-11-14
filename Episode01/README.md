CDN links -
- Contact Delivery Networks.
- CDN is a place where React Library is hosted.
- 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

What is CrossOrigin ?


React
- JS Library
- 


- Browser understands JavaScript (like createElement, innerHTML, getElemetById) because it has JS Engine.

# Commands
git init
git add .
git commit -m "Episode01"
git branch -M main
git remote add origin https://github.com/ankita-kadam/My_React_Learning.git
git push -u origin main


# Aync vs defer

- Async and defer are boolean attributes which are used along with script tag 
- used to load external script efficiently into our web page.
- When you load a web page there are 2 major things are happening in browser
1.  HTML Parsing  
2.  Loading of script
    I] Fetching script from network    
   II] Executing script line by line 
   -
- We will be covering  3 scenarios :
  1] By normally using script tag
    - <script src >
    - Suppose your browser is executing HTML line by line.
    - And suddenly encounters script tag over here
    - So here browser stops the browsing at that point of time 
    - Then browser sees the script tag and fetches the script tag from network 
    - and get into the browser and run/execute it there
    - After script is fully executed, HTML parsing will continue to start
    - So here JS is blocking the HTML which is not a good case

        @----------@                 @-----------@
                   @-------@@-------@
  2] By using async attribute in script tag
     -   <script async src >
     - meanwhile HTML parsing is going on. Any of the script with async tag are fetched from the network asynchronously.
     - As soon as scripts are fetched and are available in the browser. The HTML parsing stops and scripts are executed then and there
     - Once this script is executed then the HTML parsing continues like regular.
    
         @----------@        @-----------@
             @------@@------@

  3] By using defer attribute in script tag  
     - <script defer src >
     -  HTML parsing goes on and scripts are fetched in parallel.
     - and only executed once the HTML parsing is completed

         @-------------------------@
               @------@            @------@


        

- See Akshay's video for more understanding