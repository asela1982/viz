
data_trnx = [
  {
    type: 'scatterpolar',
    r: [2.5,4,3,3.1,5,2.1,3.5,2.1,2.4,2,3.1,3.7,3.1,3.7,2.1,3.3,4,3.2,2,2.1,1.6,2.7,2.6,2.1,2.8,1.9,3.3,2.6,4.5,3.3],
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

Plotly.plot("trnxChart", data_trnx, layout)


