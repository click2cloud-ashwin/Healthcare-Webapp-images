(this["webpackJsonpazure-synapse"] = this["webpackJsonpazure-synapse"] || []).push([
    [0], {
        10: function(e, a, t) { e.exports = { frecogbg: "FormRecognizer_frecogbg__1Ogfu", leftCover: "FormRecognizer_leftCover__TBXSb", rightCover: "FormRecognizer_rightCover__-E227", iframe: "FormRecognizer_iframe__3Uyfx", mainer: "FormRecognizer_mainer__lwgcL", searchfull: "FormRecognizer_searchfull__1w5im", title: "FormRecognizer_title__2ED0n", colhalf: "FormRecognizer_colhalf__3xo9X", row: "FormRecognizer_row__2lQRh", colhalf2: "FormRecognizer_colhalf2__2S77P", "react-tabs__tab": "FormRecognizer_react-tabs__tab__1FQJG", gotoAccidentSearch: "FormRecognizer_gotoAccidentSearch__V4bsn", gotoAccidentSearch1: "FormRecognizer_gotoAccidentSearch1__1UDoZ", arrowBottom: "FormRecognizer_arrowBottom__1LOWF", arrowBottom1: "FormRecognizer_arrowBottom1__r79v0", arrowBottom333: "FormRecognizer_arrowBottom333__1ubKG", arrowTopRight: "FormRecognizer_arrowTopRight__2JJuW", arrowTop: "FormRecognizer_arrowTop__1ehxL", arrowTopMiddle: "FormRecognizer_arrowTopMiddle__uhE14", gotoFormRecog: "FormRecognizer_gotoFormRecog__IwU_v", arrow: "FormRecognizer_arrow__3Ol_9", responsiveScalingCanvasHost: "FormRecognizer_responsiveScalingCanvasHost__1ceHb", publishedCanvasContainer: "FormRecognizer_publishedCanvasContainer__3O61r", "page-container": "FormRecognizer_page-container__uqus_", frame: "FormRecognizer_frame__3WpUx" } },
        102: function(e, a, t) { e.exports = { mute: "volume-controller_mute__jUiBs", position: "volume-controller_position__v3yfm" } },
        119: function(e, a, t) { e.exports = { finance: "Finance_finance__1R4jS", financeCover: "Finance_financeCover__305dg", background: "Finance_background__lsJ1w", example: "Finance_example__13w75", diagramContainer: "Finance_diagramContainer__3guZZ", diagram: "Finance_diagram__1iqnf" } },
        120: function(e, a, t) { e.exports = { eCommerceFrame: "ECommerce_eCommerceFrame__3Fbgc" } },
        123: function(e, a, t) { e.exports = t.p + "static/media/caution.a00a24b0.png" },
        138: function(e, a, t) { e.exports = t(189) },
        14: function(e, a, t) { e.exports = { availability: "Global_availability__3Vu-Z", performance: "Global_performance__-4cZd", quality: "Global_quality__1newE", report: "Global_report__2XZVG", factory: "Global_factory__1F7L4", tile: "Global_tile__2d2Kg", dot: "Global_dot__3KcNT", label: "Global_label__24YK9", miami: "Global_miami__3v7sT", stuttgart: "Global_stuttgart__1ziGZ", kyoto: "Global_kyoto__1Su3a", sanDiego: "Global_sanDiego__nL3mr", map: "Global_map__2qRvm", "map-shadow": "Global_map-shadow__Kp2kQ", "global-page-background": "Global_global-page-background__3vGUY" } },
        143: function(e, a, t) {},
        144: function(e, a, t) {},
        152: function(e, a) {},
        154: function(e, a) {},
        155: function(e, a) {},
        156: function(e, a) {},
        157: function(e, a) {},
        17: function(e, a, t) { e.exports = { plane: "Patient_plane__3yRVH", animatedIcon: "Patient_animatedIcon__VufVB", boat: "Patient_boat__2JxHK", pills: "Patient_pills__38jY4", operation: "Patient_operation__3qJOI", ambulance: "Patient_ambulance__1ycte", kidney: "Patient_kidney__2G3ac", lab: "Patient_lab__3bee8", consulting1: "Patient_consulting1__35FGK", consulting2: "Patient_consulting2__YjDpq", scanner: "Patient_scanner__2vAW3", heart2: "Patient_heart2__3XXba", f1: "Patient_f1__2B-Ww", car: "Patient_car__25l_r", truck: "Patient_truck__1WvZV", background: "Patient_background__15eU-", container: "Patient_container__2VnyP", showPopupOn: "Patient_showPopupOn__32TTv", showPopupOn2: "Patient_showPopupOn2__1Meu4", showPopupOn3: "Patient_showPopupOn3__35LQ4", covidSearchLink: "Patient_covidSearchLink__3VLaC", patientOverviewLink: "Patient_patientOverviewLink__1HxEI", hospitalOverviewLink: "Patient_hospitalOverviewLink__1P0Tf", hospitalOverviewLink2: "Patient_hospitalOverviewLink2__29kM7", hospitalOverviewLink23: "Patient_hospitalOverviewLink23__1B-eV", hospitalOverviewLink33: "Patient_hospitalOverviewLink33__28JWV", hospitalOverviewLink333: "Patient_hospitalOverviewLink333__2IxVI", hospitalOverviewLink3: "Patient_hospitalOverviewLink3__3oGHH", hospitalOverviewLink4: "Patient_hospitalOverviewLink4__11D3Q", hospitalOverviewLink44: "Patient_hospitalOverviewLink44__2F6cp", powerapptofinalarrow: "Patient_powerapptofinalarrow__6wce3" } },
        189: function(e, a, t) {
            "use strict";
            t.r(a);
            var n, c = t(116),
                r = t(0),
                o = t.n(r),
                i = t(87),
                l = t.n(i),
                s = (t(143), t(144), t(5)),
                m = t(1),
                d = t(44),
                p = t.n(d),
                u = window.runConfig.BlobBaseUrl,
                h = t(15),
                g = t(94),
                f = t(69),
                b = Object(f.b)({ name: "login", initialState: { loggedIn: !1, disclaimerShown: !1, componentHistory: [] }, reducers: { login: function(e) { localStorage.setItem("LoginCache", Date.now().toString()), e.loggedIn = !0, e.disclaimerShown = !0 }, logout: function(e) { localStorage.removeItem("LoginCache"), e.loggedIn = !1, e.disclaimerShown = !1 }, disclaimershown: function(e) { e.loggedIn = !1, e.disclaimerShown = !0, console.log("Displayed") }, addHistory: function(e, a) { e.componentHistory = [].concat(Object(g.a)(e.componentHistory), [a.payload]) } } }),
                _ = b.actions,
                E = b.reducer,
                v = _.login,
                y = _.disclaimershown,
                w = _.addHistory,
                N = _.logout,
                S = function(e) { return e.loginReducer.disclaimerShown },
                O = function(e) {
                    var a = e.loginReducer.loggedIn,
                        t = localStorage.getItem("LoginCache");
                    t && (a = +t > Date.now() - 6e4 * 60, localStorage.setItem("LoginCache", Date.now().toString()));
                    return a
                },
                C = function(e) { return e.loginReducer.componentHistory },
                M = E;
            ! function(e) { e[e.Miami = 0] = "Miami", e[e.Patient = 1] = "Patient", e[e.Global = 2] = "Global", e[e.GlobalBing = 3] = "GlobalBing", e[e.Factory = 4] = "Factory", e[e.Machine = 5] = "Machine", e[e.MiamiMap = 6] = "MiamiMap", e[e.MiamiVideo = 7] = "MiamiVideo", e[e.Field = 8] = "Field", e[e.RioDeJaneiro = 9] = "RioDeJaneiro", e[e.PowerApps = 10] = "PowerApps", e[e.Finance = 11] = "Finance", e[e.AfterDashboard = 12] = "AfterDashboard", e[e.CampaignReport = 13] = "CampaignReport", e[e.Diagram = 14] = "Diagram", e[e.Diagram2 = 15] = "Diagram2", e[e.Diagram3 = 16] = "Diagram3", e[e.IncidentSearch = 17] = "IncidentSearch", e[e.Globalsafetydashboard = 18] = "Globalsafetydashboard", e[e.AnomalyDetection = 19] = "AnomalyDetection", e[e.FormRecognizer = 20] = "FormRecognizer", e[e.ECommerce = 21] = "ECommerce", e[e.ECommerce2 = 22] = "ECommerce2", e[e.IaasVideo = 23] = "IaasVideo", e[e.PSSqlDashboardBefore = 24] = "PSSqlDashboardBefore", e[e.PSSqlDashboardAfter = 25] = "PSSqlDashboardAfter", e[e.PSSqlDashboardDuring = 26] = "PSSqlDashboardDuring", e[e.SalesCampaignReportPreMigration = 27] = "SalesCampaignReportPreMigration", e[e.SalesCampaignReportPostMigration = 28] = "SalesCampaignReportPostMigration", e[e.PSSqlRetailMap = 29] = "PSSqlRetailMap", e[e.PSSQLVideo = 30] = "PSSQLVideo", e[e.RaceTrackVideo = 31] = "RaceTrackVideo", e[e.EmbeddedCampaignDashboard = 32] = "EmbeddedCampaignDashboard", e[e.PSEmbedded = 33] = "PSEmbedded", e[e.HealthcareAnalytics = 34] = "HealthcareAnalytics", e[e.HospitalIncidentReport = 35] = "HospitalIncidentReport", e[e.UsaMapEmbedded = 36] = "UsaMapEmbedded", e[e.PredictiveAnalyticsReport = 37] = "PredictiveAnalyticsReport", e[e.HonoluluVideo = 38] = "HonoluluVideo", e[e.HololensVideo = 39] = "HololensVideo", e[e.HospitalNetwork = 40] = "HospitalNetwork", e[e.HospitalIncidentInsights = 41] = "HospitalIncidentInsights", e[e.disclaimer = 42] = "disclaimer" }(n || (n = {}));
            var j = function(e) {
                    var a;
                    switch (e.type) {
                        case n.ECommerce2:
                        case n.Miami:
                        case n.MiamiMap:
                        case n.HonoluluVideo:
                        case n.HololensVideo:
                        case n.RioDeJaneiro:
                        case n.GlobalBing:
                        case n.Global:
                        case n.Factory:
                        case n.Field:
                        case n.HospitalNetwork:
                        case n.ECommerce:
                        case n.Machine:
                        case n.PSSqlRetailMap:
                        case n.Diagram3:
                        case n.PSSqlDashboardBefore:
                        case n.PSSqlDashboardAfter:
                        case n.PSSqlDashboardDuring:
                        case n.PSSQLVideo:
                        case n.Finance:
                        case n.AfterDashboard:
                        case n.CampaignReport:
                        case n.SalesCampaignReportPreMigration:
                        case n.SalesCampaignReportPostMigration:
                        case n.Diagram:
                        case n.IncidentSearch:
                        case n.HealthcareAnalytics:
                        case n.HospitalIncidentReport:
                        case n.Globalsafetydashboard:
                        case n.Diagram2:
                        case n.RaceTrackVideo:
                        case n.FormRecognizer:
                        case n.AnomalyDetection:
                        case n.PSEmbedded:
                        case n.UsaMapEmbedded:
                        case n.Patient:
                        case n.PredictiveAnalyticsReport:
                        case n.EmbeddedCampaignDashboard:
                        case n.HospitalIncidentInsights:
                            a = "persona_Spencer_VP_Operations.jpg", console.log(u + a)
                    }
                    var t = Object(h.e)(O),
                        c = (Object(s.f)(), Object(h.d)());
                    return o.a.createElement("div", { className: p.a.header, style: { backgroundImage: 'url("'.concat(u, 'header_background.png")') } }, o.a.createElement("a", { href: "#/healthcare" }, o.a.createElement("div", { className: p.a.logo }, o.a.createElement("img", { src: "".concat(u, "header_WWI_logo.png"), alt: "Company logo" }))), o.a.createElement("a", { href: "#/healthcare" }, o.a.createElement("div", { className: p.a.logo })), o.a.createElement("div", { className: "".concat(p.a.right), style: { marginRight: "20px" } }, o.a.createElement("input", { disabled: !0, type: "text", style: { background: "white", borderRadius: "50px", height: "30px", width: "230px", marginTop: "17px" } }), o.a.createElement("span", { style: { padding: "5px", borderRadius: "30px", position: "absolute", top: "22px", marginLeft: "-30px", background: "orange", height: "17px", width: "17px" } }, o.a.createElement("img", { width: "15px", src: "".concat(u, "header_icon_search.png"), alt: "Search" }))), o.a.createElement("div", { className: p.a.button }, o.a.createElement("img", { src: "".concat(u, "header_icon_alert.png"), alt: "Company logo" })), o.a.createElement("div", { className: p.a.button }, o.a.createElement("img", { src: "".concat(u, "header_icon_settings.png"), alt: "Company logo" })), t && o.a.createElement("div", { className: p.a.button }, o.a.createElement("img", { className: p.a.persona, src: u + a, alt: "" })), t && o.a.createElement("div", { className: p.a.button, onClick: function() { c(N()) } }, o.a.createElement("img", { src: "".concat(u, "header_icon_logout.png"), alt: "Company logo" })))
                },
                I = t(9),
                k = t.n(I),
                x = t(7),
                P = t.n(x);

            function A() {
                var e = Object(r.useState)(!1),
                    a = Object(m.a)(e, 2),
                    t = a[0],
                    n = a[1],
                    c = Object(r.useRef)(null),
                    o = function() { return n(!0) },
                    i = function(e) {
                        (function(e, a) { try { return function e(a, t) { return !!a && (a == t || e(a.parentNode, t)) }(e, a) } catch (t) {} return !1 })(e.toElement || e.relatedTarget, c.current) || n(!1)
                    };
                return Object(r.useEffect)((function() {
                    var e = c.current;
                    if (e) return e.addEventListener("mouseenter", o), e.addEventListener("mouseout", i),
                        function() { e.removeEventListener("mouseenter", o), e.removeEventListener("mouseout", i) }
                }), [c.current]), [c, t]
            }
            var R = function(e) {
                    var a = A(),
                        t = Object(m.a)(a, 2),
                        n = t[0],
                        c = t[1],
                        r = e.href ? { href: e.href } : {};
                    return o.a.createElement(o.a.Fragment, null, !e.additional && o.a.createElement("a", Object.assign({}, r, { ref: n, className: "".concat(P.a.button, " \n      ").concat(e.expanded && P.a.expanded, " \n      ").concat(c && P.a.notSelected, " "), onClick: function() { e.onClick && e.onClick() }, target: "".concat(e.targetExternalPage ? "_blank" : "_self") }), o.a.createElement("div", { className: "".concat(P.a.navImg, "\n        ").concat(e.currentPage && P.a.selected) }, o.a.createElement("img", { src: "".concat(u).concat(e.imgSrc), alt: "" })), e.title && !e.additional && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "".concat(P.a.titleContainer, " \n          ").concat(c && P.a.buttonHover, " \n          ").concat((e.expanded || c) && P.a.expanded) }, o.a.createElement("div", { className: "".concat(P.a.navbarMenuTitle, "\n          ").concat(e.currentPage && P.a.selected, " ") }, e.title)))), e.additional && o.a.createElement("span", Object.assign({}, r, { ref: n, className: "".concat(P.a.button, " \n      ").concat(e.expanded && P.a.expanded, " \n      ").concat(c && P.a.notSelected, " "), onClick: function() { e.onClick && e.onClick() }, style: { display: "inline" } }), o.a.createElement("div", { className: "".concat(P.a.navImg, "\n        ").concat(e.currentPage && P.a.selected) }, o.a.createElement("img", { src: "".concat(u).concat(e.imgSrc), alt: "" })), e.title && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "".concat(P.a.titleContainer, " \n          ").concat(c && P.a.buttonHover, " \n          ").concat((e.expanded || c) && P.a.expanded) }, o.a.createElement("div", { className: "".concat(P.a.navbarMenuTitle, "\n          ").concat(e.currentPage && P.a.selected, " ") }, o.a.createElement("a", { className: "".concat(P.a.button, " ").concat(e.expanded && P.a.expanded, " "), style: { display: "inline-block", color: "white", textDecoration: "none !important" }, href: e.additionalLinkOne }, o.a.createElement("span", { style: { textDecoration: "none" } }, e.additionalTitle, " "), "\xa0- Embedded"))))))
                },
                D = function(e) {
                    var a = A(),
                        t = Object(m.a)(a, 2),
                        n = t[0],
                        c = t[1],
                        r = A(),
                        i = Object(m.a)(r, 2),
                        l = i[0],
                        s = i[1],
                        d = c || s;
                    return o.a.createElement("div", { ref: n, className: "".concat(P.a.button, " \n      ").concat(c && P.a.buttonHover, " ") }, o.a.createElement("div", { className: "".concat(P.a.navImg, " \n        ").concat(P.a.alignTop, " \n        ").concat(c && P.a.buttonHover, "\n        ").concat(e.currentPage && P.a.selected) }, o.a.createElement("img", { src: "".concat(u).concat(e.imgSrc), alt: "" })), e.title && o.a.createElement("div", { className: "".concat(P.a.subMenu, " \n          ").concat(e.flip && P.a.flipped, "\n          ").concat(c && P.a.buttonHover, "\n          ").concat((e.expanded || d) && P.a.expanded) }, o.a.createElement("div", { className: P.a.navbarMenuTitle }, e.title), !e.expanded && d && o.a.createElement("div", { ref: l, className: "".concat(P.a.children, " ") }, e.children)))
                },
                H = function(e) {
                    window.runConfig.ecommercIframeSrc;
                    var a = window.runConfig,
                        t = (a.dashboardIdInMenu, a.finance_ID, a.AfterDashBoard_ID, a.campaignReport_ID, Object(r.useState)(!1)),
                        c = Object(m.a)(t, 2),
                        i = c[0],
                        l = c[1],
                        s = Object(r.useState)(!1),
                        d = Object(m.a)(s, 2),
                        p = d[0],
                        h = d[1],
                        g = Object(r.useState)(!1),
                        f = Object(m.a)(g, 2),
                        b = f[0],
                        _ = f[1],
                        E = Object(r.useState)(!1),
                        v = Object(m.a)(E, 2),
                        y = v[0],
                        w = v[1],
                        N = Object(r.useState)(!1),
                        S = Object(m.a)(N, 2),
                        O = (S[0], S[1]),
                        C = Object(r.useState)(!1),
                        M = Object(m.a)(C, 2),
                        j = (M[0], M[1]),
                        I = Object(r.useState)(!1),
                        k = Object(m.a)(I, 2),
                        x = k[0],
                        A = k[1],
                        H = Object(r.useState)(!1),
                        L = Object(m.a)(H, 2),
                        T = L[0],
                        F = L[1],
                        B = function() { F(!1), w(!1), O(!1), _(!1), h(!1), j(!1), A(!1) };
                    return o.a.createElement("div", { className: P.a.nav, style: { backgroundImage: 'url("'.concat(u, 'LeftNav_BG.png")'), backgroundColor: "#2574be" } }, o.a.createElement(R, { imgSrc: "navbar_icon_menu.png", expanded: i, currentPage: !1, onClick: function() { l(!i) } }), o.a.createElement(D, { imgSrc: "icon_hospital.png", title: "Hospital", expanded: T || i, toggleExpand: function() { B(), F(!T) }, currentPage: e.type === n.ECommerce || e.type === n.HospitalNetwork }, o.a.createElement(R, { href: "#/healthcare", imgSrc: "icon_hospital.png", title: "Hospital", expanded: !0, currentPage: e.type === n.ECommerce }), o.a.createElement(R, { href: "#/us-map", imgSrc: "icon_network.png", title: "Hospital Network", expanded: !0, currentPage: e.type === n.HospitalNetwork })), o.a.createElement(D, { imgSrc: "icon_dash.png", title: "Executive Dashboards - Before", expanded: T || i, toggleExpand: function() { B(), F(!T) }, currentPage: e.type === n.Finance }, o.a.createElement(R, { href: "#/hospitalinsights", imgSrc: "icon_dash_V2.png", title: "Executive Dashboard", expanded: !0, currentPage: e.type === n.Finance })), o.a.createElement(D, { imgSrc: "icon_world.png", title: "Hospital Network", expanded: x || i, toggleExpand: function() { B(), A(!x) }, currentPage: e.type === n.GlobalBing || e.type === n.MiamiMap || e.type === n.Miami }, o.a.createElement(R, { href: "#/global-bing", imgSrc: "navbar_icon_global.png", title: "Hospital Overview", expanded: !0, currentPage: e.type === n.GlobalBing }), o.a.createElement(R, { href: "#/miami", imgSrc: "icon_map.png", title: "Hospital Map", expanded: !0, currentPage: e.type === n.Miami }), o.a.createElement(R, { href: "#/MiamiMap", imgSrc: "navbar_icon_bing.png", title: "Location via Bing", expanded: !0, currentPage: e.type === n.MiamiMap })), o.a.createElement(R, { href: "#/hospital-operations", imgSrc: "icon_dash_V2.png", title: "Hospital Overview ", expanded: i, currentPage: e.type === n.Factory }), o.a.createElement(D, { imgSrc: "navbar_icon_chart.png", title: "Executive Dashboard - After", expanded: b || i, currentPage: e.type === n.AfterDashboard || e.type === n.EmbeddedCampaignDashboard, toggleExpand: function() { B(), _(!b) } }, o.a.createElement(R, { href: "#/afterdashboard", imgSrc: "icon_dash.png", title: "Executive Dashboard", expanded: !0, currentPage: e.type === n.AfterDashboard }), o.a.createElement(R, { href: "#/campaignreport", imgSrc: "icon_dash_V2.png", title: "Campaign Analytics", expanded: !0, currentPage: e.type === n.EmbeddedCampaignDashboard })), o.a.createElement(D, { imgSrc: "icon_insights.png", title: "Predictive Insights", expanded: p || i, toggleExpand: function() { B(), h(!p) }, currentPage: e.type === n.IncidentSearch || e.type === n.Globalsafetydashboard || e.type === n.FormRecognizer || e.type === n.PredictiveAnalyticsReport || e.type === n.PSSqlDashboardBefore || e.type === n.HospitalIncidentInsights }, o.a.createElement(R, { href: "#/predictive-analytics-report", imgSrc: "search_icon.png", title: "Predictive Analytics Report", expanded: !0, currentPage: e.type === n.PredictiveAnalyticsReport }), o.a.createElement(R, { href: "#/covid-search", imgSrc: "icon_search.png", title: "Covid Search ", expanded: !0, currentPage: e.type === n.IncidentSearch }), o.a.createElement(R, { href: "#/formrecognizer", imgSrc: "icon_search.png", title: "Azure Form Recognizer ", expanded: !0, currentPage: e.type === n.FormRecognizer }), o.a.createElement(R, { href: "#/hospital-incident-insights", imgSrc: "dashboard_icon.png", title: "Hospital Incident Insights", expanded: !0, currentPage: e.type === n.HospitalIncidentInsights })), o.a.createElement(D, { imgSrc: "icon_health.png", title: "Patient Care Management", expanded: y || i, currentPage: !1, flip: !0, toggleExpand: function() { B(), w(!y) } }, o.a.createElement(R, { href: "https://healthcareapp.crm.dynamics.com/", imgSrc: "icon_dynamics.png", title: "Dynamics 365", currentPage: !1, expanded: !0, targetExternalPage: !0 }), o.a.createElement(R, { href: "https://patientportaldemo.powerappsportals.com/", imgSrc: "icon_health.png", title: "Patient Portal", currentPage: !1, expanded: !0, targetExternalPage: !0 }), o.a.createElement(R, { href: "https://teams.microsoft.com/go#", imgSrc: "icon_teams.png", title: "Teams", currentPage: !1, expanded: !0, targetExternalPage: !0 }), o.a.createElement(R, { href: "https://admin.healthbot.microsoft.com/", imgSrc: "icon_bot.png", title: "Health Bot", currentPage: !1, expanded: !0, targetExternalPage: !0 })), o.a.createElement(R, { href: "#/hololens-healthcare", imgSrc: "icon_bot.png", title: "Hololens Video", expanded: i, currentPage: e.type === n.HololensVideo }), o.a.createElement(R, { href: "#/honolulu-healthcare", imgSrc: "Honolulu_Hospital_Story.png", title: "Honolulu Scene", expanded: i, currentPage: e.type === n.HonoluluVideo }), o.a.createElement(R, { href: "#/diagram", imgSrc: "navbar_icon_diagram.png", title: "Architecture", expanded: i, currentPage: e.type === n.Diagram }), o.a.createElement(R, { href: "#/powerApps", imgSrc: "navbar_icon_powerapps.png", title: "Mobile Experience Using Power Apps", expanded: i, currentPage: e.type === n.PowerApps }))
                };
            var L = function() {
                var e = Object(h.e)(O),
                    a = Object(h.e)(S),
                    t = Object(h.e)(C),
                    n = Object(s.f)();
                if (function(e) {
                        var a = Object(h.d)();
                        Object(r.useEffect)((function() { a(w(e)) }), [])
                    }(n.location.pathname), e && "/login" === n.location.pathname) { var c = Object(g.a)(t).filter((function(e) { return "/login" !== e })); return "disclaimer" !== c[c.length - 1] && c.length, o.a.createElement(s.a, { to: "/healthcare" }) }
                var i = JSON.parse("".concat("true"));
                return console.log(a), console.log(e), i ? e || a ? !e && a ? o.a.createElement(s.a, { to: "/login" }) : null : o.a.createElement(s.a, { to: "/disclaimer" }) : null
            };
            var T = function() {
                var e = window.runConfig.BingMapKey,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(s.f)();
                return Object(r.useEffect)((function() {
                    c || (setTimeout((function() {
                        var a = new window.Microsoft.Maps.Location(25.949959, -80.120752),
                            t = new window.Microsoft.Maps.Location(25.949741, -80.120454),
                            n = new Microsoft.Maps.Pushpin(t, { icon: u + "icon_arrow.png" }),
                            c = new window.Microsoft.Maps.Location(26.949959, -80.120752),
                            r = new Microsoft.Maps.Location(28.7, -80.539),
                            o = new Microsoft.Maps.Pushpin(r, { icon: u + "icon_arrow.png" }),
                            i = new Microsoft.Maps.Location(29.186, -81.0624),
                            s = new Microsoft.Maps.Pushpin(i, { icon: u + "icon_arrow.png" }),
                            m = new Microsoft.Maps.Pushpin(a, { icon: u + "miami_car.gif" }),
                            d = new window.Microsoft.Maps.Location(29.184956, -81.073952),
                            p = new window.Microsoft.Maps.Location(29.184956, -81.068952),
                            h = new Microsoft.Maps.Pushpin(d, { icon: u + "miami_f1.gif" }),
                            g = new window.Microsoft.Maps.Location(29.186904, -81.063308),
                            f = new Microsoft.Maps.Pushpin(g, { icon: u + "miamimap_icon_blue_car.png" }),
                            b = new window.Microsoft.Maps.Map("#bingMap", { credentials: e, center: a, zoom: 18, mapTypeId: window.Microsoft.Maps.MapTypeId.aerial });
                        b.entities.add(m), b.entities.add(h), b.entities.add(f), b.entities.add(n), b.entities.add(o), b.entities.add(s), Microsoft.Maps.Events.addHandler(f, "click", (function() { l.push("/MiamiVideo") })), Microsoft.Maps.Events.addHandler(m, "click", (function() { b.setView({ center: c, zoom: 7, mapTypeId: window.Microsoft.Maps.MapTypeId.aerial }) })), Microsoft.Maps.Events.addHandler(h, "click", (function() { b.setView({ center: p, zoom: 16, mapTypeId: window.Microsoft.Maps.MapTypeId.aerial }) }))
                    }), 500), i(!0))
                }), [c]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.MiamiMap }), o.a.createElement(H, { type: n.MiamiMap }), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container ".concat(k.a.container) }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.pills) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "pills.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.operation) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "operation.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.ambulance) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "ambulance.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.lab) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "lab.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.kidney) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "dialysis.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.scanner) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "Scanner.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.consulting1) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "consulting.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.consulting2) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "consulting.gif"), alt: "" }))), o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.heart2) }, o.a.createElement("a", { href: "#/hospital-operations" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "miami_heart.gif"), alt: "" }))), o.a.createElement("a", { className: "".concat(k.a.heart21), href: "#/hospital-operations" }), o.a.createElement("img", { className: k.a.background, src: "".concat(u, "IoT_Map-V8.jpg"), alt: "" }))))
            };
            var F, B = function() { return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Miami }), o.a.createElement(H, { type: n.Miami }), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container ".concat(k.a.container) }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement("div", { className: "pulsating-circle ".concat(k.a.f1) }, o.a.createElement("a", { href: "#/MiamiMap" }, o.a.createElement("img", { className: k.a.animatedIcon, src: "".concat(u, "miami_heart.gif"), alt: "" }))), o.a.createElement("a", { className: "".concat(k.a.f2), href: "#/MiamiMap" }), o.a.createElement("img", { className: k.a.background, src: "".concat(u, "IoT_Map-V7.jpg"), alt: "" })))) },
                V = t(13),
                W = t.n(V),
                q = t(30),
                z = t(54),
                G = t(55),
                U = t(11);
            ! function(e) { e.Report = "report", e.Dashboard = "dashboard", e.Tile = "tile" }(F || (F = {}));
            var J, Z, Q = window.runConfig.apiUrl,
                K = new(function() {
                    function e() { Object(z.a)(this, e), this.accessToken = "", this.embedToken = "", this.powerBiService = void 0, this.report = void 0, this.apiUrl = Q, this.instance = void 0, this.powerBiService = new U.service.Service(U.factories.hpmFactory, U.factories.wpmpFactory, U.factories.routerFactory), this.instance = this }
                    return Object(G.a)(e, [{ key: "hydrate", value: function() { this.powerBiService.preload({}) } }, {
                        key: "switchMode",
                        value: function(e, a) {
                            var t = document.getElementById(e);
                            t && this.powerBiService.get(t).switchMode(a ? "edit" : "view")
                        }
                    }, { key: "switchPage", value: function(e, a) { var t = document.getElementById(e); if (t) try { this.powerBiService.get(t).page(a).setActive() } catch (n) {} } }, {
                        key: "setFilter",
                        value: function(e, a) {
                            var t = document.getElementById(e);
                            if (t) {
                                var n = this.powerBiService.get(t);
                                n.removeFilters();
                                var c = { filterType: U.models.FilterType.Basic, target: { table: a.table, column: a.column }, operator: "In", values: [a.value], $schema: "http://powerbi.com/product/schema#basic" };
                                n.setFilters([c])
                            }
                        }
                    }, {
                        key: "reload",
                        value: function(e) {
                            var a = document.getElementById(e);
                            a && this.powerBiService.get(a).reload()
                        }
                    }, { key: "refresh", value: function(e) { var a = document.getElementById(e); if (a) { var t = this.powerBiService.get(a); try { t.refresh() } catch (n) {} } } }, {
                        key: "loadToken",
                        value: function() {
                            var e = Object(q.a)(W.a.mark((function e(a, t) {
                                var n, c, r;
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (n = t.editMode ? "editMode=true" : "") && t.filter && (n += (n ? "&" : "") + t.filter), n = n ? "?" + n : "", e.next = 5, fetch("".concat(this.apiUrl, "/api/token/embed/").concat(t.type, "/").concat(a).concat(n), { headers: { responseType: "text", "Access-Control-Allow-Origin": "*" } });
                                        case 5:
                                            return c = e.sent, e.next = 8, c.text();
                                        case 8:
                                            return r = e.sent, e.abrupt("return", r);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(a, t) { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "load",
                        value: function() {
                            var e = Object(q.a)(W.a.mark((function e(a, t) {
                                var n, c, r, o, i, l = this;
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.loadToken(a, t);
                                        case 2:
                                            n = e.sent, c = { type: t.type, accessToken: n, tokenType: U.models.TokenType.Embed, id: a, dashboardId: t.type === F.Dashboard ? a : "", embedUrl: t.type === F.Report ? "https://app.powerbi.com/reportEmbed" : t.type === F.Dashboard ? "https://app.powerbi.com/dashboardEmbed" : "https://app.powerbi.com/embed", permissions: t.editMode ? U.models.Permissions.Create : U.models.Permissions.Read, viewMode: t.editMode ? U.models.ViewMode.Edit : U.models.ViewMode.View, pageView: "fitToWidth" }, t.type === F.Report && (c.settings = { filterPaneEnabled: !1, navContentPaneEnabled: !1, background: U.models.BackgroundType.Transparent }), t.pageName && (c.pageName = t.pageName), t.height && (c.height = t.height), t.width && (c.width = t.width), r = this.powerBiService;
                                            try {
                                                o = r.embed(document.getElementById(t.elementId), c), i = function() {
                                                    var e = Object(q.a)(W.a.mark((function e(a, t) {
                                                        var n;
                                                        return W.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, l.loadToken(a, t);
                                                                case 2:
                                                                    n = e.sent, o.setAccessToken(n);
                                                                case 4:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(a, t) { return e.apply(this, arguments) }
                                                }(), o.on("error", function() {
                                                    var e = Object(q.a)(W.a.mark((function e(n) {
                                                        return W.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if ("TokenExpired" !== n.detail.message) { e.next = 3; break }
                                                                    return e.next = 3, i(a, t);
                                                                case 3:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(a) { return e.apply(this, arguments) }
                                                }()), o.on("rendered", (function(e) { t.onRendered && t.onRendered(e) })), o.on("tileClicked", (function(e) { t.onClick && t.onClick(e) })), this.report = o
                                            } catch (s) {}
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(a, t) { return e.apply(this, arguments) }
                        }()
                    }]), e
                }()),
                Y = t(19),
                X = t.n(Y),
                $ = t(17),
                ee = t.n($),
                ae = t(2),
                te = t.n(ae),
                ne = t(32),
                ce = t.n(ne),
                re = function(e) {
                    var a = e.banner,
                        t = e.onPopupDismiss,
                        n = e.children;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: ce.a.popup }, o.a.createElement("h3", { className: ce.a.banner, style: { backgroundImage: 'url("'.concat(u, '360-bg.png")') } }, a), o.a.createElement("div", { className: "".concat(ce.a.dismiss, " ").concat(ce.a.button), onClick: t }, o.a.createElement("img", { src: "".concat(u, "close-icon.png"), alt: "" })), n), o.a.createElement("div", { className: ce.a.cover }))
                },
                oe = function(e) {
                    var a = e.banner,
                        t = e.onPopupDismiss,
                        n = e.children;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: ce.a.popup1 }, o.a.createElement("h3", { className: ce.a.banner, style: { backgroundImage: 'url("'.concat(u, 'CTscan-bg.png")') } }, a), o.a.createElement("div", { className: "".concat(ce.a.dismiss, " ").concat(ce.a.button), onClick: t }, o.a.createElement("img", { src: "".concat(u, "close-icon.png"), alt: "" })), n), o.a.createElement("div", { className: ce.a.cover1 }))
                },
                ie = t(66);
            ! function(e) { e[e.With = 0] = "With", e[e.Without = 1] = "Without", e[e.Introducing = 2] = "Introducing", e[e.HowWorks = 3] = "HowWorks", e[e.Architecture = 4] = "Architecture" }(J || (J = {})),
            function(e) { e[e.None = 0] = "None", e[e.dynamicsSource = 1] = "dynamicsSource" }(Z || (Z = {}));
            var le = function() {
                    var e = Object(r.useRef)(null),
                        a = window.runConfig,
                        t = (a.fc_reportId, a.fc_overview, a.fc_alert, a.fc_production, a.fc_oee, a.fc_downtime, a.fc_energyMaintenance, a.Dynamic365VideoLink),
                        c = Object(r.useState)(!1),
                        i = Object(m.a)(c, 2),
                        l = (i[0], i[1], Object(r.useState)(!1)),
                        s = Object(m.a)(l, 2),
                        d = s[0],
                        p = s[1],
                        h = Object(r.useState)(!1),
                        g = Object(m.a)(h, 2),
                        f = (g[0], g[1], "3d216dcb-c96a-41b3-a2f0-1650968eabed"),
                        b = "716c6e75-b31a-4662-9d11-3eac968fd0cf",
                        _ = "398ec9bb-3820-4fd8-a7bb-ba258b22ed2a",
                        E = window.runConfig,
                        v = (E.mach_reportId, E.mach_vibrations, E.mach_movements, E.mach_temperature, E.mach_anomolyReportID, E.mach_anomolyReportSection, E.mach_htapReportID),
                        y = E.mach_withoutHtapReportSection,
                        w = E.mach_withHtapReportSection,
                        N = E.mach_ctScanReportId,
                        S = Object(r.useState)(!1),
                        O = Object(m.a)(S, 2),
                        C = (O[0], O[1], Object(r.useState)(!1)),
                        M = Object(m.a)(C, 2),
                        I = (M[0], M[1], Object(r.useState)(!1)),
                        x = Object(m.a)(I, 2),
                        P = (x[0], x[1], Object(r.useState)(!1)),
                        A = Object(m.a)(P, 2),
                        R = (A[0], A[1], Object(r.useState)(!1)),
                        D = Object(m.a)(R, 2),
                        T = D[0],
                        B = D[1],
                        V = Object(r.useState)(!1),
                        W = Object(m.a)(V, 2),
                        q = (W[0], W[1]),
                        z = Object(r.useState)(!1),
                        G = Object(m.a)(z, 2),
                        U = G[0],
                        Q = G[1],
                        Y = Object(r.useState)(!1),
                        $ = Object(m.a)(Y, 2),
                        ae = $[0],
                        ne = $[1],
                        ce = Object(r.useState)(!1),
                        le = Object(m.a)(ce, 2),
                        se = le[0],
                        me = le[1],
                        de = Object(r.useState)(!1),
                        pe = Object(m.a)(de, 2),
                        ue = (pe[0], pe[1], Object(r.useState)(!0)),
                        he = Object(m.a)(ue, 2),
                        ge = (he[0], he[1], Object(r.useState)(.02)),
                        fe = Object(m.a)(ge, 2),
                        be = (fe[0], fe[1], Object(r.useState)(J.Without)),
                        _e = Object(m.a)(be, 2),
                        Ee = _e[0],
                        ve = _e[1],
                        ye = v,
                        we = N,
                        Ne = y,
                        Se = w,
                        Oe = K,
                        Ce = Object(r.useState)(!1),
                        Me = Object(m.a)(Ce, 2),
                        je = (Me[0], Me[1]),
                        Ie = Object(r.useState)(Z.None),
                        ke = Object(m.a)(Ie, 2),
                        xe = ke[0];
                    ke[1], Object(r.useEffect)((function() { je(!1), e.current && (e.current.currentTime = 0) }), [xe]);
                    var Pe = Object(r.useState)("Honolulu_Video.mp4"),
                        Ae = Object(m.a)(Pe, 2),
                        Re = Ae[0],
                        De = Ae[1];
                    return Object(r.useEffect)((function() { if (!d) { p(!0); try { Oe.load(b, { type: F.Dashboard, elementId: b, height: 401, width: 440, pageName: "" }), Oe.load(_, { type: F.Dashboard, elementId: _, height: 401, width: 440, pageName: "" }), Oe.load(f, { type: F.Dashboard, elementId: f, height: 248, width: 438, pageName: "" }), Oe.load(ye, { type: F.Report, elementId: ye, height: 700, width: 1764, pageName: Ne, onRendered: function() { B(!0) } }), Oe.load(we, { type: F.Report, elementId: we, height: 340, width: 900, pageName: we, onRendered: function() { q(!0) } }) } catch (e) { p(!1) } } }), [d, Oe]), "Honolulu_Video.mp4" !== Re && De("Honolulu_Video.mp4"), Object(r.useEffect)((function() { T && (Ee === J.With && Oe.switchPage(ye, Se), Ee === J.Without && Oe.switchPage(ye, Ne)) }), [Ee, T]), Object(r.useEffect)((function() { var e = setInterval((function() { Oe.refresh(b), Oe.refresh(_), Oe.refresh(f) }), 15e3); return function() { return clearInterval(e) } })), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container" }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement(j, { type: n.Patient }), o.a.createElement(H, { type: n.Patient }), o.a.createElement("div", { className: "".concat(k.a.style10a) }, o.a.createElement("div", { onClick: function() { return me(!0) } }, o.a.createElement("img", { src: "".concat(u, "Arrow-10a.png"), alt: "" }))), o.a.createElement("div", { className: "".concat(k.a.style10b) }, o.a.createElement("a", { href: "https://patientportaldemo.powerappsportals.com/", target: "_blank" }, o.a.createElement("img", { src: "".concat(u, "Arrow-10b.png"), alt: "" }))), o.a.createElement("div", { className: "".concat(k.a.style10c) }, o.a.createElement("a", { href: "https://healthcareapp.crm.dynamics.com/main.aspx?appid=c9cdb0c3-9f17-eb11-a813-000d3a569164&forceUCI=1&pagetype=entityrecord&etn=contact&id=585da963-4be6-ea11-a817-000d3a1bb8ef", target: "_blank" }, o.a.createElement("img", { src: "".concat(u, "Arrow-10c.png"), alt: "" }))), o.a.createElement("div", { className: "factory-page" }, o.a.createElement("div", { className: ee.a.showPopupOn2, onClick: function() { return Q(!0) } }), o.a.createElement("a", { href: "#covid-search", className: ee.a.showPopupOn3 }), o.a.createElement("a", { href: "https://healthcareapp.crm.dynamics.com/main.aspx?appid=c9cdb0c3-9f17-eb11-a813-000d3a569164&forceUCI=1&pagetype=entityrecord&etn=contact&id=585da963-4be6-ea11-a817-000d3a1bb8ef", target: "_blank", className: ee.a.patientOverviewLink }), o.a.createElement("a", { href: "#hololens-healthcare", className: ee.a.hospitalOverviewLink23 }, o.a.createElement("img", { src: "".concat(u, "Arrow-17.png"), alt: "" })), o.a.createElement("div", { className: ee.a.showPopupOn, onClick: function() { return ne(!0) } }), o.a.createElement("img", { className: "background", src: "".concat(u, "patient2.jpg"), alt: "" }), o.a.createElement("div", { id: b, className: X.a.spo23 + " report  show", style: { width: "438px", height: "248px" } }), o.a.createElement("div", { id: _, className: X.a.heartrate2 + " report  show", style: { width: "438px", height: "125px" } }), o.a.createElement("div", { id: f, className: X.a.systolic2 + " report  show", style: { width: "438px", height: "248px" } })))), o.a.createElement("div", { className: "".concat(te.a.hide, " ").concat(U && te.a.show) }, o.a.createElement(re, { banner: "Lab 360\xba View", onPopupDismiss: function() { ve(J.Without), Q(!1) } }, o.a.createElement("div", { className: te.a.buttons }, o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(Ee === J.Without && te.a.selected), onClick: function() { return ve(J.Without) } }, "Without Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(Ee === J.Introducing && te.a.selected), onClick: function() { return ve(J.Introducing) } }, "Introducing Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(Ee === J.With && te.a.selected), onClick: function() { return ve(J.With) } }, "With Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(Ee === J.HowWorks && te.a.selected), onClick: function() { return ve(J.HowWorks) } }, "How Azure Synapse Link works"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(Ee === J.Architecture && te.a.selected), onClick: function() { return ve(J.Architecture) } }, "Architecture")), o.a.createElement("div", { className: "".concat(te.a.popupContentContainer, " ").concat(te.a.stretch) }, o.a.createElement("div", { id: ye, className: "".concat(Ee !== J.With && Ee !== J.Without && te.a.offLoad, " ").concat(te.a.popupContent) }), Ee === J.Architecture && o.a.createElement("img", { src: "".concat(u, "htap-architecture.jpg"), className: "".concat(te.a.popupContent), alt: "Architecture system diagram" }), Ee === J.Introducing && o.a.createElement("img", { id: "introducingGif", src: "".concat(u, "synapse-link.gif") + "?a=" + Math.random(), className: "".concat(te.a.popupContent) }), Ee === J.HowWorks && o.a.createElement("video", { src: u + "How-Synapse-Link-Works.mp4", autoPlay: !0, preload: "auto", controls: !0, playsInline: !0, controlsList: "nodownload", className: "".concat(te.a.popupContent, " ") })))), o.a.createElement("div", { className: "".concat(te.a.hide, " ").concat(ae && te.a.show) }, o.a.createElement(oe, { banner: "CT Scan", onPopupDismiss: function() { ve(J.Without), ne(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer, " ").concat(te.a.stretch) }, o.a.createElement("div", { id: we, className: "".concat(Ee !== J.With && Ee !== J.Without && te.a.offLoad1, " ").concat(te.a.popupContent1) })))), o.a.createElement("div", { className: "".concat(te.a.hide, " ").concat(se && te.a.show) }, o.a.createElement(re, { banner: "Dynamics 365", onPopupDismiss: function() { De("asdasdas"), me(!1) } }, o.a.createElement("div", { className: X.a.videoContainer1 }, "Honolulu_Video.mp4" == Re && o.a.createElement("div", { style: { position: "relative", width: "100%", height: "100%" } }, o.a.createElement(ie.a, { src: [{ src: t, type: "application/vnd.ms-sstr+xml" }] }))))))
                },
                se = t(23),
                me = t.n(se),
                de = t(102),
                pe = t.n(de),
                ue = t(214);
            var he, ge = function(e) { return o.a.createElement("div", { className: pe.a.position }, o.a.createElement("div", { className: pe.a.mute, onClick: function() { e.onMuteChange(!e.mute) } }, e.mute ? o.a.createElement("img", { src: "".concat(u, "mute-icon.png"), alt: "" }) : o.a.createElement("img", { src: "".concat(u, "sound-icon.png"), alt: "" })), o.a.createElement(ue.a, { min: 0, max: 100, step: 5, defaultValue: 20, showValue: !1, value: 100 * e.volume, onChange: function(a) { e.onVolumeChange(a / 100) }, styles: { activeSection: { backgroundColor: "grey !important" } } })) };
            ! function(e) { e[e.Map = 0] = "Map", e[e.Heatmap = 1] = "Heatmap", e[e.Camera = 2] = "Camera" }(he || (he = {}));
            var fe = function(e) {
                var a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    n = t[0],
                    c = t[1],
                    i = Object(r.useState)(he.Map),
                    l = Object(m.a)(i, 2),
                    s = l[0],
                    d = l[1],
                    p = Object(r.useState)(!0),
                    h = Object(m.a)(p, 2),
                    g = h[0],
                    f = h[1],
                    b = Object(r.useState)(.05),
                    _ = Object(m.a)(b, 2),
                    E = _[0],
                    v = _[1],
                    y = Object(r.useRef)(null),
                    w = Object(r.useRef)(null),
                    N = Object(r.useRef)(null),
                    S = u + "factory_safety_video.mp4",
                    O = u + "heatmap.mp4",
                    C = u + "audio_hospital.mp3",
                    M = Object(r.useState)(!1),
                    j = Object(m.a)(M, 2),
                    I = j[0],
                    k = j[1],
                    x = Object(r.useState)(!1),
                    P = Object(m.a)(x, 2),
                    A = P[0],
                    R = P[1],
                    D = function() { w && w.current && (w.current.volume = E), N && N.current && (N.current.volume = E) };
                return Object(r.useEffect)(D, [E]), o.a.createElement(re, { banner: "Hospital", onPopupDismiss: e.onPopupDismiss }, o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: me.a.buttons }, o.a.createElement("div", { className: "".concat(me.a.button, " ").concat(s === he.Map && me.a.selected), onClick: function() { return d(he.Map) } }, "Heatmap")), s === he.Map && o.a.createElement("div", { className: me.a.content }, o.a.createElement("div", { className: me.a.mapContainer }, o.a.createElement("div", { onClick: function() { k(!0), console.log(I) }, className: me.a.alertMachine }, o.a.createElement("img", { className: me.a.factoryAnimation, src: "".concat(u, "Error-icon.png"), alt: "" })), o.a.createElement("div", { onClick: function() { R(!0), console.log(I) }, className: me.a.alertMachine144 }, o.a.createElement("img", { className: me.a.factoryAnimation, src: "".concat(u, "Error-icon.png"), alt: "" })), o.a.createElement("img", { className: me.a.animation, src: "".concat(u, "Health_Care_Heatmap-v4.gif"), onClick: function() { g || c(!n) } })), o.a.createElement("div", { className: me.a.volumeController }, o.a.createElement(ge, { onMuteChange: function(e) { f(e) }, onVolumeChange: function(e) { v(e) }, mute: g, volume: E })), !g && o.a.createElement("div", null, o.a.createElement("audio", { ref: w, autoPlay: !0, loop: !0, preload: "auto", onLoadStart: D, src: C }))), s === he.Heatmap && o.a.createElement("div", { className: me.a.content }, o.a.createElement("video", { src: O, preload: "auto", playsInline: !0, loop: !0, autoPlay: !0, muted: !0, controlsList: "nodownload", className: me.a.animation })), s === he.Camera && o.a.createElement("div", { className: me.a.content }, o.a.createElement("video", { ref: y, src: S, controls: !0, preload: "auto", playsInline: !0, controlsList: "nodownload", onLoadStart: function() { y && y.current && (y.current.volume = .05) }, className: me.a.animation })), I && o.a.createElement(re, { banner: "Predictive Maintenance", onPopupDismiss: function() { k(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer) }, o.a.createElement("img", { src: "".concat(u, "Predictive Maintenance-popup.png"), alt: "Predictive maintenance", className: "".concat(te.a.popupContent2) }))), A && o.a.createElement(re, { banner: "Lobby Scene", onPopupDismiss: function() { R(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer), style: { width: "100%" } }, o.a.createElement("div", { style: { background: "red", width: "100%" } }, o.a.createElement(ie.a, { skin: "amp-flush", src: [{ src: "https://mediasvcprodhealthcare-usw22.streaming.media.azure.net/86d7500c-5445-438f-8b31-fc24d9ce2dea/aiscene.ism/manifest", type: "application/vnd.ms-sstr+xml" }] }))))))
            };
            var be = function() {
                    var e = window.runConfig,
                        a = e.fc_reportId,
                        t = (e.fc_overview, e.fc_alert, e.fc_production),
                        c = e.fc_oee,
                        i = e.fc_downtime,
                        l = e.fc_energyMaintenance,
                        s = Object(r.useState)(!1),
                        d = Object(m.a)(s, 2),
                        p = d[0],
                        h = d[1],
                        g = Object(r.useState)(!1),
                        f = Object(m.a)(g, 2),
                        b = f[0],
                        _ = f[1],
                        E = Object(r.useState)(!1),
                        v = Object(m.a)(E, 2),
                        y = v[0],
                        w = (v[1], Object(r.useState)(!1)),
                        N = Object(m.a)(w, 2),
                        S = N[0],
                        O = N[1],
                        C = Object(r.useState)(!1),
                        M = Object(m.a)(C, 2),
                        I = M[0],
                        k = M[1],
                        x = a,
                        P = t,
                        A = c,
                        R = i,
                        D = l,
                        T = K;
                    return Object(r.useEffect)((function() { if (!b) { _(!0); try { T.load(x, { type: F.Report, elementId: P, height: 248, width: 438, pageName: P }), T.load(x, { type: F.Report, elementId: A, height: 401, width: 435, pageName: A }), T.load(x, { type: F.Report, elementId: D, height: 248, width: 438, pageName: D }), T.load(x, { type: F.Report, elementId: R, height: 248, width: 438, pageName: R }) } catch (e) { _(!1) } } }), [b, T]), Object(r.useEffect)((function() { var e = setInterval((function() { T.refresh(P), T.refresh(A), T.refresh(D), T.refresh(R) }), 15e3); return function() { return clearInterval(e) } })), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container" }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement(j, { type: n.Factory }), o.a.createElement(H, { type: n.Factory }), o.a.createElement("div", { className: "factory-page" }, o.a.createElement("a", { href: "#/single-patient", className: X.a.alertMachine }, o.a.createElement("img", { src: "".concat(u, "Arrow-9.png"), alt: "" })), o.a.createElement("div", { className: "".concat(X.a.alertMachine1), onClick: function() { return O(!0) } }, o.a.createElement("a", null, o.a.createElement("img", { src: "".concat(u, "Error-icon.png"), alt: "" }))), o.a.createElement("div", { className: "".concat(X.a.alertMachine14), onClick: function() { return k(!0) } }, o.a.createElement("a", null, o.a.createElement("img", { src: "".concat(u, "Error-icon.png"), alt: "" }))), o.a.createElement("div", { className: X.a.showMap, onClick: function() { return h(!0) } }, o.a.createElement("img", { src: "".concat(u, "full-screen-icon.png"), alt: "" })), o.a.createElement("div", { className: X.a.switchBlock }), o.a.createElement("img", { className: "background", src: "".concat(u, "Factory.jpg"), alt: "" }), y && o.a.createElement("img", { className: X.a.factoryAnimation, src: "".concat(u, "factory_alerts_small.gif"), alt: "" }), !y && o.a.createElement("div", { className: X.a.videoContainer }, o.a.createElement("img", { className: X.a.video, src: "".concat(u, "Health_Care_Heatmap-v4.gif"), alt: "" })), o.a.createElement("div", { id: P, className: X.a.production + " report  show", style: { width: "438px", height: "248px" } }), o.a.createElement("div", { id: A, className: X.a.oee + " report  show", style: { width: "435px", height: "401px" } }), o.a.createElement("div", { id: D, className: X.a.energyMaintenance + " report  show", style: { width: "438px", height: "248px" } }), o.a.createElement("div", { id: R, className: X.a.downtime + " report  show", style: { width: "438px", height: "248px" } })))), p && o.a.createElement(fe, { onPopupDismiss: function() { h(!1) } }), S && o.a.createElement(re, { banner: "Predictive Maintenance", onPopupDismiss: function() { O(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer) }, o.a.createElement("img", { src: "".concat(u, "Predictive Maintenance-popup.png"), alt: "Predictive maintenance", className: "".concat(te.a.popupContent2) }))), I && o.a.createElement(re, { banner: "Lobby Scene", onPopupDismiss: function() { k(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer), style: { width: "100%" } }, o.a.createElement("div", { style: { background: "red", width: "100%" } }, o.a.createElement(ie.a, { skin: "amp-flush", src: [{ src: "https://mediasvcprodhealthcare-usw22.streaming.media.azure.net/86d7500c-5445-438f-8b31-fc24d9ce2dea/aiscene.ism/manifest", type: "application/vnd.ms-sstr+xml" }] })))))
                },
                _e = t(119),
                Ee = t.n(_e),
                ve = t(10),
                ye = t.n(ve);
            var we = function() {
                    var e = window.runConfig.finance_ID,
                        a = Object(r.useState)(!1),
                        t = Object(m.a)(a, 2),
                        c = t[0],
                        i = t[1],
                        l = e;
                    return Object(r.useEffect)((function() { if (!c) { i(!0); try { K.load(l, { type: F.Dashboard, elementId: l, height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, K]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Finance }), o.a.createElement(H, { type: n.Finance }), o.a.createElement("a", { href: "#/global-bing", className: ye.a.arrowTopMiddle }, o.a.createElement("div", null, o.a.createElement("img", { src: "".concat(u, "Arrow-5.png"), alt: "Link to Hospital Network" }))), o.a.createElement("div", { id: l, className: Ee.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
                },
                Ne = t(62),
                Se = t.n(Ne),
                Oe = t(213);
            var Ce, Me = function() {
                    var e = Object(r.useState)("spencer@contosohealthcare.com"),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        n = a[1],
                        c = Object(r.useState)(""),
                        i = Object(m.a)(c, 2),
                        l = (i[0], i[1], Object(r.useState)("2KxecdwLR345RwTxEWAO3CASw")),
                        s = Object(m.a)(l, 2),
                        d = s[0],
                        p = s[1],
                        u = Object(r.useState)(!1),
                        g = Object(m.a)(u, 2),
                        f = g[0],
                        b = g[1],
                        _ = Object(r.useState)(),
                        E = Object(m.a)(_, 2),
                        y = E[0],
                        w = E[1],
                        N = Object(h.d)();
                    Object(r.useEffect)((function() { y || w(K) }), [f]), Object(r.useEffect)((function() {!f && y && (y.hydrate(), b(!0)) }), [f]);
                    var S = { fieldGroup: { height: "50px", ":placeholder": { fontSize: "20px" } }, root: { marginTop: "20px" }, field: { fontSize: "20px", lineHeight: "50px", ":placeholder": { fontSize: "20px" } } };
                    return o.a.createElement("div", { className: "".concat(Se.a.loginBackground, " page-container") }, o.a.createElement(L, null), o.a.createElement("div", { className: Se.a.dialogue }, o.a.createElement(Oe.a, { className: Se.a.input, placeholder: "Username", type: "username", styles: S, onChange: function(e, a) { n(a || "") }, value: t }), o.a.createElement(Oe.a, { className: Se.a.input, type: "password", placeholder: "Password", styles: S, onChange: function(e, a) { p(a || "") }, value: d }), o.a.createElement("div", { className: "".concat(Se.a.button, " ").concat(Se.a.login), onClick: function() { t.toLowerCase() === "spencer@contosohealthcare.com".toLowerCase() && "2KxecdwLR345RwTxEWAO3CASw" === d && N(v()) } }, "LOG IN")))
                },
                je = t(80),
                Ie = t.n(je);
            ! function(e) { e[e.None = 0] = "None", e[e.HololensVideo = 1] = "HololensVideo", e[e.MiamiVideo = 2] = "MiamiVideo", e[e.IntroVideo = 3] = "IntroVideo", e[e.RioDeJaneiro = 4] = "RioDeJaneiro", e[e.IaasVideo = 5] = "IaasVideo", e[e.PostgreSQL = 6] = "PostgreSQL", e[e.HololensHospitalVideo = 7] = "HololensHospitalVideo", e[e.HonoluluVideo = 8] = "HonoluluVideo" }(Ce || (Ce = {}));
            var ke, xe = function(e) {
                var a = Object(r.useRef)(null),
                    t = "MICROSOFT_HEALTH_CARE_DEMO_V3.mp4",
                    n = "Lift and Shift Assesment and Migration_V.1.mp4",
                    c = Object(r.useState)(!1),
                    i = Object(m.a)(c, 2),
                    l = i[0],
                    s = i[1],
                    d = Object(r.useState)("Intro_product.mp4"),
                    p = Object(m.a)(d, 2),
                    h = p[0],
                    g = p[1],
                    f = Object(r.useState)(Ce.None),
                    b = Object(m.a)(f, 2),
                    _ = b[0],
                    E = b[1];
                switch (Object(r.useEffect)((function() { s(!1), a.current && (a.current.currentTime = 0) }), [_]), e.video) {
                    case Ce.HololensVideo:
                        h !== t && g(t);
                        break;
                    case Ce.HonoluluVideo:
                        "Honolulu_Video.mp4" !== h && g("Honolulu_Video.mp4");
                        break;
                    case Ce.MiamiVideo:
                        "Intro_product.mp4" !== h && g("Intro_product.mp4");
                        break;
                    case Ce.RioDeJaneiro:
                        "COVID Video 2.mp4" !== h && g("COVID Video 2.mp4");
                        break;
                    case Ce.HololensHospitalVideo:
                        h !== t && g(t);
                        break;
                    case Ce.IaasVideo:
                        h !== n && g(n);
                        break;
                    case Ce.PostgreSQL:
                        "PostgreSQLScaling.mp4" !== h && g("PostgreSQLScaling.mp4")
                }
                return _ !== e.video && E(e.video), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), "Honolulu_Video.mp4" !== h && o.a.createElement("a", { href: "#global-bing1", className: ee.a.hospitalOverviewLink4 }, o.a.createElement("img", { src: "".concat(u, "Arrow-18.png"), alt: "" })), o.a.createElement("div", { className: Ie.a.videoContainer }, h !== t && "Honolulu_Video.mp4" !== h && o.a.createElement("video", { ref: a, playsInline: !0, controls: !0, onPlay: function() { l || (a.current && (a.current.currentTime = 0), s(!0)) }, src: u + h, controlsList: "nodownload", onLoadStart: function() { a && a.current && (a.current.volume = .05) }, className: Ie.a.video }, o.a.createElement("source", { src: u + h })), h === t && o.a.createElement("iframe", { src: "/vid.html", className: Ie.a.video }), "Honolulu_Video.mp4" === h && o.a.createElement("iframe", { src: "/vid-honolulu.html", className: Ie.a.video })))
            };
            ! function(e) { e.Report = "report", e.Dashboard = "dashboard", e.Tile = "tile" }(ke || (ke = {}));
            var Pe, Ae = window.runConfig.apiUrl2,
                Re = new(function() {
                    function e() { Object(z.a)(this, e), this.accessToken = "", this.embedToken = "", this.powerBiService = void 0, this.report = void 0, this.apiUrl = Ae, this.instance = void 0, this.powerBiService = new U.service.Service(U.factories.hpmFactory, U.factories.wpmpFactory, U.factories.routerFactory), this.instance = this }
                    return Object(G.a)(e, [{ key: "hydrate", value: function() { this.powerBiService.preload({}) } }, {
                        key: "switchMode",
                        value: function(e, a) {
                            var t = document.getElementById(e);
                            t && this.powerBiService.get(t).switchMode(a ? "edit" : "view")
                        }
                    }, { key: "switchPage", value: function(e, a) { var t = document.getElementById(e); if (t) try { this.powerBiService.get(t).page(a).setActive() } catch (n) {} } }, {
                        key: "setFilter",
                        value: function(e, a) {
                            var t = document.getElementById(e);
                            if (t) {
                                var n = this.powerBiService.get(t);
                                n.removeFilters();
                                var c = { filterType: U.models.FilterType.Basic, target: { table: a.table, column: a.column }, operator: "In", values: [a.value], $schema: "http://powerbi.com/product/schema#basic" };
                                n.setFilters([c])
                            }
                        }
                    }, {
                        key: "reload",
                        value: function(e) {
                            var a = document.getElementById(e);
                            a && this.powerBiService.get(a).reload()
                        }
                    }, { key: "refresh", value: function(e) { var a = document.getElementById(e); if (a) { var t = this.powerBiService.get(a); try { t.refresh() } catch (n) {} } } }, {
                        key: "loadToken",
                        value: function() {
                            var e = Object(q.a)(W.a.mark((function e(a, t) {
                                var n, c, r;
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (n = t.editMode ? "editMode=true" : "") && t.filter && (n += (n ? "&" : "") + t.filter), n = n ? "?" + n : "", e.next = 5, fetch("".concat(this.apiUrl, "/api/token/embed/").concat(t.type, "/").concat(a).concat(n), { headers: { responseType: "text", "Access-Control-Allow-Origin": "*" } });
                                        case 5:
                                            return c = e.sent, e.next = 8, c.text();
                                        case 8:
                                            return r = e.sent, e.abrupt("return", r);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(a, t) { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "load",
                        value: function() {
                            var e = Object(q.a)(W.a.mark((function e(a, t) {
                                var n, c, r, o, i, l = this;
                                return W.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.loadToken(a, t);
                                        case 2:
                                            n = e.sent, c = { type: t.type, accessToken: n, tokenType: U.models.TokenType.Embed, id: a, dashboardId: t.type === ke.Dashboard ? a : "", embedUrl: t.type === ke.Report ? "https://app.powerbi.com/reportEmbed" : t.type === ke.Dashboard ? "https://app.powerbi.com/dashboardEmbed" : "https://app.powerbi.com/embed", permissions: t.editMode ? U.models.Permissions.Create : U.models.Permissions.Read, viewMode: t.editMode ? U.models.ViewMode.Edit : U.models.ViewMode.View, pageView: "fitToWidth" }, t.type === ke.Report && (c.settings = { filterPaneEnabled: !1, navContentPaneEnabled: !1, background: U.models.BackgroundType.Transparent }), t.pageName && (c.pageName = t.pageName), t.height && (c.height = t.height), t.width && (c.width = t.width), r = this.powerBiService;
                                            try {
                                                o = r.embed(document.getElementById(t.elementId), c), i = function() {
                                                    var e = Object(q.a)(W.a.mark((function e(a, t) {
                                                        var n;
                                                        return W.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, l.loadToken(a, t);
                                                                case 2:
                                                                    n = e.sent, o.setAccessToken(n);
                                                                case 4:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(a, t) { return e.apply(this, arguments) }
                                                }(), o.on("error", function() {
                                                    var e = Object(q.a)(W.a.mark((function e(n) {
                                                        return W.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if ("TokenExpired" !== n.detail.message) { e.next = 3; break }
                                                                    return e.next = 3, i(a, t);
                                                                case 3:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(a) { return e.apply(this, arguments) }
                                                }()), o.on("rendered", (function(e) { t.onRendered && t.onRendered(e) })), o.on("tileClicked", (function(e) { t.onClick && t.onClick(e) })), this.report = o
                                            } catch (s) {}
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(a, t) { return e.apply(this, arguments) }
                        }()
                    }]), e
                }()),
                De = t(81),
                He = t.n(De);
            ! function(e) { e.asset = "Asset", e.alerts = "Alerts", e.temperature = "Temperature (\xb0F)", e.liveFeed = "Live Feed", e.overview = "Overview", e.jobAxesMovement = "Job Axes Movement", e.machineVibration = "Machine Vibration", e.maintenanceScheduling = "Maintenance Scheduling" }(Pe || (Pe = {}));
            var Le, Te = function(e) {
                var a = e.title,
                    t = e.children;
                return o.a.createElement("div", { className: He.a.card }, o.a.createElement("div", { className: He.a.cardTitleContainer }, o.a.createElement("img", { className: He.a.cardTitleBackground, src: "".concat(u, "factory_card_title_texture.png"), alt: "" }), o.a.createElement("div", { className: He.a.text }, o.a.createElement("h2", null, a))), t)
            };
            ! function(e) { e[e.With = 0] = "With", e[e.Without = 1] = "Without", e[e.Introducing = 2] = "Introducing", e[e.HowWorks = 3] = "HowWorks", e[e.Architecture = 4] = "Architecture" }(Le || (Le = {}));
            var Fe, Be = function() {
                    var e = window.runConfig,
                        a = e.mach_reportId,
                        t = e.mach_vibrations,
                        c = e.mach_movements,
                        i = e.mach_temperature,
                        l = e.mach_anomolyReportID,
                        s = e.mach_anomolyReportSection,
                        d = e.mach_htapReportID,
                        p = e.mach_withoutHtapReportSection,
                        h = e.mach_withHtapReportSection,
                        g = Object(r.useState)(!1),
                        f = Object(m.a)(g, 2),
                        b = f[0],
                        _ = f[1],
                        E = Object(r.useState)(!1),
                        v = Object(m.a)(E, 2),
                        y = v[0],
                        w = v[1],
                        N = Object(r.useState)(!1),
                        S = Object(m.a)(N, 2),
                        O = S[0],
                        C = S[1],
                        M = Object(r.useState)(!1),
                        I = Object(m.a)(M, 2),
                        k = I[0],
                        x = I[1],
                        P = Object(r.useState)(!1),
                        A = Object(m.a)(P, 2),
                        R = A[0],
                        D = A[1],
                        T = Object(r.useState)(!1),
                        F = Object(m.a)(T, 2),
                        B = F[0],
                        V = F[1],
                        W = Object(r.useState)(!1),
                        q = Object(m.a)(W, 2),
                        z = q[0],
                        G = q[1],
                        U = Object(r.useState)(!1),
                        J = Object(m.a)(U, 2),
                        Z = J[0],
                        Q = J[1],
                        K = Object(r.useState)(!0),
                        Y = Object(m.a)(K, 2),
                        X = Y[0],
                        $ = Y[1],
                        ee = Object(r.useState)(.02),
                        ae = Object(m.a)(ee, 2),
                        ne = ae[0],
                        ce = ae[1],
                        oe = Object(r.useState)(Le.Without),
                        ie = Object(m.a)(oe, 2),
                        le = ie[0],
                        se = ie[1],
                        me = Object(r.useRef)(null),
                        de = Object(r.useRef)(null),
                        pe = a,
                        ue = t,
                        he = c,
                        fe = i,
                        be = l,
                        _e = s,
                        Ee = d,
                        ve = p,
                        ye = h,
                        we = Re;
                    Object(r.useEffect)((function() { if (!b) { _(!0); try { we.load(pe, { type: ke.Report, elementId: ue, height: 10.1875, width: 27.3125, pageName: ue }), we.load(pe, { type: ke.Report, elementId: he, height: 15.5, width: 27.3125, pageName: he }), we.load(pe, { type: ke.Report, elementId: fe, height: 10.1875, width: 27.3125, pageName: fe }), we.load(be, { type: ke.Report, elementId: _e, height: 750, width: 1630, pageName: _e }), we.load(Ee, { type: ke.Report, elementId: Ee, height: 700, width: 1764, pageName: ve, onRendered: function() { V(!0) } }) } catch (e) { _(!1) } } }), [b, we]), Object(r.useEffect)((function() { var e = setInterval((function() { try { we.refresh(fe), we.refresh(ue), we.refresh(he) } catch (e) {} }), 15e3); return function() { return clearInterval(e) } })), Object(r.useEffect)((function() { me.current.muted = X }), [X]), Object(r.useEffect)((function() { B && (le === Le.With && we.switchPage(Ee, ye), le === Le.Without && we.switchPage(Ee, ve)) }), [le, B]);
                    var Ne = function() { me.current.volume = ne };
                    return Object(r.useEffect)(Ne, [ne]), o.a.createElement("div", { className: "".concat(te.a.machine, " page-container"), style: { backgroundImage: 'url("'.concat(u, 'patient.png")') } }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Machine }), o.a.createElement(H, { type: n.Machine }), o.a.createElement("div", { id: "scalable-wrapper", className: te.a.machinePageContainer }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement("div", { className: te.a.grid }, o.a.createElement("div", { className: "".concat(te.a.titleArea, " ") }, o.a.createElement("h1", { className: te.a.pageTitle }, "Equipment View"), o.a.createElement("h4", { className: te.a.subPageTitle }, "Global / Miami / Machine 12", " ")), o.a.createElement("div", { className: te.a.assetArea }, o.a.createElement(Te, { title: Pe.asset }, o.a.createElement("a", { href: "#/hospital-operations" }, " ", o.a.createElement("img", { className: te.a.NavigationButton, src: "".concat(u, "icon_arrow.png"), alt: "navigation button" })), o.a.createElement("div", { className: te.a.cardInnerContainer }, o.a.createElement("img", { className: te.a.machineImageDevice, src: "".concat(u, "machine_image_device.png"), alt: "machine type", onClick: function() { return C(!0) } }), o.a.createElement("div", { className: te.a.assetButtonContainer }, o.a.createElement("div", { className: te.a.assetButtonItem }, o.a.createElement("img", { src: "".concat(u, "machine_button_start.png"), alt: "background" }), o.a.createElement("p", null, "Remote Start")), o.a.createElement("div", { className: te.a.assetButtonItem }, o.a.createElement("img", { src: "".concat(u, "machine_button_stop.png"), alt: "background" }), o.a.createElement("p", null, "Remote Stop")), o.a.createElement("div", { className: te.a.assetButtonItem }, o.a.createElement("img", { src: "".concat(u, "machine_button_reset.png"), alt: "background" }), o.a.createElement("p", null, "Fault Reset")), o.a.createElement("div", { className: te.a.assetButtonItem }, o.a.createElement("img", { src: "".concat(u, "machine_button_camera.png"), alt: "background" }), o.a.createElement("p", null, "Camera")))))), o.a.createElement("div", { className: te.a.innerGridAlertsAreaTemperatureArea }, o.a.createElement(Te, { title: Pe.alerts }, o.a.createElement("div", { className: te.a.cardInnerContainer }, o.a.createElement("div", { className: te.a.cardInnerItem, onClick: function() { return D(!0) } }, "Product Defect Rate Spike", o.a.createElement("img", { src: "".concat(u, "alert-red.jpg"), alt: "red alert icon" })), o.a.createElement("div", { className: te.a.cardInnerItem, onClick: function() { return x(!0) } }, "PPE Compliance Alert", o.a.createElement("img", { src: "".concat(u, "alert-red.jpg"), alt: "red alert icon" })), o.a.createElement("div", { className: te.a.cardInnerItem, onClick: function() { return G(!0) } }, "Production Quality Degradation", o.a.createElement("img", { src: "".concat(u, "alert-red.jpg"), alt: "red alert" })), o.a.createElement("div", { className: te.a.cardInnerItem, onClick: function() { return w(!0) } }, "Occupational Safety Hazard", o.a.createElement("img", { src: "".concat(u, "alert-amber.jpg"), alt: "amber alert icon" })))), o.a.createElement(Te, { title: Pe.temperature }, o.a.createElement("div", { id: fe, className: te.a.cardInnerContainer + " report show", style: { width: "27.3125rem", height: "10.1875rem", right: "0rem" } }))), o.a.createElement("div", { className: te.a.liveFeedArea }, o.a.createElement(Te, { title: Pe.liveFeed }, o.a.createElement("div", { className: te.a.videoContainer }, o.a.createElement("video", { ref: me, src: u + "Machine.mp4", autoPlay: !0, preload: "auto", muted: !0, playsInline: !0, onLoadStart: Ne, controlsList: "nodownload", loop: !0, className: te.a["machine-video"] })), o.a.createElement("div", { className: te.a.volumeController }, o.a.createElement(ge, { onMuteChange: function(e) { $(e) }, onVolumeChange: function(e) { ce(e) }, mute: X, volume: ne })))), o.a.createElement("div", { className: te.a.overviewArea }, o.a.createElement(Te, { title: Pe.overview }, o.a.createElement("div", { className: te.a.cardInnerContainer }, o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.overviewItem) }, o.a.createElement("p", null, "Device Name"), o.a.createElement("p", null, "XorTech Lathe Machine ST_20 - 042")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.overviewItem) }, o.a.createElement("p", null, "Device Type"), o.a.createElement("p", null, "XorTech Lathe Machine")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.overviewItem) }, o.a.createElement("p", null, "Device Sub Type"), o.a.createElement("p", null, "ST_20")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.overviewItem) }, o.a.createElement("p", null, "Make"), o.a.createElement("p", null, "Worthington")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.overviewItem) }, o.a.createElement("p", null, "Connection Status"), o.a.createElement("p", null, "Running"))))), o.a.createElement("div", { className: te.a.jobAxesMovementArea }, o.a.createElement(Te, { title: Pe.jobAxesMovement }, o.a.createElement("div", { id: he, className: te.a.cardInnerContainer + " report show", style: { width: "27.3125rem", height: "15.5rem", right: "0rem" } }))), o.a.createElement("div", { className: te.a.machineVibrationArea }, o.a.createElement(Te, { title: Pe.machineVibration }, o.a.createElement("div", { id: ue, className: te.a.cardInnerContainer + " report show", style: { width: "27.3125rem", height: "15.5rem", right: "0rem" } }))), o.a.createElement("div", { className: te.a.maintenanceSchedulingArea }, o.a.createElement(Te, { title: Pe.maintenanceScheduling }, o.a.createElement("div", { className: te.a.cardInnerContainer }, o.a.createElement("div", { className: te.a.cardInnerItem }, o.a.createElement("p", null, "03/13/2020"), o.a.createElement("p", null, "Routine Maintenance")), o.a.createElement("div", { className: te.a.cardInnerItem }, o.a.createElement("p", null, "01/05/2020"), o.a.createElement("p", null, "Replaced Tool")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.predMainText), onClick: function() { return Q(!0) } }, "Predictive Maintenance", o.a.createElement("img", { className: te.a.predictiveMaintenanceOverlayButton, src: "".concat(u, "alert-red.jpg"), alt: "red alert icon" })), o.a.createElement("div", { className: te.a.cardInnerItem }, o.a.createElement("p", null, "Recommendation"), o.a.createElement("p", null, "Replace", " ", o.a.createElement("span", { className: te.a.orange }, " speed controller "), "within", o.a.createElement("span", { className: te.a.orange }, " 7 days "))), o.a.createElement("div", { className: te.a.cardInnerItem }, o.a.createElement("p", null, "Risk"), o.a.createElement("p", { className: te.a.red }, "Fire Hazard")), o.a.createElement("div", { className: "".concat(te.a.cardInnerItem, " ").concat(te.a.customLineHeight) }, o.a.createElement("p", null, "Description"), o.a.createElement("p", { className: te.a.maintenanceDescription }, "PdM module had identified a", " ", o.a.createElement("span", { className: te.a.orange }, " ", "speed variation anomaly", " "), "that can result in overheating and possibly a fire")))))))), y && o.a.createElement(re, { banner: "Occupational Safety Hazard", onPopupDismiss: function() { w(!1) } }, o.a.createElement("img", { src: "".concat(u, "machine_VideoWorker.jpg"), alt: "Worker who demonstrates occupational safety hazard", className: "".concat(te.a.occupationalSafetyHazard, " ").concat(te.a.popupContent) })), ",", O && o.a.createElement(re, { banner: "Damage Alert", onPopupDismiss: function() { C(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer) }, o.a.createElement("video", { ref: de, src: u + "Machine Maintenance Demo.mp4", preload: "auto", controls: !0, playsInline: !0, controlsList: "nodownload", onLoadStart: function() { de && de.current && (de.current.volume = .05) }, className: "".concat(te.a.popupContent, " ") }))), ",", k && o.a.createElement(re, { banner: "PPE Compliance Alert", onPopupDismiss: function() { x(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer) }, o.a.createElement("video", { ref: de, src: u + "factory_safety_video.mp4", preload: "auto", controls: !0, playsInline: !0, controlsList: "nodownload", onLoadStart: function() { de && de.current && (de.current.volume = .05) }, className: "".concat(te.a.popupContent, " ") }))), Z && o.a.createElement(re, { banner: "Predictive Maintenance", onPopupDismiss: function() { Q(!1) } }, o.a.createElement("div", { className: "".concat(te.a.popupContentContainer) }, o.a.createElement("img", { src: "".concat(u, "predictive_maintenance.png"), alt: "Predictive maintenance", className: "".concat(te.a.popupContent) }))), o.a.createElement("div", { className: "".concat(te.a.hide, " ").concat(R && te.a.show) }, o.a.createElement(re, { banner: "Product Defect Rate Spike", onPopupDismiss: function() { D(!1) } }, o.a.createElement("div", { className: "".concat(te.a.stretch, " ").concat(te.a.popupContentContainer) }, o.a.createElement("div", { id: _e, className: "".concat(te.a.popupContent, " ") })))), o.a.createElement("div", { className: "".concat(te.a.hide, " ").concat(z && te.a.show) }, o.a.createElement(re, { banner: "Product Quality Degradation", onPopupDismiss: function() { se(Le.Without), G(!1) } }, o.a.createElement("div", { className: te.a.buttons }, o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(le === Le.Without && te.a.selected), onClick: function() { return se(Le.Without) } }, "Without Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(le === Le.Introducing && te.a.selected), onClick: function() { return se(Le.Introducing) } }, "Introducing Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(le === Le.With && te.a.selected), onClick: function() { return se(Le.With) } }, "With Azure Synapse Link"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(le === Le.HowWorks && te.a.selected), onClick: function() { return se(Le.HowWorks) } }, "How Azure Synapse Link works"), o.a.createElement("div", { className: "".concat(te.a.button, " ").concat(le === Le.Architecture && te.a.selected), onClick: function() { return se(Le.Architecture) } }, "Architecture")), o.a.createElement("div", { className: "".concat(te.a.popupContentContainer, " ").concat(te.a.stretch) }, o.a.createElement("div", { id: Ee, className: "".concat(le !== Le.With && le !== Le.Without && te.a.offLoad, " ").concat(te.a.popupContent) }), le === Le.Architecture && o.a.createElement("img", { src: "".concat(u, "htap-architecture.jpg"), className: "".concat(te.a.popupContent), alt: "Architecture system diagram" }), le === Le.Introducing && o.a.createElement("img", { id: "introducingGif", src: "".concat(u, "synapse-link.gif") + "?a=" + Math.random(), className: "".concat(te.a.popupContent) }), le === Le.HowWorks && o.a.createElement("video", { src: u + "How-Synapse-Link-Works.mp4", autoPlay: !0, preload: "auto", controls: !0, playsInline: !0, controlsList: "nodownload", className: "".concat(te.a.popupContent, " ") })))))
                },
                Ve = t(33),
                We = t.n(Ve);
            ! function(e) { e[e.IaaS = 0] = "IaaS", e[e.PaaS = 1] = "PaaS", e[e.Both = 2] = "Both" }(Fe || (Fe = {}));
            var qe, ze = function() {
                    var e = Object(r.useState)(Fe.PaaS),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        c = a[1];
                    return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Diagram2 }), o.a.createElement(H, { type: n.Diagram2 }), o.a.createElement("div", { className: We.a.background }, o.a.createElement("div", { className: We.a.buttons }, o.a.createElement("div", { className: "".concat(We.a.button, " ").concat(t === Fe.PaaS && We.a.selected), onClick: function() { return c(Fe.PaaS) } }, "PaaS"), o.a.createElement("div", { className: "".concat(We.a.button, " ").concat(t === Fe.IaaS && We.a.selected), onClick: function() { return c(Fe.IaaS) } }, "IaaS"), o.a.createElement("div", { className: "".concat(We.a.button, " ").concat(t === Fe.Both && We.a.selected), onClick: function() { return c(Fe.Both) } }, "Both")), o.a.createElement("div", { className: We.a.diagramContainer }, o.a.createElement("img", { className: We.a.diagram, src: "".concat(u).concat(t === Fe.IaaS ? "sqlArch-IaaS" : t === Fe.PaaS ? "sqlArch-PaaS" : t === Fe.Both ? "sqlArch-IaaSPaaS" : "", ".gif"), alt: "" }))))
                },
                Ge = t(34),
                Ue = t.n(Ge);
            ! function(e) { e[e.Hyper = 0] = "Hyper", e[e.ERP = 1] = "ERP", e[e.POS = 2] = "POS" }(qe || (qe = {}));
            var Je, Ze = function() {
                    var e = Object(r.useState)(qe.Hyper),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        c = a[1];
                    return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Diagram3 }), o.a.createElement(H, { type: n.Diagram3 }), o.a.createElement("div", { className: Ue.a.background }, o.a.createElement("div", { className: Ue.a.buttons }, o.a.createElement("div", { className: "".concat(Ue.a.button, " ").concat(t === qe.Hyper && Ue.a.selected), onClick: function() { return c(qe.Hyper) } }, "Hyperscale"), o.a.createElement("div", { className: "".concat(Ue.a.button, " ").concat(t === qe.ERP && Ue.a.selected), onClick: function() { return c(qe.ERP) } }, "ERP Data Sync"), o.a.createElement("div", { className: "".concat(Ue.a.button, " ").concat(t === qe.POS && Ue.a.selected), onClick: function() { return c(qe.POS) } }, "POS Data Sync")), o.a.createElement("div", { className: Ue.a.diagramContainer }, o.a.createElement("img", { className: Ue.a.diagram, src: "".concat(u).concat(t === qe.Hyper ? "postgresArch-hyper" : t === qe.ERP ? "Oracle_ERP_Data" : t === qe.POS ? "Realtime_POS_Sales" : "", ".gif"), alt: "" }))))
                },
                Qe = t(20),
                Ke = t.n(Qe);
            ! function(e) { e[e.ConceptualSolutionArchitecture = 0] = "ConceptualSolutionArchitecture", e[e.Reference = 1] = "Reference", e[e.Hot = 2] = "Hot", e[e.Cold = 3] = "Cold", e[e.AppArchitecture = 4] = "AppArchitecture", e[e.AppArchitectureSimplified = 5] = "AppArchitectureSimplified", e[e.DetailedArch = 6] = "DetailedArch" }(Je || (Je = {}));
            var Ye = function() {
                    var e = Object(r.useState)(Je.ConceptualSolutionArchitecture),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        c = a[1];
                    return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Diagram }), o.a.createElement(H, { type: n.Diagram }), o.a.createElement("div", { className: Ke.a.background }, o.a.createElement("div", { className: Ke.a.buttons }, o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.ConceptualSolutionArchitecture && Ke.a.selected), onClick: function() { return c(Je.ConceptualSolutionArchitecture) } }, "Solution Architecture"), o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.Reference && Ke.a.selected), onClick: function() { return c(Je.Reference) } }, "Demo Architecture"), o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.Hot && Ke.a.selected), onClick: function() { return c(Je.Hot) } }, "Hot Path"), o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.Cold && Ke.a.selected), onClick: function() { return c(Je.Cold) } }, "Cold Path"), o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.AppArchitecture && Ke.a.selected), onClick: function() { return c(Je.AppArchitecture) } }, "App Architecture"), o.a.createElement("div", { className: "".concat(Ke.a.button, " ").concat(t === Je.AppArchitectureSimplified && Ke.a.selected), onClick: function() { return c(Je.AppArchitectureSimplified) } }, "App Architecture (Simplified)")), o.a.createElement("div", { className: Ke.a.diagramContainer }, o.a.createElement("img", { className: Ke.a.diagram, src: "".concat(u).concat(t === Je.Reference ? "bothpaths" : t === Je.Cold ? "ColdPaths" : t === Je.ConceptualSolutionArchitecture ? "ConceptualSolutionArchitecture" : t === Je.Hot ? "hotpath" : t === Je.AppArchitecture ? "app_architecture" : t === Je.AppArchitectureSimplified ? "app_architecture_simplified" : t === Je.DetailedArch ? "detailed_arch" : "hotpath", ".gif"), alt: "" }))))
                },
                Xe = t(43),
                $e = t(25),
                ea = t(75),
                aa = Object(f.b)({ name: "mobile", initialState: { isMobile: !1 }, reducers: { setMobile: function(e) { e.isMobile = !0 } } }),
                ta = aa.actions,
                na = aa.reducer,
                ca = ta.setMobile,
                ra = na,
                oa = function(e) { return Object($e.c)({ router: Object(ea.b)(e), loginReducer: M, mobileReducer: ra }) },
                ia = t(106),
                la = Object(Xe.a)(),
                sa = Object(f.a)({ reducer: oa(la), middleware: [Object(ia.a)(la)] });
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var ma = t(78),
                da = t.n(ma);
            var pa = function() { var e = window.runConfig.powerAppsSrc; return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PowerApps }), o.a.createElement(H, { type: n.PowerApps }), o.a.createElement("div", { id: "scalable-wrapper", className: "page-container", style: { backgroundImage: 'url("'.concat(u, 'BKGD_POWERAPP.jpg")') } }, o.a.createElement("a", { href: "#honolulu-healthcare", className: ee.a.powerapptofinalarrow }, o.a.createElement("img", { src: "".concat(u, "Arrow-28.png"), alt: "" })), o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement("div", { className: da.a.title }, "Mobile Experience Using Power Apps"), o.a.createElement("iframe", { src: e, className: da.a.iframe, width: "852", height: "480" })))) },
                ua = t(67),
                ha = t.n(ua);
            var ga = function(e) { return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.IncidentSearch }), o.a.createElement(H, { type: n.IncidentSearch }), o.a.createElement("iframe", { className: ha.a.incidentSearch + " dashboard incidentSearchCover", style: { width: "calc(100% - 48px)", height: "100% !important", marginTop: "10px" }, src: "https://appcognitivesearchprod.azurewebsites.net/home/index?q=cough,fever" })) },
                fa = t(31),
                ba = t.n(fa);
            var _a = function() {
                    var e = window.runConfig,
                        a = e.gsd_reportid,
                        t = e.gsd_reportSection,
                        c = Object(r.useState)(!1),
                        i = Object(m.a)(c, 2),
                        l = i[0],
                        s = i[1],
                        d = a,
                        p = t,
                        u = K;
                    return Object(r.useEffect)((function() { if (!l) { s(!0); try { u.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, u]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.Globalsafetydashboard }), o.a.createElement(H, { type: n.Globalsafetydashboard }), o.a.createElement("div", { id: d, className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
                },
                Ea = t(16),
                va = (t(107), t(71));
            va.pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(va.pdfjs.version, "/pdf.worker.js");
            var ya = function() {
                    var e = window.runConfig,
                        a = (e.PDFBaseLink, e.powerAppsSrcFormRecongnise);
                    return o.a.createElement("div", { className: ye.a.frecogbg }, o.a.createElement(L, null), o.a.createElement(j, { type: n.FormRecognizer }), o.a.createElement(H, { type: n.FormRecognizer }), o.a.createElement("a", { href: "#/hospital-incident-insights", className: ye.a.gotoAccidentSearch }, o.a.createElement("div", { className: ye.a.arrow }, o.a.createElement("img", { src: "".concat(u, "Arrow-25.png"), alt: "Link to Accident Search" }))), o.a.createElement("a", { className: ye.a.gotoAccidentSearch1 }, o.a.createElement("img", { src: "".concat(u, "circle-24.png"), alt: "Link to Accident Search" })), o.a.createElement("div", { id: "", className: "" }, o.a.createElement("div", { style: { padding: "90px 40px 20px 80px" } }, o.a.createElement(Ea.d, null, o.a.createElement(Ea.b, null, o.a.createElement(Ea.a, null, "Patient Form"), o.a.createElement(Ea.a, null, "Azure Cognitive Service - Form Scanner")), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: "row g-2", style: { marginTop: "20px" } }, o.a.createElement("div", { className: "col-5" }, o.a.createElement("img", { className: "img-fluid", src: "".concat(u, "paitent_intake.jpg") })), o.a.createElement("div", { className: "col-7", style: { backgroundColor: "#001b2e", padding: "30px", color: "white" } }, o.a.createElement("h3", null, "JSON"), o.a.createElement("code", { style: { color: "white" } }, "{", o.a.createElement("br", null), '"LastName": "Wagner"', o.a.createElement("br", null), '"FirstName": "Nicole",', o.a.createElement("br", null), '"Gender": "Female",', o.a.createElement("br", null), '"Age": "30",', o.a.createElement("br", null), '"MStatus": "Single",', o.a.createElement("br", null), '"Condition": "Asthma",', o.a.createElement("br", null), '"Symptom": "Respiratory",', o.a.createElement("br", null), '"Medication": "Yes",', o.a.createElement("br", null), '"Allergies": "NotSure"', o.a.createElement("br", null), '"Tobacco": "No",', o.a.createElement("br", null), '"DrugAbuse": "No",', o.a.createElement("br", null), '"Alcohol": "Occasionally",', o.a.createElement("br", null), "}", o.a.createElement("br", null))))), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: ye.a.frame }, o.a.createElement("iframe", { src: a, className: da.a.iframe, width: "852", height: "480" })))))))
                },
                wa = t(120),
                Na = t.n(wa),
                Sa = function(e) { window.runConfig.ecommercIframeSrc; return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.override ? n.ECommerce2 : n.ECommerce }), o.a.createElement(H, { type: e.override ? n.ECommerce2 : n.ECommerce }), o.a.createElement("a", { href: "#/us-map", className: ye.a.arrowTopRight }, o.a.createElement("div", { className: ye.a.arrow }, o.a.createElement("img", { src: "".concat(u, "Arrow-3.png"), alt: "Link to Hospital Network" }))), o.a.createElement("iframe", { src: "https://jnjpoc.blob.core.windows.net/webassets/dummy.html", className: Na.a.eCommerceFrame, sandbox: "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox", title: "Hospital" })) },
                Oa = t(6),
                Ca = t.n(Oa),
                Ma = t(121),
                ja = t(126),
                Ia = t(127),
                ka = t(122),
                xa = function() {
                    function e(a, t) { Object(z.a)(this, e), this.http = void 0, this.baseUrl = void 0, this.jsonParseReviver = void 0, this.http = t || window, this.baseUrl = a || "https://localhost:5001" }
                    return Object(G.a)(e, [{
                        key: "get",
                        value: function() {
                            var e = this,
                                a = this.baseUrl + "/api/Stores";
                            a = a.replace(/[?&]$/, "");
                            return this.http.fetch(a, { method: "GET", headers: { Accept: "application/json" } }).then((function(a) { return e.processGet(a) }))
                        }
                    }, {
                        key: "processGet",
                        value: function(e) {
                            var a = this,
                                t = e.status,
                                n = {};
                            return e.headers && e.headers.forEach && e.headers.forEach((function(e, a) { return n[a] = e })), 200 === t ? e.text().then((function(e) {
                                var t = null,
                                    n = "" === e ? null : JSON.parse(e, a.jsonParseReviver);
                                if (Array.isArray(n)) {
                                    t = [];
                                    var c, r = Object(ka.a)(n);
                                    try {
                                        for (r.s(); !(c = r.n()).done;) {
                                            var o = c.value;
                                            t.push(o)
                                        }
                                    } catch (i) { r.e(i) } finally { r.f() }
                                }
                                return t
                            })) : 200 !== t && 204 !== t ? e.text().then((function(e) { return Ra("An unexpected server error occurred.", t, e, n) })) : Promise.resolve(null)
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            var a = this,
                                t = this.baseUrl + "/api/Stores";
                            t = t.replace(/[?&]$/, "");
                            var n = { body: JSON.stringify(e), method: "POST", headers: { "Content-Type": "application/json" } };
                            return this.http.fetch(t, n).then((function(e) { return a.processAdd(e) }))
                        }
                    }, {
                        key: "processAdd",
                        value: function(e) {
                            var a = e.status,
                                t = {};
                            return e.headers && e.headers.forEach && e.headers.forEach((function(e, a) { return t[a] = e })), 200 === a ? e.text().then((function(e) {})) : 200 !== a && 204 !== a ? e.text().then((function(e) { return Ra("An unexpected server error occurred.", a, e, t) })) : Promise.resolve(null)
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            var e = this,
                                a = this.baseUrl + "/api/Stores";
                            a = a.replace(/[?&]$/, "");
                            return this.http.fetch(a, { method: "DELETE", headers: {} }).then((function(a) { return e.processRemove(a) }))
                        }
                    }, {
                        key: "processRemove",
                        value: function(e) {
                            var a = e.status,
                                t = {};
                            return e.headers && e.headers.forEach && e.headers.forEach((function(e, a) { return t[a] = e })), 200 === a ? e.text().then((function(e) {})) : 200 !== a && 204 !== a ? e.text().then((function(e) { return Ra("An unexpected server error occurred.", a, e, t) })) : Promise.resolve(null)
                        }
                    }]), e
                }(),
                Pa = function() {
                    function e(a) {
                        if (Object(z.a)(this, e), this.storeID = void 0, this.storeName = void 0, this.storeType = void 0, this.address = void 0, this.country = void 0, this.latitude = void 0, this.longitude = void 0, this.city = void 0, a)
                            for (var t in a) a.hasOwnProperty(t) && (this[t] = a[t])
                    }
                    return Object(G.a)(e, [{ key: "init", value: function(e) { e && (this.storeID = e.storeID, this.storeName = e.storeName, this.storeType = e.storeType, this.address = e.address, this.country = e.country, this.latitude = e.latitude, this.longitude = e.longitude, this.city = e.city) } }, { key: "toJSON", value: function(e) { return (e = "object" === typeof e ? e : {}).storeID = this.storeID, e.storeName = this.storeName, e.storeType = this.storeType, e.address = this.address, e.country = this.country, e.latitude = this.latitude, e.longitude = this.longitude, e.city = this.city, e } }], [{ key: "fromJS", value: function(a) { a = "object" === typeof a ? a : {}; var t = new e; return t.init(a), t } }]), e
                }(),
                Aa = function(e) {
                    Object(Ma.a)(t, e);
                    var a = Object(ja.a)(t);

                    function t(e, n, c, r, o) { var i; return Object(z.a)(this, t), (i = a.call(this)).message = void 0, i.status = void 0, i.response = void 0, i.headers = void 0, i.result = void 0, i.isApiException = !0, i.message = e, i.status = n, i.response = c, i.headers = r, i.result = o, i }
                    return Object(G.a)(t, null, [{ key: "isApiException", value: function(e) { return !0 === e.isApiException } }]), t
                }(Object(Ia.a)(Error));

            function Ra(e, a, t, n, c) { throw null !== c && void 0 !== c ? c : new Aa(e, a, t, n, null) }
            var Da = 0,
                Ha = 1001;
            var La = function() {
                    var e = Object(r.useState)("PostgreSQL_map_before.png"),
                        a = Object(m.a)(e, 2),
                        t = a[0],
                        c = a[1],
                        i = Object(r.useState)(!1),
                        l = Object(m.a)(i, 2),
                        s = l[0],
                        d = l[1],
                        p = Object(r.useState)(!1),
                        h = Object(m.a)(p, 2),
                        g = h[0],
                        f = h[1],
                        b = Object(r.useState)(!1),
                        _ = Object(m.a)(b, 2),
                        E = _[0],
                        v = _[1],
                        y = Object(r.useState)(""),
                        w = Object(m.a)(y, 2),
                        N = w[0],
                        S = w[1],
                        O = Object(r.useState)(""),
                        C = Object(m.a)(O, 2),
                        M = C[0],
                        I = C[1],
                        k = Object(r.useState)(""),
                        x = Object(m.a)(k, 2),
                        P = x[0],
                        A = x[1],
                        R = Object(r.useState)(""),
                        D = Object(m.a)(R, 2),
                        T = D[0],
                        F = D[1],
                        B = Object(r.useState)(""),
                        V = Object(m.a)(B, 2),
                        W = V[0],
                        q = V[1],
                        z = Object(r.useState)(""),
                        G = Object(m.a)(z, 2),
                        U = G[0],
                        J = G[1],
                        Z = Object(r.useState)(""),
                        Q = Object(m.a)(Z, 2),
                        K = Q[0],
                        Y = Q[1],
                        X = Object(r.useState)(),
                        $ = Object(m.a)(X, 2),
                        ee = $[0],
                        ae = $[1],
                        te = window.runConfig.apiUrl,
                        ne = new xa(te),
                        ce = Object(r.useRef)(null);
                    return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PSSqlRetailMap }), o.a.createElement(H, { type: n.PSSqlRetailMap }), o.a.createElement("div", { className: Ca.a.background }, o.a.createElement("div", { className: Ca.a.buttons }, o.a.createElement("div", { className: "".concat(Ca.a.button), onClick: function() { return d(!s) } }, "Add Store"), o.a.createElement("div", { className: "".concat(Ca.a.button), onClick: function() { return Da = 0, Ha = 1001, void ne.remove().then((function(e) { return console.log(e) })).catch((function(e) { return console.error(e) })).finally((function() { c("PostgreSQL_map_before.png") })) } }, "Reset Stores"), o.a.createElement("div", { className: "".concat(Ca.a.button), onClick: function() { ne.get().then((function(e) { ae(e) })).catch((function(e) { return console.error(e) })).finally((function() { f(!g) })) } }, "Top 10 Recently Added"), o.a.createElement("div", { className: "".concat(Ca.a.button), onClick: function() { return v(!E) } }, "Video")), o.a.createElement("img", { src: "".concat(u).concat(t) }), s && o.a.createElement("div", { className: Ca.a.popup }, o.a.createElement("div", { className: Ca.a.popup_Container }, o.a.createElement("img", { className: Ca.a.modalBackground, src: "".concat(u, "popup_add_store_blank.png"), alt: "add", onClick: function() { return d(!s) } }), o.a.createElement("div", { className: Ca.a.form_Container }, o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Store Name")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "WW Importers Store", onChange: function(e) { S(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Store Type")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "Wholesale", onChange: function(e) { I(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Address")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "Rua Carlos Gomes", onChange: function(e) { A(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Country")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "Brazil", onChange: function(e) { F(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Latitude")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "-22.901576", onChange: function(e) { q(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "Longitude")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "-43.201253", onChange: function(e) { J(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }, o.a.createElement("label", null, "City")), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("input", { type: "text", defaultValue: "Rio De Janeiro", onChange: function(e) { Y(e.target.value) } }))), o.a.createElement("div", { className: Ca.a.form_Row }, o.a.createElement("div", { className: Ca.a.form_label }), o.a.createElement("div", { className: Ca.a.form_input }, o.a.createElement("div", {
                        className: Ca.a.form_button_launch,
                        onClick: function() {
                            return function() {
                                var e = new Pa;
                                0 == Da ? Da += 1 : Da > 0 && (Ha += 1), e.storeID = Ha, e.storeName = N || "WW Importers Store", e.storeType = M || "Wholesale", e.address = P || "Rua Carlos Gomes", e.country = T || "Brazil", e.latitude = W || "-22.901576", e.longitude = U || "-43.201253", e.city = K || "Rio De Janeiro", ne.add(e).then((function(e) { return console.log(e) })).catch((function(e) { return console.error(e) })).finally((function() { c("PostgreSQL_map_after.png"), d(!s) }))
                            }()
                        }
                    }, "Launch Store")))))), ",", g && o.a.createElement("div", { className: Ca.a.popup }, o.a.createElement("div", { className: Ca.a.popup_Container, onClick: function() { return f(!1) } }, o.a.createElement("img", { className: Ca.a.modalBackground, src: "".concat(u, "popup_recent_top10.png"), alt: "top10" }), o.a.createElement("div", { className: Ca.a.form_Container }, o.a.createElement("div", { className: Ca.a.tableResponsive }, o.a.createElement("table", { className: Ca.a.table }, o.a.createElement("thead", null, o.a.createElement("tr", null, o.a.createElement("th", null, "Store Name"), o.a.createElement("th", null, "Country"), o.a.createElement("th", null, "City"))), o.a.createElement("tbody", null, null === ee || void 0 === ee ? void 0 : ee.map((function(e, a) { return e.map((function(e, a) { return o.a.createElement("tr", { key: a }, o.a.createElement("td", null, e.storeName), o.a.createElement("td", null, e.country), o.a.createElement("td", null, e.city)) })) })))))))), ",", E && o.a.createElement(re, { banner: "Video", onPopupDismiss: function() { v(!1) } }, o.a.createElement("div", { className: "".concat(Ca.a.popupContentContainer) }, o.a.createElement("video", { ref: ce, src: u + "retailMapVideoV1.mp4", preload: "auto", controls: !0, playsInline: !0, controlsList: "nodownload", onLoadStart: function() { ce && ce.current && (ce.current.volume = .05) }, className: "".concat(Ca.a.popupContent, " ") })))))
                },
                Ta = t(8),
                Fa = t.n(Ta);
            var Ba = function(e) {
                    var a = Object(r.useState)(!1),
                        t = Object(m.a)(a, 2),
                        n = t[0],
                        c = t[1],
                        i = K;
                    return Object(r.useEffect)((function() { if (!n) { c(!0); try { i.load(e.dashboardId, { type: F.Dashboard, elementId: e.dashboardId, height: 1280, width: 1920 }) } catch (a) { c(!1) } } }), [n, i]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), o.a.createElement("a", { target: "_blank", href: "https://app.powerbi.com/groups/4292532e-bd79-4004-a7cc-a78977685b59/reports/216b12ce-7aa2-4d31-b281-7f814654da25/ReportSectionf41f31307dc22a4adb9c?noSignUpCheck=1", className: Fa.a.gotToSafetyReport }, o.a.createElement("div", { className: Fa.a.arrow }, o.a.createElement("img", { src: "".concat(u, "icon_arrow.png"), alt: "link safety report" }))), o.a.createElement("div", { className: Fa.a.background, style: { paddingRight: "20px" } }, o.a.createElement("div", { className: "".concat(Fa.a.diagramContainer, " ").concat(Fa.a.example) }, o.a.createElement("img", { className: Fa.a.diagram, src: "".concat(u, "postgresql_before.gif?a=").concat(Math.random()), alt: "" }))))
                },
                Va = t(60),
                Wa = t.n(Va);
            var qa = function() {
                var e = window.runConfig.PSSqlEmbeddedDashboardBefore_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = e,
                    s = K;
                return console.log(e), Object(r.useEffect)((function() { if (!c) { i(!0); try { s.load(l, { type: F.Report, elementId: l, height: 1280, width: 1920, pageName: "" }) } catch (e) { i(!1) } } }), [c, s]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PSEmbedded }), o.a.createElement(H, { type: n.PSEmbedded }), o.a.createElement("div", { id: l, className: Wa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var za = function(e) {
                var a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    n = t[0],
                    c = t[1],
                    i = K;
                return Object(r.useEffect)((function() { if (!n) { c(!0); try { i.load(e.dashboardId, { type: F.Dashboard, elementId: e.dashboardId, height: 1280, width: 1920 }) } catch (a) { c(!1) } } }), [n, i]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), o.a.createElement("a", { target: "_blank", href: "https://app.powerbi.com/groups/4292532e-bd79-4004-a7cc-a78977685b59/reports/cdd7fb69-cc00-4d9d-ad35-eaa2ab4de6fa/ReportSectionf41f31307dc22a4adb9c?noSignUpCheck=1", className: Fa.a.gotToSafetyReport }, o.a.createElement("div", { className: Fa.a.arrow }, o.a.createElement("img", { src: "".concat(u, "icon_arrow.png"), alt: "link safety report" }))), o.a.createElement("div", { className: Fa.a.background, style: { paddingRight: "20px" } }, o.a.createElement("div", { className: "".concat(Fa.a.diagramContainer, " ").concat(Fa.a.example) }, o.a.createElement("img", { className: Fa.a.diagram, src: "".concat(u, "postgresql_after.gif?a=").concat(Math.random()), alt: "" }))))
            };
            var Ga = function() {
                    var e = window.runConfig.PSSqlEmbeddedDashboardAfter_ID,
                        a = Object(r.useState)(!1),
                        t = Object(m.a)(a, 2),
                        c = t[0],
                        i = t[1],
                        l = e,
                        s = K;
                    return Object(r.useEffect)((function() { if (!c) { i(!0); try { s.load(l, { type: F.Report, elementId: l, height: 1280, width: 1920, pageName: "" }) } catch (e) { i(!1) } } }), [c, s]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PSEmbedded }), o.a.createElement(H, { type: n.PSEmbedded }), o.a.createElement("div", { id: l, className: Wa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
                },
                Ua = t(123),
                Ja = t.n(Ua),
                Za = t(125);
            var Qa = function(e) {
                var a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    n = t[0],
                    c = t[1],
                    i = K;
                return Object(r.useEffect)((function() { if (!n) { c(!0); try { i.load(e.dashboardId, { type: F.Dashboard, elementId: e.dashboardId, height: 1280, width: 1920 }) } catch (a) { c(!1) } } }), [n, i]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), o.a.createElement("a", { target: "_blank", href: "https://portal.azure.com/#@f94768c8-8714-4abe-8e2d-37a64b18216a/resource/subscriptions/49d66a68-7c00-43c3-93ae-602ee60e1eb6/resourceGroups/Manufacturing-Demo/providers/Microsoft.DBforPostgreSQL/serverGroups/sales-pg-hyperscale/pricingTier", className: Fa.a.gotToSafetyReport }, o.a.createElement("div", { className: Fa.a.arrow }, o.a.createElement("img", { src: Ja.a, alt: "link safety report" })), o.a.createElement(Za.a, null)), o.a.createElement("div", { className: Fa.a.background, style: { paddingRight: "20px" } }, o.a.createElement("div", { className: "".concat(Fa.a.diagramContainer, " ").concat(Fa.a.example) }, o.a.createElement("img", { className: Fa.a.diagram, src: "".concat(u, "postgresql_during.gif?a=").concat(Math.random()), alt: "" }))))
            };
            var Ka = function() {
                    var e = window.runConfig.PSSqlEmbeddedDashboardDuring_ID,
                        a = Object(r.useState)(!1),
                        t = Object(m.a)(a, 2),
                        c = t[0],
                        i = t[1],
                        l = e,
                        s = K;
                    return Object(r.useEffect)((function() { if (!c) { i(!0); try { s.load(l, { type: F.Report, elementId: l, height: 1280, width: 1920, pageName: "" }) } catch (e) { i(!1) } } }), [c, s]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PSEmbedded }), o.a.createElement(H, { type: n.PSEmbedded }), o.a.createElement("div", { id: l, className: Wa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
                },
                Ya = t(93),
                Xa = t.n(Ya);
            var $a = function(e) {
                var a = window.runConfig,
                    t = a.salesAndCampaign_first,
                    n = a.salesAndCampaign_second,
                    c = Object(r.useState)(!1),
                    i = Object(m.a)(c, 2),
                    l = i[0],
                    s = i[1],
                    d = t,
                    p = n;
                return Object(r.useEffect)((function() { if (!l) { s(!0); try { K.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, K]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), o.a.createElement("div", { id: d, className: Xa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var et = function(e) {
                var a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    n = t[0],
                    c = t[1],
                    i = "da4801ad-6721-4ba1-af07-3933a04fbe9e";
                return Object(r.useEffect)((function() { if (!n) { c(!0); try { K.load(i, { type: F.Report, elementId: i, height: 1280, width: 1920, pageName: "ReportSection811d0856f92253ddb79e" }) } catch (e) { c(!1) } } }), [n, K]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: e.type }), o.a.createElement(H, { type: e.type }), o.a.createElement("div", { id: i, className: Xa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var at = function() {
                var e = window.runConfig,
                    a = e.AnomalyDetectionReport_NAME,
                    t = e.AnomalyDetectionReport_ID,
                    c = Object(r.useState)(!1),
                    i = Object(m.a)(c, 2),
                    l = i[0],
                    s = i[1],
                    d = t,
                    p = a,
                    u = K;
                return Object(r.useEffect)((function() { if (!l) { s(!0); try { u.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, u]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AnomalyDetection }), o.a.createElement(H, { type: n.AnomalyDetection }), o.a.createElement("div", { id: d, className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var tt = function() {
                var e = window.runConfig,
                    a = e.HealthcareAnalyticsReport_NAME,
                    t = e.HealthcareAnalyticsReport_ID,
                    c = Object(r.useState)(!1),
                    i = Object(m.a)(c, 2),
                    l = i[0],
                    s = i[1],
                    d = t,
                    p = a,
                    u = K;
                return Object(r.useEffect)((function() { if (!l) { s(!0); try { u.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, u]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.HealthcareAnalytics }), o.a.createElement(H, { type: n.HealthcareAnalytics }), o.a.createElement("div", { id: d, className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var nt = function() {
                var e = window.runConfig,
                    a = (e.HospitalIncidentReport_Name, e.HospitalIncidentReport_ID, Object(r.useState)(!1)),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = K;
                return Object(r.useEffect)((function() { if (!c) { i(!0); try { l.load("4182c5a4-6466-4cae-94c3-74960363f5c4", { type: F.Report, elementId: "4182c5a4-6466-4cae-94c3-74960363f5c4", height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, l]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.HospitalIncidentReport }), o.a.createElement(H, { type: n.HospitalIncidentReport }), o.a.createElement("div", { id: "4182c5a4-6466-4cae-94c3-74960363f5c4", className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var ct = function() {
                var e = window.runConfig,
                    a = e.EmbeddedCampaignDashboard_NAME,
                    t = e.EmbeddedCampaignDashboard_ID,
                    c = Object(r.useState)(!1),
                    i = Object(m.a)(c, 2),
                    l = i[0],
                    s = i[1],
                    d = t,
                    p = a,
                    h = K;
                return Object(r.useEffect)((function() { if (!l) { s(!0); try { h.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, h]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.EmbeddedCampaignDashboard }), o.a.createElement(H, { type: n.EmbeddedCampaignDashboard }), o.a.createElement("a", { href: "#/afterdashboard1", className: ye.a.arrowBottom333 }, o.a.createElement("img", { src: "".concat(u, "Arrow-21.png"), alt: "Link to Hospital Network" })), o.a.createElement("div", { id: d, className: Wa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var rt = function() {
                var e = window.runConfig.PSAfterDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    h = (d[1], Object(s.f)()),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Dashboard, elementId: g, height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AfterDashboard }), o.a.createElement(H, { type: n.AfterDashboard }), o.a.createElement("a", { href: "#campaignreport", className: ee.a.hospitalOverviewLink333 }, o.a.createElement("img", { src: "".concat(u, "Arrow-20.png"), alt: "" })), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var ot = function() {
                var e = window.runConfig.PSAfterDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    h = (d[1], Object(s.f)()),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Dashboard, elementId: g, height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AfterDashboard }), o.a.createElement(H, { type: n.AfterDashboard }), o.a.createElement("a", { href: "#predictive-analytics-report", className: ee.a.hospitalOverviewLink44 }, o.a.createElement("img", { src: "".concat(u, "Arrow-22.png"), alt: "" })), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var it = function() {
                var e = window.runConfig.PSAfterDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    h = (d[1], Object(s.f)()),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Dashboard, elementId: g, height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AfterDashboard }), o.a.createElement(H, { type: n.AfterDashboard }), o.a.createElement("a", { href: "#predictive-analytics-report", className: ee.a.hospitalOverviewLink4 }, o.a.createElement("img", { src: "".concat(u, "14.png"), alt: "" })), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var lt = function() {
                var e = window.runConfig.PSAfterDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    h = (d[1], Object(s.f)()),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Dashboard, elementId: g, height: 1280, width: 1920 }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AfterDashboard }), o.a.createElement(H, { type: n.AfterDashboard }), o.a.createElement("a", { href: "#powerApps", className: ee.a.hospitalOverviewLink4 }, o.a.createElement("img", { src: "".concat(u, "Arrow-27.png"), alt: "" })), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var st = function() {
                var e = window.runConfig.PSBeforeDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    u = d[1],
                    h = Object(s.f)(),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Report, elementId: g, height: 1280, width: 1920, onClick: function() { return u(!0) } }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PSSqlDashboardBefore }), o.a.createElement(H, { type: n.PSSqlDashboardBefore }), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var mt = function() {
                var e = window.runConfig.PSDuringDashBoard_ID,
                    a = Object(r.useState)(!1),
                    t = Object(m.a)(a, 2),
                    c = t[0],
                    i = t[1],
                    l = Object(r.useState)(!1),
                    d = Object(m.a)(l, 2),
                    p = d[0],
                    u = d[1],
                    h = Object(s.f)(),
                    g = e,
                    f = K;
                return Object(r.useEffect)((function() { p && h.push("/campaign-report") }), [p]), Object(r.useEffect)((function() { if (!c) { i(!0); try { f.load(g, { type: F.Dashboard, elementId: g, height: 1280, width: 1920, onClick: function() { return u(!0) } }) } catch (e) { i(!1) } } }), [c, f]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.AfterDashboard }), o.a.createElement(H, { type: n.AfterDashboard }), o.a.createElement("div", { id: g, className: Fa.a.finance + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            var dt, pt = function() {
                    var e = window.runConfig,
                        a = e.UsaMapEmbedded_NAME,
                        t = e.UsaMapEmbedded_ID,
                        c = Object(r.useState)(!1),
                        i = Object(m.a)(c, 2),
                        l = i[0],
                        s = i[1],
                        d = t,
                        p = a,
                        h = K;
                    return Object(r.useEffect)((function() { if (!l) { s(!0); try { h.load(d, { type: F.Report, elementId: d, height: 1280, width: 1920, pageName: p }) } catch (e) { s(!1) } } }), [l, h]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.HospitalNetwork }), o.a.createElement(H, { type: n.HospitalNetwork }), o.a.createElement("a", { href: "#/hospitalinsights", className: ye.a.arrowBottom1 }, o.a.createElement("img", { src: "".concat(u, "Arrow-4.png"), alt: "Link to Accident Search" })), o.a.createElement("div", { id: d, className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
                },
                ut = t(14),
                ht = t.n(ut),
                gt = t(22),
                ft = t(27),
                bt = { position: new ft.data.Position(-157.849915, 21.344379), pixelOffset: [-40, -40] },
                _t = { position: new ft.data.Position(-118.233599, 34.032281), pixelOffset: [-40, -40] },
                Et = { position: new ft.data.Position(-80.121659, 25.95428), pixelOffset: [0, -50] },
                vt = { position: new ft.data.Position(-149.862427, 61.186749), pixelOffset: [-70, 150] },
                yt = { position: new ft.data.Position(-87.898468, 41.977097) },
                wt = { center: [-120.41319, 51.926247], zoom: 2.5, authOptions: { authType: ft.AuthenticationType.subscriptionKey, subscriptionKey: "P3AmUELdMw-ZHASats4l_7Pk2MsifxSafhrrrEgJcuI" } },
                Nt = [{ controlName: "StyleControl", controlOptions: { mapStyles: "all" }, options: { position: "top-right" } }, { controlName: "ZoomControl", options: { position: "top-right" } }, { controlName: "CompassControl", controlOptions: { rotationDegreesDelta: 10, style: "dark" }, options: { position: "bottom-right" } }, { controlName: "PitchControl", controlOptions: { pitchDegreesDelta: 5, style: "dark" }, options: { position: "bottom-right" } }, { controlName: "TrafficControl", controlOptions: { incidents: !0 }, options: { position: "top-left" } }, { controlName: "TrafficLegendControl", controlOptions: {}, options: { position: "bottom-left" } }];
            ! function(e) { e[e.None = 0] = "None", e[e.Miami = 1] = "Miami", e[e.Chicago = 2] = "Chicago", e[e.LosAngeles = 3] = "LosAngeles", e[e.Honolulu = 4] = "Honolulu", e[e.Anchorage = 5] = "Anchorage" }(dt || (dt = {}));
            var St, Ot = function() {
                    var e = window.runConfig,
                        a = e.gb_reportId,
                        t = e.gb_marginId_LosAngeles,
                        c = e.gb_bedOccupancyId_LosAngeles,
                        i = e.gb_patientExpId_LosAngeles,
                        l = e.gb_marginId_Anchorage,
                        s = e.gb_bedOccupancyId_Anchorage,
                        d = e.gb_patientExpId_Anchorage,
                        p = e.gb_marginId_Honolulu,
                        h = e.gb_bedOccupancyId_Honolulu,
                        g = e.gb_patientExpId_Honolulu,
                        f = e.gb_marginId_Miami,
                        b = e.gb_bedOccupancyId_Miami,
                        _ = e.gb_patientExpId_Miami,
                        E = e.gb_marginId_Chicago,
                        v = e.gb_bedOccupancyId_Chicago,
                        y = e.gb_patientExpId_Chicago,
                        w = (e.BingMapKey, Object(r.useState)("Anchorage")),
                        N = Object(m.a)(w, 2),
                        S = N[0],
                        O = (N[1], Object(r.useState)(!1)),
                        C = Object(m.a)(O, 2),
                        M = C[0],
                        I = C[1],
                        k = Object(r.useState)(!1),
                        x = Object(m.a)(k, 2),
                        P = x[0],
                        A = x[1],
                        R = Object(r.useState)(!1),
                        D = Object(m.a)(R, 2),
                        T = D[0],
                        B = D[1],
                        V = Object(r.useState)(!1),
                        W = Object(m.a)(V, 2),
                        q = W[0],
                        z = W[1],
                        G = Object(r.useState)(!1),
                        U = Object(m.a)(G, 2),
                        J = U[0],
                        Z = U[1],
                        Q = Object(r.useState)(""),
                        Y = Object(m.a)(Q, 2),
                        X = Y[0],
                        $ = Y[1],
                        ee = Object(r.useState)(d),
                        ae = Object(m.a)(ee, 2),
                        te = ae[0],
                        ne = ae[1],
                        ce = Object(r.useState)(l),
                        re = Object(m.a)(ce, 2),
                        oe = re[0],
                        ie = re[1],
                        le = Object(r.useState)(s),
                        se = Object(m.a)(le, 2),
                        me = se[0],
                        de = se[1],
                        pe = a,
                        ue = K,
                        he = [{ eventName: "click", callback: function(e) { ge(e.target.element.firstChild.id) } }];

                    function ge(e) {
                        var a = "";
                        switch (e) {
                            case "Chicago":
                                a = "Chicago", ie(E), de(v), ne(y), $(a);
                                break;
                            case "Miami":
                                a = "Miami", ie(f), de(b), ne(_), $(a);
                                break;
                            case "LosAngeles":
                                a = "Los Angeles", ie(t), de(c), ne(i), $(a);
                                break;
                            case "Honolulu":
                                a = "Honolulu", ie(p), de(h), ne(g), $(a);
                                break;
                            case "Anchorage":
                                a = "Achorage", ie(l), de(s), ne(d), $(a);
                                break;
                            default:
                                return
                        }
                        ue.setFilter(te, { table: "Readmission", column: "city", value: a }), ue.setFilter(me, { table: "Bed Occupancy", column: "CityName", value: a }), ue.setFilter(oe, { table: "Margin rate", column: "city", value: a })
                    }
                    return Object(r.useEffect)((function() { q || (z(!0), ue.load(pe, { type: F.Report, elementId: te, height: 120, width: 375, pageName: te, onRendered: function() { I(!0) } }), ue.load(pe, { type: F.Report, elementId: oe, height: 120, width: 375, pageName: oe, onRendered: function() { A(!0) } }), ue.load(pe, { type: F.Report, elementId: me, height: 120, width: 375, pageName: me, onRendered: function() { B(!0) } })) }), [q, ue]), Object(r.useEffect)((function() { P && M && T && ge(S) }), [S, q, P, M, T, ue]), Object(r.useEffect)((function() { ue.load(pe, { type: F.Report, elementId: te, height: 120, width: 375, pageName: te, onRendered: function() { I(!0) } }), ue.load(pe, { type: F.Report, elementId: oe, height: 120, width: 375, pageName: oe, onRendered: function() { A(!0) } }), ue.load(pe, { type: F.Report, elementId: me, height: 120, width: 375, pageName: me, onRendered: function() { B(!0) } }) }), [X]), Object(r.useEffect)((function() { J || (setTimeout((function() {}), 500), Z(!0)) }), [J]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container" }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement(j, { type: n.GlobalBing }), o.a.createElement(H, { type: n.GlobalBing }), o.a.createElement("img", { src: "".concat(u, "shade_overlay.png"), alt: "/shade_overlay.png", className: ht.a["map-shadow"] }), o.a.createElement(gt.c, null, o.a.createElement("div", { className: ht.a.map }, o.a.createElement(gt.a, { options: wt, controls: Nt }, o.a.createElement(gt.b, { id: "Honolulu", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Honolulu" }, o.a.createElement("img", { src: "".concat(u, "pin_Honolulu.png") })), options: bt, events: he }), o.a.createElement(gt.b, { id: "Miami", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Miami" }, o.a.createElement("img", { src: "".concat(u, "pin_Miami.png"), style: { marginRight: "-100px" } })), options: Et, events: he }), o.a.createElement(gt.b, { id: "LosAngeles", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "LosAngeles" }, o.a.createElement("img", { src: "".concat(u, "pin_LosAngeles.png"), style: { marginLeft: "-300px", marginTop: "-60px" } })), options: _t, events: he }), o.a.createElement(gt.b, { id: "Anchorage", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Anchorage" }, o.a.createElement("img", { src: "".concat(u, "pin_Anchorage.png") })), options: vt, events: he }), o.a.createElement(gt.b, { id: "Chicago", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Chicago" }, o.a.createElement("img", { src: "".concat(u, "pin_Chicago.png"), style: { marginRight: "-100px" } })), options: yt, events: he })))), o.a.createElement("img", { className: "background ".concat(ht.a["global-page-background"]), src: "".concat(u, "dash_overlay.png"), alt: "", id: "shade-overlay" }), o.a.createElement("a", { href: "#/miami", className: ht.a.tile }, o.a.createElement("img", { src: "".concat(u, "Arrow-6.png"), alt: "Link to Accident Search" })), o.a.createElement("div", { id: te, className: "report ".concat(ht.a.report, " ").concat(ht.a.availability, " show"), style: { width: "375px", height: "120px" } }), o.a.createElement("div", { id: me, style: { width: "375px", height: "120px" }, className: "report ".concat(ht.a.report, " ").concat(ht.a.performance, " show") }), o.a.createElement("div", { id: oe, style: { width: "375px", height: "120px" }, className: "report ".concat(ht.a.report, " ").concat(ht.a.quality, " show") }))))
                },
                Ct = { position: new ft.data.Position(-157.849915, 21.344379), pixelOffset: [-40, -40] },
                Mt = { position: new ft.data.Position(-118.233599, 34.032281), pixelOffset: [-190, -40] },
                jt = { position: new ft.data.Position(-80.121659, 25.95428), pixelOffset: [50, -50] },
                It = { position: new ft.data.Position(-149.862427, 61.186749), pixelOffset: [-70, 150] },
                kt = { position: new ft.data.Position(-87.898468, 41.977097), pixelOffset: [50, 1] },
                xt = { center: [-120.41319, 51.926247], zoom: 2.5, authOptions: { authType: ft.AuthenticationType.subscriptionKey, subscriptionKey: "P3AmUELdMw-ZHASats4l_7Pk2MsifxSafhrrrEgJcuI" } },
                Pt = [{ controlName: "StyleControl", controlOptions: { mapStyles: "all" }, options: { position: "top-right" } }, { controlName: "ZoomControl", options: { position: "top-right" } }, { controlName: "CompassControl", controlOptions: { rotationDegreesDelta: 10, style: "dark" }, options: { position: "bottom-right" } }, { controlName: "PitchControl", controlOptions: { pitchDegreesDelta: 5, style: "dark" }, options: { position: "bottom-right" } }, { controlName: "TrafficControl", controlOptions: { incidents: !0 }, options: { position: "top-left" } }, { controlName: "TrafficLegendControl", controlOptions: {}, options: { position: "bottom-left" } }];
            ! function(e) { e[e.None = 0] = "None", e[e.Miami = 1] = "Miami", e[e.Chicago = 2] = "Chicago", e[e.LosAngeles = 3] = "LosAngeles", e[e.Honolulu = 4] = "Honolulu", e[e.Anchorage = 5] = "Anchorage" }(St || (St = {}));
            var At = function() {
                var e = window.runConfig,
                    a = e.gb_reportId,
                    t = e.gb_marginId_LosAngeles,
                    c = e.gb_bedOccupancyId_LosAngeles,
                    i = e.gb_patientExpId_LosAngeles,
                    l = e.gb_marginId_Anchorage,
                    s = e.gb_bedOccupancyId_Anchorage,
                    d = e.gb_patientExpId_Anchorage,
                    p = e.gb_marginId_Honolulu,
                    h = e.gb_bedOccupancyId_Honolulu,
                    g = e.gb_patientExpId_Honolulu,
                    f = e.gb_marginId_Miami,
                    b = e.gb_bedOccupancyId_Miami,
                    _ = e.gb_patientExpId_Miami,
                    E = e.gb_marginId_Chicago,
                    v = e.gb_bedOccupancyId_Chicago,
                    y = e.gb_patientExpId_Chicago,
                    w = e.BingMapKey,
                    N = Object(r.useState)("Anchorage"),
                    S = Object(m.a)(N, 2),
                    O = S[0],
                    C = S[1],
                    M = Object(r.useState)(!1),
                    I = Object(m.a)(M, 2),
                    k = I[0],
                    x = I[1],
                    P = Object(r.useState)(!1),
                    A = Object(m.a)(P, 2),
                    R = A[0],
                    D = A[1],
                    T = Object(r.useState)(!1),
                    B = Object(m.a)(T, 2),
                    V = B[0],
                    W = B[1],
                    q = Object(r.useState)(!1),
                    z = Object(m.a)(q, 2),
                    G = z[0],
                    U = z[1],
                    J = Object(r.useState)(!1),
                    Z = Object(m.a)(J, 2),
                    Q = Z[0],
                    Y = Z[1],
                    X = Object(r.useState)(""),
                    $ = Object(m.a)(X, 2),
                    ee = $[0],
                    ae = $[1],
                    te = Object(r.useState)(d),
                    ne = Object(m.a)(te, 2),
                    ce = ne[0],
                    re = ne[1],
                    oe = Object(r.useState)(l),
                    ie = Object(m.a)(oe, 2),
                    le = ie[0],
                    se = ie[1],
                    me = Object(r.useState)(s),
                    de = Object(m.a)(me, 2),
                    pe = de[0],
                    ue = de[1],
                    he = a,
                    ge = K,
                    fe = [{ eventName: "click", callback: function(e) { be(e.target.element.firstChild.id) } }];

                function be(e) {
                    var a = "";
                    switch (e) {
                        case "Chicago":
                            a = "Chicago", se(E), ue(v), re(y), ae(a);
                            break;
                        case "Miami":
                            a = "Miami", se(f), ue(b), re(_), ae(a);
                            break;
                        case "LosAngeles":
                            a = "Los Angeles", se(t), ue(c), re(i), ae(a);
                            break;
                        case "Honolulu":
                            a = "Honolulu", se(p), ue(h), re(g), ae(a);
                            break;
                        case "Anchorage":
                            a = "Achorage", se(l), ue(s), re(d), ae(a);
                            break;
                        default:
                            return
                    }
                    ge.setFilter(ce, { table: "Readmission", column: "city", value: a }), ge.setFilter(pe, { table: "Bed Occupancy", column: "CityName", value: a }), ge.setFilter(le, { table: "Margin rate", column: "city", value: a })
                }
                return Object(r.useEffect)((function() { G || (U(!0), ge.load(he, { type: F.Report, elementId: ce, height: 120, width: 375, pageName: ce, onRendered: function() { x(!0) } }), ge.load(he, { type: F.Report, elementId: le, height: 120, width: 375, pageName: le, onRendered: function() { D(!0) } }), ge.load(he, { type: F.Report, elementId: pe, height: 120, width: 375, pageName: pe, onRendered: function() { W(!0) } })) }), [G, ge]), Object(r.useEffect)((function() { R && k && V && be(O) }), [O, G, R, k, V, ge]), Object(r.useEffect)((function() { ge.load(he, { type: F.Report, elementId: ce, height: 120, width: 375, pageName: ce, onRendered: function() { x(!0) } }), ge.load(he, { type: F.Report, elementId: le, height: 120, width: 375, pageName: le, onRendered: function() { D(!0) } }), ge.load(he, { type: F.Report, elementId: pe, height: 120, width: 375, pageName: pe, onRendered: function() { W(!0) } }) }), [ee]), Object(r.useEffect)((function() {
                    Q || (setTimeout((function() {
                        var e = new window.Microsoft.Maps.Location(51.926247, -120.41319),
                            a = new window.Microsoft.Maps.Map("#bingMap", { credentials: w, center: e, zoom: 3.5, mapTypeId: window.Microsoft.Maps.MapTypeId.aerial, showZoomButtons: !1, showLocateMeButton: !1, showMapTypeSelector: !1, disableZooming: !0, disableScrollWheelZoom: !0 });
                        a.setOptions({ maxZoom: 12, minZoom: 2 });
                        var t = new window.Microsoft.Maps.Location(21.344379, -157.849915),
                            n = new window.Microsoft.Maps.Location(34.032281, -118.233599),
                            c = new window.Microsoft.Maps.Location(25.95428, -80.121659),
                            r = new window.Microsoft.Maps.Location(61.186749, -149.862427),
                            o = new window.Microsoft.Maps.Location(41.977097, -87.898468),
                            i = (new Microsoft.Maps.Point(45, 105), [new Microsoft.Maps.Pushpin(t, { icon: "".concat(u, "pin_Honolulu.png"), anchor: new Microsoft.Maps.Point(300, 120) }), new Microsoft.Maps.Pushpin(c, { icon: "".concat(u, "pin_Miami.png"), anchor: new Microsoft.Maps.Point(55, 105) }), new Microsoft.Maps.Pushpin(n, { icon: "".concat(u, "pin_LosAngeles.png"), anchor: new Microsoft.Maps.Point(290, 135) }), new Microsoft.Maps.Pushpin(r, { icon: "".concat(u, "pin_Anchorage.png"), anchor: new Microsoft.Maps.Point(250, 25) }), new Microsoft.Maps.Pushpin(o, { icon: "".concat(u, "pin_Chicago.png"), anchor: new Microsoft.Maps.Point(45, 105) })]);
                        a.entities.add(i), Microsoft.Maps.Events.addHandler(i[0], "click", (function() { return C("Honolulu") })), Microsoft.Maps.Events.addHandler(i[1], "click", (function() { return C("Miami") })), Microsoft.Maps.Events.addHandler(i[2], "click", (function() { return C("LosAngeles") })), Microsoft.Maps.Events.addHandler(i[3], "click", (function() { return C("Anchorage") })), Microsoft.Maps.Events.addHandler(i[4], "click", (function() { return C("Chicago") }))
                    }), 500), Y(!0))
                }), [Q]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement("div", { id: "scalable-wrapper", className: "content-container" }, o.a.createElement("div", { id: "content", className: "content" }, o.a.createElement(j, { type: n.GlobalBing }), o.a.createElement(H, { type: n.GlobalBing }), o.a.createElement("img", { src: "".concat(u, "shade_overlay.png"), alt: "/shade_overlay.png", className: ht.a["map-shadow"] }), o.a.createElement(gt.c, null, o.a.createElement("div", { className: ht.a.map }, o.a.createElement(gt.a, { options: xt, controls: Pt }, o.a.createElement(gt.b, { id: "Honolulu", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Honolulu" }, o.a.createElement("img", { src: "".concat(u, "pin_Honolulu.png") })), options: Ct, events: fe }), o.a.createElement(gt.b, { id: "Miami", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Miami" }, o.a.createElement("img", { src: "".concat(u, "pin_Miami.png") })), options: jt, events: fe }), o.a.createElement(gt.b, { id: "LosAngeles", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "LosAngeles" }, o.a.createElement("img", { src: "".concat(u, "pin_LosAngeles.png") })), options: Mt, events: fe }), o.a.createElement(gt.b, { id: "Anchorage", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Anchorage" }, o.a.createElement("img", { src: "".concat(u, "pin_Anchorage.png") })), options: It, events: fe }), o.a.createElement(gt.b, { id: "Chicago", markerContent: o.a.createElement("div", { className: "pulseIcon", id: "Chicago" }, o.a.createElement("img", { src: "".concat(u, "pin_Chicago.png") })), options: kt, events: fe })))), o.a.createElement("img", { className: "background ".concat(ht.a["global-page-background"]), src: "".concat(u, "dash_overlay.png"), alt: "", id: "shade-overlay" }), o.a.createElement("a", { href: "#/afterdashboard", className: ht.a.tile }, o.a.createElement("img", { src: "".concat(u, "Arrow-19.png"), alt: "Link to Accident Search" })), o.a.createElement("div", { id: ce, className: "report ".concat(ht.a.report, " ").concat(ht.a.availability, " show"), style: { width: "375px", height: "120px" } }), o.a.createElement("div", { id: pe, style: { width: "375px", height: "120px" }, className: "report ".concat(ht.a.report, " ").concat(ht.a.performance, " show") }), o.a.createElement("div", { id: le, style: { width: "375px", height: "120px" }, className: "report ".concat(ht.a.report, " ").concat(ht.a.quality, " show") }))))
            };
            var Rt = function() {
                var e = Object(r.useState)(!1),
                    a = Object(m.a)(e, 2),
                    t = a[0],
                    c = a[1],
                    i = "0d912882-a263-46fe-8e2b-86702b8b674b",
                    l = K;
                return Object(r.useEffect)((function() { if (!t) { c(!0); try { l.load(i, { type: F.Report, elementId: i, height: 1280, width: 1920, pageName: "ReportSection01004f62b9c010350168" }) } catch (e) { c(!1) } } }), [t, l]), o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.PredictiveAnalyticsReport }), o.a.createElement(H, { type: n.PredictiveAnalyticsReport }), o.a.createElement("a", { href: "#/formrecognizer", className: ye.a.gotoFormRecog }, o.a.createElement("div", { className: ye.a.arrow }, o.a.createElement("img", { src: "".concat(u, "Arrow-23.png") }))), o.a.createElement("div", { id: i, className: ba.a.pwer + " dashboard", style: { width: "calc(100% - 48px)", height: "calc(100% - 54px)" } }))
            };
            va.pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(va.pdfjs.version, "/pdf.worker.js");
            var Dt = function() {
                var e = window.runConfig,
                    a = (e.PDFBaseLink, e.powerAppsSrc, window.runConfig.PSBeforeDashBoard_ID),
                    t = Object(r.useState)(!1),
                    c = Object(m.a)(t, 2),
                    i = c[0],
                    l = c[1],
                    s = Object(r.useState)(!1),
                    d = Object(m.a)(s, 2),
                    p = d[0],
                    h = d[1],
                    g = a,
                    f = K;
                return Object(r.useEffect)((function() { l(!0); try { f.load(g, { type: F.Report, elementId: g, height: 500, width: 1920 }) } catch (e) { l(!1) } }), [i, f, p]), o.a.createElement("div", { className: ye.a.frecogbg }, o.a.createElement(L, null), o.a.createElement(j, { type: n.HospitalIncidentInsights }), o.a.createElement(H, { type: n.HospitalIncidentInsights }), o.a.createElement("div", { id: "", className: "" }, o.a.createElement("div", { style: { padding: "80px 40px 20px 80px" } }, o.a.createElement(Ea.d, { onSelect: function() { return h(!p) } }, o.a.createElement(Ea.b, null, o.a.createElement(Ea.a, null, "Incident Report"), o.a.createElement(Ea.a, null, "Handwritten Form"), o.a.createElement(Ea.a, null, "Translated Form"), o.a.createElement(Ea.a, null, "Image Form"), o.a.createElement(Ea.a, null, "Incident Form Search")), o.a.createElement(Ea.c, null, o.a.createElement("div", { id: g, className: Fa.a.finance23 + " dashboard", style: { left: "10px", width: "calc(100%)", height: "800px" } })), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: "row", style: { marginTop: "20px" } }, o.a.createElement("div", { className: "col-5" }, o.a.createElement("img", { className: "img-fluid", src: "".concat(u, "handwritten-form.jpg") })), o.a.createElement("div", { className: "col-7", style: { backgroundColor: "#001b2e", padding: "30px", color: "white" } }, o.a.createElement("h3", null, "JSON"), o.a.createElement("code", { style: { color: "white" } }, "{", o.a.createElement("br", null), '"Nature": "Herniated discs",', o.a.createElement("br", null), '"EventDate": "9/5/2019",', o.a.createElement("br", null), '"Employer": "Contoso Healthcare",', o.a.createElement("br", null), '"Hospitalized": "1",', o.a.createElement("br", null), '"ID": "202046142",', o.a.createElement("br", null), '"Source": "Patient",', o.a.createElement("br", null), '"FinalNarrative": "An employee sustained a herniated disc in her back while transferring a patient.",', o.a.createElement("br", null), '"Location": "Honolulu",', o.a.createElement("br", null), '"Event": "Overexertion involving outside sources",', o.a.createElement("br", null), '"Amputation": "O",', o.a.createElement("br", null), '"PartofBody": "Back,spinal cord"', o.a.createElement("br", null), "}", o.a.createElement("br", null))))), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: "row", style: { marginTop: "20px" } }, o.a.createElement("div", { className: "col-5" }, o.a.createElement("img", { className: "img-fluid", src: "".concat(u, "translated-form.jpg") })), o.a.createElement("div", { className: "col-7", style: { backgroundColor: "#001b2e", padding: "30px", color: "white" } }, o.a.createElement("h3", null, "JSON"), o.a.createElement("code", { style: { color: "white" } }, "{", o.a.createElement("br", null), '"ID": "212146076",', o.a.createElement("br", null), '"Location": "Honolulu",', o.a.createElement("br", null), '"Source": "Nonclassifiable",', o.a.createElement("br", null), '"Event Date": "",', o.a.createElement("br", null), '"Hospitalizated": "1",', o.a.createElement("br", null), '"Amputation": "0",', o.a.createElement("br", null), '"Nature": "Anaphylactic shock, anaphylaxis",', o.a.createElement("br", null), '"Event": "Exposure to other harmful substances, unspecified",', o.a.createElement("br", null), '"Hospital": "Contoso Healthcare",', o.a.createElement("br", null), '"PartofBodyTitle": "BODY SYSTEMS",', o.a.createElement("br", null), '"Final Narrative": "An employee experienced anaphylactic shock while completing intake forms on a patient in the emergency room, requiring hospitalization."', o.a.createElement("br", null), "}", o.a.createElement("br", null))))), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: "row", style: { marginTop: "20px" } }, o.a.createElement("div", { className: "col-5" }, o.a.createElement("img", { src: "".concat(u, "image-form.jpg"), className: "img-fluid" })), o.a.createElement("div", { className: "col-7", style: { backgroundColor: "#001b2e", padding: "30px", color: "white" } }, o.a.createElement("h3", null, "JSON"), o.a.createElement("code", { style: { color: "white" } }, "{", o.a.createElement("br", null), '"ID": "202046164",', o.a.createElement("br", null), '"EventDate": "9/25/2019",', o.a.createElement("br", null), '"Employer": "Contoso HealthCare",', o.a.createElement("br", null), '"Location": "Honolulu",', o.a.createElement("br", null), '"Hospitalizated": "1",', o.a.createElement("br", null), '"Amputation": "0",', o.a.createElement("br", null), '"NatureTitle": "Hernia",', o.a.createElement("br", null), '"PartofBodyTitle": "Abdomen, except internal location of diseases or disorders",', o.a.createElement("br", null), '"EventTitle": "Overexertion involving outside sources, unspecified",', o.a.createElement("br", null), '"SourceTilte": "Patient",', o.a.createElement("br", null), '"Final Narrative": "An employee was moving a patient when he felt a pop and burning in his abdomen, followed by stomach pain. He was hospitalized with an umbilical hernia."', o.a.createElement("br", null), "}", o.a.createElement("br", null))))), o.a.createElement(Ea.c, null, o.a.createElement("div", { className: "row" }, o.a.createElement("iframe", { className: ye.a.incidentSearch + " dashboard incidentSearchCover", style: { width: "calc(100% - 48px)", height: "100% !important", minHeight: "100vh", marginTop: "10px" }, src: "/incident-search.html" })))))))
            };
            var Ht = function() { var e = Object(h.d)(); return o.a.createElement("div", null, o.a.createElement(L, null), o.a.createElement(j, { type: n.disclaimer }), o.a.createElement(H, { type: n.disclaimer }), o.a.createElement("div", { className: "text-center" }, o.a.createElement("img", { src: "".concat(u, "legal-disclaimer.png"), alt: "/disclaimer", className: "rounded", style: { marginLeft: "10%", marginTop: "100px", marginRight: "10%" } })), o.a.createElement("a", { className: ye.a.arrowTopRight }, o.a.createElement("div", { className: ye.a.arrow, onClick: function() { console.log("disclaimer called"), e(y()) } }, o.a.createElement("img", { src: "".concat(u, "Arrow-1.png"), alt: "Link to Disclaimer" })))) };
            var Lt = function() { return o.a.createElement("div", { className: "page-container" }, o.a.createElement(L, null), o.a.createElement(j, { type: n.IncidentSearch }), o.a.createElement(H, { type: n.IncidentSearch }), o.a.createElement("a", { href: "#/single-patient", className: ha.a.gotoAccidentSearch }, o.a.createElement("img", { src: "".concat(u, "Arrow-16.png"), alt: "Link to Accident Search" })), o.a.createElement("iframe", { className: ha.a.incidentSearch + " dashboard incidentSearchCover", style: { width: "calc(100% - 48px)", height: "100% !important", marginTop: "10px" }, src: "https://appcognitivesearchprod.azurewebsites.net/home/index?q=cough,fever" })) },
                Tt = { login: v, setMobile: ca };
            var Ft = Object(h.c)((function(e) { return e }), Tt)((function(e) {
                Object(c.a)(e);
                var a = window.runConfig,
                    t = a.PSSqlDashboardBefore_ID,
                    r = a.PSSqlDashboardDuring_ID,
                    i = a.PSSqlDashboardAfter_ID;
                return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= 900 && ca(), o.a.createElement(ea.a, { history: la }, o.a.createElement(s.d, null, o.a.createElement(s.a, { exact: !0, from: "/", to: "/login" }), o.a.createElement(s.b, { exact: !0, path: "/miami", render: function() { return o.a.createElement(B, null) } }), o.a.createElement(s.b, { exact: !0, path: "/MiamiMap", render: function() { return o.a.createElement(T, null) } }), o.a.createElement(s.b, { exact: !0, path: "/MiamiVideo", render: function() { return o.a.createElement(xe, { type: n.MiamiVideo, video: Ce.MiamiVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/hospital-operations", render: function() { return o.a.createElement(be, null) } }), o.a.createElement(s.b, { exact: !0, path: "/machine", render: function() { return o.a.createElement(Be, null) } }), o.a.createElement(s.b, { exact: !0, path: "/diagram", render: function() { return o.a.createElement(Ye, null) } }), o.a.createElement(s.b, { exact: !0, path: "/sqlDiagram", render: function() { return o.a.createElement(ze, null) } }), o.a.createElement(s.b, { exact: !0, path: "/global-bing", render: function() { return o.a.createElement(Ot, null) } }), o.a.createElement(s.b, { exact: !0, path: "/global-bing1", render: function() { return o.a.createElement(At, null) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlDiagram", render: function() { return o.a.createElement(Ze, null) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlDashboardBefore", render: function() { return o.a.createElement(Ba, { dashboardId: t, type: n.PSSqlDashboardBefore }) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlDashboardDuring", render: function() { return o.a.createElement(Qa, { dashboardId: r, type: n.PSSqlDashboardDuring }) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlDashboardAfter", render: function() { return o.a.createElement(za, { dashboardId: i, type: n.PSSqlDashboardAfter }) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlRetailMap", render: function() { return o.a.createElement(La, null) } }), o.a.createElement(s.b, { exact: !0, path: "/login", render: function() { return o.a.createElement(Me, null) } }), o.a.createElement(s.b, { exact: !0, path: "/campaign-report", render: function() { return o.a.createElement(s.a, { to: "/predictive-analytics-report" }) } }), o.a.createElement(s.b, { exact: !0, path: "/field", render: function() { return o.a.createElement(xe, { type: n.Field, video: Ce.HololensVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/racetrack", render: function() { return o.a.createElement(xe, { type: n.RaceTrackVideo, video: Ce.MiamiVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/iaasVideo", render: function() { return o.a.createElement(xe, { type: n.IaasVideo, video: Ce.IaasVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/hololens-healthcare", render: function() { return o.a.createElement(xe, { type: n.HololensVideo, video: Ce.HololensVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/honolulu-healthcare", render: function() { return o.a.createElement(xe, { type: n.HonoluluVideo, video: Ce.HonoluluVideo }) } }), o.a.createElement(s.b, { exact: !0, path: "/postgreSqlVideo", render: function() { return o.a.createElement(xe, { type: n.PSSQLVideo, video: Ce.PostgreSQL }) } }), o.a.createElement(s.b, { exact: !0, path: "/hospitalinsights", render: function() { return o.a.createElement(we, null) } }), o.a.createElement(s.b, { exact: !0, path: "/powerApps", render: function() { return o.a.createElement(pa, null) } }), o.a.createElement(s.b, { exact: !0, path: "/afterdashboard", render: function() { return o.a.createElement(rt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/afterdashboard1", render: function() { return o.a.createElement(ot, null) } }), o.a.createElement(s.b, { exact: !0, path: "/afterdashboard2", render: function() { return o.a.createElement(it, null) } }), o.a.createElement(s.b, { exact: !0, path: "/afterdashboard3", render: function() { return o.a.createElement(lt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/campaignreport", render: function() { return o.a.createElement(ct, null) } }), o.a.createElement(s.b, { exact: !0, path: "/covid-search", render: function() { return o.a.createElement(ga, { showArr: !1 }) } }), o.a.createElement(s.b, { exact: !0, path: "/covid-search-page", render: function() { return o.a.createElement(Lt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/covid-search-page", render: function() { return o.a.createElement(ga, { showArr: !0 }) } }), o.a.createElement(s.b, { exact: !0, path: "/globalsafetydashboard", render: function() { return o.a.createElement(_a, null) } }), o.a.createElement(s.b, { exact: !0, path: "/formrecognizer", render: function() { return o.a.createElement(ya, null) } }), o.a.createElement(s.b, { exact: !0, path: "/hospital-incident-insights", render: function() { return o.a.createElement(Dt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/operational-analytics", render: function() { return o.a.createElement(at, null) } }), o.a.createElement(s.b, { exact: !0, path: "/healthcare-analytics", render: function() { return o.a.createElement(tt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/hospital-incident", render: function() { return o.a.createElement(nt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/healthcare", render: function() { return o.a.createElement(Sa, null) } }), o.a.createElement(s.b, { exact: !0, path: "/predictive-analytics-report", render: function() { return o.a.createElement(Rt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/healthcare", render: function() { return o.a.createElement(Sa, { override: !0 }) } }), o.a.createElement(s.b, { exact: !0, path: "/single-patient", render: function() { return o.a.createElement(le, null) } }), o.a.createElement(s.b, { exact: !0, path: "/sales-and-campaign-report-pre", render: function() { return o.a.createElement(et, { type: n.SalesCampaignReportPreMigration }) } }), o.a.createElement(s.b, { exact: !0, path: "/port-postsales-and-campaign-re", render: function() { return o.a.createElement($a, { type: n.SalesCampaignReportPostMigration }) } }), o.a.createElement(s.b, { exact: !0, path: "/hospital-insights", render: function() { return o.a.createElement($a, { type: n.Globalsafetydashboard }) } }), o.a.createElement(s.b, { exact: !0, path: "/us-map", render: function() { return o.a.createElement(pt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/embedded-postgressql-before", render: function() { return o.a.createElement(qa, null) } }), o.a.createElement(s.b, { exact: !0, path: "/embedded-postgressql-after", render: function() { return o.a.createElement(Ga, null) } }), o.a.createElement(s.b, { exact: !0, path: "/embedded-postgressql-during", render: function() { return o.a.createElement(Ka, null) } }), o.a.createElement(s.b, { exact: !0, path: "/ps-after-dashboard", render: function() { return o.a.createElement(rt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/safety-report", render: function() { return o.a.createElement(st, null) } }), o.a.createElement(s.b, { exact: !0, path: "/ps-during-dashboard", render: function() { return o.a.createElement(mt, null) } }), o.a.createElement(s.b, { exact: !0, path: "/disclaimer", render: function() { return o.a.createElement(Ht, null) } })))
            }));
            l.a.render(o.a.createElement(o.a.StrictMode, null, o.a.createElement(h.a, { store: sa }, o.a.createElement(Ft, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() })).catch((function(e) { console.error(e.message) }))
        },
        19: function(e, a, t) { e.exports = { factoryAnimation: "Factory_factoryAnimation__3fTJ7", videoContainer: "Factory_videoContainer__Hlskx", videoContainer1: "Factory_videoContainer1__TEats", video: "Factory_video__ZSSb0", popup: "Factory_popup__2cJ1l", showMap: "Factory_showMap__1_ZZ7", alertMachine: "Factory_alertMachine__35LjO", alertMachine1: "Factory_alertMachine1__2B3cy", alertMachine14: "Factory_alertMachine14__3HMwt", production: "Factory_production__2Qwck", spo2: "Factory_spo2__3RCkt", spo23: "Factory_spo23__3DJy0", energyMaintenance: "Factory_energyMaintenance__1WNDv", oee: "Factory_oee__2-wbc", downtime: "Factory_downtime__3l01Q", heartrate: "Factory_heartrate__3xPbb", heartrate2: "Factory_heartrate2__3bVr5", systolic: "Factory_systolic__2zSFH", systolic2: "Factory_systolic2__1Ncsq", overview: "Factory_overview__1DxpD", alert: "Factory_alert__lALhn", alertContainer: "Factory_alertContainer__2zfzK", middleItem: "Factory_middleItem__1FWKP", leftItem: "Factory_leftItem__2DSWS", alertItem: "Factory_alertItem__1O19N", lastItem: "Factory_lastItem__1KoI6", switchBlock: "Factory_switchBlock__MpXsN", switchMiniMapBtn: "Factory_switchMiniMapBtn__2gIhG", switchMiniMapIcon: "Factory_switchMiniMapIcon__2rU_W", switchMiniMapTooltip: "Factory_switchMiniMapTooltip__UgYwk", active: "Factory_active__3tuJr" } },
        2: function(e, a, t) { e.exports = { machine: "Machine_machine__3SotI", machinePageContainer: "Machine_machinePageContainer__21GgW", grid: "Machine_grid__3UZF0", pageTitle: "Machine_pageTitle__2e5FU", subPageTitle: "Machine_subPageTitle__3hoLS", titleArea: "Machine_titleArea__3FF-W", assetArea: "Machine_assetArea__iqqJs", innerGridAlertsAreaTemperatureArea: "Machine_innerGridAlertsAreaTemperatureArea__1VFEc", liveFeedArea: "Machine_liveFeedArea__BqZnn", overviewArea: "Machine_overviewArea__kJU83", jobAxesMovementArea: "Machine_jobAxesMovementArea__SBh-z", machineVibrationArea: "Machine_machineVibrationArea__2Z5Rd", maintenanceSchedulingArea: "Machine_maintenanceSchedulingArea__1jWov", volumeController: "Machine_volumeController__1Qai4", videoContainer: "Machine_videoContainer__66ucH", "machine-video": "Machine_machine-video__2vET5", liveFeedTitle: "Machine_liveFeedTitle__3DEmi", popupContentContainer: "Machine_popupContentContainer__2AKOq", popupContent: "Machine_popupContent__2CKQi", popupContent2: "Machine_popupContent2__9UdX0", popupContent1: "Machine_popupContent1__17dSv", stretch: "Machine_stretch__39K4L", popup: "Machine_popup__3U5RG", mute: "Machine_mute__8g0Ex", vol: "Machine_vol__2h-Wd", volUp: "Machine_volUp__1DKEA", cardInnerContainer: "Machine_cardInnerContainer__3c5n1", cardInnerItem: "Machine_cardInnerItem__2Pkyw", overviewItem: "Machine_overviewItem__2E9U6", buttons: "Machine_buttons__1SKfN", button: "Machine_button__22cLW", selected: "Machine_selected__2-UEK", offLoad: "Machine_offLoad__ZoWGu", show: "Machine_show__2M48n", hide: "Machine_hide__1SR3V", predMainText: "Machine_predMainText__2oVld", maintenanceDescription: "Machine_maintenanceDescription__1ZEpy", customLineHeight: "Machine_customLineHeight__1-PiC", red: "Machine_red__2vaXT", orange: "Machine_orange__25HCu", predictiveMaintenanceOverlayButton: "Machine_predictiveMaintenanceOverlayButton__2icKK", machineImageDevice: "Machine_machineImageDevice__1jY7q", assetButtonContainer: "Machine_assetButtonContainer__19FAY", assetButtonItem: "Machine_assetButtonItem__3Z-2a", NavigationButton: "Machine_NavigationButton__2R0fW" } },
        20: function(e, a, t) { e.exports = { background: "Diagram_background__13rRE", diagramContainer: "Diagram_diagramContainer__3fu1t", diagram: "Diagram_diagram__3Tlx-", buttons: "Diagram_buttons__1VAem", button: "Diagram_button__3dbpv", selected: "Diagram_selected__UDzLO" } },
        23: function(e, a, t) { e.exports = { alertMachine: "factory-popup_alertMachine__4ojRz", alertMachine144: "factory-popup_alertMachine144__qNOxE", mapContainer: "factory-popup_mapContainer__1K7vG", content: "factory-popup_content__29Zbn", animation: "factory-popup_animation__1du7w", volumeController: "factory-popup_volumeController__1p6SC", buttons: "factory-popup_buttons__3RQc8", button: "factory-popup_button__3Tt1s", selected: "factory-popup_selected__3vfZY" } },
        31: function(e, a, t) { e.exports = { pwer: "GlobalSafetyDashboard_pwer__mCXqA", financeCover: "GlobalSafetyDashboard_financeCover__3JMe1" } },
        32: function(e, a, t) { e.exports = { cover: "popup_cover__3thJh", cover1: "popup_cover1__2M-Ek", banner: "popup_banner__1fobQ", popup: "popup_popup__1SGDg", popup1: "popup_popup1__nrwvB", dismiss: "popup_dismiss__2PCnz", button: "popup_button__3MCBh" } },
        33: function(e, a, t) { e.exports = { background: "SqlDiagram_background__2rRUm", diagramContainer: "SqlDiagram_diagramContainer__1n3D8", diagram: "SqlDiagram_diagram__13-mR", buttons: "SqlDiagram_buttons__LQ6JC", button: "SqlDiagram_button__Waxn3", selected: "SqlDiagram_selected__HasSW" } },
        34: function(e, a, t) { e.exports = { background: "PostgreSqlDiagram_background__36R1h", diagramContainer: "PostgreSqlDiagram_diagramContainer__3cxan", diagram: "PostgreSqlDiagram_diagram__wsgHp", buttons: "PostgreSqlDiagram_buttons__2TkeU", button: "PostgreSqlDiagram_button__10Wzl", selected: "PostgreSqlDiagram_selected__3JIze" } },
        44: function(e, a, t) { e.exports = { header: "header_header__2No1P", logo: "header_logo__QPLQ2", button: "header_button__3kjbF", right: "header_right__3aEwk", persona: "header_persona__qWyCG", disabled: "header_disabled__1__ZE", searchbox: "header_searchbox__3sViy" } },
        6: function(e, a, t) { e.exports = { background: "PostgreSqlRetailMap_background__3KSxj", buttons: "PostgreSqlRetailMap_buttons__JR1I_", button: "PostgreSqlRetailMap_button__34j5E", popup: "PostgreSqlRetailMap_popup__JEKUZ", launchBtn: "PostgreSqlRetailMap_launchBtn__2QpAg", modalBackground: "PostgreSqlRetailMap_modalBackground__RkQrM", popup_Container: "PostgreSqlRetailMap_popup_Container__1ylel", form_Container: "PostgreSqlRetailMap_form_Container__28RNJ", form_Row: "PostgreSqlRetailMap_form_Row__2IDs-", form_label: "PostgreSqlRetailMap_form_label__81Hg0", form_input: "PostgreSqlRetailMap_form_input__3MWp1", form_button_launch: "PostgreSqlRetailMap_form_button_launch__3aw6Z", tableResponsive: "PostgreSqlRetailMap_tableResponsive__28hQa", table: "PostgreSqlRetailMap_table__1wkdh" } },
        60: function(e, a, t) { e.exports = { finance: "EmbeddedCampaignDashboard_finance__1W0sk", financeCover: "EmbeddedCampaignDashboard_financeCover__rGVP7", background: "EmbeddedCampaignDashboard_background__13i--", example: "EmbeddedCampaignDashboard_example__3d_cF", diagramContainer: "EmbeddedCampaignDashboard_diagramContainer__3IEsL", diagram: "EmbeddedCampaignDashboard_diagram__1FW3X", gotToSafetyReport: "EmbeddedCampaignDashboard_gotToSafetyReport__1cLJt", arrow: "EmbeddedCampaignDashboard_arrow__1W27T" } },
        62: function(e, a, t) { e.exports = { loginBackground: "Login_loginBackground__3gPe7", button: "Login_button__2pVWJ", login: "Login_login__3YfVI", signup: "Login_signup__25MB3", input: "Login_input__SLN0T", dialogue: "Login_dialogue__3kNvK" } },
        67: function(e, a, t) { e.exports = { incidentSearch: "IncidentSearch_incidentSearch__1atnE", incidentSearchCover: "IncidentSearch_incidentSearchCover__Xan9c", gotoRio: "IncidentSearch_gotoRio__2VTyE", arrow: "IncidentSearch_arrow__2H7FJ", gotoGraphSearch: "IncidentSearch_gotoGraphSearch__3oIdw", gotoAccidentSearch: "IncidentSearch_gotoAccidentSearch__1cj0E", gotoAccidentSearch1: "IncidentSearch_gotoAccidentSearch1__2gSEZ", gotoAccidentSearch2: "IncidentSearch_gotoAccidentSearch2__F45aP" } },
        7: function(e, a, t) { e.exports = { nav: "navbar_nav__2h8fL", navImg: "navbar_navImg__2ISqd", children: "navbar_children__1Ol2g", button: "navbar_button__2n8cu", selected: "navbar_selected__3Ulcz", notSelected: "navbar_notSelected__2DYYp", alignTop: "navbar_alignTop__1Vhsg", titleContainer: "navbar_titleContainer__3ofcN", subMenu: "navbar_subMenu__3L19T", flipped: "navbar_flipped__f4o0S", navbarMenuTitle: "navbar_navbarMenuTitle__3tiXT", buttonHover: "navbar_buttonHover__2bwsS", expanded: "navbar_expanded__6Brh6" } },
        78: function(e, a, t) { e.exports = { leftCover: "PowerAppsReport_leftCover__2qy33", rightCover: "PowerAppsReport_rightCover__307OU", iframe: "PowerAppsReport_iframe__2ZaNE", title: "PowerAppsReport_title__3sePm", powerappbg: "PowerAppsReport_powerappbg__2TVdZ" } },
        8: function(e, a, t) { e.exports = { finance: "AfterDashboard_finance__10SWO", finance23: "AfterDashboard_finance23__EmmPD", financeCover: "AfterDashboard_financeCover__m8ydf", background: "AfterDashboard_background__2Gnz3", example: "AfterDashboard_example__VdzZh", diagramContainer: "AfterDashboard_diagramContainer__1Syoy", diagram: "AfterDashboard_diagram__55Ye0", gotToSafetyReport: "AfterDashboard_gotToSafetyReport__1KUsy", arrow: "AfterDashboard_arrow__6ET3_" } },
        80: function(e, a, t) { e.exports = { videoContainer: "Video_videoContainer__2W2y-", video: "Video_video__29Pp1" } },
        81: function(e, a, t) { e.exports = { card: "card_card__mUNTK", cardTitleContainer: "card_cardTitleContainer__2A4Yu", cardTitleBackground: "card_cardTitleBackground__2GAwt", text: "card_text__3ab1s" } },
        84: function(e, a) {
            function t(e) { var a = new Error("Cannot find module '" + e + "'"); throw a.code = "MODULE_NOT_FOUND", a }
            t.keys = function() { return [] }, t.resolve = t, e.exports = t, t.id = 84
        },
        9: function(e, a, t) { e.exports = { plane: "Miami_plane__3TV-6", animatedIcon: "Miami_animatedIcon__2hxu8", animatedIcon2: "Miami_animatedIcon2__-U06g", boat: "Miami_boat__guQ0_", pills: "Miami_pills__Df9vU", operation: "Miami_operation__3HIjT", ambulance: "Miami_ambulance__qezk_", kidney: "Miami_kidney__2OGro", lab: "Miami_lab__15pnf", consulting1: "Miami_consulting1__2kXfS", consulting2: "Miami_consulting2__2Xt1f", scanner: "Miami_scanner__LPoMG", heart2: "Miami_heart2__uginh", heart21: "Miami_heart21__2D9_u", dynamics: "Miami_dynamics__75q8x", dynamicspowerapp: "Miami_dynamicspowerapp__2ARa_", style10a: "Miami_style10a__C0_sd", style10b: "Miami_style10b__2YhBA", style10c: "Miami_style10c__2M4PN", dynamicsvid: "Miami_dynamicsvid__21p76", labresults: "Miami_labresults__2TUBG", f1: "Miami_f1__xVWxM", f2: "Miami_f2__1tlbT", car: "Miami_car__1bA3r", truck: "Miami_truck__1SLte", background: "Miami_background__2nR5Q", container: "Miami_container__1o9JA" } },
        93: function(e, a, t) { e.exports = { finance: "SalesCampaignReport_finance__3ZxyU", financeCover: "SalesCampaignReport_financeCover__3VvTd" } }
    },
    [
        [138, 1, 2]
    ]
]);
//# sourceMappingURL=main.afdadadd.chunk.js.map