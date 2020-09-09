var brands = [
  "Chevrolet",
  "Volkswagen",
  "Fiat",
  "Renault",
  "Ford",
  "Toyota",
  "Hyundai",
  "Jeep",
  "Honda",
  "Nissan",
  "Citroën",
  "Mitsubishi",
  "Peugeot",
  "Chery",
  "BMW",
  "Mercedes",
  "Kia",
  "Audi",
  "Volvo",
  "Land",
];

var models = [
  "Avalon XLS 3.0",
  "Band. Jipe 4x4 Sport 3.7 Diesel",
  "Band.Jipe Cap.de Aço Chas. Curto Diesel",
  "Band.Jipe Cap.de Aço Chas. Longo Diesel",
  "Band.Jipe Capota de Lona Diesel",
  "Band.Picape CD 2p Chassi Longo Diesel",
  "Band.Picape CD 4p Chassi Longo Diesel",
  "Band.Picape Chassi Curto Diesel",
  "Band.Picape Chassi Longo Diesel",
  "Camry LE",
  "Camry SW LE 2.2 16V",
  "Camry SW XLE 3.0 24V",
  "Camry XLE 3.0 24V 186cv",
  "Camry XLE 3.5 24V Aut.",
  "Celica GT 2.2 16V",
  "Celica ST 1.8",
  "Corolla ALTIS 2.0 Flex 16V Aut.",
  "Corolla Altis Hybrid 1.8 16V Flex Aut.",
  "Corolla Altis Prem. Hybrid 1.8 Flex Aut",
  "Corolla DX/ SW DX 1.6 16V",
  "Corolla Dynamic 2.0 Flex 16V Aut.",
  "Corolla Fielder SW 1.8/1.8 XEi Flex Aut.",
  "Corolla Fielder SW 1.8/1.8 XEi Flex Mec",
  "Corolla Fielder SW S  1.8 16V 136cv Aut",
  "Corolla Fielder SW S 1.8 16V 136cv Mec",
  "Corolla Fielder SW SE-G 1.8 Flex 16V Aut",
  "Corolla GLi 1.6 16V",
  "Corolla GLi 1.8 Flex 16V  Aut.",
  "Corolla GLi 1.8 Flex 16V Mec.",
  "Corolla GLi 2.0 16V Flex Aut.",
  "Corolla GLi Upper 1.8 Flex 16V Aut.",
  "Corolla GLi Upper Black P. 1.8 Flex Aut.",
  "Corolla LE 1.8",
  "Corolla LE 2.2 16V",
  "Corolla S 1.8 16V 136cv Aut",
  "Corolla S 1.8 16V 136cv Mec",
  "Corolla SE-G 1.8 16V Mec.",
  "Corolla SE-G 1.8/1.8 Flex 16V Aut.",
  "Corolla SW LE 1.8/ XLi 1.6 16V",
  "Corolla WG",
  "Corolla XEi 1.8/1.8 Flex 16V Aut.",
  "Corolla XEi 1.8/1.8 Flex 16V Mec.",
  "Corolla XEi 2.0 Flex 16V Aut.",
  "Corolla XLi 1.6 16V 110cv Aut.",
  "Corolla XLi 1.6 16V 110cv Mec.",
  "Corolla XLi 1.8/1.8 Flex 16V Aut.",
  "Corolla XLi 1.8/1.8 Flex 16V Mec.",
  "Corolla XRS 2.0 Flex 16V Aut.",
  "Corona Aut.",
  "Corona GLi Mec",
  "Corona Mec.",
  "ETIOS 1.3 Flex 16V 5p Mec.",
  "ETIOS CROSS 1.5 Flex 16V 5p Aut.",
  "ETIOS CROSS 1.5 Flex 16V 5p Mec.",
  "ETIOS PLATINUM 1.5 Flex 16V 4p Aut.",
  "ETIOS PLATINUM 1.5 Flex 16V 5p Mec.",
  "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Aut.",
  "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Mec.",
  "ETIOS READY! 1.5 Flex 16V 5p Aut.",
  "ETIOS X 1.3 Flex 16V 5p Aut.",
  "ETIOS X 1.3 Flex 16V 5p Mec.",
  "ETIOS X Plus 1.5 Flex 16V 5p Aut.",
  "ETIOS X Plus 1.5 Flex 16V 5p Mec.",
  "ETIOS X Plus Sedan 1.5 Flex 16V 4p Aut.",
  "ETIOS X Plus Sedan 1.5 Flex 16V 4p Mec.",
  "ETIOS X Sedan 1.5 Flex 16V 4p Aut.",
  "ETIOS X Sedan 1.5 Flex 16V 4p Mec.",
  "ETIOS XLS 1.5 Flex 16V 5p Mec.",
  "ETIOS XLS 1.5 Flex 5p Aut.",
  "ETIOS XLS Sedan 1.5 Flex 16V 4p Aut.",
  "ETIOS XLS Sedan 1.5 Flex 16V 4p Mec.",
  "ETIOS XS  1.3 Flex 16V 5p Mec.",
  "ETIOS XS 1.5 Flex 16V 5p Aut.",
  "ETIOS XS 1.5 Flex 16V 5p Mec.",
  "ETIOS XS Sedan 1.5 Flex 16V 4p Aut.",
  "ETIOS XS Sedan1.5 Flex 16V 4p Mec.",
  "Hilux 4x2 2.4 Diesel",
  "Hilux 4x2 2.8 Diesel",
  "Hilux CD 4x2 2.4 Diesel",
  "Hilux CD 4x4 2.7 16V Flex Mec.",
  "Hilux CD 4x4 2.8 Diesel Mec.",
  "Hilux CD D4-D 4x2 2.5 16V 102cv TB Dies.",
  "Hilux CD D4-D 4x4 2.5 16V 102cv TB Dies.",
  "Hilux CD D4-D 4x4 3.0 TDI Dies. Mec.",
  "Hilux CD DLX 4x2 2.8 Diesel",
  "Hilux CD DLX 4x4 2.8 Diesel",
  "Hilux CD DX 4x2 2.7 16V 142cv",
  "Hilux CD DX 4x2 3.0 8V 90cv Diesel",
  "Hilux CD DX 4x4 3.0 8V 90cv Diesel",
  "Hilux CD GR-S 4x4 2.8 TDI Dies. Aut.",
  "Hilux CD GR-S 4x4 4.0 V6 234cv Aut.",
  "Hilux CD Limited 4x4 3.0 TDI Diesel Aut.",
  "Hilux CD SR 4x2 2.7 16V/2.7 Flex Aut.",
  "Hilux CD SR 4x2 2.7 16V/2.7 Flex Mec.",
  "Hilux CD SR 4x4 2.8 TDI Diesel Aut.",
  "Hilux CD SR 4x4 3.0 8V 116cv TB Diesel",
  "Hilux CD SR 4x4 3.0 8V 90cv Diesel",
  "Hilux CD SR CHALL. 4x4 2.8 TDI Dies Aut.",
  "Hilux CD SR D4-D 4x2 3.0 163cv TDI Dies.",
  "Hilux CD SR D4-D 4x4 3.0  TDI Dies.",
  "Hilux CD SR D4-D 4x4 3.0 TDI Dies Aut.",
  "Hilux CD SR5 4x4 2.8 Diesel",
  "Hilux CD SRV 4x2 2.7 16V 142cv",
  "Hilux CD SRV 4x2 2.7 Flex 16V Aut.",
  "Hilux CD SRV 4x2 3.0 8V 90cv Diesel",
  "Hilux CD SRV 4x4 2.7 Flex 16V Aut.",
  "Hilux CD SRV 4x4 2.8 TDI Diesel Aut.",
  "Hilux CD SRV 4x4 3.0 8V 116cv TB Diesel",
  "Hilux CD SRV D4-D 4x2 3.0 163cv TDI Dies",
  "Hilux CD SRV D4-D 4x4 3.0  TDI Dies",
  "Hilux CD SRV D4-D 4x4 3.0 TDI Diesel Aut",
  "Hilux CD SRX 4x4 2.8 TDI 16V Diesel Aut.",
  "Hilux Chassi 4x4 2.8 TDI Diesel Mec.",
  "Hilux Chassi D4-D 4x4 2.5 102cv TB Dies.",
  "Hilux Chassi D4-D 4x4 3.0 TDI Dies. Mec.",
  "Hilux CS 4x4 2.4 Diesel",
  "Hilux CS 4x4 2.8 TDI Diesel Mec.",
  "Hilux CS D4-D 4x2 2.5 16V 102cv TB Dies.",
  "Hilux CS D4-D 4x4 2.5 16V 102cv TB Dies.",
  "Hilux CS D4-D 4x4 3.0 TDI Dies. Mec.",
  "Hilux CS DLX 4x2 2.8 Diesel",
  "Hilux CS DLX 4x4 2.8 Diesel",
  "Hilux CS DX 4x2 2.7 16V 142cv",
  "Hilux CS DX 4x2 3.0 8V 90cv Diesel",
  "Hilux CS DX 4x4 3.0 8V 90cv Diesel",
  "Hilux CS SR5 4x4 2.8 Diesel",
  "Hilux CS SRV 4x2 2.7 16V 142cv",
  "Hilux SW4 2.7 16V",
  "Hilux SW4 3.4 V6",
  "Hilux SW4 4x4 2.4 8V",
  "Hilux SW4 4x4 2.8 Diesel",
  "Hilux SW4 4x4 3.0 12V V6",
  "Hilux SW4 4x4 3.0 24V V6",
  "Hilux SW4 4x4 3.0 8V TB Diesel",
  "Hilux SW4 SR 4x2 2.7/ 2.7 Flex 16V Aut.",
  "Hilux SW4 SR 4x2 2.7/2.7 Flex 16V Mec.",
  "Hilux SW4 SR D4-D 4x4 3.0 TDI Dies. Aut",
  "Hilux SW4 SRV 4x2 2.7 Flex 16V Aut.",
  "Hilux SW4 SRV 4x4 4.0 V6 24V Aut.",
  "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Aut",
  "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Mec",
  "Hilux SW4 SRX 4x4 2.8 TDI 16V Dies. Aut.",
  "Hilux SW4 SRX 4x4 4.0 V6 24V Aut.",
  "Hilux SW4 SRX Diamo. 4x4 2.8 TB Die Aut.",
  "Land Cruiser 4WD 4.5 24V",
  "Land Cruiser Prado 3.0 4x4 TB Diesel Aut",
  "Land Cruiser Prado 3.0 4x4 TB Diesel Mec",
  "MR-2 Turbo 2.0",
  "Paseo",
  "Previa LE 2.4 16V",
  "Previa LX 2.5",
  "PRIUS Hybrid 1.8 16V 5p Aut.",
  "RAV4 2.0 4x2 16V Aut.",
  "RAV4 2.0 4x4 16V Aut.",
  "RAV4 2.0 4x4 16V Mec.",
  "RAV4 2.0 HIGH 4x2 16V Aut.",
  "RAV4 2.0 TOP 4x2 16V Aut.",
  "RAV4 2.4 4x2 16V 170cv Aut.",
  "RAV4 2.4 4x4 16V 170cv Aut.",
  "RAV4 2.5 4x4 16V Aut.",
  "RAV4 2.5 S 4x4 Hybrid Aut.",
  "RAV4 2.5 S Connect 4x4 Hybrid Aut.",
  "RAV4 2.5 SX 4x4 Hybrid Aut.",
  "RAV4 2.5 SX Connect 4x4 Hybrid Aut.",
  "Supra",
  "T-100 3.4 V6",
  "YARIS XL 1.3 Flex 16V 5p Aut.",
  "YARIS XL 1.3 Flex 16V 5p Mec.",
  "YARIS XL Live 1.3 Flex 16V 5p Aut.",
  "YARIS XL Live 1.3 Flex 16V 5p Mec.",
  "YARIS XL Live Sedan 1.5 Flex 16V 4p Aut.",
  "YARIS XL Live Sedan 1.5 Flex 16V 4p Mec.",
  "YARIS XL Plus Con. 1.5 Flex 16V 5p Aut.",
  "YARIS XL Plus Con. Sed. 1.5 Flex 16V Aut",
  "YARIS XL Plus T. Sed. 1.5 Flex 16V Aut.",
  "YARIS XL Plus Tech 1.3 Flex 16V Aut.",
  "YARIS XL Sedan 1.5 Flex 16V 4p Aut.",
  "YARIS XL Sedan 1.5 Flex 16V 4p Mec.",
  "YARIS XLS 1.5 Flex 16V 5p Aut.",
  "YARIS XLS Connect 1.5 Flex 16V 5p Aut.",
  "YARIS XLS Connect Sed. 1.5 Flex 16V Aut.",
  "YARIS XLS Sedan 1.5 Flex 16V 4p Aut.",
  "YARIS XS 1.5 Flex 16V 5p Aut.",
  "YARIS XS Connect 1.5 Flex 16V 5p Aut.",
  "YARIS XS Connect Sedan 1.5 Flex 16V Aut.",
  "YARIS XS Sedan 1.5 Flex 16V 4p Aut.",
  "YARIS X-WAY 1.5 Flex 16V 5p Aut.",
  "YARIS X-WAY Connect 1.5 Flex 16V 5p Aut.",
];

