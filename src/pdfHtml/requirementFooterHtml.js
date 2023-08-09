const createRequirementFooterHtml = (pdfData) => {

	//language=HTML
	const template = `
		<div class="requirement-footer">
			<div class="date">
				<img class="icon" src="<%= test_logo3; %>" alt="date" height="20"/>
				<div class="text">תאריך אספקה: <%= delivery_date; %></div>
			</div>
			<div class="location">
				<img class="icon" src="<%= test_logo2; %>" alt="location" height="20"/>
				<div class="text"><%= delivery_address %></div>
			</div>
			<div class="contact">
				<img class="icon" src="<%= test_logo; %>" alt="contact" height="20"/>
				<div class="text"><%= contact_name; %> <%= contact_phone; %></div>
			</div>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createRequirementFooterHtml;