/*
 MIT License

 Copyright 2019, 2020 - IBM Corp.

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial
 portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const OAuthContext = require('ibm-verify-sdk').OAuthContext;
//var PORT = process.env.PORT || 3000;
const rls = require('readline-sync');
const express = require('express');
const app =express();
app.use(express.static('./public'));   // Use from public folder

//Start server
//app.listen(3001,() =>{
//    console.log('Listening on http://localhost:3001');
//});

require('dotenv').config();

const config = {
    tenantUrl: process.env.TENANT_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    responseType: process.env.RESPONSE_TYPE,
    flowType: process.env.FLOW_TYPE,
    scope: process.env.SCOPE,
};

// var PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});


