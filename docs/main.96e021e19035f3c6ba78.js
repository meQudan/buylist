!function(t){function e(e){for(var s,o,c=e[0],l=e[1],r=e[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);for(u&&u(e);m.length;)m.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={0:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;i.push([121,1]),n()}({121:function(t,e,n){n(122),t.exports=n(309)},308:function(t,e,n){},309:function(t,e,n){"use strict";n.r(e),n.d(e,"firebase",(function(){return W}));n(308);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function t(e,n,i){s(this,t),a(this,"items",void 0),a(this,"listName",void 0),this.listName=e,this.items={},n&&(this.items.toBuy=n),i&&(this.items.purchased=i)},o=function t(e){s(this,t),a(this,"itemName",void 0),a(this,"quantity",1),a(this,"unit","pcs"),this.itemName=e};function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var r={lists:function(t){var e=C.user.uid;I.innerHTML="";var n=U("button","add-list-btn");n.innerHTML="+",I.append(n),n.addEventListener("click",(function(t){t.preventDefault(),b.classList.add("modal_is-open"),g.focus(),y.addEventListener("submit",(function t(n){n.preventDefault(),W.database().ref("".concat(e,"/lists")).get().then((function(n){var s=n.val()||[],a=g.value,o=new i(a);s.unshift(o),console.log(s),W.database().ref("".concat(e,"/lists")).set(s),g.value="",y.removeEventListener("submit",t),b.classList.remove("modal_is-open")}))}))})),t.forEach((function(t,n){var s=U("div","list-elem"),a=t.items||{},i=a.toBuy||[],o=a.purchased||[],c=i.length||0,l=o.length||0,u=l+c,d='\n        <h2 class="list-elem__name">'.concat(t.listName,'</h2>\n        <span class="list-elem__counter">').concat(l," / ").concat(u,'</span>\n        <div class="list-elem__options">\n          <img src="./img/dots.svg" alt="" />\n    \n          <div class="list-elem__options-list">\n            <a href="#" class="list-elem__options-list-elem">Rename</a>\n            <a href="#" class="list-elem__options-list-elem">Delete</a>\n          </div>\n        </div>\n        <div class="list-elem__progress">\n          <div class="list-elem__progress_blue"></div>\n        </div>\n      ');s.innerHTML=d,s.querySelector(".list-elem__progress_blue").style.width=100*(l/u||1)+"%";var m=s.querySelector(".list-elem__options"),f=s.querySelector(".list-elem__options-list"),p=f.firstElementChild,v=f.lastElementChild;P(m,f,"list-elem__options-list"),I.insertAdjacentElement("beforeend",s),p.addEventListener("click",(function(s){function a(s){s.preventDefault(),t.listName!==q.value&&W.database().ref("".concat(e,"/lists/").concat(n,"/listName")).set(q.value),L.classList.remove("modal_is-open"),S.removeEventListener("submit",a)}s.preventDefault(),f.classList.remove("list-elem__options-list_is-open"),L.classList.add("modal_is-open"),q.value=t.listName,S.addEventListener("submit",a),E.addEventListener("click",(function(){L.classList.remove("modal_is-open"),S.removeEventListener("submit",a)})),L.addEventListener("click",(function(t){t.target.classList.contains("modal")&&(L.classList.remove("modal_is-open"),S.removeEventListener("submit",a))}))})),v.addEventListener("click",(function(s){s.preventDefault(),f.classList.remove("list-elem__options-list_is-open"),W.database().ref("".concat(e,"/lists")).get().then((function(t){var s=t.val()||[];s.splice(n,1),W.database().ref("".concat(e,"/lists")).set(s)})),W.database().ref("".concat(e,"/trash")).get().then((function(n){var s=n.val()||[];s.unshift(t),W.database().ref("".concat(e,"/trash")).set(s)}))})),s.addEventListener("click",(function t(e){e.target.closest(".list-elem__options")||(I.className="content list",r.list(n),s.removeEventListener("click",t))}))}))},list:function(t){var e=C.user.uid;W.database().ref("".concat(e,"/lists")).off(),I.innerHTML='\n    <input type="text" class="shoplist__name">\n    <form class="shoplist__add-item">\n      <label class="shoplist__add-input-label" for="add-item">+</label>\n      <input type="text" name="add-item" id="add-item" class="shoplist__add-input" placeholder="Add item" />\n    </form>\n    <ul class="shoplist__to-buy"></ul>\n    <ul class="shoplist__purchase"></ul>\n  ';var n=I.querySelector(".shoplist__add-item"),s=n.querySelector(".shoplist__add-input");n.addEventListener("submit",(function(n){n.preventDefault(),s.value.trim()&&W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy")).get().then((function(n){var a=n.val()||[],i=new o(s.value);a.unshift(i),W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy")).set(a),s.value="",s.focus()}))})),W.database().ref("".concat(e,"/lists/").concat(t)).on("value",(function(n){var s=n.val(),a=s.listName,i=s.items,o=(null==i?void 0:i.toBuy)||[],l=(null==i?void 0:i.purchased)||[];I.querySelector(".shoplist__name").value=a;var r=I.querySelector(".shoplist__name");r.addEventListener("change",(function(){W.database().ref("".concat(e,"/lists/").concat(t,"/listName")).set(r.value)}));var u=I.querySelector(".shoplist__to-buy");u.innerHTML="",o.length&&o.forEach((function(n,s){var a=U("li","shoplist__item");a.innerHTML='\n              <div class="shoplist__item-name">\n                <input class="checkbox" type="checkbox" name="add-item-'.concat(s,'" id="add-item-').concat(s,'" />\n                <label class="checkbox__label" for="add-item-').concat(s,'"></label>\n                <span class="shoplist__item-name-text">').concat(n.itemName,'</span>\n                <button class="drop">\n                  <span></span>\n                </button>\n              </div>\n              <div class="shoplist__item-info">\n                <button class="shoplist__item-quantity-btn shoplist__item-quantity-btn_minus">-</button>\n                <input type="number" max="99999" class="shoplist__item-quantity" value="').concat(n.quantity,'">\n                <button class="shoplist__item-quantity-btn shoplist__item-quantity-btn_plus">+</button>\n                <select name="unit-1" id="unit-1" class="shoplist__item-unit">\n                  <option value="pcs">pcs</option>\n                  <option value="kg">kg</option>\n                  <option value="gr">gr</option>\n                  <option value="lit">lit</option>\n                </select>\n                <button class="shoplist__item-delete">\n                  <img src="./img/trash.svg" alt="" class="shoplist__item-delete-img" />\n                </button>\n              </div>\n            '),a.querySelector("#add-item-".concat(s)).addEventListener("change",(function(){o.splice(s,1),W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy")).set(o),l.unshift(n),W.database().ref("".concat(e,"/lists/").concat(t,"/items/purchased")).set(l)}));var i=a.querySelector(".shoplist__item-name-text");i.addEventListener("click",(function(){i.innerHTML='<input type="text" class="shoplist__item-name-text-input" value="'.concat(n.itemName,'">');var a=i.querySelector(".shoplist__item-name-text-input");a.focus(),a.addEventListener("change",(function(){W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy/").concat(s,"/itemName")).set(a.value)})),a.addEventListener("blur",(function(){i.innerHTML=n.itemName})),a.addEventListener("keydown",(function(t){13===t.keyCode&&(i.innerHTML=n.itemName)}))}));var r=a.querySelector(".shoplist__item-quantity");r.addEventListener("change",(function(){var n=+r.value;n>0?(Number.isInteger(n)||(n=+n.toFixed(1)),n>9999.9&&(n=9999)):n=1,W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy/").concat(s,"/quantity")).set(n)})),a.querySelector(".shoplist__item-quantity-btn_minus").addEventListener("click",(function(n){if(n.preventDefault(),+r.value>1){var a=(+r.value-1).toString();new Set(c(a)).has(".")&&(a=(+a).toFixed(1)),W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy/").concat(s,"/quantity")).set(a)}})),a.querySelector(".shoplist__item-quantity-btn_plus").addEventListener("click",(function(n){n.preventDefault();var a=(+r.value+1).toString();new Set(c(a)).has(".")&&(a=(+a).toFixed(1)),+a<9999&&W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy/").concat(s,"/quantity")).set(a)})),c(a.querySelectorAll("option")).map((function(t){t.innerHTML===n.unit&&t.setAttribute("selected","selected")})),a.querySelector(".shoplist__item-delete").addEventListener("click",(function(n){n.preventDefault(),o.splice(s,1),W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy")).set(o)})),u.insertAdjacentElement("beforeend",a)}));var d=I.querySelector(".shoplist__purchase");d.innerHTML="",l.length&&l.forEach((function(n,s){var a=U("li","shoplist__item shoplist__item_purchase"),i=o.length+s;a.innerHTML='\n              <div class="shoplist__item-name">\n                <input class="checkbox" type="checkbox" checked name="add-item-'.concat(i,'" id="add-item-').concat(i,'" />\n                <label class="checkbox__label" for="add-item-').concat(i,'"></label>\n                <span class="shoplist__item-name-text">').concat(n.itemName,'</span>\n              </div>\n              <div class="shoplist__item-info">\n                <span class="shoplist__item-quantity_purchase">').concat(n.quantity,'</span>\n                <span class="shoplist__item-unit">').concat(n.unit,'</span>\n                <button class="shoplist__item-delete">\n                  <img src="./img/trash.svg" alt="" class="shoplist__item-delete-img" />\n                </button>\n              </div>\n            '),a.querySelector("#add-item-".concat(i)).addEventListener("change",(function(){l.splice(s,1),W.database().ref("".concat(e,"/lists/").concat(t,"/items/purchased")).set(l),o.push(n),W.database().ref("".concat(e,"/lists/").concat(t,"/items/toBuy")).set(o)})),a.querySelector(".shoplist__item-delete").addEventListener("click",(function(n){n.preventDefault(),l.splice(s,1),W.database().ref("".concat(e,"/lists/").concat(t,"/items/purchased")).set(l)})),d.insertAdjacentElement("beforeend",a)}))}))},trash:function(t){var e=C.user.uid;I.innerHTML="",t.forEach((function(t,n){var s=U("div","list-elem"),a=t.items||{},i=a.toBuy||[],o=a.purchased||[],c=i.length||0,l=o.length||0,r=l+c,u='\n        <h2 class="list-elem__name">\n        '.concat(t.listName,'\n        </h2>\n        <span class="list-elem__counter">').concat(l," / ").concat(r,'</span>\n        <div class="trash-btns">\n          <button class="trash-btn">restore</button>\n          <button class="trash-btn">delete</button>\n        </div>\n      ');s.innerHTML=u;var d=s.querySelector(".trash-btns"),m=d.firstElementChild,f=d.lastElementChild;I.insertAdjacentElement("beforeend",s),m.addEventListener("click",(function(s){s.preventDefault(),W.database().ref("".concat(e,"/trash")).get().then((function(t){var s=t.val()||[];s.splice(n,1),W.database().ref("".concat(e,"/trash")).set(s)})),W.database().ref("".concat(e,"/lists")).get().then((function(n){var s=n.val()||[];s.unshift(t),W.database().ref("".concat(e,"/lists")).set(s)}))})),f.addEventListener("click",(function(t){t.preventDefault(),W.database().ref("".concat(e,"/trash")).get().then((function(t){var s=t.val()||[];s.splice(n,1),W.database().ref("".concat(e,"/trash")).set(s)}))}))}))},settings:function(){I.innerHTML='\n      <div class="settings__acc">\n        <div class="settings__acc-info">\n          <div class="settings__acc-name">'.concat(C.user.displayName,'</div>\n          <div class="settings__acc-email">').concat(C.user.email,'</div>\n        </div>\n        <div class="settings__acc-text">Change your name:</div>\n        <div class="settings__acc-name-change-wrapper">\n          <input type="text" name="acc-name" id="acc-name" class="settings__acc-name-change" \n          value="').concat(C.user.displayName,'"/>\n        </div>\n      </div>\n  ');var t=I.querySelector(".settings__acc-name-change"),e=I.querySelector(".settings__acc-name");t.addEventListener("change",(function(n){n.preventDefault(),e.innerHTML=t.value,C.user.updateProfile({displayName:t.value})}))},helloScreen:function(){I.innerHTML='\n    <section class="hello">\n      <p class="hello__text">Здравствуйте, этот проект создан с применением:</p>\n      <h3 class="hello__technologies">\n        TypeScript, Webpack 4, Gulp, SCSS, Git, БЭМ, Firebase (Authentication, Realtime Database).\n      </h3>\n      <p class="hello__text">\n        Для того, чтобы оценить функционал, пожалуйста, авторизируйтесь или нажмите кнопку ниже. Спасибо за внимание.\n      </p>\n      <button class="hello__btn">Try with test account</button>\n    </section>\n  ',I.querySelector(".hello__btn").addEventListener("click",(function(){W.auth().signInWithEmailAndPassword("testtest@test.test","testtest@test.test").catch((function(t){var e=t.message;alert(e),console.log(t)}))}))}},u=/^\w+@\w+\.\w{2,}$/,d=document.querySelector(".header"),m=d.querySelector("#burger-menu__toggle"),f=d.querySelector(".modal-sidebar"),p=d.querySelector(".modal-sidebar__list"),v=d.querySelector(".header__authorization"),_=d.querySelector(".user"),h=document.querySelector(".sidebar"),b=document.querySelector(".modal-new-list"),y=b.querySelector(".modal__form"),g=b.querySelector(".modal__input"),L=document.querySelector(".modal-rename-list"),S=L.querySelector(".modal__form"),q=L.querySelector(".modal__input"),E=L.querySelector(".modal__btns").firstElementChild,k=document.querySelector(".authorization"),w=k.querySelector(".authorization__form"),N=w.querySelector(".authorization__close"),x=w.querySelector(".authorization__forget"),T=w.querySelector(".authorization__input-email"),M=w.querySelector(".authorization__input-pass"),A=w.querySelector(".authorization__btn_sign-up"),D=w.querySelector(".authorization__btn_sign-in"),H=document.querySelector(".log-out"),j=document.querySelector(".log-out__email"),O=H.querySelector(".log-out__btn"),z=H.querySelector(".log-out__close-btn"),I=document.querySelector(".content");function U(t,e){var n=document.createElement(t);return n.className=e,n}function P(t,e,n){t.addEventListener("click",(function s(){e.classList.add("".concat(n,"_is-open")),t.removeEventListener("click",s),setTimeout((function(){document.addEventListener("click",(function a(i){var o=i.target;o===e||o.closest(".".concat(n))&&!o.classList.contains("".concat(n,"__close-btn"))||(e.classList.remove("".concat(n,"_is-open")),document.removeEventListener("click",a),t.addEventListener("click",s))}))}))}))}function B(){var t=C.user.uid;W.database().ref("".concat(t,"/lists")).get().then((function(e){e.val().forEach((function(e,n){W.database().ref("".concat(t,"/lists/").concat(n)).off()}))}))}var C={user:null,initUser:function(){var t=this;W.auth().onAuthStateChanged((function(){if(t.user=W.auth().currentUser,console.log(C.user),C.user?(v.style.display="none",_.style.display="",k.classList.remove("authorization_is-open")):(console.log("no setUser"),v.style.display="",_.style.display="none"),t.user){t.user.displayName&&t.updateUserInfo();var e=C.user.uid;I.classList.add("lists"),W.database().ref("".concat(e,"/lists")).on("value",(function(t){var e=t.val()||[];I.classList.contains("lists")&&r.lists(e)}))}else I.className="content",r.helloScreen()}))},signIn:function(t,e){if(!u.test(t))return alert("Email is not valid");W.auth().signInWithEmailAndPassword(t,e).catch((function(t){var e=t.code,n=t.message;"auth/wrong-password"===e?alert("Wrong password"):"auth/user-not-found"==e?alert("User not found"):alert(n)}))},signUp:function(t,e){var n=this;u.test(t)?t.trim()&&e.trim()?W.auth().createUserWithEmailAndPassword(t,e).then((function(e){var s=t.substring(0,t.indexOf("@"));W.auth().currentUser.updateProfile({displayName:s}).then((function(){n.updateUserInfo();var e=[];W.database().ref("users").get().then((function(n){(e=n.val()||[]).push(t),W.database().ref("users").set(e)}))}))})).catch((function(t){var e=t.code,n=t.message;"auth/weak-password"===e?alert("Слабый пароль"):"auth/email-already-in-use"==e?alert("Этот email уже используется"):(console.log(t),console.log(e),console.log(n))})):alert("Введите даные"):alert("email is not valid")},logOut:function(){W.auth().signOut()},sendForget:function(t){if(!u.test(t))return alert("email is not valid");W.auth().sendPasswordResetEmail(t).then((function(){alert("Письмо отправлено")})).catch((function(t){"auth/user-not-found"==t.code?alert("User not found"):alert(t.message)}))},updateUserInfo:function(){_.innerHTML=this.user.displayName[0].toUpperCase(),j.innerHTML=this.user.email}},W=window.firebase;W.initializeApp({apiKey:"AIzaSyBWD1NHPb3KwMzsvX05WLUPqxWMgC2RLTw",authDomain:"buylist-b265a.firebaseapp.com",databaseURL:"https://buylist-b265a-default-rtdb.firebaseio.com",projectId:"buylist-b265a",storageBucket:"buylist-b265a.appspot.com",messagingSenderId:"753800425123",appId:"1:753800425123:web:c4e4e589ba986cf1511916"}),C.initUser(),f.addEventListener("click",(function(t){var e=t.target,n=C.user.uid;e!==p&&(m.checked=!1),I.classList.contains("lists")&&(I.querySelector(".add-list-btn").style.zIndex="2"),e.closest(".sidebar__btn-lists")&&(I.classList.contains("list")&&B(),I.className="content lists",W.database().ref("".concat(n,"/trash")).off(),W.database().ref("".concat(n,"/lists")).on("value",(function(t){var e=t.val()||[];r.lists(e)}))),e.closest(".sidebar__btn-trash")&&(I.classList.contains("list")&&B(),I.className="content trash",W.database().ref("".concat(n,"/lists")).off(),W.database().ref("".concat(n,"/trash")).on("value",(function(t){var e=t.val()||[];r.trash(e)}))),e.closest(".sidebar__btn-settings")&&(I.classList.contains("list")&&B(),W.database().ref("".concat(n,"/trash")).off(),I.className="content settings",r.settings())})),m.addEventListener("change",(function(){I.classList.contains("lists")&&(I.querySelector(".add-list-btn").style.zIndex="0")})),v.addEventListener("click",(function(t){k.classList.add("authorization_is-open")})),k.addEventListener("click",(function(t){t.target===k&&k.classList.remove("authorization_is-open")})),N.addEventListener("click",(function(t){t.preventDefault(),t.target===N&&k.classList.remove("authorization_is-open")})),x.addEventListener("click",(function(t){t.preventDefault(),C.sendForget(T.value)})),A.addEventListener("click",(function(t){t.preventDefault(),C.signUp(T.value,M.value)})),P(_,H,"log-out"),O.addEventListener("click",(function(){H.classList.remove("log-out_is-open"),C.logOut()})),z.addEventListener("click",(function(){H.classList.remove("log-out_is-open")})),D.addEventListener("click",(function(t){t.preventDefault(),C.signIn(T.value,M.value)})),b.addEventListener("click",(function(t){t.target.classList.contains("modal")&&(b.classList.remove("modal_is-open"),b.querySelector(".modal__input").value="")})),h.addEventListener("click",(function(t){var e=t.target,n=C.user.uid;e.closest(".sidebar__btn-lists")&&(I.classList.contains("list")&&B(),I.className="content lists",W.database().ref("".concat(n,"/trash")).off(),W.database().ref("".concat(n,"/lists")).on("value",(function(t){var e=t.val()||[];r.lists(e)}))),e.closest(".sidebar__btn-trash")&&(I.classList.contains("list")&&B(),I.className="content trash",W.database().ref("".concat(n,"/lists")).off(),W.database().ref("".concat(n,"/trash")).on("value",(function(t){var e=t.val()||[];r.trash(e)}))),e.closest(".sidebar__btn-settings")&&(I.classList.contains("list")&&B(),W.database().ref("".concat(n,"/trash")).off(),I.className="content settings",r.settings())}))}});