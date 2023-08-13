dataSetVersion = "2023-08-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Main Units", key: "main" },
      { name: "Shuffle Units", tooltip: "Units from the !! Shuffle Unit project.", key: "shuffle" },
      { name: "Other Units", tooltip: "Other units, such as temporary units, past units, or subunits.", key: "other"},
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Alkaloid",
    img: "lTs6Oyt.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Trickstar",
    img: "GXFpbm2.png",
    opts: {
      type: [ "main" ]
    }
  },
 {
    name: "fine",
    img: "OaiP2sA.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Ryuseitai",
    img: "1Dfpy2Z.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Eden",
    img: "5GjWQxA.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Valkyrie",
    img: "WFEWkTq.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "2wink",
    img: "SqPZrnx.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Crazy:B",
    img: "YbLgW9m.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Undead",
    img: "THi6nao.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Ra*bits",
    img: "cDdQK0F.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Akatsuki",
    img: "eNggAPU.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Knights",
    img: "g2C32Kg.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Switch",
    img: "AkpREtf.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "MaM",
    img: "PNg2i6R.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "Double Face",
    img: "HK6vVCT.png",
    opts: {
      type: [ "main" ]
    }
  },
  {
    name: "√AtoZ",
    img: "twtRAza.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "XXVeil",
    img: "WUaGjZM.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Branco",
    img: "zM8b818.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Ring.A.Bell",
    img: "IWCEE4l.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Getto Spectacle",
    img: "CiYBCu2.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "La Mort",
    img: "iPUoJw7.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Puffy☆Bunny",
    img: "GlrBaFW.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Butou-kai",
    img: "GwrwOWW.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "BLEND+",
    img: "EiZKNpn.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Flambé!",
    img: "z1yyHOt.png",
    opts: {
      type: [ "shuffle" ]
    }
  },
  {
    name: "Adam",
    img: "KG8qlpD.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Eve",
    img: "a7fsF5R.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Deadmanz",
    img: "Mp58CDB.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Knight Killers",
    img: "1PTkPQx.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Ultissimo",
    img: "fmNtKdu.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Rain-bows",
    img: "YqGJ8Ye.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Ba-barrier",
    img: "n5n63A2.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Träumerei",
    img: "ttBKe9x.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Five Eccentrics",
    img: "fwRQ1oJ.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "fine (past)",
    img: "pgpsuOh.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "Valkyrie (past)",
    img: "sR45xNh.png",
    opts: {
      type: [ "other" ]
    }
  },
  {
    name: "MaM with Team Ushiwakamaru",
    img: "i2Hvkdp.png",
    opts: {
      type: [ "other" ]
    }
  },
];