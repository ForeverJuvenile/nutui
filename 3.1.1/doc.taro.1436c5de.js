import{c as t,o as e,C as n}from"./vendor.7295d1e3.js";const o={class:"markdown-body"},l=n('<h1>Notify 消息通知</h1><h3>介绍</h3><p>在页面顶部展示消息提示</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Notify } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Notify);\n</code></pre><h2>使用示例</h2><pre><code class="language-html">&lt;nut-cell-group :title=&quot;baseState.state.desc&quot;&gt;\n  &lt;nut-cell is-Link @click=&quot;baseState.methods.cellClick&quot;&gt;基础用法&lt;/nut-cell&gt;\n  &lt;nut-notify @click=&quot;onClick&quot; @closed=&quot;onClosed&quot; v-model:visible=&quot;baseState.state.show&quot;\n    :msg=&quot;baseState.state.desc&quot; /&gt;\n&lt;/nut-cell-group&gt;\n\n&lt;nut-cell-group title=&quot;通知类型&quot;&gt;\n  &lt;nut-notify @click=&quot;onClick&quot; @closed=&quot;onClosed&quot; :type=&quot;notifyState.state.type&quot;\n    v-model:visible=&quot;notifyState.state.show&quot; :msg=&quot;notifyState.state.desc&quot; /&gt;\n  &lt;nut-cell is-Link @click=&quot;notifyState.methods.cellClick(&#39;primary&#39;,&#39;主要通知&#39;)&quot;&gt;主要通知&lt;/nut-cell&gt;\n  &lt;nut-cell is-Link @click=&quot;notifyState.methods.cellClick(&#39;success&#39;,&#39;成功通知&#39;)&quot;&gt;成功通知&lt;/nut-cell&gt;\n  &lt;nut-cell is-Link @click=&quot;notifyState.methods.cellClick(&#39;danger&#39;,&#39;危险通知&#39;)&quot;&gt;危险通知&lt;/nut-cell&gt;\n  &lt;nut-cell is-Link @click=&quot;notifyState.methods.cellClick(&#39;warning&#39;,&#39;警告通知&#39;)&quot;&gt;警告通知&lt;/nut-cell&gt;\n&lt;/nut-cell-group&gt;\n\n&lt;nut-cell-group title=&quot;自定义样式&quot;&gt;\n  &lt;nut-notify @click=&quot;onClick&quot; @closed=&quot;onClosed&quot; color=&#39;#ad0000&#39; background=&#39;#ffe1e1&#39;\n    :type=&quot;customState.state.type&quot; v-model:visible=&quot;customState.state.show&quot; :msg=&quot;customState.state.desc&quot;\n    :duration=&quot;customState.state.duration&quot; /&gt;\n  &lt;nut-cell is-Link @click=&quot;customState.methods.cellClick(&#39;primary&#39;,&#39;自定义背景色和字体颜色&#39;)&quot;&gt; 自定义背景色和字体颜色\n  &lt;/nut-cell&gt;\n  &lt;nut-cell is-Link @click=&quot;customState.methods.cellClick(&#39;primary&#39;,&#39;自定义时长5s&#39;,5000)&quot;&gt; 自定义时长5s\n  &lt;/nut-cell&gt;\n&lt;/nut-cell-group&gt;\n</code></pre><pre><code class="language-javascript">import { reactive } from &#39;vue&#39;;\nexport default {\n  setup() {\n    const onClosed = () =&gt; console.log(&#39;closed&#39;);\n    const onClick = () =&gt; console.log(&#39;click&#39;);\n\n    const baseState = {\n      state: reactive({\n        show: false,\n        desc: &#39;基础用法&#39;\n      }),\n      methods: {\n        cellClick() {\n          baseState.state.show = true;\n        }\n      }\n    };\n\n    const notifyState = {\n      state: reactive({\n        show: false,\n        desc: &#39;&#39;,\n        type: &#39;primary&#39;\n      }),\n      methods: {\n        cellClick(type: string, desc: string) {\n          notifyState.state.show = true;\n          notifyState.state.type = type;\n          notifyState.state.desc = desc;\n        }\n      }\n    };\n    const customState = {\n      state: reactive({\n        show: false,\n        desc: &#39;&#39;,\n        type: &#39;primary&#39;,\n        duration: 3000\n      }),\n      methods: {\n        cellClick(type: string, desc: string, duration: number) {\n          customState.state.show = true;\n          customState.state.type = type;\n          customState.state.desc = desc;\n          customState.state.duration = duration;\n        }\n      }\n    };\n    return {\n      baseState,\n      notifyState,\n      customState,\n      onClosed,\n      onClick\n    };\n  }\n};\n</code></pre><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示的信息类型（primary，success ，danger，warning）</td><td>String</td><td>‘danger’</td></tr><tr><td>message</td><td>展示文案，支持通过\\n换行</td><td>Boolean</td><td>false</td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，notify 不会消失</td><td>String</td><td>3000</td></tr><tr><td>color</td><td>字体颜色</td><td>String</td><td>空</td></tr><tr><td>background</td><td>背景颜色</td><td>String</td><td>空</td></tr><tr><td>class-name</td><td>自定义类名</td><td>String</td><td></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td>无</td></tr><tr><td>closed</td><td>关闭事件回调</td><td>无</td></tr></tbody></table>',12),s={setup:n=>(n,s)=>(e(),t("div",o,[l]))};export{s as default};
