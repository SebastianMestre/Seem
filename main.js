const input = document.getElementById('MathInput');
const output = document.getElementById('MathPreview');
const update = function(){
	const content = input.value.trim();
	output.innerHTML = `$$${input.value.trim()}$$`;
	window.location.hash = "#" + encodeURI(content);
	MathJax.texReset();
	MathJax.typesetClear();
	MathJax.typesetPromise([output]);
};
input.addEventListener("input", update);
window.addEventListener("load", function(){
	const content = window.location.hash.substr(1);
	if (content.length > 0)
		input.value = decodeURIComponent(content);
	update();
});