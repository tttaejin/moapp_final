$(document).ready(function () {
  $(".nav-bar ul li").click(function () {
    const tabId = $(this).data("tab");
    $(".tab-content").removeClass("active");
    $("#" + tabId).addClass("active");
  });
});

$(document).ready(function () {
  // 네비게이션 탭 클릭 이벤트
  $(".nav-bar ul li").click(function () {
    // 클릭된 탭의 데이터 속성 가져오기
    const tabId = $(this).data("tab");

    // 모든 콘텐츠 숨기기
    $(".tab-content").not(".top-bar").removeClass("active").hide(); // 클래스 제거 및 숨기기

    // 클릭된 탭에 해당하는 콘텐츠만 활성화
    $("#" + tabId)
      .addClass("active")
      .fadeIn(); // 클래스 추가 및 표시
  });
});

$(document).ready(function () {
  // 모니터링 네비게이션 동작
  $(".monitoring-nav li").click(function () {
    const monitorId = $(this).data("monitor");

    // 모든 모니터링 콘텐츠 숨기기
    $(".monitor-tab").removeClass("active");

    // 클릭된 모니터링 콘텐츠만 표시
    $("#" + monitorId).addClass("active");
  });

  Highcharts.chart("radar-graph", {
    chart: {
      polar: true,
      type: "area",
      width: 400, // 차트의 너비 (px)
      height: 300, // 차트의 높이 (px)
    },

    title: {
      text: "ESAF 성향",
      x: -140,
    },

    pane: {
      size: "80%",
    },

    xAxis: {
      categories: [
        "외향성",
        "인간 친화성",
        "동물 친화성",
        "적응도",
        "예민함",
        "호기심",
      ],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>' +
        "{point.y:,.0f}</b><br/>",
    },

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    series: [
      {
        name: "Allocated Budget",
        data: [2, 3, 2, 2, 1, 1],
        pointPlacement: "on",
        lineColor: "#B164FF", // 라인 색상 설정
        color: "rgba(177, 100, 255, 0.8)", // 면적 색상 (C48AFF) 및 투명도 (30%)
        fillOpacity: 0.3, // 면적 투명도 설정
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false, // 작은 화면에서도 범례 비활성화
            },
            pane: {
              size: "70%",
            },
          },
        },
      ],
    },
  });

  Highcharts.chart("activity_graph", {
    chart: {
      type: "column",
      marginTop: 60,
    },
    title: {
      text: "활동시간",
      align: "left",
    },

    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      crosshair: true,
      accessibility: {
        description: "활동 요일",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "시간(분)",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    series: [
      {
        name: "산책시간",
        data: [60, 54, 32, 0, 65, 72, 36],
        color: "#B56AFF", // 첫 번째 그래프 색상
      },
      {
        name: "놀이시간",
        data: [10, 24, 35, 60, 8, 10, 22],
        color: "#DDBCFF", // 두 번째 그래프 색상
      },
      {
        name: "총 활동시간",
        data: [70, 78, 67, 60, 73, 82, 58],
        color: "#9D3AFF", // 세 번째 그래프 색상
      },
    ],
  });

  $(".dog-carousel").owlCarousel({
    loop: true, // 무한 반복
    margin: 10, // 아이템 간 간격
    nav: true, // 좌우 네비게이션 버튼
    autoplay: false, // 자동 재생
    autoplayTimeout: 3000, // 자동 재생 시간
    center: false, // 가운데 정렬로 중첩 효과
    items: 2, // 한 번에 보이는 아이템 수 (중첩 효과를 위해 2로 설정)
    responsive: {
      // 반응형 설정
      0: {
        items: 1.5, // 작은 화면에서는 한 개 반만 보이게 설정
      },
      600: {
        items: 1.5, // 중간 화면에서는 두 개
      },
    },
  });
});
