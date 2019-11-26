// KISS' vendor.js.
//
// Sources:
// - GNU IceCat,
// - OpenBSD,
// - GHacks user.js
// - pyllyukko/user.js
// - anarcat/firefox-tmp
// - Debian

//
// STARTUP
//

pref("browser.newtab.preload", false);
pref("browser.newtabpage.directory.ping", "");
pref("browser.newtabpage.directory.source", "data:application/json,{}");
pref("browser.newtabpage.enabled", false);
pref("browser.newtabpage.enhanced", false);
pref("browser.newtabpage.introShown", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);

//
// GEO
//

pref("geo.enabled", false);
pref("geo.provider.use_gpsd", false);
pref("geo.wifi.uri", "");
pref("browser.search.geoip.url", "");
pref("browser.search.geoSpecificDefaults", false);
pref("browser.search.geoSpecificDefaults.url", "");

//
// LANGUAGE
//

pref("intl.accept_languages", "en-US, en");
pref("javascript.use_us_english_locale", true);
pref("intl.charset.fallback.override", "windows-1252");

//
// SILENT FIREFOX
//

pref("app.update.auto", false);
pref("app.update.enabled", false);
pref("browser.newtabbage.enabled", false);
pref("browser.search.update", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.htmlaboutaddons.recommendations.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.hybridContent.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.server_owner", "");
pref("toolkit.telemetry.geckoview.streaming", false);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("toolkit.telemetry.cachedClientID", "");
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.rejected", true);
pref("toolkit.telemetry.server", "");
pref("toolkit.telemetry.unifiedIsOptIn", false);
pref("toolkit.telemetry.prompted", 2);
pref("security.protectionspopup.recordEventTelemetry", false);
pref("security.identitypopup.recordEventTelemetry", false);
pref("privacy.trackingprotection.origin_telemetry.enabled", false);
pref("privacy.trackingprotection.pbmode.enabled", false);
pref("permissions.eventTelemetry.enabled", false);
pref("browser.urlbar.eventTelemetry.enabled", false);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.coverage.endpoint.base", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
pref("datareporting.policy.firstRunURL", "");
pref("startup.homepage_welcome_url.additional", "");
pref("browser.startup.firstrunSkipsHomepage", true);
pref("healthreport.uploadEnabled", false);
pref("social.toast-notifications.enabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
pref("network.http.referer.spoofSource", false);
pref("app.shield.optoutstudies.enabled", false);
pref("extensions.shield-recipe-client.enabled",	false);
pref("browser.discovery.enabled", false);
pref("breakpad.reportURL", "");
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.enabled", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("captivedetect.canonicalURL", "");
pref("network.captive-portal-service.enabled", false);
pref("network.connectivity-service.enabled", false);
pref("extensions.blocklist.enabled", false);
pref("privacy.announcements.enabled", false);
pref("browser.snippets.enabled", false);
pref("browser.snippets.syncPromo.enabled", false);
pref("browser.snippets.geoUrl", "http://127.0.0.1/");
pref("browser.snippets.updateUrl", "http://127.0.0.1/");
pref("browser.snippets.statsUrl", "http://127.0.0.1/");
pref("datareporting.policy.firstRunTime", 0);
pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
pref("browser.webapps.checkForUpdates", 0);
pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
pref("dom.flyweb.enabled", false);
pref("services.sync.autoconnect", false);
pref("services.sync.engine.addons", false);
pref("services.sync.engine.bookmarks", false);
pref("services.sync.engine.history", false);
pref("services.sync.engine.passwords", false);
pref("services.sync.engine.prefs", false);
pref("services.sync.engine.tabs", false);
pref("extensions.webservice.discoverURL", "");
pref("browser.shell.checkDefaultBrowser", false);
pref("shell.checkDefaultClient", false);
pref("browser.newtabpage.directory.source", 'data:application/json,{}');
pref("browser.urlbar.suggest.searches", false);
pref("geo.wifi.scan", false);
pref("dom.push.connection.enabled", false);
pref("extensions.update.url", "");
pref("extensions.update.background.url", "");
pref("extensions.blocklist.detailsURL", "");
pref("extensions.blocklist.itemURL", "");
pref("extensions.blocklist.url", "");
pref("extensions.hotfix.url", "");
pref("extensions.getAddons.get.url", "");
pref("extensions.getAddons.getWithPerformance.url", "");
pref("extensions.getAddons.search.browseURL", "");
pref("services.settings.server", "");
pref("datareporting.healthreport.documentServerURI", "");
pref("general.useragent.updates.enabled", false);
pref("general.useragent.updates.url", "");
pref("identity.fxaccounts.auth.uri", "");
pref("identity.fxaccounts.remote.root", "");
pref("identity.fxaccounts.skipDeviceRegistration", true);
pref("browser.translation.bing.authURL", "");
pref("browser.translation.bing.translateArrayURL", "");
pref("browser.translation.yandex.translateURLOverride", "");
pref("browser.translation.engine", "bing");
pref("browser.aboutHomeSnippets.updateUrl", "nonexistent://test");
pref("browser.newtabpage.activity-stream.default.sites", "");
pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
pref("browser.uitour.pinnedTabUrl", "");
pref("browser.uitour.url", "");
pref("browser.search.isUS", true);
pref("browser.search.countryCode", "US");
pref("browser.ping-centre.staging.endpoint", "");
pref("browser.ping-centre.production.endpoint", "");
pref("browser.contentblocking.report.monitor.sign_in_url", "");
pref("browser.contentblocking.report.monitor.url", "");
pref("identity.fxaccounts.service.monitorLoginUrl", "");
pref("network.trr.resolvers", "");
pref("network.trr.uri", "");
pref("security.certerrors.mitm.priming.endpoint", "");
pref("signon.management.page.breachAlertUrl", "");
pref("network.connectivity-service.IPv4.url", "");
pref("network.connectivity-service.IPv6.url", "");
pref("accessibility.support.url", "");
pref("app.feedback.baseURL", "");
pref("app.normandy.shieldLearnMoreUrl", "");
pref("app.update.url", "");
pref("browser.chrome.errorReporter.infoURL", "");
pref("browser.contentblocking.report.cookie.url", "");
pref("browser.dictionaries.download.url", "");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportURL", "");
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportURL", "");
pref("browser.safebrowsing.reportPhishURL", "");
pref("devtools.devices.url", "");
pref("devtools.performance.recording.ui-base-url", "");
pref("devtools.webide.templatesURL", "");
pref("extensions.getAddons.compatOverides.url", "");
pref("extensions.getAddons.discovery.api_url", "");
pref("extensions.getAddons.langpacks.url", "");
pref("extensions.recommendations.themeRecommendationUrl", "");
pref("gecko.handlerService.schemes.webcal.0.name", "");
pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
pref("gecko.handlerService.schemes.irc.0.name", "");
pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
pref("media.gmp-manager.url", "");

// Firefox connects to cloudfront on startup unless
// these are false/blank.
pref("browser.selfsupport.url",	"");

//
// "SAFE" BROWSING
//

pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("privacy.trackingprotection.introURL", "");

//
// EXPERIMENTS
//

pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("app.normandy.user_id", "");
pref("extensions.systemAddon.update.url", "");
pref("browser.ping-centre.telemetry", false);
pref("extensions.screenshots.disabled", true);
pref("extensions.screenshots.upload-disabled", true);
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.available", "off");
pref("extensions.formautofill.creditCards.enabled", false);
pref("extensions.formautofill.heuristics.enabled", false);
pref("extensions.webcompat-reporter.enabled", false);
pref("experiments.supported", false);
pref("experiments.enabled",	false);
pref("experiments.manifest.uri", "");
pref("network.allow-experiments", false);
pref("privacy.trackingprotection.enabled", false);

//
// IMPLICIT OUTBOUND CONNECTIONS
//

pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.http.keep-alive.timeout",	15);
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
pref("network.http.speculative-parallel-limit", 0);
pref("browser.startup.page", 0);
pref("browser.send_pings", false);
pref("browser.send_pings.require_same_host", true);
pref("network.dns.blockDotOnion", true);
pref("browser.casting.enabled",	false);

//
// PROTOCOLS
//

pref("network.dns.disableIPv6", true);
pref("network.http.altsvc.enabled", false);
pref("network.http.altsvc.oe", false);
pref("network.proxy.socks_remote_dns", true);
pref("network.trr.mode", 5);
pref("network.file.disable_unc_paths", true);
pref("network.gio.supported-protocols", "");
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);
pref("network.protocol-handler.warn-external-default", true);
pref("network.protocol-handler.external.http", false);
pref("network.protocol-handler.external.https",	false);
pref("network.protocol-handler.external.javascript",false);
pref("network.protocol-handler.external.moz-extension",	false);
pref("network.protocol-handler.external.ftp", false);
pref("network.protocol-handler.external.file", false);
pref("network.protocol-handler.external.about",	false);
pref("network.protocol-handler.external.chrome", false);
pref("network.protocol-handler.external.blob", false);
pref("network.protocol-handler.external.data", false);
pref("network.protocol-handler.expose-all",	false);
pref("network.protocol-handler.expose.http", true);
pref("network.protocol-handler.expose.https", true);
pref("network.protocol-handler.expose.javascript", true);
pref("network.protocol-handler.expose.moz-extension", true);
pref("network.protocol-handler.expose.ftp",	true);
pref("network.protocol-handler.expose.file", true);
pref("network.protocol-handler.expose.about", true);
pref("network.protocol-handler.expose.chrome", true);
pref("network.protocol-handler.expose.blob", true);
pref("network.protocol-handler.expose.data", true);

//
// SEARCH / AUTOFILL / FORMS
//

pref("browser.fixup.alternate.enabled", false);
pref("browser.urlbar.trimURLs", false);
pref("browser.sessionhistory.max_entries", 10);
pref("layout.css.visited_links_enabled", false);
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("browser.formfill.enable", false);
pref("browser.taskbar.lists.enabled", false);
pref("browser.taskbar.lists.frequent.enabled", false);
pref("browser.taskbar.lists.recent.enabled", false);
pref("browser.taskbar.lists.tasks.enabled", false);
pref("browser.taskbar.previews.enable", false);

//
// PASSWORDS
//

pref("signon.autofillForms", false);
pref("signon.formlessCapture.enabled", false);
pref("network.auth.subresource-http-auth-allow", 1);

//
// CACHE
//

pref("browser.cache.disk.enable", false);
pref("browser.sessionstore.privacy_level", 2);
pref("browser.sessionstore.interval", 30000);
pref("toolkit.winRegisterApplicationRestart", false);
pref("browser.shell.shortcutFavicons", false);
pref("alerts.showFavicons", false);

//
// CIPHERS
//

pref("security.ssl.require_safe_negotiation", true);
pref("security.ssl.disable_session_identifiers", true);
pref("security.ssl.errorReporting.automatic", false);
pref("security.tls.enable_0rtt_data", false);
pref("security.ssl.enable_ocsp_stapling", true);
pref("security.OCSP.enabled", 1);
pref("security.OCSP.require", true);
pref("security.pki.sha1_enforcement_level", 1);
pref("security.family_safety.mode", 0);
pref("security.cert_pinning.enforcement_level", 2);
pref("security.ssl.errorReporting.enabled", false);
pref("security.ssl.errorReporting.url", "");
pref("security.mixed_content.block_active_content", true);
pref("security.mixed_content.block_display_content", true);
pref("security.mixed_content.block_object_subrequest", true);
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
pref("browser.ssl_override_behavior", 1);
pref("browser.xul.error_pages.expert_bad_cert", true);
pref("security.insecure_connection_icon.enabled", true);
pref("security.insecure_connection_text.enabled", true);
pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
pref("security.ssl3.rsa_rc4_128_md5", false);
pref("security.ssl3.rsa_rc4_128_sha", false);
pref("security.tls.version.min", 1);
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", false);

//
// FONTS
//

pref("gfx.font_rendering.opentype_svg.enabled", false);
pref("gfx.font_rendering.graphite.enabled", false);

//
// HEADERS / REFERERS
//

pref("network.http.referer.XOriginPolicy", 2);
pref("network.http.referer.XOriginTrimmingPolicy", 0);
pref("network.http.referer.hideOnionSource", true);
pref("privacy.donottrackheader.enabled", true);

//
// CONTAINERS
//

pref("privacy.userContext.ui.enabled", true);
pref("privacy.userContext.enabled", true);
pref("privacy.usercontext.about_newtab_segregation.enabled", true);
pref("privacy.userContext.longPressBehavior", 2);

//
// PLUGINS
//

pref("plugin.state.flash", 0);
pref("plugin.state.java", 0);
pref("media.gmp-widevinecdm.visible", false);
pref("media.gmp-widevinecdm.enabled", false);
pref("media.eme.enabled", false);
pref("media.gmp-manager.url.override", "data:text/plain,");
pref("browser.eme.ui.enabled", false);
pref("media.eme.apiVisible", false);
pref("media.gmp-provider.enabled", false);
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-gmpopenh264.provider.enabled", false);
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("dom.ipc.plugins.reportCrashURL", false);
pref("plugins.click_to_play", true);

//
// CAMERA / MIC
//

pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);
pref("webgl.disabled", true);
pref("webgl.dxgl.enabled", false);
pref("webgl.enable-webgl2", false);
pref("webgl.min_capability_mode", true);
pref("webgl.disable-extensions", true);
pref("webgl.disable-fail-if-major-performance-caveat", true);
pref("media.getusermedia.screensharing.enabled", false);
pref("media.getusermedia.browser.enabled", false);
pref("media.getusermedia.audiocapture.enabled", false);
pref("media.autoplay.enabled.user-gestures-needed", false);
pref("media.block-autoplay-until-in-foreground", true);

