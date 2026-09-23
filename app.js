// SQL check
function checkSQL() {
    let query = document.getElementById("sqlInput").value;

    fetch("/predict_sql", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query: query})
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("sqlResult").innerText = data.result;
    });
}


// Chart
let ctx = document.getElementById("ddosChart").getContext("2d");

let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "DDoS Probability",
            data: [],
            borderWidth: 2
        }]
    }
});


// Simulate real-time
function simulateDDoS() {
    setInterval(() => {

        let fakeFeatures = [
            Math.random()*1000,
            Math.random()*100,
            Math.random()*5000,
            Math.random()*200,
            Math.random()*50
        ];

        fetch("/predict_ddos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({features: fakeFeatures})
        })
        .then(res => res.json())
        .then(data => {

            let prob = data.probability;

            chart.data.labels.push("");
            chart.data.datasets[0].data.push(prob);

            if(chart.data.labels.length > 20) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
            }

            chart.update();
        });

    }, 1000);
}


// Language switch (basic demo)
function changeLang() {
    alert("Language switching demo 😏");
}