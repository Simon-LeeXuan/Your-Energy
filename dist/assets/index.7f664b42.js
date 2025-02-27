var e = Object.defineProperty, t = Object.prototype.hasOwnProperty, a = Object.getOwnPropertySymbols,
    n = Object.prototype.propertyIsEnumerable,
    l = (t, a, n) => a in t ? e(t, a, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[a] = n,
    s = (e, s) => {
        for (var r in s || (s = {})) t.call(s, r) && l(e, r, s[r]);
        if (a) for (var r of a(s)) n.call(s, r) && l(e, r, s[r]);
        return e
    };
import {
    a as r,
    T as c,
    r as m,
    P as o,
    I as i,
    c as p,
    p as d,
    D as u,
    d as _,
    b as E,
    K as v,
    u as y,
    C as h,
    e as f,
    f as g,
    B as w,
    M as N,
    g as b,
    h as k,
    N as x,
    i as S,
    q as C,
    j as z,
    F as j,
    k as R,
    l as M,
    S as F,
    R as Y,
    m as I,
    n as $
} from "./vendor.60e8d1e1.js";

!function (e = ".", t = "__import__") {
    try {
        self[t] = new Function("u", "return import(u)")
    } catch (a) {
        const n = new URL(e, location), l = e => {
            URL.revokeObjectURL(e.src), e.remove()
        };
        self[t] = e => new Promise(((a, s) => {
            const r = new URL(e, n);
            if (self[t].moduleMap[r]) return a(self[t].moduleMap[r]);
            const c = new Blob([`import * as m from '${r}';`, `${t}.moduleMap['${r}']=m;`], {type: "text/javascript"}),
                m = Object.assign(document.createElement("script"), {
                    type: "module",
                    src: URL.createObjectURL(c),
                    onerror() {
                        s(new Error(`Failed to import: ${e}`)), l(m)
                    },
                    onload() {
                        a(self[t].moduleMap[r]), l(m)
                    }
                });
            document.head.appendChild(m)
        })), self[t].moduleMap = {}
    }
}("/assets/");
r.defaults.baseURL = "http://47.99.134.126:7009", r.defaults.withCredentials = !0, r.defaults.headers["X-Requested-With"] = "XMLHttpRequest", r.defaults.headers.Authorization = `${localStorage.getItem("token") || null}`, r.defaults.headers.post["Content-Type"] = "application/json", r.interceptors.response.use((e => "object" != typeof e.data ? (c.show("服务端异常！"), Promise.reject(e)) : 200 != e.data.code ? (e.data.msg && c.show(e.data.msg), 401 == e.data.code && (window.location.href = "/login"), 413 == e.data.code && c.show("图片不得超过 50kb"), Promise.reject(e.data)) : e.data));
const W = "http://api.chennick.wang", D = r.get, q = r.post, B = {
    1: {icon: "canyin"},
    2: {icon: "fushi"},
    3: {icon: "jiaotong"},
    4: {icon: "riyong"},
    5: {icon: "gouwu"},
    6: {icon: "xuexi"},
    7: {icon: "yiliao"},
    8: {icon: "lvxing"},
    9: {icon: "renqing"},
    10: {icon: "qita"},
    11: {icon: "gongzi"},
    12: {icon: "jiangjin"},
    13: {icon: "zhuanzhang"},
    14: {icon: "licai"},
    15: {icon: "tuikuang"},
    16: {icon: "qita"}
}, O = 0, L = 3, T = 4, P = 0, A = 2, U = 3, K = e => e && e.startsWith("http") ? e : e = `${W}${e}`;
var H = "_popup-type_4v4ui_1", X = "_header_4v4ui_7", Z = "_cross_4v4ui_20", G = "_content_4v4ui_28",
    J = "_all_4v4ui_31", Q = "_title_4v4ui_38", V = "_expense-wrap_4v4ui_43", ee = "_income-wrap_4v4ui_44",
    te = "_active_4v4ui_58";
const ae = m.forwardRef((({onSelect: e}, t) => {
    const [a, n] = m.useState(!1), [l, s] = m.useState("all"), [r, c] = m.useState([]), [d, u] = m.useState([]);
    m.useEffect((async () => {
        const {data: {list: e}} = await D("/api/type/list");
        c(e.filter((e => 1 == e.type))), u(e.filter((e => 2 == e.type)))
    }), []), t && (t.current = {
        show: () => {
            n(!0)
        }, close: () => {
            n(!1)
        }
    });
    const _ = t => {
        s(t.id), n(!1), e(t)
    };
    return m.createElement(o, {
        visible: a,
        direction: "bottom",
        onMaskClick: () => n(!1),
        destroy: !1,
        mountContainer: () => document.body
    }, m.createElement("div", {className: H}, m.createElement("div", {className: X}, "请选择类型", m.createElement(i, {
        type: "wrong",
        className: Z,
        onClick: () => n(!1)
    })), m.createElement("div", {className: G}, m.createElement("div", {
        onClick: () => _({id: "all"}),
        className: p({[J]: !0, [te]: "all" == l})
    }, "全部类型"), m.createElement("div", {className: Q}, "支出"), m.createElement("div", {className: V}, r.map(((e, t) => m.createElement("p", {
        key: t,
        onClick: () => _(e),
        className: p({[te]: l == e.id})
    }, e.name)))), m.createElement("div", {className: Q}, "收入"), m.createElement("div", {className: ee}, d.map(((e, t) => m.createElement("p", {
        key: t,
        onClick: () => _(e),
        className: p({[te]: l == e.id})
    }, e.name)))))))
}));
ae.propTypes = {onSelect: d.func};
const ne = m.forwardRef((({onSelect: e, mode: t = "date"}, a) => {
    const [n, l] = m.useState(!1), [s, r] = m.useState(new Date);
    return a && (a.current = {
        show: () => {
            l(!0)
        }, close: () => {
            l(!1)
        }
    }), m.createElement(o, {
        visible: n,
        direction: "bottom",
        onMaskClick: () => l(!1),
        destroy: !1,
        mountContainer: () => document.body
    }, m.createElement("div", null, m.createElement(u, {
        visible: n, value: s, mode: t, onOk: a => {
            r(a), l(!1), "month" == t ? e(_(a).format("YYYY-MM")) : "date" == t && e(_(a).format("YYYY-MM-DD"))
        }, onCancel: () => l(!1)
    })))
}));
ne.propTypes = {mode: d.string, onSelect: d.func};
var le = i.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");
var se = {
    addWrap: "_add-wrap_11omu_1",
    header: "_header_11omu_7",
    close: "_close_11omu_10",
    filter: "_filter_11omu_15",
    type: "_type_11omu_21",
    expense: "_expense_11omu_30",
    active: "_active_11omu_33",
    income: "_income_11omu_38",
    time: "_time_11omu_43",
    arrow: "_arrow_11omu_52",
    money: "_money_11omu_56",
    sufix: "_sufix_11omu_61",
    amount: "_amount_11omu_66",
    typeWarp: "_type-warp_11omu_70",
    typeBody: "_type-body_11omu_79",
    typeItem: "_type-item_11omu_83",
    iconfontWrap: "_iconfont-wrap_11omu_90",
    iconfont: "_iconfont_11omu_90",
    remark: "_remark_11omu_116"
};
const re = m.forwardRef((({detail: e = {}, onReload: t}, a) => {
    const n = m.useRef(),
        l = e && e.id, [s, r] = m.useState(!1), [d, u] = m.useState("expense"), [y, h] = m.useState([]), [f, g] = m.useState([]), [w, N] = m.useState({}), [b, k] = m.useState(""), [x, S] = m.useState(""), [C, z] = m.useState(!1), [j, R] = m.useState(new Date);
    m.useEffect((() => {
        e.id && (u(1 == e.pay_type ? "expense" : "income"), N({
            id: e.type_id,
            name: e.type_name
        }), S(e.remark), k(e.amount), R(_(Number(e.date)).$d))
    }), [e]), a && (a.current = {
        show: () => {
            r(!0)
        }, close: () => {
            r(!1)
        }
    }), m.useEffect((async () => {
        const {data: {list: e}} = await D("/api/type/list"), t = e.filter((e => 1 == e.type)),
            a = e.filter((e => 2 == e.type));
        h(t), g(a), l || N(t[0])
    }), []);
    const M = e => {
        u(e), N("expense" == e ? y[0] : f[0])
    }, F = async () => {
        if (!b) return void c.show("请输入具体金额");
        const e = {
            amount: Number(b).toFixed(2),
            type_id: w.id,
            type_name: w.name,
            date: 1e3 * _(j).unix(),
            pay_type: "expense" == d ? 1 : 2,
            remark: x || ""
        };
        l ? (e.id = l, await q("/api/bill/update", e), c.show("修改成功")) : (await q("/api/bill/add", e), k(""), u("expense"), N(y[0]), R(new Date), S(""), c.show("添加成功")), r(!1), t && t()
    };
    return m.createElement(o, {
        visible: s,
        direction: "bottom",
        onMaskClick: () => r(!1),
        destroy: !1,
        mountContainer: () => document.body
    }, m.createElement("div", {className: se.addWrap}, m.createElement("header", {className: se.header}, m.createElement("span", {
        className: se.close,
        onClick: () => r(!1)
    }, m.createElement(i, {type: "wrong"}))), m.createElement("div", {className: se.filter}, m.createElement("div", {className: se.type}, m.createElement("span", {
        onClick: () => M("expense"),
        className: p({[se.expense]: !0, [se.active]: "expense" == d})
    }, "支出"), m.createElement("span", {
        onClick: () => M("income"),
        className: p({[se.income]: !0, [se.active]: "income" == d})
    }, "收入")), m.createElement("div", {
        className: se.time, onClick: () => {
            n.current && n.current.show()
        }
    }, _(j).format("MM-DD"), " ", m.createElement(i, {
        className: se.arrow,
        type: "arrow-bottom"
    }))), m.createElement("div", {className: se.money}, m.createElement("span", {className: se.sufix}, "¥"), m.createElement("span", {className: p(se.amount, se.animation)}, b)), m.createElement("div", {className: se.typeWarp}, m.createElement("div", {className: se.typeBody}, ("expense" == d ? y : f).map((e => m.createElement("div", {
        onClick: () => (e => {
            N(e)
        })(e), key: e.id, className: se.typeItem
    }, m.createElement("span", {
        className: p({
            [se.iconfontWrap]: !0,
            [se.expense]: "expense" == d,
            [se.income]: "income" == d,
            [se.active]: w.id == e.id
        })
    }, m.createElement(le, {
        className: se.iconfont,
        type: B[e.id].icon
    })), m.createElement("span", null, e.name)))))), m.createElement("div", {className: se.remark}, C ? m.createElement(E, {
        autoHeight: !0,
        showLength: !0,
        maxLength: 50,
        type: "text",
        rows: 3,
        value: x,
        placeholder: "请输入备注信息",
        onChange: e => S(e),
        onBlur: () => z(!1)
    }) : m.createElement("span", {onClick: () => z(!0)}, x || "添加备注")), m.createElement(v, {
        type: "price",
        onKeyClick: e => (e => {
            if ("close" != (e = String(e))) if ("delete" != e) "ok" != e ? "." == e && b.includes(".") || "." != e && b.includes(".") && b && b.split(".")[1].length >= 2 || k(b + e) : F(); else {
                let e = b.slice(0, b.length - 1);
                k(e)
            }
        })(e)
    }), m.createElement(ne, {
        ref: n, onSelect: e => {
            R(e)
        }
    })))
}));
re.propTypes = {detail: d.object, onReload: d.func};
var ce = {
    item: "_item_mkxeh_1",
    headerDate: "_header-date_mkxeh_7",
    date: "_date_mkxeh_18",
    money: "_money_mkxeh_22",
    itemIcon: "_item-icon_mkxeh_37"
};
const me = ({bill: e}) => {
    const [t, a] = m.useState(0), [n, l] = m.useState(0), s = y();
    m.useEffect((() => {
        const t = e.bills.filter((e => 2 == e.pay_type)).reduce(((e, t) => e += Number(t.amount)), 0);
        a(t);
        const n = e.bills.filter((e => 1 == e.pay_type)).reduce(((e, t) => e += Number(t.amount)), 0);
        l(n)
    }), [e.bills]);
    return m.createElement("div", {className: ce.item}, m.createElement("div", {className: ce.headerDate}, m.createElement("div", {className: ce.date}, e.date), m.createElement("div", {className: ce.money}, m.createElement("span", null, m.createElement("img", {
        src: "//s.yezgea02.com/1615953405599/zhi%402x.png",
        alt: "支"
    }), m.createElement("span", null, "¥", n.toFixed(2))), m.createElement("span", null, m.createElement("img", {
        src: "//s.yezgea02.com/1615953405599/shou%402x.png",
        alt: "收"
    }), m.createElement("span", null, "¥", t.toFixed(2))))), e && e.bills.sort(((e, t) => t.date - e.date)).map((e => m.createElement(h, {
        className: ce.bill,
        key: e.id,
        onClick: () => (e => {
            s.push(`/detail?id=${e.id}`)
        })(e),
        title: m.createElement(m.Fragment, null, m.createElement(le, {
            className: ce.itemIcon,
            type: e.type_id ? B[e.type_id].icon : 1
        }), m.createElement("span", null, e.type_name)),
        description: m.createElement("span", {style: {color: 2 == e.pay_type ? "red" : "#39be77"}}, `${1 == e.pay_type ? "-" : "+"}${e.amount}`),
        help: m.createElement("div", null, _(Number(e.date)).format("HH:mm"), " ", e.remark ? `| ${e.remark}` : "")
    }))))
};
me.propTypes = {bill: d.object};
var oe = "_empty_1wb2f_1";
const ie = ({desc: e}) => m.createElement("div", {className: oe}, m.createElement("img", {
    src: "//s.yezgea02.com/1619144597039/empty.png",
    alt: "暂无数据"
}), m.createElement("div", null, e || "暂无数据"));
ie.propTypes = {desc: d.string};
var pe = {
    home: "_home_pyrz3_1",
    header: "_header_pyrz3_7",
    dataWrap: "_data-wrap_pyrz3_22",
    income: "_income_pyrz3_33",
    typeWrap: "_type-wrap_pyrz3_36",
    left: "_left_pyrz3_48",
    arrow: "_arrow_pyrz3_51",
    contentWrap: "_content-wrap_pyrz3_55",
    add: "_add_pyrz3_65"
};
var de = {
    data: "_data_f4sv2_1",
    total: "_total_f4sv2_5",
    time: "_time_f4sv2_13",
    date: "_date_f4sv2_35",
    title: "_title_f4sv2_39",
    expense: "_expense_f4sv2_45",
    income: "_income_f4sv2_51",
    structure: "_structure_f4sv2_55",
    head: "_head_f4sv2_60",
    tab: "_tab_f4sv2_70",
    active: "_active_f4sv2_80",
    content: "_content_f4sv2_88",
    item: "_item_f4sv2_88",
    left: "_left_f4sv2_93",
    type: "_type_f4sv2_100",
    name: "_name_f4sv2_115",
    right: "_right_f4sv2_124",
    percent: "_percent_f4sv2_129",
    momey: "_momey_f4sv2_135",
    proportion: "_proportion_f4sv2_138"
};
let ue = null;
var _e = {
    user: "_user_2wwvo_1",
    head: "_head_2wwvo_5",
    info: "_info_2wwvo_14",
    content: "_content_2wwvo_33",
    logout: "_logout_2wwvo_43"
};
var Ee = "_auth_kpur3_1", ve = "_head_kpur3_5", ye = "_tab_kpur3_16", he = "_avtive_kpur3_25", fe = "_form_kpur3_30",
    ge = "_operation_kpur3_39", we = "_agree_kpur3_42";
var Ne = "_header-warp_12wcp_1", be = "_block_12wcp_4", ke = "_header_12wcp_1";
const xe = ({title: e = ""}) => {
    const t = y();
    return m.createElement("div", {className: Ne}, m.createElement("div", {className: be}, m.createElement(x, {
        className: ke,
        left: m.createElement(i, {type: "arrow-left", theme: "primary", onClick: () => t.goBack()}),
        title: e
    })))
};
xe.propTypes = {title: d.string};
var Se = {
    detail: "_detail_1wagh_1",
    card: "_card_1wagh_8",
    type: "_type_1wagh_16",
    expense: "_expense_1wagh_29",
    income: "_income_1wagh_32",
    iconfont: "_iconfont_1wagh_35",
    amount: "_amount_1wagh_38",
    info: "_info_1wagh_43",
    time: "_time_1wagh_48",
    remark: "_remark_1wagh_61",
    operation: "_operation_1wagh_75",
    vanIcon: "_van-icon_1wagh_82"
};
var Ce = "_account_u7md4_1", ze = "_form_u7md4_4", je = "_btn_u7md4_9";
var Re = z()((e => {
    const {getFieldProps: t, getFieldError: a} = e.form;
    return m.createElement(m.Fragment, null, m.createElement(xe, {title: "重制密码"}), m.createElement("div", {className: Ce}, m.createElement("div", {className: ze}, m.createElement(h, {title: "原密码"}, m.createElement(E, s({
        clearable: !0,
        type: "text",
        placeholder: "请输入原密码"
    }, t("oldpass", {rules: [{required: !0}]})))), m.createElement(h, {title: "新密码"}, m.createElement(E, s({
        clearable: !0,
        type: "text",
        placeholder: "请输入新密码"
    }, t("newpass", {rules: [{required: !0}]})))), m.createElement(h, {title: "确认密码"}, m.createElement(E, s({
        clearable: !0,
        type: "text",
        placeholder: "请再此输入新密码确认"
    }, t("newpass2", {rules: [{required: !0}]}))))), m.createElement(w, {
        className: je,
        block: !0,
        theme: "primary",
        onClick: () => {
            e.form.validateFields((async (e, t) => {
                if (!e) {
                    if (console.log(t), t.newpass != t.newpass2) return void c.show("新密码输入不一致");
                    await q("/api/user/modify_pass", {
                        old_pass: t.oldpass,
                        new_pass: t.newpass,
                        new_pass2: t.newpass2
                    }), c.show("修改成功")
                }
            }))
        }
    }, "提交")))
}));
var Me = "_about_1urnl_1";
var Fe = {
    userinfo: "_userinfo_1wov8_1",
    item: "_item_1wov8_8",
    title: "_title_1wov8_12",
    avatar: "_avatar_1wov8_16",
    avatarUrl: "_avatar-url_1wov8_20",
    desc: "_desc_1wov8_26",
    upload: "_upload_1wov8_32",
    signature: "_signature_1wov8_35"
};
const Ye = [{
    path: "/", component: () => {
        const e = m.useRef(), t = m.useRef(),
            a = m.useRef(), [n, l] = m.useState(0), [s, r] = m.useState(0), [c, o] = m.useState({}), [p, d] = m.useState(_().format("YYYY-MM")), [u, E] = m.useState(1), [v, y] = m.useState([]), [h, g] = m.useState(0), [w, N] = m.useState(O), [b, k] = m.useState(P);
        m.useEffect((() => {
            x()
        }), [u, c, p]);
        const x = async () => {
            const {data: e} = await D(`/api/bill/list?date=${p}&type_id=${c.id || "all"}&page=${u}&page_size=5`);
            y(1 == u ? e.list : v.concat(e.list)), l(e.totalExpense.toFixed(2)), r(e.totalIncome.toFixed(2)), g(e.totalPage), k(U), N(T)
        }, S = () => {
            N(L), 1 != u ? E(1) : x()
        };
        return m.createElement("div", {className: pe.home}, m.createElement("div", {className: pe.header}, m.createElement("div", {className: pe.dataWrap}, m.createElement("span", {className: pe.expense}, "总支出：", m.createElement("b", null, "¥ ", n)), m.createElement("span", {className: pe.income}, "总收入：", m.createElement("b", null, "¥ ", s))), m.createElement("div", {className: pe.typeWrap}, m.createElement("div", {
            className: pe.left,
            onClick: () => {
                e.current && e.current.show()
            }
        }, m.createElement("span", {className: pe.title}, c.name || "全部类型", " ", m.createElement(i, {
            className: pe.arrow,
            type: "arrow-bottom"
        }))), m.createElement("div", {className: pe.right}, m.createElement("span", {
            className: pe.time,
            onClick: () => {
                t.current && t.current.show()
            }
        }, p, m.createElement(i, {
            className: pe.arrow,
            type: "arrow-bottom"
        }))))), m.createElement("div", {className: pe.contentWrap}, v.length ? m.createElement(f, {
            animationDuration: 200,
            stayTime: 400,
            refresh: {state: w, handler: S},
            load: {
                state: b, distance: 200, handler: () => {
                    u < h && (k(A), E(u + 1))
                }
            }
        }, v.map(((e, t) => m.createElement(me, {
            bill: e,
            key: t
        })))) : m.createElement(ie, null)), m.createElement("div", {
            className: pe.add, onClick: () => {
                a.current && a.current.show()
            }
        }, m.createElement(le, {type: "tianjia"})), m.createElement(ae, {
            ref: e, onSelect: e => {
                N(L), E(1), o(e)
            }
        }), m.createElement(ne, {
            ref: t, mode: "month", onSelect: e => {
                N(L), E(1), d(e)
            }
        }), m.createElement(re, {ref: a, onReload: S}))
    }
}, {
    path: "/data", component: () => {
        const e = m.useRef(), [t, a] = m.useState("expense"), [n, l] = m.useState(_().format("YYYY-MM")), [s, r] = m.useState(0), [c, o] = m.useState(0), [d, u] = m.useState([]), [E, v] = m.useState([]), [y, h] = m.useState("expense");
        m.useEffect((() => (f(), () => {
            ue.dispose()
        })), [n]);
        const f = async () => {
            const {data: e} = await D(`/api/bill/data?date=${n}`);
            r(e.total_expense), o(e.total_income);
            const t = e.total_data.filter((e => 1 == e.pay_type)).sort(((e, t) => t.number - e.number)),
                a = e.total_data.filter((e => 2 == e.pay_type)).sort(((e, t) => t.number - e.number));
            u(t), v(a), b("expense" == y ? t : a)
        }, w = e => {
            a(e)
        }, N = e => {
            h(e), b("expense" == e ? d : E)
        }, b = e => {
            window.echarts && (ue = echarts.init(document.getElementById("proportion")), ue.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {data: e.map((e => e.type_name))},
                series: [{
                    name: "支出",
                    type: "pie",
                    radius: "55%",
                    data: e.map((e => ({value: e.number, name: e.type_name}))),
                    emphasis: {itemStyle: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
                }]
            }))
        };
        return m.createElement("div", {className: de.data}, m.createElement("div", {className: de.total}, m.createElement("div", {
            className: de.time,
            onClick: () => {
                e.current && e.current.show()
            }
        }, m.createElement("span", null, n), m.createElement(i, {
            className: de.date,
            type: "date"
        })), m.createElement("div", {className: de.title}, "共支出"), m.createElement("div", {className: de.expense}, "¥", s), m.createElement("div", {className: de.income}, "共收入¥", c)), m.createElement("div", {className: de.structure}, m.createElement("div", {className: de.head}, m.createElement("span", {className: de.title}, "收支构成"), m.createElement("div", {className: de.tab}, m.createElement("span", {
            onClick: () => w("expense"),
            className: p({[de.expense]: !0, [de.active]: "expense" == t})
        }, "支出"), m.createElement("span", {
            onClick: () => w("income"),
            className: p({[de.income]: !0, [de.active]: "income" == t})
        }, "收入"))), m.createElement("div", {className: de.content}, ("expense" == t ? d : E).map((e => m.createElement("div", {
            key: e.type_id,
            className: de.item
        }, m.createElement("div", {className: de.left}, m.createElement("div", {className: de.type}, m.createElement("span", {
            className: p({
                [de.expense]: "expense" == t,
                [de.income]: "income" == t
            })
        }, m.createElement(le, {type: e.type_id ? B[e.type_id].icon : 1})), m.createElement("span", {className: de.name}, e.type_name)), m.createElement("div", {className: de.progress}, "¥", Number(e.number).toFixed(2) || 0)), m.createElement("div", {className: de.right}, m.createElement("div", {className: de.percent}, m.createElement(g, {
            shape: "line",
            percent: Number(e.number / Number("expense" == t ? s : c) * 100).toFixed(2),
            theme: "primary"
        }))))))), m.createElement("div", {className: de.proportion}, m.createElement("div", {className: de.head}, m.createElement("span", {className: de.title}, "收支构成"), m.createElement("div", {className: de.tab}, m.createElement("span", {
            onClick: () => N("expense"),
            className: p({[de.expense]: !0, [de.active]: "expense" == y})
        }, "支出"), m.createElement("span", {
            onClick: () => N("income"),
            className: p({[de.income]: !0, [de.active]: "income" == y})
        }, "收入"))), m.createElement("div", {id: "proportion"}))), m.createElement(ne, {
            ref: e,
            mode: "month",
            onSelect: e => {
                l(e)
            }
        }))
    }
}, {
    path: "/user", component: () => {
        const e = y(), [t, a] = m.useState({}), [n, l] = m.useState(""), [s, r] = m.useState(!1), [o, i] = m.useState("");
        m.useEffect((() => {
            p()
        }), []);
        const p = async () => {
            const {data: e} = await D("/api/user/get_userinfo");
            a(e), i(K(e.avatar)), l(e.signature)
        };
        return m.createElement("div", {className: _e.user}, m.createElement("div", {className: _e.head}, m.createElement("div", {className: _e.info}, m.createElement("span", null, "昵称：", t.username), m.createElement("span", null, m.createElement("img", {
            style: {
                width: 30,
                height: 30,
                verticalAlign: "-10px"
            }, src: "//s.yezgea02.com/1615973630132/geqian.png", alt: ""
        }), m.createElement("b", null, t.signature || "暂无内容"))), m.createElement("img", {
            className: _e.avatar,
            style: {width: 60, height: 60, borderRadius: 8},
            src: o,
            alt: ""
        })), m.createElement("div", {className: _e.content}, m.createElement(h, {
            hasArrow: !0,
            title: "用户信息修改",
            onClick: () => e.push("/userinfo"),
            icon: m.createElement("img", {
                style: {width: 20, verticalAlign: "-7px"},
                src: "//s.yezgea02.com/1615974766264/gxqm.png",
                alt: ""
            })
        }), m.createElement(h, {
            hasArrow: !0,
            title: "重制密码",
            onClick: () => e.push("/account"),
            icon: m.createElement("img", {
                style: {width: 20, verticalAlign: "-7px"},
                src: "//s.yezgea02.com/1615974766264/zhaq.png",
                alt: ""
            })
        }), m.createElement(h, {
            hasArrow: !0,
            title: "关于我们",
            onClick: () => e.push("/about"),
            icon: m.createElement("img", {
                style: {width: 20, verticalAlign: "-7px"},
                src: "//s.yezgea02.com/1615975178434/lianxi.png",
                alt: ""
            })
        })), m.createElement(w, {
            className: _e.logout, block: !0, theme: "danger", onClick: async () => {
                localStorage.removeItem("token"), e.push("/login")
            }
        }, "退出登录"), m.createElement(N, {
            visible: s,
            title: "标题",
            closable: !0,
            onCancel: () => r(!1),
            footer: m.createElement(w, {
                block: !0, theme: "primary", onClick: async () => {
                    const {data: e} = await q("/api/user/edit_signature", {signature: n});
                    a(e), r(!1), c.show("修改成功")
                }
            }, "确认")
        }, m.createElement(E, {
            autoHeight: !0,
            showLength: !0,
            maxLength: 50,
            type: "text",
            rows: 3,
            value: n,
            placeholder: "请输入备注信息",
            onChange: e => l(e)
        })))
    }
}, {
    path: "/login", component: () => {
        const e = m.useRef(), [t, a] = m.useState("login"), [n, l] = m.useState(""), [s, r] = m.useState(""), [o, i] = m.useState(""), [d, u] = m.useState(""),
            _ = m.useCallback((e => {
                l(e)
            }), []);
        return m.useEffect((() => {
            document.title = "login" == t ? "登录" : "注册"
        }), [t]), m.createElement("div", {className: Ee}, m.createElement("div", {className: ve}), m.createElement("div", {className: ye}, m.createElement("span", {
            className: p({[he]: "login" == t}),
            onClick: () => a("login")
        }, "登录"), m.createElement("span", {
            className: p({[he]: "register" == t}),
            onClick: () => a("register")
        }, "注册")), m.createElement("div", {className: fe}, m.createElement(h, {icon: m.createElement(le, {type: "zhanghao"})}, m.createElement(E, {
            clearable: !0,
            type: "text",
            placeholder: "请输入账号",
            onChange: e => r(e)
        })), m.createElement(h, {icon: m.createElement(le, {type: "mima"})}, m.createElement(E, {
            clearable: !0,
            type: "password",
            placeholder: "请输入密码",
            onChange: e => i(e)
        })), "register" == t ? m.createElement(h, {icon: m.createElement(le, {type: "mima"})}, m.createElement(E, {
            clearable: !0,
            type: "text",
            placeholder: "请输入验证码",
            onChange: e => u(e)
        }), m.createElement(b, {
            ref: e,
            charNum: 4,
            onChange: _
        })) : null), m.createElement("div", {className: ge}, "register" == t ? m.createElement("div", {className: we}, m.createElement(k, null), m.createElement("label", {className: "text-light"}, "阅读并同意", m.createElement("a", null, "《掘掘手札条款》"))) : null, m.createElement(w, {
            onClick: async () => {
                if (s) if (o) try {
                    if ("login" == t) {
                        const {data: e} = await q("/api/user/login", {username: s, password: o});
                        localStorage.setItem("token", e.token), window.location.href = "/"
                    } else {
                        if (!d) return void c.show("请输入验证码");
                        if (d != n) return void c.show("验证码错误");
                        const {data: e} = await q("/api/user/register", {username: s, password: o});
                        c.show("注册成功"), a("login")
                    }
                } catch (e) {
                    c.show(e.msg)
                } else c.show("请输入密码"); else c.show("请输入账号")
            }, block: !0, theme: "primary"
        }, "login" == t ? "登录" : "注册")))
    }
}, {
    path: "/detail", component: () => {
        const e = m.useRef(), t = S(), a = y(), {id: n} = C.parse(t.search), [l, s] = m.useState({});
        m.useEffect((() => {
            r()
        }), []);
        const r = async () => {
            const {data: e} = await D(`/api/bill/detail?id=${n}`);
            s(e)
        };
        return m.createElement("div", {className: Se.detail}, m.createElement(xe, {title: "账单详情"}), m.createElement("div", {className: Se.card}, m.createElement("div", {className: Se.type}, m.createElement("span", {
            className: p({
                [Se.expense]: 1 == l.pay_type,
                [Se.income]: 2 == l.pay_type
            })
        }, m.createElement(le, {
            className: Se.iconfont,
            type: l.type_id ? B[l.type_id].icon : 1
        })), m.createElement("span", null, l.type_name || "")), 1 == l.pay_type ? m.createElement("div", {className: p(Se.amount, Se.expense)}, "-", l.amount) : m.createElement("div", {className: p(Se.amount, Se.incom)}, "+", l.amount), m.createElement("div", {className: Se.info}, m.createElement("div", {className: Se.time}, m.createElement("span", null, "记录时间"), m.createElement("span", null, _(Number(l.date)).format("YYYY-MM-DD HH:mm"))), m.createElement("div", {className: Se.remark}, m.createElement("span", null, "备注"), m.createElement("span", null, l.remark || "-"))), m.createElement("div", {className: Se.operation}, m.createElement("span", {
            onClick: () => {
                N.confirm({
                    title: "删除", content: "确认删除账单？", onOk: async () => {
                        await q("/api/bill/delete", {id: n}), c.show("删除成功"), a.goBack()
                    }
                })
            }
        }, m.createElement(le, {type: "shanchu"}), "删除"), m.createElement("span", {
            onClick: () => {
                e.current && e.current.show()
            }
        }, m.createElement(le, {type: "tianjia"}), "编辑"))), m.createElement(re, {ref: e, detail: l, onReload: r}))
    }
}, {path: "/account", component: Re}, {
    path: "/about",
    component: () => m.createElement(m.Fragment, null, m.createElement(xe, {title: "关于我们"}), m.createElement("div", {className: Me}, m.createElement("h2", null, "关于项目"), m.createElement("article", null, "这个项目的初衷，是想让从事前端开发的同学，进入全栈开发的领域。当然，不能说学完本教程你就能胜任任何全栈开发。但至少，你已经可以从设计数据库表开始，把自己的一个想法转化成实际可见的项目。"), m.createElement("h2", null, "关于作者"), m.createElement("article", null, "从 2015 年实习开始至今，有 6 年前端开发经验。虽然没有在大厂呆过，但是正因如此，我深知奋战在中小厂的前端开发在从业 1 到 3 年后，会遇到什么瓶颈，小册中也详细的描述了怎样从初级到中级的进阶之路。"), m.createElement("h2", null, "关于小册"), m.createElement("article", null, "这是一本全栈小册，服务端采用 Node 上层架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库。本小册致力于让同学们学会服务端的开发流程，从设计数据库到接口的编写，前端的接口数据对接和页面制作，再到线上环境的部署。由于本人用的是 Mac，为了照顾到 Windows 系统的同学，全程关键步骤都会有 Windows 部分的讲解。")))
}, {
    path: "/userinfo", component: () => {
        const e = y(), [t, a] = m.useState({}), [n, l] = m.useState(""), [s, o] = m.useState(""),
            i = localStorage.getItem("token");
        m.useEffect((() => {
            p()
        }), []);
        const p = async () => {
            const {data: e} = await D("/api/user/get_userinfo");
            a(e), l(K(e.avatar)), o(e.signature)
        };
        return m.createElement(m.Fragment, null, m.createElement(xe, {title: "用户信息"}), m.createElement("div", {className: Fe.userinfo}, m.createElement("h1", null, "个人资料"), m.createElement("div", {className: Fe.item}, m.createElement("div", {className: Fe.title}, "头像"), m.createElement("div", {className: Fe.avatar}, m.createElement("img", {
            className: Fe.avatarUrl,
            src: n,
            alt: ""
        }), m.createElement("div", {className: Fe.desc}, m.createElement("span", null, "支持 jpg、png、jpeg 格式大小 200KB 以内的图片"), m.createElement(j, {
            className: Fe.filePicker,
            onChange: e => {
                if (console.log("file.file", e.file), e && e.file.size > 204800) return void c.show("上传头像不得超过 200 KB！！");
                let t = new FormData;
                t.append("file", e.file), r({
                    method: "post",
                    url: `${W}/api/upload`,
                    data: t,
                    headers: {"Content-Type": "multipart/form-data", Authorization: i}
                }).then((e => {
                    l(K(e.data))
                }))
            },
            accept: "image/*"
        }, m.createElement(w, {
            className: Fe.upload,
            theme: "primary",
            size: "xs"
        }, "点击上传"))))), m.createElement("div", {className: Fe.item}, m.createElement("div", {className: Fe.title}, "个性签名"), m.createElement("div", {className: Fe.signature}, m.createElement(E, {
            clearable: !0,
            type: "text",
            value: s,
            placeholder: "请输入个性签名",
            onChange: e => o(e)
        }))), m.createElement(w, {
            onClick: async () => {
                await q("/api/user/edit_userinfo", {signature: s, avatar: n}), c.show("修改成功"), e.goBack()
            }, style: {marginTop: 50}, block: !0, theme: "primary"
        }, "保存")))
    }
}];
var Ie = "_tab_1udd2_1";
const $e = ({showNav: e}) => {
    const [t, a] = m.useState("/"), n = y();
    return m.createElement(R, {
        visible: e, className: Ie, activeKey: t, onChange: e => {
            a(e), n.push(e)
        }
    }, m.createElement(R.Item, {
        itemKey: "/",
        title: "账单",
        icon: m.createElement(le, {type: "zhangdan"})
    }), m.createElement(R.Item, {
        itemKey: "/data",
        title: "统计",
        icon: m.createElement(le, {type: "tongji"})
    }), m.createElement(R.Item, {itemKey: "/user", title: "我的", icon: m.createElement(le, {type: "wode"})}))
};
$e.propTypes = {showNav: d.bool};
const We = () => {
    const e = S(), {pathname: t} = e, a = ["/", "/data", "/user"], [n, l] = m.useState(!1);
    return m.useEffect((() => {
        l(a.includes(t))
    }), [t]), m.createElement(M, {primaryColor: "#007fff"}, m.createElement(m.Fragment, null, m.createElement(F, null, Ye.map((e => m.createElement(Y, {
        exact: !0,
        key: e.path,
        path: e.path
    }, m.createElement(e.component, null))))), m.createElement($e, {showNav: n})))
};
I.render(m.createElement(m.StrictMode, null, m.createElement($, null, m.createElement(We, null))), document.getElementById("root"));