//
// WINDOW MEDDLING / POPUPS
//

pref("dom.disable_window_open_feature.close", true);
pref("dom.disable_window_open_feature.location", true);
pref("dom.disable_window_open_feature.menubar", true);
pref("dom.disable_window_open_feature.minimizable", true);
pref("dom.disable_window_open_feature.personalbar", true);
pref("dom.disable_window_open_feature.resizable", true);
pref("dom.disable_window_open_feature.status", true);
pref("dom.disable_window_open_feature.titlebar", true);
pref("dom.disable_window_open_feature.toolbar", true);
pref("dom.disable_window_move_resize", true);
pref("browser.link.open_newwindow", 3);
pref("browser.link.open_newwindow.restriction", 0);
pref("dom.disable_open_during_load", true);
pref("dom.popup_allowed_events", "click dblclick");

//
// WEB WORKERS
//

pref("dom.serviceWorkers.enabled", false);
pref("dom.push.enabled", false);
pref("dom.webnotifications.enabled", false);
pref("dom.webnotifications.serviceworker.enabled", false);
pref("permissions.default.desktop-notification", 2);

//
// DOM / JAVASCRIPT
//

pref("dom.event.clipboardevents.enabled", false);
pref("middlemouse.paste", false);
pref("dom.allow_cut_copy", false);
pref("dom.disable_beforeunload", true);
pref("dom.vibrator.enabled", false);
pref("javascript.options.asmjs", false);
pref("javascript.options.wasm", false);
pref("dom.targetBlankNoOpener.enabled", true);

