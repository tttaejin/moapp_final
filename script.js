$(document).ready(function () {
  $(".nav-bar ul li").click(function () {
    const tabId = $(this).data("tab");
    $(".tab-content").removeClass("active");
    $("#" + tabId).addClass("active");
  });

  $(document).ready(function () {
    $(".dog-carousel").on("initialized.owl.carousel", function () {
      $(this).addClass("owl-loaded"); // 초기화 완료 후 애니메이션 적용
    });

    $(".dog-carousel").owlCarousel({
      loop: true, // 무한 반복
      margin: 10, // 아이템 간 간격
      nav: true, // 좌우 네비게이션 버튼 활성화
      autoplay: false, // 자동 재생 비활성화
      autoplayTimeout: 3000, // 자동 재생 시간
      items: 3, // 기본 한 번에 보이는 아이템 개수
      responsive: {
        // 반응형 설정
        0: {
          items: 2.5, // 작은 화면에서 한 번에 보이는 아이템 수
        },
        600: {
          items: 2.5, // 중간 화면에서 한 번에 보이는 아이템 수
        },
      },
    });
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
      height: "260px",
      y: -40, // 상단 여백 조정
    },
    credits: {
      enabled: false, // 로고 비활성화
    },

    title: {
      text: "ESAF 성향",
      useHTML: true,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#9d3aff",
        backgroundColor: "#F8ECFE",
        borderRadius: "4px",
        padding: "6px 12px",
        display: "inline-block",
      },
      align: "left", // 왼쪽 정렬
      verticalAlign: "top", // 상단 정렬
      y: 20, // 상단 여백 조정
      x: 10, // 좌측 여백 조정
    },

    pane: {
      size: "100%",
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
      labels: {
        style: {
          whiteSpace: "nowrap",
        }, // 줄바꿈 없이 가로로 출력
        useHTML: true,

        formatter: function () {
          const dataValues = [2, 3, 2, 2, 1, 1]; // 수치 데이터 배열
          const index = this.axis.categories.indexOf(this.value); // 현재 범주의 인덱스
          const value = dataValues[index];

          if (value === 3) {
            // 수치가 3인 항목 (가장 강조)
            return `
              <span style="font-weight: bold; color: #9D3AFF; font-size: 14px;">
                ${this.value}
              </span>
            `;
          } else if (value === 2) {
            // 수치가 2인 항목 (중간 강조)
            return `
              <span style="font-weight: 600; color: #6A6A6A; font-size: 13px;">
                ${this.value}
              </span>
            `;
          }
          // 기본 항목
          return `
            <span style="font-size: 12px; color: #333;">
              ${this.value}
            </span>
          `;
        },
      },
      tickmarkPlacement: "on",
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
      endOnTick: false,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>' +
        "{point.y:,.0f}</b><br/>",
    },

    legend: {
      align: "left",
      verticalAlign: "middle",
      layout: "horizontal",
    },

    exporting: {
      enabled: false, // 햄버거 바 제거
    },

    series: [
      {
        name: "성향 지수",
        data: [2, 3, 2, 2, 1, 1],
        pointPlacement: "on",
        lineColor: "#B164FF",
        color: "rgba(177, 100, 255, 0.8)",
        fillOpacity: 0.3,
        showInLegend: false,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600, // 화면 너비가 600px 이하일 때
          },
          chartOptions: {
            pane: {
              size: "60%", // 차트 크기 축소
            },
            title: {
              style: {
                fontSize: "12px", // 제목 글꼴 크기 축소
              },
            },
            legend: {
              align: "center", // 범례 가운데 정렬
              verticalAlign: "bottom", // 범례 아래로 이동
              layout: "horizontal",
            },
          },
        },
        {
          condition: {
            maxWidth: 400, // 화면 너비가 400px 이하일 때
          },
          chartOptions: {
            pane: {
              size: "70%", // 차트 크기 더 축소
            },
          },
        },
      ],
    },
  });
});
$(document).ready(function () {
  // -------------------- 초기화 설정 -------------------- //
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay()); // 주 시작일 (일요일)
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6); // 주 마지막일 (토요일)

  // 캘린더 버튼에 날짜 범위 표시
  function updateDateRange(start, end) {
    const formattedStart = start.toISOString().split("T")[0];
    const formattedEnd = end.toISOString().split("T")[0];
    $("#calendar-btn").html(`<img
    style="width: 20px; margin-right: 8px; vertical-align: middle;"
                            src="img/calendar-todo-fill.png"
                          />${formattedStart} ~ ${formattedEnd}`);
  }
  function updateGraphData(start, end) {
    // 랜덤 데이터 생성
    const walkData = Array(7)
      .fill()
      .map(() => Math.floor(Math.random() * 100));
    const playData = Array(7)
      .fill()
      .map(() => Math.floor(Math.random() * 50));

    // 총 활동시간 = 산책시간 + 놀이시간
    const totalData = walkData.map((walk, index) => walk + playData[index]);
    // Highcharts 그래프 생성
    Highcharts.chart("activity_graph", {
      chart: {
        type: "column",
        height: 360,
      },
      legend: {
        align: "left",
        verticalAlign: "top",
        layout: "horizontal",
        x: 10,
        y: 0,
        itemStyle: {
          fontSize: "12px",
          fontWeight: "normal",
          color: "#555",
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: "100%",
            },
            chartOptions: {
              chart: {
                height: (2 / 3) * 400, // 비율 3:2 적용
              },
            },
          },
        ],
      },
      credits: { enabled: false }, // 로고 비활성화
      title: {
        text: null,
        align: "center",
        style: { fontSize: "14px", fontWeight: "bold" },
      },
      xAxis: {
        categories: ["월", "화", "수", "목", "금", "토", "일"],
        crosshair: true,
        accessibility: { description: "활동 요일" },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.1,
          borderWidth: 0,
        },
      },
      exporting: {
        enabled: false, // 햄버거 바 제거
      },

      series: [
        {
          name: "산책시간",
          data: walkData,
          color: "#B56AFF",
        },
        {
          name: "놀이시간",
          data: playData,
          color: "#DDBCFF",
        },
        {
          name: "총 활동시간",
          data: totalData,
          color: "#9D3AFF",
        },
      ],
    });
  }

  // 초기 날짜 범위 및 그래프 설정
  updateDateRange(startDate, endDate);
  updateGraphData(startDate, endDate);

  // 캘린더 버튼 클릭 이벤트
  $("#calendar-btn").click(function () {
    $(this)
      .datepicker({
        dateFormat: "yy-mm-dd",
        showWeek: true,
        onSelect: function (selectedDate) {
          const start = new Date(selectedDate);
          const end = new Date(start);
          end.setDate(start.getDate() + 6); // 선택된 날짜부터 7일간의 범위 설정

          // 선택된 날짜와 그래프 업데이트
          updateDateRange(start, end);
          updateGraphData(start, end);
        },
      })
      .datepicker("show");
  });
});
$(document).ready(function () {
  // 기본 메시지
  const defaultMessage = `
    <div class="label">선택된 항목</div>
    <div class="top">
      <div>기본 번호</div>
      <div>기본 일자</div>
      <div>기본 시간</div>
    </div>
    
    <div class="bottom">항목을 선택하면 여기에 표시됩니다.</div>
  `;

  // 선택된 항목을 출력할 영역
  const $selectedItem = $("#selected-item");
  $selectedItem.html(defaultMessage);

  // 테이블 행 클릭 이벤트
  $(".health-history-table tbody tr").on("click", function () {
    const rowData = $(this)
      .find("td")
      .map(function () {
        return $(this).text();
      })
      .get();

    // 선택된 내용을 출력
    $selectedItem.html(`
      <div class="label">${rowData[3]}</div>
      <div class="top">
        <div>${rowData[0]}</div>
        <div>${rowData[1]}</div>
        <div>${rowData[2]}</div>
      </div>
      
      <div class="bottom"> ${rowData[4]}</div>
    `);
  });
});
