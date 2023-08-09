const createTableHtml = (pdfData) => {
	console.log('Table All');

	//language=HTML
	const template = `
		<div class="table all">
			<div class="row-header">
				<div class="header row-number">#</div>
				<div class="header name">תיאור פריט</div>
				<div class="header amount">כמות</div>
				<div class="header dynamic">מיקום</div>
				<div class="header dynamic">סעיפי תקציב</div>
				<div class="header dynamic">מחיר יח'</div>
				<div class="header dynamic">סכום</div>
			</div>
			<% itemreq.forEach((itemReq)=> { %>
			<div class="row-data">
				<div class="number">
					<%= itemReq.row_id; %>
				</div>
				<div class="item-wrapper">
					<div class="item">
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
						<div class="item-data">
							<% itemReq.main_building.forEach((building) => { %>
							<%= building.building_name; %>

							<% building.levels.forEach((level)=> { %>
							<%= level.level %>
							<%= level.apartments_name %>

							<% }); %>
							<% }); %>
						</div>
						<div class="item-data">
							<% itemReq.budget_sections.forEach((budgetSection) => { %>
							<%= budgetSection.budget_section %>
							<% }); %>
						</div>
						<div class="item-data">
							<%= itemReq.itemPrice %>
						</div>
						<div class="item-data">
							<%= itemReq.totalPrice %>
						</div>
					</div>
					<div class="item-desc-wrapper 
					<% if (itemReq.notes.length === 0) { %> big-pad <% }%>"
					>
						<div class="pre-text">
							<div class="pre-text-center">
								הערות לפריט:
							</div>
						</div>
						<div class="item-desc">
							<% itemReq.notes.forEach((note) => { %>
							<div class="note">
								<%= note.note %>
							</div>
							<% }); %>
						</div>
					</div>

				</div>
			</div>
			<% }); %>
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
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createTableHtml;