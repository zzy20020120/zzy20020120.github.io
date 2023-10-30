var posts=["2021/06/10/hello-world/","2023/10/07/sqlmap食用方法/","2023/10/07/黑客攻击常用端口/","2022/07/03/Python/Python文件的读写操作/","2022/07/02/Python/python 之 shadow 爆破密码脚本编写/","2021/06/22/Java/JWT/","2021/06/08/Java/java动态代理/","2021/06/07/Java/java反射/","2021/06/11/Java/java实现模拟聊天室/","2021/05/06/Java/java开发环境搭建/","2021/07/07/Java/java序列化与反序列化/","2021/07/08/Java/java类加载机制和类加载器详解/","2021/07/08/php/PHP代码审计(方法,思路,流程)/","2021/07/08/php/PHP代码审计初养成/","2022/06/12/VulnHub靶机/VulnHub靶机Me And My Girlfriend渗透笔记/","2022/06/14/VulnHub靶机/VulnHub靶机unknowndevice64-V1.0渗透笔记/","2022/06/03/VulnHub靶机/Vulnhub靶机DC-2渗透笔记/","2022/06/02/VulnHub靶机/Vulnhub靶机DC-1渗透笔记/","2022/06/04/VulnHub靶机/Vulnhub靶机DC-3渗透笔记/","2022/06/04/VulnHub靶机/Vulnhub靶机DC-4渗透笔记/","2022/06/10/VulnHub靶机/Vulnhub靶机Infosec_Warrior1渗透/","2022/06/22/VulnHub靶机/VunlnHub靶机zico2渗透笔记/","2022/06/14/VulnHub靶机/VunlnHub靶机HACKADEMIC RTB1渗透笔记/","2022/08/04/漏洞复现/Apache Shiro权限绕过漏洞复现/","2022/08/04/漏洞复现/Apache tomcat 漏洞复现/","2022/08/04/漏洞复现/Fastjson漏洞复现/","2022/08/04/漏洞复现/JWT认证机制漏洞利用/","2022/08/04/漏洞复现/Log4j漏洞复现/","2022/08/04/漏洞复现/Nginx解析漏洞复现/","2022/08/02/漏洞复现/Redis未授权访问漏洞/","2022/08/02/漏洞复现/Shiro 反序列化漏洞复现/","2022/08/02/漏洞复现/Weblogic SSRF漏洞复现/","2022/08/04/漏洞复现/nacos身份绕过漏洞/","2022/08/04/漏洞复现/php反序列化漏洞复现/","2022/07/02/网络安全/Linux入侵排查/","2022/07/08/网络安全/java反序列化漏洞/","2023/10/08/网络安全/CORS跨域漏洞学习笔记/","2022/06/07/网络安全/php反序列化漏洞/","2022/07/05/网络安全/windows应急响应流程/","2023/05/05/网络安全/常见十大漏洞总结（原理、危害、防御）/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };