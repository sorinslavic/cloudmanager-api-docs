"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[7495],{3555:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return c}});var a,t=i(87462),p=i(63366),o=(i(28387),i(10498)),d=i(99536),r=["components"],l={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),m={_frontmatter:l},h=d.Z;function c(e){var n=e.components,i=(0,p.Z)(e,r);return(0,o.mdx)(h,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"editing-pipelines"},"Editing Pipelines"),(0,o.mdx)("p",null,"The Cloud Manager API supports partial editing of pipeline by accepting ",(0,o.mdx)("inlineCode",{parentName:"p"},"PATCH")," requests on the pipeline endpoint. The body of these requests follows the same\nstructure as the response to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," request to the pipeline endpoint. However, only the changes need to be submitted. Below are a number of examples of the types of changes which are supported using this API."),(0,o.mdx)("h3",{id:"editing-the-repository-or-branch"},"Editing the Repository or Branch"),(0,o.mdx)("p",null,"The body for changing the repository or branch of a pipeline is done by submitting the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BUILD")," phase specifying either the ",(0,o.mdx)("inlineCode",{parentName:"p"},"branch")," or ",(0,o.mdx)("em",{parentName:"p"},"both")," the ",(0,o.mdx)("inlineCode",{parentName:"p"},"branch")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"repositoryId")," properties. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"BUILD_1",\n      "type":"BUILD",\n      "repositoryId" : "1",\n      "branch": "develop"\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"building-a-tag"},"Building a Tag"),(0,o.mdx)("p",null,"Using this API, it is possible to specify a tag name instead of a branch name. To do this, specify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"branch")," value to ",(0,o.mdx)("inlineCode",{parentName:"p"},"refs/tags/TAGNAME"),". For example, if the tag is ",(0,o.mdx)("inlineCode",{parentName:"p"},"release-20200214"),", you would execute:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"BUILD_1",\n      "type":"BUILD",\n      "repositoryId" : "1",\n      "branch": "refs/tags/release-20200214"\n    }\n  ]\n}\n')),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Specifying a tag is ",(0,o.mdx)("strong",{parentName:"p"},"only")," possible using this API, not the Cloud Manager UI."),(0,o.mdx)("h3",{id:"changing-the-deployment-environment"},"Changing the Deployment Environment"),(0,o.mdx)("p",null,"Changing the target environment for a pipeline can be done by by submitting the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DEPLOY")," phase which needs to be changed. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"DEPLOY_1",\n      "type":"DEPLOY",\n      "environmentId" : "15"\n    }\n  ]\n}\n')),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Production pipelines will include two deploy phases -- be sure to specify the correct ",(0,o.mdx)("inlineCode",{parentName:"p"},"name"),"."),(0,o.mdx)("h3",{id:"changing-the-dispatcher-invalidation-or-flush-paths"},"Changing the Dispatcher Invalidation or Flush Paths"),(0,o.mdx)("p",null,"Specifically for AMS pipelines, the dispatcher paths which will be invalidated or flushed as part of the deploy process can be specified as part of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DEPLOY")," phase. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"DEPLOY_1",\n      "type":"DEPLOY",\n      "steps": [\n        "name": "deploy",\n        "options": {\n          "dispatcherCacheInvalidationPaths": [\n            "/content/mysite/home.html"\n          ],\n          "dispatcherCacheFlushPaths": [\n            "/etc.clientlibs"\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.mdx)("h2",{id:"invalidating-a-pipelines-cache"},"Invalidating a Pipeline's Cache"),(0,o.mdx)("p",null,"Deleting a pipeline can be done by executing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DELETE")," request to the pipeline's cache endpoint, accessible via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/cache")," HAL Link of the pipeline endpoint."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"DELETE https://cloudmanager.adobe.io/api/program/4/pipeline/1/cache\n")),(0,o.mdx)("h2",{id:"deleting-pipelines"},"Deleting Pipelines"),(0,o.mdx)("p",null,"Deleting a pipeline can be done by executing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DELETE")," request to the pipeline endpoint."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"DELETE https://cloudmanager.adobe.io/api/program/4/pipeline/1\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-usage-editing-and-deleting-pipelines-md-0318517a0dc13d99022f.js.map