import { Component, OnInit } from "@angular/core";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend
);

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx: any;
  public datasets: any;
  public data: any;
  public myChartData: any;
  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;

  ngOnInit(): void {

    const gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#f5f5f5",
          titleColor: "#333",
          bodyColor: "#666",
          padding: 12,
          mode: "nearest",
          intersect: false
        }
      },
      scales: {
        x: {
          ticks: { padding: 20, color: "#9a9a9a" },
          grid: { drawBorder: false }
        },
        y: {
          ticks: { padding: 20, color: "#9a9a9a", suggestedMin: 60, suggestedMax: 125 },
          grid: { drawBorder: false }
        }
      }
    };

    const gradientChartOptionsConfigurationWithTooltipGreen =
      structuredClone(gradientChartOptionsConfigurationWithTooltipRed);

    const gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#f5f5f5",
          titleColor: "#333",
          bodyColor: "#666",
          padding: 12
        }
      },
      scales: {
        x: {
          ticks: { padding: 20, color: "#9e9e9e" },
          grid: { drawBorder: false }
        },
        y: {
          ticks: { padding: 20, color: "#9e9e9e", suggestedMin: 60, suggestedMax: 120 },
          grid: { drawBorder: false }
        }
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");
    let gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(233,32,16,0)");

    new Chart(this.ctx, {
      type: "line",
      data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#ec250d",
          borderWidth: 2,
          pointBackgroundColor: "#ec250d",
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    });

    this.canvas = document.getElementById("chartLineGreen");
    this.ctx = this.canvas.getContext("2d");
    gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)");
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)");

    new Chart(this.ctx, {
      type: "line",
      data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          pointBackgroundColor: "#00d6b4",
          pointRadius: 4,
          data: [90, 27, 60, 12, 80]
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipGreen
    });

    const chart_labels = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    this.datasets = [
      [100,70,90,70,85,60,75,60,90,80,110,100],
      [80,120,105,110,95,105,90,100,80,95,70,120],
      [60,80,65,130,80,105,90,130,70,115,60,130]
    ];
    this.data = this.datasets[0];

    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");
    gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(233,32,16,0)");

    this.myChartData = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#ec250d",
          borderWidth: 2,
          pointBackgroundColor: "#ec250d",
          pointRadius: 4,
          data: this.data
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    });

    this.canvas = document.getElementById("CountryChart");
    this.ctx = this.canvas.getContext("2d");
    gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)");

    new Chart(this.ctx, {
      type: "bar",
      data: {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [{
          label: "Countries",
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          data: [53, 20, 10, 80, 100, 45]
        }]
      },
      options: gradientBarChartConfiguration
    });
  }

  public updateOptions(): void {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
