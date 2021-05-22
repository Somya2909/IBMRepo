const { response } = require('express');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;

const app = express();
app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user,cb) => cb(null,user));
passport.deserializeUser((user,cb) => cb(null,user));

passport.use(new WebAppStrategy({
    "clientId": "3318dac8-a012-49e6-9961-6341ad309a06",
    "tenantId": "804aa730-78be-4001-9083-ac07d6c909e7",
    "secret": "NjVlMDI1YjctYzdmNC00M2Q1LTg5OTUtZmEwZjBlMzBkMzJi",
    "name": "appid-arya",
    "oAuthServerUrl": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/804aa730-78be-4001-9083-ac07d6c909e7",
    "profilesUrl": "https://eu-gb.appid.cloud.ibm.com",
    "discoveryEndpoint": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/804aa730-78be-4001-9083-ac07d6c909e7/.well-known/openid-configuration",
    "type": "regularwebapp",
    "scopes": [],
    "redirectUri" : "http://localhost:3000/appid/callback"
  }));

  app.get('/appid/login', passport.authenticate(WebAppStrategy.STRATEGY_NAME,{
      successRedirect : '/',
      forceLogin : true
  } ));


app.get('/appid/callback', passport.authenticate(WebAppStrategy.STRATEGY_NAME) );

app.get('/appid/logout', function(req, res){
   WebAppStrategy.logout(req);
   res.redirect('/');
});
//app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.get('/api',(req, res, next) =>{
    if (req.user){
        next();
    }else{
        res.status(401).send("Unauthorized");
    } 
});

app.get('/api/user',(req,res)=>{
    res.json({
        user:{
            name: req.user.name
        }
    });
})
app.use(express.static('./public'));
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
    
});