var year = ["2014 Gasolina", "2013 Gasolina"];

const searchBtn = document.querySelector(".principal__search__button");
const inputDiv = document.querySelector(".autocomplete");
const firstHighlight = document.querySelector(".search__steps--first");
const secondHighlight = document.querySelector(".search__steps--second");
const thirdHighlight = document.querySelector(".search__steps--third");
const restartBtn = document.querySelector(".search__restart");
const principalSection = document.querySelector(".principal");
const resultsSection = document.querySelector(".search__results");
const activeColor = `#1a3166`;
const inactiveColor = `#d9e5ff`;

let step = inputDiv.innerHTML;
var marcaEscolhida = "Toyota";
var stepOneHTML = `<input id="brandsInput" type="text" placeholder="Digite aqui o nome da marca" />`;
var stepTwoHTML = `<input id="modelsInput" type="text" placeholder="Qual modelo da ${marcaEscolhida}?" />`;
var stepTreeHTML = `<input id="yearInput" type="text" placeholder="Por último, o ano do modelo" />`;
var firstStep = "brandsInput";
var secondStep = "modelsInput";
var thirdStep = "yearInput";

function searchStepSelector(step) {
  arrayStep = step.split('"');
  if (arrayStep.includes(firstStep)) {
    firstHighlight.style.backgroundColor = activeColor;
    console.log(1);
  } else if (arrayStep.includes(secondStep)) {
    console.log(2);
    secondHighlight.style.backgroundColor = activeColor;
    searchBtn.onclick = changeNextStep;
  } else if (arrayStep.includes(thirdStep)) {
    console.log(3);
    thirdHighlight.style.backgroundColor = activeColor;
    searchBtn.onclick = searchModel;
    console.log(searchBtn.onclick);
  }
}

function changeStep() {
  searchBtn.onclick = changeNextStep;
}

function changeNextStep() {
  inputDiv.innerHTML = stepTreeHTML;
  autocomplete(document.getElementById("yearInput"), year);
  searchStepSelector(inputDiv.innerHTML);
}

function searchModel() {
  console.log("funcionei");
  principalSection.style.display = "none";
  resultsSection.style.display = "block";
}

searchStepSelector(step);

restartBtn.onclick = () => {
  secondHighlight.style.backgroundColor = inactiveColor;
  thirdHighlight.style.backgroundColor = inactiveColor;
  principalSection.style.display = "block";
  resultsSection.style.display = "none";
  stepOne();
  searchStepSelector(step);
};

function stepOne() {
  inputDiv.innerHTML = stepOneHTML;
  searchBtn.onclick = () => {
    inputDiv.innerHTML = stepTwoHTML;
    autocomplete(document.getElementById("modelsInput"), models);
    searchStepSelector(inputDiv.innerHTML);
  };
}

setTimeout(() => {
  autocomplete(document.getElementById("brandsInput"), brands);
}, 100);

stepOne();
