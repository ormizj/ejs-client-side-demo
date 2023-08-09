const createSupplierOrderTextHtml = (pdfData) => {

	//language=HTML
	const template = `
		<div class="supplier-order-text">
			<% supplierOrderPdfTextSplitted.forEach((textObj)=> { %>

			<% if (textObj.textRow !== '') { %>
			<div class="text-row">
				<%= textObj.textRow %>
			</div>
			<% } else { %>
			<div class="text-newline"></div>
			<% } %>

			<% }); %>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createSupplierOrderTextHtml;