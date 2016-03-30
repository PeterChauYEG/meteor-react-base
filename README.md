# A React + Meteor Base
A starting point for [Meteor](https://www.meteor.com) (1.3), [React](https://facebook.github.io/react/) (0.14.7) and [Material-UI](http://www.material-ui.com/) (0.14.4) web applications.

[Github](https://github.com/PeterChauYeg/meteor-react-base/)

![Demo Screenshot](http://res.cloudinary.com/dqza9dw1h/image/upload/s--4c7JF4Xz--/q_jpegmini:1/v1459310414/laboratory%20one/react_meteor_base.jpg)

## How to use
1. Clone this repo with `git pull https://github.com/PeterChauYEG/meteor-react-base.git` or with [c9 ide](https://c9.io/c/JVUChbVycba) (referral link)   
2. Edit `README.md`
3. Remove current git remote with `git remote remove origin`
4. Add your git remotes with `git remote add origin https/github.com/you/your-repo.git`
5. Set the email addresses which messages should go to and come from in `settings-production.json settings-development.json`
6. Set analytics in `settings-production.json`  
7. Initalize npm with `npm init`
8. Install npm packages with `npm install`
9. Run with `npm run-script start-development`
10. Generate favicons. I use [realfavicongenerator](http://realfavicongenerator.net)
11. Edit `<head>` in `Layout.jsx`
12. Make your initial commit with `git commit -m "inital commit"

## Notes
-  Lint your `.js and .jsx` files with `eslint *.jsx`  
-  If cloning to cloud9, you'll need to add `--port $IP:$PORT` to your npm scripts
-  Reset development database with `npm run-script reset-development`
-  Reset staging database by deleting the deployment with `npm run-script reset-development`, then redeploy

## NPM Packages:
material-ui                 0.14.4   
react                       0.14.8   
react-dom                   0.14.8   
react-helmet                3.0.0   
react-mounter               1.1.0   
react-tap-event-plugin      0.2.2   
eslint                      2.5.3   
eslint-plugin-react         4.2.3   

## Meteor Packages:
check                       1.1.2   
ecmascript                  0.4.1  
email                       1.0.10  
es5-shim                    4.5.8 
fortawesome:fontawesome     4.5.0  
fourseven:scss              3.4.1   
jquery                      1.11.6  
kadira:flow-router          2.11.0  
meteor                      1.1.12  
meteor-base                 1.0.2 
mobile-experience           1.0.2  
mongo                       1.1.5  
okgrow:analytics            1.0.5  
seba:minifiers-autoprefixer 0.0.2  
session                     1.1.3   
themeteorchef:bert          2.1.0  
tracker                     1.0.11  

**Laboratory One**