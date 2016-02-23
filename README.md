# A React + Meteor Base
A starting point for [Meteor](https://www.meteor.com) (1.3-beta.11), [React](https://facebook.github.io/react/) (0.14.7) and [Material-UI](http://www.material-ui.com/) (0.14.4) web applications.

[Github](https://github.com/PeterChauYeg/meteor-react-base/)

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
12. Set staging server in `package.json`
13. Deploy to a staging server with `npm run-script deploy-staging`
14. Make your initial commit with `git commit -m "inital commit"

## Notes
-  Lint your `.js and .jsx` files with `eslint *.jsx`  
-  When using `meteor deploy`, Meteor will provide a mailgun email. 
-  If cloning to cloud9, you'll need to add `--port $IP:$PORT` to your npm scripts
-  Reset development database with `npm run-script reset-development`
-  Reset staging database by deleting the deployment with `npm run-script reset-development`, then redeploy

## NPM Packages:
material-ui                 0.14.4   
react                       0.14.7   
react-dom                   0.14.7   
react-helmet                1.0.0   
react-mounter               1.0.0   
react-tap-event-plugin      0.2.2   
eslint                      1.10.3   
eslint-plugin-react         3.16.1   

## Meteor Packages:
check                       1.1.1-beta.11   
ecmascript                  0.4.0-beta.11  
email                       1.0.9-beta.11  
es5-shim                    4.3.2-beta.11  
fortawesome:fontawesome     4.5.0  
fourseven:scss              3.4.1   
jquery                      1.11.5-beta.11  
kadira:flow-router          2.10.1  
meteor                      1.1.11-beta.11  
meteor-base                 1.0.1  
mobile-experience           1.0.1  
mongo                       1.1.4-beta.11  
okgrow:analytics            1.0.4  
seba:minifiers-autoprefixer 0.0.2  
session                     1.1.2-beta.11   
themeteorchef:bert          2.10   
tracker                     1.0.10-beta.11  

**Laboratory One**