//
// HARDWARE FINGERPRINTING
//

pref("dom.battery.enabled", false);
pref("dom.vr.enabled", false);
pref("media.navigator.enabled", false);
pref("dom.webaudio.enabled", false);

//
// MISC
//

pref("accessibility.force_disabled", 1);
pref("beacon.enabled", false);
pref("browser.helperApps.deleteTempFileOnExit", true);
pref("browser.pagethumbnails.capturing_disabled", true);
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
pref("browser.uitour.enabled", false);
pref("devtools.chrome.enabled", false);
pref("devtools.debugger.remote-enabled", false);
pref("devtools.webide.enabled", false);
pref("devtools.webide.autoinstallADBExtension", false);
pref("middlemouse.contentLoadURL", false);
pref("network.http.redirection-limit", 10);
pref("permissions.manager.defaultsUrl", "");
pref("webchannel.allowObject.urlWhitelist", "");
pref("network.IDN_show_punycode", true);
pref("social.whitelist", "");
pref("social.directories", "");
pref("social.shareDirectory", "");
pref("browser.apps.URL", "");
pref("dom.enable_user_timing", false);
pref("dom.mozTCPSocket.enabled", false);
pref("dom.netinfo.enabled", false);
pref("dom.telephony.enabled", false);
pref("media.webspeech.recognition.enable", false);
pref("device.sensors.enabled", false);
pref("media.webspeech.synth.enabled", false);
pref("dom.gamepad.enabled",	false);
pref("dom.enable_resource_timing",	false);
pref("dom.archivereader.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("browser.search.region", "US");
pref("intl.locale.matchOS", false);
pref("clipboard.autocopy", false);
pref("browser.fixup.alternate.enabled",	false);
pref("media.video_stats.enabled", false);
pref("devtools.chrome.enabled",	false);
pref("devtools.debugger.force-local", true);
pref("browser.startup.homepage_override.mstone", "ignore");

// Taken from TOR browser.
pref("general.buildID.override", "20100101");
pref("browser.startup.homepage_override.buildID", "20100101");
pref("toolkit.telemetry.previousBuildID", "20100101");

//
// DOWNLOADS
//

pref("browser.download.useDownloadDir", false);
pref("browser.download.manager.addToRecentDocs", false);
pref("browser.download.hide_plugins_without_extensions", false);

//
// EXTENSIONS
//

pref("extensions.enabledScopes", 5);
pref("extensions.autoDisableScopes", 15);
pref("extensions.update.enabled", false);
pref("xpinstall.signatures.required", true);
pref("extensions.getAddons.cache.enabled",	false);
pref("lightweightThemes.update.enabled", false);
pref("extensions.systemAddon.update.enabled", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

//
// STORAGE
//

pref("browser.cache.offline.enable", false);
pref("offline-apps.allow_by_default", false);

//
// SHUTDOWN
//

pref("privacy.sanitize.sanitizeOnShutdown", true);
pref("privacy.clearOnShutdown.formdata", true);
pref("privacy.clearOnShutdown.offlineApps", true);
pref("privacy.clearOnShutdown.sessions", true);
pref("privacy.clearOnShutdown.siteSettings", false);
pref("privacy.cpd.cache", true);
pref("privacy.cpd.cookies", true);
pref("privacy.cpd.formdata", true);
pref("privacy.cpd.history", true);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.passwords", false);
pref("privacy.cpd.sessions", true);
pref("privacy.cpd.siteSettings", false);
pref("privacy.sanitize.timeSpan", 0);

//
// ISOLATION
//

pref("privacy.firstparty.isolate", true);
pref("privacy.firstparty.isolate.restrict_opener_access", true);
pref("browser.startup.blankWindow", false);

//
// POCKET / HELLO
//

pref("loop.enabled", false);
pref("loop.feedback.baseUrl", "");
pref("loop.gettingStarted.url", "");
pref("loop.learnMoreUrl", "");
pref("loop.legal.ToS_url", "");
pref("loop.legal.privacy_url", "");
pref("loop.oauth.google.redirect_uri", "");
pref("loop.oauth.google.scope", "");
pref("loop.server", "");
pref("loop.soft_start_hostname", "");
pref("loop.support_url", "");
pref("loop.throttled2", false);
pref("loop.logDomains",	false);
pref("browser.pocket.enabled", false);
pref("browser.pocket.api", "");
pref("browser.pocket.site", "");
pref("browser.pocket.oAuthConsumerKey", "");
pref("browser.pocket.useLocaleList", false);
pref("browser.pocket.enabledLocales", "");
