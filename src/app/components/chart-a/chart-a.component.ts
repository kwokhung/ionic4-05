import { Component, ElementRef, Renderer, OnInit, HostListener } from '@angular/core';

import * as ECharts from 'echarts';

@Component({
  selector: 'app-chart-a',
  templateUrl: './chart-a.component.html',
  styleUrls: ['./chart-a.component.scss']
})
export class ChartAComponent implements OnInit {

  nativeElement: any;
  chartA: ECharts.ECharts;
  optionA: ECharts.EChartOption;

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.nativeElement = this.element.nativeElement;
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.setDimension();

    this.chartA = ECharts.init(this.nativeElement);

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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setDimension();
    this.chartA.resize();
  }

  private setDimension() {
    let width = 0;

    if (this.nativeElement.offsetParent) {
      width = this.nativeElement.offsetParent.scrollWidth - this.nativeElement.offsetLeft * 2;
    }

    width = (width > 0 ? width : 400);

    this.renderer.setElementStyle(this.nativeElement, 'width', width + 'px');
    this.renderer.setElementStyle(this.nativeElement, 'height', width * 3 / 4 + 'px');
  }

}
