const createSignatureHtml = (pdfData) => {

	//language=HTML
	const template = `
		<div class="signature">
			<div class="signature-baseline">
				<div class="date-wrapper">
					<div>
						<div class="date"><%= sent_date %></div>
						<div class="line"></div>
						<div class="line-text">תאריך</div>
					</div>
				</div>
				<div class="signature-wrapper">
					<div class="signature-image-wrapper">
						<img class="signature-image" src="<%= signature_img %>" alt="signature" height="50"/>
					</div>
					<div class="line"></div>
					<div class="line-text">חתימת המזמין</div>
				</div>
			</div>
		</div>
	`;

	return ejs.render(template, {...pdfData});
}

export default createSignatureHtml;