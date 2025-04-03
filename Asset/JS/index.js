mapboxgl.accessToken =
  "pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg";
// mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg';

const vietnamBounds = [
  [102.14441, 8.17966], // Góc dưới trái (Tây Nam)
  [109.46917, 23.39237], // Góc trên phải (Đông Bắc)
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/thanhle04/cm8tlt9io00hs01s9hc4l9xlq",
  // style: "mapbox://styles/mapbox/streets-v12",
  center: [106.365557, 10.7552929],
  zoom: 7.5,
  minZoom: 4, // Cho phép thu nhỏ tới mức này
  maxBounds: vietnamBounds,
  hash: "map",
});

// Mini Map
// const miniMap = new mapboxgl.Map({
//   container: "mini-map",
//   style: "mapbox://styles/thanhle04/cm8tlt9io00hs01s9hc4l9xlq",
//   center: [105.8542, 21.0285], // Cùng tọa độ với bản đồ chính
//   zoom: 4, // Thu nhỏ
//   interactive: false, // Không cho phép zoom/pan
// });

// Đồng bộ di chuyển giữa 2 bản đồ
//  map.on('move', () => {
//     const center = map.getCenter();
//     miniMap.setCenter(center);
// });

data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [104.4833, 10.3833],
      },
      properties: {
        name: "Hà Tiên (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.0809, 10.0125],
      },
      properties: {
        name: "Rạch Giá (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.1524, 9.1768],
      },
      properties: {
        name: "Cà Mau (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.7655, 10.034],
      },
      properties: {
        name: "Cần Thơ (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.1167, 10.7],
      },
      properties: {
        name: "Châu Đốc (2-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.6333, 10.4667],
      },
      properties: {
        name: "Cao Lãnh (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.8667, 10.7833],
      },
      properties: {
        name: "Mộc Hóa (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.9667, 10.25],
      },
      properties: {
        name: "Vĩnh Long (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.3444, 9.9472],
      },
      properties: {
        name: "Trà Vinh (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.98, 9.602],
      },
      properties: {
        name: "Sóc Trăng (30-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [105.7244, 9.2941],
      },
      properties: {
        name: "Bạc Liêu (30-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.3759, 10.2415],
      },
      properties: {
        name: "Bến Tre (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.3605, 10.36],
      },
      properties: {
        name: "Mỹ Tho (1-5)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.7, 10.7769],
      },
      properties: {
        name: "Sài Gòn (30-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [107.1689, 10.4953],
      },
      properties: {
        name: "Bà Rịa (29-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [107.44, 10.9333],
      },
      properties: {
        name: "Xuân Lộc (21-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.1075, 11.3112],
      },
      properties: {
        name: "Tây Ninh (30-4)",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.3731, 11.2902],
      },
      properties: {
        name: "Dầu Tiếng",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.6, 11.65],
      },
      properties: {
        name: "An Lộc",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.6172, 11.5253],
      },
      properties: {
        name: "Chơn Thành",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [107.8079, 11.5479],
      },
      properties: {
        name: "Bảo Lộc",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [107.6907, 12.0043],
      },
      properties: {
        name: "Gia Nghĩa",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [108.0711, 11.5263],
      },
      properties: {
        name: "Di Linh",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [108.1001, 10.9333],
      },
      properties: {
        name: "Phan Thiết (19-4)",
      },
    },
  ],
};

data2 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            // Mảng tọa độ của đảo Phú Quốc
            [104.026131, 10.075293],
            [104.051666, 10.005001],
            [104.010002, 10.009999],
            [103.990181, 10.049178],
            [103.918663, 10.294233],
            [103.860817, 10.302041],
            [103.832893, 10.362773],
            [103.926651, 10.361631],
            [103.994759, 10.45235],
            [104.080833, 10.355277],
            [104.081741, 10.245434],
            [104.026131, 10.075293],
          ],
        ],
      },
      properties: {
        name: "Đảo Phú Quốc",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            // Mảng tọa độ của Quần đảo Côn Sơn
            [106.576393, 8.65209],
            [106.561089, 8.682622],
            [106.593185, 8.724633],
            [106.663391, 8.761133],
            [106.63736, 8.717536],
            [106.659477, 8.693033],
            [106.602386, 8.678897],
            [106.612541, 8.640221],
            [106.556541, 8.627804],
            [106.540276, 8.659999],
            [106.576393, 8.65209],
          ],
        ],
      },
      properties: {
        name: "Quần đảo Côn Sơn",
      },
    },
  ],
};

