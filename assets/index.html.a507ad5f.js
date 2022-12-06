import { d as defineComponent, r as resolveComponent, o as openBlock, c as createElementBlock, g as createBaseVNode, a as createVNode, F as Fragment, h as createTextVNode, b as createStaticVNode } from "./app.d2123734.js";
const _hoisted_1 = {
  href: "https://nodejs.org/zh-cn/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Node \u4E2D\u6587\u5B98\u7F51");
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="\u7EC4\u4EF6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4EE3\u7801" aria-hidden="true">#</a> \u7EC4\u4EF6\u4EE3\u7801</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token function">withDefaults</span><span class="token punctuation">(</span>\n  defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n    title<span class="token operator">?</span><span class="token operator">:</span> string\n    baseUrl<span class="token operator">?</span><span class="token operator">:</span> string\n  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9875\u9762\u5217\u8868&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;web&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`/press/${baseUrl}/${item.href}`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>', 2);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "koa",
        href: "koa"
      }
    ];
    return (_ctx, _cache) => {
      const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_1, [
            _hoisted_2,
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        createVNode(_component_LinkList, {
          list,
          "base-url": "node"
        }),
        _hoisted_3
      ], 64);
    };
  }
});
export { _sfc_main as default };
