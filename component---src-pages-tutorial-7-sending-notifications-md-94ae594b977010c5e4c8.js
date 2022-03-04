"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[5632],{80231:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return u}});var n,o=t(87462),i=t(63366),s=(t(28387),t(10498)),c=t(99536),d=t(77402),r=["components"],m={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:m},f=c.Z;function u(e){var a=e.components,t=(0,i.Z)(e,r);return(0,s.mdx)(f,(0,o.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"tutorial-step-7---sending-notifications"},"Tutorial Step 7 - Sending Notifications"),(0,s.mdx)("p",null,"Congratulations! You've reached the end of the tutorial. This last step actually has nothing to do with Cloud Manager or Adobe I/O. In this step, we're going to take the data retrieved and send a message to either Microsoft Teams or Slack. Or you could do both if you are feeling adventurous."),(0,s.mdx)("h2",{id:"setting-up-a-notification-webhook"},"Setting up a Notification Webhook"),(0,s.mdx)("p",null,"For both Microsoft Teams and Slack, notifications can be sent via an Incoming Webhook integration. The details are slightly different, but both follow the same basic concept -- when you want to post a message to a channel, you can make an HTTP POST request to a special URL generated specifically for this purpose."),(0,s.mdx)("p",null,"Documentation to create a webhook URL for Microsoft Teams can be found ",(0,s.mdx)("a",{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/connectors/connectors-using#setting-up-a-custom-incoming-webhook"},"here")),(0,s.mdx)("p",null,"Documentation to create a webhook URL for Slack can be found ",(0,s.mdx)("a",{href:"https://api.slack.com/incoming-webhooks",target:"_new"},"here"),"."),(0,s.mdx)("h3",{id:"notifying-slack"},"Notifying Slack"),(0,s.mdx)("p",null,"Sending a Slack notification can be done with just a simple JSON object containing a ",(0,s.mdx)("inlineCode",{parentName:"p"},"text")," property. Let's create a new function which sends such an object to the webhook. To make the webhook easy to chnage, add a new variable to your ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file named ",(0,s.mdx)("inlineCode",{parentName:"p"},"SLACK_WEBHOOK")," and create this function:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"function notifySlack (message) {\n  fetch(process.env.SLACK_WEBHOOK, {\n    'method': 'POST',\n    'headers': { 'Content-Type': 'application/json' },\n    'body': JSON.stringify({\n      'text': message\n    })\n  })\n}\n")),(0,s.mdx)("p",null,"And the invoke this function instead of logging:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"if (STARTED === event['@type'] &&\n      EXECUTION === event['xdmEventEnvelope:objectType']) {\n  console.log('received execution start event')\n\n  const executionUrl = event['activitystreams:object']['@id']\n\n  getExecution(executionUrl).then(execution => {\n    notifySlack(`Execution for ${execution.program.name} started`)\n  })\n}\n")),(0,s.mdx)("p",null,"This will produce a Slack message which looks like this:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"648px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.687500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/cb523/slack-notification.webp 320w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/797b9/slack-notification.webp 640w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/6d369/slack-notification.webp 648w"],sizes:"(max-width: 648px) 100vw, 648px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/72799/slack-notification.png 320w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/6af66/slack-notification.png 640w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/3996e/slack-notification.png 648w"],sizes:"(max-width: 648px) 100vw, 648px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/3996e/slack-notification.png",alt:"Slack Notification",title:"Slack Notification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Of course, feel free to make the message more complex if you want."),(0,s.mdx)(d.Z,{projectName:"adobe-cloudmanager-api-tutorial-step7-slack",mdxType:"Glitch"}),(0,s.mdx)("h3",{id:"notifying-microsoft-teams"},"Notifying Microsoft Teams"),(0,s.mdx)("p",null,"Sending a Microsoft Teams notification can be as simple as Slack -- just a single ",(0,s.mdx)("inlineCode",{parentName:"p"},"text")," property. But Teams also supports some slightly fancier formatting options -- notifications can have a title and banner color, among other options. As with the Slack webhook, you should put the webhook URL in your ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file in a variable named ",(0,s.mdx)("inlineCode",{parentName:"p"},"TEAMS_WEBHOOK"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"function notifyTeams (message) {\n  fetch(process.env.TEAMS_WEBHOOK, {\n    'method': 'POST',\n    'headers': { 'Content-Type': 'application/json' },\n    'body': JSON.stringify({\n      '@context': 'https://schema.org/extensions',\n      '@type': 'MessageCard',\n      'themeColor': '0072C6',\n      'title': 'Update from Cloud Manager',\n      'text': message\n    })\n  })\n}\n")),(0,s.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"There are a number of other options for the payload sent to Microsoft. Please read the ",(0,s.mdx)("a",{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/actionable-messages-via-connectors",target:"_new"},"documentation")," for more information."),(0,s.mdx)("p",null,"And then invoke this function:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"if (STARTED === event['@type'] &&\n      EXECUTION === event['xdmEventEnvelope:objectType']) {\n  console.log('received execution start event')\n\n  const executionUrl = event['activitystreams:object']['@id']\n\n  getExecution(executionUrl).then(execution => {\n    notifyTeams(`Execution for ${execution.program.name} started`)\n  })\n}\n")),(0,s.mdx)("p",null,"This will produce a Microsoft Teams message which looks like this:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/cb523/msteams-notification.webp 320w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/797b9/msteams-notification.webp 640w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/4b075/msteams-notification.webp 1280w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/5a519/msteams-notification.webp 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/72799/msteams-notification.png 320w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/6af66/msteams-notification.png 640w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/21b4d/msteams-notification.png 1280w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/c95f0/msteams-notification.png 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/21b4d/msteams-notification.png",alt:"Microsoft Teams Notification",title:"Microsoft Teams Notification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(d.Z,{projectName:"adobe-cloudmanager-api-tutorial-step7-msteams",mdxType:"Glitch"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-7-sending-notifications-md-94ae594b977010c5e4c8.js.map