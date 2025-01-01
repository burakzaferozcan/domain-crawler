function getAllDomains(date) {
  const tableBody = document.querySelector("#domain-table tbody");

  fetch("/prices?date=" + date, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let domains = Object.keys(data);

      document.querySelector("#domainCount").innerText = domains.length;

      domains.forEach((domain) => {
        const row = document.createElement("tr");

        row.appendChild(createCell(domain));
        row.appendChild(
          createPriceCell(
            data[domain].new_registration_fees[0]?.price,
            data[domain].new_registration_fees[0]?.company
          )
        );
        row.appendChild(
          createPriceCell(
            data[domain].renewal_fees[0]?.price,
            data[domain].renewal_fees[0]?.company
          )
        );
        row.appendChild(
          createPriceCell(
            data[domain].transfer_fees[0]?.price,
            data[domain].transfer_fees[0]?.company
          )
        );
        row.appendChild(createButton("See All...", "/domain/" + domain));

        tableBody.appendChild(row);
      });
    });
}

function getDomainPrices(extension, date) {
  const tableBody = document.querySelector("#domain-table tbody");

  fetch("/prices/domain/" + extension + "?date=" + date, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let companies = Object.keys(data);

      companies.forEach((company) => {
        for (let i = 0; i < data[company].new_registration_fees.length; i++) {
          const row = document.createElement("tr");
          row.appendChild(createCell(company));
          row.appendChild(
            createPriceCell(data[company].new_registration_fees[i]?.price)
          );
          row.appendChild(
            createPriceCell(data[company].renewal_fees[i]?.price)
          );
          row.appendChild(
            createPriceCell(data[company].transfer_fees[i]?.price)
          );
          row.appendChild(
            createButton("See Others...", "/registrar/" + company)
          );

          tableBody.appendChild(row);
        }
      });
    });
}

function createCell(content) {
  const cell = document.createElement("td");
  cell.innerHTML = content;
  return cell;
}

function createPriceCell(price, company) {
  let content = `
      <b>$${price}</b>
    `;

  if (company) {
    content += `<br>${company}`;
  }

  if (!price) {
    content = "-";
  }

  let cell = createCell(content);
  cell.className = "text-center";
  return cell;
}

function createButton(content, url) {
  let button =
    '<a href="' + url + '" class="btn btn-green w-100">' + content + "</a>";

  let cell = createCell(button);
  return cell;
}
