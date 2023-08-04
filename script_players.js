var ctx = document.getElementById("myChart").getContext("2d");
var chart_type = ["bar", "line"];

/*
1. Neeraj Chopra
2. P. V. Sindhu
3. Yuto Horigome
4. RAYSSA LEAL
5. KATIE LEDECKY
6. KRISTOF MILAK
7. KAYLEE MCKEOWN
8. CAELEB DRESSE
9. FLORA DUFFY
10. ARMAND DUPLANTIS
11. SHELLY-ANN FRASER-PRYCE
12. WINFRED MUTILE YAVI
13. YAROSLAVA MAHUCHIKH
14. YULIMAR ROJAS
15. CARLOS YULO
16. ALAA MASO
17. SERENA WILLIAMS
18. ELIN RUBENSSON
19. CARISSA MOORE
20. FILIPE TOLEDO
21. TOMOA NARASAKI
22. NATALIA GROSSMAN
23. TADEJ POGACAR
24. ELIUD KIPCHOGE
*/


var player_img =
    [
        "PlayersPic/plr8.jpg",
        "PlayersPic/plr15.jpg",
        "PlayersPic/plr1jpg.jpg",
        "PlayersPic/plr2.jpg",
        "PlayersPic/plr3.jpg",
        "PlayersPic/plr4.jpg",
        "PlayersPic/plr5.jpg",
        "PlayersPic/plr6.jpg",
        "PlayersPic/plr7.jpg",
        "PlayersPic/plr9.jpg",
        "PlayersPic/plr10.jpg",
        "PlayersPic/plr11.jpg",
        "PlayersPic/plr12.jpg",
        "PlayersPic/plr13.jpg",
        "PlayersPic/plr14.jpg",
        "PlayersPic/plr16.jpg",
        "PlayersPic/plr17.jpg",
        "PlayersPic/plr18.jpg",
        "PlayersPic/plr19.jpg",
        "PlayersPic/plr20.jpg",
        "PlayersPic/plr21.jpg",
        "PlayersPic/plr22.jpg",
        "PlayersPic/plr23.jpg",
        "PlayersPic/plr24.jpg",

    ]

var player_labels =
    [["2016", "2017", "2018", "2019", "2021"],
    ["2016", "2017", "2018", "2019", "2021"],
    ["2016", "2017", "2018", "2019", "2021"],
    ["2018", "2019", "2020", "2021"],
    ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021"],
    ["2019", "2020", "2021", "2022"],
    ["2018", "2019", "2020", "2021"],
    ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2017", "2018", "2019", "2020", "2021", "2022"],
    ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2017", "2018", "2019", "2020", "2021", "2022"],
    ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
    ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2017", "2018", "2019", "2020", "2021", "2022"],
    ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    ["2019", "2020", "2021", "2022"],
    ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
    ];


var dataset_data =
    [[82.23, 83.03, 86.48, 86.37, 87.58],
    [13, 15, 17, 20, 25],
    [15, 17, 19, 21, 23],
    [12, 14, 16, 18],
    [804.79, 807.52, 806.59, 804.69, 804.79, 807.39, 807.01, 812.12, 810.57],
    [50.62, 50.69, 50.76, 50.79],
    [58.59, 57.72, 57.47, 57.40],
    [13, 15, 17, 20, 22, 25, 30],
    [14, 16, 18, 21, 23, 26, 31],
    [5.65, 5.80, 6.05, 6.17, 6.18, 6.20, 6.20],
    [10.75, 10.87, 10.73, 10.71, 10.70, 10.86, 10.94, 10.74, 10.71, 10.69, 10.83, 10.67, 10.60, 10.67, 10.67],
    [196.04, 194.36, 198.26, 196.43, 196.01, 195.89, 191.10, 190.61],
    [1.92, 1.94, 2.00, 2.02, 2.05, 2.06],
    [14.69, 14.71, 14.91, 15.36, 15.41, 15.67, 15.63, 15.74, 15.74],
    [80.566, 81.450, 83.249, 82.433, 84.700, 86.299],
    [79.03, 79.95, 81.70, 82.95, 84.78, 86.18, 86.95],
    [67, 72, 68, 72, 63, 61, 67, 67],
    [21, 18, 19, 21, 17, 16, 20, 21, 15, 0, 0],
    [1, 1, 0, 1, 1, 1, 2, 4, 2, 3, 0, 0],
    [0, 1, 1, 2, 3, 4, 2, 1, 0],
    [2, 3, 1, 3, 4, 1],
    [1, 2, 1, 2, 1, 1, 2],
    [2, 3, 3, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 0, 0]
    ];

var dataset_labels =
    ["Neeraj CHOPRA Best Throw",
        "P. V. Sindhu Performance",
        "Yuto Horigome Skateboarding Performance",
        "Rayssa Leal Skateboarding Performance",
        "Katie Ledecky 800m Freestyle Performance",
        "Kristof Milak 100m Butterfly Performance",
        "Kaylee McKeown 100m Backstroke Performance",
        "Caeleb Dressel Swimming Performance",
        "Armand Duplantis Pole Vaulting Performance",
        "Shelly-Ann Fraser-Pryce 100m Performance",
        "Winfred Mutile Yavi 1500m Performance",
        "Yaroslava Mahuchikh High Jump Performance",
        "Yulimar Rojas Triple Jump Performance",
        "Carlos Yulo All-Around Performance",
        "Alaa Maso All-Around Performance",
        "Serena Williams Singles Performance",
        "Elin Rubensson Singles Performance",
        "Carissa Moore Singles Performance",
        "Filipe Toledo Singles Performance",
        "Tomoa Narasaki Singles Performance",
        "Natalia Grossman Singles Performance",
        "Tadej Pogačar Singles Performance",
        "Eliud Kipchoge Singles Performance"
    ];

