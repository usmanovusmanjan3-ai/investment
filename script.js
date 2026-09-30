// ==========================================
// VELORA INVESTMENT DASHBOARD
// ==========================================


// ==========================================
// PORTFOLIO GROWTH CHART
// ==========================================

const portfolioCanvas =
    document.getElementById("portfolioChart");

const portfolioChart =
    new Chart(portfolioCanvas, {

        type: "line",

        data: {

            labels: [
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentabr"
            ],

            datasets: [

                {
                    label: "Portfolio",

                    data: [
                        14200,
                        15800,
                        17100,
                        18500,
                        20100,
                        22400,
                        24850
                    ],

                    borderColor: "#ffd21f",

                    backgroundColor:
                        "rgba(255,210,31,0.08)",

                    borderWidth: 3,

                    pointBackgroundColor:
                        "#ffd21f",

                    pointBorderColor:
                        "#050505",

                    pointBorderWidth: 2,

                    pointRadius: 4,

                    tension: 0.4,

                    fill: true
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#555",

                        font: {
                            size: 10
                        }
                    }

                },

                y: {

                    grid: {
                        color:
                            "rgba(255,255,255,0.05)"
                    },

                    ticks: {

                        color: "#555",

                        font: {
                            size: 10
                        },

                        callback: function(value) {

                            return "$" +
                                value.toLocaleString();

                        }

                    }

                }

            }

        }

    });


// ==========================================
// PORTFOLIO ALLOCATION CHART
// ==========================================

const allocationCanvas =
    document.getElementById("allocationChart");

const allocationChart =
    new Chart(allocationCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Aksiyalar",
                "Kripto",
                "Oltin",
                "Naqd"
            ],

            datasets: [

                {

                    data: [
                        45,
                        25,
                        20,
                        10
                    ],

                    backgroundColor: [
                        "#ffd21f",
                        "#b88600",
                        "#fff3a3",
                        "#444444"
                    ],

                    borderColor:
                        "#0b0b0b",

                    borderWidth: 4,

                    hoverOffset: 8

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "72%",

            plugins: {

                legend: {
                    display: false
                }

            }

        }

    });


// ==========================================
// PERIOD SELECT
// ==========================================

const period =
    document.getElementById("period");

period.addEventListener(
    "change",
    function() {

        if (this.value === "30 kun") {

            portfolioChart.data.labels = [
                "1",
                "5",
                "10",
                "15",
                "20",
                "25",
                "30"
            ];

            portfolioChart.data.datasets[0].data = [
                22600,
                23100,
                22900,
                23800,
                24100,
                24600,
                24850
            ];

        }

        else if (this.value === "1 yil") {

            portfolioChart.data.labels = [
                "Okt",
                "Noy",
                "Dek",
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "Iyun",
                "Iyul",
                "Avg",
                "Sen"
            ];

            portfolioChart.data.datasets[0].data = [
                10500,
                11700,
                12900,
                13800,
                14200,
                15800,
                17100,
                18500,
                20100,
                21800,
                23200,
                24850
            ];

        }

        else {

            portfolioChart.data.labels = [
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentabr"
            ];

            portfolioChart.data.datasets[0].data = [
                14200,
                15800,
                17100,
                18500,
                20100,
                22400,
                24850
            ];

        }

        portfolioChart.update();

    }
);


// ==========================================
// MODAL
// ==========================================

const modal =
    document.getElementById("investmentModal");

const addInvestment =
    document.getElementById("addInvestment");

const closeModal =
    document.getElementById("closeModal");

const saveInvestment =
    document.getElementById("saveInvestment");

const assetInput =
    document.getElementById("assetInput");

const quantityInput =
    document.getElementById("quantityInput");


addInvestment.addEventListener(
    "click",
    function() {

        modal.classList.add("show");

        assetInput.focus();

    }
);


closeModal.addEventListener(
    "click",
    function() {

        modal.classList.remove("show");

    }
);


// Modal tashqarisiga bosilganda yopish

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    }
);


// ==========================================
// YANGI INVESTITSIYA QO'SHISH
// ==========================================

saveInvestment.addEventListener(
    "click",
    function() {

        const asset =
            assetInput.value.trim();

        const quantity =
            quantityInput.value.trim();


        if (
            asset === "" ||
            quantity === ""
        ) {

            alert(
                "Iltimos, barcha maydonlarni to‘ldiring."
            );

            return;

        }


        alert(
            `${asset} — ${quantity} birlik portfolioingizga qo‘shildi!`
        );


        assetInput.value = "";

        quantityInput.value = "";

        modal.classList.remove("show");

    }
);


// ==========================================
// SIDEBAR MENU
// ==========================================

const menuItems =
    document.querySelectorAll(
        ".sidebar nav a"
    );


menuItems.forEach(item => {

    item.addEventListener(
        "click",
        function() {

            menuItems.forEach(
                menu =>
                    menu.classList.remove(
                        "active"
                    )
            );

            this.classList.add("active");

        }
    );

});


// ==========================================
// NOTIFICATION
// ==========================================

const notificationButton =
    document.querySelector(".icon-btn");

notificationButton.addEventListener(
    "click",
    function() {

        alert(
            "🔔 Hozircha yangi bildirishnomalar yo‘q."
        );

    }
);


// ==========================================
// VIEW ALL
// ==========================================

const viewAll =
    document.querySelector(".view-all");

viewAll.addEventListener(
    "click",
    function() {

        alert(
            "Barcha aktivlar sahifasi tez orada qo‘shiladi."
        );

    }
);