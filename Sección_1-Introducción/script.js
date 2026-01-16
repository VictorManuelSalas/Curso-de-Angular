(function () {
  const rows = document.querySelectorAll(
    "lyte-table-structure lyte-tbody lyte-tr"
  );

  const data = [];
  data.push(["Field Label", "API Name", "Data Type", "Custom Field"]);

  rows.forEach(row => {
    const cells = row.querySelectorAll("lyte-td");
    if (cells.length < 4) return;

    const fieldLabel = cells[0].innerText.trim();
    const apiName = cells[1].innerText.trim();
    const dataType = cells[2].innerText.trim();

    const hasCustom =
      cells[3].querySelector(".zcicncss-tick") ? "Yes" : "No";

    data.push([fieldLabel, apiName, dataType, hasCustom]);
  });

  const csv = data.map(r => r.map(v => `"${v}"`).join(",")).join(",");

  console.log(data);
})();
