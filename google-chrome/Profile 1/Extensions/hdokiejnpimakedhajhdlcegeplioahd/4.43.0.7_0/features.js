LPFeatures=function(){var r="feature-",o="no-feature-",i=$(document.body),t=function(t){var e=bg.get("g_prefoverrides")[t];return void 0===e||"1"===e},a=function(t){var e,n=bg.get("g_prefoverrides");switch(t){case"showcredmon":e=bg.get("g_showcredmon");break;default:e=n&&n[t]}return"boolean"==typeof e&&(e=e?"1":"0"),e},u=function(t,e,n){i.removeClass(o+t),i.removeClass(r+t),void 0!==n&&!0!==n||e?void 0!==n&&!1!==n||!e||i.addClass(r+t):i.addClass(o+t)},g=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").omaria&&bg.get("LPContentScriptFeatures").omaria},e,s=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").safari_legacy_messaging&&bg.get("LPContentScriptFeatures").safari_legacy_messaging},n,c,l=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").emergency_access_restricted&&bg.get("LPContentScriptFeatures").emergency_access_restricted},p,d,b=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").try_families_enabled&&bg.get("LPContentScriptFeatures").try_families_enabled},_,f=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted&&bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted},S=function(){return bg.get("LPContentScriptFeatures")&&!!bg.get("LPContentScriptFeatures").pbkdf2_iterations_migration_enabled},F=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").download_extension_web_prompt&&bg.get("LPContentScriptFeatures").download_extension_web_prompt},P=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").emergency_access_repair&&bg.get("LPContentScriptFeatures").emergency_access_repair},C=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").license_expiration&&bg.get("LPContentScriptFeatures").license_expiration},L=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").redux_vault_data&&bg.get("LPContentScriptFeatures").redux_vault_data};return{updateFeatures:function(t){for(var e in t){var n=a(e);"undefined"!=typeof prevValue&&u(e,"1"===n,t[e])}u("omaria",g()),u("safariLegacyMessaging",s()),bg.get("g_new_settings_enabled")&&$("#newSettingsMenuItem").addClass("visible")},allowIndividualSharing:function(){return this.allowShare()&&!this.allowShareOnlyFolders()},allowSharedFolders:function(){return this.allowShare()},allowClipboardCopy:function(){return bg.can_copy_to_clipboard()},allowImport:function(){return t("import")},allowShare:function(){return t("share")},allowShareOutsideEnterprise:function(){return t("shareout")},allowShareOnlyFolders:function(){return"1"===bg.get("g_prefoverrides").share_onlyfolders},allowShareDomain:function(t){return!0},allowPasswordRevert:function(){return t("revert")},allowNotes:function(){return t("show_notes")},allowFingerprint:function(){return t("show_fingerprint")},allowBookmarklets:function(){return t("bookmarklets")},allowHint:function(){return t("hint")},allowGift:function(){return bg.get("LPContentScriptFeatures").gift_menu_item_button},allowLaunchApplication:function(){return bg.canLaunchApplication()},allowNewSettings:function(){return bg.get("g_new_settings_enabled")},allowTryFamilies:function(){return b()},restrictOneToOneSharing:function(){return f()},pbkdf2IterartionsMigration:function(){return S()},isDownloadExtensionWebPromptEnabled:function(){return F()},restrictEmergencyAccessForFree:function(){return l()},allowLicenseExpiration:function(){return C()},allowOmarIA:g,allowMigrationOptIn:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").migration_opt_in&&bg.get("LPContentScriptFeatures").migration_opt_in},allowFormfillMigration:function(){return!!bg.get("LPContentScriptFeatures").formfill_migration},allowOmarDrawer:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").omardrawer&&bg.get("LPContentScriptFeatures").omardrawer},isDogfood:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").isDogfood&&bg.get("LPContentScriptFeatures").isDogfood},safari_legacy_messaging:s,hide_cloud_apps_policy_enabled:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled&&bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled},familiesProvisioningUpdate:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").families_provisioning_update&&bg.get("LPContentScriptFeatures").families_provisioning_update},canBackgroundOpenPopover:function(){return LPPlatform.canBackgroundOpenPopover()}}}();
//# sourceMappingURL=sourcemaps/features.js.map