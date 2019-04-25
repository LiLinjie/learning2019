var isTest = window.location.href.indexOf('test') > -1;
var domain = '//restapi.xuanwonainiu' + (isTest ? 'test' : '') + '.com';
var myDatas = [];

setTimeout(function () {
  $('.loading-box').hide();
  $('.swiper-container').show();

  myDatas = [
    {
      name: '生活用品',
      percent: 0.2,
      color: '#ffe248'
    },
    {
      name: '母婴',
      percent: 0.3,
      color: '#fe5a70'
    },
    {
      name: '服饰',
      percent: 0.35,
      color: '#59a8f6'
    },
    {
      name: '食品',
      percent: 0.15,
      color: '#15a898'
    }
  ];


  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
        var current = this.slides.eq(this.activeIndex);
        current.addClass('ani');
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        var current = this.slides.eq(this.activeIndex);
        var preview = this.slides.eq(this.activeIndex - 1);
        var next = this.slides.eq(this.activeIndex + 1);
        current.addClass('ani');
        preview.removeClass('ani');
        next.removeClass('ani');
        if (current.find('.chart')) {
          drawChart(myDatas);
        }
      }
    }
  })
}, 3000);

function drawChart (datas) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var ratio =  window.devicePixelRatio || 1; // 设备像素比
  var speed = -0.5 * Math.PI;

  var chartHeight = document.querySelector('.chart').clientHeight;
  var chartWidth = document.querySelector('.chart').clientWidth;
  canvas.width = 375 * ratio;
  canvas.height = 270 * ratio;
  if (chartWidth / chartHeight > canvas.width / canvas.height) {
    canvas.style.width = chartHeight * canvas.width / canvas.height + 'px';
    canvas.style.height = chartHeight + 'px';
  } else {
    canvas.style.width = chartWidth + 'px';
    canvas.style.height = chartWidth * canvas.height / canvas.width + 'px';
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var x = canvas.width / 2;
  var y = canvas.height / 2 - 10 * ratio;


  var start = -0.5 * Math.PI; // 从顶部开始画
  var end = -0.5 * Math.PI;
  var idx = 0;
  start = end;
  end = start + datas[idx].percent * 2 * Math.PI;
  draw(datas[idx].name, datas[idx].percent, datas[idx].color); // 画圆弧
  var len = datas.length;
  // datas.forEach(function (item) {
  //   start = end;
  //   end = start + item.percent * 2 * Math.PI;
  //   draw(item.name, item.percent, item.color); // 画圆弧
  // });
  drawTotal('38,182,938');  // 画中间的文字

  /**
   * 画圆弧
   * @param name 类目名
   * @param percent 所占百分比
   * @param color 颜色
   */
  function draw(name, percent, color) {
    var timer = setInterval(function () {
      console.log(color);
      if (speed < end) {
        speed += 0.01 * 2 * Math.PI;
        ctx.beginPath();
        ctx.lineWidth = 25 * ratio;
        ctx.strokeStyle = color;
        // ctx.lineCap = 'round';

        // ctx.moveTo(x, y);
        ctx.arc(x, y, 75 * ratio, start, speed, false);

        ctx.stroke();
        ctx.closePath();
      } else {
        clearInterval(timer);
        if (idx < len - 1) {
          idx++;
          start = end;
          end = start + datas[idx].percent * 2 * Math.PI;
          draw(datas[idx].name, datas[idx].percent, datas[idx].color); // 画圆弧
        } else {
          // drawCircle(); // 画叠加在第一个圆弧上的圆
        }
      }
    }, 20);

    drawTitle(name, percent);
  }

  /**
   * 画类目名称及所占百分比
   * @param name 类目名
   * @param percent 所占百分比
   */
  function drawTitle (name, percent) {
    var reg = (end - start) / 2 + start;

    var titleX = 100 * Math.cos(reg) * ratio + x;
    var titleY = 100 * Math.sin(reg) * ratio + y;

    var titleLength = ctx.measureText(name).width * ratio;
    ctx.beginPath();
    // ctx.lineCap = 'butt';

    if (titleX > x) {
      ctx.lineTo(titleX + titleLength, titleY);
      ctx.textAlign = 'left';
    } else {
      ctx.lineTo(titleX - titleLength, titleY);
      ctx.textAlign = 'right';
    }
    ctx.fillStyle = '#333';
    ctx.font = 16 * ratio + 'px Helvetica';
    ctx.fillText(parseInt(percent * 100) + '%', titleX, titleY);
    ctx.fillText(name, titleX, titleY + 16 * ratio);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * 画中间的文字
   */
  function drawTotal (totalData) {
    ctx.beginPath();
    ctx.fillStyle = '#EA0007';
    ctx.textAlign = 'center';
    ctx.textBaseline="middle";
    ctx.font = 'bold ' + 12 * ratio + 'px Helvetica';
    ctx.fillText('累计消费：', x, y - 11 * ratio);
    ctx.font = 'bold ' + 16 * ratio + 'px Helvetica'
    ctx.fillText(totalData, x, y + 8 * ratio);
    ctx.stroke();
  }

  /**
   * 画叠加在第一个圆弧上的圆
   */
  function drawCircle () {
    ctx.beginPath();
    ctx.fillStyle = datas[0].color;
    ctx.arc(x + ratio, y - 75 * ratio, 25 / 2 * ratio, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  }
}
