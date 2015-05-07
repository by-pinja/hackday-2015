# Hackday 2015

## What is this?
todo

## Why?
todo

## Directory structure
```
backend/    = Sails.js server, just API nothing else
frontend/   = Slush-angular, just frontend side
sites/      = Individual widget sites 
```

### backend
Folder contains main backend server which uses Sails.js. See more info at https://github.com/balderdashy/sails

### frontend
Folder contains main frontend application for info-tv application which is based on slush-angular (AngularJS using 
Google Angular App Structure Recommendations). See more info at https://github.com/slushjs/slush-angular 

### sites
Folder contains individual sites that can be that can be configured to shown on URL viewer widget. Basically these 
are the "wild-wild-west" part of info-tv application.

## Installation
First of all you have to install <code>npm</code> and <code>node.js</code> to your box. Installation instructions can
be found [here](http://sailsjs.org/#/getStarted?q=what-os-do-i-need).

After that you need to install <code>bower</code>, <code>gulp</code> and <code>sails</code> main packages to make all 
things to happen. These can be installed with following commands on your *nix box.
<pre>
sudo npm install bower -g
sudo npm install gulp -g
sudo npm install sails -g
</pre>

After that you need to download codes of this project to your computer, please follow instructions below.

### Back- and frontend installation
Navigate yourself to directory where you downloaded or cloned this repo and run following command on shell:
<pre>
npm install
</pre>

That will install all needed packages for back- and frontend. You can also install those separately just by run that
same command on <code>backend</code> or/and <code>frontend</code> directories.

### Individual sites installation
See README.MD file on each folder under the ```sites``` folder, all necessary information should be there.

### Configuration
You can configure your <code>backend</code> and <code>frontend</code> applications to use your environment specified 
settings. Basically by default you don't need to make any configurations at all. With default configuration backend will 
be run on http://localhost:1337 and frontend on http://localhost:3001 (development) http://localhost:3000 (production).

#### Backend
There is an example of backend configuration file on following path.

<pre>
/backend/config/local_example.js
</pre>

Just copy this to <code>/backend/config/local.js</code> and make necessary changes to it. Note that this 
<code>local.js</code> file is in .gitignore so it won't go to VCS at any point.

#### Frontend
There is an example of front configuration file on following path.

<pre>
/frontend/config/config_example.json
</pre>

Just copy this to <code>/frontend/config/config.json</code> and make necessary changes to it. Note that this 
<code>config.json</code> file is in .gitignore so it won't go to VCS at any point.

#### Notes
If you're changing your backend API url to another than <code>http://localhost:1337</code> you need to make 
<code>frontend/config/config.json</code> with proper content on it. Use that example file as start.

### Running of this project
You have to start both <code>backend</code> and <code>frontend</code> servers to run this project. This can be done
simply just typing ```npm start``` command on those folders.

#### Notes
You can also start backend with ```sails lift``` command and frontend with ```gulp serve``` command. If you need to
test deployment version a.k.a dist version of frontend first you need to run ```gulp dist``` command which will create
minified version of frontend application to ```dist``` folder. After that you can serve frontend application with your
favorite HTTP server or just type ```gulp production``` command which start dist version within standalone node server.

## Author
Protacon Solutions

### People behind this
- [Tarmo Leppänen](https://github.com/tarlepp)
- [Jaakko Kaski](https://github.com/ajaskaFIN)
- [Heikki-Jussi Niemi](https://github.com/Hekku2)
- [Mika Vilpas](https://github.com/sp3ctum)
- [Ville Pelho](https://github.com/vilbertti)


## License
The MIT License (MIT)

Copyright (c) 2015 Protacon Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
