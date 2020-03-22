window.addEventListener('DOMContentLoaded', function() {
	fetch('/gh/get/response.html/jsfiddle/github-demo/tree/master', {
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
		}
	})
	.then(res => {
		return res.text();
	})
	.then(html => {
		$('#demo').html(html);
	}).catch((error) => {
		$('#demo').html(error);
	})
})
