webpackJsonp([8],{"/TOm":function(p,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={id:1,title:"性能优化-无题",desc:"简单阐述为什么、怎么做",create_time:"2019-10-19",content:"<h1 class='ql-align-center'>性能优化-无题</h1><p><br></p><h2>1. 为什么要进行性能优化？</h2><p><br></p><ol><li><strong><em>性能是留住用户的重要指标之一</em></strong>，当用户打开网站，到显示页面共花费了3s甚至5s10s的时候，随着打开网站需要的时间越长，就有越多用户会认为当前网站是无法打开的，最后离开网站。</li><li><strong><em>高性能是改善转化率的重要一环，</em></strong>如果我们的网站是电商之类的平台网站，页面的高性能就能改善用户的浏览体验，若是没打开一个商品都需要几秒，用户也会不耐烦，所以我们可以看下淘宝www.taobao.com里面对性能优化的实践，可以说是能做到的它们也都去做了（dns预解析、service worker等）</li></ol><p><br></p><h2>2. 如何进行性能优化？</h2><p><br></p><p>在回答这个问题前，我们不妨先思考一个面试必问题：<strong>在用户在浏览器地址栏敲下网址，到浏览器展示页面的过程中，发生了什么？</strong></p><p><strong> </strong></p><ol><li>用户输入地址栏，按回车键</li><li>浏览器判断输入的是ip地址还是网址，若是ip直接跳过dns查询</li><li>若是网址则进行dns查询，查询到对应的服务器ip</li><li>与服务器建立tcp连接</li><li>下载服务器返回的文本、资源</li><li>浏览器进行页面的渲染，展示页面</li></ol><p><br></p><p>大致就是以上六个步骤，那么进行性能优化的话，我们可以从那一步入手？</p><p>一般性能优化就是从第3、4、5、6进行的</p><p>首先第三步、第四步的优化方式就是常说的<strong>dns预解析</strong>，也就是在html页面的head增加如：<strong>&lt;link rel='dns-prefetch' href='//g.alicdn.com'&gt; </strong>这类的标签头，<strong>但这种一般对于中小型网站没什么用</strong>，因为中小型网站一般就只有几个域名，而每次解析完dns，浏览器会缓存，系统也会缓存，所以也就只会解析一次，而且在滥用预解析的标签头，还会增加dns查询次数，增加服务器的花费（钱）</p><p>然后第5步，第5步的方法比较多</p><ul><li class='ql-indent-1'>我们现在一般用的都是http1.1，而现代浏览器对于每个域名能建立的tcp是6个，所以当我们页面的资源较多时，可以把资源按照类型放到不同的域名下，这样就可以同时下载更多的资源了</li><li class='ql-indent-1'>让资源更小，去掉无用代码、注释、资源压缩</li><li class='ql-indent-1'>增加缓存策略，让用户第二次访问该资源时直接从缓存中读取</li></ul><p>关于缓存的后面会专门写一篇文章说这个</p><p><br></p><p>第6步，首先我们要清楚浏览器的渲染流程，浏览器是一边从服务端获取数据，一边进行页面的渲染的，所以我们在写页面时，要尽量的不阻塞页面的渲染，什么叫阻塞？类似资源的下载等。这个后面也会专门写一篇文章</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>"}}});
//# sourceMappingURL=8.774b53c6c0137f026003.js.map