(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{465:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"querying-documents-properties-with-special-characters-in-cosmos-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-documents-properties-with-special-characters-in-cosmos-db","aria-hidden":"true"}},[e._v("#")]),e._v(" Querying documents properties with special characters in Cosmos DB")]),e._v(" "),s("p",[e._v("I was working with Cosmos DB yesterday and hit the following snag that I couldn't query my document that had special characters in it. Such is an example:")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/querycosmos1.png")}}),e._v(" "),s("p",[e._v("Notice the "),s("code",[e._v('"$type": "mytype",')]),e._v(" has a "),s("code",[e._v("$")]),e._v(" in it.")]),e._v(" "),s("p",[e._v("If you head over to "),s("strong",[e._v("Query Explorer")]),e._v(" and try to query it using...")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SELECT * \nFROM testing t\nWHERE t.$type = 'mytype'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("... then you'll see the following error:")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/querycosmos2.png")}}),e._v(" "),s("p",[e._v("I was able to fix this by wrapping the property inside "),s("code",[e._v("[]")]),e._v(" such as...")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SELECT * \nFROM testing t\nWHERE t[\"$type\"] = 'mytype'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Now my query returned properly")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/querycosmos3.png")}})])},[],!1,null,null,null);t.default=r.exports}}]);