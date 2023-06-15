"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[1035],{27683:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return r},default:function(){return c}});var o=a(87462),t=a(45987),d=(a(28387),a(10498)),m=a(91515);const i=["components"],r={},l={_frontmatter:r},s=m.Z;function c(e){let{components:n}=e,a=(0,t.Z)(e,i);return(0,d.mdx)(s,(0,o.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adding-custom-domain-names"},"Adding Custom Domain Names"),(0,d.mdx)("p",null,"Custom domain names can be added to an environment in your AEM Cloud Service program through the Cloud Manager API. The steps required are:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#retrieve-custom-domains"},"Retrieve the custom domains available.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#obtain-dns-txt-record-value"},"Obtain the DNS TXT record value of the domain you wish to add.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#add-custom-domain-name"},"Add the custom domain using the retrieved information"))),(0,d.mdx)("p",null,"This documents details the steps for adding custom domain names. Update, delete, and other APIs are available, but not covered in detail in this section.om domain name."),(0,d.mdx)("h2",{id:"retrieve-custom-domains"},"Retrieve Custom Domains"),(0,d.mdx)("p",null,"Each program resource has a HAL link named ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/domainNames"),". To generate a list of existing custom domain names in your program, execute a GET request to the HAL link."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-shell"},"GET https://cloudmanager.adobe.io/api/program/1234/domainNames\n")),(0,d.mdx)("p",null,"This will return a list similar to the following."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "_links": {\n        "http://ns.adobe.com/adobecloud/rel/domain-name/certificates": {\n            "href": "/api/program/1234/certificates",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/domain-name/deploy": {\n            "href": "/api/program/1234/domain-name/403/deploy",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/domain-name/verify": {\n            "href": "/api/program/1234/domain-name/403/verify",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/environment": {\n            "href": "/api/program/1234/environment/1",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/program": {\n            "href": "/api/program/1234",\n            "templated": false\n        },\n        "self": {\n            "href": "/api/program/1234/domain-name/403",\n            "templated": false\n        }\n    },\n    "id": 403,\n    "name": "andu.yahoo.com",\n    "dnsTxtRecord": "adobe-aem-verification=andu.yahoo.com/53/2/504af30f-3d87-4bcf-a5a1-95ecc5fb035d",\n    "dnsZone": "yahoo.com.",\n    "environmentId": 1,\n    "certificateId": 1,\n    "createdAt": "2020-07-03T10:59:35.175+0000",\n    "updatedAt": "2020-07-03T10:59:35.175+0000",\n    "status": "not_verified",\n    "environmentName": "testenv-stage",\n    "certificateName": "default-certificate-name"\n}\n')),(0,d.mdx)("h2",{id:"obtain-dns-txt-record-value"},"Obtain DNS TXT Record Value"),(0,d.mdx)("p",null,"To add a custom domain, you must get a DNS TXT record value and zone for the domain name. In order to do this, execute a POST request by appending ",(0,d.mdx)("inlineCode",{parentName:"p"},"/validate")," to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/domainNames")," HAL link of the program."),(0,d.mdx)("p",null,"The body of the POST request must include the following in order to validate if the domain entry can be created."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Custom domain name "),(0,d.mdx)("li",{parentName:"ul"},"Environment ID"),(0,d.mdx)("li",{parentName:"ul"},"SSL certificate ID")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-shell"},'POST https://cloudmanager.adobe.io/api/program/1234/domainNames/validate\n{\n    "name": "andu.yahoo.com",\n    "environmentId": 2,\n    "certificateId": 1\n}\n')),(0,d.mdx)("p",null,"This will return a response body that contains the domain zone and a TXT record that is used as an identifier."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "_links": {\n        "http://ns.adobe.com/adobecloud/rel/domain-name/certificates": {\n            "href": "/api/program/53/certificates",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/domain-name/deploy": {\n            "href": "/api/program/53/domain-name//deploy",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/domain-name/verify": {\n            "href": "/api/program/53/domain-name//verify",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/environment": {\n            "href": "/api/program/53/environment/",\n            "templated": false\n        },\n        "http://ns.adobe.com/adobecloud/rel/program": {\n            "href": "/api/program/53",\n            "templated": false\n        },\n        "self": {\n            "href": "/api/program/53/domain-name/",\n            "templated": false\n        }\n    },\n    "dnsTxtRecord": "adobe-aem-verification=andu.yahoo.com/53/2/504af30f-3d87-4bcf-a5a1-95ecc5fb035d",\n    "dnsZone": "yahoo.com."\n}\n')),(0,d.mdx)("h2",{id:"add-custom-domain-name"},"Add Custom Domain Name"),(0,d.mdx)("p",null,"Having retrieved the necessary information you can now add your custom domain name. To do this, execute a POST request to ",(0,d.mdx)("inlineCode",{parentName:"p"},"http://ns.adobe.com/adobecloud/rel/domainNames")," HAL link of the program. "),(0,d.mdx)("p",null,"The body of the POST request needs to include the following data."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Custom domain name"),(0,d.mdx)("li",{parentName:"ul"},"Environment ID"),(0,d.mdx)("li",{parentName:"ul"},"Certificate ID"),(0,d.mdx)("li",{parentName:"ul"},"DNS TXT record value"),(0,d.mdx)("li",{parentName:"ul"},"DNS zone")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-shell"},'POST https://cloudmanager.adobe.io/api/program/1234/domainNames/\n{\n  "name": "customer.domain.com",\n  "environmentId": 0,\n  "certificateId": 0,\n  "dnsTxtRecord": "adobe-aem-verification=www.adobe.com/1/2/ab-cd-ef",\n  "dnsZone": "adobe.com."\n}\n')),(0,d.mdx)("p",null,"This will return a response similar to the following."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"id": 0,\n"name": "customer.domain.com",\n"status": "ready",\n"type": "CNAME",\n"dnsResolution": [\n{}\n],\n"dnsTxtRecord": "adobe-aem-verification=www.adobe.com/1/2/ab-cd-ef",\n"dnsZone": "adobe.com.",\n"environmentId": 0,\n"environmentName": "customerEnvironmentName",\n"tier": "publish",\n"certificateId": 0,\n"certificateName": "My certificate",\n"certificateExpireAt": "2019-08-24T14:15:22Z",\n"createdAt": "2019-08-24T14:15:22Z",\n"updatedAt": "2019-08-24T14:15:22Z",\n"_links": {\n"http://ns.adobe.com/adobecloud/rel/domainName/certificates": {},\n"http://ns.adobe.com/adobecloud/rel/domainName/deploy": {},\n"http://ns.adobe.com/adobecloud/rel/domainName/verify": {},\n"http://ns.adobe.com/adobecloud/rel/environment": {},\n"http://ns.adobe.com/adobecloud/rel/program": {},\n"self": {}\n}\n}\n')),(0,d.mdx)("h2",{id:"limitations"},"Limitations"),(0,d.mdx)("p",null,"Usage of this API has the following limitations."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"This API is applicable to AEM as a Cloud Service. "),(0,d.mdx)("li",{parentName:"ul"},"Custom domain names can only be applied to production programs with Sites enabled.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-usage-adding-custom-domain-names-md-413e655cf1b66653ef6f.js.map