import{c as t,o as e,C as a}from"./vendor.7295d1e3.js";const n={class:"markdown-body"},o=a('<h1>Calendar 日历</h1><h3>介绍</h3><p>日历，可平铺/弹窗展示</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Calendar } from &#39;@nutui/nutui&#39;;\n// taro\nimport { Calendar } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Calendar);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-cell\n  :showIcon=&quot;true&quot;\n  title=&quot;选择单个日期&quot;\n  :desc=&quot;date ? `${date} ${dateWeek}` : &#39;请选择&#39;&quot;\n  @click=&quot;openSwitch(&#39;isVisible&#39;)&quot;\n&gt;\n&lt;/nut-cell&gt;\n&lt;nut-calendar\n  v-model:visible=&quot;isVisible&quot;\n  :default-value=&quot;date&quot;\n  @close=&quot;closeSwitch(&#39;isVisible&#39;)&quot;\n  @choose=&quot;setChooseValue&quot;\n  :start-date=&quot;`2019-10-11`&quot;\n  :end-date=&quot;`2022-11-11`&quot;\n&gt;\n&lt;/nut-calendar&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state: TestCalendarState = reactive({\n      isVisible: false,\n      date: &#39;&#39;,\n      dateWeek: &#39;&#39;\n    });\n    const openSwitch = param =&gt; {\n      state[`${param}`] = true;\n    };\n    const closeSwitch = param =&gt; {\n      state[`${param}`] = false;\n    };\n    const setChooseValue = param =&gt; {\n      state.date = param[3];\n      state.dateWeek = param[4];\n    };\n    return {\n      ...toRefs(state),\n      openSwitch,\n      closeSwitch,\n      setChooseValue\n    };\n  }\n</code></pre><h3>区间选择</h3><pre><code class="language-html">&lt;nut-cell\n  :showIcon=&quot;true&quot;\n  title=&quot;选择日期区间&quot;\n  :desc=&quot;date ? `${date[0]}至${date[1]}` : &#39;请选择&#39;&quot;\n  @click=&quot;openSwitch(&#39;isVisible&#39;)&quot;\n&gt;\n&lt;/nut-cell&gt;\n&lt;nut-calendar\n  v-model:visible=&quot;isVisible&quot;\n  :default-value=&quot;date&quot;\n  type=&quot;range&quot;\n  :start-date=&quot;`2019-12-22`&quot;\n  :end-date=&quot;`2021-01-08`&quot;\n  @close=&quot;closeSwitch(&#39;isVisible&#39;)&quot;\n  @choose=&quot;setChooseValue&quot;\n&gt;\n&lt;/nut-calendar&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state: TestCalendarState = reactive({\n      date: [&#39;2019-12-23&#39;, &#39;2019-12-26&#39;],\n      isVisible2: true\n    });\n    const openSwitch = param =&gt; {\n      state[`${param}`] = true;\n    };\n    const closeSwitch = param =&gt; {\n      state[`${param}`] = false;\n    };\n    const setChooseValue= param =&gt; {\n      state.date = [...[param[0][3], param[1][3]]];\n    };\n    return {\n      ...toRefs(state),\n      openSwitch,\n      closeSwitch,\n      setChooseValue,\n    };\n  }\n</code></pre><h3>自定义日历-自动回填</h3><pre><code class="language-html">&lt;nut-cell\n  :showIcon=&quot;true&quot;\n  title=&quot;选择日期&quot;\n  :desc=&quot;date ? date : &#39;请选择&#39;&quot;\n  @click=&quot;openSwitch(&#39;isVisible&#39;)&quot;\n&gt;\n&lt;/nut-cell&gt;\n&lt;nut-calendar\n  v-model:visible=&quot;isVisible&quot;\n  @close=&quot;closeSwitch(&#39;isVisible&#39;)&quot;\n  @choose=&quot;setChooseValue&quot;\n  :start-date=&quot;null&quot;\n  :end-date=&quot;null&quot;\n  :is-auto-back-fill=&quot;true&quot;\n&gt;\n&lt;/nut-calendar&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state: TestCalendarState = reactive({\n      date: &#39;&#39;,\n      isVisible: false\n    });\n    const openSwitch = param =&gt; {\n      state[`${param}`] = true;\n    };\n    const closeSwitch = param =&gt; {\n      state[`${param}`] = false;\n    };\n     const setChooseValue = param =&gt; {\n      state.date= param[3];\n    };\n    return {\n      ...toRefs(state),\n      setChooseValue\n    };\n  }\n</code></pre><h3>平铺展示</h3><pre><code class="language-html">&lt;div class=&quot;test-calendar-wrapper&quot;&gt;\n  &lt;nut-calendar\n    :poppable=&quot;false&quot;\n    :is-auto-back-fill=&quot;true&quot;\n    :default-value=&quot;date&quot;\n    @choose=&quot;setChooseValue&quot;\n  &gt;\n  &lt;/nut-calendar\n&gt;&lt;/div&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state: TestCalendarState = reactive({\n      date: &#39;2020-07-08&#39;\n    });\n    const setChooseValue = param =&gt; {\n      state.date = param[3];\n    };\n    return {\n      ...toRefs(state),\n      setChooseValue\n    };\n  }\n</code></pre><h3>基础用法</h3><pre><code class="language-html">\n</code></pre><pre><code class="language-javascript"></code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否可见</td><td>Boolean</td><td>false</td></tr><tr><td>type</td><td>类型，日期选择’one’，区间选择’range’</td><td>String</td><td>‘one’</td></tr><tr><td>poppable</td><td>是否弹窗状态展示</td><td>Boolean</td><td>true</td></tr><tr><td>is-auto-back-fill</td><td>自动回填</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>显示标题</td><td>String</td><td>‘日期选择’</td></tr><tr><td>default-value</td><td>默认值，日期选择 String 格式，区间选择 Array 格式</td><td>String 、 Array</td><td>null</td></tr><tr><td>start-date</td><td>开始日期， 如果不限制开始日期传 null</td><td>String</td><td>今天</td></tr><tr><td>end-date</td><td>结束日期，如果不限制结束日期传 null</td><td>String</td><td>距离今天 365 天</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>choose</td><td>选择之后或是点击确认按钮触发</td><td>日期数组（包含年月日和星期）</td></tr><tr><td>close</td><td>关闭时触发</td><td>-</td></tr></tbody></table>',26),s={setup:a=>(a,s)=>(e(),t("div",n,[o]))};export{s as default};
