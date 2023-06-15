"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[5632],{80231:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return u}});var n=t(87462),o=t(45987),i=(t(28387),t(10498)),s=t(91515),c=t(88072);const d=["components"],r={},m=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const l={_frontmatter:r},f=s.Z;function u(e){let{components:a}=e,t=(0,o.Z)(e,d);return(0,i.mdx)(f,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tutorial-step-7---sending-notifications"},"Tutorial Step 7 - Sending Notifications"),(0,i.mdx)("p",null,"Congratulations! You've reached the end of the tutorial. This last step actually has nothing to do with Cloud Manager or Adobe I/O. In this step, we're going to take the data retrieved and send a message to either Microsoft Teams or Slack. Or you could do both if you are feeling adventurous."),(0,i.mdx)("h2",{id:"setting-up-a-notification-webhook"},"Setting up a Notification Webhook"),(0,i.mdx)("p",null,"For both Microsoft Teams and Slack, notifications can be sent via an Incoming Webhook integration. The details are slightly different, but both follow the same basic concept -- when you want to post a message to a channel, you can make an HTTP POST request to a special URL generated specifically for this purpose."),(0,i.mdx)("p",null,"Documentation to create a webhook URL for Microsoft Teams can be found ",(0,i.mdx)("a",{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/connectors/connectors-using#setting-up-a-custom-incoming-webhook"},"here")),(0,i.mdx)("p",null,"Documentation to create a webhook URL for Slack can be found ",(0,i.mdx)("a",{href:"https://api.slack.com/incoming-webhooks",target:"_new"},"here"),"."),(0,i.mdx)("h3",{id:"notifying-slack"},"Notifying Slack"),(0,i.mdx)("p",null,"Sending a Slack notification can be done with just a simple JSON object containing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"text")," property. Let's create a new function which sends such an object to the webhook. To make the webhook easy to chnage, add a new variable to your ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file named ",(0,i.mdx)("inlineCode",{parentName:"p"},"SLACK_WEBHOOK")," and create this function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function notifySlack (message) {\n  fetch(process.env.SLACK_WEBHOOK, {\n    'method': 'POST',\n    'headers': { 'Content-Type': 'application/json' },\n    'body': JSON.stringify({\n      'text': message\n    })\n  })\n}\n")),(0,i.mdx)("p",null,"And the invoke this function instead of logging:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"if (STARTED === event['@type'] &&\n      EXECUTION === event['xdmEventEnvelope:objectType']) {\n  console.log('received execution start event')\n\n  const executionUrl = event['activitystreams:object']['@id']\n\n  getExecution(executionUrl).then(execution => {\n    notifySlack(`Execution for ${execution.program.name} started`)\n  })\n}\n")),(0,i.mdx)("p",null,"This will produce a Slack message which looks like this:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"648px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.687500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/5530d/slack-notification.webp 320w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/0c8fb/slack-notification.webp 640w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/ca6a2/slack-notification.webp 648w"],sizes:"(max-width: 648px) 100vw, 648px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/dd4a7/slack-notification.png 320w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/0f09e/slack-notification.png 640w","/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/244f0/slack-notification.png 648w"],sizes:"(max-width: 648px) 100vw, 648px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/daf118d9c619833f53c2a71997bbf846/244f0/slack-notification.png",alt:"Slack Notification",title:"Slack Notification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)(m,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Of course, feel free to make the message more complex if you want."),(0,i.mdx)(c.Z,{projectName:"adobe-cloudmanager-api-tutorial-step7-slack",mdxType:"Glitch"}),(0,i.mdx)("h3",{id:"notifying-microsoft-teams"},"Notifying Microsoft Teams"),(0,i.mdx)("p",null,"Sending a Microsoft Teams notification can be as simple as Slack -- just a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"text")," property. But Teams also supports some slightly fancier formatting options -- notifications can have a title and banner color, among other options. As with the Slack webhook, you should put the webhook URL in your ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file in a variable named ",(0,i.mdx)("inlineCode",{parentName:"p"},"TEAMS_WEBHOOK"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function notifyTeams (message) {\n  fetch(process.env.TEAMS_WEBHOOK, {\n    'method': 'POST',\n    'headers': { 'Content-Type': 'application/json' },\n    'body': JSON.stringify({\n      '@context': 'https://schema.org/extensions',\n      '@type': 'MessageCard',\n      'themeColor': '0072C6',\n      'title': 'Update from Cloud Manager',\n      'text': message\n    })\n  })\n}\n")),(0,i.mdx)(m,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"There are a number of other options for the payload sent to Microsoft. Please read the ",(0,i.mdx)("a",{href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/actionable-messages-via-connectors",target:"_new"},"documentation")," for more information."),(0,i.mdx)("p",null,"And then invoke this function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"if (STARTED === event['@type'] &&\n      EXECUTION === event['xdmEventEnvelope:objectType']) {\n  console.log('received execution start event')\n\n  const executionUrl = event['activitystreams:object']['@id']\n\n  getExecution(executionUrl).then(execution => {\n    notifyTeams(`Execution for ${execution.program.name} started`)\n  })\n}\n")),(0,i.mdx)("p",null,"This will produce a Microsoft Teams message which looks like this:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/5530d/msteams-notification.webp 320w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/0c8fb/msteams-notification.webp 640w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/94b1e/msteams-notification.webp 1280w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/77274/msteams-notification.webp 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/dd4a7/msteams-notification.png 320w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/0f09e/msteams-notification.png 640w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/bbbf7/msteams-notification.png 1280w","/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/917f8/msteams-notification.png 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/f7fd267bc326f4cd2afa8912ac3454d8/bbbf7/msteams-notification.png",alt:"Microsoft Teams Notification",title:"Microsoft Teams Notification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)(c.Z,{projectName:"adobe-cloudmanager-api-tutorial-step7-msteams",mdxType:"Glitch"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-7-sending-notifications-md-f2054b870056e1ff0099.js.map