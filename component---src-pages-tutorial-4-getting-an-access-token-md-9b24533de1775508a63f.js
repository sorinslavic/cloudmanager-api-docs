"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[3049],{87721:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return p}});var o=t(87462),a=t(63366),s=(t(28387),t(10498)),i=t(99536),r=t(77402),d=["components"],c={},l={_frontmatter:c},h=i.Z;function p(e){var n=e.components,t=(0,a.Z)(e,d);return(0,s.mdx)(h,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"tutorial-step-4---obtaining-an-access-token"},"Tutorial Step 4 - Obtaining an Access Token"),(0,s.mdx)("p",null,"The JSON object sent to the webhook is very minimal -- it largely consists of event metadata (e.g. the timestamp of the event) and a URL to either the pipeline execution. In general, the webhook implementation will need to call the Cloud Manager API to get additional information. In the case of this tutorial, the webhook is actually going to make two API calls for more information. That, however, is for the next step..."),(0,s.mdx)("p",null,"In this step, we're going to lay the groundwork for making those API calls by obtaining an ",(0,s.mdx)("em",{parentName:"p"},"access token")," which will be passed to the API for the purpose of authentication. Adobe I/O uses JSON Web Tokens (JWT) to obtain access tokens. The webhook will create a signed JWT and then ",(0,s.mdx)("em",{parentName:"p"},"exchange")," that with Adobe's identity management system for an access token."),(0,s.mdx)("h2",{id:"setting-up-the-environment-variables"},"Setting up the Environment Variables"),(0,s.mdx)("p",null,"The JWT token is created, signed and exchanged using the ",(0,s.mdx)("inlineCode",{parentName:"p"},"API_KEY"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"CLIENT_SECRET"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"ORGANIZATION"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"TECHNICAL_ACCOUNT_ID")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," variables, so the first step is to make sure the ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file has all of these variable populated. You should have done this in Step 0, but if not (or if you are using Glitch), you will need to do this now."),(0,s.mdx)("h2",{id:"adding-dependencies"},"Adding Dependencies"),(0,s.mdx)("p",null,"We're going to use two new third-party dependencies for the exchange process. First, ",(0,s.mdx)("a",{href:"http://kjur.github.io/jsrsasign/",target:"_new"},"jsrsasign")," is used to sign the JWT. Then, ",(0,s.mdx)("a",{href:"https://github.com/bitinn/node-fetch",target:"_new"},"node-fetch")," is used to make the exchange HTTP request. If you are editing the script locally, you'll need to install these two packages:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install jsrsasign node-fetch\n")),(0,s.mdx)("p",null,"If you are running the webhook in Glitch, you'll need to edit the ",(0,s.mdx)("inlineCode",{parentName:"p"},"package.json")," file manually and add these two packages to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"dependencies")," object. Take a look at the Remix link below if you need help doing this."),(0,s.mdx)("p",null,"The header of the script also needs to be updated to include these new dependencies, along with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"URLSearchParams")," class:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'const express = require("express");\nconst bodyParser = require("body-parser");\nconst crypto = require("crypto");\nconst jsrsasign = require("jsrsasign");\nconst fetch = require("node-fetch");\n\nconst { URLSearchParams } = require("url");\n')),(0,s.mdx)("h2",{id:"writing-the-getaccesstoken-function"},"Writing the ",(0,s.mdx)("inlineCode",{parentName:"h2"},"getAccessToken")," Function"),(0,s.mdx)("p",null,"As the code to obtain an access token is fairly complicated, it makes sense to organize it into a separate function. The function has three parts. First, it generates the JWT payload, then the signed token is created, and then the exchange is done. Finally, the function returns the access token."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'async function getAccessToken() {\n  const EXPIRATION = 60 * 60; // 1 hour\n\n  const header = {\n    alg: "RS256",\n    typ: "JWT",\n  };\n\n  const payload = {\n    exp: Math.round(new Date().getTime() / 1000) + EXPIRATION,\n    iss: process.env.ORGANIZATION_ID,\n    sub: process.env.TECHNICAL_ACCOUNT_ID,\n    aud: `https://ims-na1.adobelogin.com/c/${process.env.API_KEY}`,\n    "https://ims-na1.adobelogin.com/s/ent_cloudmgr_sdk": true,\n  };\n\n  const jwtToken = jsrsasign.jws.JWS.sign(\n    "RS256",\n    JSON.stringify(header),\n    JSON.stringify(payload),\n    process.env.PRIVATE_KEY\n  );\n\n  const response = await fetch(\n    "https://ims-na1.adobelogin.com/ims/exchange/jwt",\n    {\n      method: "POST",\n      body: new URLSearchParams({\n        client_id: process.env.API_KEY,\n        client_secret: process.env.CLIENT_SECRET,\n        jwt_token: jwtToken,\n      }),\n    }\n  );\n\n  const json = await response.json();\n\n  return json["access_token"];\n}\n')),(0,s.mdx)("h2",{id:"getting-the-access-token-in-the-webhook-route"},"Getting the Access Token in the Webhook Route"),(0,s.mdx)("p",null,"The access token is an asynchronous function so it returns a ",(0,s.mdx)("inlineCode",{parentName:"p"},"Promise"),". So logging of the access token (which is all we're doing in this step) has to be done in a closure invoked when the Promise is resolved:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'if (\n  STARTED === event["@type"] &&\n  EXECUTION === event["xdmEventEnvelope:objectType"]\n) {\n  console.log("received execution start event");\n  getAccessToken().then((accessToken) => {\n    console.log(accessToken);\n  });\n}\n')),(0,s.mdx)("h2",{id:"running-the-updated-webhook"},"Running the Updated Webhook"),(0,s.mdx)("p",null,"If you are running the script locally, you'll need to stop and restart the node process. You don't need to restart ngrok. In fact, if you do restart ngrok, the URL will likely change and you'll need to go back into the ",(0,s.mdx)("a",{href:"https://developer.adobe.com/console/projects",target:"_new"},"Adobe Developer Console")," and update the Webhook URL."),(0,s.mdx)("p",null,"If you are running the script through Glitch, Glitch will restart automatically. If you don't want to update your existing Glitch project (or lost it), you can click the button below to start over."),(0,s.mdx)(r.Z,{projectName:"adobe-cloudmanager-api-tutorial-step4",mdxType:"Glitch"}),(0,s.mdx)("h2",{id:"next-step"},"Next Step"),(0,s.mdx)("p",null,"With all that done, you're ready to proceed to the next step. Continue to ",(0,s.mdx)("a",{parentName:"p",href:"5-getting-the-execution.md"},"Step 5"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-4-getting-an-access-token-md-9b24533de1775508a63f.js.map