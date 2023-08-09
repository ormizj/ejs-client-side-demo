const createTableHtml = (pdfData) => {
	console.log('Table 1');

//language=HTML
	const template = `
		<div class="table one">
			<div class="row-header">
				<div class="header row-number">#</div>
				<div class="header name">תיאור פריט</div>
				<div class="header amount">כמות</div>
				<div class="header dynamic"><%= dynamicCol1 %></div>
			</div>
			<% itemreq.forEach((itemReq)=> { %>
			<div class="row-data">
				<div class="item-wrapper">
					<div class="item">
						<div class="item-data number">
							<%= itemReq.row_id; %>
						</div>
						<div class="item-data name-wrapper">
							<div class="name">
								<%= itemReq.supplierItemName; %>
							</div>
							<div class="serial">
								<%= itemReq.item_number; %>
							</div>
						</div>
						<div class="item-data amount-wrapper">
							<div class="amount">
								<%= itemReq.amount; %> <%= itemReq.unit; %>
							</div>
							<div class="total-amount">
								<%= itemReq.total_amount; %>
							</div>
						</div>
						<div class="item-data dynamic">
							<% itemReq.dynamicVal1.forEach((dynamicVal)=> { %>
							<%= dynamicVal.val %>
							<% }); %>
						</div>
					</div>
				</div>
			</div>
			<% }); %>

			<% if (totalTax) { %>
			<div class="tax-grid">
				<div class="tax-outer-border"></div>
				<div class="tax">
					<div class="section">
						<div class="tax-text">
							סה״כ לפני מע״מ:
						</div>
						<div class="bold">
							<%= beforeTax; %>
						</div>
					</div>
					<div class="section">
						<div class="tax-text">
							מע״מ:
						</div>
						<div class="bold">
							<%= tax; %>
						</div>
					</div>
					<div class="section">
						<div class="tax-text">
							סה״כ כולל מע״מ:
						</div>
						<div class="bold">
							<%= totalWithTax; %>
						</div>
					</div>
				</div>
			</div>
			<% }%>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createTableHtml;