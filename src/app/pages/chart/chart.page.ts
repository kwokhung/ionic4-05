import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as ECharts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  @ViewChild('chartA') chartADom: ElementRef;

  chartA: ECharts.ECharts;
  optionA: ECharts.EChartOption;

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.chartA = ECharts.init(this.chartADom.nativeElement);

    this.optionA = {
      backgroundColor: '#2c343c',
      visualMap: [
        {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        }
      ],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '30%',
          roseType: 'angle',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
          ]
        }
      ]
    };

    this.chartA.setOption(this.optionA);
  }
}
