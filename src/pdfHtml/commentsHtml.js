const createCommentsHtml = (pdfData) => {

	//language=HTML
	const template = `
		<% if (comment_list.length > 0) { %>
		<div class="comments">
			<div class="comments-header"><%= comments; %>:</div>
			<div class="comment-list-wrapper">
				<list class="comment-list">
					<% comment_list.forEach(commentObj=> { %>
					<li>
						<%= commentObj.comment %>
					</li>
					<% }); %>
				</list>
			</div>
		</div>
		<% } %>
	`;

	return ejs.render(template, {...pdfData});
}

export default createCommentsHtml;