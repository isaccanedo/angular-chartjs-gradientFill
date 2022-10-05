
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;
  @ViewChild('myCanvas')
  canvas!: ElementRef;

  public chartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
  public chartData: ChartDataSets[] = [
    {data: [26,	21, 35, 42, 99], label: 'Data 1', fill: true},
    {data: [16,	41, 75, 92, 12], label: 'Data 2', fill: false},
    {data: [88,	71, 75, 12, 33], label: 'Data 3', fill: false}]; 
    

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public chartColors: Color[] = [
    {
    backgroundColor:
    "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
    borderColor: "purple",
    pointBackgroundColor: "rgba(148,159,177,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
    ];

  ngAfterViewInit(): void {
      const ctx = this.canvas.nativeElement.getContext('2d');   
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
      gradientFill.addColorStop(1, "rgba(199, 150, 239, 0.1)");
      gradientFill.addColorStop(0, "rgba(199, 150, 239, 1)");

      this.chartColors = [{       
        backgroundColor: gradientFill
      }];
  }
}