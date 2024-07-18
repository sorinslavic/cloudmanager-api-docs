"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[4999],{38645:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t=a(87462),o=a(45987),i=(a(28387),a(10498)),r=a(91515);const m=["components"],d={},l=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const s={_frontmatter:d},u=r.Z;function c(e){let{components:n}=e,a=(0,o.Z)(e,m);return(0,i.mdx)(u,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"creating-programs-and-environments"},"Creating Programs and Environments"),(0,i.mdx)("h2",{id:"creating-aem-cloud-service-programs"},"Creating AEM Cloud Service Programs"),(0,i.mdx)("p",null,"Based on the entitlements available for an organization, AEM Cloud Service programs may be created through the Cloud Manager API. This is done by executing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/programs")," HAL link of the tenant resource. To discover the tenant resource, you can either navigate to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/tenant")," HAL link from any existing program ",(0,i.mdx)("em",{parentName:"p"},"or")," execute a ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET")," request to ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://cloudmanager.adobe.io/api/tenants"),". This response will contain exactly one tenant resource."),(0,i.mdx)("h3",{id:"creating-a-production-program"},"Creating a Production Program"),(0,i.mdx)("p",null,"To create a production program, the body of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," request needs to include the type ",(0,i.mdx)("inlineCode",{parentName:"p"},"aem_cloud_service"),", a name, and at least one solution name. The allowed solutions are ",(0,i.mdx)("inlineCode",{parentName:"p"},"aemsites")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"aemassets"),"."),(0,i.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Creating AEM Forms programs will be available in a forthcoming release."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},'POST https://cloudmanager.adobe.io/api/tenant/1/programs\n\n{\n  "name": "My Second Program",\n  "type": "aem_cloud_service",\n  "solutionNames": ["aemsites"]\n}\n')),(0,i.mdx)("h3",{id:"creating-a-sandbox-program"},"Creating a Sandbox Program"),(0,i.mdx)("p",null,"To create a sandbox program, the body of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," request needs to include the type ",(0,i.mdx)("inlineCode",{parentName:"p"},"aem_cloud_service"),", a name, and a capabilities object that specifies that it is a sandbox program."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},'POST https://cloudmanager.adobe.io/api/tenant/1/programs\n\n{\n  "name": "My Second Program",\n  "type": "aem_cloud_service",\n  "capabilities": {\n    "sandbox": true\n  }\n}\n')),(0,i.mdx)("h2",{id:"creating-aem-cloud-service-environments"},"Creating AEM Cloud Service Environments"),(0,i.mdx)("p",null,"In order to find the set of currently available regions, execute a GET request to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/regions")," HAL link of the program."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},"GET https://cloudmanager.adobe.io/api/program/4/regions\n")),(0,i.mdx)("p",null,"This will return a list like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},'{\n  "_embedded": {\n    "regions": [\n      {\n        "name": "va7"\n      },\n      {\n        "name": "nld2"\n      }\n    ]\n  },\n  "_totalNumberOfItems": 2\n}\n')),(0,i.mdx)("p",null,"The set of available regions will vary based on capacity and entitlements, so always check this list before creating an environment. The superset of possible regions are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"aus5")," - Australia Southeast"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"can2")," - Canada"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"deu6")," - Germany"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"gbr9")," - UK South"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"jpn4")," - Japan"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"nld2")," - West Europe"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sgp5")," - Singapore"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"va7")," - East US"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"wa1")," - West US")),(0,i.mdx)("h3",{id:"creating-a-single-region-environment"},"Creating a Single Region Environment"),(0,i.mdx)("p",null,"Using the region value, you can then execute a POST request to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/environments")," HAL link of the program with the desired name and type."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},'POST https://cloudmanager.adobe.io/api/program/4/environments\n\n{\n  "name" : "my-second-dev-environment",\n  "type" : "dev",\n  "region" : "va7"\n}\n')),(0,i.mdx)("h3",{id:"creating-a-multi-region-environment"},"Creating a Multi Region Environment"),(0,i.mdx)("p",null,"To create multi region, the body of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," request needs to include the ",(0,i.mdx)("inlineCode",{parentName:"p"},"secondaryRegionDeployments")," that specifies the regions in which additional publish instances should be provisioned.\nFor example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-plaintext"},'POST https://cloudmanager.adobe.io/api/program/4/environments\n\n{\n  "name" : "my-multi-region-prod-environment",\n  "type" : "prod",\n  "region" : "va7",\n  "secondaryRegionDeployments" : [\n     {\n       "region" : "wa1"\n     },\n     {\n       "region" : "sgp5"\n     }\n  ]\n}\n')),(0,i.mdx)("h3",{id:"important-limitations"},"Important Limitations"),(0,i.mdx)("p",null,"Usage of this API will be limited by the existing environment limits. Specifically:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Sandbox programs are limited to one environment of each type."),(0,i.mdx)("li",{parentName:"ul"},"Production programs are limited to one stage and one production environment."),(0,i.mdx)("li",{parentName:"ul"},"The total number of dev environments in production programs is limited to the number of dev environments contracted for that organization.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-usage-creating-programs-and-environments-md-309fe339e03b0324d071.js.map