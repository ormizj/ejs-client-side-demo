const createAddresseeHtml = (pdfData) => {

	//language=HTML
	const template = `
		<div class="addressee">
			<div class="to">
				<div class="to-header">
					<div class="to-pre-text">
						לכבוד:
					</div>
					<div class="to-name">
						<%= supplier_name; %>
					</div>
				</div>

				<div class="to-body">

					<% supplierData.forEach((supplierDataVal)=> { %>
					<div class="section">
						<%= supplierDataVal.val; %>
					</div>
					<% }); %>

				</div>

			</div>
			<div class="from">
				<div class="from-project">
					<div class="project-text">
						פרויקט:
					</div>
					<div class="project-data">
						<%= main_project_name; %>
					</div>
				</div>
				<div class="from-compound">
					<div class="compound-text">
						מתחם:
					</div>
					<div class="compound-data">
						<%= project_name; %>
					</div>
				</div>
			</div>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createAddresseeHtml;