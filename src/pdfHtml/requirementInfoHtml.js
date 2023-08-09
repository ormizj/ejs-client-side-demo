const createRequirementInfoHtml = (pdfData) => {

	//language=HTML
	const template = `
		<div class="requirement-info">
			<div class="requirement-number">הזמנת רכש <%= order_number; %></div>
			<div class="requirement-date">תאריך שליחת ההזמנה <%= sent_date; %></div>
			<div class="requirement-demand">
				<div class="demand-pre-text">
					את הסחורה נדרש לספק על פי הכמויות המופיעות בהזמנה זו ועל פי תקן בלבד וזאת עד לתאריך:
				</div>
				<div class="demand-date">
					<%= delivery_date; %>
				</div>
			</div>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createRequirementInfoHtml;