// SABOTAGEM CP05: codigo vulneravel para testar o Semgrep
const out = document.getElementById("out");
const input = decodeURIComponent(location.hash.slice(1));
out.textContent = eval(input);