var background_Color =
    [["rgb(238, 165, 148)",
        "rgb(135, 123, 54)",
        "rgb(195, 205, 246)",
        "rgb(214, 83, 67)",
        "rgb(185, 137, 30)",
        "rgb(142, 122, 234)",
        "rgb(139, 111, 36)",
        "rgb(172, 85, 24)",
        "rgb(71, 17, 228)",
        "rgb(2, 206, 73)",
        "rgb(73, 61, 206)",
        "rgb(122, 18, 129)",
        "rgb(173, 225, 208)",
        "rgb(107, 93, 170)",
        "rgb(2, 129, 101)",
        "rgb(142, 227, 54)",
        "rgb(94, 234, 199)",
        "rgb(232, 225, 227)",
        "rgb(184, 205, 67)",
        "rgb(56, 209, 7)"],
    ["rgb(238, 165, 148)",
        "rgb(135, 123, 54)",
        "rgb(195, 205, 246)",
        "rgb(214, 83, 67)",
        "rgb(185, 137, 30)",
        "rgb(142, 122, 234)",
        "rgb(139, 111, 36)",
        "rgb(172, 85, 24)",
        "rgb(71, 17, 228)",
        "rgb(2, 206, 73)",
        "rgb(73, 61, 206)",
        "rgb(122, 18, 129)",
        "rgb(173, 225, 208)",
        "rgb(107, 93, 170)",
        "rgb(2, 129, 101)",
        "rgb(142, 227, 54)",
        "rgb(94, 234, 199)",
        "rgb(232, 225, 227)",
        "rgb(184, 205, 67)",
        "rgb(56, 209, 7)"],
        "rgba(0,0,255,1.0)"
    ]

var min =
    [82.23,
        13,
        15,
        12,
        804,
        50.62,
        57.4,
        13,
        14,
        5.65,
        10.60,
        190.00,
        1.90,
        14.60,
        80.00,
        78.00,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]

var max =
    [87.58,
        25,
        23,
        18,
        812,
        50.8,
        58.6,
        30,
        31,
        6.25,
        10.87,
        198.00,
        2.10,
        15.80,
        87.00,
        87.00,
        75,
        25,
        5,
        5,
        5,
        3,
        4,
        3
    ]
var i = 0;

console.log(i);
var j = 1;

// Function to update the chart with new dataset
function updateChart() {
    myChart.data.labels = player_labels[i];
    myChart.data.datasets[0].data = dataset_data[i];
    myChart.options.title.text = dataset_labels[i];
    myChart.options.scales.yAxes[0].ticks.min = min[i];
    myChart.options.scales.yAxes[0].ticks.max = max[i];
    myChart.update();
}

// Function to update the chart type
function updateChartType() {
    myChart.destroy(); // Clear the previous chart instance
    myChart = new Chart(ctx, {
        type: chart_type[j],
        data: {
            labels: player_labels[i],
            datasets: [
                {
                    label: "Olympic Player",
                    data: dataset_data[i],
                    backgroundColor: background_Color[j],
                    borderColor: "rgba(0,0,255,0.1)",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                text: dataset_labels[i]
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: min[i],
                        max: max[i]
                    }
                }]
            }
        }
    });
}

// Create the initial chart
var myChart = new Chart(ctx, {
    type: chart_type[j],
    data: {
        labels: player_labels[i],
        datasets: [
            {
                label: "Olympic Player",
                data: dataset_data[i],
                backgroundColor: background_Color[j],
                borderColor: "rgba(0,0,255,0.1)",
                fill: false
            }
        ]
    },
    options: {
        title: {
            text: dataset_labels[i]
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: min[i],
                    max: max[i]
                }
            }]
        }
    }
});

var div = document.getElementById("div1");
div.setAttribute("id", "div1");
div.onclick = function () {
    i = 3;
    j = 0;
    updateChartType();
};

var div = document.getElementById("div2");
div.setAttribute("id", "div2");
div.onclick = function () {
    i = 3;
    j = 1;
    updateChartType();
};

var h3Tag = document.getElementById("changeText");
var imgTag = document.getElementById("changeImage");
var absoluteDiv = document.getElementById("imgpreview");
var absolutePosition = document.querySelector(".imgpreview .preview");

function closePopUp() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
    } else {
        absoluteDiv.style.display = "none";
    }
}


function toggleDiv1() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "150px";
        i = 2;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv2() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "150px";
        i = 3;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv3() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "150px";
        i = 4;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv4() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "150px";
        i = 5;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv5() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "350px";
        i = 6;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv6() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "350px";
        i = 7;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv7() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "350px";
        i = 8;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv8() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "350px";
        i = 0;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv9() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "550px";
        i = 9;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv10() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "550px";
        i = 10;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv11() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "550px";
        i = 11;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv12() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "550px";
        i = 12;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv13() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "950px";
        i = 13;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv14() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "950px";
        i = 14;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv15() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "950px";
        i = 1;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}


function toggleDiv16() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "950px";
        i = 15;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv17() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 16;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}


function toggleDiv18() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 17;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}


function toggleDiv19() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 18;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}


function toggleDiv20() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 19;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv21() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 20;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv22() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 21;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv23() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 22;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}

function toggleDiv24() {
    if (absoluteDiv.style.display === "none") {
        absoluteDiv.style.display = "block";
        absolutePosition.style.top = "1100px";
        i = 23;
        h3Tag.textContent = dataset_labels[i];
        imgTag.src = player_img[i];
        updateChart();
    } else {
        absoluteDiv.style.display = "none";
    }
}



