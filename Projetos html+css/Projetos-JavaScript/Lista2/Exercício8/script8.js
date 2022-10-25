document.getElementById('submit').onclick = () =>{
const form = document.getElementById('form')
const formInfo = new FormData(form)
const output = document.getElementById('output');
for (const [key, value] of formInfo) {
  output.textContent += `${key}: ${value}\n`;
}}
