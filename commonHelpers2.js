import"./assets/modulepreload-polyfill-3cfb730f.js";const o="feedback-form-state",e=document.querySelector(".feedback-form"),s=e.elements.email,m=e.elements.message,r=JSON.parse(localStorage.getItem(o))||{email:"",message:""};s.value=r.email;m.value=r.message;e.addEventListener("input",t=>{const a={email:s.value.trim(),message:m.value.trim()};l(a)});e.addEventListener("submit",function(t){if(t.preventDefault(),s.value===""||m.value==="")return alert("Please enter data in all required fields.");const a={email:s.value.trim(),message:m.value.trim()};l(a),console.log(a),localStorage.removeItem(o),e.reset()});function l(t){localStorage.setItem(o,JSON.stringify(t))}
//# sourceMappingURL=commonHelpers2.js.map
