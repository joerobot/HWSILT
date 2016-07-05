## Hey! What Should I Listen To?

One of my first projects, but I love the design of it. A simple artist recommendation tool using the Last.fm API.


### Design

When I decided to build a recommendation tool, I knew that I wanted to make something in the same vein as http://wtfsigfd.com/ but a little friendlier 😚

As the project is mainly text based, typeface choice was important to me, my criteria were: Geometric, Casual and Free. Arcon, delivered.

Added a muted red and chalky sky blue for accents.


### Build 

This was _essentially_ my first API project. So obviously the main challenge was figuring how to integrate a request in as elegant a way as possible. 

Another challenge was animating the result change using jQuery. I wanted to create an effect whereby the current result slides away and pops straight back in as a different artist. To stop the rest of the layout breaking apart, I put the result inside an absolutely positioned div.


### Improvements

- Currently displays a random artist from an array of 20, but does not remove an artist from the pool once seen.
- Button hover effect is pretty hacky… slightly ineffective.
