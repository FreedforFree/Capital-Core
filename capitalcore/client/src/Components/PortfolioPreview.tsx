import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-colorschemes";
import { plugins } from "chart.js/dist/core";

export default function PortfolioPreview() {
    function changeSelection (n:String) {
        let all_btns = document.querySelectorAll("button");
        all_btns.forEach(b => b.style.background = "#d9d9d9");
        const btn = document.getElementById("button-" + String(n)).style.background = "#acacac";
    }
    useEffect (() =>{
        createLineChart();
        createDonutChart()
    }, [])
    function createDonutChart() {
        const colors = ["#FFD700","#022C43","#053F5E","#115173","#79D1FF"]
        const chart = Chart.getChart("donut-chart");
        const cvx = document.getElementById("donut-chart");
        if (!chart) {
            const donutChart = new Chart(cvx, {
                type: "doughnut",
                data: {
                    labels: [1,2,3,4],
                    datasets : [{
                        label: "Portfolio",
                        data: [30,20,40,10]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        colorschemes: {
                            scheme: colors,
                        }
                    }
                }
            })
            const alloc = document.getElementById("portfolio-allocation");
            for (let i=0; i<donutChart.data.labels.length; i++) {
                let p = document.createElement("p")
                p.innerHTML = String(donutChart.data.labels[i] + " ") + String(donutChart.data.datasets[0].data[i] + "%");
                p.style.color = "white";
                p.style.fontSize = "2.5vw"
                p.style.margin = "0px"
                p.style.padding = "3px"
                p.style.background = "#022C43"
                alloc.append(p);
            }
        }
    }    
    function createLineChart() {
        const chart = Chart.getChart("line-chart");
        const cnv = document.getElementById("line-chart");
        if (!chart) {
        const lineChart = new Chart(cnv, {
            type: "line",
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10],
                datasets:[{
                    label: "Price",
                    data: [10,30,20,50,70,60,90,100,80,90]
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales : {
                    x: {
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: true,
                        }
                    }
                },
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        })}
    }
    return(
        <section>
            <div className="preview-container">
                <h2 className="preview-text">Create, Customize and Save your Portfolios.</h2>
                <div className="portfolio-previews">
                    <div className="preview1"></div>
                    <div className="preview2">
                        <div className="preview-top-row">
                            <h6 className="portfolio-title">Your Portfolio</h6>
                            <div className="interval-selectors">
                                <button id="button-m" className="interval-button" onClick={() => changeSelection("m")}>1m</button>
                                <button id="button-w" className="interval-button" onClick={() => changeSelection("w")}>1w</button>
                                <button id="button-d" className="interval-button" onClick={() => changeSelection("d")}>1d</button>
                                <button id="button-h" className="interval-button" onClick={() => changeSelection("h")}>1h</button>
                            </div>
                        </div>
                        <div className="portfolio-chart">
                            <canvas className="line-chart" id="line-chart"></canvas>
                        </div>
                        <div className="bottom-row">
                            <div className="portfolio-donut">
                                <canvas id="donut-chart"></canvas>
                            </div>
                            <div className="portfolio-allocation" id="portfolio-allocation">
                            </div>
                        </div>
                    </div>
                    <div className="preview3"></div>
                </div>
            </div>
        </section>
    )
}