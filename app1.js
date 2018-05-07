data_bd = [
  {
    type: 'scatterpolar',
    r: [3.2, 2, 1.5, 1.8, 5, 1.5, 1.9, 1.5, 1.5, 2.8, 1.8, 2, 1.8, 1.5, 1.5, 1, 4, 1.5, 1.8, 1.8, 1.3, 1, 1.8, 2.8, 2, 1.5, 2, 3, 5.5, 1.5],
    theta: ["Westpac Australia", "WeBank China", "U Bank (by NAB) Australia", "Timo (Vietnam)", "Tencent Financial Technologies China", "Standard Chartered Hong Kong", "Richart (by Taishin) Taiwan", "Rakuten Bank Japan", "Paytm Payments Bank India", "OCBC Singapore", "O-Bank Taiwan", "MyBank China", "Liv (by ENBD) UAE", "Kakao Bank Korea", "Jibun Bank Japan", "Jenius (by BTPN) Indonesia", "JD Finance China", "ING Australia", "ICICI Bank India", "Hana Bank Korea", "FriMi (by NTB) Sri Lanka", "Eon (by UnionBank) Philippines", "Digibank (by DBS) India", "CTBC Taiwan", "Citibank Hong Kong", "CIMB Malaysia", "China Merchants Bank", "CBA Australia", "Ant Financial Services China", "ALAT (by Wema) Nigeria"],
    fill: 'toself'
  }
]


layout = {
  height: 500,
  width: 700,

  polar: {
    radialaxis: {
      visible: true,
      range: [0, 8]
    }
  },

  font: {
    family: 'Courier New, monospace',
    size: 8,
    color: '#7f7f7f'
  }
}

Plotly.plot("bdChart", data_bd, layout)