map.on("load", () => {
  map.addSource("map-event", {
    type: "geojson",
    data: data,
  });
  map.addLayer({
    id: "map-location",
    type: "circle",
    source: "map-event",
    paint: {
      "circle-radius": 8,
      "circle-color": "red",
    },
  });
  map.addLayer({
    id: "map-name",
    type: "symbol",
    source: "map-event",
    layout: {
      "text-field": ["format", ["get", "name"], { "font-scale": 1 }],
      "text-size": 12,
      "text-offset": [0, 2],
    },
    paint: {
      "text-color": "#0000ff",
    },
  });

  map.addSource("phu_quoc_island", {
    type: "geojson",
    data: data2,
  });
  map.addLayer({
    id: "phu-quoc-island-laber",
    type: "line",
    source: "phu_quoc_island",
    paint: {
      "line-color": "#111111", // Màu đỏ
      "line-width": 0, // Độ dày đường viền
    },
  });
  map.addLayer({
    id: "phu_quoc_name",
    type: "symbol",
    source: "phu_quoc_island",
    layout: {
      "text-field": ["format", ["get", "name"], { "font-scale": 1 }],
      "text-size": 14,
      "text-offset": [0, 2],
    },
    paint: {
      "text-color": "#0000ff",
    },
  });

  const sources = map.getStyle().sources;
  console.log("Danh sách nguồn dữ liệu trong bản đồ:", sources);

  // Lấy danh sách các lớp có trong bản đồ
  const layers = map.getStyle().layers;

  // Log danh sách các lớp để kiểm tra
  console.log(
    "Danh sách lớp trong bản đồ:",
    layers.map((layer) => layer.id)
  );

  document
    .getElementById("resetNorthBtn")
    .addEventListener("click", function () {
      map.rotateTo(0, {
        // Quay bản đồ về hướng Bắc (0 độ)
        duration: 1000, // Thời gian quay lại hướng Bắc (ms)
      });
      map.flyTo({
        center: [106.365557, 10.7552929], // Quay lại trung tâm ban đầu
        zoom: 7.5,
        duration: 1000, // Thời gian di chuyển về center (ms)
      });
    });

  // Thêm nguồn dữ liệu biên giới quốc gia từ Mapbox
  map.addSource("country-boundaries", {
    type: "vector",
    url: "mapbox://mapbox.country-boundaries-v1", // Tileset biên giới quốc gia của Mapbox
  });

  // Thêm lớp hiển thị biên giới
  map.addLayer({
    id: "country-boundaries",
    type: "line",
    source: "country-boundaries",
    "source-layer": "country_boundaries",
    paint: {
      "line-color": "#000000", // Màu đỏ cho biên giới
      "line-width": 0.5,
    },
  });

  console.log("Đã thêm lớp country-boundaries!");

  // Lọc để chỉ hiển thị Việt Nam
  map.setFilter("country-boundaries", ["==", ["get", "iso_3166_1"], "VN"]);
  if (layers.some((layer) => layer.id === "admin-0-boundary")) {
    map.setPaintProperty("admin-0-boundary", "line-color", [
      "case",
      ["==", ["get", "iso_3166_1"], "VN"],
      "#000000",
      "#fff",
    ]);
  } else {
    console.warn("Lớp 'admin-0-boundary' không tồn tại");
  }
  if (layers.some((layer) => layer.id === "admin-1-boundary")) {
    map.setPaintProperty("admin-1-boundary", "line-color", [
      "case",
      ["==", ["get", "iso_3166_1"], "VN"],
      "#000000",
      "#ffffff",
    ]);
  } else {
    console.warn("Lớp 'admin-1-boundary' không tồn tại");
  }

  map.loadImage(
    "https://map-hcmussh.github.io/chiendichhcm/static/media/ddl1.b4f2038e773265cc8376.png",
    function (error, image) {
      if (error) throw error;
      map.addImage("sg-icon", image);

      // Thêm layer hiển thị hình ảnh tại Sài Gòn
      map.addLayer({
        id: "saigon-image",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [106.7, 10.7769], // Tọa độ Sài Gòn
                },
              },
            ],
          },
        },
        layout: {
          "icon-image": "sg-icon",
          "icon-size": 0.25, // Điều chỉnh kích thước ảnh
          "icon-anchor": "bottom",
          "icon-offset": [0, 50],
        },
      });

      // Thêm sự kiện click vào hình ảnh
      map.on("click", "saigon-image", function (e) {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `
            <h3>Dinh Độc Lập</h3>
            <p class = "content">10 giờ 45 phút ngày 30-4, các đơn vị của Quân đoàn II, bằng xe tăng và pháo binh, tiến thẳng vào “Dinh Độc lập”, buộc Tổng thống Dương Văn Minh phải tuyên bố đầu hàng vô điều kiện.</br>
11 giờ 30 phút cùng ngày, lá cờ cách mạng tung bay trên nóc Phủ Tổng thống chính quyền Sài Gòn, báo hiệu sự toàn thắng của chiến dịch.
</p>
            <button onclick="window.location.href='1.html'">Xem chi tiết</button>
          `
          )
          .addTo(map);
      });

      // Đổi con trỏ chuột khi di chuyển qua ảnh
      map.on("mouseenter", "saigon-image", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "saigon-image", function () {
        map.getCanvas().style.cursor = "";
      });
    }
  );

  // // Tạo một div chứa ảnh
  // const markerDiv1 = document.createElement("div");
  // markerDiv1.className = "custom-marker1"; // Gán class để chỉnh CSS
  // document.body.appendChild(markerDiv1); // Thêm vào trang

  // // Tạo ảnh GIF bên trong div
  // const img1 = document.createElement("img");
  // img1.src =
  //   "https://map-hcmussh.github.io/chiendichhcm/static/media/red-arrow.23ea599922e5ec8de25b.gif";
  // img1.style.width = "50px";
  // markerDiv1.appendChild(img1); // Thêm ảnh vào div

  // // Hàm cập nhật vị trí div khi bản đồ di chuyển
  // function updateImagePosition() {
  //   const coords = [107.089, 10.873]; // Tọa độ cần hiển thị
  //   const point = map.project(coords); // Chuyển tọa độ thành pixel
  //   markerDiv1.style.left = `${point.x}px`;
  //   markerDiv1.style.top = `${point.y}px`;
  //   markerDiv1.style.transform = "translate(-50%, -50%)"; // Căn giữa marker
  // }

  // // Gọi hàm ngay khi tải bản đồ
  // map.on("load", updateImagePosition);

  // // Cập nhật vị trí khi bản đồ di chuyển
  // map.on("move", updateImagePosition);

  //   // Danh sách các ảnh với tọa độ và góc xoay
  // const markers = [
  //   { lng: 107.063649, lat: 10.870355, rotation: 83, title: "Vị trí 1", description: "Thông tin chi tiết 1" },
  //   { lng: 107.132901, lat: 10.721259, rotation: 100, title: "Vị trí 2", description: "Thông tin chi tiết 2" }
  // ];

  // // Tạo container chứa các ảnh
  // const mapContainer = document.getElementById("map-en");

  // // Mảng chứa các div của ảnh
  // const markerDivs = [];

  // // Thêm ảnh vào bản đồ
  // markers.forEach((markerData) => {
  //   // Tạo div chứa ảnh
  //   const markerDiv = document.createElement("div");
  //   markerDiv.className = "custom-marker";
  //   mapContainer.appendChild(markerDiv);

  //   // Tạo ảnh bên trong div
  //   const img = document.createElement("img");
  //   img.src = "https://map-hcmussh.github.io/chiendichhcm/static/media/red-arrow.23ea599922e5ec8de25b.gif";
  //   img.style.width = "50px";
  //   img.style.transform = `rotate(${markerData.rotation}deg)`;
  //   markerDiv.appendChild(img);

  //   // Lưu div vào mảng để cập nhật vị trí sau này
  //   markerDivs.push({
  //     element: markerDiv,
  //     coords: [markerData.lng, markerData.lat],
  //     data: markerData // Lưu dữ liệu popup
  //   });

  //   // Tạo popup nhỏ khi di chuột vào
  //   const hoverPopup = new mapboxgl.Popup({
  //     closeButton: false,
  //     closeOnClick: false
  //   }).setText(markerData.title);

  //   markerDiv.addEventListener("mouseenter", () => {
  //     hoverPopup.setLngLat(markerData).addTo(map);
  //   });

  //   markerDiv.addEventListener("mouseleave", () => {
  //     hoverPopup.remove();
  //   });

  //   // Tạo popup lớn khi click
  //   const clickPopup = new mapboxgl.Popup()
  //     .setHTML(`<h3>${markerData.title}</h3><p>${markerData.description}</p>`);

  //   markerDiv.addEventListener("click", () => {
  //     clickPopup.setLngLat(markerData).addTo(map);
  //   });
  // });

  // // Hàm cập nhật vị trí ảnh khi bản đồ di chuyển
  // function updateImagePositions() {
  //   markerDivs.forEach((marker) => {
  //     const point = map.project(marker.coords);
  //     marker.element.style.left = `${point.x}px`;
  //     marker.element.style.top = `${point.y}px`;
  //     marker.element.style.transform = `translate(-50%, -50%) rotate(${marker.element.firstChild.style.transform})`;
  //   });
  // }

  // // Cập nhật vị trí khi bản đồ tải và di chuyển
  // map.on("load", updateImagePositions);
  // map.on("move", updateImagePositions);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("toggleButton");
//   const content = document.getElementById("map");
//   const icon = document.getElementById("icon");

//   button.addEventListener("click", function () {
//     if (content.classList.contains("hidden")) {
//       content.classList.remove("hidden");
//       icon.classList.replace("fa-eye-slash", "fa-eye");
//       button.innerHTML = '<i id="icon" class="fas fa-eye"></i>';
//     } else {
//       content.classList.add("hidden");
//       icon.classList.replace("fa-eye", "fa-eye-slash");
//       button.innerHTML = '<i id="icon" class="fas fa-eye-slash"></i>';
//     }
//   });
// });


