/* Sandbox code */
import {dummyAll as dummyData} from './dummyData.js';

const main = () => {
	const printHtml = createPdfHtml(dummyData);

	const div = document.createElement('div');
	div.className = 'page';
	div.innerHTML = printHtml;
	document.querySelector('body').prepend(div);
}
/* Sandbox code */

import createTableAllColumn from './pdfHtml/tableHtml/tableAllColumnHtml.js';
import createTable4Column from './pdfHtml/tableHtml/table4ColumnHtml.js';
import createTable3Column from './pdfHtml/tableHtml/table3ColumnHtml.js';
import createTable2Column from './pdfHtml/tableHtml/table2ColumnHtml.js';
import createTable1Column from './pdfHtml/tableHtml/table1ColumnHtml.js';
import createTable0Column from './pdfHtml/tableHtml/table0ColumnHtml.js';
import createAddresseeHtml from "./pdfHtml/addresseeHtml.js";
import createRequirementInfoHtml from './pdfHtml/requirementInfoHtml.js'
import createCommentsHtml from "./pdfHtml/commentsHtml.js";
import createRequirementFooterHtml from './pdfHtml/requirementFooterHtml.js'
import createSupplierOrderTextHtml from "./pdfHtml/supplierOrderTextHtml.js";
import createSignatureHtml from "./pdfHtml/signatureHtml.js";

const createPdfHtml = (printData) => {
	const ejsData = {
		addresseeHtml: getAddresseeHtml(printData),
		requirementInfoHtml: getRequirementInfoHtml(printData),
		tableHtml: getTableHtml(printData),
		commentsHtml: getCommentsHtml(printData),
		requirementFooterHtml: getRequirementFooterHtml(printData),
		supplierOrderTextHtml: getSupplierOrderTextHtml(printData),
		signatureHtml: getSignatureHtml(printData),
	};

	//language=HTML
	return ejs.render(`
		<div class='puppeteer-pdf' style='direction: rtl; padding:0; margin:0;'>
			<%- addresseeHtml; %>
			<%- requirementInfoHtml; %>
			<%- tableHtml; %>
			<%- commentsHtml; %>
			<%- requirementFooterHtml; %>
			<%- supplierOrderTextHtml; %>
			<%- signatureHtml; %>
		</div>
	`, {...ejsData});
};

const getAddresseeHtml = (printData) => createAddresseeHtml(printData);
const getRequirementInfoHtml = (printData) => createRequirementInfoHtml(printData);
const getRequirementFooterHtml = (printData) => createRequirementFooterHtml(printData);
const getCommentsHtml = (printData) => createCommentsHtml(printData);
const getSupplierOrderTextHtml = (printData) => createSupplierOrderTextHtml(printData);
const getSignatureHtml = (printData) => createSignatureHtml(printData);

const getTableHtml = (printData) => {
	let currentTableType;
	const tableTypes = {
		allColumns: printData.allColumns,
		specificColumns4: printData.specificColumns4,
		specificColumns3: printData.specificColumns3,
		specificColumns2: printData.specificColumns2,
		specificColumns1: printData.specificColumns1,
		specificColumns0: printData.specificColumns0,
	}

	for (const tableTypesKey in tableTypes) {
		if (!tableTypes.hasOwnProperty(tableTypesKey)) continue;
		const isTableType = tableTypes[tableTypesKey];

		if (isTableType) {
			currentTableType = tableTypesKey;
		}
	}

	const tableFunctions = {
		allColumns: createTableAllColumn,
		specificColumns4: createTable4Column,
		specificColumns3: createTable3Column,
		specificColumns2: createTable2Column,
		specificColumns1: createTable1Column,
		specificColumns0: createTable0Column,
	}

	return tableFunctions[currentTableType](printData);
}

main();