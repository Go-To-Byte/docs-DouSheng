(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{412:function(s,t,a){"use strict";a.r(t);var e=a(2),l=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"拿到1个项目后-一般该如何运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拿到1个项目后-一般该如何运行"}},[s._v("#")]),s._v(" 拿到1个项目后，一般该如何运行？")]),s._v(" "),t("p",[s._v("先回答标题，当然，这里所说的是一般情况~")]),s._v(" "),t("ol",[t("li",[s._v("提供配置文件")]),s._v(" "),t("li",[s._v("安装项目所需环境以及创建数据库模型")]),s._v(" "),t("li",[s._v("运行项目")])]),s._v(" "),t("p",[s._v("那我们来看看，该如何启动"),t("code",[s._v("Dousheng")]),s._v("，这里面用到的一些工具，在这里不详细展开，请查看后面的章节，这里我们仅仅使用~")]),s._v(" "),t("h2",{attrs:{id:"一、利用工作区模式方便本地开发🥅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、利用工作区模式方便本地开发🥅"}},[s._v("#")]),s._v(" 一、利用工作区模式方便本地开发🥅")]),s._v(" "),t("ul",[t("li",[s._v("拉取项目")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:Go-To-Byte/DouSheng.git\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" DouSheng\n")])])]),t("ul",[t("li",[s._v("下载服务所需依赖")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下载ApiRooter的依赖为例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" api_rooter/\n\ngo mod tidy\n")])])]),t("ul",[t("li",[s._v("初始化"),t("code",[s._v("go.work")]),s._v("文件")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化 工作区")]),s._v("\ngo work init dou_kit/ user_center/ video_service/\n")])])]),t("p",[s._v("执行过后，你的"),t("code",[s._v("go.work")]),s._v("文件内容如下：")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("go 1.19\n\nuse (\n   user_center\n   dou_kit\n   video_service\n)\n")])])]),t("p",[s._v("当你初始化工作区之后，本身是三个独立的服务，在本地开发调试时，就可以直接当作是一个项目了（文件路由引用）")]),s._v(" "),t("p",[s._v("注：这里所说的是"),t("strong",[s._v("当作")]),s._v("，实际上还是独立的服务。此文件不要推送至Git仓库")]),s._v(" "),t("ul",[t("li")]),s._v(" "),t("h2",{attrs:{id:"二、添加服务的配置文件📄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、添加服务的配置文件📄"}},[s._v("#")]),s._v(" 二、添加服务的配置文件📄")]),s._v(" "),t("p",[s._v("当新打开一个项目时，当然需要查看此项目是如何为程序提供配置的呐，应该很少有人把配置硬编码到代码中吧！！！")]),s._v(" "),t("p",[s._v("因为要保证相对的安全，敏感资源不被泄露，所以真正的配置文件是不会被推送至代码仓库的。")]),s._v(" "),t("p",[s._v("但是我们提供了配置文件的模板。按照模板，填写你的配置即可~")]),s._v(" "),t("p",[s._v("又因为几个服务是独立的，所以按理来说，每个服务都会有自己的配置文件，那我们先配置，让程序跑起来再说！")]),s._v(" "),t("ul",[t("li",[s._v("添加Api-Rooter的配置文件(根据模板填写你自己的配置)")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" api_rooter/etc/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config.toml.template config.toml\n")])])]),t("ul",[t("li",[s._v("添加视频服务配置文件(根据模板填写你自己的配置)")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" video_service/etc/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config.toml.template config.toml\n")])])]),t("ul",[t("li",[s._v("添加用户中心配置文件(根据模板填写你自己的配置)")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" user_center/etc/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config.toml.template config.toml\n")])])]),t("ul",[t("li",[s._v("依次类推，待会需要启动什么服务，就对什么服务进行配置....")])]),s._v(" "),t("p",[s._v("至此，你已经为你的服务提供了配置文件，来看看具体如何启动吧！")]),s._v(" "),t("h2",{attrs:{id:"三、根据配置文件-安装所需环境、创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、根据配置文件-安装所需环境、创建数据库"}},[s._v("#")]),s._v(" 三、根据配置文件，安装所需环境、创建数据库")]),s._v(" "),t("p",[s._v("在启动项目前，我们需要有这些环境。(在你为对应服务提供配置文件的时候，应该已经注意到了)")]),s._v(" "),t("ol",[t("li",[s._v("mysql环境\t\t\t [用于数据存储]")]),s._v(" "),t("li",[s._v("mongodb环境           [用于token鉴权]")]),s._v(" "),t("li",[s._v("consul环境            [微服务的注册中心]")])]),s._v(" "),t("p",[s._v("这里就不搬运大自然的产物了，可自行Google。但为了方便，推荐使用 docker")]),s._v(" "),t("p",[s._v('当然，肯定得先建立Mysql数据库所需要的表结构呐，这里不保姆式的教你创建数据库、创建表了。因为"咱们"都是：高级程序员~')]),s._v(" "),t("p",[s._v("创建对应的数据库，并且执行去执行sql脚本，脚本文件在项目中的："),t("code",[s._v("dou_kit/docs/sql/tables.sql")]),s._v(" 文件中。")]),s._v(" "),t("h2",{attrs:{id:"四、利用makefile工程化管理项目🤝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、利用makefile工程化管理项目🤝"}},[s._v("#")]),s._v(" 四、利用Makefile工程化管理项目🤝")]),s._v(" "),t("p",[s._v("如果"),t("strong",[s._v("安装好环境")]),s._v("，并且添加了"),t("strong",[s._v("配置文件")]),s._v("，那么你就可以使用如下命令启动服务：")]),s._v(" "),t("ul",[t("li",[s._v("传统方式启动")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以启动ApiRooter为例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" api_rooter/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\ngo run main.go start\n")])])]),t("p",[s._v("启动其他服务也是类似的做法，这里就不一一列举了。")]),s._v(" "),t("ul",[t("li",[s._v("工程化管理方式启动")])]),s._v(" "),t("p",[s._v("上面这种方式我们需要手动执行脚本，我们可以利用预定义在"),t("code",[s._v("Makefile")]),s._v("文件中的脚本，来对项目进行工程化管理。")]),s._v(" "),t("p",[s._v("当然呐，也有使用的前置条件："),t("a",{attrs:{href:"https://tehub.com/a/aCYp1uw0tG",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装make指令(推荐第二种)"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("若安装完成后，可以利用如下指令，启动项目：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入api_rooter项目中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" api_rooter/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用工程化的方式启动服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" run\n")])])]),t("p",[s._v("当然了，Makefile文件下，有很多指令，比如："),t("code",[s._v("dep、init、gen...")]),s._v("可以先自行研究，在后面的章节再介绍。")]),s._v(" "),t("p",[s._v("至此，相信你已经启动好项目了。若还想继续了解咱们"),t("code",[s._v("Go-To-Byte的Dousheng项目")]),s._v("，咱们接着往下看~")])])}),[],!1,null,null,null);t.default=l.exports}}]);