import"./assets/modulepreload-polyfill-3cfb730f.js";const o="feedback-form-state",m=document.querySelector(".feedback-form"),t=m.elements.email,s=m.elements.message,l=JSON.parse(localStorage.getItem(o))||{email:"",message:""};t.value=l.email;s.value=l.message;m.addEventListener("input",e=>{const a={email:t.value.trim(),message:s.value.trim()};r(a)});m.addEventListener("submit",function(e){if(e.preventDefault(),t.value===""||s.value==="")return alert("Please enter data in all required fields.");const a={email:t.value.trim(),message:s.value.trim()};r(a),console.log(a),localStorage.removeItem(o)});function r(e){localStorage.setItem(o,JSON.stringify(e))}
//# sourceMappingURL=commonHelpers2.js.map
