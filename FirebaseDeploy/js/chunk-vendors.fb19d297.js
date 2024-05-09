(self["webpackChunkapp_v"]=self["webpackChunkapp_v"]||[]).push([[998],{1075:function(t,e,n){"use strict";n.d(e,{$:function(){return Be},A:function(){return l},B:function(){return d},G:function(){return Lt},H:function(){return jt},J:function(){return te},L:function(){return dt},M:function(){return ue},N:function(){return fe},P:function(){return Ni},Q:function(){return me},R:function(){return Si},T:function(){return ge},U:function(){return pe},V:function(){return be},W:function(){return we},X:function(){return Se},Y:function(){return Le},Z:function(){return De},_:function(){return $e},a:function(){return Nn},a0:function(){return Ve},a1:function(){return ze},a2:function(){return qe},a3:function(){return He},a4:function(){return We},a5:function(){return Ze},a6:function(){return Ge},a7:function(){return Ke},a8:function(){return Ye},a9:function(){return Xe},aA:function(){return ur},aB:function(){return ar},aC:function(){return Xi},aD:function(){return Yi},aE:function(){return Pt},aI:function(){return $n},aL:function(){return _e},aa:function(){return Qe},ab:function(){return tn},ac:function(){return en},af:function(){return rn},ag:function(){return sn},ah:function(){return on},ak:function(){return Ae},al:function(){return mn},an:function(){return _n},ao:function(){return xn},ap:function(){return xt},aq:function(){return x},ar:function(){return kt},as:function(){return bt},at:function(){return v},au:function(){return Ur},av:function(){return fr},aw:function(){return _},ax:function(){return C},ay:function(){return I},az:function(){return pt},b:function(){return Rn},c:function(){return Ui},d:function(){return zi},e:function(){return Vi},f:function(){return tr},g:function(){return rr},h:function(){return nr},i:function(){return ri},j:function(){return or},k:function(){return Hr},l:function(){return Ai},m:function(){return Gr},o:function(){return c},r:function(){return Oi},s:function(){return Ei},u:function(){return Pi}});var i=n(4444),r=n(5816);function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=u,p=h,f=new i.LL("auth","Firebase",h()),m=new o.Yd("@firebase/auth");function g(t,...e){m.logLevel<=o["in"].ERROR&&m.error(`Auth (${r.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,...e){throw w(t,...e)}function _(t,...e){return w(t,...e)}function y(t,e,n){const r=Object.assign(Object.assign({},p()),{[e]:n}),s=new i.LL("auth","Firebase",r);return s.create(e,{appName:t.name})}function b(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&v(t,"argument-error"),y(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return f.create(t,...e)}function C(t,e,...n){if(!t)throw w(e,...n)}function k(t){const e="INTERNAL ASSERTION FAILED: "+t;throw g(e),new Error(e)}function x(t,e){t||k(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function I(t){x(t instanceof Function,"Expected a class definition");let e=S.get(t);return e?(x(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,S.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(I);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function A(){return"http:"===O()||"https:"===O()}function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.shortDelay=t,this.longDelay=e,x(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){x(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function j(t,e,n,r,s={}){return F(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),D.fetch()(V(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function F(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$),e);try{const e=new z(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(t,a,o);v(t,a)}}catch(s){if(s instanceof i.ZR)throw s;v(t,"network-request-failed")}}async function U(t,e,n,i,r={}){const s=await j(t,e,n,i,r);return"mfaPendingCredential"in s&&v(t,"multi-factor-auth-required",{_serverResponse:s}),s}function V(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?L(t.config,r):`${t.config.apiScheme}://${r}`}class z{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(_(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return j(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return j(t,"POST","/v1/accounts:update",e)}async function Z(t,e){return j(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e=!1){const n=(0,i.m9)(t),r=await n.getIdToken(e),s=X(r);C(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Y(s.auth_time)),issuedAtTime:G(Y(s.iat)),expirationTime:G(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(t){return 1e3*Number(t)}function X(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return g("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(r);return t?JSON.parse(t):(g("Failed to decode base64 JWT payload"),null)}catch(o){return g("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function J(t){const e=X(t);return C(e,"internal-error"),C("undefined"!==typeof e.exp,"internal-error"),C("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.ZR&&tt(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Q(t,Z(n,{idToken:i}));C(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?ot(s.providerUserInfo):[],a=st(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nt(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function rt(t){const e=(0,i.m9)(t);await it(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function ot(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){const n=await F(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=V(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){C(t.idToken,"internal-error"),C("undefined"!==typeof t.idToken,"internal-error"),C("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):J(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return C(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ct;return n&&(C("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(C("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(C("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){C("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Q(this,this.stsTokenManager.getToken(this.auth,t));return C(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return K(this,t)}reload(){return rt(this)}_assign(t){this!==t&&(C(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await it(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Q(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:k}=e;C(_&&k,t,"internal-error");const x=ct.fromJSON(this.name,k);C("string"===typeof _,t,"internal-error"),lt(u,t.name),lt(h,t.name),C("boolean"===typeof y,t,"internal-error"),C("boolean"===typeof b,t,"internal-error"),lt(d,t.name),lt(p,t.name),lt(f,t.name),lt(m,t.name),lt(g,t.name),lt(v,t.name);const S=new ut({uid:_,auth:t,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:x,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new ct;i.updateFromServerResponse(e);const r=new ut({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await it(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class ft{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pt(this.userKey,i.apiKey,r),this.fullPersistenceKey=pt("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ft(I(dt),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||I(dt);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=ut._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new ft(r,t,n)):new ft(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wt(e))return"Blackberry";if(Ct(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||_t(e))&&!e.includes("edge/"))return"Chrome";if(bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=(0,i.z$)()){return/firefox\//i.test(t)}function vt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _t(t=(0,i.z$)()){return/crios\//i.test(t)}function yt(t=(0,i.z$)()){return/iemobile/i.test(t)}function bt(t=(0,i.z$)()){return/android/i.test(t)}function wt(t=(0,i.z$)()){return/blackberry/i.test(t)}function Ct(t=(0,i.z$)()){return/webos/i.test(t)}function kt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)}function xt(t=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function St(t=(0,i.z$)()){var e;return kt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function It(){return(0,i.w1)()&&10===document.documentMode}function Tt(t=(0,i.z$)()){return kt(t)||bt(t)||Ct(t)||wt(t)||/windows phone/i.test(t)||yt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e=[]){let n;switch(t){case"Browser":n=mt((0,i.z$)());break;case"Worker":n=`${mt((0,i.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(i){n.reverse();for(const t of n)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=i)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nt(this),this.idTokenSubscription=new Nt(this),this.beforeStateQueue=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=I(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ft.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await it(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&C(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&C(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&I(t)||this._popupRedirectResolver;C(e,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[I(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return C(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Pt(t){return(0,i.m9)(t)}class Nt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lt(t,e,n){const i=Pt(t);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Dt(e),{host:o,port:a}=$t(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Bt()}function Dt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $t(t){const e=Dt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Mt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Mt(e)}}}function Mt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return k("not implemented")}_getIdTokenResponse(t){return k("not implemented")}_linkToIdToken(t,e){return k("not implemented")}_getReauthenticationResolver(t){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return j(t,"POST","/v1/accounts:resetPassword",B(t,e))}async function Ut(t,e){return j(t,"POST","/v1/accounts:update",e)}async function Vt(t,e){return j(t,"POST","/v1/accounts:update",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",B(t,e))}async function qt(t,e){return j(t,"POST","/v1/accounts:sendOobCode",B(t,e))}async function Ht(t,e){return qt(t,e)}async function Wt(t,e){return qt(t,e)}async function Zt(t,e){return qt(t,e)}async function Gt(t,e){return qt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}async function Yt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends jt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return zt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ut(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="http://localhost";class te extends jt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new te(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new te(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}buildRequest(){const t={requestUri:Qt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return j(t,"POST","/v1/accounts:sendVerificationCode",B(t,e))}async function ne(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e))}async function ie(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e));if(n.temporaryProof)throw q(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function se(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends jt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new oe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new oe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ne(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ie(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return se(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new oe({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ce(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(t))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||e||t}class le{constructor(t){var e,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ae(null!==(r=c["mode"])&&void 0!==r?r:null);C(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ce(t);try{return new le(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=le.parseLink(e);return C(n,"argument-error"),Xt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends he{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class pe extends de{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return C("providerId"in e&&"signInMethod"in e,"argument-error"),te._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return C(t.idToken||t.accessToken,"argument-error"),te._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return pe.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return pe.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=t;if(!n&&!i&&!e&&!r)return null;if(!o)return null;try{return new pe(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends de{constructor(){super("facebook.com")}static credential(t){return te._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends de{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return te._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return me.credential(e,n)}catch(i){return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com",me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends de{constructor(){super("github.com")}static credential(t){return te._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ge.credential(t.oauthAccessToken)}catch(e){return null}}}ge.GITHUB_SIGN_IN_METHOD="github.com",ge.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="http://localhost";class _e extends jt{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i,pendingToken:r}=e;return n&&i&&r&&n===i?new _e(n,r):null}static _create(t,e){return new _e(t,e)}buildRequest(){return{requestUri:ve,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="saml.";class be extends he{constructor(t){C(t.startsWith(ye),"argument-error"),super(t)}static credentialFromResult(t){return be.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return be.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=_e.fromJSON(t);return C(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:n}=t;if(!e||!n)return null;try{return _e._create(n,e)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends de{constructor(){super("twitter.com")}static credential(t,e){return te._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return we.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(t,e){return U(t,"POST","/v1/accounts:signUp",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.TWITTER_SIGN_IN_METHOD="twitter.com",we.PROVIDER_ID="twitter.com";class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ut._fromIdTokenResponse(t,n,i),s=xe(n),o=new ke({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=xe(n);return new ke({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function xe(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t){var e;const n=Pt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new ke({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Ce(n,{returnSecureToken:!0}),r=await ke._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends i.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ie.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Ie(t,e,n,i)}}function Te(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ie._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return new Set(t.map((({providerId:t})=>t)).filter((t=>!!t)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(t,e){const n=(0,i.m9)(t);await Re(!0,n,e);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Ee(r||[]);return n.providerData=n.providerData.filter((t=>s.has(t.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Oe(t,e,n=!1){const i=await Q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",i)}async function Re(t,e,n){await it(e);const i=Ee(e.providerData),r=!1===t?"provider-already-linked":"no-such-provider";C(i.has(n)===t,e.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const i=await Q(t,Te(r,s,e,t),n);C(i.idToken,r,"internal-error");const o=X(i.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),ke._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===(i=o)||void 0===i?void 0:i.code)&&v(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){const i="signIn",r=await Te(t,i,e),s=await ke._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Le(t,e){return Ne(Pt(t),e)}async function De(t,e){const n=(0,i.m9)(t);return await Re(!1,n,e.providerId),Oe(n,e)}async function $e(t,e){return Pe((0,i.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e){return U(t,"POST","/v1/accounts:signInWithCustomToken",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(t,e){const n=Pt(t),i=await Me(n,{token:e,returnSecureToken:!0}),r=await ke._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Fe._fromServerResponse(t,e):v(t,"internal-error")}}class Fe extends je{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Fe(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e,n){var i;C((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),C("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(t,e,n){const r=(0,i.m9)(t),s={requestType:"PASSWORD_RESET",email:e};n&&Ue(r,s,n),await Wt(r,s)}async function ze(t,e,n){await Ft((0,i.m9)(t),{oobCode:e,newPassword:n})}async function qe(t,e){await Vt((0,i.m9)(t),{oobCode:e})}async function He(t,e){const n=(0,i.m9)(t),r=await Ft(n,{oobCode:e}),s=r.requestType;switch(C(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=je._fromServerResponse(Pt(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function We(t,e){const{data:n}=await He((0,i.m9)(t),e);return n.email}async function Ze(t,e,n){const i=Pt(t),r=await Ce(i,{returnSecureToken:!0,email:e,password:n}),s=await ke._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ge(t,e,n){return Le((0,i.m9)(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t,e,n){const r=(0,i.m9)(t),s={requestType:"EMAIL_SIGNIN",email:e};C(n.handleCodeInApp,r,"argument-error"),n&&Ue(r,s,n),await Zt(r,s)}function Ye(t,e){const n=le.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xe(t,e,n){const r=(0,i.m9)(t),s=ue.credentialWithLink(e,n||E());return C(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Le(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e){return j(t,"POST","/v1/accounts:createAuthUri",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t,e){const n=A()?E():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await Je((0,i.m9)(t),r);return s||[]}async function tn(t,e){const n=(0,i.m9)(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&Ue(n.auth,s,e);const{email:o}=await Ht(n.auth,s);o!==t.email&&await t.reload()}async function en(t,e,n){const r=(0,i.m9)(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Ue(r.auth,o,n);const{email:a}=await Gt(r.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,e){return j(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=(0,i.m9)(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await Q(r,nn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sn(t,e){return an((0,i.m9)(t),e,null)}function on(t,e){return an((0,i.m9)(t),null,e)}async function an(t,e,n){const{auth:i}=t,r=await t.getIdToken(),s={idToken:r,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Q(t,Ut(i,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!i&&(null===t||void 0===t?void 0:t.idToken)){const i=null===(n=null===(e=X(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const t="anonymous"!==i&&"custom"!==i?i:null;return new ln(s,t)}}if(!i)return null;switch(i){case"facebook.com":return new hn(s,r);case"github.com":return new dn(s,r);case"google.com":return new pn(s,r);case"twitter.com":return new fn(s,r,t.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,i,r)}}class ln{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class un extends ln{constructor(t,e,n,i){super(t,e,n),this.username=i}}class hn extends ln{constructor(t,e){super(t,"facebook.com",e)}}class dn extends un{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class pn extends ln{constructor(t,e){super(t,"google.com",e)}}class fn extends un{constructor(t,e,n){super(t,"twitter.com",e,n)}}function mn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new gn("enroll",t)}static _fromMfaPendingCredential(t){return new gn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return gn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=Pt(t),i=e.customData._serverResponse,r=(i.mfaInfo||[]).map((t=>je._fromServerResponse(n,t)));C(i.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new vn(s,r,(async t=>{const r=await t._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(e.operationType){case"signIn":const t=await ke._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return C(e.user,n,"internal-error"),ke._forOperation(e.user,e.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function _n(t,e){var n;const r=(0,i.m9)(t),s=e;return C(e.customData.operationType,r,"argument-error"),C(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){return j(t,"POST","/v2/accounts/mfaEnrollment:start",B(t,e))}function bn(t,e){return j(t,"POST","/v2/accounts/mfaEnrollment:finalize",B(t,e))}function wn(t,e){return j(t,"POST","/v2/accounts/mfaEnrollment:withdraw",B(t,e))}class Cn{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload((e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map((e=>je._fromServerResponse(t.auth,e))))}))}static _fromUser(t){return new Cn(t)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,i=await this.getSession(),r=await Q(this.user,n._process(this.user.auth,i,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){var e;const n="string"===typeof t?t:t.uid,i=await this.user.getIdToken(),r=await Q(this.user,wn(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:t})=>t!==n)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(e=s)||void 0===e?void 0:e.code))throw s}}}const kn=new WeakMap;function xn(t){const e=(0,i.m9)(t);return kn.has(e)||kn.set(e,Cn._fromUser(e)),kn.get(e)}const Sn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){const t=(0,i.z$)();return vt(t)||kt(t)}const En=1e3,An=10;class On extends In{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tn()&&Et(),this.fallbackToPolling=Tt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);It()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,An):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}On.type="LOCAL";const Rn=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends In{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Pn.type="SESSION";const Nn=Pn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Dn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Ln(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.receivers=[];class Mn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=$n("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function jn(t){Bn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return"undefined"!==typeof Bn()["WorkerGlobalScope"]&&"function"===typeof Bn()["importScripts"]}async function Un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Vn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function zn(){return Fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",Hn=1,Wn="firebaseLocalStorage",Zn="fbase_key";class Gn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Kn(t,e){return t.transaction([Wn],e?"readwrite":"readonly").objectStore(Wn)}function Yn(){const t=indexedDB.deleteDatabase(qn);return new Gn(t).toPromise()}function Xn(){const t=indexedDB.open(qn,Hn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Wn,{keyPath:Zn})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Wn)?e(n):(n.close(),await Yn(),e(await Xn()))}))}))}async function Jn(t,e,n){const i=Kn(t,!0).put({[Zn]:e,value:n});return new Gn(i).toPromise()}async function Qn(t,e){const n=Kn(t,!1).get(e),i=await new Gn(n).toPromise();return void 0===i?null:i.value}function ti(t,e){const n=Kn(t,!0).delete(e);return new Gn(n).toPromise()}const ei=800,ni=3;class ii{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ni)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(zn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Un(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xn();return await Jn(t,Sn,"1"),await ti(t,Sn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Qn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ti(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Kn(t,!1).getAll();return new Gn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ii.type="LOCAL";const ri=ii;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){return j(t,"POST","/v2/accounts/mfaSignIn:start",B(t,e))}function oi(t,e){return j(t,"POST","/v2/accounts/mfaSignIn:finalize",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t){return(await j(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function li(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=_("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",ci().appendChild(i)}))}function ui(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=500,di=6e4,pi=1e12;class fi{constructor(t){this.auth=t,this.counter=pi,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new mi(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||pi;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||pi;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||pi;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class mi{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof t?document.getElementById(t):t;C(i,"argument-error",{appName:e}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gi(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()}),di)}),hi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gi(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=ui("rcb"),_i=new N(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class bi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Bn().grecaptcha}load(t,e=""){return C(wi(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Bn().grecaptcha):new Promise(((n,r)=>{const s=Bn().setTimeout((()=>{r(_(t,"network-request-failed"))}),_i.get());Bn()[vi]=()=>{Bn().clearTimeout(s),delete Bn()[vi];const i=Bn().grecaptcha;if(!i)return void r(_(t,"internal-error"));const o=i.render;i.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(i)};const o=`${yi}?${(0,i.xO)({onload:vi,render:"explicit",hl:e})}`;li(o).catch((()=>{clearTimeout(s),r(_(t,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Bn().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wi(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Ci{async load(t){return new fi(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="recaptcha",xi={theme:"light",type:"image"};class Si{constructor(t,e=Object.assign({},xi),n){this.parameters=e,this.type=ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pt(n),this.isInvisible="invisible"===this.parameters.size,C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ci:new bi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise((n=>{const i=t=>{t&&(this.tokenChangeListeners.delete(i),n(t))};this.tokenChangeListeners.add(i),this.isInvisible&&e.execute(t)}))}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((t=>{throw this.renderPromise=null,t}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((t=>{this.container.removeChild(t)}))}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach((t=>t(e))),"function"===typeof t)t(e);else if("string"===typeof t){const n=Bn()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){C(A()&&!Fn(),this.auth,"internal-error"),await Ii(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await ai(this.auth);C(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ii(){let t=null;return new Promise((e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()})).catch((e=>{throw t&&window.removeEventListener("load",t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=oe._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function Ei(t,e,n){const r=Pt(t),s=await Ri(r,e,(0,i.m9)(n));return new Ti(s,(t=>Le(r,t)))}async function Ai(t,e,n){const r=(0,i.m9)(t);await Re(!1,r,"phone");const s=await Ri(r.auth,e,(0,i.m9)(n));return new Ti(s,(t=>De(r,t)))}async function Oi(t,e,n){const r=(0,i.m9)(t),s=await Ri(r.auth,e,(0,i.m9)(n));return new Ti(s,(t=>$e(r,t)))}async function Ri(t,e,n){var i;const r=await n.verify();try{let s;if(C("string"===typeof r,t,"argument-error"),C(n.type===ki,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){C("enroll"===e.type,t,"internal-error");const n=await yn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{C("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;C(n,t,"missing-multi-factor-info");const o=await si(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ee(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}async function Pi(t,e){await Oe((0,i.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.providerId=Ni.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return Ri(this.auth,t,(0,i.m9)(e))}static credential(t,e){return oe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ni.credentialFromTaggedObject(e)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?oe._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(t,e){return e?I(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.PROVIDER_ID="phone",Ni.PHONE_SIGN_IN_METHOD="phone";class Di extends jt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function $i(t){return Ne(t.auth,new Di(t),t.bypassAuthState)}function Mi(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Pe(n,new Di(t),t.bypassAuthState)}async function Bi(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Oe(n,new Di(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $i;case"linkViaPopup":case"linkViaRedirect":return Bi;case"reauthViaPopup":case"reauthViaRedirect":return Mi;default:v(this.auth,"internal-error")}}resolve(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new N(2e3,1e4);async function Ui(t,e,n){const i=Pt(t);b(t,e,he);const r=Li(i,n),s=new qi(i,"signInViaPopup",e,r);return s.executeNotNull()}async function Vi(t,e,n){const r=(0,i.m9)(t);b(r.auth,e,he);const s=Li(r.auth,n),o=new qi(r.auth,"reauthViaPopup",e,s,r);return o.executeNotNull()}async function zi(t,e,n){const r=(0,i.m9)(t);b(r.auth,e,he);const s=Li(r.auth,n),o=new qi(r.auth,"linkViaPopup",e,s,r);return o.executeNotNull()}class qi extends ji{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return C(t,this.auth,"internal-error"),t}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const t=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Fi.get())};t()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi="pendingRedirect",Wi=new Map;class Zi extends ji{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const e=await Gi(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gi(t,e){const n=Qi(e),i=Ji(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Ki(t,e){return Ji(t)._set(Qi(e),"true")}function Yi(){Wi.clear()}function Xi(t,e){Wi.set(t._key(),e)}function Ji(t){return I(t._redirectPersistence)}function Qi(t){return pt(Hi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){return er(t,e,n)}async function er(t,e,n){const i=Pt(t);b(t,e,he);const r=Li(i,n);return await Ki(r,i),r._openRedirect(i,e,"signInViaRedirect")}function nr(t,e,n){return ir(t,e,n)}async function ir(t,e,n){const r=(0,i.m9)(t);b(r.auth,e,he);const s=Li(r.auth,n);await Ki(s,r.auth);const o=await cr(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",o)}function rr(t,e,n){return sr(t,e,n)}async function sr(t,e,n){const r=(0,i.m9)(t);b(r.auth,e,he);const s=Li(r.auth,n);await Re(!1,r,e.providerId),await Ki(s,r.auth);const o=await cr(r);return s._openRedirect(r.auth,e,"linkViaRedirect",o)}async function or(t,e){return await Pt(t)._initializationPromise,ar(t,e,!1)}async function ar(t,e,n=!1){const i=Pt(t),r=Li(i,e),s=new Zi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function cr(t){const e=$n(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=6e5;class ur{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!pr(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!dr(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(_(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lr&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(t))}saveEventToCache(t){this.cachedEventUids.add(hr(t)),this.lastProcessedEventTime=Date.now()}}function hr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function dr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function pr(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e={}){return j(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gr=/^https?/;async function vr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fr(t);for(const i of e)try{if(_r(i))return}catch(n){}v(t,"unauthorized-domain")}function _r(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!gr.test(n))return!1;if(mr.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new N(3e4,6e4);function br(){const t=Bn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function wr(t){return new Promise(((e,n)=>{var i,r,s;function o(){br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{br(),n(_(t,"network-request-failed"))},timeout:yr.get()})}if(null===(r=null===(i=Bn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Bn().gapi)||void 0===s?void 0:s.load)){const e=ui("iframefcb");return Bn()[e]=()=>{gapi.load?o():n(_(t,"network-request-failed"))},li(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Cr=null,t}))}let Cr=null;function kr(t){return Cr=Cr||wr(t),Cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new N(5e3,15e3),Sr="__/auth/iframe",Ir="emulator/auth/iframe",Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ar(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?L(e,Ir):`https://${t.config.authDomain}/${Sr}`,s={apiKey:e.apiKey,appName:t.name,v:r.SDK_VERSION},o=Er.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Or(t){const e=await kr(t),n=Bn().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:Ar(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=_(t,"network-request-failed"),s=Bn().setTimeout((()=>{i(r)}),xr.get());function o(){Bn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pr=500,Nr=600,Lr="_blank",Dr="http://localhost";class $r{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Mr(t,e,n,r=Pr,s=Nr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Rr),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=_t(u)?Lr:n),gt(u)&&(e=e||Dr,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(u)&&"_self"!==c)return Br(e||"",c),new $r(null);const d=window.open(e||"",c,h);C(d,t,"popup-blocked");try{d.focus()}catch(p){}return new $r(d)}function Br(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="__/auth/handler",Fr="emulator/auth/handler";function Ur(t,e,n,s,o,a){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(e instanceof he){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof de){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Vr(t)}?${(0,i.xO)(l).slice(1)}`}function Vr({config:t}){return t.emulator?L(t,Fr):`https://${t.authDomain}/${jr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class qr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nn,this._completeRedirectFn=ar,this._overrideRedirectResult=Xi}async _openPopup(t,e,n,i){var r;x(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Ur(t,e,n,E(),i);return Mr(t,s,$n())}async _openRedirect(t,e,n,i){return await this._originValidation(t),jn(Ur(t,e,n,E(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(x(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Or(t),n=new ur(t);return e.register("authEvent",(e=>{C(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(zr,{type:zr},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[zr];void 0!==r&&e(!!r),v(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=vr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Tt()||vt()||kt()}}const Hr=qr;class Wr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return k("unexpected MultiFactorSessionType")}}}class Zr extends Wr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Zr(t)}_finalizeEnroll(t,e,n){return bn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return oi(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gr{constructor(){}static assertion(t){return Zr._fromCredential(t)}}Gr.FACTOR_ID="phone";var Kr="@firebase/auth",Yr="0.20.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qr(t){(0,r._registerComponent)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{C(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),C(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(t)},a=new Rt(e,i,r);return T(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,r._registerComponent)(new a.wA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Xr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Kr,Yr,Jr(t)),(0,r.registerVersion)(Kr,Yr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr("Browser")},7210:function(t,e,n){"use strict";n(1075),n(4444),n(5816),n(3333),n(8463)},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return m},DV:function(){return B},Dv:function(){return X},GJ:function(){return $},L:function(){return u},LL:function(){return A},Pz:function(){return N},Sg:function(){return g},UG:function(){return y},UI:function(){return F},US:function(){return c},Wj:function(){return Q},Yr:function(){return x},ZB:function(){return p},ZR:function(){return E},b$:function(){return C},cI:function(){return P},dS:function(){return et},eu:function(){return I},g5:function(){return s},gK:function(){return J},gQ:function(){return W},h$:function(){return l},hl:function(){return S},hu:function(){return r},jU:function(){return b},lb:function(){return tt},m9:function(){return it},ne:function(){return Z},p$:function(){return d},pd:function(){return H},r3:function(){return M},ru:function(){return w},tV:function(){return h},uI:function(){return _},ug:function(){return nt},vZ:function(){return U},w1:function(){return k},w9:function(){return D},xO:function(){return z},xb:function(){return j},z$:function(){return v},zd:function(){return q}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},a=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const l=r<t.length,u=l?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){const e=o(t);return c.encodeByteArray(e,!0)},u=function(t){return l(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&f(n)&&(t[n]=p(t[n],e[n]));return t}function f(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function y(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function b(){return"object"===typeof self&&self.self===self}function w(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=v();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function S(){return"object"===typeof indexedDB}function I(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?O(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new E(i,o,n);return a}}function O(t,e){return t.replace(R,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return JSON.parse(t)}function N(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=P(h(s[0])||""),n=P(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:e,claims:n,data:i,signature:r}},D=function(t){const e=L(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},$=function(t){const e=L(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function U(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(V(n)&&V(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function V(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function q(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function H(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<e){if(0===s)while(i<=n)this.compress_(t,i),i+=this.blockSize;if("string"===typeof t){while(i<e)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<e)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[i]>>e&255,++n;return t}}function Z(t,e){const n=new G(t,e);return n.subscribe.bind(n)}class G{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=K(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Y),void 0===i.error&&(i.error=Y),void 0===i.complete&&(i.complete=Y);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Y(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(t,e,n,i){let r;if(i<e?r="at least "+e:i>n&&(r=0===n?"none":"no more than "+n),r){const e=t+" failed: Was called with "+i+(1===i?" argument.":" arguments.")+" Expects "+r+".";throw new Error(e)}};function J(t,e){return`${t} failed: ${e} argument `}function Q(t,e,n,i){if((!i||n)&&"function"!==typeof n)throw new Error(J(t,e)+"must be a valid function.")}function tt(t,e,n,i){if((!i||n)&&("object"!==typeof n||null===n))throw new Error(J(t,e)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const e=s-55296;i++,r(i<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(i)-56320;s=65536+(e<<10)+n}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},nt=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(t){return t&&t._delegate?t._delegate:t}},1001:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,{Z:function(){return i}})},9662:function(t,e,n){var i=n(614),r=n(6330),s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not a function")}},6077:function(t,e,n){var i=n(614),r=String,s=TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+r(t)+" as a prototype")}},1223:function(t,e,n){var i=n(5112),r=n(30),s=n(3070).f,o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},9670:function(t,e,n){var i=n(111),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw s(r(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),r=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=i(e),l=s(c),u=r(o,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},648:function(t,e,n){var i=n(1694),r=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,l="Arguments"==s(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),a))?n:l?s(e):"Object"==(i=s(e))&&r(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),r=Error,s=i("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9920:function(t,e,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=r(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||c(t,h,l(e,h))}}},8880:function(t,e,n){var i=n(9781),r=n(3070),s=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(614),r=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;return i(n)&&s(n,l,a),a.global?c?t[e]=n:o(e,n):(a.unsafe?t[e]&&(c=!0):delete t[e],c?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})),t}},3072:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),r=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,h,d,p,f,m=t.target,g=t.global,v=t.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in e){if(p=e[h],t.dontCallGetSet?(f=r(u,h),d=f&&f.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&s(p,"sham",!0),o(u,h,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),r=n(7293),s=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(1702),r=n(7293),s=n(4326),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var i=n(614),r=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var i=n(111),r=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var i,r,s,o=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),p=n(6200),f=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,_=function(t){return s(t)?r(t):i(t,{})},y=function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=c(b.get),C=c(b.has),k=c(b.set);i=function(t,e){if(C(b,t))throw new g(m);return e.facade=t,k(b,t,e),e},r=function(t){return w(b,t)||{}},s=function(t){return C(b,t)}}else{var x=p("state");f[x]=!0,i=function(t,e){if(h(t,x))throw new g(m);return e.facade=t,u(t,x,e),e},r=function(t){return h(t,x)?t[x]:{}},s=function(t){return h(t,x)}}t.exports={set:i,get:r,has:s,enforce:_,getterFor:y}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==u||n!=l&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),r=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(7293),r=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=Object.defineProperty,p=o&&!i((function(){return 8!==d((function(){}),"length",{value:8}).length})),f=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&d(t,"name",{value:e,configurable:!0}),p&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=u(t);return s(i,"source")||(i.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return r(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},30:function(t,e,n){var i,r=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",p="prototype",f="script",m=u("IE_PROTO"),g=function(){},v=function(t){return d+f+h+t+d+"/"+f+h},_=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),n="java"+f+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&i?_(i):y():_(i);var t=o.length;while(t--)delete b[p][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[p]=r(t),n=new g,g[p]=null,n[m]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=c(e),l=r.length,u=0;while(l>u)s.f(t,n=r[u++],i[n]);return t}},3070:function(t,e,n){var i=n(9781),r=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var i=u(t,e);i&&i[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return l(t,e,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!r(s.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=s(t),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(e.length>l)r(i,n=e[l++])&&(~o(u,n)||c(u,n));return u}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),r=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(6916),r=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var i=n(3070).f;t.exports=function(t,e,n){n in t||i(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var i=n(2309),r=n(9711),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3072),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t,e,n){var i=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488),r=Object;t.exports=function(t){return r(i(t))}},7593:function(t,e,n){var i=n(6916),r=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,c=o(t,u);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!r(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var i=n(648),r=String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),r=n(7293);t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;t.exports=function(t){if(!s(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&s(u,t)?l[t]=u[t]:l[t]=c&&h?h(e):d(e)}return l[t]}},9191:function(t,e,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),l=n(2626),u=n(9587),h=n(6277),d=n(8340),p=n(7741),f=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,v){var _="stackTraceLimit",y=v?2:1,b=t.split("."),w=b[b.length-1],C=i.apply(null,b);if(C){var k=C.prototype;if(!g&&r(k,"cause")&&delete k.cause,!n)return C;var x=i("Error"),S=e((function(t,e){var n=h(v?e:t,void 0),i=v?new C(t):new C;return void 0!==n&&s(i,"message",n),f&&s(i,"stack",p(i.stack,2)),this&&o(k,this)&&u(i,this,S),arguments.length>y&&d(i,arguments[y]),i}));if(S.prototype=k,"Error"!==w?a?a(S,x):c(S,x,{name:!0}):m&&_ in C&&(l(S,C,_),l(S,C,"prepareStackTrace")),c(S,C),!g)try{k.name!==w&&s(k,"name",w),k.constructor=S}catch(I){}return S}}},6699:function(t,e,n){"use strict";var i=n(2109),r=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:a},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=r[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,l),i({global:!0,constructor:!0,arity:1,forced:l},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,l),i({target:a,stat:!0,constructor:!0,arity:1,forced:l},n)}};u("Error",(function(t){return function(e){return s(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),u("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},3129:function(t){
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
(function(e,n){t.exports=n()})(0,(function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function e(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return c(t)||l(t)||u(t)||d()}function c(t){if(Array.isArray(t))return h(t)}function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p="undefined"!==typeof window&&"undefined"!==typeof window.document,f=p?window:{},m=!(!p||!f.document.documentElement)&&"ontouchstart"in f.document.documentElement,g=!!p&&"PointerEvent"in f,v="cropper",_="all",y="crop",b="move",w="zoom",C="e",k="w",x="s",S="n",I="ne",T="nw",E="se",A="sw",O="".concat(v,"-crop"),R="".concat(v,"-disabled"),P="".concat(v,"-hidden"),N="".concat(v,"-hide"),L="".concat(v,"-invisible"),D="".concat(v,"-modal"),$="".concat(v,"-move"),M="".concat(v,"Action"),B="".concat(v,"Preview"),j="crop",F="move",U="none",V="crop",z="cropend",q="cropmove",H="cropstart",W="dblclick",Z=m?"touchstart":"mousedown",G=m?"touchmove":"mousemove",K=m?"touchend touchcancel":"mouseup",Y=g?"pointerdown":Z,X=g?"pointermove":G,J=g?"pointerup pointercancel":K,Q="ready",tt="resize",et="wheel",nt="zoom",it="image/jpeg",rt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,st=/^data:/,ot=/^data:image\/jpeg;base64,/,at=/^img|canvas$/i,ct=200,lt=100,ut={viewMode:0,dragMode:j,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:ct,minContainerHeight:lt,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},ht='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',dt=Number.isNaN||f.isNaN;function pt(t){return"number"===typeof t&&!dt(t)}var ft=function(t){return t>0&&t<1/0};function mt(t){return"undefined"===typeof t}function gt(t){return"object"===n(t)&&null!==t}var vt=Object.prototype.hasOwnProperty;function _t(t){if(!gt(t))return!1;try{var e=t.constructor,n=e.prototype;return e&&n&&vt.call(n,"isPrototypeOf")}catch(i){return!1}}function yt(t){return"function"===typeof t}var bt=Array.prototype.slice;function wt(t){return Array.from?Array.from(t):bt.call(t)}function Ct(t,e){return t&&yt(e)&&(Array.isArray(t)||pt(t.length)?wt(t).forEach((function(n,i){e.call(t,n,i,t)})):gt(t)&&Object.keys(t).forEach((function(n){e.call(t,t[n],n,t)}))),t}var kt=Object.assign||function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return gt(t)&&n.length>0&&n.forEach((function(e){gt(e)&&Object.keys(e).forEach((function(n){t[n]=e[n]}))})),t},xt=/\.\d*(?:0|9){12}\d*$/;function St(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return xt.test(t)?Math.round(t*e)/e:t}var It=/^width|height|left|top|marginLeft|marginTop$/;function Tt(t,e){var n=t.style;Ct(e,(function(t,e){It.test(e)&&pt(t)&&(t="".concat(t,"px")),n[e]=t}))}function Et(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function At(t,e){if(e)if(pt(t.length))Ct(t,(function(t){At(t,e)}));else if(t.classList)t.classList.add(e);else{var n=t.className.trim();n?n.indexOf(e)<0&&(t.className="".concat(n," ").concat(e)):t.className=e}}function Ot(t,e){e&&(pt(t.length)?Ct(t,(function(t){Ot(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function Rt(t,e,n){e&&(pt(t.length)?Ct(t,(function(t){Rt(t,e,n)})):n?At(t,e):Ot(t,e))}var Pt=/([a-z\d])([A-Z])/g;function Nt(t){return t.replace(Pt,"$1-$2").toLowerCase()}function Lt(t,e){return gt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(Nt(e)))}function Dt(t,e,n){gt(n)?t[e]=n:t.dataset?t.dataset[e]=n:t.setAttribute("data-".concat(Nt(e)),n)}function $t(t,e){if(gt(t[e]))try{delete t[e]}catch(n){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(n){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(Nt(e)))}var Mt=/\s\s*/,Bt=function(){var t=!1;if(p){var e=!1,n=function(){},i=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});f.addEventListener("test",n,i),f.removeEventListener("test",n,i)}return t}();function jt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;e.trim().split(Mt).forEach((function(e){if(!Bt){var s=t.listeners;s&&s[e]&&s[e][n]&&(r=s[e][n],delete s[e][n],0===Object.keys(s[e]).length&&delete s[e],0===Object.keys(s).length&&delete t.listeners)}t.removeEventListener(e,r,i)}))}function Ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;e.trim().split(Mt).forEach((function(e){if(i.once&&!Bt){var s=t.listeners,o=void 0===s?{}:s;r=function(){delete o[e][n],t.removeEventListener(e,r,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];n.apply(t,a)},o[e]||(o[e]={}),o[e][n]&&t.removeEventListener(e,o[e][n],i),o[e][n]=r,t.listeners=o}t.addEventListener(e,r,i)}))}function Ut(t,e,n){var i;return yt(Event)&&yt(CustomEvent)?i=new CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n)),t.dispatchEvent(i)}function Vt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var zt=f.location,qt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Ht(t){var e=t.match(qt);return null!==e&&(e[1]!==zt.protocol||e[2]!==zt.hostname||e[3]!==zt.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Zt(t){var e=t.rotate,n=t.scaleX,i=t.scaleY,r=t.translateX,s=t.translateY,o=[];pt(r)&&0!==r&&o.push("translateX(".concat(r,"px)")),pt(s)&&0!==s&&o.push("translateY(".concat(s,"px)")),pt(e)&&0!==e&&o.push("rotate(".concat(e,"deg)")),pt(n)&&1!==n&&o.push("scaleX(".concat(n,")")),pt(i)&&1!==i&&o.push("scaleY(".concat(i,")"));var a=o.length?o.join(" "):"none";return{WebkitTransform:a,msTransform:a,transform:a}}function Gt(t){var n=e({},t),i=0;return Ct(t,(function(t,e){delete n[e],Ct(n,(function(e){var n=Math.abs(t.startX-e.startX),r=Math.abs(t.startY-e.startY),s=Math.abs(t.endX-e.endX),o=Math.abs(t.endY-e.endY),a=Math.sqrt(n*n+r*r),c=Math.sqrt(s*s+o*o),l=(c-a)/a;Math.abs(l)>Math.abs(i)&&(i=l)}))})),i}function Kt(t,n){var i=t.pageX,r=t.pageY,s={endX:i,endY:r};return n?s:e({startX:i,startY:r},s)}function Yt(t){var e=0,n=0,i=0;return Ct(t,(function(t){var r=t.startX,s=t.startY;e+=r,n+=s,i+=1})),e/=i,n/=i,{pageX:e,pageY:n}}function Xt(t){var e=t.aspectRatio,n=t.height,i=t.width,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",s=ft(i),o=ft(n);if(s&&o){var a=n*e;"contain"===r&&a>i||"cover"===r&&a<i?n=i/e:i=n*e}else s?n=i/e:o&&(i=n*e);return{width:i,height:n}}function Jt(t){var e=t.width,n=t.height,i=t.degree;if(i=Math.abs(i)%180,90===i)return{width:n,height:e};var r=i%90*Math.PI/180,s=Math.sin(r),o=Math.cos(r),a=e*o+n*s,c=e*s+n*o;return i>90?{width:c,height:a}:{width:a,height:c}}function Qt(t,e,n,i){var r=e.aspectRatio,s=e.naturalWidth,o=e.naturalHeight,c=e.rotate,l=void 0===c?0:c,u=e.scaleX,h=void 0===u?1:u,d=e.scaleY,p=void 0===d?1:d,f=n.aspectRatio,m=n.naturalWidth,g=n.naturalHeight,v=i.fillColor,_=void 0===v?"transparent":v,y=i.imageSmoothingEnabled,b=void 0===y||y,w=i.imageSmoothingQuality,C=void 0===w?"low":w,k=i.maxWidth,x=void 0===k?1/0:k,S=i.maxHeight,I=void 0===S?1/0:S,T=i.minWidth,E=void 0===T?0:T,A=i.minHeight,O=void 0===A?0:A,R=document.createElement("canvas"),P=R.getContext("2d"),N=Xt({aspectRatio:f,width:x,height:I}),L=Xt({aspectRatio:f,width:E,height:O},"cover"),D=Math.min(N.width,Math.max(L.width,m)),$=Math.min(N.height,Math.max(L.height,g)),M=Xt({aspectRatio:r,width:x,height:I}),B=Xt({aspectRatio:r,width:E,height:O},"cover"),j=Math.min(M.width,Math.max(B.width,s)),F=Math.min(M.height,Math.max(B.height,o)),U=[-j/2,-F/2,j,F];return R.width=St(D),R.height=St($),P.fillStyle=_,P.fillRect(0,0,D,$),P.save(),P.translate(D/2,$/2),P.rotate(l*Math.PI/180),P.scale(h,p),P.imageSmoothingEnabled=b,P.imageSmoothingQuality=C,P.drawImage.apply(P,[t].concat(a(U.map((function(t){return Math.floor(St(t))}))))),P.restore(),R}var te=String.fromCharCode;function ee(t,e,n){var i="";n+=e;for(var r=e;r<n;r+=1)i+=te(t.getUint8(r));return i}var ne=/^data:.*,/;function ie(t){var e=t.replace(ne,""),n=atob(e),i=new ArrayBuffer(n.length),r=new Uint8Array(i);return Ct(r,(function(t,e){r[e]=n.charCodeAt(e)})),i}function re(t,e){var n=[],i=8192,r=new Uint8Array(t);while(r.length>0)n.push(te.apply(null,wt(r.subarray(0,i)))),r=r.subarray(i);return"data:".concat(e,";base64,").concat(btoa(n.join("")))}function se(t){var e,n=new DataView(t);try{var i,r,s;if(255===n.getUint8(0)&&216===n.getUint8(1)){var o=n.byteLength,a=2;while(a+1<o){if(255===n.getUint8(a)&&225===n.getUint8(a+1)){r=a;break}a+=1}}if(r){var c=r+4,l=r+10;if("Exif"===ee(n,c,4)){var u=n.getUint16(l);if(i=18761===u,(i||19789===u)&&42===n.getUint16(l+2,i)){var h=n.getUint32(l+4,i);h>=8&&(s=l+h)}}}if(s){var d,p,f=n.getUint16(s,i);for(p=0;p<f;p+=1)if(d=s+12*p+2,274===n.getUint16(d,i)){d+=8,e=n.getUint16(d,i),n.setUint16(d,1,i);break}}}catch(m){e=1}return e}function oe(t){var e=0,n=1,i=1;switch(t){case 2:n=-1;break;case 3:e=-180;break;case 4:i=-1;break;case 5:e=90,i=-1;break;case 6:e=90;break;case 7:e=90,n=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:n,scaleY:i}}var ae={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,n=this.container,i=this.cropper,r=Number(e.minContainerWidth),s=Number(e.minContainerHeight);At(i,P),Ot(t,P);var o={width:Math.max(n.offsetWidth,r>=0?r:ct),height:Math.max(n.offsetHeight,s>=0?s:lt)};this.containerData=o,Tt(i,{width:o.width,height:o.height}),At(t,P),Ot(i,P)},initCanvas:function(){var t=this.containerData,e=this.imageData,n=this.options.viewMode,i=Math.abs(e.rotate)%180===90,r=i?e.naturalHeight:e.naturalWidth,s=i?e.naturalWidth:e.naturalHeight,o=r/s,a=t.width,c=t.height;t.height*o>t.width?3===n?a=t.height*o:c=t.width/o:3===n?c=t.width/o:a=t.height*o;var l={aspectRatio:o,naturalWidth:r,naturalHeight:s,width:a,height:c};this.canvasData=l,this.limited=1===n||2===n,this.limitCanvas(!0,!0),l.width=Math.min(Math.max(l.width,l.minWidth),l.maxWidth),l.height=Math.min(Math.max(l.height,l.minHeight),l.maxHeight),l.left=(t.width-l.width)/2,l.top=(t.height-l.height)/2,l.oldLeft=l.left,l.oldTop=l.top,this.initialCanvasData=kt({},l)},limitCanvas:function(t,e){var n=this.options,i=this.containerData,r=this.canvasData,s=this.cropBoxData,o=n.viewMode,a=r.aspectRatio,c=this.cropped&&s;if(t){var l=Number(n.minCanvasWidth)||0,u=Number(n.minCanvasHeight)||0;o>1?(l=Math.max(l,i.width),u=Math.max(u,i.height),3===o&&(u*a>l?l=u*a:u=l/a)):o>0&&(l?l=Math.max(l,c?s.width:0):u?u=Math.max(u,c?s.height:0):c&&(l=s.width,u=s.height,u*a>l?l=u*a:u=l/a));var h=Xt({aspectRatio:a,width:l,height:u});l=h.width,u=h.height,r.minWidth=l,r.minHeight=u,r.maxWidth=1/0,r.maxHeight=1/0}if(e)if(o>(c?0:1)){var d=i.width-r.width,p=i.height-r.height;r.minLeft=Math.min(0,d),r.minTop=Math.min(0,p),r.maxLeft=Math.max(0,d),r.maxTop=Math.max(0,p),c&&this.limited&&(r.minLeft=Math.min(s.left,s.left+(s.width-r.width)),r.minTop=Math.min(s.top,s.top+(s.height-r.height)),r.maxLeft=s.left,r.maxTop=s.top,2===o&&(r.width>=i.width&&(r.minLeft=Math.min(0,d),r.maxLeft=Math.max(0,d)),r.height>=i.height&&(r.minTop=Math.min(0,p),r.maxTop=Math.max(0,p))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=i.width,r.maxTop=i.height},renderCanvas:function(t,e){var n=this.canvasData,i=this.imageData;if(e){var r=Jt({width:i.naturalWidth*Math.abs(i.scaleX||1),height:i.naturalHeight*Math.abs(i.scaleY||1),degree:i.rotate||0}),s=r.width,o=r.height,a=n.width*(s/n.naturalWidth),c=n.height*(o/n.naturalHeight);n.left-=(a-n.width)/2,n.top-=(c-n.height)/2,n.width=a,n.height=c,n.aspectRatio=s/o,n.naturalWidth=s,n.naturalHeight=o,this.limitCanvas(!0,!1)}(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,Tt(this.canvas,kt({width:n.width,height:n.height},Zt({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,n=this.imageData,i=n.naturalWidth*(e.width/e.naturalWidth),r=n.naturalHeight*(e.height/e.naturalHeight);kt(n,{width:i,height:r,left:(e.width-i)/2,top:(e.height-r)/2}),Tt(this.image,kt({width:n.width,height:n.height},Zt(kt({translateX:n.left,translateY:n.top},n)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,n=t.aspectRatio||t.initialAspectRatio,i=Number(t.autoCropArea)||.8,r={width:e.width,height:e.height};n&&(e.height*n>e.width?r.height=r.width/n:r.width=r.height*n),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*i),r.height=Math.max(r.minHeight,r.height*i),r.left=e.left+(e.width-r.width)/2,r.top=e.top+(e.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=kt({},r)},limitCropBox:function(t,e){var n=this.options,i=this.containerData,r=this.canvasData,s=this.cropBoxData,o=this.limited,a=n.aspectRatio;if(t){var c=Number(n.minCropBoxWidth)||0,l=Number(n.minCropBoxHeight)||0,u=o?Math.min(i.width,r.width,r.width+r.left,i.width-r.left):i.width,h=o?Math.min(i.height,r.height,r.height+r.top,i.height-r.top):i.height;c=Math.min(c,i.width),l=Math.min(l,i.height),a&&(c&&l?l*a>c?l=c/a:c=l*a:c?l=c/a:l&&(c=l*a),h*a>u?h=u/a:u=h*a),s.minWidth=Math.min(c,u),s.minHeight=Math.min(l,h),s.maxWidth=u,s.maxHeight=h}e&&(o?(s.minLeft=Math.max(0,r.left),s.minTop=Math.max(0,r.top),s.maxLeft=Math.min(i.width,r.left+r.width)-s.width,s.maxTop=Math.min(i.height,r.top+r.height)-s.height):(s.minLeft=0,s.minTop=0,s.maxLeft=i.width-s.width,s.maxTop=i.height-s.height))},renderCropBox:function(){var t=this.options,e=this.containerData,n=this.cropBoxData;(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCropBox(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,t.movable&&t.cropBoxMovable&&Dt(this.face,M,n.width>=e.width&&n.height>=e.height?b:_),Tt(this.cropBox,kt({width:n.width,height:n.height},Zt({translateX:n.left,translateY:n.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ut(this.element,V,this.getData())}},ce={initPreview:function(){var t=this.element,e=this.crossOrigin,n=this.options.preview,i=e?this.crossOriginUrl:this.url,r=t.alt||"The image to preview",s=document.createElement("img");if(e&&(s.crossOrigin=e),s.src=i,s.alt=r,this.viewBox.appendChild(s),this.viewBoxImage=s,n){var o=n;"string"===typeof n?o=t.ownerDocument.querySelectorAll(n):n.querySelector&&(o=[n]),this.previews=o,Ct(o,(function(t){var n=document.createElement("img");Dt(t,B,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(n.crossOrigin=e),n.src=i,n.alt=r,n.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(n)}))}},resetPreview:function(){Ct(this.previews,(function(t){var e=Lt(t,B);Tt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,$t(t,B)}))},preview:function(){var t=this.imageData,e=this.canvasData,n=this.cropBoxData,i=n.width,r=n.height,s=t.width,o=t.height,a=n.left-e.left-t.left,c=n.top-e.top-t.top;this.cropped&&!this.disabled&&(Tt(this.viewBoxImage,kt({width:s,height:o},Zt(kt({translateX:-a,translateY:-c},t)))),Ct(this.previews,(function(e){var n=Lt(e,B),l=n.width,u=n.height,h=l,d=u,p=1;i&&(p=l/i,d=r*p),r&&d>u&&(p=u/r,h=i*p,d=u),Tt(e,{width:h,height:d}),Tt(e.getElementsByTagName("img")[0],kt({width:s*p,height:o*p},Zt(kt({translateX:-a*p,translateY:-c*p},t))))})))}},le={bind:function(){var t=this.element,e=this.options,n=this.cropper;yt(e.cropstart)&&Ft(t,H,e.cropstart),yt(e.cropmove)&&Ft(t,q,e.cropmove),yt(e.cropend)&&Ft(t,z,e.cropend),yt(e.crop)&&Ft(t,V,e.crop),yt(e.zoom)&&Ft(t,nt,e.zoom),Ft(n,Y,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Ft(n,et,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ft(n,W,this.onDblclick=this.dblclick.bind(this)),Ft(t.ownerDocument,X,this.onCropMove=this.cropMove.bind(this)),Ft(t.ownerDocument,J,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Ft(window,tt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,n=this.cropper;yt(e.cropstart)&&jt(t,H,e.cropstart),yt(e.cropmove)&&jt(t,q,e.cropmove),yt(e.cropend)&&jt(t,z,e.cropend),yt(e.crop)&&jt(t,V,e.crop),yt(e.zoom)&&jt(t,nt,e.zoom),jt(n,Y,this.onCropStart),e.zoomable&&e.zoomOnWheel&&jt(n,et,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&jt(n,W,this.onDblclick),jt(t.ownerDocument,X,this.onCropMove),jt(t.ownerDocument,J,this.onCropEnd),e.responsive&&jt(window,tt,this.onResize)}},ue={resize:function(){if(!this.disabled){var t,e,n=this.options,i=this.container,r=this.containerData,s=i.offsetWidth/r.width,o=i.offsetHeight/r.height,a=Math.abs(s-1)>Math.abs(o-1)?s:o;if(1!==a)n.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),n.restore&&(this.setCanvasData(Ct(t,(function(e,n){t[n]=e*a}))),this.setCropBoxData(Ct(e,(function(t,n){e[n]=t*a}))))}},dblclick:function(){this.disabled||this.options.dragMode===U||this.setDragMode(Et(this.dragBox,O)?F:j)},wheel:function(t){var e=this,n=Number(this.options.wheelZoomRatio)||.1,i=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?i=t.deltaY>0?1:-1:t.wheelDelta?i=-t.wheelDelta/120:t.detail&&(i=t.detail>0?1:-1),this.zoom(-i*n,t)))},cropStart:function(t){var e=t.buttons,n=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(pt(e)&&1!==e||pt(n)&&0!==n||t.ctrlKey))){var i,r=this.options,s=this.pointers;t.changedTouches?Ct(t.changedTouches,(function(t){s[t.identifier]=Kt(t)})):s[t.pointerId||0]=Kt(t),i=Object.keys(s).length>1&&r.zoomable&&r.zoomOnTouch?w:Lt(t.target,M),rt.test(i)&&!1!==Ut(this.element,H,{originalEvent:t,action:i})&&(t.preventDefault(),this.action=i,this.cropping=!1,i===y&&(this.cropping=!0,At(this.dragBox,D)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var n=this.pointers;t.preventDefault(),!1!==Ut(this.element,q,{originalEvent:t,action:e})&&(t.changedTouches?Ct(t.changedTouches,(function(t){kt(n[t.identifier]||{},Kt(t,!0))})):kt(n[t.pointerId||0]||{},Kt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,n=this.pointers;t.changedTouches?Ct(t.changedTouches,(function(t){delete n[t.identifier]})):delete n[t.pointerId||0],e&&(t.preventDefault(),Object.keys(n).length||(this.action=""),this.cropping&&(this.cropping=!1,Rt(this.dragBox,D,this.cropped&&this.options.modal)),Ut(this.element,z,{originalEvent:t,action:e}))}}},he={change:function(t){var e,n=this.options,i=this.canvasData,r=this.containerData,s=this.cropBoxData,o=this.pointers,a=this.action,c=n.aspectRatio,l=s.left,u=s.top,h=s.width,d=s.height,p=l+h,f=u+d,m=0,g=0,v=r.width,O=r.height,R=!0;!c&&t.shiftKey&&(c=h&&d?h/d:1),this.limited&&(m=s.minLeft,g=s.minTop,v=m+Math.min(r.width,i.width,i.left+i.width),O=g+Math.min(r.height,i.height,i.top+i.height));var N=o[Object.keys(o)[0]],L={x:N.endX-N.startX,y:N.endY-N.startY},D=function(t){switch(t){case C:p+L.x>v&&(L.x=v-p);break;case k:l+L.x<m&&(L.x=m-l);break;case S:u+L.y<g&&(L.y=g-u);break;case x:f+L.y>O&&(L.y=O-f);break}};switch(a){case _:l+=L.x,u+=L.y;break;case C:if(L.x>=0&&(p>=v||c&&(u<=g||f>=O))){R=!1;break}D(C),h+=L.x,h<0&&(a=k,h=-h,l-=h),c&&(d=h/c,u+=(s.height-d)/2);break;case S:if(L.y<=0&&(u<=g||c&&(l<=m||p>=v))){R=!1;break}D(S),d-=L.y,u+=L.y,d<0&&(a=x,d=-d,u-=d),c&&(h=d*c,l+=(s.width-h)/2);break;case k:if(L.x<=0&&(l<=m||c&&(u<=g||f>=O))){R=!1;break}D(k),h-=L.x,l+=L.x,h<0&&(a=C,h=-h,l-=h),c&&(d=h/c,u+=(s.height-d)/2);break;case x:if(L.y>=0&&(f>=O||c&&(l<=m||p>=v))){R=!1;break}D(x),d+=L.y,d<0&&(a=S,d=-d,u-=d),c&&(h=d*c,l+=(s.width-h)/2);break;case I:if(c){if(L.y<=0&&(u<=g||p>=v)){R=!1;break}D(S),d-=L.y,u+=L.y,h=d*c}else D(S),D(C),L.x>=0?p<v?h+=L.x:L.y<=0&&u<=g&&(R=!1):h+=L.x,L.y<=0?u>g&&(d-=L.y,u+=L.y):(d-=L.y,u+=L.y);h<0&&d<0?(a=A,d=-d,h=-h,u-=d,l-=h):h<0?(a=T,h=-h,l-=h):d<0&&(a=E,d=-d,u-=d);break;case T:if(c){if(L.y<=0&&(u<=g||l<=m)){R=!1;break}D(S),d-=L.y,u+=L.y,h=d*c,l+=s.width-h}else D(S),D(k),L.x<=0?l>m?(h-=L.x,l+=L.x):L.y<=0&&u<=g&&(R=!1):(h-=L.x,l+=L.x),L.y<=0?u>g&&(d-=L.y,u+=L.y):(d-=L.y,u+=L.y);h<0&&d<0?(a=E,d=-d,h=-h,u-=d,l-=h):h<0?(a=I,h=-h,l-=h):d<0&&(a=A,d=-d,u-=d);break;case A:if(c){if(L.x<=0&&(l<=m||f>=O)){R=!1;break}D(k),h-=L.x,l+=L.x,d=h/c}else D(x),D(k),L.x<=0?l>m?(h-=L.x,l+=L.x):L.y>=0&&f>=O&&(R=!1):(h-=L.x,l+=L.x),L.y>=0?f<O&&(d+=L.y):d+=L.y;h<0&&d<0?(a=I,d=-d,h=-h,u-=d,l-=h):h<0?(a=E,h=-h,l-=h):d<0&&(a=T,d=-d,u-=d);break;case E:if(c){if(L.x>=0&&(p>=v||f>=O)){R=!1;break}D(C),h+=L.x,d=h/c}else D(x),D(C),L.x>=0?p<v?h+=L.x:L.y>=0&&f>=O&&(R=!1):h+=L.x,L.y>=0?f<O&&(d+=L.y):d+=L.y;h<0&&d<0?(a=T,d=-d,h=-h,u-=d,l-=h):h<0?(a=A,h=-h,l-=h):d<0&&(a=I,d=-d,u-=d);break;case b:this.move(L.x,L.y),R=!1;break;case w:this.zoom(Gt(o),t),R=!1;break;case y:if(!L.x||!L.y){R=!1;break}e=Vt(this.cropper),l=N.startX-e.left,u=N.startY-e.top,h=s.minWidth,d=s.minHeight,L.x>0?a=L.y>0?E:I:L.x<0&&(l-=h,a=L.y>0?A:T),L.y<0&&(u-=d),this.cropped||(Ot(this.cropBox,P),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}R&&(s.width=h,s.height=d,s.left=l,s.top=u,this.action=a,this.renderCropBox()),Ct(o,(function(t){t.startX=t.endX,t.startY=t.endY}))}},de={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&At(this.dragBox,D),Ot(this.cropBox,P),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=kt({},this.initialImageData),this.canvasData=kt({},this.initialCanvasData),this.cropBoxData=kt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(kt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Ot(this.dragBox,D),At(this.cropBox,P)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,Ct(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Ot(this.cropper,R)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,At(this.cropper,R)),this},destroy:function(){var t=this.element;return t[v]?(t[v]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.canvasData,i=n.left,r=n.top;return this.moveTo(mt(t)?t:i+Number(t),mt(e)?e:r+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.canvasData,i=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(pt(t)&&(n.left=t,i=!0),pt(e)&&(n.top=e,i=!0),i&&this.renderCanvas(!0)),this},zoom:function(t,e){var n=this.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,null,e)},zoomTo:function(t,e,n){var i=this.options,r=this.canvasData,s=r.width,o=r.height,a=r.naturalWidth,c=r.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&i.zoomable){var l=a*t,u=c*t;if(!1===Ut(this.element,nt,{ratio:t,oldRatio:s/a,originalEvent:n}))return this;if(n){var h=this.pointers,d=Vt(this.cropper),p=h&&Object.keys(h).length?Yt(h):{pageX:n.pageX,pageY:n.pageY};r.left-=(l-s)*((p.pageX-d.left-r.left)/s),r.top-=(u-o)*((p.pageY-d.top-r.top)/o)}else _t(e)&&pt(e.x)&&pt(e.y)?(r.left-=(l-s)*((e.x-r.left)/s),r.top-=(u-o)*((e.y-r.top)/o)):(r.left-=(l-s)/2,r.top-=(u-o)/2);r.width=l,r.height=u,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),pt(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,pt(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(pt(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.imageData,i=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(pt(t)&&(n.scaleX=t,i=!0),pt(e)&&(n.scaleY=e,i=!0),i&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.options,i=this.imageData,r=this.canvasData,s=this.cropBoxData;if(this.ready&&this.cropped){t={x:s.left-r.left,y:s.top-r.top,width:s.width,height:s.height};var o=i.width/i.naturalWidth;if(Ct(t,(function(e,n){t[n]=e/o})),e){var a=Math.round(t.y+t.height),c=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=c-t.x,t.height=a-t.y}}else t={x:0,y:0,width:0,height:0};return n.rotatable&&(t.rotate=i.rotate||0),n.scalable&&(t.scaleX=i.scaleX||1,t.scaleY=i.scaleY||1),t},setData:function(t){var e=this.options,n=this.imageData,i=this.canvasData,r={};if(this.ready&&!this.disabled&&_t(t)){var s=!1;e.rotatable&&pt(t.rotate)&&t.rotate!==n.rotate&&(n.rotate=t.rotate,s=!0),e.scalable&&(pt(t.scaleX)&&t.scaleX!==n.scaleX&&(n.scaleX=t.scaleX,s=!0),pt(t.scaleY)&&t.scaleY!==n.scaleY&&(n.scaleY=t.scaleY,s=!0)),s&&this.renderCanvas(!0,!0);var o=n.width/n.naturalWidth;pt(t.x)&&(r.left=t.x*o+i.left),pt(t.y)&&(r.top=t.y*o+i.top),pt(t.width)&&(r.width=t.width*o),pt(t.height)&&(r.height=t.height*o),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?kt({},this.containerData):{}},getImageData:function(){return this.sized?kt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&Ct(["left","top","width","height","naturalWidth","naturalHeight"],(function(n){e[n]=t[n]})),e},setCanvasData:function(t){var e=this.canvasData,n=e.aspectRatio;return this.ready&&!this.disabled&&_t(t)&&(pt(t.left)&&(e.left=t.left),pt(t.top)&&(e.top=t.top),pt(t.width)?(e.width=t.width,e.height=t.width/n):pt(t.height)&&(e.height=t.height,e.width=t.height*n),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,n,i=this.cropBoxData,r=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&_t(t)&&(pt(t.left)&&(i.left=t.left),pt(t.top)&&(i.top=t.top),pt(t.width)&&t.width!==i.width&&(e=!0,i.width=t.width),pt(t.height)&&t.height!==i.height&&(n=!0,i.height=t.height),r&&(e?i.height=i.width/r:n&&(i.width=i.height*r)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,n=Qt(this.image,this.imageData,e,t);if(!this.cropped)return n;var i=this.getData(),r=i.x,s=i.y,o=i.width,c=i.height,l=n.width/Math.floor(e.naturalWidth);1!==l&&(r*=l,s*=l,o*=l,c*=l);var u=o/c,h=Xt({aspectRatio:u,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),d=Xt({aspectRatio:u,width:t.minWidth||0,height:t.minHeight||0},"cover"),p=Xt({aspectRatio:u,width:t.width||(1!==l?n.width:o),height:t.height||(1!==l?n.height:c)}),f=p.width,m=p.height;f=Math.min(h.width,Math.max(d.width,f)),m=Math.min(h.height,Math.max(d.height,m));var g=document.createElement("canvas"),v=g.getContext("2d");g.width=St(f),g.height=St(m),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,f,m);var _=t.imageSmoothingEnabled,y=void 0===_||_,b=t.imageSmoothingQuality;v.imageSmoothingEnabled=y,b&&(v.imageSmoothingQuality=b);var w,C,k,x,S,I,T=n.width,E=n.height,A=r,O=s;A<=-o||A>T?(A=0,w=0,k=0,S=0):A<=0?(k=-A,A=0,w=Math.min(T,o+A),S=w):A<=T&&(k=0,w=Math.min(o,T-A),S=w),w<=0||O<=-c||O>E?(O=0,C=0,x=0,I=0):O<=0?(x=-O,O=0,C=Math.min(E,c+O),I=C):O<=E&&(x=0,C=Math.min(c,E-O),I=C);var R=[A,O,w,C];if(S>0&&I>0){var P=f/o;R.push(k*P,x*P,S*P,I*P)}return v.drawImage.apply(v,[n].concat(a(R.map((function(t){return Math.floor(St(t))}))))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||mt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,n=this.dragBox,i=this.face;if(this.ready&&!this.disabled){var r=t===j,s=e.movable&&t===F;t=r||s?t:U,e.dragMode=t,Dt(n,M,t),Rt(n,O,r),Rt(n,$,s),e.cropBoxMovable||(Dt(i,M,t),Rt(i,O,r),Rt(i,$,s))}return this}},pe=f.Cropper,fe=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),!e||!at.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=kt({},ut,_t(n)&&n),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return s(t,[{key:"init",value:function(){var t,e=this.element,n=e.tagName.toLowerCase();if(!e[v]){if(e[v]=this,"img"===n){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===n&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var n=this.element,i=this.options;if(i.rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer)if(st.test(t))ot.test(t)?this.read(ie(t)):this.clone();else{var r=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=r,r.onabort=s,r.onerror=s,r.ontimeout=s,r.onprogress=function(){r.getResponseHeader("content-type")!==it&&r.abort()},r.onload=function(){e.read(r.response)},r.onloadend=function(){e.reloading=!1,e.xhr=null},i.checkCrossOrigin&&Ht(t)&&n.crossOrigin&&(t=Wt(t)),r.open("GET",t,!0),r.responseType="arraybuffer",r.withCredentials="use-credentials"===n.crossOrigin,r.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,n=this.imageData,i=se(t),r=0,s=1,o=1;if(i>1){this.url=re(t,it);var a=oe(i);r=a.rotate,s=a.scaleX,o=a.scaleY}e.rotatable&&(n.rotate=r),e.scalable&&(n.scaleX=s,n.scaleY=o),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,n=t.crossOrigin,i=e;this.options.checkCrossOrigin&&Ht(e)&&(n||(n="anonymous"),i=Wt(e)),this.crossOrigin=n,this.crossOriginUrl=i;var r=document.createElement("img");n&&(r.crossOrigin=n),r.src=i||e,r.alt=t.alt||"The image to crop",this.image=r,r.onload=this.start.bind(this),r.onerror=this.stop.bind(this),At(r,N),t.parentNode.insertBefore(r,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var n=f.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(f.navigator.userAgent),i=function(e,n){kt(t.imageData,{naturalWidth:e,naturalHeight:n,aspectRatio:e/n}),t.initialImageData=kt({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||n){var r=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=r,r.onload=function(){i(r.width,r.height),n||s.removeChild(r)},r.src=e.src,n||(r.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(r))}else i(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,n=this.image,i=t.parentNode,r=document.createElement("div");r.innerHTML=ht;var s=r.querySelector(".".concat(v,"-container")),o=s.querySelector(".".concat(v,"-canvas")),a=s.querySelector(".".concat(v,"-drag-box")),c=s.querySelector(".".concat(v,"-crop-box")),l=c.querySelector(".".concat(v,"-face"));this.container=i,this.cropper=s,this.canvas=o,this.dragBox=a,this.cropBox=c,this.viewBox=s.querySelector(".".concat(v,"-view-box")),this.face=l,o.appendChild(n),At(t,P),i.insertBefore(s,t.nextSibling),Ot(n,N),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,At(c,P),e.guides||At(c.getElementsByClassName("".concat(v,"-dashed")),P),e.center||At(c.getElementsByClassName("".concat(v,"-center")),P),e.background&&At(s,"".concat(v,"-bg")),e.highlight||At(l,L),e.cropBoxMovable&&(At(l,$),Dt(l,M,_)),e.cropBoxResizable||(At(c.getElementsByClassName("".concat(v,"-line")),P),At(c.getElementsByClassName("".concat(v,"-point")),P)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),yt(e.ready)&&Ft(t,Q,e.ready,{once:!0}),Ut(t,Q)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var t=this.cropper.parentNode;t&&t.removeChild(this.cropper),Ot(this.element,P)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=pe,t}},{key:"setDefaults",value:function(t){kt(ut,_t(t)&&t)}}]),t}();return kt(fe.prototype,ae,ce,le,ue,he,de),fe}))},1902:function(t,e,n){"use strict";n.d(e,{Z:function(){return i.Z}});var i=n(8180),r="firebase",s="9.8.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i.Z.registerVersion(r,s,"app-compat")},9085:function(t,e,n){"use strict";var i=n(8180),r=n(1075),s=n(4444),o=(n(5816),n(3333),n(8463));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=2e3;async function l(t,e,n){var i;const{BuildInfo:s}=a();(0,r.aq)(e.sessionId,"AuthEvent did not contain a session ID");const o=await f(e.sessionId),c={};return(0,r.ar)()?c["ibi"]=s.packageName:(0,r.as)()?c["apn"]=s.packageName:(0,r.at)(t,"operation-not-supported-in-this-environment"),s.displayName&&(c["appDisplayName"]=s.displayName),c["sessionId"]=o,(0,r.au)(t,n,e.type,void 0,null!==(i=e.eventId)&&void 0!==i?i:void 0,c)}async function u(t){const{BuildInfo:e}=a(),n={};(0,r.ar)()?n.iosBundleId=e.packageName:(0,r.as)()?n.androidPackageName=e.packageName:(0,r.at)(t,"operation-not-supported-in-this-environment"),await(0,r.av)(t,n)}function h(t){const{cordova:e}=a();return new Promise((n=>{e.plugins.browsertab.isAvailable((i=>{let s=null;i?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,(0,r.ap)()?"_blank":"_system","location=yes"),n(s)}))}))}async function d(t,e,n){const{cordova:i}=a();let s=()=>{};try{await new Promise(((o,a)=>{let l=null;function u(){var t;o();const e=null===(t=i.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function h(){l||(l=window.setTimeout((()=>{a((0,r.aw)(t,"redirect-cancelled-by-user"))}),c))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&h()}e.addPassiveListener(u),document.addEventListener("resume",h,!1),(0,r.as)()&&document.addEventListener("visibilitychange",d,!1),s=()=>{e.removePassiveListener(u),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",d,!1),l&&window.clearTimeout(l)}}))}finally{s()}}function p(t){var e,n,i,s,o,c,l,u,h,d;const p=a();(0,r.ax)("function"===typeof(null===(e=null===p||void 0===p?void 0:p.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.ax)("undefined"!==typeof(null===(n=null===p||void 0===p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.ax)("function"===typeof(null===(o=null===(s=null===(i=null===p||void 0===p?void 0:p.cordova)||void 0===i?void 0:i.plugins)||void 0===s?void 0:s.browsertab)||void 0===o?void 0:o.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"===typeof(null===(u=null===(l=null===(c=null===p||void 0===p?void 0:p.cordova)||void 0===c?void 0:c.plugins)||void 0===l?void 0:l.browsertab)||void 0===u?void 0:u.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"===typeof(null===(d=null===(h=null===p||void 0===p?void 0:p.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function f(t){const e=m(t),n=await crypto.subtle.digest("SHA-256",e),i=Array.from(new Uint8Array(n));return i.map((t=>t.toString(16).padStart(2,"0"))).join("")}function m(t){if((0,r.aq)(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=20;class v extends r.aA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((t=>{this.resolveInialized=t}))}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach((e=>e(t))),super.onEvent(t)}async initialized(){await this.initPromise}}function _(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:C(),postBody:null,tenantId:t.tenantId,error:(0,r.aw)(t,"no-auth-event")}}function y(t,e){return k()._set(x(t),e)}async function b(t){const e=await k()._get(x(t));return e&&await k()._remove(x(t)),e}function w(t,e){var n,i;const s=I(e);if(s.includes("/__/auth/callback")){const e=T(s),o=e["firebaseError"]?S(decodeURIComponent(e["firebaseError"])):null,a=null===(i=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],c=a?(0,r.aw)(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function C(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<g;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function k(){return(0,r.ay)(r.b)}function x(t){return(0,r.az)("authEvent",t.config.apiKey,t.name)}function S(t){try{return JSON.parse(t)}catch(e){return null}}function I(t){const e=T(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,i=T(n)["link"],r=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=T(r)["link"];return s||r||i||n||t}function T(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return(0,s.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=500;class A{constructor(){this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new v(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){(0,r.at)(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,i){p(t);const s=await this._initialize(t);await s.initialized(),s.resetRedirect(),(0,r.aD)(),await this._originValidation(t);const o=_(t,n,i);await y(t,o);const a=await l(t,o,e),c=await h(a);return d(t,s,c)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=u(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=a(),s=setTimeout((async()=>{await b(t),e.onEvent(R())}),E),o=async n=>{clearTimeout(s);const i=await b(t);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=w(i,n["url"])),e.onEvent(r||R())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const c=i,l=`${r.packageName.toLowerCase()}://`;a().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(l)&&o({url:t}),"function"===typeof c)try{c(t)}catch(e){console.error(e)}}}}const O=A;function R(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.aw)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){(0,r.aE)(t)._logFramework(e)}var N="@firebase/auth-compat",L="0.2.17";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=1e3;function $(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function M(){return"http:"===$()||"https:"===$()}function B(t=(0,s.z$)()){return!("file:"!==$()&&"ionic:"!==$()&&"capacitor:"!==$()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function j(){return(0,s.b$)()||(0,s.UG)()}function F(){return(0,s.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function U(t=(0,s.z$)()){return/Edge\/\d+/.test(t)}function V(t=(0,s.z$)()){return F()||U(t)}function z(){try{const t=self.localStorage,e=r.aI();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!V()||(0,s.hl)()}catch(t){return q()&&(0,s.hl)()}return!1}function q(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function H(){return(M()||(0,s.ru)()||B())&&!j()&&z()&&!q()}function W(){return B()&&"undefined"!==typeof document}async function Z(){return!!W()&&new Promise((t=>{const e=setTimeout((()=>{t(!1)}),D);document.addEventListener("deviceready",(()=>{clearTimeout(e),t(!0)}))}))}function G(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={LOCAL:"local",NONE:"none",SESSION:"session"},Y=r.ax,X="persistence";function J(t,e){Y(Object.values(K).includes(e),t,"invalid-persistence-type"),(0,s.b$)()?Y(e!==K.SESSION,t,"unsupported-persistence-type"):(0,s.UG)()?Y(e===K.NONE,t,"unsupported-persistence-type"):q()?Y(e===K.NONE||e===K.LOCAL&&(0,s.hl)(),t,"unsupported-persistence-type"):Y(e===K.NONE||z(),t,"unsupported-persistence-type")}async function Q(t){await t._initializationPromise;const e=et(),n=r.az(X,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function tt(t,e){const n=et();if(!n)return[];const i=r.az(X,t,e),s=n.getItem(i);switch(s){case K.NONE:return[r.L];case K.LOCAL:return[r.i,r.a];case K.SESSION:return[r.a];default:return[]}}function et(){var t;try{return(null===(t=G())||void 0===t?void 0:t.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=r.ax;class it{constructor(){this.browserResolver=r.ay(r.k),this.cordovaResolver=r.ay(O),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,i)}async _openRedirect(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,i)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return W()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nt(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await Z();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t.unwrap()}function st(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return ct(t)}function at(t,e){var n,i;const s=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(i=e)||void 0===i?void 0:i.code)){const n=e;n.resolver=new ht(t,r.an(t,e))}else if(s){const t=ct(e),n=e;t&&(n.credential=t,n.tenantId=s.tenantId||void 0,n.email=s.email||void 0,n.phoneNumber=s.phoneNumber||void 0)}}function ct(t){const{_tokenResponse:e}=t instanceof s.ZR?t.customData:t;if(!e)return null;if(!(t instanceof s.ZR)&&"temporaryProof"in e&&"phoneNumber"in e)return r.P.credentialFromResult(t);const n=e.providerId;if(!n||n===r.o.PASSWORD)return null;let i;switch(n){case r.o.GOOGLE:i=r.Q;break;case r.o.FACEBOOK:i=r.N;break;case r.o.GITHUB:i=r.T;break;case r.o.TWITTER:i=r.W;break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return s||o||t||a?a?n.startsWith("saml.")?r.aL._create(n,a):r.J._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:t,accessToken:s}):new r.U(n).credential({idToken:t,accessToken:s,rawNonce:c}):null}return t instanceof s.ZR?i.credentialFromError(t):i.credentialFromResult(t)}function lt(t,e){return e.catch((e=>{throw e instanceof s.ZR&&at(t,e),e})).then((t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:ot(t),additionalUserInfo:r.al(t),user:dt.getOrCreate(n)}}))}async function ut(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>lt(t,n.confirm(e))}}class ht{constructor(t,e){this.resolver=e,this.auth=st(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return lt(rt(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this._delegate=t,this.multiFactor=r.ao(t)}static getOrCreate(t){return dt.USER_MAP.has(t)||dt.USER_MAP.set(t,new dt(t)),dt.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return lt(this.auth,r.Z(this._delegate,t))}async linkWithPhoneNumber(t,e){return ut(this.auth,r.l(this._delegate,t,e))}async linkWithPopup(t){return lt(this.auth,r.d(this._delegate,t,it))}async linkWithRedirect(t){return await Q(r.aE(this.auth)),r.g(this._delegate,t,it)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return lt(this.auth,r._(this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return ut(this.auth,r.r(this._delegate,t,e))}reauthenticateWithPopup(t){return lt(this.auth,r.e(this._delegate,t,it))}async reauthenticateWithRedirect(t){return await Q(r.aE(this.auth)),r.h(this._delegate,t,it)}sendEmailVerification(t){return r.ab(this._delegate,t)}async unlink(t){return await r.ak(this._delegate,t),this}updateEmail(t){return r.ag(this._delegate,t)}updatePassword(t){return r.ah(this._delegate,t)}updatePhoneNumber(t){return r.u(this._delegate,t)}updateProfile(t){return r.af(this._delegate,t)}verifyBeforeUpdateEmail(t,e){return r.ac(this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}dt.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt=r.ax;class ft{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;pt(n,"invalid-api-key",{appName:t.name}),pt(n,"invalid-api-key",{appName:t.name});const i="undefined"!==typeof window?it:void 0;this._delegate=e.initialize({options:{persistence:gt(n,t.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?dt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){r.G(this._delegate,t,e)}applyActionCode(t){return r.a2(this._delegate,t)}checkActionCode(t){return r.a3(this._delegate,t)}confirmPasswordReset(t,e){return r.a1(this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return lt(this._delegate,r.a5(this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return r.aa(this._delegate,t)}isSignInWithEmailLink(t){return r.a8(this._delegate,t)}async getRedirectResult(){pt(H(),this._delegate,"operation-not-supported-in-this-environment");const t=await r.j(this._delegate,it);return t?lt(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){P(this._delegate,t)}onAuthStateChanged(t,e,n){const{next:i,error:r,complete:s}=mt(t,e,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(t,e,n){const{next:i,error:r,complete:s}=mt(t,e,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(t,e){return r.a7(this._delegate,t,e)}sendPasswordResetEmail(t,e){return r.a0(this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(J(this._delegate,t),t){case K.SESSION:e=r.a;break;case K.LOCAL:const t=await r.ay(r.i)._isAvailable();e=t?r.i:r.b;break;case K.NONE:e=r.L;break;default:return r.at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return lt(this._delegate,r.X(this._delegate))}signInWithCredential(t){return lt(this._delegate,r.Y(this._delegate,t))}signInWithCustomToken(t){return lt(this._delegate,r.$(this._delegate,t))}signInWithEmailAndPassword(t,e){return lt(this._delegate,r.a6(this._delegate,t,e))}signInWithEmailLink(t,e){return lt(this._delegate,r.a9(this._delegate,t,e))}signInWithPhoneNumber(t,e){return ut(this._delegate,r.s(this._delegate,t,e))}async signInWithPopup(t){return pt(H(),this._delegate,"operation-not-supported-in-this-environment"),lt(this._delegate,r.c(this._delegate,t,it))}async signInWithRedirect(t){return pt(H(),this._delegate,"operation-not-supported-in-this-environment"),await Q(this._delegate),r.f(this._delegate,t,it)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return r.a4(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function mt(t,e,n){let i=t;"function"!==typeof t&&({next:i,error:e,complete:n}=t);const r=i,s=t=>r(t&&dt.getOrCreate(t));return{next:s,error:e,complete:n}}function gt(t,e){const n=tt(t,e);if("undefined"===typeof self||n.includes(r.i)||n.push(r.i),"undefined"!==typeof window)for(const i of[r.b,r.a])n.includes(i)||n.push(i);return n.includes(r.L)||n.push(r.L),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.Persistence=K;class vt{constructor(){this.providerId="phone",this._delegate=new r.P(rt(i.Z.auth()))}static credential(t,e){return r.P.credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}vt.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,vt.PROVIDER_ID=r.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t=r.ax;class yt{constructor(t,e,n=i.Z.app()){var s;_t(null===(s=n.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new r.R(t,e,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="auth-compat";function wt(t){t.INTERNAL.registerComponent(new o.wA(bt,(t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new ft(e,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.M,FacebookAuthProvider:r.N,GithubAuthProvider:r.T,GoogleAuthProvider:r.Q,OAuthProvider:r.U,SAMLAuthProvider:r.V,PhoneAuthProvider:vt,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:yt,TwitterAuthProvider:r.W,Auth:ft,AuthCredential:r.H,Error:s.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(N,L)}wt(i.Z)},6334:function(t,e,n){"use strict";var i=n(8180),r=n(8463),s=n(5816),o=n(4444),a=n(3333);const c="@firebase/database",l="0.13.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function h(t){u=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,o.Pz)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,o.cI)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,o.r3)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new d(e)}}catch(e){}return new p},m=f("localStorage"),g=f("sessionStorage"),v=new a.Yd("@firebase/database"),_=function(){let t=1;return function(){return t++}}(),y=function(t){const e=(0,o.dS)(t),n=new o.gQ;n.update(e);const i=n.digest();return o.US.encodeByteArray(i)},b=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?e+=b.apply(null,i):e+="object"===typeof i?(0,o.Pz)(i):i,e+=" "}return e};let w=null,C=!0;const k=function(t,e){(0,o.hu)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(v.logLevel=a["in"].VERBOSE,w=v.log.bind(v),e&&g.set("logging_enabled",!0)):"function"===typeof t?w=t:(w=null,g.remove("logging_enabled"))},x=function(...t){if(!0===C&&(C=!1,null===w&&!0===g.get("logging_enabled")&&k(!0)),w){const e=b.apply(null,t);w(e)}},S=function(t){return function(...e){x(t,...e)}},I=function(...t){const e="FIREBASE INTERNAL ERROR: "+b(...t);v.error(e)},T=function(...t){const e=`FIREBASE FATAL ERROR: ${b(...t)}`;throw v.error(e),new Error(e)},E=function(...t){const e="FIREBASE WARNING: "+b(...t);v.warn(e)},A=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R=function(t){if((0,o.Yr)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",N="[MAX_NAME]",L=function(t,e){if(t===e)return 0;if(t===P||e===N)return-1;if(e===P||t===N)return 1;{const n=Z(t),i=Z(e);return null!==n?null!==i?n-i===0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},D=function(t,e){return t===e?0:t<e?-1:1},$=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,o.Pz)(e))},M=function(t){if("object"!==typeof t||null===t)return(0,o.Pz)(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,o.Pz)(e[i]),n+=":",n+=M(t[e[i]]);return n+="}",n},B=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F=function(t){(0,o.hu)(!O(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,a,c,l;0===t?(s=0,a=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=c+i,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},V=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function z(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const q=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,W=2147483647,Z=function(t){if(q.test(t)){const e=Number(t);if(e>=H&&e<=W)return e}return null},G=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw E("Exception was thrown by user callback.",t),e}),Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(x("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(t)}}class Q{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="5",et="v",nt="s",it="r",rt="f",st=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ot="ls",at="p",ct="ac",lt="websocket",ut="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t,e,n,i,r=!1,s="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function dt(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pt(t,e,n){let i;if((0,o.hu)("string"===typeof e,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),e===lt)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ut)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}dt(t)&&(n["ns"]=t.namespace);const r=[];return j(n,((t,e)=>{r.push(t+"="+e)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,o.r3)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,o.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={},gt={};function vt(t){const e=t.toString();return mt[e]||(mt[e]=new ft),mt[e]}function _t(t,e){const n=t.toString();return gt[n]||(gt[n]=e()),gt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&G((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="start",wt="close",Ct="pLPCommand",kt="pRTLPCB",xt="id",St="pw",It="ser",Tt="cb",Et="seg",At="ts",Ot="d",Rt="dframe",Pt=1870,Nt=30,Lt=Pt-Nt,Dt=25e3,$t=3e4;class Mt{constructor(t,e,n,i,r,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(t),this.stats_=vt(e),this.urlFn=t=>(this.appCheckToken&&(t[ct]=this.appCheckToken),pt(e,ut,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new yt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor($t)),R((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bt(((...t)=>{const[e,n,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===bt)this.id=n,this.password=i;else{if(e!==wt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[bt]="t",t[It]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[Tt]=this.scriptTagHolder.uniqueCallbackIdentifier),t[et]=tt,this.transportSessionId&&(t[nt]=this.transportSessionId),this.lastSessionId&&(t[ot]=this.lastSessionId),this.applicationId&&(t[at]=this.applicationId),this.appCheckToken&&(t[ct]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&st.test(location.hostname)&&(t[it]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mt.forceAllow_=!0}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Mt.forceAllow_||!Mt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!V())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,o.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,o.h$)(e),i=B(n,Lt);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Rt]="t",n[xt]=t,n[St]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,o.Pz)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Bt{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=_(),window[Ct+this.uniqueCallbackIdentifier]=t,window[kt+this.uniqueCallbackIdentifier]=e,this.myIFrame=Bt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){x("frame writing exception"),r.stack&&x(r.stack),x(r)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||x("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[xt]=this.myID,t[St]=this.myPW,t[It]=this.currentSerial;let e=this.urlFn(t),n="",i=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Nt+n.length<=Pt))break;{const t=this.pendingSegs.shift();n=n+"&"+Et+i+"="+t.seg+"&"+At+i+"="+t.ts+"&"+Ot+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(Dt)),r=()=>{clearTimeout(i),n()};this.addTag(t,r)}addTag(t,e){(0,o.Yr)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{x("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=16384,Ft=45e3;let Ut=null;"undefined"!==typeof MozWebSocket?Ut=MozWebSocket:"undefined"!==typeof WebSocket&&(Ut=WebSocket);class Vt{constructor(t,e,n,i,r,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=vt(e),this.connURL=Vt.connectionURL_(e,s,o,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,r){const s={};return s[et]=tt,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&st.test(location.hostname)&&(s[it]=rt),e&&(s[nt]=e),n&&(s[ot]=n),i&&(s[ct]=i),r&&(s[at]=r),pt(t,lt,s)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let t;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/${tt}/${u}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyBM-idQonpcqFWdKmfbGV87Exy8ZnYNi1I",VUE_APP_APP_ID:"1:787807385825:web:5e792bade238aafa0b9fa0",VUE_APP_AUTH_DOMAIN:"meu-pet-rs.firebaseapp.com",VUE_APP_MESSAGING_SENDER_ID:"787807385825",VUE_APP_PROJECT_ID:"meu-pet-rs",VUE_APP_STORAGE_BUCKET:"meu-pet-rs.appspot.com",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ut(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Ut&&!Vt.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,o.cI)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,o.Pz)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=B(e,jt);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ft))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2,Vt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Mt,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Vt&&Vt["isAvailable"]();let n=e&&!Vt.previouslyFailed();if(t.webSocketOnly&&(e||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Vt];else{const t=this.transports_=[];for(const e of zt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);zt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zt.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt=6e4,Ht=5e3,Wt=10240,Zt=102400,Gt="t",Kt="d",Yt="s",Xt="r",Jt="e",Qt="o",te="a",ee="n",ne="p",ie="h";class re{constructor(t,e,n,i,r,s,o,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new zt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gt in t){const e=t[Gt];e===te?this.upgradeIfSecondaryHealthy_():e===Xt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Qt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=$("t",t),n=$("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ne,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:te,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ee,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=$("t",t),n=$("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=$(Gt,t);if(Kt in t){const n=t[Kt];if(e===ie)this.onHandshake_(n);else if(e===ee){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Xt?this.onReset_(n):e===Jt?I("Server Error: "+n):e===Qt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),tt!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(qt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ne,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,o.hu)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let r=0;r<i.length;r++)if(i[r].callback===e&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(t){(0,o.hu)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends oe{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ae}getInitialEvent(t){return(0,o.hu)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=32,le=768;class ue{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function he(){return new ue("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pe(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function me(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ge(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ve(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _e(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ye(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ue)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ue(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=de(t),i=de(e);if(null===n)return e;if(n===i)return we(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ce(t,e){const n=ve(t,0),i=ve(e,0);for(let r=0;r<n.length&&r<i.length;r++){const t=L(n[r],i[r]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ke(t,e){if(pe(t)!==pe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function xe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(pe(t)>pe(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Se{constructor(t,e){this.errorPrefix_=e,this.parts_=ve(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);Ee(this)}}function Ie(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,o.ug)(e),Ee(t)}function Te(t){const e=t.parts_.pop();t.byteLength_-=(0,o.ug)(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ee(t){if(t.byteLength_>le)throw new Error(t.errorPrefix_+"has a key path longer than "+le+" bytes ("+t.byteLength_+").");if(t.parts_.length>ce)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ce+") or object contains a cycle "+Ae(t))}function Ae(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends oe{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new Oe}getInitialEvent(t){return(0,o.hu)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1e3,Pe=3e5,Ne=3e3,Le=3e4,De=1.3,$e=3e4,Me="server_kill",Be=3;class je extends se{constructor(t,e,n,i,r,s,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=je.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Re,this.maxReconnectDelay_=Pe,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&ae.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_((0,o.Pz)(r)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new o.BH,n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[r];void 0!==t&&i===t&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),e.reject(new Error("Client is offline.")))}),Ne),this.connected_&&this.sendGet_(r),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(s).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";t.tag&&(r["q"]=e._queryObject,r["t"]=t.tag),r["h"]=t.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];je.warnOnListenWarnings_(s,e);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,o.r3)(t,"w")){const n=(0,o.DV)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,o.GJ)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Le)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,o.w9)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],i=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const r={p:e,d:n};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,(t=>{i&&setTimeout((()=>{i(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,r){this.initConnection_();const s={p:e,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,o.Pz)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):I("Unrecognized action received from server: "+(0,o.Pz)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>$e&&(this.reconnectDelay_=Re),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*De)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+je.nextConnectionId_++,r=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(t){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?x("getToken() completed but was canceled"):(x("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new re(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{E(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Me)}),r))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&E(I),c())}}}interrupt(t){x("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){x("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>M(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new ue(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){x("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Be&&(this.reconnectDelay_=Le,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){x("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Be&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,o.Yr)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+u.replace(/\./g,"-")]=1,(0,o.uI)()?t["framework.cordova"]=1:(0,o.b$)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ae.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&t}}je.nextPersistentConnectionId_=0,je.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Fe(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Fe(P,t),i=new Fe(P,e);return 0!==this.compare(n,i)}minPost(){return Fe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;class ze extends Ue{static get __EMPTY_NODE(){return Ve}static set __EMPTY_NODE(t){Ve=t}compare(t,e){return L(t.name,e.name)}isDefinedOn(t){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(N,Ve)}makePost(t,e){return(0,o.hu)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Fe(t,Ve)}toString(){return".key"}}const qe=new ze;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!t.isEmpty())if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class We{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:We.RED,this.left=null!=i?i:Ge.EMPTY_NODE,this.right=null!=r?r:Ge.EMPTY_NODE}copy(t,e,n,i,r){return new We(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Ge.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}We.RED=!0,We.BLACK=!1;class Ze{copy(t,e,n,i,r){return this}insert(t,e,n){return new We(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(t,e=Ge.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Ge(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(t){return new Ge(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,We.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new He(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new He(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(t,e){return L(t.name,e.name)}function Ye(t,e){return L(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe;function Je(t){Xe=t}Ge.EMPTY_NODE=new Ze;const Qe=function(t){return"number"===typeof t?"number:"+F(t):"string:"+t},tn=function(t){if(t.isLeafNode()){const e=t.val();(0,o.hu)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,o.r3)(e,".sv"),"Priority must be a string or number.")}else(0,o.hu)(t===Xe||t.isEmpty(),"priority of unexpected type.");(0,o.hu)(t===Xe||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,nn,rn;class sn{constructor(t,e=sn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),tn(this.priorityNode_)}static set __childrenNodeConstructor(t){en=t}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new sn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return be(t)?this:".priority"===de(t)?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:sn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=de(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===pe(t),".priority must be the last token in a path"),this.updateImmediateChild(n,sn.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?F(this.value_):this.value_,this.lazyHash_=y(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===sn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof sn.__childrenNodeConstructor?-1:((0,o.hu)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=sn.VALUE_TYPE_ORDER.indexOf(e),r=sn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(i>=0,"Unknown leaf type: "+e),(0,o.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function on(t){nn=t}function an(t){rn=t}sn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class cn extends Ue{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),r=n.compareTo(i);return 0===r?L(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(N,new sn("[PRIORITY-POST]",rn))}makePost(t,e){const n=nn(t);return new Fe(e,new sn("[PRIORITY-POST]",n))}toString(){return".priority"}}const ln=new cn,un=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){const e=t=>parseInt(Math.log(t)/un,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=n(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const dn=function(t,e,n,i){t.sort(e);const r=function(e,i){const s=i-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new We(a,o.node,We.BLACK,null,null);{const c=parseInt(s/2,10)+e,l=r(e,c),u=r(c+1,i);return o=t[c],a=n?n(o):o,new We(a,o.node,We.BLACK,l,u)}},s=function(e){let i=null,s=null,o=t.length;const a=function(e,i){const s=o-e,a=o;o-=e;const l=r(s+1,a),u=t[s],h=n?n(u):u;c(new We(h,u.node,i,null,l))},c=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,We.BLACK):(a(i,We.BLACK),a(i,We.RED))}return s},o=new hn(t.length),a=s(o);return new Ge(i||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;const fn={};class mn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,o.hu)(fn&&ln,"ChildrenNode.ts has not been loaded"),pn=pn||new mn({".priority":fn},{".priority":ln}),pn}get(t){const e=(0,o.DV)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ge?e:null}hasIndex(t){return(0,o.r3)(this.indexSet_,t.toString())}addIndex(t,e){(0,o.hu)(t!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(Fe.Wrap);let s,a=r.getNext();while(a)i=i||t.isDefinedOn(a.node),n.push(a),a=r.getNext();s=i?dn(n,t.getCompare()):fn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=s,new mn(u,l)}addToIndexes(t,e){const n=(0,o.UI)(this.indexes_,((n,i)=>{const r=(0,o.DV)(this.indexSet_,i);if((0,o.hu)(r,"Missing index implementation for "+i),n===fn){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(Fe.Wrap);let s=i.getNext();while(s)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),dn(n,r.getCompare())}return fn}{const i=e.get(t.name);let r=n;return i&&(r=r.remove(new Fe(t.name,i))),r.insert(t,t.node)}}));return new mn(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,o.UI)(this.indexes_,(n=>{if(n===fn)return n;{const i=e.get(t.name);return i?n.remove(new Fe(t.name,i)):n}}));return new mn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn;class vn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&tn(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new vn(new Ge(Ye),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(t){return this.children_.isEmpty()?this:new vn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?gn:e}}getChild(t){const e=de(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,o.hu)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Fe(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?gn:this.priorityNode_;return new vn(i,s,r)}}updateChild(t,e){const n=de(t);if(null===n)return e;{(0,o.hu)(".priority"!==de(t)||1===pe(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,r=!0;if(this.forEachChild(ln,((s,o)=>{e[s]=o.val(t),n++,r&&vn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!t&&r&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(ln,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":y(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Fe(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Fe(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Fe(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Fe.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Fe.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)>0)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===yn?-1:0}withIndex(t){if(t===qe||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new vn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===qe||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(ln),n=e.getIterator(ln);let i=t.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===qe?null:this.indexMap_.get(t.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends vn{constructor(){super(new Ge(Ye),vn.EMPTY_NODE,mn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return vn.EMPTY_NODE}isEmpty(){return!1}}const yn=new _n;Object.defineProperties(Fe,{MIN:{value:new Fe(P,vn.EMPTY_NODE)},MAX:{value:new Fe(N,yn)}}),ze.__EMPTY_NODE=vn.EMPTY_NODE,sn.__childrenNodeConstructor=vn,Je(yn),an(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=!0;function wn(t,e=null){if(null===t)return vn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,o.hu)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new sn(n,wn(e))}if(t instanceof Array||!bn){let n=vn.EMPTY_NODE;return j(t,((e,i)=>{if((0,o.r3)(t,e)&&"."!==e.substring(0,1)){const t=wn(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(wn(e))}{const n=[];let i=!1;const r=t;if(j(r,((t,e)=>{if("."!==t.substring(0,1)){const r=wn(e);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Fe(t,r)))}})),0===n.length)return vn.EMPTY_NODE;const s=dn(n,Ke,(t=>t.name),Ye);if(i){const t=dn(n,ln.getCompare());return new vn(s,wn(e),new mn({".priority":t},{".priority":ln}))}return new vn(s,wn(e),mn.Default)}}on(wn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends Ue{constructor(t){super(),this.indexPath_=t,(0,o.hu)(!be(t)&&".priority"!==de(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),r=n.compareTo(i);return 0===r?L(t.name,e.name):r}makePost(t,e){const n=wn(t),i=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Fe(e,i)}maxPost(){const t=vn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new Fe(N,t)}toString(){return ve(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ue{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?L(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(t,e){const n=wn(t);return new Fe(e,n)}toString(){return".value"}}const xn=new kn,Sn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In="-",Tn="z",En=786,An=function(){let t=0;const e=[];return function(n){const i=n===t;let r;t=n;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Sn.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(i){for(r=11;r>=0&&63===e[r];r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Sn.charAt(e[r]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}(),On=function(t){if(t===""+W)return In;const e=Z(t);if(null!=e)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<En)return n.push(In),n.join("");let i=n.length-1;while(i>=0&&n[i]===Tn)i--;if(-1===i)return N;const r=n[i],s=Sn.charAt(Sn.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},Rn=function(t){if(t===""+H)return P;const e=Z(t);if(null!=e)return""+(e-1);const n=new Array(t.length);for(let i=0;i<n.length;i++)n[i]=t.charAt(i);return n[n.length-1]===In?1===n.length?""+W:(delete n[n.length-1],n.join("")):(n[n.length-1]=Sn.charAt(Sn.indexOf(n[n.length-1])-1),n.join("")+Tn.repeat(En-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ln(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $n(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.index_=t}updateChild(t,e,n,i,r,s){(0,o.hu)(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?t:(null!=s&&(n.isEmpty()?t.hasChild(e)?s.trackChildChange(Ln(e,a)):(0,o.hu)(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Nn(e,n)):s.trackChildChange(Dn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(ln,((t,i)=>{e.hasChild(t)||n.trackChildChange(Ln(t,i))})),e.isLeafNode()||e.forEachChild(ln,((e,i)=>{if(t.hasChild(e)){const r=t.getImmediateChild(e);r.equals(i)||n.trackChildChange(Dn(e,i,r))}else n.trackChildChange(Nn(e,i))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?vn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.indexedFilter_=new Mn(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Bn.getStartPost_(t),this.endPost_=Bn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,i,r,s){return this.matches(new Fe(e,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,i,r,s)}updateFullNode(t,e,n){e.isLeafNode()&&(e=vn.EMPTY_NODE);let i=e.withIndex(this.index_);i=i.updatePriority(vn.EMPTY_NODE);const r=this;return e.forEachChild(ln,((t,e)=>{r.matches(new Fe(t,e))||(i=i.updateImmediateChild(t,vn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.rangedFilter_=new Bn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,i,r,s){return this.rangedFilter_.matches(new Fe(e,n))||(n=vn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,i,r,s):this.fullLimitUpdateChild_(t,e,n,r,s)}updateFullNode(t,e,n){let i;if(e.isLeafNode()||e.isEmpty())i=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;i=vn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(e.name,e.node),n++}}else{let t,n,r,s;if(i=e.withIndex(this.index_),i=i.updatePriority(vn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else s=i.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const e=s.getNext();!a&&r(t,e)<=0&&(a=!0);const c=a&&o<this.limit_&&r(e,n)<=0;c?o++:i=i.updateImmediateChild(e.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,i,r){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else s=this.index_.getCompare();const a=t;(0,o.hu)(a.numChildren()===this.limit_,"");const c=new Fe(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===e||a.hasChild(o.name)))o=i.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(Dn(e,n,t)),a.updateImmediateChild(e,n);{null!=r&&r.trackChildChange(Ln(e,t));const n=a.updateImmediateChild(e,vn.EMPTY_NODE),i=null!=o&&this.rangedFilter_.matches(o);return i?(null!=r&&r.trackChildChange(Nn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?t:u&&s(l,c)>=0?(null!=r&&(r.trackChildChange(Ln(l.name,l.node)),r.trackChildChange(Nn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,vn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const t=new Fn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Un(t){return t.loadsAllData()?new Mn(t.getIndex()):t.hasLimit()?new jn(t):new Bn(t)}function Vn(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function zn(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function qn(t,e,n){const i=t.copy();return i.startSet_=!0,void 0===e&&(e=null),i.indexStartValue_=e,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Hn(t,e,n){let i;if(t.index_===qe)"string"===typeof e&&(e=On(e)),i=qn(t,e,n);else{let r;r=null==n?N:On(n),i=qn(t,e,r)}return i.startAfterSet_=!0,i}function Wn(t,e,n){const i=t.copy();return i.endSet_=!0,void 0===e&&(e=null),i.indexEndValue_=e,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Zn(t,e,n){let i,r;return t.index_===qe?("string"===typeof e&&(e=Rn(e)),r=Wn(t,e,n)):(i=null==n?P:Rn(n),r=Wn(t,e,i)),r.endBeforeSet_=!0,r}function Gn(t,e){const n=t.copy();return n.index_=e,n}function Kn(t){const e={};if(t.isDefault())return e;let n;return t.index_===ln?n="$priority":t.index_===xn?n="$value":t.index_===qe?n="$key":((0,o.hu)(t.index_ instanceof Cn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,o.Pz)(n),t.startSet_&&(e["startAt"]=(0,o.Pz)(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+(0,o.Pz)(t.indexStartName_))),t.endSet_&&(e["endAt"]=(0,o.Pz)(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+(0,o.Pz)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Yn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==ln&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends se{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=S("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,o.hu)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const s=Xn.getListenId_(t,n),a={};this.listens_[s]=a;const c=Kn(t._queryParams);this.restRequest_(r+".json",c,((t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(r,c,!1,n),(0,o.DV)(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=Xn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Kn(t._queryParams),n=t._path.toString(),i=new o.BH;return this.restRequest_(n+".json",e,((t,e)=>{let r=e;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(e["auth"]=i.accessToken),r&&r.token&&(e["ac"]=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,o.xO)(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.cI)(a.responseText)}catch(t){E("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return{value:null,children:new Map}}function ti(t,e,n){if(be(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=de(e);t.children.has(i)||t.children.set(i,Qn());const r=t.children.get(i);e=fe(e),ti(r,e,n)}}function ei(t,e){if(be(e))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ln,((e,n)=>{ti(t,new ue(e),n)})),ei(t,e)}}if(t.children.size>0){const n=de(e);if(e=fe(e),t.children.has(n)){const i=ei(t.children.get(n),e);i&&t.children.delete(n)}return 0===t.children.size}return!0}function ni(t,e,n){null!==t.value?n(e,t.value):ii(t,((t,i)=>{const r=new ue(e.toString()+"/"+t);ni(i,r,n)}))}function ii(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&j(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=1e4,oi=3e4,ai=3e5;class ci{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new ri(t);const n=si+(oi-si)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;j(t,((t,i)=>{i>0&&(0,o.r3)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*ai))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li;function ui(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function di(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(li||(li={}));class pi{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=li.ACK_USER_WRITE,this.source=ui()}operationForChild(t){if(be(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ue(t));return new pi(he(),e,this.revert)}}return(0,o.hu)(de(this.path)===t,"operationForChild called for unrelated child."),new pi(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.source=t,this.path=e,this.type=li.LISTEN_COMPLETE}operationForChild(t){return be(this.path)?new fi(this.source,he()):new fi(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=li.OVERWRITE}operationForChild(t){return be(this.path)?new mi(this.source,he(),this.snap.getImmediateChild(t)):new mi(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=li.MERGE}operationForChild(t){if(be(this.path)){const e=this.children.subtree(new ue(t));return e.isEmpty()?null:e.value?new mi(this.source,he(),e.value):new gi(this.source,he(),e)}return(0,o.hu)(de(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(be(t))return this.isFullyInitialized()&&!this.filtered_;const e=de(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function yi(t,e,n,i){const r=[],s=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push($n(e.childName,e.snapshotNode))})),bi(t,r,"child_removed",e,i,n),bi(t,r,"child_added",e,i,n),bi(t,r,"child_moved",s,i,n),bi(t,r,"child_changed",e,i,n),bi(t,r,"value",e,i,n),r}function bi(t,e,n,i,r,s){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>Ci(t,e,n))),o.forEach((n=>{const i=wi(t,n,s);r.forEach((r=>{r.respondsTo(n.type)&&e.push(r.createEvent(i,t.query_))}))}))}function wi(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ci(t,e,n){if(null==e.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const i=new Fe(e.childName,e.snapshotNode),r=new Fe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){return{eventCache:t,serverCache:e}}function xi(t,e,n,i){return ki(new vi(e,n,i),t.serverCache)}function Si(t,e,n,i){return ki(t.eventCache,new vi(e,n,i))}function Ii(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;const Ai=()=>(Ei||(Ei=new Ge(D)),Ei);class Oi{constructor(t,e=Ai()){this.value=t,this.children=e}static fromObject(t){let e=new Oi(null);return j(t,((t,n)=>{e=e.set(new ue(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:he(),value:this.value};if(be(t))return null;{const n=de(t),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(fe(t),e);if(null!=r){const t=ye(new ue(n),r.path);return{path:t,value:r.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(be(t))return this;{const e=de(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new Oi(null)}}set(t,e){if(be(t))return new Oi(e,this.children);{const n=de(t),i=this.children.get(n)||new Oi(null),r=i.set(fe(t),e),s=this.children.insert(n,r);return new Oi(this.value,s)}}remove(t){if(be(t))return this.children.isEmpty()?new Oi(null):new Oi(null,this.children);{const e=de(t),n=this.children.get(e);if(n){const i=n.remove(fe(t));let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&r.isEmpty()?new Oi(null):new Oi(this.value,r)}return this}}get(t){if(be(t))return this.value;{const e=de(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(be(t))return e;{const n=de(t),i=this.children.get(n)||new Oi(null),r=i.setTree(fe(t),e);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Oi(this.value,s)}}fold(t){return this.fold_(he(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(ye(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,he(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(be(t))return null;{const i=de(t),r=this.children.get(i);return r?r.findOnPath_(fe(t),ye(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,he(),e)}foreachOnPath_(t,e,n){if(be(t))return this;{this.value&&n(e,this.value);const i=de(t),r=this.children.get(i);return r?r.foreachOnPath_(fe(t),ye(e,i),n):new Oi(null)}}foreach(t){this.foreach_(he(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(ye(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.writeTree_=t}static empty(){return new Ri(new Oi(null))}}function Pi(t,e,n){if(be(e))return new Ri(new Oi(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const r=i.path;let s=i.value;const o=we(r,e);return s=s.updateChild(o,n),new Ri(t.writeTree_.set(r,s))}{const i=new Oi(n),r=t.writeTree_.setTree(e,i);return new Ri(r)}}}function Ni(t,e,n){let i=t;return j(n,((t,n)=>{i=Pi(i,ye(e,t),n)})),i}function Li(t,e){if(be(e))return Ri.empty();{const n=t.writeTree_.setTree(e,new Oi(null));return new Ri(n)}}function Di(t,e){return null!=$i(t,e)}function $i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function Mi(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ln,((t,n)=>{e.push(new Fe(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Fe(t,n.value))})),e}function Bi(t,e){if(be(e))return t;{const n=$i(t,e);return new Ri(null!=n?new Oi(n):t.writeTree_.subtree(e))}}function ji(t){return t.writeTree_.isEmpty()}function Fi(t,e){return Ui(he(),t.writeTree_,e)}function Ui(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,r)=>{".priority"===e?((0,o.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ui(ye(t,e),r,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(ye(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){return hr(e,t)}function zi(t,e,n,i,r){(0,o.hu)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Pi(t.visibleWrites,e,n)),t.lastWriteId=i}function qi(t,e,n,i){(0,o.hu)(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ni(t.visibleWrites,e,n),t.lastWriteId=i}function Hi(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Wi(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,a=t.allWrites.length-1;while(r&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Zi(e,i.path)?r=!1:xe(i.path,e.path)&&(s=!0)),a--}if(r){if(s)return Gi(t),!0;if(i.snap)t.visibleWrites=Li(t.visibleWrites,i.path);else{const e=i.children;j(e,(e=>{t.visibleWrites=Li(t.visibleWrites,ye(i.path,e))}))}return!0}return!1}function Zi(t,e){if(t.snap)return xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xe(ye(t.path,n),e))return!0;return!1}function Gi(t){t.visibleWrites=Yi(t.allWrites,Ki,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ki(t){return t.visible}function Yi(t,e,n){let i=Ri.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const t=s.path;let e;if(s.snap)xe(n,t)?(e=we(n,t),i=Pi(i,e,s.snap)):xe(t,n)&&(e=we(t,n),i=Pi(i,he(),s.snap.getChild(e)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(xe(n,t))e=we(n,t),i=Ni(i,e,s.children);else if(xe(t,n))if(e=we(t,n),be(e))i=Ni(i,he(),s.children);else{const t=(0,o.DV)(s.children,de(e));if(t){const n=t.getChild(fe(e));i=Pi(i,he(),n)}}}}}return i}function Xi(t,e,n,i,r){if(i||r){const s=Bi(t.visibleWrites,e);if(!r&&ji(s))return n;if(r||null!=n||Di(s,he())){const s=function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(xe(t.path,e)||xe(e,t.path))},o=Yi(t.allWrites,s,e),a=n||vn.EMPTY_NODE;return Fi(o,a)}return null}{const i=$i(t.visibleWrites,e);if(null!=i)return i;{const i=Bi(t.visibleWrites,e);if(ji(i))return n;if(null!=n||Di(i,he())){const t=n||vn.EMPTY_NODE;return Fi(i,t)}return null}}}function Ji(t,e,n){let i=vn.EMPTY_NODE;const r=$i(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ln,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const r=Bi(t.visibleWrites,e);return n.forEachChild(ln,((t,e)=>{const n=Fi(Bi(r,new ue(t)),e);i=i.updateImmediateChild(t,n)})),Mi(r).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}{const n=Bi(t.visibleWrites,e);return Mi(n).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}}function Qi(t,e,n,i,r){(0,o.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(Di(t.visibleWrites,s))return null;{const e=Bi(t.visibleWrites,s);return ji(e)?r.getChild(n):Fi(e,r.getChild(n))}}function tr(t,e,n,i){const r=ye(e,n),s=$i(t.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const e=Bi(t.visibleWrites,r);return Fi(e,i.getNode().getImmediateChild(n))}return null}function er(t,e){return $i(t.visibleWrites,e)}function nr(t,e,n,i,r,s,o){let a;const c=Bi(t.visibleWrites,e),l=$i(c,he());if(null!=l)a=l;else{if(null==n)return[];a=Fi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&t.length<r)0!==e(c,i)&&t.push(c),c=n.getNext();return t}}function ir(){return{visibleWrites:Ri.empty(),allWrites:[],lastWriteId:-1}}function rr(t,e,n,i){return Xi(t.writeTree,t.treePath,e,n,i)}function sr(t,e){return Ji(t.writeTree,t.treePath,e)}function or(t,e,n,i){return Qi(t.writeTree,t.treePath,e,n,i)}function ar(t,e){return er(t.writeTree,ye(t.treePath,e))}function cr(t,e,n,i,r,s){return nr(t.writeTree,t.treePath,e,n,i,r,s)}function lr(t,e,n){return tr(t.writeTree,t.treePath,e,n)}function ur(t,e){return hr(ye(t.treePath,e),t.writeTree)}function hr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,o.hu)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,Dn(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,Ln(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,Nn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw(0,o.g5)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,Dn(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const fr=new pr;class mr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new vi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ti(this.viewCache_),r=cr(this.writes_,i,e,1,n,t);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){return{filter:t}}function vr(t,e){(0,o.hu)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _r(t,e,n,i,r){const s=new dr;let a,c;if(n.type===li.OVERWRITE){const l=n;l.source.fromUser?a=Cr(t,e,l.path,l.snap,i,r,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!be(l.path),a=wr(t,e,l.path,l.snap,i,r,c,s))}else if(n.type===li.MERGE){const l=n;l.source.fromUser?a=xr(t,e,l.path,l.children,i,r,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=Ir(t,e,l.path,l.children,i,r,c,s))}else if(n.type===li.ACK_USER_WRITE){const o=n;a=o.revert?Ar(t,e,o.path,i,r,s):Tr(t,e,o.path,o.affectedTree,i,r,s)}else{if(n.type!==li.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=Er(t,e,n.path,i,s)}const l=s.getChanges();return yr(e,a,l),{viewCache:a,changes:l}}function yr(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ii(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Pn(Ii(e)))}}function br(t,e,n,i,r,s){const a=e.eventCache;if(null!=ar(i,n))return e;{let c,l;if(be(n))if((0,o.hu)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=Ti(e),r=n instanceof vn?n:vn.EMPTY_NODE,o=sr(i,r);c=t.filter.updateFullNode(e.eventCache.getNode(),o,s)}else{const n=rr(i,Ti(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const u=de(n);if(".priority"===u){(0,o.hu)(1===pe(n),"Can't have a priority with additional path components");const r=a.getNode();l=e.serverCache.getNode();const s=or(i,n,r,l);c=null!=s?t.filter.updatePriority(r,s):a.getNode()}else{const o=fe(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=or(i,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(o,t):a.getNode().getImmediateChild(u)}else h=lr(i,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,o,r,s):a.getNode()}}return xi(e,c,a.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function wr(t,e,n,i,r,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(be(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),t,null)}else{const t=de(n);if(!c.isCompleteForPath(n)&&pe(n)>1)return e;const r=fe(n),s=c.getNode().getImmediateChild(t),o=s.updateChild(r,i);l=".priority"===t?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),t,o,r,fr,null)}const h=Si(e,l,c.isFullyInitialized()||be(n),u.filtersNodes()),d=new mr(r,h,s);return br(t,h,n,r,d,a)}function Cr(t,e,n,i,r,s,o){const a=e.eventCache;let c,l;const u=new mr(r,e,s);if(be(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=xi(e,l,!0,t.filter.filtersNodes());else{const r=de(n);if(".priority"===r)l=t.filter.updatePriority(e.eventCache.getNode(),i),c=xi(e,l,a.isFullyInitialized(),a.isFiltered());else{const s=fe(n),l=a.getNode().getImmediateChild(r);let h;if(be(s))h=i;else{const t=u.getCompleteChild(r);h=null!=t?".priority"===me(s)&&t.getChild(_e(s)).isEmpty()?t:t.updateChild(s,i):vn.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),r,h,s,u,o);c=xi(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function kr(t,e){return t.eventCache.isCompleteForChild(e)}function xr(t,e,n,i,r,s,o){let a=e;return i.foreach(((i,c)=>{const l=ye(n,i);kr(e,de(l))&&(a=Cr(t,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=ye(n,i);kr(e,de(l))||(a=Cr(t,a,l,c,r,s,o))})),a}function Sr(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function Ir(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=be(n)?i:new Oi(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=Sr(t,c,i);l=wr(t,l,new ue(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=Sr(t,c,i);l=wr(t,l,new ue(n),u,r,s,o,a)}})),l}function Tr(t,e,n,i,r,s,o){if(null!=ar(r,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=i.value){if(be(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return wr(t,e,n,c.getNode().getChild(n),r,s,a,o);if(be(n)){let i=new Oi(null);return c.getNode().forEachChild(qe,((t,e)=>{i=i.set(new ue(t),e)})),Ir(t,e,n,i,r,s,a,o)}return e}{let l=new Oi(null);return i.foreach(((t,e)=>{const i=ye(n,t);c.isCompleteForPath(i)&&(l=l.set(t,c.getNode().getChild(i)))})),Ir(t,e,n,l,r,s,a,o)}}function Er(t,e,n,i,r){const s=e.serverCache,o=Si(e,s.getNode(),s.isFullyInitialized()||be(n),s.isFiltered());return br(t,o,n,i,fr,r)}function Ar(t,e,n,i,r,s){let a;if(null!=ar(i,n))return e;{const c=new mr(i,e,r),l=e.eventCache.getNode();let u;if(be(n)||".priority"===de(n)){let n;if(e.serverCache.isFullyInitialized())n=rr(i,Ti(e));else{const t=e.serverCache.getNode();(0,o.hu)(t instanceof vn,"serverChildren would be complete if leaf node"),n=sr(i,t)}u=t.filter.updateFullNode(l,n,s)}else{const r=de(n);let o=lr(i,r,e.serverCache);null==o&&e.serverCache.isCompleteForChild(r)&&(o=l.getImmediateChild(r)),u=null!=o?t.filter.updateChild(l,r,o,fe(n),c,s):e.eventCache.getNode().hasChild(r)?t.filter.updateChild(l,r,vn.EMPTY_NODE,fe(n),c,s):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=rr(i,Ti(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=ar(i,he()),xi(e,u,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Mn(n.getIndex()),r=Un(n);this.processor_=gr(r);const s=e.serverCache,o=e.eventCache,a=i.updateFullNode(vn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),l=new vi(a,s.isFullyInitialized(),i.filtersNodes()),u=new vi(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(u,l),this.eventGenerator_=new _i(this.query_)}get query(){return this.query_}}function Rr(t){return t.viewCache_.serverCache.getNode()}function Pr(t){return Ii(t.viewCache_)}function Nr(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Lr(t){return 0===t.eventRegistrations_.length}function Dr(t,e){t.eventRegistrations_.push(e)}function $r(t,e,n){const i=[];if(n){(0,o.hu)(null==e,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach((t=>{const e=t.createCancelEvent(n,r);e&&i.push(e)}))}if(e){let n=[];for(let i=0;i<t.eventRegistrations_.length;++i){const r=t.eventRegistrations_[i];if(r.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(i+1));break}}else n.push(r)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return i}function Mr(t,e,n,i){e.type===li.MERGE&&null!==e.source.queryId&&((0,o.hu)(Ti(t.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(Ii(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=_r(t.processor_,r,e,n,i);return vr(t.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,jr(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Br(t,e){const n=t.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(ln,((t,e)=>{i.push(Nn(t,e))}))}return n.isFullyInitialized()&&i.push(Pn(n.getNode())),jr(t,i,n.getNode(),e)}function jr(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return yi(t.eventGenerator_,e,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr,Ur;class Vr{constructor(){this.views=new Map}}function zr(t){(0,o.hu)(!Fr,"__referenceConstructor has already been defined"),Fr=t}function qr(){return(0,o.hu)(Fr,"Reference.ts has not been loaded"),Fr}function Hr(t){return 0===t.views.size}function Wr(t,e,n,i){const r=e.source.queryId;if(null!==r){const s=t.views.get(r);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),Mr(s,e,n,i)}{let r=[];for(const s of t.views.values())r=r.concat(Mr(s,e,n,i));return r}}function Zr(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=rr(n,r?i:null),s=!1;t?s=!0:i instanceof vn?(t=sr(n,i),s=!1):(t=vn.EMPTY_NODE,s=!1);const o=ki(new vi(t,s,!1),new vi(i,r,!1));return new Or(e,o)}return o}function Gr(t,e,n,i,r,s){const o=Zr(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Dr(o,n),Br(o,n)}function Kr(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=ts(t);if("default"===r)for(const[c,l]of t.views.entries())o=o.concat($r(l,n,i)),Lr(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const e=t.views.get(r);e&&(o=o.concat($r(e,n,i)),Lr(e)&&(t.views.delete(r),e.query._queryParams.loadsAllData()||s.push(e.query)))}return a&&!ts(t)&&s.push(new(qr())(e._repo,e._path)),{removed:s,events:o}}function Yr(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xr(t,e){let n=null;for(const i of t.views.values())n=n||Nr(i,e);return n}function Jr(t,e){const n=e._queryParams;if(n.loadsAllData())return es(t);{const n=e._queryIdentifier;return t.views.get(n)}}function Qr(t,e){return null!=Jr(t,e)}function ts(t){return null!=es(t)}function es(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){(0,o.hu)(!Ur,"__referenceConstructor has already been defined"),Ur=t}function is(){return(0,o.hu)(Ur,"Reference.ts has not been loaded"),Ur}let rs=1;class ss{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Oi(null),this.pendingWriteTree_=ir(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function os(t,e,n,i,r){return zi(t.pendingWriteTree_,e,n,i,r),r?ws(t,new mi(ui(),e,n)):[]}function as(t,e,n,i){qi(t.pendingWriteTree_,e,n,i);const r=Oi.fromObject(n);return ws(t,new gi(ui(),e,r))}function cs(t,e,n=!1){const i=Hi(t.pendingWriteTree_,e),r=Wi(t.pendingWriteTree_,e);if(r){let e=new Oi(null);return null!=i.snap?e=e.set(he(),!0):j(i.children,(t=>{e=e.set(new ue(t),!0)})),ws(t,new pi(i.path,e,n))}return[]}function ls(t,e,n){return ws(t,new mi(hi(),e,n))}function us(t,e,n){const i=Oi.fromObject(n);return ws(t,new gi(hi(),e,i))}function hs(t,e){return ws(t,new fi(hi(),e))}function ds(t,e,n){const i=Ts(t,n);if(i){const n=Es(i),r=n.path,s=n.queryId,o=we(r,e),a=new fi(di(s),o);return As(t,r,a)}return[]}function ps(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&("default"===e._queryIdentifier||Qr(s,e))){const a=Kr(s,e,n,i);Hr(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex((t=>t._queryParams.loadsAllData())),u=t.syncPointTree_.findOnPath(r,((t,e)=>ts(e)));if(l&&!u){const e=t.syncPointTree_.subtree(r);if(!e.isEmpty()){const n=Os(e);for(let e=0;e<n.length;++e){const i=n[e],r=i.query,s=xs(t,i);t.listenProvider_.startListening(Rs(r),Ss(t,r),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!i)if(l){const n=null;t.listenProvider_.stopListening(Rs(e),n)}else c.forEach((e=>{const n=t.queryToTagMap.get(Is(e));t.listenProvider_.stopListening(Rs(e),n)}));Ps(t,c)}return o}function fs(t,e){const{syncPoint:n,serverCache:i,writesCache:r,serverCacheComplete:s}=vs(e,t),o=Zr(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:Ss(t,e)}function ms(t,e,n,i){const r=Ts(t,i);if(null!=r){const i=Es(r),s=i.path,o=i.queryId,a=we(s,e),c=new mi(di(o),a,n);return As(t,s,c)}return[]}function gs(t,e,n,i){const r=Ts(t,i);if(r){const i=Es(r),s=i.path,o=i.queryId,a=we(s,e),c=Oi.fromObject(n),l=new gi(di(o),a,c);return As(t,s,l)}return[]}function vs(t,e){const n=t._path;let i=null,r=!1;e.syncPointTree_.foreachOnPath(n,((t,e)=>{const s=we(t,n);i=i||Xr(e,s),r=r||ts(e)}));let s,a=e.syncPointTree_.get(n);if(a?(r=r||ts(a),i=i||Xr(a,he())):(a=new Vr,e.syncPointTree_=e.syncPointTree_.set(n,a)),null!=i)s=!0;else{s=!1,i=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(n);t.foreachChild(((t,e)=>{const n=Xr(e,he());n&&(i=i.updateImmediateChild(t,n))}))}const c=Qr(a,t);if(!c&&!t._queryParams.loadsAllData()){const n=Is(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ns();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const l=Vi(e.pendingWriteTree_,n);return{syncPoint:a,writesCache:l,serverCache:i,serverCacheComplete:s,foundAncestorDefaultView:r,viewAlreadyExists:c}}function _s(t,e,n){const{syncPoint:i,serverCache:r,writesCache:s,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:c}=vs(e,t);let l=Gr(i,e,n,s,r,o);if(!a&&!c){const n=Jr(i,e);l=l.concat(Ls(t,e,n))}return l}function ys(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=we(t,e),r=Xr(n,i);if(r)return r}));return Xi(r,e,s,n,i)}function bs(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,((t,e)=>{const r=we(t,n);i=i||Xr(e,r)}));let r=t.syncPointTree_.get(n);r?i=i||Xr(r,he()):(r=new Vr,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=null!=i,o=s?new vi(i,!0,!1):null,a=Vi(t.pendingWriteTree_,e._path),c=Zr(r,e,a,s?o.getNode():vn.EMPTY_NODE,s);return Pr(c)}function ws(t,e){return Cs(e,t.syncPointTree_,null,Vi(t.pendingWriteTree_,he()))}function Cs(t,e,n,i){if(be(t.path))return ks(t,e,n,i);{const r=e.get(he());null==n&&null!=r&&(n=Xr(r,he()));let s=[];const o=de(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=ur(i,o);s=s.concat(Cs(a,c,t,e))}return r&&(s=s.concat(Wr(r,t,i,n))),s}}function ks(t,e,n,i){const r=e.get(he());null==n&&null!=r&&(n=Xr(r,he()));let s=[];return e.children.inorderTraversal(((e,r)=>{const o=n?n.getImmediateChild(e):null,a=ur(i,e),c=t.operationForChild(e);c&&(s=s.concat(ks(c,r,o,a)))})),r&&(s=s.concat(Wr(r,t,i,n))),s}function xs(t,e){const n=e.query,i=Ss(t,n);return{hashFn:()=>{const t=Rr(e)||vn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return i?ds(t,n._path,i):hs(t,n._path);{const i=z(e,n);return ps(t,n,null,i)}}}}function Ss(t,e){const n=Is(e);return t.queryToTagMap.get(n)}function Is(t){return t._path.toString()+"$"+t._queryIdentifier}function Ts(t,e){return t.tagToQueryMap.get(e)}function Es(t){const e=t.indexOf("$");return(0,o.hu)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function As(t,e,n){const i=t.syncPointTree_.get(e);(0,o.hu)(i,"Missing sync point for query tag that we're tracking");const r=Vi(t.pendingWriteTree_,e);return Wr(i,n,r,null)}function Os(t){return t.fold(((t,e,n)=>{if(e&&ts(e)){const t=es(e);return[t]}{let t=[];return e&&(t=Yr(e)),j(n,((e,n)=>{t=t.concat(n)})),t}}))}function Rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(is())(t._repo,t._path):t}function Ps(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const e=Is(i),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function Ns(){return rs++}function Ls(t,e,n){const i=e._path,r=Ss(t,e),s=xs(t,n),a=t.listenProvider_.startListening(Rs(e),r,s.hashFn,s.onComplete),c=t.syncPointTree_.subtree(i);if(r)(0,o.hu)(!ts(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold(((t,e,n)=>{if(!be(t)&&e&&ts(e))return[es(e).query];{let t=[];return e&&(t=t.concat(Yr(e).map((t=>t.query)))),j(n,((e,n)=>{t=t.concat(n)})),t}}));for(let n=0;n<e.length;++n){const i=e[n];t.listenProvider_.stopListening(Rs(i),Ss(t,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Ds(e)}node(){return this.node_}}class $s{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ye(this.path_,t);return new $s(this.syncTree_,e)}node(){return ys(this.syncTree_,this.path_)}}const Ms=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},Bs=function(t,e,n){return t&&"object"===typeof t?((0,o.hu)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?js(t[".sv"],e,n):"object"===typeof t[".sv"]?Fs(t[".sv"],e):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},js=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+t)}},Fs=function(t,e,n){t.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t["increment"];"number"!==typeof i&&(0,o.hu)(!1,"Unexpected increment value: "+i);const r=e.node();if((0,o.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r,a=s.getValue();return"number"!==typeof a?i:a+i},Us=function(t,e,n,i){return zs(e,new $s(n,t),i)},Vs=function(t,e,n){return zs(t,new Ds(e),n)};function zs(t,e,n){const i=t.getPriority().val(),r=Bs(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,s=Bs(i.getValue(),e,n);return s!==i.getValue()||r!==i.getPriority().val()?new sn(s,wn(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new sn(r))),i.forEachChild(ln,((t,i)=>{const r=zs(i,e.getImmediateChild(t),n);r!==i&&(s=s.updateImmediateChild(t,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Hs(t,e){let n=e instanceof ue?e:new ue(e),i=t,r=de(n);while(null!==r){const t=(0,o.DV)(i.node.children,r)||{children:{},childCount:0};i=new qs(r,i,t),n=fe(n),r=de(n)}return i}function Ws(t){return t.node.value}function Zs(t,e){t.node.value=e,to(t)}function Gs(t){return t.node.childCount>0}function Ks(t){return void 0===Ws(t)&&!Gs(t)}function Ys(t,e){j(t.node.children,((n,i)=>{e(new qs(n,t,i))}))}function Xs(t,e,n,i){n&&!i&&e(t),Ys(t,(t=>{Xs(t,e,!0,i)})),n&&i&&e(t)}function Js(t,e,n){let i=n?t:t.parent;while(null!==i){if(e(i))return!0;i=i.parent}return!1}function Qs(t){return new ue(null===t.parent?t.name:Qs(t.parent)+"/"+t.name)}function to(t){null!==t.parent&&eo(t.parent,t.name,t)}function eo(t,e,n){const i=Ks(n),r=(0,o.r3)(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,to(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,to(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=/[\[\].#$\/\u0000-\u001F\u007F]/,io=/[\[\].#$\u0000-\u001F\u007F]/,ro=10485760,so=function(t){return"string"===typeof t&&0!==t.length&&!no.test(t)},oo=function(t){return"string"===typeof t&&0!==t.length&&!io.test(t)},ao=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oo(t)},co=function(t){return null===t||"string"===typeof t||"number"===typeof t&&!O(t)||t&&"object"===typeof t&&(0,o.r3)(t,".sv")},lo=function(t,e,n,i){i&&void 0===e||uo((0,o.gK)(t,"value"),e,n)},uo=function(t,e,n){const i=n instanceof ue?new Se(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Ae(i));if("function"===typeof e)throw new Error(t+"contains a function "+Ae(i)+" with contents = "+e.toString());if(O(e))throw new Error(t+"contains "+e.toString()+" "+Ae(i));if("string"===typeof e&&e.length>ro/3&&(0,o.ug)(e)>ro)throw new Error(t+"contains a string greater than "+ro+" utf8 bytes "+Ae(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,r=!1;if(j(e,((e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!so(e)))throw new Error(t+" contains an invalid key ("+e+") "+Ae(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ie(i,e),uo(t,s,i),Te(i)})),n&&r)throw new Error(t+' contains ".value" child '+Ae(i)+" in addition to actual children.")}},ho=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=ve(i);for(let e=0;e<r.length;e++)if(".priority"===r[e]&&e===r.length-1);else if(!so(r[e]))throw new Error(t+"contains an invalid key ("+r[e]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}e.sort(Ce);let r=null;for(n=0;n<e.length;n++){if(i=e[n],null!==r&&xe(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},po=function(t,e,n,i){if(i&&void 0===e)return;const r=(0,o.gK)(t,"values");if(!e||"object"!==typeof e||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];j(e,((t,e)=>{const i=new ue(t);if(uo(r,e,ye(n,i)),".priority"===me(i)&&!co(e))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),ho(r,s)},fo=function(t,e,n){if(!n||void 0!==e){if(O(e))throw new Error((0,o.gK)(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!co(e))throw new Error((0,o.gK)(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},mo=function(t,e,n,i){if((!i||void 0!==n)&&!so(n))throw new Error((0,o.gK)(t,e)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},go=function(t,e,n,i){if((!i||void 0!==n)&&!oo(n))throw new Error((0,o.gK)(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},vo=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),go(t,e,n,i)},_o=function(t,e){if(".info"===de(e))throw new Error(t+" failed = Can't modify data under /.info/")},yo=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!so(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!ao(n))throw new Error((0,o.gK)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wo(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();null===n||ke(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Co(t,e,n){wo(t,n),xo(t,(t=>ke(t,e)))}function ko(t,e,n){wo(t,n),xo(t,(t=>xe(t,e)||xe(e,t)))}function xo(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(So(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function So(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();w&&x("event: "+n.toString()),G(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="repo_interrupt",To=25;class Eo{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qn(),this.transactionQueueTree_=new qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ao(t,e,n){if(t.stats_=vt(t.repoInfo_),t.forceRestClient_||K())t.server_=new Xn(t.repoInfo_,((e,n,i,r)=>{Po(t,e,n,i,r)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>No(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new je(t.repoInfo_,e,((e,n,i,r)=>{Po(t,e,n,i,r)}),(e=>{No(t,e)}),(e=>{Lo(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=_t(t.repoInfo_,(()=>new ci(t.stats_,t.server_))),t.infoData_=new Jn,t.infoSyncTree_=new ss({startListening:(e,n,i,r)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=ls(t.infoSyncTree_,e._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new ss({startListening:(e,n,i,r)=>(t.server_.listen(e,i,n,((n,i)=>{const s=r(n,i);ko(t.eventQueue_,e._path,s)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Oo(t){const e=t.infoData_.getNode(new ue(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function Ro(t){return Ms({timestamp:Oo(t)})}function Po(t,e,n,i,r){t.dataUpdateCount++;const s=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(r)if(i){const e=(0,o.UI)(n,(t=>wn(t)));a=gs(t.serverSyncTree_,s,e,r)}else{const e=wn(n);a=ms(t.serverSyncTree_,s,e,r)}else if(i){const e=(0,o.UI)(n,(t=>wn(t)));a=us(t.serverSyncTree_,s,e)}else{const e=wn(n);a=ls(t.serverSyncTree_,s,e)}let c=s;a.length>0&&(c=ea(t,s)),ko(t.eventQueue_,c,a)}function No(t,e){Do(t,"connected",e),!1===e&&Fo(t)}function Lo(t,e){j(e,((e,n)=>{Do(t,e,n)}))}function Do(t,e,n){const i=new ue("/.info/"+e),r=wn(n);t.infoData_.updateSnapshot(i,r);const s=ls(t.infoSyncTree_,i,r);ko(t.eventQueue_,i,s)}function $o(t){return t.nextWriteId_++}function Mo(t,e){const n=bs(t.serverSyncTree_,e);return null!=n?Promise.resolve(n):t.server_.get(e).then((n=>{const i=wn(n).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())ls(t.serverSyncTree_,e._path,i);else{const n=fs(t.serverSyncTree_,e);ms(t.serverSyncTree_,e._path,i,n)}const r=ps(t.serverSyncTree_,e,null);return r.length>0&&Ko(t,"unexpected cancel events in repoGetValue"),i}),(n=>(Ko(t,"get for query "+(0,o.Pz)(e)+" failed: "+n),Promise.reject(new Error(n)))))}function Bo(t,e,n,i,r){Ko(t,"set",{path:e.toString(),value:n,priority:i});const s=Ro(t),o=wn(n,i),a=ys(t.serverSyncTree_,e),c=Vs(o,a,s),l=$o(t),u=os(t.serverSyncTree_,e,c,l,!0);wo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||E("set at "+e+" failed: "+n);const o=cs(t.serverSyncTree_,l,!s);ko(t.eventQueue_,e,o),Yo(t,r,n,i)}));const h=aa(t,e);ea(t,h),ko(t.eventQueue_,h,[])}function jo(t,e,n,i){Ko(t,"update",{path:e.toString(),value:n});let r=!0;const s=Ro(t),o={};if(j(n,((n,i)=>{r=!1,o[n]=Us(ye(e,n),wn(i),t.serverSyncTree_,s)})),r)x("update() called with empty data.  Don't do anything."),Yo(t,i,"ok",void 0);else{const r=$o(t),s=as(t.serverSyncTree_,e,o,r);wo(t.eventQueue_,s),t.server_.merge(e.toString(),n,((n,s)=>{const o="ok"===n;o||E("update at "+e+" failed: "+n);const a=cs(t.serverSyncTree_,r,!o),c=a.length>0?ea(t,e):e;ko(t.eventQueue_,c,a),Yo(t,i,n,s)})),j(n,(n=>{const i=aa(t,ye(e,n));ea(t,i)})),ko(t.eventQueue_,e,[])}}function Fo(t){Ko(t,"onDisconnectEvents");const e=Ro(t),n=Qn();ni(t.onDisconnect_,he(),((i,r)=>{const s=Us(i,r,t.serverSyncTree_,e);ti(n,i,s)}));let i=[];ni(n,he(),((e,n)=>{i=i.concat(ls(t.serverSyncTree_,e,n));const r=aa(t,e);ea(t,r)})),t.onDisconnect_=Qn(),ko(t.eventQueue_,he(),i)}function Uo(t,e,n){t.server_.onDisconnectCancel(e.toString(),((i,r)=>{"ok"===i&&ei(t.onDisconnect_,e),Yo(t,n,i,r)}))}function Vo(t,e,n,i){const r=wn(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),((n,s)=>{"ok"===n&&ti(t.onDisconnect_,e,r),Yo(t,i,n,s)}))}function zo(t,e,n,i,r){const s=wn(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),((n,i)=>{"ok"===n&&ti(t.onDisconnect_,e,s),Yo(t,r,n,i)}))}function qo(t,e,n,i){if((0,o.xb)(n))return x("onDisconnect().update() called with empty data.  Don't do anything."),void Yo(t,i,"ok",void 0);t.server_.onDisconnectMerge(e.toString(),n,((r,s)=>{"ok"===r&&j(n,((n,i)=>{const r=wn(i);ti(t.onDisconnect_,ye(e,n),r)})),Yo(t,i,r,s)}))}function Ho(t,e,n){let i;i=".info"===de(e._path)?_s(t.infoSyncTree_,e,n):_s(t.serverSyncTree_,e,n),Co(t.eventQueue_,e._path,i)}function Wo(t,e,n){let i;i=".info"===de(e._path)?ps(t.infoSyncTree_,e,n):ps(t.serverSyncTree_,e,n),Co(t.eventQueue_,e._path,i)}function Zo(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Io)}function Go(t){t.persistentConnection_&&t.persistentConnection_.resume(Io)}function Ko(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),x(n,...e)}function Yo(t,e,n,i){e&&G((()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let r=t;i&&(r+=": "+i);const s=new Error(r);s.code=t,e(s)}}))}function Xo(t,e,n,i,r,s){Ko(t,"transaction on "+e);const a={path:e,update:n,onComplete:i,status:null,order:_(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Jo(t,e,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{uo("transaction failed: Data returned ",l,a.path),a.status=0;const n=Hs(t.transactionQueueTree_,e),i=Ws(n)||[];let r;if(i.push(a),Zs(n,i),"object"===typeof l&&null!==l&&(0,o.r3)(l,".priority"))r=(0,o.DV)(l,".priority"),(0,o.hu)(co(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=ys(t.serverSyncTree_,e)||vn.EMPTY_NODE;r=n.getPriority().val()}const s=Ro(t),u=wn(l,r),h=Vs(u,c,s);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=$o(t);const d=os(t.serverSyncTree_,e,h,a.currentWriteId,a.applyLocally);ko(t.eventQueue_,e,d),Qo(t,t.transactionQueueTree_)}}function Jo(t,e,n){return ys(t.serverSyncTree_,e,n)||vn.EMPTY_NODE}function Qo(t,e=t.transactionQueueTree_){if(e||oa(t,e),Ws(e)){const n=ra(t,e);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((t=>0===t.status));i&&ta(t,Qs(e),n)}else Gs(e)&&Ys(e,(e=>{Qo(t,e)}))}function ta(t,e,n){const i=n.map((t=>t.currentWriteId)),r=Jo(t,e,i);let s=r;const a=r.hash();for(let u=0;u<n.length;u++){const t=n[u];(0,o.hu)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const i=we(e,t.path);s=s.updateChild(i,t.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;t.server_.put(l.toString(),c,(i=>{Ko(t,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,r=r.concat(cs(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();oa(t,Hs(t.transactionQueueTree_,e)),Qo(t,t.transactionQueueTree_),ko(t.eventQueue_,e,r);for(let t=0;t<i.length;t++)G(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{E("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}ea(t,e)}}),a)}function ea(t,e){const n=ia(t,e),i=Qs(n),r=ra(t,n);return na(t,r,i),i}function na(t,e,n){if(0===e.length)return;const i=[];let r=[];const s=e.filter((t=>0===t.status)),a=s.map((t=>t.currentWriteId));for(let c=0;c<e.length;c++){const s=e[c],l=we(n,s.path);let u,h=!1;if((0,o.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,r=r.concat(cs(t.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=To)h=!0,u="maxretry",r=r.concat(cs(t.serverSyncTree_,s.currentWriteId,!0));else{const n=Jo(t,s.path,a);s.currentInputSnapshot=n;const i=e[c].update(n.val());if(void 0!==i){uo("transaction failed: Data returned ",i,s.path);let e=wn(i);const c="object"===typeof i&&null!=i&&(0,o.r3)(i,".priority");c||(e=e.updatePriority(n.getPriority()));const l=s.currentWriteId,u=Ro(t),h=Vs(e,n,u);s.currentOutputSnapshotRaw=e,s.currentOutputSnapshotResolved=h,s.currentWriteId=$o(t),a.splice(a.indexOf(l),1),r=r.concat(os(t.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),r=r.concat(cs(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(cs(t.serverSyncTree_,s.currentWriteId,!0))}ko(t.eventQueue_,n,r),r=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?i.push((()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot))):i.push((()=>e[c].onComplete(new Error(u),!1,null)))))}oa(t,t.transactionQueueTree_);for(let o=0;o<i.length;o++)G(i[o]);Qo(t,t.transactionQueueTree_)}function ia(t,e){let n,i=t.transactionQueueTree_;n=de(e);while(null!==n&&void 0===Ws(i))i=Hs(i,n),e=fe(e),n=de(e);return i}function ra(t,e){const n=[];return sa(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function sa(t,e,n){const i=Ws(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ys(e,(e=>{sa(t,e,n)}))}function oa(t,e){const n=Ws(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Zs(e,n.length>0?n:void 0)}Ys(e,(e=>{oa(t,e)}))}function aa(t,e){const n=Qs(ia(t,e)),i=Hs(t.transactionQueueTree_,e);return Js(i,(e=>{ca(t,e)})),ca(t,i),Xs(i,(e=>{ca(t,e)})),n}function ca(t,e){const n=Ws(e);if(n){const i=[];let r=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,o.hu)(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):((0,o.hu)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(cs(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Zs(e,void 0):n.length=s+1,ko(t.eventQueue_,Qs(e),r);for(let t=0;t<i.length;t++)G(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let t=n[r];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(i){}e+="/"+t}return e}function ua(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):E(`Invalid query segment '${n}' in query '${t}'`)}return e}const ha=function(t,e){const n=da(t),i=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ht(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ue(n.pathString)}},da=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=la(t.substring(u,h)));const d=ua(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=i}"ns"in d&&(s=d["ns"])}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(t,e,n,i){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=i}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Pz)(this.snapshot.exportVal())}}class fa{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this._repo=t,this._path=e}cancel(){const t=new o.BH;return Uo(this._repo,this._path,t.wrapCallback((()=>{}))),t.promise}remove(){_o("OnDisconnect.remove",this._path);const t=new o.BH;return Vo(this._repo,this._path,null,t.wrapCallback((()=>{}))),t.promise}set(t){_o("OnDisconnect.set",this._path),lo("OnDisconnect.set",t,this._path,!1);const e=new o.BH;return Vo(this._repo,this._path,t,e.wrapCallback((()=>{}))),e.promise}setWithPriority(t,e){_o("OnDisconnect.setWithPriority",this._path),lo("OnDisconnect.setWithPriority",t,this._path,!1),fo("OnDisconnect.setWithPriority",e,!1);const n=new o.BH;return zo(this._repo,this._path,t,e,n.wrapCallback((()=>{}))),n.promise}update(t){_o("OnDisconnect.update",this._path),po("OnDisconnect.update",t,this._path,!1);const e=new o.BH;return qo(this._repo,this._path,t,e.wrapCallback((()=>{}))),e.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return be(this._path)?null:me(this._path)}get ref(){return new wa(this._repo,this._path)}get _queryIdentifier(){const t=Yn(this._queryParams),e=M(t);return"{}"===e?"default":e}get _queryObject(){return Yn(this._queryParams)}isEqual(t){if(t=(0,o.m9)(t),!(t instanceof va))return!1;const e=this._repo===t._repo,n=ke(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ge(this._path)}}function _a(t,e){if(!0===t._orderByCalled)throw new Error(e+": You can't combine multiple orderBy calls.")}function ya(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===qe){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){const n=t.getIndexStartName();if(n!==P)throw new Error(i);if("string"!==typeof e)throw new Error(r)}if(t.hasEnd()){const e=t.getIndexEndName();if(e!==N)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(t.getIndex()===ln){if(null!=e&&!co(e)||null!=n&&!co(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,o.hu)(t.getIndex()instanceof Cn||t.getIndex()===xn,"unknown index type."),null!=e&&"object"===typeof e||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ba(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class wa extends va{constructor(t,e){super(t,e,new Fn,!1)}get parent(){const t=_e(this._path);return null===t?null:new wa(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class Ca{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new ue(t),n=Sa(this.ref,t);return new Ca(this._node.getChild(e),n,ln)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,((e,n)=>t(new Ca(n,Sa(this.ref,e),ln))))}hasChild(t){const e=new ue(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ka(t,e){return t=(0,o.m9)(t),t._checkNotDeleted("ref"),void 0!==e?Sa(t._root,e):t._root}function xa(t,e){t=(0,o.m9)(t),t._checkNotDeleted("refFromURL");const n=ha(e,t._repo.repoInfo_.nodeAdmin);yo("refFromURL",n);const i=n.repoInfo;return t._repo.repoInfo_.isCustomHost()||i.host===t._repo.repoInfo_.host||T("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+t._repo.repoInfo_.host+")"),ka(t,n.path.toString())}function Sa(t,e){return t=(0,o.m9)(t),null===de(t._path)?vo("child","path",e,!1):go("child","path",e,!1),new wa(t._repo,ye(t._path,e))}function Ia(t,e){t=(0,o.m9)(t),_o("push",t._path),lo("push",e,t._path,!0);const n=Oo(t._repo),i=An(n),r=Sa(t,i),s=Sa(t,i);let a;return a=null!=e?Ea(s,e).then((()=>s)):Promise.resolve(s),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Ta(t){return _o("remove",t._path),Ea(t,null)}function Ea(t,e){t=(0,o.m9)(t),_o("set",t._path),lo("set",e,t._path,!1);const n=new o.BH;return Bo(t._repo,t._path,e,null,n.wrapCallback((()=>{}))),n.promise}function Aa(t,e){t=(0,o.m9)(t),_o("setPriority",t._path),fo("setPriority",e,!1);const n=new o.BH;return Bo(t._repo,ye(t._path,".priority"),e,null,n.wrapCallback((()=>{}))),n.promise}function Oa(t,e,n){if(_o("setWithPriority",t._path),lo("setWithPriority",e,t._path,!1),fo("setWithPriority",n,!1),".length"===t.key||".keys"===t.key)throw"setWithPriority failed: "+t.key+" is a read-only object.";const i=new o.BH;return Bo(t._repo,t._path,e,n,i.wrapCallback((()=>{}))),i.promise}function Ra(t,e){po("update",e,t._path,!1);const n=new o.BH;return jo(t._repo,t._path,e,n.wrapCallback((()=>{}))),n.promise}function Pa(t){return t=(0,o.m9)(t),Mo(t._repo,t).then((e=>new Ca(e,new wa(t._repo,t._path),t._queryParams.getIndex())))}class Na{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new pa("value",this,new Ca(t.snapshotNode,new wa(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new fa(this,t,e):null}matches(t){return t instanceof Na&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class La{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new fa(this,t,e):null}createEvent(t,e){(0,o.hu)(null!=t.childName,"Child events should have a childName.");const n=Sa(new wa(e._repo,e._path),t.childName),i=e._queryParams.getIndex();return new pa(t.type,this,new Ca(t.snapshotNode,n,i),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof La&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Da(t,e,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const e=n,i=(n,i)=>{Wo(t._repo,t,a),e(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new ma(n,s||void 0),a="value"===e?new Na(o):new La(e,o);return Ho(t._repo,t,a),()=>Wo(t._repo,t,a)}function $a(t,e,n,i){return Da(t,"value",e,n,i)}function Ma(t,e,n,i){return Da(t,"child_added",e,n,i)}function Ba(t,e,n,i){return Da(t,"child_changed",e,n,i)}function ja(t,e,n,i){return Da(t,"child_moved",e,n,i)}function Fa(t,e,n,i){return Da(t,"child_removed",e,n,i)}function Ua(t,e,n){let i=null;const r=n?new ma(n):null;"value"===e?i=new Na(r):e&&(i=new La(e,r)),Wo(t._repo,t,i)}class Va{}class za extends Va{constructor(t,e){super(),this._value=t,this._key=e}_apply(t){lo("endAt",this._value,t._path,!0);const e=Wn(t._queryParams,this._value,this._key);if(ba(e),ya(e),t._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new va(t._repo,t._path,e,t._orderByCalled)}}function qa(t,e){return mo("endAt","key",e,!0),new za(t,e)}class Ha extends Va{constructor(t,e){super(),this._value=t,this._key=e}_apply(t){lo("endBefore",this._value,t._path,!1);const e=Zn(t._queryParams,this._value,this._key);if(ba(e),ya(e),t._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new va(t._repo,t._path,e,t._orderByCalled)}}function Wa(t,e){return mo("endBefore","key",e,!0),new Ha(t,e)}class Za extends Va{constructor(t,e){super(),this._value=t,this._key=e}_apply(t){lo("startAt",this._value,t._path,!0);const e=qn(t._queryParams,this._value,this._key);if(ba(e),ya(e),t._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new va(t._repo,t._path,e,t._orderByCalled)}}function Ga(t=null,e){return mo("startAt","key",e,!0),new Za(t,e)}class Ka extends Va{constructor(t,e){super(),this._value=t,this._key=e}_apply(t){lo("startAfter",this._value,t._path,!1);const e=Hn(t._queryParams,this._value,this._key);if(ba(e),ya(e),t._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new va(t._repo,t._path,e,t._orderByCalled)}}function Ya(t,e){return mo("startAfter","key",e,!0),new Ka(t,e)}class Xa extends Va{constructor(t){super(),this._limit=t}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new va(t._repo,t._path,Vn(t._queryParams,this._limit),t._orderByCalled)}}function Ja(t){if("number"!==typeof t||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Xa(t)}class Qa extends Va{constructor(t){super(),this._limit=t}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new va(t._repo,t._path,zn(t._queryParams,this._limit),t._orderByCalled)}}function tc(t){if("number"!==typeof t||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Qa(t)}class ec extends Va{constructor(t){super(),this._path=t}_apply(t){_a(t,"orderByChild");const e=new ue(this._path);if(be(e))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Cn(e),i=Gn(t._queryParams,n);return ya(i),new va(t._repo,t._path,i,!0)}}function nc(t){if("$key"===t)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===t)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===t)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return go("orderByChild","path",t,!1),new ec(t)}class ic extends Va{_apply(t){_a(t,"orderByKey");const e=Gn(t._queryParams,qe);return ya(e),new va(t._repo,t._path,e,!0)}}function rc(){return new ic}class sc extends Va{_apply(t){_a(t,"orderByPriority");const e=Gn(t._queryParams,ln);return ya(e),new va(t._repo,t._path,e,!0)}}function oc(){return new sc}class ac extends Va{_apply(t){_a(t,"orderByValue");const e=Gn(t._queryParams,xn);return ya(e),new va(t._repo,t._path,e,!0)}}function cc(){return new ac}class lc extends Va{constructor(t,e){super(),this._value=t,this._key=e}_apply(t){if(lo("equalTo",this._value,t._path,!1),t._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(t._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new za(this._value,this._key)._apply(new Za(this._value,this._key)._apply(t))}}function uc(t,e){return mo("equalTo","key",e,!0),new lc(t,e)}function hc(t,...e){let n=(0,o.m9)(t);for(const i of e)n=i._apply(n);return n}zr(wa),ns(wa);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dc="FIREBASE_DATABASE_EMULATOR_HOST",pc={};let fc=!1;function mc(t,e,n,i){t.repoInfo_=new ht(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function gc(t,e,n,i,r){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),x("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=ha(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyBM-idQonpcqFWdKmfbGV87Exy8ZnYNi1I",VUE_APP_APP_ID:"1:787807385825:web:5e792bade238aafa0b9fa0",VUE_APP_AUTH_DOMAIN:"meu-pet-rs.firebaseapp.com",VUE_APP_MESSAGING_SENDER_ID:"787807385825",VUE_APP_PROJECT_ID:"meu-pet-rs",VUE_APP_STORAGE_BUCKET:"meu-pet-rs.appspot.com",BASE_URL:"/"}[dc]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=ha(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new Q(Q.OWNER):new J(t.name,t.options,e);yo("Invalid Firebase Database URL",c),be(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=_c(l,t,u,new X(t.name,n));return new yc(h,t)}function vc(t,e){const n=pc[e];n&&n[t.key]===t||T(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Zo(t),delete n[t.key]}function _c(t,e,n,i){let r=pc[e.name];r||(r={},pc[e.name]=r);let s=r[t.toURLString()];return s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Eo(t,fc,n,i),r[t.toURLString()]=s,s}class yc{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ao(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wa(this._repo,he())),this._rootInternal}_delete(){return null!==this._rootInternal&&(vc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&T("Cannot call "+t+" on a deleted database.")}}function bc(){zt.IS_TRANSPORT_INITIALIZED&&E("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function wc(){bc(),Mt.forceDisallow()}function Cc(){bc(),Vt.forceDisallow(),Mt.forceAllow()}function kc(t,e,n,i={}){t=(0,o.m9)(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Q(Q.OWNER);else if(i.mockUserToken){const e="string"===typeof i.mockUserToken?i.mockUserToken:(0,o.Sg)(i.mockUserToken,t.app.options.projectId);s=new Q(e)}mc(r,e,n,s)}function xc(t){t=(0,o.m9)(t),t._checkNotDeleted("goOffline"),Zo(t._repo)}function Sc(t){t=(0,o.m9)(t),t._checkNotDeleted("goOnline"),Go(t._repo)}function Ic(t,e){k(t,e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){h(s.SDK_VERSION),(0,s._registerComponent)(new r.wA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return gc(n,i,r,e)}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(c,l,t),(0,s.registerVersion)(c,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={".sv":"timestamp"};function Ac(){return Ec}function Oc(t){return{".sv":{increment:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e){this.committed=t,this.snapshot=e}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Pc(t,e,n){var i;if(t=(0,o.m9)(t),_o("Reference.transaction",t._path),".length"===t.key||".keys"===t.key)throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=null===(i=null===n||void 0===n?void 0:n.applyLocally)||void 0===i||i,s=new o.BH,a=(e,n,i)=>{let r=null;e?s.reject(e):(r=new Ca(i,new wa(t._repo,t._path),ln),s.resolve(new Rc(n,r)))},c=$a(t,(()=>{}));return Xo(t._repo,t._path,e,a,c,r),s.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},je.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Tc();const Nc="@firebase/database-compat",Lc="0.2.2",Dc=new a.Yd("@firebase/database-compat"),$c=function(t){const e="FIREBASE WARNING: "+t;Dc.warn(e)},Mc=function(t,e,n,i){if((!i||void 0!==n)&&"boolean"!==typeof n)throw new Error((0,o.gK)(t,e)+"must be a boolean.")},Bc=function(t,e,n){if(!n||void 0!==e)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error((0,o.gK)(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(t){this._delegate=t}cancel(t){(0,o.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,o.Wj)("OnDisconnect.cancel","onComplete",t,!0);const e=this._delegate.cancel();return t&&e.then((()=>t(null)),(e=>t(e))),e}remove(t){(0,o.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,o.Wj)("OnDisconnect.remove","onComplete",t,!0);const e=this._delegate.remove();return t&&e.then((()=>t(null)),(e=>t(e))),e}set(t,e){(0,o.Dv)("OnDisconnect.set",1,2,arguments.length),(0,o.Wj)("OnDisconnect.set","onComplete",e,!0);const n=this._delegate.set(t);return e&&n.then((()=>e(null)),(t=>e(t))),n}setWithPriority(t,e,n){(0,o.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,o.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);const i=this._delegate.setWithPriority(t,e);return n&&i.then((()=>n(null)),(t=>n(t))),i}update(t,e){if((0,o.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){const e={};for(let n=0;n<t.length;++n)e[""+n]=t[n];t=e,$c("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,o.Wj)("OnDisconnect.update","onComplete",e,!0);const n=this._delegate.update(t);return e&&n.then((()=>e(null)),(t=>e(t))),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e){this.committed=t,this.snapshot=e}toJSON(){return(0,o.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this._database=t,this._delegate=e}val(){return(0,o.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,o.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,o.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,o.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(t){return(0,o.Dv)("DataSnapshot.child",0,1,arguments.length),t=String(t),go("DataSnapshot.child","path",t,!1),new Uc(this._database,this._delegate.child(t))}hasChild(t){return(0,o.Dv)("DataSnapshot.hasChild",1,1,arguments.length),go("DataSnapshot.hasChild","path",t,!1),this._delegate.hasChild(t)}getPriority(){return(0,o.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(t){return(0,o.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,o.Wj)("DataSnapshot.forEach","action",t,!1),this._delegate.forEach((e=>t(new Uc(this._database,e))))}hasChildren(){return(0,o.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,o.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,o.Dv)("DataSnapshot.ref",0,0,arguments.length),new zc(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Vc{constructor(t,e){this.database=t,this._delegate=e}on(t,e,n,i){var r;(0,o.Dv)("Query.on",2,4,arguments.length),(0,o.Wj)("Query.on","callback",e,!1);const s=Vc.getCancelAndContextArgs_("Query.on",n,i),a=(t,n)=>{e.call(s.context,new Uc(this.database,t),n)};a.userCallback=e,a.context=s.context;const c=null===(r=s.cancel)||void 0===r?void 0:r.bind(s.context);switch(t){case"value":return $a(this._delegate,a,c),e;case"child_added":return Ma(this._delegate,a,c),e;case"child_removed":return Fa(this._delegate,a,c),e;case"child_changed":return Ba(this._delegate,a,c),e;case"child_moved":return ja(this._delegate,a,c),e;default:throw new Error((0,o.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(t,e,n){if((0,o.Dv)("Query.off",0,3,arguments.length),Bc("Query.off",t,!0),(0,o.Wj)("Query.off","callback",e,!0),(0,o.lb)("Query.off","context",n,!0),e){const i=()=>{};i.userCallback=e,i.context=n,Ua(this._delegate,t,i)}else Ua(this._delegate,t)}get(){return Pa(this._delegate).then((t=>new Uc(this.database,t)))}once(t,e,n,i){(0,o.Dv)("Query.once",1,4,arguments.length),(0,o.Wj)("Query.once","callback",e,!0);const r=Vc.getCancelAndContextArgs_("Query.once",n,i),s=new o.BH,a=(t,n)=>{const i=new Uc(this.database,t);e&&e.call(r.context,i,n),s.resolve(i)};a.userCallback=e,a.context=r.context;const c=t=>{r.cancel&&r.cancel.call(r.context,t),s.reject(t)};switch(t){case"value":$a(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Ma(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Fa(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":Ba(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":ja(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error((0,o.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(t){return(0,o.Dv)("Query.limitToFirst",1,1,arguments.length),new Vc(this.database,hc(this._delegate,Ja(t)))}limitToLast(t){return(0,o.Dv)("Query.limitToLast",1,1,arguments.length),new Vc(this.database,hc(this._delegate,tc(t)))}orderByChild(t){return(0,o.Dv)("Query.orderByChild",1,1,arguments.length),new Vc(this.database,hc(this._delegate,nc(t)))}orderByKey(){return(0,o.Dv)("Query.orderByKey",0,0,arguments.length),new Vc(this.database,hc(this._delegate,rc()))}orderByPriority(){return(0,o.Dv)("Query.orderByPriority",0,0,arguments.length),new Vc(this.database,hc(this._delegate,oc()))}orderByValue(){return(0,o.Dv)("Query.orderByValue",0,0,arguments.length),new Vc(this.database,hc(this._delegate,cc()))}startAt(t=null,e){return(0,o.Dv)("Query.startAt",0,2,arguments.length),new Vc(this.database,hc(this._delegate,Ga(t,e)))}startAfter(t=null,e){return(0,o.Dv)("Query.startAfter",0,2,arguments.length),new Vc(this.database,hc(this._delegate,Ya(t,e)))}endAt(t=null,e){return(0,o.Dv)("Query.endAt",0,2,arguments.length),new Vc(this.database,hc(this._delegate,qa(t,e)))}endBefore(t=null,e){return(0,o.Dv)("Query.endBefore",0,2,arguments.length),new Vc(this.database,hc(this._delegate,Wa(t,e)))}equalTo(t,e){return(0,o.Dv)("Query.equalTo",1,2,arguments.length),new Vc(this.database,hc(this._delegate,uc(t,e)))}toString(){return(0,o.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,o.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(t){if((0,o.Dv)("Query.isEqual",1,1,arguments.length),!(t instanceof Vc)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(t._delegate)}static getCancelAndContextArgs_(t,e,n){const i={cancel:void 0,context:void 0};if(e&&n)i.cancel=e,(0,o.Wj)(t,"cancel",i.cancel,!0),i.context=n,(0,o.lb)(t,"context",i.context,!0);else if(e)if("object"===typeof e&&null!==e)i.context=e;else{if("function"!==typeof e)throw new Error((0,o.gK)(t,"cancelOrContext")+" must either be a cancel callback or a context object.");i.cancel=e}return i}get ref(){return new zc(this.database,new wa(this._delegate._repo,this._delegate._path))}}class zc extends Vc{constructor(t,e){super(t,new va(e._repo,e._path,new Fn,!1)),this.database=t,this._delegate=e}getKey(){return(0,o.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(t){return(0,o.Dv)("Reference.child",1,1,arguments.length),"number"===typeof t&&(t=String(t)),new zc(this.database,Sa(this._delegate,t))}getParent(){(0,o.Dv)("Reference.parent",0,0,arguments.length);const t=this._delegate.parent;return t?new zc(this.database,t):null}getRoot(){return(0,o.Dv)("Reference.root",0,0,arguments.length),new zc(this.database,this._delegate.root)}set(t,e){(0,o.Dv)("Reference.set",1,2,arguments.length),(0,o.Wj)("Reference.set","onComplete",e,!0);const n=Ea(this._delegate,t);return e&&n.then((()=>e(null)),(t=>e(t))),n}update(t,e){if((0,o.Dv)("Reference.update",1,2,arguments.length),Array.isArray(t)){const e={};for(let n=0;n<t.length;++n)e[""+n]=t[n];t=e,$c("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_o("Reference.update",this._delegate._path),(0,o.Wj)("Reference.update","onComplete",e,!0);const n=Ra(this._delegate,t);return e&&n.then((()=>e(null)),(t=>e(t))),n}setWithPriority(t,e,n){(0,o.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,o.Wj)("Reference.setWithPriority","onComplete",n,!0);const i=Oa(this._delegate,t,e);return n&&i.then((()=>n(null)),(t=>n(t))),i}remove(t){(0,o.Dv)("Reference.remove",0,1,arguments.length),(0,o.Wj)("Reference.remove","onComplete",t,!0);const e=Ta(this._delegate);return t&&e.then((()=>t(null)),(e=>t(e))),e}transaction(t,e,n){(0,o.Dv)("Reference.transaction",1,3,arguments.length),(0,o.Wj)("Reference.transaction","transactionUpdate",t,!1),(0,o.Wj)("Reference.transaction","onComplete",e,!0),Mc("Reference.transaction","applyLocally",n,!0);const i=Pc(this._delegate,t,{applyLocally:n}).then((t=>new Fc(t.committed,new Uc(this.database,t.snapshot))));return e&&i.then((t=>e(null,t.committed,t.snapshot)),(t=>e(t,!1,null))),i}setPriority(t,e){(0,o.Dv)("Reference.setPriority",1,2,arguments.length),(0,o.Wj)("Reference.setPriority","onComplete",e,!0);const n=Aa(this._delegate,t);return e&&n.then((()=>e(null)),(t=>e(t))),n}push(t,e){(0,o.Dv)("Reference.push",0,2,arguments.length),(0,o.Wj)("Reference.push","onComplete",e,!0);const n=Ia(this._delegate,t),i=n.then((t=>new zc(this.database,t)));e&&i.then((()=>e(null)),(t=>e(t)));const r=new zc(this.database,n);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return _o("Reference.onDisconnect",this._delegate._path),new jc(new ga(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e){this._delegate=t,this.app=e,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:wc,forceLongPolling:Cc}}useEmulator(t,e,n={}){kc(this._delegate,t,e,n)}ref(t){if((0,o.Dv)("database.ref",0,1,arguments.length),t instanceof zc){const e=xa(this._delegate,t.toString());return new zc(this,e)}{const e=ka(this._delegate,t);return new zc(this,e)}}refFromURL(t){const e="database.refFromURL";(0,o.Dv)(e,1,1,arguments.length);const n=xa(this._delegate,t);return new zc(this,n)}goOffline(){return(0,o.Dv)("database.goOffline",0,0,arguments.length),xc(this._delegate)}goOnline(){return(0,o.Dv)("database.goOnline",0,0,arguments.length),Sc(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hc({app:t,url:e,version:n,customAuthImpl:i,namespace:s,nodeAdmin:o=!1}){h(n);const a=new r.zt("auth-internal",new r.H0("database-standalone"));return a.setComponent(new r.wA("auth-internal",(()=>i),"PRIVATE")),{instance:new qc(gc(t,a,void 0,e,o),t),namespace:s}}qc.ServerValue={TIMESTAMP:Ac(),increment:t=>Oc(t)};var Wc=Object.freeze({__proto__:null,initStandalone:Hc});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=qc.ServerValue;function Gc(t){t.INTERNAL.registerComponent(new r.wA("database-compat",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("database").getImmediate({identifier:e});return new qc(i,n)}),"PUBLIC").setServiceProps({Reference:zc,Query:Vc,Database:qc,DataSnapshot:Uc,enableLogging:Ic,INTERNAL:Wc,ServerValue:Zc}).setMultipleInstances(!0)),t.registerVersion(Nc,Lc)}Gc(i.Z)},5063:function(t,e,n){"use strict";var i=n(8180),r=n(5816),s=n(4444),o=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",l=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends s.ZR{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function f(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function m(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new h("canceled","User canceled the upload/download.")}function w(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function C(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function k(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function x(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function I(){return new h("no-download-url","The given file does not have any download URLs.")}function T(t){return new h("invalid-argument",t)}function E(){return new h("app-deleted","The Firebase app was deleted.")}function A(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function R(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=P.makeFromUrl(t,e)}catch(i){return new P(t,"")}if(""===n.path)return n;throw C(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},m=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),_={bucket:1,path:2},y=[{regex:o,indices:c,postModify:r},{regex:p,indices:f,postModify:l},{regex:v,indices:_,postModify:l}];for(let a=0;a<y.length;a++){const e=y[a],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new P(t,r),e.postModify(n);break}}if(null==n)throw w(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(p,c())}),e)}function d(){s&&clearTimeout(s)}function p(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let f=!1;function m(t){f||(f=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return void 0!==t}function M(t){return"function"===typeof t}function B(t){return"object"===typeof t&&!Array.isArray(t)}function j(t){return"string"===typeof t||t instanceof String}function F(t){return U()&&t instanceof Blob}function U(){return"undefined"!==typeof Blob}function V(t,e,n,i){if(i<e)throw T(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw T(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n,i,r,s,o,a,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Z(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new Z(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new Z(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());$(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=p();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?E():b();i(t)}else{const t=y();i(t)}};this.canceled_?e(!1,new Z(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class Z{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function K(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,i,r,s){const o=q(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Y(c,e),G(c,n),K(c,s),X(c,i),new W(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Q();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(U())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case it.RAW:return new rt(ot(e));case it.BASE64:case it.BASE64URL:return new rt(ct(t,e));case it.DATA_URL:return new rt(ut(e),ht(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(it.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(r){throw O(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new lt(t);return e.base64?ct(it.BASE64,e.rest):at(e.rest)}function ht(t){const e=new lt(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){let n=0,i="";F(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(F(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new pt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new pt(n,!0)}}static getBlob(...t){if(U()){const e=t.map((t=>t instanceof pt?t.data_:t));return new pt(tt.apply(null,e))}{const e=t.map((t=>j(t)?st(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new pt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){let e;try{e=JSON.parse(t)}catch(n){return null}return B(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return e}class yt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||_t}}let bt=null;function wt(t){return!j(t)||t.length<2?t:vt(t)}function Ct(){if(bt)return bt;const t=[];function e(t,e){return wt(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new yt("size");return r.xform=i,t.push(r),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),bt=t,bt}function kt(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new P(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function xt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return kt(i,t),i}function St(t,e,n){const i=ft(e);if(null===i)return null;const r=i;return xt(t,r,n)}function It(t,e,n,i){const r=ft(e);if(null===r)return null;if(!j(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=z(a,n,i),l=q({alt:"media",token:e});return c+l}));return c[0]}function Tt(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="prefixes",At="items";function Ot(t,e,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Et])for(const r of n[Et]){const n=r.replace(/\/$/,""),s=t._makeStorageReference(new P(e,n));i.prefixes.push(s)}if(n[At])for(const r of n[At]){const n=t._makeStorageReference(new P(e,r["name"]));i.items.push(n)}return i}function Rt(t,e,n){const i=ft(n);if(null===i)return null;const r=i;return Ot(t,e,r)}class Pt{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){if(!t)throw p()}function Lt(t,e){function n(n,i){const r=St(t,i,e);return Nt(null!==r),r}return n}function Dt(t,e){function n(n,i){const r=Rt(t,e,i);return Nt(null!==r),r}return n}function $t(t,e){function n(n,i){const r=St(t,i,e);return Nt(null!==r),It(r,i,t.host,t._protocol)}return n}function Mt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():g():402===e.getStatus()?m(t.bucket):403===e.getStatus()?_(t.path):n,i.serverResponse=n.serverResponse,i}return e}function Bt(t){const e=Mt(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=f(t.path)),r.serverResponse=i.serverResponse,r}return n}function jt(t,e,n){const i=e.fullServerUrl(),r=z(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Pt(r,s,Lt(t,n),o);return a.errorHandler=Bt(e),a}function Ft(t,e,n,i,r){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=e.bucketOnlyServerUrl(),a=z(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new Pt(a,c,Dt(t,e.bucket),l);return u.urlParams=s,u.errorHandler=Mt(e),u}function Ut(t,e,n){const i=e.fullServerUrl(),r=z(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Pt(r,s,$t(t,n),o);return a.errorHandler=Bt(e),a}function Vt(t,e,n,i){const r=e.fullServerUrl(),s=z(r,t.host,t._protocol),o="PATCH",a=Tt(n,i),c={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,u=new Pt(s,o,Lt(t,i),l);return u.headers=c,u.body=a,u.errorHandler=Bt(e),u}function zt(t,e){const n=e.fullServerUrl(),i=z(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Pt(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=Bt(e),a}function qt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ht(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=qt(null,e)),i}function Wt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ht(e,i,r),u=Tt(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",p=pt.getBlob(h,i,d);if(null===p)throw x();const f={name:l["fullPath"]},m=z(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,_=new Pt(m,g,Lt(t,n),v);return _.urlParams=f,_.headers=o,_.body=p.uploadData(),_.errorHandler=Mt(e),_}class Zt{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function Gt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){Nt(!1)}const i=e||["active"];return Nt(!!n&&-1!==i.indexOf(n)),n}function Kt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=Ht(e,i,r),a={name:o["fullPath"]},c=z(s,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Tt(o,n),d=t.maxUploadRetryTime;function p(t){let e;Gt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Nt(!1)}return Nt(j(e)),e}const f=new Pt(c,l,p,d);return f.urlParams=a,f.headers=u,f.body=h,f.errorHandler=Mt(e),f}function Yt(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(t){const e=Gt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Nt(!1)}n||Nt(!1);const r=Number(n);return Nt(!isNaN(r)),new Zt(r,i.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Pt(n,o,s,a);return c.headers=r,c.errorHandler=Mt(e),c}const Xt=262144;function Jt(t,e,n,i,r,s,o,a){const c=new Zt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw S();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u,p=u===l?"upload, finalize":"upload",f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},m=i.slice(h,d);if(null===m)throw x();function g(t,n){const r=Gt(t,["active","final"]),o=c.current+u,a=i.size();let l;return l="final"===r?Lt(e,s)(t,n):null,new Zt(o,a,"final"===r,l)}const v="POST",_=e.maxUploadRetryTime,y=new Pt(n,v,g,_);return y.headers=f,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=Mt(t),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n){const i=M(t)||null!=e||null!=n;if(i)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re=null;class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return re?re():new oe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Ct(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Kt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const i=Yt(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,ae,e,n);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Xt*this._chunkMultiplier,e=new Zt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let s;try{s=Jt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ae,i,r);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Xt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=jt(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Wt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=b(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const r=new ne(e||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;ie(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&ie(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&ie(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&ie(t.error.bind(t,this._error))();break;default:t.error&&ie(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this._service=t,this._location=e instanceof P?e:P.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new le(t,e)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new P(this._location.bucket,t);return new le(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function ue(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ce(t,new pt(e),n)}function he(t){const e={prefixes:[],items:[]};return de(t,e).then((()=>e))}async function de(t,e,n){const i={pageToken:n},r=await pe(t,i);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await de(t,e,r.nextPageToken)}function pe(t,e){null!=e&&"number"===typeof e.maxResults&&V("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=Ft(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(i,ae)}function fe(t){t._throwIfRoot("getMetadata");const e=jt(t.storage,t._location,Ct());return t.storage.makeRequestWithTokens(e,ae)}function me(t,e){t._throwIfRoot("updateMetadata");const n=Vt(t.storage,t._location,e,Ct());return t.storage.makeRequestWithTokens(n,ae)}function ge(t){t._throwIfRoot("getDownloadURL");const e=Ut(t.storage,t._location,Ct());return t.storage.makeRequestWithTokens(e,ae).then((t=>{if(null===t)throw I();return t}))}function ve(t){t._throwIfRoot("deleteObject");const e=zt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ae)}function _e(t,e){const n=gt(t._location.path,e),i=new P(t._location.bucket,n);return new le(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return/^[A-Za-z]+:\/\//.test(t)}function be(t,e){return new le(t,e)}function we(t,e){if(t instanceof Se){const n=t;if(null==n._bucket)throw k();const i=new le(n,n._bucket);return null!=e?we(i,e):i}return void 0!==e?_e(t,e):t}function Ce(t,e){if(e&&ye(e)){if(t instanceof Se)return be(t,e);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return we(t,e)}function ke(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:P.makeFromBucketSpec(n,t)}function xe(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:(0,s.Sg)(r,t.app.options.projectId))}class Se{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=i?P.makeFromBucketSpec(i,this._host):ke(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=ke(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new le(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new N(E());{const r=J(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Ie="@firebase/storage",Te="0.9.8",Ee="storage";function Ae(t,e,n){return t=(0,s.m9)(t),ue(t,e,n)}function Oe(t){return t=(0,s.m9)(t),fe(t)}function Re(t,e){return t=(0,s.m9)(t),me(t,e)}function Pe(t,e){return t=(0,s.m9)(t),pe(t,e)}function Ne(t){return t=(0,s.m9)(t),he(t)}function Le(t){return t=(0,s.m9)(t),ge(t)}function De(t){return t=(0,s.m9)(t),ve(t)}function $e(t,e){return t=(0,s.m9)(t),Ce(t,e)}function Me(t,e){return _e(t,e)}function Be(t,e,n,i={}){xe(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Se(n,i,s,e,r.SDK_VERSION)}function Fe(){(0,r._registerComponent)(new o.wA(Ee,je,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(Ie,Te,""),(0,r.registerVersion)(Ie,Te,"esm2017")}Fe();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ue(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then((e=>{if(t)return t(new Ue(e,this,this._ref))}),e)}on(t,e,n,i){let r;return e&&(r="function"===typeof e?t=>e(new Ue(t,this,this._ref)):{next:e.next?t=>e.next(new Ue(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,r,n||void 0,i||void 0)}}class ze{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map((t=>new qe(t,this._service)))}get items(){return this._delegate.items.map((t=>new qe(t,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=Me(this._delegate,t);return new qe(e,this.storage)}get root(){return new qe(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new qe(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new Ve(Ae(this._delegate,t,e),this)}putString(t,e=it.RAW,n){this._throwIfRoot("putString");const i=st(e,t),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new Ve(new ce(this._delegate,new pt(i.data,!0),r),this)}listAll(){return Ne(this._delegate).then((t=>new ze(t,this.storage)))}list(t){return Pe(this._delegate,t||void 0).then((t=>new ze(t,this.storage)))}getMetadata(){return Oe(this._delegate)}updateMetadata(t){return Re(this._delegate,t)}getDownloadURL(){return Le(this._delegate)}delete(){return this._throwIfRoot("delete"),De(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw A(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(We(t))throw T("ref() expected a child path but got a URL, use refFromURL instead.");return new qe($e(this._delegate,t),this)}refFromURL(t){if(!We(t))throw T("refFromURL() expected a full URL but got a child path, use ref() instead.");try{P.makeFromUrl(t,this._delegate.host)}catch(e){throw T("refFromUrl() expected a valid full URL but got an invalid one.")}return new qe($e(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){Be(this._delegate,t,e,n)}}function We(t){return/^[A-Za-z]+:\/\//.test(t)}const Ze="@firebase/storage-compat",Ge="0.1.16",Ke="storage-compat";function Ye(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:e}),r=new He(n,i);return r}function Xe(t){const e={TaskState:te,TaskEvent:Qt,StringFormat:it,Storage:He,Reference:qe};t.INTERNAL.registerComponent(new o.wA(Ke,Ye,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Ze,Ge)}Xe(i.Z)},7273:function(){},8582:function(){},2245:function(){},3401:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});n(6699);var i=n(5648),r=n(3150),s=r.Z,o=n(172),a=n(2936),c=n(8085),l=n(144),u=l.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(3325),d=n(1824),p=(0,h.Z)(i.Z,a.Z,u).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(s,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||c.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},8320:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var i=n(6656);function r(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function s(t,e,n){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[n.context._uid]))return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}const o={inserted:r,unbind:s};var a=o,c=n(3358),l=n(1824),u=n(144),h=u.Z.extend({name:"scrollable",directives:{Scroll:o},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,l.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),d=n(9177),p=n(2936),f=n(4589),m=n(3325);const g=(0,m.Z)(i.Z,h,d.Z,p.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var v=g.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return i.Z.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=i.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i.Z.options.computed.isCollapsed.call(this)},isProminent(){return i.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i.Z.options.computed.styles.call(this),fontSize:(0,f.kb)(this.computedFontSize,"rem"),marginTop:(0,f.kb)(this.computedMarginTop),transform:`translateY(${(0,f.kb)(this.computedTransform)})`,left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=i.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=i.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},5206:function(t,e,n){"use strict";var i=n(172),r=n(3150),s=n(144);e["Z"]=s.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:s,data:o}){const a=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...s,icon:!0},on:n}),c=e().default;return t(r.Z,a,c||[t(i.Z,"$menu")])}})},7524:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(1703);var i=n(8085),r=n(3325),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},6370:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(6952),r=n(2529),s=n(3712),o=n(4589),a=n(3325),c=(0,a.Z)(i.Z,r.Z,s.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},3150:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});n(6699);var i=n(5648),r=n(624),s=r.Z,o=n(7352),a=n(2936),c=n(3377),l=n(3536),u=n(6505),h=n(9131),d=n(3325),p=n(1824);const f=(0,d.Z)(i.Z,u.Z,l.Z,h.Z,(0,o.d)("btnToggle"),(0,a.d)("inputValue"));var m=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...u.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return c.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(s,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},3237:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5648),r=n(7342),s=n(6505),o=n(3325),a=(0,o.Z)(r.Z,s.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,n){"use strict";n.d(e,{EB:function(){return c},ZB:function(){return a},h7:function(){return s}});var i=n(3237),r=n(4589);const s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},3702:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(2245);var i=n(172),r=n(8230),s=n(5786),o=s.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},3568:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(4589),r=n(8085),s=n(3325),o=(0,s.Z)(r.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,i.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},4246:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});n(6699);var i=n(8085),r=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),s=n(144),o=s.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}}),a=n(2936),c=n(3325),l=n(4589),u=n(1824);const h=(0,c.Z)(o,a.Z);var d=h.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,l.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,u.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,l.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return(0,l.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),p=n(5907),f=n(8625);function m(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function g(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}var v=(0,c.Z)(f.Z).extend({name:"detachable",props:{attach:{default:!1,validator:m},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),g(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else g(t)}},methods:{getScopeIdAttrs(){const t=(0,l.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,u.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),_=n(390),y=s.Z.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),b=s.Z.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,l.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,l.KK)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)t.includes(i[r])||n.push((0,l.KK)(i[r]));return Math.max(...n)}}}),w=n(5600);const C=(0,c.Z)(p.Z,v,_.Z,y,b,d);var k=C.extend({name:"v-dialog",directives:{ClickOutside:w.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):_.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===l.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(r,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,l.kb)(this.maxWidth),width:(0,l.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1418:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(8085),r=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},6232:function(t,e,n){"use strict";n(6699);var i=n(3325),r=n(6210),s=n(6257);e["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},2102:function(t,e,n){"use strict";n(6699),n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((n=>{const i=e[n],r=h(t,n,i);r&&a.push(r)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.ZP)(n,{class:a}),i)}})},9846:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(8582),n(7273);var i=n(144);function r(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n(6290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},2877:function(t,e,n){"use strict";n(6699),n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(t,e){return o.reduce(((n,i)=>(n[t+(0,s.jC)(i)]=e(),n)),{})}const l=t=>[...a,"baseline","stretch"].includes(t),u=c("align",(()=>({type:String,default:null,validator:l}))),h=t=>[...a,"space-between","space-around"].includes(t),d=c("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=c("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const _=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=_.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],r=v(t,n,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),_.set(s,o)}return t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},9762:function(t,e,n){"use strict";n(8582);var i=n(4589);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},6428:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});n(6699);var i,r=n(6210),s=n(6952),o=n(9131),a=n(8085),c=n(4589),l=n(144),u=n(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,c.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((e=>t[e]));return e&&i[e]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var f=l.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},172:function(t,e,n){"use strict";var i=n(6428);e["Z"]=i.Z},7047:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(8083),r=n(2529),s=n(3325),o=n(4589),a=(0,s.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=n(8085),u=n(6290),h=n(1824);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,s.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),n=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},8230:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(172),r=n(5097),s=n(6952),o=n(8085),a=n(3325),c=n(4589),l=(0,a.Z)(s.Z,o.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,c.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=l,h=n(6210),d=n(6884),p=n(6290);const f=(0,a.Z)(h.Z,d.Z);var m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const r=this[`${t}Icon`],s=`click:${(0,c.GL)(t)}`,o=!(!this.listeners$[s]&&!e),a=(0,p.ZP)({attrs:{"aria-label":o?(0,c.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light,tabindex:"clear"===t?-1:void 0},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(s,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,c.GL)(t)}`:void 0},[this.$createElement(i.Z,a,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,c.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(r.Z,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,c.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),g=m},5097:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(6952),r=n(8085),s=n(3325),o=n(4589),a=(0,s.Z)(r.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:s,props:a}=e,c={staticClass:"v-label",class:{"v-label--active":a.value,"v-label--is-disabled":a.disabled,...(0,r.X)(e)},attrs:{for:a.for,"aria-hidden":!a.for},on:s,style:{left:(0,o.kb)(a.left),right:(0,o.kb)(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return t("label",i.Z.options.methods.setTextColor(a.focused&&a.color,c),n)}}),c=a},6816:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(3385),r=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(6952),r=n(6505),s=n(7352),o=n(8085),a=n(2936),c=n(6286),l=n(4589),u=n(1824),h=n(3325);const d=(0,h.Z)(i.Z,r.Z,o.Z,(0,s.d)("listItemGroup"),(0,a.d)("inputValue"));var p=d.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===l.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},3249:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(4419),r=n(1431),s=n(8085),o=n(3325),a=n(1824);const c=(0,o.Z)(i.Z,r.Z,s.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,a.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var l=n(6952),u=(0,o.Z)(c,l.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...c.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...c.options.methods.genData.call(this),attrs:{role:"listbox"}})}}})},459:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}})},6423:function(t,e,n){"use strict";n.d(e,{V9:function(){return I}});var i=n(4589),r=n(6816),s=n(172),o=n(7620),a=n(459),c=n(6210),l=n(8625),u=n(6952),h=n(2936),d=n(6257),p=n(6286),f=n(5827),m=n(3325);const g=(0,m.Z)(c.Z,l.Z,u.Z,(0,d.f)("list"),h.Z);var v=g.extend().extend({name:"v-list-group",directives:{ripple:p.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(s.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(f.Fx,this.genItems())])}}),_=n(3249),y=n(144),b=y.Z.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}}),w=n(6370),C=w.Z,k=C.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...C.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=C.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});const x=(0,i.Ji)("v-list-item__action-text","span"),S=(0,i.Ji)("v-list-item__content","div"),I=(0,i.Ji)("v-list-item__title","div"),T=(0,i.Ji)("v-list-item__subtitle","div");r.Z,o.Z,_.Z,a.Z},7877:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(9177),r=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},6724:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(7047),r=n(3358),s=n(6952),o=n(5907),a=(n(6699),n(1824)),c=n(144),l=c.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?e<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,a.Rn)("mobile-break-point","mobile-breakpoint",this)}}),u=n(390),h=n(9177),d=n(8085),p=n(5600),f=n(549),m=n(5500),g=n(4589),v=n(3325);const _=(0,v.Z)((0,r.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),s.Z,o.Z,l,u.Z,h.Z,d.Z);var y=_.extend({name:"v-navigation-drawer",directives:{ClickOutside:p.Z,Resize:f.Z,Touch:m.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&l.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,g.kb)(this.height),top:this.isBottom?"auto":(0,g.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,g.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,g.kb)(this.computedTransform,"%")})`,width:(0,g.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,g.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,g.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},624:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(8083),r=n(6952),s=n(4589),o=r.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,s.kb)(this.calculatedSize),width:(0,s.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},7003:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(5827),r=n(8083),s=n(6952),o=n(3536),a=n(1431),c=n(8085),l=n(4589),u=n(3325);const h=(0,u.Z)(s.Z,(0,o.d)(["absolute","fixed","top","bottom"]),a.Z,c.Z);var d=h.extend({name:"v-progress-linear",directives:{intersect:r.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,l.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,l.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,l.kb)(this.normalizedValue,"%"),width:(0,l.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i.Z5:i.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,l.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,l.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,l.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},3385:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(6210),r=n(6952),s=n(3377),o=n(2529),a=n(3712),c=n(8085),l=n(3325),u=(0,l.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,n){"use strict";var i=n(3385);e["Z"]=i.Z},1328:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});n(2245);var i=n(5786),r=n(8230),s=n(5500),o=n(5827),a=n(624),c=n(4589),l=i.Z.extend({name:"v-switch",directives:{Touch:s.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(o.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(a.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===c.Do.left&&this.isActive||t.keyCode===c.Do.right&&!this.isActive)&&this.onChange()}}})},3105:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});n(6699);var i=n(8230),r=n(8085),s=n(3325),o=(0,s.Z)(r.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),s=parseInt(n.value,10),o=i?`${s} / ${i}`:String(n.value),a=i&&s>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,r.X)(e)}},o)}}),a=o,c=n(5097),l=n(8083),u=n(1824),h=n(144);function d(t){return h.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){l.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){l.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?(0,u.Kd)(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var p=n(7342),f=n(6884),m=n(549),g=n(6286),v=n(1706),_=n(4589);const y=(0,s.Z)(i.Z,d({onVisible:["onResize","tryAutofocus"]}),p.Z),b=["color","file","time","date","datetime-local","week","month"];var w=y.extend().extend({name:"v-text-field",directives:{resize:m.Z,ripple:g.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=f.Z.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i.Z.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||b.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,u.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,u.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,u.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i.Z.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!==(n=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:r}))&&void 0!==n?n:this.$createElement(a,{props:r})},genControl(){return i.Z.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(c.Z,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,_.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=i.Z.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,v.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===_.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i.Z.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i.Z.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,v.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},6656:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(3385),r=n(7047),s=n(4589),o=n(1824),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,s.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.kb)(this.computedContentHeight)}},(0,s.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.kb)(this.extensionHeight)}},(0,s.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},7921:function(t,e,n){"use strict";n.d(e,{qW:function(){return s}});var i=n(6656),r=n(4589);const s=(0,r.Ji)("v-toolbar__title"),o=(0,r.Ji)("v-toolbar__items");i.Z},5827:function(t,e,n){"use strict";n.d(e,{Fx:function(){return d},b0:function(){return l},Z5:function(){return u},Qn:function(){return h}});var i=n(6290);function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(4589);function c(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition");const l=s("fab-transition","center center","out-in"),u=(s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c()));o("expand-x-transition",c("",!0))},5600:function(t,e,n){"use strict";var i=n(1706);function r(){return!0}function s(t,e,n){if(!t||!1===o(t,n))return!1;const r=(0,i.e)(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(e),!s.some((e=>e.contains(t.target)))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||r;return n(t)}function a(t,e,n){const i="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,n)&&setTimeout((()=>{o(t,n)&&i&&i(t)}),0)}function c(t,e){const n=(0,i.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const l={inserted(t,e,n){const i=n=>a(n,t,e),r=n=>{t._clickOutside.lastMousedownWasOutside=s(n,t,e)};c(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(c(t,(e=>{var i;if(!e||!(null===(i=t._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)})),delete t._clickOutside[n.context._uid])}};e["Z"]=l},8083:function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const l=null===(c=t._observe)||void 0===c?void 0:c[n.context._uid];if(!l)return;const u=s.some((t=>t.isIntersecting));!o||i.quiet&&!l.init||i.once&&!u&&!l.init||o(s,a,u),u&&i.once?r(t,e,n):l.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,n){var i;const r=null===(i=t._observe)||void 0===i?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e["Z"]=s},549:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,n){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const s={inserted:i,unbind:r};e["Z"]=s},6286:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var i=n(4589);const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const c=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=(e.clientWidth-2*s)/2+"px",u=(e.clientHeight-2*s)/2+"px",h=n.center?l:i-s+"px",d=n.center?u:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:l,centerY:u}},l={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:l,y:u,centerX:h,centerY:d}=c(t,e,n),p=2*o+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${l}, ${u}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{l.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else l.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,h(t))}function g(t){f=!1,d(t)}function v(t){!0===f&&(f=!1,d(t))}function _(t,e,n){const i=u(e.value);i||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&y(t)}function y(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function b(t,e,n){_(t,e,!1)}function w(t){delete t._ripple,y(t)}function C(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);_(t,e,n)}const k={bind:b,unbind:w,update:C};var x=k},5500:function(t,e,n){"use strict";var i=n(4589);const r=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function s(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}function a(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>s(t,e),touchend:t=>o(t,e),touchmove:t=>a(t,e)}}function l(t,e,n){const r=e.value,s=r.parent?t.parentElement:t,o=r.options||{passive:!0};if(!s)return;const a=c(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[n.context._uid]=a,(0,i.XP)(a).forEach((t=>{s.addEventListener(t,a[t],o)}))}function u(t,e,n){const r=e.value.parent?t.parentElement:t;if(!r||!r._touchHandlers)return;const s=r._touchHandlers[n.context._uid];(0,i.XP)(s).forEach((t=>{r.removeEventListener(t,s[t])})),delete r._touchHandlers[n.context._uid]}const h={inserted:l,unbind:u};e["Z"]=h},1910:function(t,e,n){"use strict";n.d(e,{Z:function(){return yt}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return _},easeInOutCubic:function(){return b},easeInOutQuad:function(){return v},easeInOutQuart:function(){return k},easeInOutQuint:function(){return I},easeInQuad:function(){return m},easeInQuart:function(){return w},easeInQuint:function(){return x},easeOutCubic:function(){return y},easeOutQuad:function(){return g},easeOutQuart:function(){return C},easeOutQuint:function(){return S},linear:function(){return f}});n(6699);var r=n(144),s=n(1824);function o(t,e={}){if(o.installed)return;o.installed=!0,r.Z!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},i=e.directives||{};for(const r in i){const e=i[r];t.directive(r,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var l=n(4589);class u{constructor(){this.framework={}}init(t,e){}}class h extends u{constructor(t,e){super();const n=(0,l.Ee)({},c),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,l.Ee)((0,l.Ee)(n,r),o)}}h.property="presets";class d extends u{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}d.property="application";class p extends u{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[p.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},l=c[this.name],u=c[this.mobileBreakpoint];this.mobile=l<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}p.property="breakpoint";n(1703);const f=t=>t,m=t=>t**2,g=t=>t*(2-t),v=t=>t<.5?2*t**2:(4-2*t)*t-1,_=t=>t**3,y=t=>--t**3+1,b=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,w=t=>t**4,C=t=>1- --t**4,k=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,x=t=>t**5,S=t=>1+--t**5,I=t=>t<.5?16*t**5:1+16*--t**5;function T(t){if("number"===typeof t)return t;let e=O(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function E(t){const e=O(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(t)} instead.`)}function A(t){return null==t?t:t.constructor.name}function O(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function R(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=E(n.container);if(n.appOffset&&R.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=R.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?T(t)-n.offset:T(t)-T(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const l=i-s,u=Math.abs(n.duration?Math.min(l/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(u));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===u||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}R.framework={},R.init=()=>{};class P extends u{constructor(){return super(),R}}P.property="goTo";const N={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var L=N;const D={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var $=D;const M={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var B=M;const j={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var F=j;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var V=U;function z(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var q=z("font-awesome-icon",F),H=Object.freeze({mdiSvg:L,md:$,mdi:B,fa:F,fa4:V,faSvg:q});class W extends u{constructor(t){super();const{iconfont:e,values:n,component:i}=t[W.property];this.component=i,this.iconfont=e,this.values=(0,l.Ee)(H[e],n)}}W.property="icons";const Z="$vuetify.",G=Symbol("Lang fallback");function K(t,e,n=!1,i){const r=e.replace(Z,"");let o=(0,l.vO)(t,r,G);return o===G&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=K(i,e,!0,i))),o}class Y extends u{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[Y.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return K(e,t,!1,n)}t(t,...e){return t.startsWith(Z)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}Y.property="lang";var X=n(7093);const J=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Q=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,tt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],et=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function nt(t){const e=Array(3),n=Q,i=J;for(let r=0;r<3;++r)e[r]=Math.round(255*(0,l.uZ)(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function it(t){const e=[0,0,0],n=et,i=tt,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const rt=.20689655172413793,st=t=>t>rt**3?Math.cbrt(t):t/(3*rt**2)+4/29,ot=t=>t>rt?t**3:3*rt**2*(t-4/29);function at(t){const e=st,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function ct(t){const e=ot,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function lt(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,X.hq)(r)):o[i]="object"===typeof r?lt(r,!0,n):mt(i,(0,X.jx)(r)):o[i]={base:(0,X.I4)((0,X.jx)(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const ut=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,ht=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},dt=(t,e="base")=>`--v-${t}-${e}`,pt=(t,e="base")=>`var(${dt(t,e)})`;function ft(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?pt("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${dt("anchor")}: ${n};\n`);for(let c=0;c<r.length;++c){const n=r[c],i=t[n];o+=ut(n,e?pt(n):i.base),e&&(s+=`  ${dt(n)}: ${i.base};\n`);const a=(0,l.XP)(i);for(let t=0;t<a.length;++t){const r=a[t],c=i[r];"base"!==r&&(o+=ht(n,r,e?pt(n,r):c),e&&(s+=`  ${dt(n,r)}: ${c};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function mt(t,e){const n={base:(0,X.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,X.I4)(gt(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,X.I4)(vt(e,i));return n}function gt(t,e){const n=at(it(t));return n[0]=n[0]+10*e,nt(ct(n))}function vt(t,e){const n=at(it(t));return n[0]=n[0]-10*e,nt(ct(n))}class _t extends u{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[_t.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=r.Z.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=ft(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return lt(this.currentTheme||{},void 0,(0,l.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}_t.property="theme";class yt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(h),this.use(d),this.use(p),this.use(P),this.use(W),this.use(Y),this.use(_t)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}yt.install=o,yt.installed=!1,yt.version="2.6.12",yt.config={silent:!1}},3358:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(3536),r=n(3325);function s(t,e=[]){return(0,r.Z)((0,i.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},6210:function(t,e,n){"use strict";var i=n(144);function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},8625:function(t,e,n){"use strict";var i=n(1824),r=n(144);e["Z"]=r.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6952:function(t,e,n){"use strict";var i=n(144),r=n(1824),s=n(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,s.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,s.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},4419:function(t,e,n){"use strict";var i=n(144),r=n(4589);e["Z"]=i.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.vZ}}})},5907:function(t,e,n){"use strict";var i=n(3325);function r(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...r(i.$children))}return e}e["Z"]=(0,i.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},3377:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(6257);function r(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},7342:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(144),r=n(7003),s=r.Z,o=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},2529:function(t,e,n){"use strict";var i=n(4589),r=n(144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},390:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});n(6699);var i=n(6952),r=n(8085),s=n(2936),o=n(3325),a=(0,o.Z)(i.Z,r.Z,s.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=a,l=n(4589),u=n(144),h=u.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,l.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,l.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[l.Do.up,l.Do.pageup],n=[l.Do.down,l.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,l.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,l.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},3536:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(144),r=n(4589);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.Z.extend({name:"positionable",props:t.length?(0,r.ji)(s,t):s})}e["Z"]=o()},1431:function(t,e,n){"use strict";var i=n(144);function r(t="value",e="change"){return i.Z.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e["Z"]=s},6257:function(t,e,n){"use strict";n.d(e,{J:function(){return a},f:function(){return o}});var i=n(144),r=n(1824);function s(t,e){return()=>(0,r.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function a(t,e=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,n){"use strict";var i=n(144),r=n(6286),s=n(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},5786:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(8230),r=n(6286),s=n(144),o=s.Z.extend({name:"rippleable",directives:{ripple:r.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),a=n(4419),c=n(3325);function l(t){t.preventDefault()}var u=(0,c.Z)(i.Z,o,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})},9131:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9177:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},8085:function(t,e,n){"use strict";n.d(e,{X:function(){return s}});var i=n(144);const r=i.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["Z"]=r},2936:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(144);function r(t="value",e="input"){return i.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e["Z"]=s},6884:function(t,e,n){"use strict";var i=n(6952),r=n(8085),s=n(6257),o=n(4589),a=n(1824),c=n(3325);const l=(0,c.Z)(i.Z,(0,s.f)("form"),r.Z);e["Z"]=l.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,o.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,a.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},7093:function(t,e,n){"use strict";n.d(e,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});n(1703);var i=n(1824);function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},1824:function(t,e,n){"use strict";n.d(e,{Jk:function(){return l},Kd:function(){return s},N6:function(){return o},Rn:function(){return a},fK:function(){return c}});n(6699);var i=n(1910);function r(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?p(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){s(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function c(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function l(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const u=/(?:^|[-_])(\w)/g,h=t=>t.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==e?` at ${r}`:"")}function p(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}},1706:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},4589:function(t,e,n){"use strict";n.d(e,{Do:function(){return g},Ee:function(){return I},GL:function(){return f},Ji:function(){return r},KK:function(){return h},RB:function(){return v},TI:function(){return C},XP:function(){return _},_A:function(){return b},iZ:function(){return T},jC:function(){return w},ji:function(){return d},kb:function(){return p},lj:function(){return a},qh:function(){return s},qw:function(){return c},sp:function(){return k},uZ:function(){return S},vO:function(){return u},vZ:function(){return l},z9:function(){return x}});var i=n(144);function r(t,e="div",n){return i.Z.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(E){console.warn(E)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function c(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function l(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>l(t[n],e[n])))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c(t,e.split("."),n)):n}function h(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||h(t.parentNode)}function d(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function p(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function f(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(t){return null!==t&&"object"===typeof t}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function _(t){return Object.keys(t)}const y=/-(\w)/g,b=t=>t.replace(y,((t,e)=>e?e.toUpperCase():""));function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function k(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function x(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function S(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function I(t={},e={}){for(const n in e){const i=t[n],r=e[n];m(i)&&m(r)?t[n]=I(i,r):t[n]=r}return t}function T(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},6290:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o}});var i=n(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,i._A)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function c(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},3325:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(144);function r(...t){return i.Z.extend({mixins:t})}},3005:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(3129),r=n.n(i),s=n(1198),o=n.n(s);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);o=!0);}catch(t){a=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(i,r)}var u={name:"AvatarCropper",model:{prop:"trigger",event:"triggered"},props:{trigger:{type:Boolean,default:!1},file:{type:File},uploadHandler:{type:Function},uploadUrl:{type:String},requestOptions:{type:Object,default:function(){return{method:"POST"}}},uploadFileField:{type:String,default:"file"},uploadFileName:{type:[String,Function]},uploadFormData:{type:FormData,default:function(){return new FormData}},cropperOptions:{type:Object,default:function(){return{aspectRatio:1,autoCropArea:1,viewMode:1,movable:!1,zoomable:!1}}},outputOptions:{type:Object},outputMime:{type:String,default:null},outputQuality:{type:Number,default:.9},mimes:{type:String,default:"image/png, image/gif, image/jpeg, image/bmp, image/x-icon"},capture:{type:String},labels:{type:Object,default:function(){return{submit:"Ok",cancel:"Cancel"}}},inline:{type:Boolean,default:!1}},data:function(){return{cropper:void 0,dataUrl:void 0,fileName:void 0,mimeType:void 0}},computed:{cleanedMimes:function(){if(!this.mimes)throw new Error("vue-avatar-cropper: mimes prop cannot be empty");return this.mimes.trim().toLowerCase()}},watch:{trigger:function(t){t&&(this.file?this.onFileChange(this.file):this.pickImage(),this.$emit("triggered",!1))}},mounted:function(){this.$emit("triggered",!1)},methods:{destroy:function(){this.cropper&&this.cropper.destroy(),this.$refs.input&&(this.$refs.input.value=""),this.dataUrl=void 0},submit:function(){this.$emit("submit"),this.uploadUrl?this.uploadImage():this.uploadHandler?this.uploadHandler(this.cropper):this.$emit("error",{type:"user",message:"No upload handler found"}),this.destroy()},cancel:function(){this.$emit("cancel"),this.destroy()},onImgElementError:function(){this.$emit("error",{type:"load",message:"File loading failed"}),this.destroy()},pickImage:function(){this.$refs.input&&this.$refs.input.click()},onFileChange:function(t){var e=this;if("image/*"===this.cleanedMimes){if("image"!==t.type.split("/")[0])return void this.$emit("error",{type:"user",message:"File type not correct"})}else if(this.cleanedMimes){var n=this.cleanedMimes.split(", ").find((function(e){return e===t.type}));if(!n)return void this.$emit("error",{type:"user",message:"File type not correct"})}var i=new FileReader;i.onload=function(t){e.dataUrl=t.target.result},i.readAsDataURL(t),this.fileName=t.name||"unknown",this.mimeType=t.type,this.$emit("changed",{file:t,reader:i})},onFileInputChange:function(t){t.target.files&&t.target.files[0]&&this.onFileChange(t.target.files[0])},createCropper:function(){this.cropper=new(r())(this.$refs.img,this.cropperOptions)},getFilename:function(t){var e=o().getExtension(t.type);if(!this.uploadFileName){var n=this.fileName,i=this.fileName.split(".");return i.length>1&&(n=i.slice(0,-1).join(".")),"".concat(n,".").concat(e)}return"string"==typeof this.uploadFileName?this.uploadFileName:"function"==typeof this.uploadFileName?this.uploadFileName({filename:this.fileName,mime:t.type,extension:e}):"unknown.".concat(e)},uploadImage:function(){var t=this;this.cropper.getCroppedCanvas(this.outputOptions).toBlob(function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var i,r,s,o,c,l,u,h,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in i=new FormData,t.uploadFormData.entries())s=a(r,2),o=s[0],c=s[1],i.append(o,c);return i.append(t.uploadFileField,n,t.getFilename(n)),l=Object.assign({body:i},t.requestOptions),u=new Request(t.uploadUrl,l),h=fetch(u),t.$emit("uploading",{form:i,request:u,response:h}),e.next=9,h;case 9:d=e.sent,t.$emit("completed",{form:i,request:u,response:d}),d.ok?t.$emit("uploaded",{form:i,request:u,response:d}):t.$emit("error",{type:"upload",message:"Image upload fail",context:{request:u,response:d}});case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,r){var s=e.apply(t,n);function o(t){l(s,i,r,o,a,"next",t)}function a(t){l(s,i,r,o,a,"throw",t)}o(void 0)}))});return function(t){return n.apply(this,arguments)}}(),this.outputMime||this.mimeType,this.outputQuality)}}};function h(t,e,n,i,r,s,o,a,c,l){"boolean"!=typeof o&&(c=a,a=o,o=!1);var u,h="function"==typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,r&&(h.functional=!0)),i&&(h._scopeId=i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=u):e&&(u=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(h.functional){var d=h.render;h.render=function(t,e){return u.call(e),d(t,e)}}else{var p=h.beforeCreate;h.beforeCreate=p?[].concat(p,u):[u]}return n}var d,p="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function f(t){return function(t,e){return function(t,e){var n=p?e.media||"default":t,i=m[n]||(m[n]={ids:new Set,styles:[]});if(!i.ids.has(t)){i.ids.add(t);var r=e.source;if(e.map&&(r+="\n/*# sourceURL="+e.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",e.media&&i.element.setAttribute("media",e.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(r),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var s=i.ids.size-1,o=document.createTextNode(r),a=i.element.childNodes;a[s]&&i.element.removeChild(a[s]),a.length?i.element.insertBefore(o,a[s]):i.element.appendChild(o)}}}(t,e)}}var m={},g=h({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar-cropper"},[t.dataUrl?n("div",{staticClass:"avatar-cropper-overlay",class:{"avatar-cropper-overlay-inline":t.inline}},[t.inline?t._e():n("div",{staticClass:"avatar-cropper-mark"},[n("a",{staticClass:"avatar-cropper-close",attrs:{title:t.labels.cancel,href:"javascript:;"},on:{click:t.cancel}},[t._v("×")])]),n("div",{staticClass:"avatar-cropper-container"},[n("div",{staticClass:"avatar-cropper-image-container"},[n("img",{ref:"img",attrs:{src:t.dataUrl,alt:""},on:{load:function(e){return e.stopPropagation(),t.createCropper.apply(null,arguments)},error:t.onImgElementError}})]),n("div",{staticClass:"avatar-cropper-footer"},[n("button",{staticClass:"avatar-cropper-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.cancel.apply(null,arguments)}}},[t._v(" "+t._s(t.labels.cancel)+" ")]),n("button",{staticClass:"avatar-cropper-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submit.apply(null,arguments)}}},[t._v(" "+t._s(t.labels.submit)+" ")])])])]):t._e(),t.file?t._e():n("input",{ref:"input",staticClass:"avatar-cropper-img-input",attrs:{accept:t.cleanedMimes,capture:t.capture,type:"file"},on:{change:t.onFileInputChange}})])},staticRenderFns:[]},(function(t){t&&t("data-v-de8023ac_0",{source:".avatar-cropper .avatar-cropper-overlay{text-align:center;display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999}.avatar-cropper .avatar-cropper-overlay-inline{position:initial}.avatar-cropper .avatar-cropper-img-input{display:none}.avatar-cropper .avatar-cropper-close{float:right;padding:20px;font-size:3rem;color:#fff;font-weight:100;text-shadow:0 1px rgba(40,40,40,.3)}.avatar-cropper .avatar-cropper-mark{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.1)}.avatar-cropper .avatar-cropper-container{background:#fff;z-index:999;box-shadow:1px 1px 5px rgba(100,100,100,.14)}.avatar-cropper .avatar-cropper-container .avatar-cropper-image-container{position:relative;max-width:400px;height:300px}.avatar-cropper .avatar-cropper-container img{max-width:100%;height:100%}.avatar-cropper .avatar-cropper-container .avatar-cropper-footer{display:flex;align-items:stretch;align-content:stretch;justify-content:space-between}.avatar-cropper .avatar-cropper-container .avatar-cropper-footer .avatar-cropper-btn{width:50%;padding:15px 0;cursor:pointer;border:none;background:0 0;outline:0}.avatar-cropper .avatar-cropper-container .avatar-cropper-footer .avatar-cropper-btn:hover{background-color:#2aabd2;color:#fff}",map:void 0,media:void 0})}),u,void 0,!1,void 0,!1,f,void 0,void 0),v=null;"undefined"!=typeof window?v=window.Vue:"undefined"!=typeof n.g&&(v=n.g.Vue),v&&v.use({install:function t(e){t.installed||(t.installed=!0,e.component(g.name,g))}})},7794:function(t){"use strict";function e(){this._types=Object.create(null),this._extensions=Object.create(null);for(let t=0;t<arguments.length;t++)this.define(arguments[t]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}e.prototype.define=function(t,e){for(let n in t){let i=t[n].map((function(t){return t.toLowerCase()}));n=n.toLowerCase();for(let t=0;t<i.length;t++){const r=i[t];if("*"!==r[0]){if(!e&&r in this._types)throw new Error('Attempt to change mapping for "'+r+'" extension from "'+this._types[r]+'" to "'+n+'". Pass `force=true` to allow this, otherwise remove "'+r+'" from the list of extensions for "'+n+'".');this._types[r]=n}}if(e||!this._extensions[n]){const t=i[0];this._extensions[n]="*"!==t[0]?t:t.substr(1)}}},e.prototype.getType=function(t){t=String(t);let e=t.replace(/^.*[/\\]/,"").toLowerCase(),n=e.replace(/^.*\./,"").toLowerCase(),i=e.length<t.length,r=n.length<e.length-1;return(r||!i)&&this._types[n]||null},e.prototype.getExtension=function(t){return t=/^\s*([^;\s]*)/.test(t)&&RegExp.$1,t&&this._extensions[t.toLowerCase()]||null},t.exports=e},1198:function(t,e,n){"use strict";let i=n(7794);t.exports=new i(n(3247))},3247:function(t){t.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,r=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,o=function(t){return encodeURIComponent(t).replace(i,r).replace(s,",")};function a(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var i,r=n||u;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(l):l(o)}return i}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function u(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=a(n.shift()),r=n.length>0?a(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return o(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(o(e)):i.push(o(e)+"="+o(t)))})),i.join("&")}return o(e)+"="+o(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=f(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:v(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=v(n,r)),Object.freeze(o)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=f(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function v(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||h;return(n||"/")+s(i)+r}function _(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&y(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&y(t.query,e.query)&&y(t.params,e.params))))}function y(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?y(s,a):String(s)===String(a)}))}function b(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&w(t.query,e.query)}function w(t,e){for(var n in e)if(!(n in t))return!1;return!0}function C(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var k={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var i=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=i.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var f=u[c],m=f&&f.component;return m?(f.configProps&&x(m,o,f.route,f.configProps),a(m,o,r)):a()}var g=l.matched[h],v=g&&g.components[c];if(!g||!v)return u[c]=null,a();u[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),C(l)};var _=g.props&&g.props[c];return _&&(n(u[c],{route:l,configProps:_}),x(v,o,l,_)),a(v,o,r)}};function x(t,e,i,r){var s=e.props=S(i,r);if(s){s=e.props=n({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function T(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function E(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},O=K,R=$,P=M,N=F,L=G,D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=D.exec(t))){var c=n[0],l=n[1],u=n.index;if(o+=t.slice(s,u),s=u+c.length,l)o+=l[1];else{var h=t[s],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var _=null!=d&&null!=h&&h!==d,y="+"===g||"*"===g,b="?"===g||"*"===g,w=n[2]||a,C=f||m;i.push({name:p||r++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:_,asterisk:!!v,pattern:C?V(C):v?".*":"[^"+U(w)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function M(t,e){return F($(t,e),e)}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",q(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?B:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=s[l.name];if(null==h){if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(A(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?j(h):a(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');r+=l.prefix+u}}else r+=l}return r}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function H(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function W(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(K(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",q(n));return z(s,e)}function Z(t,e,n){return G($(t,n),e,n)}function G(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=U(a);else{var c=U(a.prefix),l="(?:"+a.pattern+")";e.push(a),a.repeat&&(l+="(?:"+c+l+")*"),l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",s+=l}}var u=U(n.delimiter||"/"),h=s.slice(-u.length)===u;return i||(s=(h?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+u+"|$)",z(new RegExp("^"+s,q(n)),e)}function K(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?H(t,e):A(t)?W(t,e,n):Z(t,e,n)}O.parse=R,O.compile=P,O.tokensToFunction=N,O.tokensToRegExp=L;var Y=Object.create(null);function X(t,e,n){e=e||{};try{var i=Y[t]||(Y[t]=O.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function J(t,e,i,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=n({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&e){s=n({},s),s._normalized=!0;var a=n(n({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;s.path=X(l,a,"path "+e.path)}else 0;return s}var u=T(s.path||""),h=e&&e.path||"/",d=u.path?I(u.path,h,i||s.append):h,p=c(u.query,s.query,r&&r.options.parseQuery),f=s.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var Q,tt=[String,Object],et=[String,Array],nt=function(){},it={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,i=this.$router,r=this.$route,s=i.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,l={},u=i.options.linkActiveClass,h=i.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,J(a.redirectedFrom),null,i):a;l[g]=_(r,v,this.exactPath),l[m]=this.exact||this.exactPath?l[g]:b(r,v);var y=l[g]?this.ariaCurrentValue:null,w=function(t){rt(t)&&(e.replace?i.replace(o,nt):i.push(o,nt))},C={click:rt};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=w})):C[this.event]=w;var k={class:l},x=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:l[m],isExactActive:l[g]});if(x){if(1===x.length)return x[0];if(x.length>1||!x.length)return 0===x.length?t():t("span",{},x)}if("a"===this.tag)k.on=C,k.attrs={href:c,"aria-current":y};else{var S=st(this.$slots.default);if(S){S.isStatic=!1;var I=S.data=n({},S.data);for(var T in I.on=I.on||{},I.on){var E=I.on[T];T in C&&(I.on[T]=Array.isArray(E)?E:[E])}for(var A in C)A in I.on?I.on[A].push(C[A]):I.on[A]=w;var O=S.data.attrs=n({},S.data.attrs);O.href=c,O["aria-current"]=y}else k.on=C}return t(this.tag,k,this.$slots.default)}};function rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ot(t){if(!ot.installed||Q!==t){ot.installed=!0,Q=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",k),t.component("RouterLink",it);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var at="undefined"!==typeof window;function ct(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){lt(s,o,a,t,r)}));for(var c=0,l=s.length;c<l;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:o,nameMap:a}}function lt(t,e,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},l=ht(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var u={path:l,regex:ut(l,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?E(s+"/"+i.path):void 0;lt(t,e,n,i,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};lt(t,e,n,f,r,u.path||"/")}a&&(n[a]||(n[a]=u))}function ut(t,e){var n=O(t,[],e);return n}function ht(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:E(e.path+"/"+t)}function dt(t,e){var n=ct(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){ct(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ct([e||t],i,r,s,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function c(){return i.map((function(t){return r[t]}))}function l(t,n,o){var a=J(t,n,!1,e),c=a.name;if(c){var l=s[c];if(!l)return d(null,a);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(l.path,a.params,'named route "'+c+'"'),d(l,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=r[f];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,r="function"===typeof i?i(p(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return l({_normalized:!0,name:a,query:u,hash:h,params:f},void 0,n)}if(c){var m=ft(c,t),g=X(m,f,'redirect route with path "'+m+'"');return l({_normalized:!0,path:g,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=X(n,e.params,'aliased route with path "'+n+'"'),r=l({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,i,e)}return{match:l,addRoute:a,getRoutes:c,addRoutes:o}}function pt(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?a(i[r]):i[r])}return!0}function ft(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var mt=at&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var vt=gt();function _t(){return vt}function yt(t){return vt=t}var bt=Object.create(null);function wt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),i=n({},window.history.state);return i.key=_t(),window.history.replaceState(i,"",e),window.addEventListener("popstate",xt),function(){window.removeEventListener("popstate",xt)}}function Ct(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=St(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){Pt(t,s)})).catch((function(t){0})):Pt(o,s))}))}}function kt(){var t=_t();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function xt(t){kt(),t.state&&t.state.key&&yt(t.state.key)}function St(){var t=_t();if(t)return bt[t]}function It(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function Tt(t){return Ot(t.x)||Ot(t.y)}function Et(t){return{x:Ot(t.x)?t.x:window.pageXOffset,y:Ot(t.y)?t.y:window.pageYOffset}}function At(t){return{x:Ot(t.x)?t.x:0,y:Ot(t.y)?t.y:0}}function Ot(t){return"number"===typeof t}var Rt=/^#\d/;function Pt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Rt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=At(r),e=It(i,r)}else Tt(t)&&(e=Et(t))}else n&&Tt(t)&&(e=Et(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Nt=at&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){kt();var i=window.history;try{if(e){var r=n({},i.state);r.key=_t(),i.replaceState(r,"",t)}else i.pushState({key:yt(gt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Dt(t){Lt(t,!0)}function $t(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Bt(t,e){return Vt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+qt(e)+'" via a navigation guard.')}function jt(t,e){var n=Vt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return Vt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return Vt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Vt(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var zt=["params","query","hash"];function qt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Zt(t){return function(e,n,i){var r=!1,s=0,o=null;Gt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var c,l=Jt((function(e){Xt(e)&&(e=e.default),t.resolved="function"===typeof e?e:Q.extend(e),n.components[a]=e,s--,s<=0&&i()})),u=Jt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),i(o))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),r||i()}}function Gt(t,e){return Kt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Kt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Jt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var Qt=function(t,e){this.router=t,this.base=te(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(at){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,i){var r=Gt(t,(function(t,i,r,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Kt(i?r.reverse():r)}function ie(t,e){return"function"!==typeof t&&(t=Q.extend(t)),t.options[e]}function re(t){return ne(t,"beforeRouteLeave",oe,!0)}function se(t){return ne(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function ae(t){return ne(t,"beforeRouteEnter",(function(t,e,n,i){return ce(t,n,i)}))}function ce(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}Qt.prototype.listen=function(t){this.cb=t},Qt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Qt.prototype.onError=function(t){this.errorCbs.push(t)},Qt.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Wt(t,Mt.redirected)&&s===m||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},Qt.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Wt(t)&&Ht(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(_(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&Ct(this.router,r,t,!1),s(jt(r,t));var c=ee(this.current.matched,t.matched),l=c.updated,u=c.deactivated,h=c.activated,d=[].concat(re(u),this.router.beforeHooks,se(l),h.map((function(t){return t.beforeEnter})),Zt(h)),p=function(e,n){if(i.pending!==t)return s(Ft(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(Ut(r,t))):Ht(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Bt(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};$t(d,p,(function(){var n=ae(h),o=n.concat(i.router.resolveHooks);$t(o,p,(function(){if(i.pending!==t)return s(Ft(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){C(t)}))}))}))},Qt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Qt.prototype.setupListeners=function(){},Qt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=ue(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Nt&&n;i&&this.listeners.push(wt());var r=function(){var n=t.current,r=ue(t.base);t.current===m&&r===t._startLocation||t.transitionTo(r,(function(t){i&&Ct(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Lt(E(i.base+t.fullPath)),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Dt(E(i.base+t.fullPath)),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(ue(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?Lt(e):Dt(e)}},e.prototype.getCurrentLocation=function(){return ue(this.base)},e}(Qt);function ue(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(E(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,n,i){t.call(this,e,n),i&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Nt&&n;i&&this.listeners.push(wt());var r=function(){var e=t.current;pe()&&t.transitionTo(fe(),(function(n){i&&Ct(t.router,n,e,!0),Nt||ve(n.fullPath)}))},s=Nt?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ve(t.fullPath),Ct(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;fe()!==e&&(t?ge(e):ve(e))},e.prototype.getCurrentLocation=function(){return fe()},e}(Qt);function de(t){var e=ue(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}function pe(){var t=fe();return"/"===t.charAt(0)||(ve("/"+t),!1)}function fe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ge(t){Nt?Lt(me(t)):window.location.hash=t}function ve(t){Nt?Dt(me(t)):window.location.replace(me(t))}var _e=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Wt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Qt),ye=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Nt&&!1!==t.fallback,this.fallback&&(e="hash"),at||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new _e(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function we(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ce(t,e,n){var i="hash"===n?"#"+e:e;return t?E(t+"/"+i):i}ye.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},ye.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof he){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=Nt&&r;s&&"fullPath"in t&&Ct(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ye.prototype.beforeEach=function(t){return we(this.beforeHooks,t)},ye.prototype.beforeResolve=function(t){return we(this.resolveHooks,t)},ye.prototype.afterEach=function(t){return we(this.afterHooks,t)},ye.prototype.onReady=function(t,e){this.history.onReady(t,e)},ye.prototype.onError=function(t){this.history.onError(t)},ye.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},ye.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},ye.prototype.go=function(t){this.history.go(t)},ye.prototype.back=function(){this.go(-1)},ye.prototype.forward=function(){this.go(1)},ye.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ye.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=J(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Ce(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},ye.prototype.getRoutes=function(){return this.matcher.getRoutes()},ye.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},ye.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ye.prototype,be),ye.install=ot,ye.version="3.5.4",ye.isNavigationFailure=Wt,ye.NavigationFailureType=Mt,ye.START_LOCATION=m,at&&window.Vue&&window.Vue.use(ye),e["Z"]=ye},2982:function(t){(function(e,n){t.exports=n()})(0,(function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function i(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var r=n(2),s=n(0),o=n.n(s);e.a=function(t,e){var s=e.value;if((Array.isArray(s)||"string"==typeof s)&&(s={mask:s,tokens:o.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var a=t.getElementsByTagName("input");if(1!==a.length)throw new Error("v-mask directive requires 1 input, found "+a.length);t=a[0]}t.oninput=function(e){if(e.isTrusted){var o=t.selectionEnd,a=t.value[o-1];for(t.value=n.i(r.a)(t.value,s.mask,!0,s.tokens);o<t.value.length&&t.value.charAt(o-1)!==a;)o++;t===document.activeElement&&(t.setSelectionRange(o,o),setTimeout((function(){t.setSelectionRange(o,o)}),0)),t.dispatchEvent(i("input"))}};var c=n.i(r.a)(t.value,s.mask,!0,s.tokens);c!==t.value&&(t.value=c,t.dispatchEvent(i("input")))}},function(t,e,n){"use strict";var i=n(6),r=n(5);e.a=function(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(e)?n.i(r.a)(i.a,e,o)(t,e,s,o):n.i(i.a)(t,e,s,o)}},function(t,e,n){"use strict";function i(t){t.component(c.a.name,c.a),t.directive("mask",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),s=n.n(r),o=n(1),a=n(7),c=n.n(a);n.d(e,"TheMask",(function(){return c.a})),n.d(e,"mask",(function(){return o.a})),n.d(e,"tokens",(function(){return s.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n(0),s=n.n(r),o=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return s.a}}},directives:{mask:i.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(o.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function i(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(i,r){for(var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<e.length;){var a=e[o];o++;var c=e[o];if(!(c&&t(i,c,!0,n).length>a.length))return t(i,a,s,n)}return""}}e.a=i},function(t,e,n){"use strict";function i(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];t=t||"",e=e||"";for(var r=0,s=0,o="";r<e.length&&s<t.length;){var a=e[r],c=i[a],l=t[s];c&&!c.escape?(c.pattern.test(l)&&(o+=c.transform?c.transform(l):l,r++),s++):(c&&c.escape&&(r++,a=e[r]),n&&(o+=a),l===a&&s++,r++)}for(var u="";r<e.length&&n;){a=e[r];if(i[a]){u="";break}u+=a,r++}return o+u}e.a=i},function(t,e,n){var i=n(8)(n(4),n(9),null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=a.computed||(a.computed={});Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}}))}return{esModule:r,exports:s,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])}))},144:function(t,e,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var i=Object.freeze({});function r(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function h(t){return"[object Object]"===u.call(t)}function d(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var _=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function C(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var k=/-(\w)/g,x=C((function(t){return t.replace(k,(function(t,e){return e?e.toUpperCase():""}))})),S=C((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),I=/\B([A-Z])/g,T=C((function(t){return t.replace(I,"-$1").toLowerCase()}));function E(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var O=Function.prototype.bind?A:E;function R(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function P(t,e){for(var n in e)t[n]=e[n];return t}function N(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function L(t,e,n){}var D=function(t,e,n){return!1},$=function(t){return t};function M(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return M(t[n],e[n])}))}catch(c){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:L,parsePlatformTagName:$,mustUseProp:D,async:!0,_lifecycleHooks:V},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var Z=new RegExp("[^"+q.source+".$_\\d]");function G(t){if(!Z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},X="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=J&&WXEnvironment.platform.toLowerCase(),tt=X&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0,rt=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Q),st=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(X)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,ct)}catch(So){}var lt=function(){return void 0===K&&(K=!X&&!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),K},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);dt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=L,mt=0,gt=function(){this.id=mt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){y(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var vt=[];function _t(t){vt.push(t),gt.target=t}function yt(){vt.pop(),gt.target=vt[vt.length-1]}var bt=function(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var Ct=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function kt(t){return new bt(void 0,void 0,void 0,String(t))}function xt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=Array.prototype,It=Object.create(St),Tt=["push","pop","shift","unshift","splice","sort","reverse"];Tt.forEach((function(t){var e=St[t];W(It,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Et=Object.getOwnPropertyNames(It),At=!0;function Ot(t){At=t}var Rt=function(t){this.value=t,this.dep=new gt,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(Y?Pt(t,It):Nt(t,It,Et),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function Nt(t,e,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];W(t,s,e[s])}}function Lt(t,e){var n;if(l(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof Rt?n=t.__ob__:At&&!lt()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Rt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var l=!r&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Bt(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!c||(c?c.call(t,e):n=e,l=!r&&Lt(e),s.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Bt(e)}Rt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Rt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var jt=z.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,r,s=pt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],w(t,n)?i!==r&&h(i)&&h(r)&&Ft(i,r):$t(t,n,r));return t}function Ut(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Ft(i,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function qt(t,e,n,i){var r=Object.create(t||null);return e?P(r,e):r}jt.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},V.forEach((function(t){jt[t]=Vt})),U.forEach((function(t){jt[t+"s"]=qt})),jt.watch=function(t,e,n,i){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var s in P(r,t),e){var o=r[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},jt.props=jt.methods=jt.inject=jt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return P(r,t),e&&P(r,e),r},jt.provide=Ut;var Ht=function(t,e){return void 0===e?t:e};function Wt(t,e){var n=t.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=x(r),o[s]={type:null})}else if(h(n))for(var a in n)r=n[a],s=x(a),o[s]=h(r)?r:{type:r};else 0;t.props=o}}function Zt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(h(n))for(var s in n){var o=n[s];i[s]=h(o)?P({from:s},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Wt(e,n),Zt(e,n),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Kt(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(i){var r=jt[i]||Ht;o[i]=r(t[i],e[i],n,i)}return o}function Yt(t,e,n,i){if("string"===typeof n){var r=t[e];if(w(r,n))return r[n];var s=x(n);if(w(r,s))return r[s];var o=S(s);if(w(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Xt(t,e,n,i){var r=e[t],s=!w(n,t),o=n[t],a=ne(Boolean,r.type);if(a>-1)if(s&&!w(r,"default"))o=!1;else if(""===o||o===T(t)){var c=ne(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Jt(i,r,t);var l=At;Ot(!0),Lt(o),Ot(l)}return o}function Jt(t,e,n){if(w(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==te(e.type)?i.call(t):i}}var Qt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(ee(e[n],t))return n;return-1}function ie(t,e,n){_t();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(So){se(So,i,"errorCaptured hook")}}}se(t,e,n)}finally{yt()}}function re(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ie(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(So){ie(So,i,r)}return s}function se(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(So){So!==t&&oe(So,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!J||"undefined"===typeof console)throw t;console.error(t)}var ae,ce=!1,le=[],ue=!1;function he(){ue=!1;var t=le.slice(0);le.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var de=Promise.resolve();ae=function(){de.then(he),rt&&setTimeout(L)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var pe=1,fe=new MutationObserver(he),me=document.createTextNode(String(pe));fe.observe(me,{characterData:!0}),ae=function(){pe=(pe+1)%2,me.data=String(pe)},ce=!0}function ge(t,e){var n;if(le.push((function(){if(t)try{t.call(e)}catch(So){ie(So,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new dt;function _e(t){ye(t,ve),ve.clear()}function ye(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r){n=t.length;while(n--)ye(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)ye(t[i[n]],e)}}}var be=C((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function we(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return re(i,null,arguments,e,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)re(r[s],null,t,e,"v-on handler")}return n.fns=t,n}function Ce(t,e,n,i,s,a){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=be(c),r(l)||(r(u)?(r(l.fns)&&(l=t[c]=we(l,a)),o(h.once)&&(l=t[c]=s(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function ke(t,e,n){var i;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(i.fns,c)}r(a)?i=we([c]):s(a.fns)&&o(a.merged)?(i=a,i.fns.push(c)):i=we([a,c]),i.merged=!0,t[e]=i}function xe(t,e,n){var i=e.options.props;if(!r(i)){var o={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var l in i){var u=T(l);Se(o,c,l,u,!0)||Se(o,a,l,u,!1)}return o}}function Se(t,e,n,i,r){if(s(e)){if(w(e,n))return t[n]=e[n],r||delete e[n],!0;if(w(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function Ie(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Te(t){return c(t)?[kt(t)]:Array.isArray(t)?Ae(t):void 0}function Ee(t){return s(t)&&s(t.text)&&a(t.isComment)}function Ae(t,e){var n,i,a,l,u=[];for(n=0;n<t.length;n++)i=t[n],r(i)||"boolean"===typeof i||(a=u.length-1,l=u[a],Array.isArray(i)?i.length>0&&(i=Ae(i,(e||"")+"_"+n),Ee(i[0])&&Ee(l)&&(u[a]=kt(l.text+i[0].text),i.shift()),u.push.apply(u,i)):c(i)?Ee(l)?u[a]=kt(l.text+i):""!==i&&u.push(kt(i)):Ee(i)&&Ee(l)?u[a]=kt(l.text+i.text):(o(t._isVList)&&s(i.tag)&&r(i.key)&&s(e)&&(i.key="__vlist"+e+"_"+n+"__"),u.push(i)));return u}function Oe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Re(t){var e=Pe(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Dt(t,n,e[n])})),Ot(!0))}function Pe(t,e){if(t){for(var n=Object.create(null),i=pt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ne(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(Le)&&delete n[l];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function De(t){return t.isComment&&t.asyncFactory}function $e(t,e,n){var r,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==i&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Me(e,c,t[c]))}else r={};for(var l in e)l in r||(r[l]=Be(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",o),W(r,"$key",a),W(r,"$hasNormal",s),r}function Me(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Te(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!De(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Be(t,e){return function(){return t[e]}}function je(t,e){var n,i,r,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(pt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,r=o.length;i<r;i++)a=o[i],n[i]=e(t[a],a,i);return s(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=P(P({},i),n)),r=s(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ue(t){return Yt(this.$options,"filters",t,!0)||$}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,i,r){var s=z.keyCodes[e]||n;return r&&i&&!z.keyCodes[e]?Ve(r,i):s?Ve(s,t):i?T(i)!==e:void 0===t}function qe(t,e,n,i,r){if(n)if(l(n)){var s;Array.isArray(n)&&(n=N(n));var o=function(o){if("class"===o||"style"===o||_(o))s=t;else{var a=t.attrs&&t.attrs.type;s=i||z.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(o),l=T(o);if(!(c in s)&&!(l in s)&&(s[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ze(i,"__static__"+t,!1)),i}function We(t,e,n){return Ze(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ze(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ge(t[i],e+"_"+i,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(h(e)){var n=t.on=t.on?P({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function Ye(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var s=t[r];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=We,t._n=g,t._s=m,t._l=je,t._t=Fe,t._q=M,t._i=B,t._m=He,t._f=Ue,t._k=ze,t._b=qe,t._v=kt,t._e=Ct,t._u=Ye,t._g=Ke,t._d=Xe,t._p=Je}function tn(t,e,n,r,s){var a,c=this,l=s.options;w(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var u=o(l._compiled),h=!u;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||i,this.injections=Pe(l.inject,r),this.slots=function(){return c.$slots||$e(t.scopedSlots,c.$slots=Ne(n,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return $e(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=$e(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var s=fn(a,t,e,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=l._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,i){return fn(a,t,e,n,i,h)}}function en(t,e,n,r,o){var a=t.options,c={},l=a.props;if(s(l))for(var u in l)c[u]=Xt(u,l,e||i);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new tn(n,c,o,r,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var p=Te(d)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=nn(p[m],n,h.parent,a,h);return f}}function nn(t,e,n,i,r){var s=xt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function rn(t,e){for(var n in e)t[x(n)]=e[n]}Qe(tn.prototype);var sn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sn.prepatch(n,n)}else{var i=t.componentInstance=cn(t,Pn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Mn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),t.data.keepAlive&&(e._isMounted?ti(n):jn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},on=Object.keys(sn);function an(t,e,n,i,a){if(!r(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=xn(u,c),void 0===t))return kn(u,e,n,i,a);e=e||{},ki(t),s(e.model)&&hn(t.options,e);var h=xe(e,t,a);if(o(t.options.functional))return en(t,h,e,n,i);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}ln(e);var f=t.options.name||a,m=new bt("vue-component-"+t.cid+(f?"-"+f:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:i},u);return m}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return s(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function ln(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var i=on[n],r=e[i],s=sn[i];r===s||r&&r._merged||(e[i]=r?un(s,r):s)}}function un(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),o=r[i],a=e.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(r[i]=[a].concat(o)):r[i]=a}var dn=1,pn=2;function fn(t,e,n,i,r,s){return(Array.isArray(n)||c(n))&&(r=i,i=n,n=void 0),o(s)&&(r=pn),mn(t,e,n,i,r)}function mn(t,e,n,i,r){if(s(n)&&s(n.__ob__))return Ct();if(s(n)&&s(n.is)&&(e=n.is),!e)return Ct();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===pn?i=Te(i):r===dn&&(i=Ie(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),o=z.isReservedTag(e)?new bt(z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!s(c=Yt(t.$options,"components",e))?new bt(e,n,i,void 0,void 0,t):an(c,n,t,i,e)):o=an(e,n,t,i);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):Ct()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var i=0,a=t.children.length;i<a;i++){var c=t.children[i];s(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function vn(t){l(t.style)&&_e(t.style),l(t.class)&&_e(t.class)}function _n(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=Ne(e._renderChildren,r),t.$scopedSlots=i,t._c=function(e,n,i,r){return fn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return fn(t,e,n,i,r,!0)};var s=n&&n.data;Dt(t,"$attrs",s&&s.attrs||i,null,!0),Dt(t,"$listeners",e._parentListeners||i,null,!0)}var yn,bn=null;function wn(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=$e(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{bn=e,t=i.call(e._renderProxy,e.$createElement)}catch(So){ie(So,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=Ct()),t.parent=r,t}}function Cn(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function kn(t,e,n,i,r){var s=Ct();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function xn(t,e){if(o(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=bn;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var i=t.owners=[n],a=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return y(i,n)}));var h=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=j((function(n){t.resolved=Cn(n,e),a?i.length=0:h(!0)})),p=j((function(e){s(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return l(m)&&(f(m)?r(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),s(m.error)&&(t.errorComp=Cn(m.error,e)),s(m.loading)&&(t.loadingComp=Cn(m.loading,e),0===m.delay?t.loading=!0:c=setTimeout((function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||De(n)))return n}}function In(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&On(t,e)}function Tn(t,e){yn.$on(t,e)}function En(t,e){yn.$off(t,e)}function An(t,e){var n=yn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function On(t,e,n){yn=t,Ce(e,n||{},Tn,En,An,t),yn=void 0}function Rn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var i=R(arguments,1),r='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,i,e,r)}return e}}var Pn=null;function Nn(t){var e=Pn;return Pn=t,function(){Pn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Dn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=Nn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Un(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Un(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function $n(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=Ct),Un(t,"beforeMount"),i=function(){t._update(t._render(),n)},new ri(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Un(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Un(t,"mounted")),t}function Mn(t,e,n,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s,t.$attrs=r.data.attrs||i,t.$listeners=n||i,e&&t.$options.props){Ot(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=t.$options.props;u[p]=Xt(p,f,e,t)}Ot(!0),t.$options.propsData=e}n=n||i;var m=t.$options._parentListeners;t.$options._parentListeners=n,On(t,n,m),l&&(t.$slots=Ne(s,r.context),t.$forceUpdate())}function Bn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function jn(t,e){if(e){if(t._directInactive=!1,Bn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Un(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Bn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Un(t,"deactivated")}}function Un(t,e){_t();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,s=n.length;r<s;r++)re(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Vn=[],zn=[],qn={},Hn=!1,Wn=!1,Zn=0;function Gn(){Zn=Vn.length=zn.length=0,qn={},Hn=Wn=!1}var Kn=0,Yn=Date.now;if(X&&!et){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Jn(){var t,e;for(Kn=Yn(),Wn=!0,Vn.sort((function(t,e){return t.id-e.id})),Zn=0;Zn<Vn.length;Zn++)t=Vn[Zn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=zn.slice(),i=Vn.slice();Gn(),ei(n),Qn(i),ut&&z.devtools&&ut.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Un(i,"updated")}}function ti(t){t._inactive=!1,zn.push(t)}function ei(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,jn(t[e],!0)}function ni(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Wn){var n=Vn.length-1;while(n>Zn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);Hn||(Hn=!0,ge(Jn))}}var ii=0,ri=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ii,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ri.prototype.get=function(){var t;_t(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(So){if(!this.user)throw So;ie(So,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&_e(t),yt(),this.cleanupDeps()}return t},ri.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ri.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ri.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},ri.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ri.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ri.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ri.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var si={enumerable:!0,configurable:!0,get:L,set:L};function oi(t,e,n){si.get=function(){return this[e][n]},si.set=function(t){this[e][n]=t},Object.defineProperty(t,n,si)}function ai(t){t._watchers=[];var e=t.$options;e.props&&ci(t,e.props),e.methods&&gi(t,e.methods),e.data?li(t):Lt(t._data={},!0),e.computed&&di(t,e.computed),e.watch&&e.watch!==ot&&vi(t,e.watch)}function ci(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],s=!t.$parent;s||Ot(!1);var o=function(s){r.push(s);var o=Xt(s,e,n,t);Dt(i,s,o),s in t||oi(t,"_props",s)};for(var a in e)o(a);Ot(!0)}function li(t){var e=t.$options.data;e=t._data="function"===typeof e?ui(e,t):e||{},h(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&w(i,s)||H(s)||oi(t,"_data",s)}Lt(e,!0)}function ui(t,e){_t();try{return t.call(e,e)}catch(So){return ie(So,e,"data()"),{}}finally{yt()}}var hi={lazy:!0};function di(t,e){var n=t._computedWatchers=Object.create(null),i=lt();for(var r in e){var s=e[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ri(t,o||L,L,hi)),r in t||pi(t,r,s)}}function pi(t,e,n){var i=!lt();"function"===typeof n?(si.get=i?fi(e):mi(n),si.set=L):(si.get=n.get?i&&!1!==n.cache?fi(e):mi(n.get):L,si.set=n.set||L),Object.defineProperty(t,e,si)}function fi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function mi(t){return function(){return t.call(this,this)}}function gi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:O(e[n],t)}function vi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)_i(t,n,i[r]);else _i(t,n,i)}}function _i(t,e,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function yi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var i=this;if(h(e))return _i(i,t,e,n);n=n||{},n.user=!0;var r=new ri(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';_t(),re(e,i,[r.value],i,s),yt()}return function(){r.teardown()}}}var bi=0;function wi(t){t.prototype._init=function(t){var e=this;e._uid=bi++,e._isVue=!0,t&&t._isComponent?Ci(e,t):e.$options=Kt(ki(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),In(e),_n(e),Un(e,"beforeCreate"),Re(e),ai(e),Oe(e),Un(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Ci(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ki(t){var e=t.options;if(t.super){var n=ki(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=xi(t);r&&P(t.extendOptions,r),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function xi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Si(t){this._init(t)}function Ii(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ti(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&Ai(o),o.options.computed&&Oi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=P({},o.options),r[i]=o,o}}function Ai(t){var e=t.options.props;for(var n in e)oi(t.prototype,"_props",n)}function Oi(t){var e=t.options.computed;for(var n in e)pi(t.prototype,n,e[n])}function Ri(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Pi(t){return t&&(t.Ctor.options.name||t.tag)}function Ni(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!d(t)&&t.test(e)}function Li(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Di(n,s,i,r)}}}function Di(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}wi(Si),yi(Si),Rn(Si),Dn(Si),wn(Si);var $i=[String,RegExp,Array],Mi={name:"keep-alive",abstract:!0,props:{include:$i,exclude:$i,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:Pi(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Di(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Di(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Li(t,(function(t){return Ni(e,t)}))})),this.$watch("exclude",(function(e){Li(t,(function(t){return!Ni(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var i=Pi(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Ni(s,i))||o&&i&&Ni(o,i))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,y(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Bi={KeepAlive:Mi};function ji(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:P,mergeOptions:Kt,defineReactive:Dt},t.set=$t,t.delete=Mt,t.nextTick=ge,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,Bi),Ii(t),Ti(t),Ei(t),Ri(t)}ji(Si),Object.defineProperty(Si.prototype,"$isServer",{get:lt}),Object.defineProperty(Si.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Si,"FunctionalRenderContext",{value:tn}),Si.version="2.6.14";var Fi=v("style,class"),Ui=v("input,textarea,option,select,progress"),Vi=function(t,e,n){return"value"===n&&Ui(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zi=v("contenteditable,draggable,spellcheck"),qi=v("events,caret,typing,plaintext-only"),Hi=function(t,e){return Yi(e)||"false"===e?"false":"contenteditable"===t&&qi(e)?e:"true"},Wi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Zi="http://www.w3.org/1999/xlink",Gi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ki=function(t){return Gi(t)?t.slice(6,t.length):""},Yi=function(t){return null==t||!1===t};function Xi(t){var e=t.data,n=t,i=t;while(s(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Ji(i.data,e));while(s(n=n.parent))n&&n.data&&(e=Ji(e,n.data));return Qi(e.staticClass,e.class)}function Ji(t,e){return{staticClass:tr(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Qi(t,e){return s(t)||s(e)?tr(t,er(e)):""}function tr(t,e){return t?e?t+" "+e:t:e||""}function er(t){return Array.isArray(t)?nr(t):l(t)?ir(t):"string"===typeof t?t:""}function nr(t){for(var e,n="",i=0,r=t.length;i<r;i++)s(e=er(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ir(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},sr=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(t){return sr(t)||or(t)};function cr(t){return or(t)?"svg":"math"===t?"math":void 0}var lr=Object.create(null);function ur(t){if(!X)return!0;if(ar(t))return!1;if(t=t.toLowerCase(),null!=lr[t])return lr[t];var e=document.createElement(t);return t.indexOf("-")>-1?lr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:lr[t]=/HTMLUnknownElement/.test(e.toString())}var hr=v("text,number,password,search,email,tel,url");function dr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function pr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(t,e){return document.createElementNS(rr[t],e)}function mr(t){return document.createTextNode(t)}function gr(t){return document.createComment(t)}function vr(t,e,n){t.insertBefore(e,n)}function _r(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function br(t){return t.parentNode}function wr(t){return t.nextSibling}function Cr(t){return t.tagName}function kr(t,e){t.textContent=e}function xr(t,e){t.setAttribute(e,"")}var Sr=Object.freeze({createElement:pr,createElementNS:fr,createTextNode:mr,createComment:gr,insertBefore:vr,removeChild:_r,appendChild:yr,parentNode:br,nextSibling:wr,tagName:Cr,setTextContent:kr,setStyleScope:xr}),Ir={create:function(t,e){Tr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Tr(t,!0),Tr(e))},destroy:function(t){Tr(t,!0)}};function Tr(t,e){var n=t.data.ref;if(s(n)){var i=t.context,r=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?y(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Er=new bt("",{},[]),Ar=["create","activate","update","remove","destroy"];function Or(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&Rr(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Rr(t,e){if("input"!==t.tag)return!0;var n,i=s(n=t.data)&&s(n=n.attrs)&&n.type,r=s(n=e.data)&&s(n=n.attrs)&&n.type;return i===r||hr(i)&&hr(r)}function Pr(t,e,n){var i,r,o={};for(i=e;i<=n;++i)r=t[i].key,s(r)&&(o[r]=i);return o}function Nr(t){var e,n,i={},a=t.modules,l=t.nodeOps;for(e=0;e<Ar.length;++e)for(i[Ar[e]]=[],n=0;n<a.length;++n)s(a[n][Ar[e]])&&i[Ar[e]].push(a[n][Ar[e]]);function u(t){return new bt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,i,r,a,c){if(s(t.elm)&&s(a)&&(t=a[c]=xt(t)),t.isRootInsert=!r,!f(t,e,n,i)){var u=t.data,h=t.children,d=t.tag;s(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),C(t),y(t,h,e),s(u)&&w(t,e),_(n,t.elm,i)):o(t.isComment)?(t.elm=l.createComment(t.text),_(n,t.elm,i)):(t.elm=l.createTextNode(t.text),_(n,t.elm,i))}}function f(t,e,n,i){var r=t.data;if(s(r)){var a=s(t.componentInstance)&&r.keepAlive;if(s(r=r.hook)&&s(r=r.init)&&r(t,!1),s(t.componentInstance))return m(t,e),_(n,t.elm,i),o(a)&&g(t,e,n,i),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),C(t)):(Tr(t),e.push(t))}function g(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<i.activate.length;++o)i.activate[o](Er,a);e.push(a);break}_(n,t.elm,r)}function _(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)p(e[i],n,t.elm,null,!0,e,i)}else c(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function w(t,n){for(var r=0;r<i.create.length;++r)i.create[r](Er,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(Er,t),s(e.insert)&&n.push(t))}function C(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=Pn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function k(t,e,n,i,r,s){for(;i<=r;++i)p(n[i],s,t,e,!1,n,i)}function x(t){var e,n,r=t.data;if(s(r))for(s(e=r.hook)&&s(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)x(t.children[n])}function S(t,e,n){for(;e<=n;++e){var i=t[e];s(i)&&(s(i.tag)?(I(i),x(i)):d(i.elm))}}function I(t,e){if(s(e)||s(t.data)){var n,r=i.remove.length+1;for(s(e)?e.listeners+=r:e=h(t.elm,r),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&I(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function T(t,e,n,i,o){var a,c,u,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],_=n.length-1,y=n[0],b=n[_],w=!o;while(d<=m&&f<=_)r(g)?g=e[++d]:r(v)?v=e[--m]:Or(g,y)?(A(g,y,i,n,f),g=e[++d],y=n[++f]):Or(v,b)?(A(v,b,i,n,_),v=e[--m],b=n[--_]):Or(g,b)?(A(g,b,i,n,_),w&&l.insertBefore(t,g.elm,l.nextSibling(v.elm)),g=e[++d],b=n[--_]):Or(v,y)?(A(v,y,i,n,f),w&&l.insertBefore(t,v.elm,g.elm),v=e[--m],y=n[++f]):(r(a)&&(a=Pr(e,d,m)),c=s(y.key)?a[y.key]:E(y,e,d,m),r(c)?p(y,i,t,g.elm,!1,n,f):(u=e[c],Or(u,y)?(A(u,y,i,n,f),e[c]=void 0,w&&l.insertBefore(t,u.elm,g.elm)):p(y,i,t,g.elm,!1,n,f)),y=n[++f]);d>m?(h=r(n[_+1])?null:n[_+1].elm,k(t,h,n,f,_,i)):f>_&&S(e,d,m)}function E(t,e,n,i){for(var r=n;r<i;r++){var o=e[r];if(s(o)&&Or(t,o))return r}}function A(t,e,n,a,c,u){if(t!==e){s(e.elm)&&s(a)&&(e=a[c]=xt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;s(p)&&s(d=p.hook)&&s(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(s(p)&&b(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);s(d=p.hook)&&s(d=d.update)&&d(t,e)}r(e.text)?s(f)&&s(m)?f!==m&&T(h,f,m,n,u):s(m)?(s(t.text)&&l.setTextContent(h,""),k(h,null,m,0,m.length-1,n)):s(f)?S(f,0,f.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(p)&&s(d=p.hook)&&s(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(o(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var R=v("attrs,class,staticClass,staticStyle,key");function P(t,e,n,i){var r,a=e.tag,c=e.data,l=e.children;if(i=i||c&&c.pre,e.elm=t,o(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(r=c.hook)&&s(r=r.init)&&r(e,!0),s(r=e.componentInstance)))return m(e,n),!0;if(s(a)){if(s(l))if(t.hasChildNodes())if(s(r=c)&&s(r=r.domProps)&&s(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!P(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,l,n);if(s(c)){var p=!1;for(var f in c)if(!R(f)){p=!0,w(e,n);break}!p&&c["class"]&&_e(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,p(e,h);else{var d=s(t.nodeType);if(!d&&Or(t,e))A(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),o(n)&&P(t,e,h))return O(e,h,!0),t;t=u(t)}var f=t.elm,m=l.parentNode(f);if(p(e,h,f._leaveCb?null:m,l.nextSibling(f)),s(e.parent)){var g=e.parent,v=b(e);while(g){for(var _=0;_<i.destroy.length;++_)i.destroy[_](g);if(g.elm=e.elm,v){for(var y=0;y<i.create.length;++y)i.create[y](Er,g);var w=g.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Tr(g);g=g.parent}}s(m)?S([t],0,0):s(t.tag)&&x(t)}}return O(e,h,c),e.elm}s(t)&&x(t)}}var Lr={create:Dr,update:Dr,destroy:function(t){Dr(t,Er)}};function Dr(t,e){(t.data.directives||e.data.directives)&&$r(t,e)}function $r(t,e){var n,i,r,s=t===Er,o=e===Er,a=Br(t.data.directives,t.context),c=Br(e.data.directives,e.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Fr(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(Fr(r,"bind",e,t),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)Fr(l[n],"inserted",e,t)};s?ke(e,"insert",h):h()}if(u.length&&ke(e,"postpatch",(function(){for(var n=0;n<u.length;n++)Fr(u[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Fr(a[n],"unbind",t,t,o)}var Mr=Object.create(null);function Br(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Mr),r[jr(i)]=i,i.def=Yt(e.$options,"directives",i.name,!0);return r}function jr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fr(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(So){ie(So,n.context,"directive "+t.name+" "+e+" hook")}}var Ur=[Ir,Lr];function Vr(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var i,o,a,c=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(i in s(u.__ob__)&&(u=e.data.attrs=P({},u)),u)o=u[i],a=l[i],a!==o&&zr(c,i,o,e.data.pre);for(i in(et||it)&&u.value!==l.value&&zr(c,"value",u.value),l)r(u[i])&&(Gi(i)?c.removeAttributeNS(Zi,Ki(i)):zi(i)||c.removeAttribute(i))}}function zr(t,e,n,i){i||t.tagName.indexOf("-")>-1?qr(t,e,n):Wi(e)?Yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zi(e)?t.setAttribute(e,Hi(e,n)):Gi(e)?Yi(n)?t.removeAttributeNS(Zi,Ki(e)):t.setAttributeNS(Zi,e,n):qr(t,e,n)}function qr(t,e,n){if(Yi(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var Hr={create:Vr,update:Vr};function Wr(t,e){var n=e.elm,i=e.data,o=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Xi(e),c=n._transitionClasses;s(c)&&(a=tr(a,er(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Zr,Gr={create:Wr,update:Wr},Kr="__r",Yr="__c";function Xr(t){if(s(t[Kr])){var e=et?"change":"input";t[e]=[].concat(t[Kr],t[e]||[]),delete t[Kr]}s(t[Yr])&&(t.change=[].concat(t[Yr],t.change||[]),delete t[Yr])}function Jr(t,e,n){var i=Zr;return function r(){var s=e.apply(null,arguments);null!==s&&es(t,r,n,i)}}var Qr=ce&&!(st&&Number(st[1])<=53);function ts(t,e,n,i){if(Qr){var r=Kn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Zr.addEventListener(t,e,at?{capture:n,passive:i}:n)}function es(t,e,n,i){(i||Zr).removeEventListener(t,e._wrapper||e,n)}function ns(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Zr=e.elm,Xr(n),Ce(n,i,ts,es,Jr,e.context),Zr=void 0}}var is,rs={create:ns,update:ns};function ss(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in s(c.__ob__)&&(c=e.data.domProps=P({},c)),a)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var l=r(i)?"":String(i);os(o,l)&&(o.value=l)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){is=is||document.createElement("div"),is.innerHTML="<svg>"+i+"</svg>";var u=is.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(i!==a[n])try{o[n]=i}catch(So){}}}}function os(t,e){return!t.composing&&("OPTION"===t.tagName||as(t,e)||cs(t,e))}function as(t,e){var n=!0;try{n=document.activeElement!==t}catch(So){}return n&&t.value!==e}function cs(t,e){var n=t.value,i=t._vModifiers;if(s(i)){if(i.number)return g(n)!==g(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var ls={create:ss,update:ss},us=C((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hs(t){var e=ds(t.style);return t.staticStyle?P(t.staticStyle,e):e}function ds(t){return Array.isArray(t)?N(t):"string"===typeof t?us(t):t}function ps(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hs(r.data))&&P(i,n)}(n=hs(t.data))&&P(i,n);var s=t;while(s=s.parent)s.data&&(n=hs(s.data))&&P(i,n);return i}var fs,ms=/^--/,gs=/\s*!important$/,vs=function(t,e,n){if(ms.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(T(e),n.replace(gs,""),"important");else{var i=ys(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},_s=["Webkit","Moz","ms"],ys=C((function(t){if(fs=fs||document.createElement("div").style,t=x(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<_s.length;n++){var i=_s[n]+e;if(i in fs)return i}}));function bs(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,a,c=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=ds(e.data.style)||{};e.data.normalizedStyle=s(d.__ob__)?P({},d):d;var p=ps(e,!0);for(a in h)r(p[a])&&vs(c,a,"");for(a in p)o=p[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},Cs=/\s+/;function ks(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Cs).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function xs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Cs).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ss(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,Is(t.name||"v")),P(e,t),e}return"string"===typeof t?Is(t):void 0}}var Is=C((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ts=X&&!nt,Es="transition",As="animation",Os="transition",Rs="transitionend",Ps="animation",Ns="animationend";Ts&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Os="WebkitTransition",Rs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ps="WebkitAnimation",Ns="webkitAnimationEnd"));var Ls=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ds(t){Ls((function(){Ls(t)}))}function $s(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ks(t,e))}function Ms(t,e){t._transitionClasses&&y(t._transitionClasses,e),xs(t,e)}function Bs(t,e,n){var i=Fs(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Es?Rs:Ns,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),t.addEventListener(a,u)}var js=/\b(transform|all)(,|$)/;function Fs(t,e){var n,i=window.getComputedStyle(t),r=(i[Os+"Delay"]||"").split(", "),s=(i[Os+"Duration"]||"").split(", "),o=Us(r,s),a=(i[Ps+"Delay"]||"").split(", "),c=(i[Ps+"Duration"]||"").split(", "),l=Us(a,c),u=0,h=0;e===Es?o>0&&(n=Es,u=o,h=s.length):e===As?l>0&&(n=As,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?Es:As:null,h=n?n===Es?s.length:c.length:0);var d=n===Es&&js.test(i[Os+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Us(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Vs(e)+Vs(t[n])})))}function Vs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Ss(t.data.transition);if(!r(i)&&!s(n._enterCb)&&1===n.nodeType){var o=i.css,a=i.type,c=i.enterClass,u=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,f=i.appearActiveClass,m=i.beforeEnter,v=i.enter,_=i.afterEnter,y=i.enterCancelled,b=i.beforeAppear,w=i.appear,C=i.afterAppear,k=i.appearCancelled,x=i.duration,S=Pn,I=Pn.$vnode;while(I&&I.parent)S=I.context,I=I.parent;var T=!S._isMounted||!t.isRootInsert;if(!T||w||""===w){var E=T&&d?d:c,A=T&&f?f:h,O=T&&p?p:u,R=T&&b||m,P=T&&"function"===typeof w?w:v,N=T&&C||_,L=T&&k||y,D=g(l(x)?x.enter:x);0;var $=!1!==o&&!nt,M=Ws(P),B=n._enterCb=j((function(){$&&(Ms(n,O),Ms(n,A)),B.cancelled?($&&Ms(n,E),L&&L(n)):N&&N(n),n._enterCb=null}));t.data.show||ke(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),P&&P(n,B)})),R&&R(n),$&&($s(n,E),$s(n,A),Ds((function(){Ms(n,E),B.cancelled||($s(n,O),M||(Hs(D)?setTimeout(B,D):Bs(n,a,B)))}))),t.data.show&&(e&&e(),P&&P(n,B)),$||M||B()}}}function qs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Ss(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var o=i.css,a=i.type,c=i.leaveClass,u=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,v=i.delayLeave,_=i.duration,y=!1!==o&&!nt,b=Ws(p),w=g(l(_)?_.leave:_);0;var C=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(Ms(n,u),Ms(n,h)),C.cancelled?(y&&Ms(n,c),m&&m(n)):(e(),f&&f(n)),n._leaveCb=null}));v?v(k):k()}function k(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&($s(n,c),$s(n,h),Ds((function(){Ms(n,c),C.cancelled||($s(n,u),b||(Hs(w)?setTimeout(C,w):Bs(n,a,C)))}))),p&&p(n,C),y||b||C())}}function Hs(t){return"number"===typeof t&&!isNaN(t)}function Ws(t){if(r(t))return!1;var e=t.fns;return s(e)?Ws(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Zs(t,e){!0!==e.data.show&&zs(e)}var Gs=X?{create:Zs,activate:Zs,remove:function(t,e){!0!==t.data.show?qs(t,e):e()}}:{},Ks=[Hr,Gr,rs,ls,ws,Gs],Ys=Ks.concat(Ur),Xs=Nr({nodeOps:Sr,modules:Ys});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&so(t,"input")}));var Js={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?ke(n,"postpatch",(function(){Js.componentUpdated(t,e,n)})):Qs(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",io),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qs(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,no);if(r.some((function(t,e){return!M(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return eo(t,r)})):e.value!==e.oldValue&&eo(e.value,r);s&&so(t,"change")}}}};function Qs(t,e,n){to(t,e,n),(et||it)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=B(i,no(o))>-1,o.selected!==s&&(o.selected=s);else if(M(no(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!M(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function io(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,so(t.target,"input"))}function so(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var ao={bind:function(t,e,n){var i=e.value;n=oo(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,zs(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?zs(n,(function(){t.style.display=t.__vOriginalDisplay})):qs(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},co={model:Js,show:ao},lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Sn(e.children)):t}function ho(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var s in r)e[x(s)]=r[s];return e}function po(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function mo(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||De(t)},vo=function(t){return"show"===t.name},_o={name:"transition",props:lo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=uo(r);if(!s)return r;if(this._leaving)return po(t,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),l=this._vnode,u=uo(l);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),u&&u.data&&!mo(s,u)&&!De(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=P({},a);if("out-in"===i)return this._leaving=!0,ke(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),po(t,r);if("in-out"===i){if(De(s))return l;var d,p=function(){d()};ke(a,"afterEnter",p),ke(a,"enterCancelled",p),ke(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=P({tag:String,moveClass:String},lo);delete yo.mode;var bo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=Nn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var l=[],u=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(Co),t.forEach(ko),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;$s(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Rs,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Rs,t),n._moveCb=null,Ms(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ts)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){xs(n,t)})),ks(n,e),n.style.display="none",this.$el.appendChild(n);var i=Fs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Co(t){t.data.newPos=t.elm.getBoundingClientRect()}function ko(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var xo={Transition:_o,TransitionGroup:bo};Si.config.mustUseProp=Vi,Si.config.isReservedTag=ar,Si.config.isReservedAttr=Fi,Si.config.getTagNamespace=cr,Si.config.isUnknownElement=ur,P(Si.options.directives,co),P(Si.options.components,xo),Si.prototype.__patch__=X?Xs:L,Si.prototype.$mount=function(t,e){return t=t&&X?dr(t):void 0,$n(this,t,e)},X&&setTimeout((function(){z.devtools&&ut&&ut.emit("init",Si)}),0),e["Z"]=Si},3453:function(t){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{rn:function(){return N}});var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=c(t[n],e)})),i}function l(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var p=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(t,e){this._children[t]=e},p.prototype.removeChild=function(t){delete this._children[t]},p.prototype.getChild=function(t){return this._children[t]},p.prototype.hasChild=function(t){return t in this._children},p.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},p.prototype.forEachChild=function(t){l(this._children,t)},p.prototype.forEachGetter=function(t){this._rawModule.getters&&l(this._rawModule.getters,t)},p.prototype.forEachAction=function(t){this._rawModule.actions&&l(this._rawModule.actions,t)},p.prototype.forEachMutation=function(t){this._rawModule.mutations&&l(this._rawModule.mutations,t)},Object.defineProperties(p.prototype,f);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;g(t.concat(i),e.getChild(i),n.modules[i])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new p(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&l(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var _=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var l=this._modules.root.state;k(this,l,[],this._modules.root),C(this,l),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:v.config.devtools;u&&o(this)},y={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;k(t,n,[],t._modules.root,!0),C(t,n,e)}function C(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};l(r,(function(e,n){s[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&A(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function k(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=O(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,i.state)}))}var l=i.context=x(t,o,n);i.forEachMutation((function(e,n){var i=o+n;I(t,i,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;T(t,i,r,l)})),i.forEachGetter((function(e,n){var i=o+n;E(t,i,e,l)})),i.forEachChild((function(i,s){k(t,e,n.concat(s),i,r)}))}function x(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=R(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=R(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return O(t.state,n)}}}),r}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function I(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function T(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function E(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function A(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function O(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function P(t){v&&t===v||(v=t,i(v))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},_.prototype.commit=function(t,e,n){var i=this,r=R(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},_.prototype.dispatch=function(t,e){var n=this,i=R(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(l){0}e(t)}))}))}},_.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},_.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},_.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},_.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},_.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),k(this,this.state,t,this._modules.get(t),n.preserveState),C(this,this.state)},_.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=O(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),w(this)},_.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},_.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},_.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(_.prototype,y);var N=F((function(t,e){var n={};return B(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=U(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),L=F((function(t,e){var n={};return B(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=U(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),D=F((function(t,e){var n={};return B(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),$=F((function(t,e){var n={};return B(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=U(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),M=function(t){return{mapState:N.bind(null,t),mapGetters:D.bind(null,t),mapMutations:L.bind(null,t),mapActions:$.bind(null,t)}};function B(t){return j(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function j(t){return Array.isArray(t)||u(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function U(t,e,n){var i=t._modulesNamespaceMap[n];return i}function V(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var l=t.logActions;void 0===l&&(l=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=c(t.state);"undefined"!==typeof u&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=H(),l=r(t),d="mutation "+t.type+a;z(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",l),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),q(u)}h=o})),l&&t.subscribeAction((function(t,n){if(s(t,n)){var i=H(),r=o(t),a="action "+t.type+i;z(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),q(u)}})))}}function z(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function q(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+Z(t.getHours(),2)+":"+Z(t.getMinutes(),2)+":"+Z(t.getSeconds(),2)+"."+Z(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function Z(t,e){return W("0",e-t.toString().length)+t}var G={Store:_,install:P,version:"3.6.2",mapState:N,mapMutations:L,mapGetters:D,mapActions:$,createNamespacedHelpers:M,createLogger:V};e["ZP"]=G},8180:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var i=n(4444),r=n(8463),s=n(5816),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,s._addComponent)(t,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(t,e=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,s._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,s._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new i.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:r,useAsService:h,modularAPIs:s}};function r(t){delete e[t]}function o(t){if(t=t||s._DEFAULT_ENTRY_NAME,!(0,i.r3)(e,t))throw l.create("no-app",{appName:t});return e[t]}function a(r,o={}){const a=s.initializeApp(r,o);if((0,i.r3)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map((t=>e[t]))}function u(e){const r=e.name,a=r.replace("-compat","");if(s._registerComponent(e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw l.create("invalid-app-argument",{appName:r});return t[a]()};void 0!==e.serviceProps&&(0,i.ZB)(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=u(a);function e(e){(0,i.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),t}const d=h(),p=new o.Yd("@firebase/app-compat"),f="@firebase/app-compat",m="0.1.28";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){(0,s.registerVersion)(f,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},5816:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return _t},_DEFAULT_ENTRY_NAME:function(){return st},_addComponent:function(){return lt},_addOrOverwriteComponent:function(){return ut},_apps:function(){return at},_clearComponents:function(){return ft},_components:function(){return ct},_getProvider:function(){return dt},_registerComponent:function(){return ht},_removeServiceInstance:function(){return pt},deleteApp:function(){return Ct},getApp:function(){return bt},getApps:function(){return wt},initializeApp:function(){return yt},onLog:function(){return xt},registerVersion:function(){return kt},setLogLevel:function(){return St}});var i=n(8463),r=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(C(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let _={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){_=t(_)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(k(this),e),C(h.get(this))}:function(...e){return C(t.apply(k(this),e))}:function(e,...n){const i=t.call(k(this),e,...n);return p.set(i,e.sort?e.sort():[e]),C(i)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,l())?new Proxy(t,_):t)}function C(t){if(t instanceof IDBRequest)return g(t);if(f.has(t))return f.get(t);const e=w(t);return e!==t&&(f.set(t,e),m.set(e,t)),e}const k=t=>m.get(t);function x(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=C(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(C(o.result),t.oldVersion,t.newVersion,C(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function E(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(T.get(e))return T.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return T.set(e,s),s}y((t=>({...t,get:(e,n,i)=>E(e,n)||t.get(e,n,i),has:(e,n)=>!!E(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",P="0.7.27",N=new r.Yd("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",$="@firebase/analytics",M="@firebase/app-check-compat",B="@firebase/app-check",j="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",V="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",Z="@firebase/messaging",G="@firebase/messaging-compat",K="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="9.8.4",st="[DEFAULT]",ot={[R]:"fire-core",[L]:"fire-core-compat",[$]:"fire-analytics",[D]:"fire-analytics-compat",[B]:"fire-app-check",[M]:"fire-app-check-compat",[j]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[V]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[Z]:"fire-fcm",[G]:"fire-fcm-compat",[K]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t,e){t.container.addOrOverwriteComponent(e)}function ht(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t,e,n=st){dt(t,e).clearInstance(n)}function ft(){ct.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},gt=new s.LL("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=rt;function yt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw gt.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw gt.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of ct.values())a.addComponent(i);const c=new vt(t,n,a);return at.set(r,c),c}function bt(t=st){const e=at.get(t);if(!e)throw gt.create("no-app",{appName:t});return e}function wt(){return Array.from(at.values())}async function Ct(t){const e=t.name;at.has(e)&&(at.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function kt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}ht(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}function xt(t,e){if(null!==t&&"function"!==typeof t)throw gt.create("invalid-log-argument");(0,r.Am)(t,e)}function St(t){(0,r.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="firebase-heartbeat-database",Tt=1,Et="firebase-heartbeat-store";let At=null;function Ot(){return At||(At=x(It,Tt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw gt.create("storage-open",{originalErrorMessage:t.message})}))),At}async function Rt(t){var e;try{const e=await Ot();return e.transaction(Et).objectStore(Et).get(Nt(t))}catch(n){throw gt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Pt(t,e){var n;try{const n=await Ot(),i=n.transaction(Et,"readwrite"),r=i.objectStore(Et);return await r.put(e,Nt(t)),i.done}catch(i){throw gt.create("storage-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message})}}function Nt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=1024,Dt=2592e6;class $t{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:e,unsentEntries:n}=Bt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mt(){const t=new Date;return t.toISOString().substring(0,10)}function Bt(t,e=Lt){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ft(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ft(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class jt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Rt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ft(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){ht(new i.wA("platform-logger",(t=>new A(t)),"PRIVATE")),ht(new i.wA("heartbeat",(t=>new $t(t)),"PRIVATE")),kt(R,P,t),kt(R,P,"esm2017"),kt("fire-js","")}Ut("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return r},zt:function(){return o}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Am:function(){return h},Ub:function(){return u},Yd:function(){return l},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function u(t){i.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.fb19d297.js.map