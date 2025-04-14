mapboxgl.accessToken =
  "pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg";
// mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg';

const vietnamBounds = [
  [100.0, 5.0], // Nới rộng biên giới một chút để tránh khóa zoom
  [112.0, 25.0], // Góc trên phải (Đông Bắc)
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
        date: "1-5",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "2-5",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "30-4",
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
        date: "30-4",
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
        date: "1-5",
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
        date: "1-5",
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
        date: "30-4",
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
        date: "29-4",
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
        date: "21-4",
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
        date: "30-4",
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
        date: "19-4",
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
            <button class="other" onclick="window.location.href='1.html'">Xem chi tiết</button>
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

map.on("click", "map-location", function (e) {
  const properties = e.features[0].properties;

  if (properties.date === "1-5") {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        `<h3>${properties.name}</h3>
        <p class = "content">Cùng với đại quân ta tiến vào giải phóng Sài Gòn, lực lượng vũ trang và nhân dân các tỉnh còn lại ở Nam Bộ, theo đúng kế hoạch của Trung ương Cục và Bộ chỉ huy Miền, với phương châm “xã giải phóng xã, huyện giải phóng huyện, tỉnh giải phóng tỉnh” đã nhất tề đứng lên tiến công và nổi dậy chiếm các căn cứ, quận lị, tỉnh lị, bức đối phương phải nộp vũ khí đầu hàng. Đến ngày 2-5-1975, lực lượng vũ trang và bộ máy chính quyền của Dương Văn Minh ở Nam Bộ và trên khắp miền Nam nước ta đã tan rã hoàn toàn.</p>`
      )
      .addTo(map);
  }
});

// Đổi con trỏ chuột khi di chuột qua điểm
map.on("mouseenter", "map-location", function (e) {
  const properties = e.features[0].properties; // Lấy thuộc tính của điểm

  if (properties.date === "1-5") {
    map.getCanvas().style.cursor = "pointer";
  } else {
    map.getCanvas().style.cursor = "";
  }
});

map.on("mouseleave", "map-location", function () {
  map.getCanvas().style.cursor = "";
});

map.on("load", () => {
  map.addSource("paracel-island", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      name: "gadm36_XPI_0",
      features: [
        {
          type: "Feature",
          properties: {
            GID_0: "XPI",
            NAME_0: "Quần Đảo Hoàng Sa",
          },
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [112.253974, 16.9944738],
                  [112.2510849, 16.9951568],
                  [112.249095, 16.9953584],
                  [112.24678, 16.9959742],
                  [112.2447901, 16.9963885],
                  [112.242475, 16.9965229],
                  [112.2403513, 16.9963885],
                  [112.238304, 16.996187],
                  [112.2367543, 16.9959071],
                  [112.2350514, 16.9958399],
                  [112.2342096, 16.9957055],
                  [112.2326598, 16.995504],
                  [112.2313779, 16.9952912],
                  [112.2301151, 16.9948881],
                  [112.2284314, 16.9948209],
                  [112.22736, 16.994541],
                  [112.2228446, 16.992839],
                  [112.2207208, 16.992156],
                  [112.2194581, 16.9919544],
                  [112.2179848, 16.992156],
                  [112.2167794, 16.9916073],
                  [112.2158611, 16.9902413],
                  [112.2143113, 16.9890096],
                  [112.212398, 16.9883265],
                  [112.2105612, 16.9868261],
                  [112.2080931, 16.9851913],
                  [112.2065816, 16.9845531],
                  [112.2057971, 16.9840716],
                  [112.2050127, 16.9833886],
                  [112.2045917, 16.9829183],
                  [112.2045535, 16.9827503],
                  [112.2044578, 16.9823024],
                  [112.2045917, 16.9818209],
                  [112.2054527, 16.9814178],
                  [112.206352, 16.9815522],
                  [112.2067155, 16.9817762],
                  [112.2076339, 16.9823696],
                  [112.2094706, 16.9833886],
                  [112.2110587, 16.9847098],
                  [112.212685, 16.9853257],
                  [112.2138904, 16.9862103],
                  [112.2154401, 16.9868933],
                  [112.2171238, 16.9875091],
                  [112.2189032, 16.9882593],
                  [112.2202425, 16.9886065],
                  [112.2210844, 16.9890096],
                  [112.2222132, 16.9892895],
                  [112.2231316, 16.9892895],
                  [112.2235525, 16.9899725],
                  [112.2243944, 16.9903084],
                  [112.2257337, 16.9902413],
                  [112.227073, 16.9907899],
                  [112.2294837, 16.9915401],
                  [112.231531, 16.9920888],
                  [112.2339226, 16.9924919],
                  [112.2352619, 16.9929062],
                  [112.2368882, 16.9934549],
                  [112.238304, 16.9939363],
                  [112.2397199, 16.9939363],
                  [112.2413462, 16.993858],
                  [112.2440822, 16.9935892],
                  [112.245919, 16.9934549],
                  [112.2475453, 16.9932421],
                  [112.249669, 16.9932421],
                  [112.253687, 16.9925591],
                  [112.2574944, 16.9912602],
                  [112.2638466, 16.9896926],
                  [112.2660469, 16.9889424],
                  [112.2678071, 16.9878562],
                  [112.2694334, 16.9871732],
                  [112.2706962, 16.9870388],
                  [112.272112, 16.9864902],
                  [112.2733748, 16.9860759],
                  [112.2751542, 16.9846426],
                  [112.2757855, 16.9848554],
                  [112.2764169, 16.9846426],
                  [112.2767805, 16.9841724],
                  [112.2787512, 16.9834109],
                  [112.2811428, 16.9824592],
                  [112.2850268, 16.9800742],
                  [112.2878585, 16.9785625],
                  [112.2891978, 16.9776108],
                  [112.2907475, 16.9767934],
                  [112.2914555, 16.9760432],
                  [112.2915894, 16.9751586],
                  [112.2911685, 16.9741284],
                  [112.2889682, 16.9724377],
                  [112.2881263, 16.971889],
                  [112.2883177, 16.9714075],
                  [112.2888151, 16.9714075],
                  [112.2910345, 16.9724936],
                  [112.2917233, 16.9732439],
                  [112.2929287, 16.9743412],
                  [112.2937132, 16.9748787],
                  [112.2933496, 16.975976],
                  [112.2920868, 16.9772749],
                  [112.290384, 16.9787081],
                  [112.2887003, 16.9797271],
                  [112.2868635, 16.9809588],
                  [112.2853712, 16.9819105],
                  [112.2828456, 16.9834893],
                  [112.2815063, 16.9844411],
                  [112.2791721, 16.9849898],
                  [112.2775458, 16.9856056],
                  [112.2758621, 16.9867589],
                  [112.2745228, 16.9872404],
                  [112.2717676, 16.9884049],
                  [112.2692229, 16.9896254],
                  [112.2673096, 16.9903756],
                  [112.2650519, 16.9912042],
                  [112.2627177, 16.9920216],
                  [112.2600391, 16.9927046],
                  [112.2566526, 16.9937236],
                  [112.253974, 16.9944738],
                ],
              ],
              [
                [
                  [112.271672, 16.982504],
                  [112.271385, 16.982224],
                  [112.2711171, 16.982224],
                  [112.2699883, 16.9811155],
                  [112.2697204, 16.9811155],
                  [112.2677688, 16.9791672],
                  [112.2677688, 16.9788873],
                  [112.2686107, 16.9780587],
                  [112.2697204, 16.9780587],
                  [112.2699883, 16.9777787],
                  [112.2705622, 16.9777787],
                  [112.2708301, 16.9774988],
                  [112.2711171, 16.9777787],
                  [112.2719398, 16.9777787],
                  [112.2722268, 16.9780587],
                  [112.2724947, 16.9780587],
                  [112.2741784, 16.9797271],
                  [112.2741784, 16.9799958],
                  [112.2744462, 16.9802757],
                  [112.2744462, 16.9811155],
                  [112.2733365, 16.982224],
                  [112.2719398, 16.982224],
                  [112.271672, 16.982504],
                ],
              ],
              [
                [
                  [112.2126084, 16.980007],
                  [112.2120345, 16.9802085],
                  [112.2117666, 16.9804101],
                  [112.2113457, 16.9807572],
                  [112.2107717, 16.9810259],
                  [112.2099298, 16.9811603],
                  [112.2090114, 16.9809588],
                  [112.2083801, 16.9806228],
                  [112.2080165, 16.9803429],
                  [112.2078061, 16.9797271],
                  [112.2078061, 16.9788425],
                  [112.2079591, 16.9778123],
                  [112.2082461, 16.9771293],
                  [112.2085905, 16.9763791],
                  [112.2087053, 16.9755953],
                  [112.2089158, 16.9746323],
                  [112.2091262, 16.9741508],
                  [112.2096237, 16.9740165],
                  [112.2107717, 16.9742404],
                  [112.2117092, 16.9742404],
                  [112.2131059, 16.9746099],
                  [112.2149427, 16.9747443],
                  [112.2154401, 16.975293],
                  [112.2157271, 16.9759088],
                  [112.216282, 16.9765918],
                  [112.216282, 16.9772749],
                  [112.2161481, 16.9778123],
                  [112.2157845, 16.9782266],
                  [112.2152297, 16.9786409],
                  [112.2149427, 16.979044],
                  [112.2146557, 16.9795255],
                  [112.2141582, 16.9797271],
                  [112.2137373, 16.9797271],
                  [112.2126084, 16.980007],
                ],
              ],
              [
                [
                  [112.228087, 16.9656297],
                  [112.231684, 16.9669958],
                  [112.2339417, 16.9681603],
                  [112.2352236, 16.9686306],
                  [112.2370413, 16.9689777],
                  [112.2381892, 16.9691121],
                  [112.239739, 16.9691793],
                  [112.2405043, 16.9697279],
                  [112.2415758, 16.970131],
                  [112.2422072, 16.9701982],
                  [112.2424942, 16.9705453],
                  [112.2422646, 16.9709596],
                  [112.2417671, 16.9712284],
                  [112.2407913, 16.9712284],
                  [112.2396625, 16.9710268],
                  [112.2381127, 16.9706125],
                  [112.2366969, 16.9703438],
                  [112.2350706, 16.9697279],
                  [112.2341522, 16.969448],
                  [112.2333103, 16.9692464],
                  [112.2325259, 16.9691121],
                  [112.2320476, 16.9691121],
                  [112.2311866, 16.968765],
                  [112.2297133, 16.9685634],
                  [112.2290054, 16.9680819],
                  [112.2282975, 16.9671302],
                  [112.2275896, 16.9669286],
                  [112.2268817, 16.9667943],
                  [112.2264033, 16.9664471],
                  [112.2264033, 16.9654954],
                  [112.2269582, 16.9651483],
                  [112.228087, 16.9656297],
                ],
              ],
              [
                [
                  [112.3106076, 16.968026],
                  [112.3085603, 16.9688433],
                  [112.3078524, 16.9691121],
                  [112.3064557, 16.9695264],
                  [112.3053269, 16.9696607],
                  [112.3044085, 16.969392],
                  [112.304045, 16.9691793],
                  [112.3038345, 16.9689777],
                  [112.303337, 16.9684962],
                  [112.3025717, 16.9678804],
                  [112.3025717, 16.9666599],
                  [112.3029161, 16.9662456],
                  [112.3038345, 16.967063],
                  [112.3039493, 16.967175],
                  [112.3044659, 16.967746],
                  [112.3058817, 16.968026],
                  [112.307221, 16.9676117],
                  [112.308082, 16.9674101],
                  [112.3089813, 16.9671414],
                  [112.3090769, 16.9671078],
                  [112.3102632, 16.9667271],
                  [112.3113346, 16.9661112],
                  [112.3117364, 16.9656297],
                  [112.3123104, 16.9648795],
                  [112.3129418, 16.9648123],
                  [112.3137262, 16.964678],
                  [112.3144916, 16.9644092],
                  [112.315123, 16.9638606],
                  [112.31585, 16.9630432],
                  [112.3166153, 16.9625617],
                  [112.3171702, 16.9619459],
                  [112.3178207, 16.9614644],
                  [112.3182416, 16.9611285],
                  [112.3195809, 16.9603782],
                  [112.3203271, 16.9601543],
                  [112.3212072, 16.9598968],
                  [112.322757, 16.9591465],
                  [112.3237519, 16.9585979],
                  [112.3247086, 16.9580156],
                  [112.3248808, 16.9579149],
                  [112.326067, 16.9572318],
                  [112.3270619, 16.9569631],
                  [112.3283247, 16.9562801],
                  [112.3286882, 16.95656],
                  [112.3285352, 16.9570975],
                  [112.3271959, 16.9580604],
                  [112.3257992, 16.9588778],
                  [112.3247277, 16.9594377],
                  [112.3243833, 16.959628],
                  [112.3228909, 16.9601767],
                  [112.3210924, 16.9610725],
                  [112.3207098, 16.9612628],
                  [112.3184521, 16.9626961],
                  [112.3164049, 16.9642637],
                  [112.3145681, 16.9656297],
                  [112.3123869, 16.9669286],
                  [112.3106076, 16.968026],
                ],
              ],
              [
                [
                  [112.3063983, 16.9666711],
                  [112.3055565, 16.9666711],
                  [112.3052695, 16.9663912],
                  [112.3047337, 16.9663912],
                  [112.3045424, 16.9662008],
                  [112.3044468, 16.9661112],
                  [112.3041598, 16.9661112],
                  [112.3038919, 16.9658313],
                  [112.3036049, 16.9655514],
                  [112.3036049, 16.9650027],
                  [112.3038919, 16.9647228],
                  [112.3044468, 16.9647228],
                  [112.3047337, 16.9644428],
                  [112.3050016, 16.9644428],
                  [112.3052695, 16.9641629],
                  [112.3058243, 16.9641629],
                  [112.3061113, 16.963883],
                  [112.3066662, 16.963883],
                  [112.3069532, 16.9636142],
                  [112.307221, 16.9636142],
                  [112.307508, 16.9633343],
                  [112.3077759, 16.9633343],
                  [112.3080438, 16.9630544],
                  [112.3083307, 16.9630544],
                  [112.3088856, 16.9624945],
                  [112.3094405, 16.9624945],
                  [112.3097275, 16.9622258],
                  [112.3099953, 16.9622258],
                  [112.3102823, 16.9619459],
                  [112.3108372, 16.9619459],
                  [112.311105, 16.9616659],
                  [112.311392, 16.9616659],
                  [112.3116599, 16.961386],
                  [112.3122339, 16.961386],
                  [112.3125017, 16.9611061],
                  [112.3127696, 16.9611061],
                  [112.3130566, 16.9608373],
                  [112.3133245, 16.9608373],
                  [112.3136115, 16.9605574],
                  [112.3144533, 16.9605574],
                  [112.3147212, 16.9602775],
                  [112.3150082, 16.9602775],
                  [112.315276, 16.9599975],
                  [112.3155439, 16.9599975],
                  [112.3161179, 16.9605574],
                  [112.3158309, 16.9608373],
                  [112.3158309, 16.961386],
                  [112.3155439, 16.9616659],
                  [112.3150082, 16.9616659],
                  [112.3136115, 16.9630544],
                  [112.3133245, 16.9630544],
                  [112.3125017, 16.963883],
                  [112.3122339, 16.963883],
                  [112.3116599, 16.9644428],
                  [112.311392, 16.9644428],
                  [112.311105, 16.9647228],
                  [112.3108372, 16.9647228],
                  [112.3105502, 16.9650027],
                  [112.3102823, 16.9650027],
                  [112.3099953, 16.9652826],
                  [112.3097275, 16.9652826],
                  [112.3094405, 16.9655514],
                  [112.3091726, 16.9655514],
                  [112.3088856, 16.9658313],
                  [112.3086177, 16.9658313],
                  [112.3083307, 16.9661112],
                  [112.3080055, 16.966156],
                  [112.3077759, 16.9663912],
                  [112.3066662, 16.9663912],
                  [112.3063983, 16.9666711],
                ],
              ],
              [
                [
                  [112.3261053, 16.9555746],
                  [112.3254548, 16.9559217],
                  [112.3246894, 16.9564032],
                  [112.3242111, 16.9569631],
                  [112.3240581, 16.9571534],
                  [112.3230631, 16.9575006],
                  [112.3222213, 16.9572206],
                  [112.3219726, 16.9569743],
                  [112.3216664, 16.956672],
                  [112.3216664, 16.9558322],
                  [112.323331, 16.9541638],
                  [112.3235989, 16.9541638],
                  [112.3238859, 16.9538838],
                  [112.3241729, 16.9541638],
                  [112.3249956, 16.9533352],
                  [112.3252826, 16.9533352],
                  [112.3255504, 16.9530553],
                  [112.3261053, 16.9530553],
                  [112.327502, 16.9541638],
                  [112.3282482, 16.9541638],
                  [112.3282482, 16.953895],
                  [112.328803, 16.9533464],
                  [112.3293005, 16.953324],
                  [112.3293388, 16.9533912],
                  [112.3293388, 16.9536375],
                  [112.3298745, 16.9536375],
                  [112.3298936, 16.95338],
                  [112.3301997, 16.9530441],
                  [112.3310225, 16.9523722],
                  [112.3310416, 16.9519691],
                  [112.3317112, 16.9519691],
                  [112.3321322, 16.9515772],
                  [112.3321322, 16.9511405],
                  [112.3318643, 16.9511405],
                  [112.331826, 16.9508718],
                  [112.3324192, 16.9503007],
                  [112.3324, 16.9497409],
                  [112.3321513, 16.9494385],
                  [112.3312903, 16.9494385],
                  [112.3312903, 16.9486323],
                  [112.3313669, 16.948554],
                  [112.3315773, 16.9483412],
                  [112.332113, 16.9483076],
                  [112.332113, 16.9478038],
                  [112.332974, 16.9469752],
                  [112.3335097, 16.9469304],
                  [112.3335289, 16.9466392],
                  [112.3337776, 16.9465497],
                  [112.3337776, 16.9461354],
                  [112.3340837, 16.9455643],
                  [112.3349065, 16.9455643],
                  [112.3349256, 16.9450156],
                  [112.3354804, 16.9447469],
                  [112.3360736, 16.9447357],
                  [112.3364945, 16.9443326],
                  [112.3368389, 16.9440079],
                  [112.3368389, 16.9435936],
                  [112.3370876, 16.943616],
                  [112.337145, 16.9428098],
                  [112.3376807, 16.9427874],
                  [112.3376999, 16.9433249],
                  [112.3379295, 16.9433585],
                  [112.3379295, 16.9445118],
                  [112.3379486, 16.9450268],
                  [112.3376616, 16.9452732],
                  [112.337432, 16.9452732],
                  [112.337432, 16.9455643],
                  [112.3388287, 16.9455755],
                  [112.3387905, 16.9472439],
                  [112.3390966, 16.9472439],
                  [112.3390774, 16.9480725],
                  [112.3385609, 16.9485092],
                  [112.3384843, 16.9488675],
                  [112.3379677, 16.9488787],
                  [112.3379677, 16.9485988],
                  [112.3373937, 16.9486211],
                  [112.3373937, 16.9491586],
                  [112.3376999, 16.949181],
                  [112.3376807, 16.9494497],
                  [112.3368389, 16.9494497],
                  [112.3368198, 16.9499872],
                  [112.3361118, 16.9502783],
                  [112.3361118, 16.9505583],
                  [112.3344473, 16.9522267],
                  [112.3344473, 16.9530553],
                  [112.3322278, 16.9541638],
                  [112.3322278, 16.9547236],
                  [112.3319408, 16.9550036],
                  [112.331386, 16.9550036],
                  [112.331386, 16.9544437],
                  [112.331099, 16.9544437],
                  [112.331099, 16.9547236],
                  [112.3308311, 16.9550036],
                  [112.3302763, 16.9552835],
                  [112.3288796, 16.9555522],
                  [112.3272341, 16.9555522],
                  [112.3265262, 16.9553731],
                  [112.3261053, 16.9555746],
                ],
              ],
              [
                [
                  [112.3518583, 16.9194076],
                  [112.3521261, 16.921591],
                  [112.3521261, 16.9239201],
                  [112.3522792, 16.9269209],
                  [112.3515713, 16.9310079],
                  [112.3504424, 16.9334713],
                  [112.3493136, 16.9366065],
                  [112.3483187, 16.9385212],
                  [112.3467689, 16.9405703],
                  [112.3439564, 16.9446685],
                  [112.3419665, 16.9464377],
                  [112.3407037, 16.9480837],
                  [112.3402063, 16.9483524],
                  [112.3397088, 16.9489011],
                  [112.339441, 16.9492482],
                  [112.3390774, 16.9495841],
                  [112.3387905, 16.9497857],
                  [112.3381591, 16.9500656],
                  [112.3376042, 16.9505359],
                  [112.3371067, 16.950883],
                  [112.3368963, 16.9510174],
                  [112.3367624, 16.9506031],
                  [112.3370302, 16.9504015],
                  [112.3373937, 16.9499872],
                  [112.3378147, 16.9497185],
                  [112.3383121, 16.9495169],
                  [112.339441, 16.9484196],
                  [112.3398619, 16.9476694],
                  [112.3402828, 16.9472663],
                  [112.3412777, 16.9460346],
                  [112.3424066, 16.9443886],
                  [112.3433824, 16.9428882],
                  [112.3440903, 16.9420708],
                  [112.3452191, 16.9409846],
                  [112.346635, 16.9390699],
                  [112.3474768, 16.9374351],
                  [112.3484717, 16.9351061],
                  [112.3494475, 16.9333369],
                  [112.3500215, 16.9316909],
                  [112.3507294, 16.9302017],
                  [112.3511504, 16.9278727],
                  [112.3511504, 16.925958],
                  [112.3508634, 16.9243232],
                  [112.3508634, 16.9205049],
                  [112.3507294, 16.9189933],
                  [112.3514374, 16.9188589],
                  [112.3518583, 16.9194076],
                ],
              ],
              [
                [
                  [112.34189, 16.9369088],
                  [112.3425022, 16.9375023],
                  [112.3425022, 16.9377822],
                  [112.3422153, 16.938051],
                  [112.3422153, 16.9383309],
                  [112.3416987, 16.9388572],
                  [112.3411055, 16.9394506],
                  [112.3405507, 16.9388908],
                  [112.3405507, 16.9383421],
                  [112.3405698, 16.9382413],
                  [112.3407037, 16.9373231],
                  [112.3410481, 16.9367745],
                  [112.3414691, 16.9367073],
                  [112.34189, 16.9369088],
                ],
              ],
              [
                [
                  [112.3441668, 16.9322172],
                  [112.3444538, 16.9324971],
                  [112.3444538, 16.9327771],
                  [112.3447217, 16.933057],
                  [112.3447217, 16.9344455],
                  [112.3444538, 16.9347254],
                  [112.3444538, 16.9349941],
                  [112.3439946, 16.935442],
                  [112.343612, 16.9358339],
                  [112.343325, 16.9358339],
                  [112.3430571, 16.9358339],
                  [112.3427892, 16.935554],
                  [112.3427892, 16.935274],
                  [112.3425022, 16.9349941],
                  [112.3425022, 16.9347814],
                  [112.3425022, 16.9344455],
                  [112.3422153, 16.9341655],
                  [112.3422153, 16.9338856],
                  [112.3438798, 16.9322172],
                  [112.3441668, 16.9322172],
                ],
              ],
              [
                [
                  [112.3469411, 16.9311087],
                  [112.3458314, 16.9311087],
                  [112.3455635, 16.9308287],
                  [112.3450087, 16.9308287],
                  [112.3448939, 16.930728],
                  [112.3444538, 16.9302801],
                  [112.3444538, 16.9300002],
                  [112.3441668, 16.9297202],
                  [112.3441668, 16.9291716],
                  [112.3450087, 16.9283318],
                  [112.3450087, 16.9280518],
                  [112.3452765, 16.9277831],
                  [112.3457549, 16.9277831],
                  [112.3458314, 16.9277831],
                  [112.3469411, 16.9288916],
                  [112.3469411, 16.9291716],
                  [112.347783, 16.9300002],
                  [112.347783, 16.93056],
                  [112.347496, 16.9308287],
                  [112.3472281, 16.9308287],
                  [112.3469411, 16.9311087],
                ],
              ],
              [
                [
                  [112.3465393, 16.9226324],
                  [112.3462523, 16.9228339],
                  [112.3458314, 16.9229011],
                  [112.3455444, 16.9229011],
                  [112.3454679, 16.9224868],
                  [112.3454679, 16.9221509],
                  [112.3457549, 16.9219493],
                  [112.3461758, 16.921815],
                  [112.3467498, 16.9216694],
                  [112.3471898, 16.9214119],
                  [112.3476299, 16.9214119],
                  [112.3480508, 16.9212775],
                  [112.3483952, 16.9211431],
                  [112.3488927, 16.9213447],
                  [112.3491031, 16.9214119],
                  [112.3491031, 16.9218934],
                  [112.3486057, 16.9222965],
                  [112.3484717, 16.9228451],
                  [112.3480508, 16.9228451],
                  [112.3473429, 16.9225092],
                  [112.3465393, 16.9226324],
                ],
              ],
              [
                [
                  [112.3471516, 16.9200458],
                  [112.3464436, 16.9197099],
                  [112.3464436, 16.9192284],
                  [112.3466732, 16.9188813],
                  [112.347649, 16.9186126],
                  [112.3482804, 16.9187469],
                  [112.3489883, 16.9188813],
                  [112.3491414, 16.9192956],
                  [112.3486439, 16.9197771],
                  [112.3477256, 16.9197771],
                  [112.3471516, 16.9200458],
                ],
              ],
              [
                [
                  [112.347783, 16.847499],
                  [112.3472281, 16.8469503],
                  [112.3472281, 16.8466704],
                  [112.3469411, 16.8463904],
                  [112.3469411, 16.8461105],
                  [112.3467498, 16.8459201],
                  [112.3466732, 16.8458306],
                  [112.3466732, 16.8455618],
                  [112.3463862, 16.8452819],
                  [112.3463862, 16.844722],
                  [112.3452765, 16.8436135],
                  [112.3447217, 16.8436135],
                  [112.3444921, 16.8433896],
                  [112.3444538, 16.8433336],
                  [112.3447217, 16.8430537],
                  [112.3447217, 16.842505],
                  [112.3452765, 16.8419451],
                  [112.3450087, 16.8416652],
                  [112.3450087, 16.8413853],
                  [112.3452765, 16.8411053],
                  [112.3452765, 16.8408366],
                  [112.3458314, 16.8402767],
                  [112.3463862, 16.8402767],
                  [112.3469411, 16.8408366],
                  [112.3469411, 16.8411053],
                  [112.3472281, 16.8413853],
                  [112.3472281, 16.8419451],
                  [112.347496, 16.8422251],
                  [112.347496, 16.842505],
                  [112.3488927, 16.8438934],
                  [112.3488927, 16.8441622],
                  [112.3483378, 16.844722],
                  [112.3483378, 16.8455618],
                  [112.3480508, 16.8458306],
                  [112.3480508, 16.8461105],
                  [112.3483378, 16.8463904],
                  [112.3483378, 16.8466704],
                  [112.3486057, 16.8469503],
                  [112.3483378, 16.847219],
                  [112.3480508, 16.847219],
                  [112.347783, 16.847499],
                ],
              ],
              [
                [
                  [112.3519348, 16.8427737],
                  [112.3491605, 16.8399968],
                  [112.3491605, 16.8397169],
                  [112.3488927, 16.8394481],
                  [112.3488927, 16.8391682],
                  [112.3469411, 16.8372199],
                  [112.3466732, 16.8372199],
                  [112.3463862, 16.83694],
                  [112.3444538, 16.83694],
                  [112.3441668, 16.8372199],
                  [112.343612, 16.8372199],
                  [112.343325, 16.8374998],
                  [112.3430571, 16.8374998],
                  [112.3427892, 16.8377798],
                  [112.3425022, 16.8377798],
                  [112.3422153, 16.8380597],
                  [112.3419474, 16.8380597],
                  [112.3416604, 16.8383284],
                  [112.3413925, 16.8383284],
                  [112.3411055, 16.8386084],
                  [112.3408377, 16.8386084],
                  [112.3405507, 16.8388883],
                  [112.3402828, 16.8388883],
                  [112.3399958, 16.8391682],
                  [112.339441, 16.8391682],
                  [112.3391731, 16.8394481],
                  [112.3388861, 16.8394481],
                  [112.3385991, 16.8397169],
                  [112.3383313, 16.8397169],
                  [112.3380634, 16.8399968],
                  [112.3377764, 16.8399968],
                  [112.3375085, 16.8402767],
                  [112.3372215, 16.8402767],
                  [112.3366667, 16.8408366],
                  [112.3366667, 16.8419451],
                  [112.3361118, 16.842505],
                  [112.3358248, 16.8422251],
                  [112.335557, 16.8422251],
                  [112.3347151, 16.8413853],
                  [112.3341603, 16.8413853],
                  [112.3338924, 16.8411053],
                  [112.3336054, 16.8411053],
                  [112.3333376, 16.8408366],
                  [112.3330506, 16.8408366],
                  [112.3324957, 16.8402767],
                  [112.3322278, 16.8402767],
                  [112.3305633, 16.8386084],
                  [112.3305633, 16.8383284],
                  [112.3302763, 16.8380597],
                  [112.3302763, 16.8374998],
                  [112.3300084, 16.8372199],
                  [112.3300084, 16.8366712],
                  [112.3302763, 16.8363913],
                  [112.3302763, 16.8350028],
                  [112.329511, 16.8342302],
                  [112.3294536, 16.8341631],
                  [112.3291666, 16.8341631],
                  [112.3288796, 16.8338943],
                  [112.3288796, 16.8336144],
                  [112.3286117, 16.8333345],
                  [112.3286117, 16.8327746],
                  [112.3291666, 16.8322259],
                  [112.3300084, 16.8330545],
                  [112.3300084, 16.8333345],
                  [112.3302763, 16.8336144],
                  [112.3305633, 16.8336144],
                  [112.3308311, 16.8338943],
                  [112.331099, 16.8336144],
                  [112.331099, 16.8333345],
                  [112.331673, 16.8327746],
                  [112.331673, 16.8325059],
                  [112.3322278, 16.831946],
                  [112.3322278, 16.8316661],
                  [112.3324957, 16.8313861],
                  [112.3319408, 16.8308263],
                  [112.331099, 16.8308263],
                  [112.3308311, 16.8311174],
                  [112.3305633, 16.8311174],
                  [112.3300084, 16.8316661],
                  [112.3297214, 16.8313861],
                  [112.3291666, 16.8313861],
                  [112.3288796, 16.8311174],
                  [112.3288796, 16.8308263],
                  [112.3291666, 16.8305575],
                  [112.3291666, 16.829449],
                  [112.3297214, 16.8288892],
                  [112.3300084, 16.8288892],
                  [112.3308311, 16.8297178],
                  [112.331099, 16.829449],
                  [112.331673, 16.829449],
                  [112.3319408, 16.8297178],
                  [112.3327827, 16.8297178],
                  [112.3333376, 16.8302776],
                  [112.335557, 16.8280606],
                  [112.335557, 16.8269408],
                  [112.3352891, 16.8266609],
                  [112.3352891, 16.8263922],
                  [112.3358248, 16.8258323],
                  [112.335557, 16.8255524],
                  [112.335557, 16.8250037],
                  [112.3358248, 16.8247238],
                  [112.3358248, 16.8244439],
                  [112.3361118, 16.8241639],
                  [112.3361118, 16.823884],
                  [112.3363797, 16.8236153],
                  [112.3366667, 16.8236153],
                  [112.3372215, 16.8241639],
                  [112.3372215, 16.8250037],
                  [112.3377764, 16.8255524],
                  [112.3383313, 16.8255524],
                  [112.3385991, 16.8252725],
                  [112.3385991, 16.8250037],
                  [112.3388861, 16.8247238],
                  [112.3388861, 16.8241639],
                  [112.339441, 16.8236153],
                  [112.3402828, 16.8244439],
                  [112.3402828, 16.8247238],
                  [112.3399958, 16.8250037],
                  [112.3399958, 16.8255524],
                  [112.339728, 16.8258323],
                  [112.339728, 16.8269408],
                  [112.3399958, 16.8272208],
                  [112.3399958, 16.8275007],
                  [112.3411055, 16.8286092],
                  [112.3419474, 16.8277806],
                  [112.3422153, 16.8280606],
                  [112.3422153, 16.8288892],
                  [112.3425022, 16.8291691],
                  [112.3427892, 16.8291691],
                  [112.343325, 16.8297178],
                  [112.343612, 16.8297178],
                  [112.3438798, 16.8299977],
                  [112.3441668, 16.8299977],
                  [112.3444538, 16.8302776],
                  [112.3447217, 16.8302776],
                  [112.3455635, 16.8311174],
                  [112.3458314, 16.8311174],
                  [112.347783, 16.8330545],
                  [112.347783, 16.8336144],
                  [112.3480508, 16.8338943],
                  [112.3480508, 16.834443],
                  [112.3486057, 16.8350028],
                  [112.3486057, 16.8352828],
                  [112.3488927, 16.8355627],
                  [112.3488927, 16.8358314],
                  [112.3505572, 16.8374998],
                  [112.3508251, 16.8374998],
                  [112.3527767, 16.8394481],
                  [112.3527767, 16.8397169],
                  [112.3541734, 16.8411053],
                  [112.3541734, 16.8413853],
                  [112.3533315, 16.8422251],
                  [112.3525088, 16.8422251],
                  [112.3519348, 16.8427737],
                ],
              ],
              [
                [
                  [112.7238991, 16.6797196],
                  [112.7227702, 16.6786111],
                  [112.7227702, 16.6783312],
                  [112.7233442, 16.6777825],
                  [112.7233442, 16.6772227],
                  [112.7230572, 16.6769427],
                  [112.7227702, 16.6769427],
                  [112.7225024, 16.6766628],
                  [112.7219475, 16.6766628],
                  [112.7213926, 16.6761141],
                  [112.7211057, 16.6761141],
                  [112.7211057, 16.6755543],
                  [112.7208378, 16.6752743],
                  [112.7208378, 16.6747257],
                  [112.7213926, 16.6741658],
                  [112.7213926, 16.6738859],
                  [112.7211057, 16.673606],
                  [112.7211057, 16.6730573],
                  [112.7208378, 16.6727774],
                  [112.7208378, 16.6722175],
                  [112.7205508, 16.6719488],
                  [112.7205508, 16.6716688],
                  [112.7202829, 16.6713889],
                  [112.7199959, 16.6713889],
                  [112.7194411, 16.670829],
                  [112.7194411, 16.6702804],
                  [112.7197281, 16.6700004],
                  [112.7202829, 16.6700004],
                  [112.7205508, 16.6697205],
                  [112.7205508, 16.6691719],
                  [112.7202829, 16.6688919],
                  [112.7202829, 16.668612],
                  [112.7216605, 16.6672235],
                  [112.7222154, 16.6672235],
                  [112.7227702, 16.6666077],
                  [112.7227702, 16.6661374],
                  [112.7229998, 16.6658575],
                  [112.7237651, 16.6658575],
                  [112.7239756, 16.6655887],
                  [112.7240521, 16.6650401],
                  [112.72432, 16.6646258],
                  [112.7249705, 16.6642227],
                  [112.7256784, 16.6639427],
                  [112.7267308, 16.6636852],
                  [112.7269986, 16.6637524],
                  [112.72763, 16.6639539],
                  [112.7280509, 16.6638868],
                  [112.7283379, 16.6638868],
                  [112.7286058, 16.6636068],
                  [112.7288928, 16.6636068],
                  [112.7294476, 16.6630582],
                  [112.7286058, 16.6622184],
                  [112.7294476, 16.6613898],
                  [112.7297155, 16.6613898],
                  [112.7300025, 16.6611098],
                  [112.7315714, 16.6609755],
                  [112.7319923, 16.6608299],
                  [112.7324132, 16.6605612],
                  [112.7327768, 16.660494],
                  [112.7329107, 16.6601581],
                  [112.7327768, 16.6597214],
                  [112.7333316, 16.6591615],
                  [112.7333316, 16.6588928],
                  [112.7347283, 16.6575043],
                  [112.7355511, 16.6569445],
                  [112.7361059, 16.6569445],
                  [112.7363929, 16.6566645],
                  [112.7372156, 16.6566645],
                  [112.7380575, 16.6575043],
                  [112.7380575, 16.6577731],
                  [112.7375026, 16.6583329],
                  [112.7375026, 16.6586129],
                  [112.7372156, 16.6588928],
                  [112.7383253, 16.6600013],
                  [112.7386123, 16.6600013],
                  [112.7388993, 16.6602813],
                  [112.7391672, 16.6602813],
                  [112.7402769, 16.6613898],
                  [112.7405639, 16.6613898],
                  [112.7408318, 16.6616697],
                  [112.7399899, 16.6624983],
                  [112.7399899, 16.6627782],
                  [112.739435, 16.6633381],
                  [112.739435, 16.6641667],
                  [112.739722, 16.6644466],
                  [112.7411188, 16.6644466],
                  [112.7413866, 16.6641667],
                  [112.7419415, 16.6641667],
                  [112.7422285, 16.6638868],
                  [112.7427833, 16.6638868],
                  [112.743893, 16.6627782],
                  [112.7444479, 16.6627782],
                  [112.7450027, 16.6633381],
                  [112.7450027, 16.6644466],
                  [112.743606, 16.6658351],
                  [112.743606, 16.6661038],
                  [112.7422285, 16.6675035],
                  [112.7422285, 16.6677834],
                  [112.7419415, 16.6680521],
                  [112.7419415, 16.6683321],
                  [112.7416736, 16.668612],
                  [112.7416736, 16.6688919],
                  [112.7408318, 16.6697205],
                  [112.7408318, 16.6700004],
                  [112.7377705, 16.6730573],
                  [112.7377705, 16.6733372],
                  [112.7363929, 16.6747257],
                  [112.735398, 16.6752631],
                  [112.7342883, 16.6760358],
                  [112.7341926, 16.6760917],
                  [112.7327194, 16.676842],
                  [112.7316671, 16.6771779],
                  [112.7305573, 16.6775026],
                  [112.7300025, 16.6775026],
                  [112.7297155, 16.6777825],
                  [112.7291606, 16.6777825],
                  [112.7288928, 16.6780513],
                  [112.7286058, 16.6780513],
                  [112.7282805, 16.6783312],
                  [112.7272091, 16.6783312],
                  [112.7266734, 16.678891],
                  [112.7255636, 16.678891],
                  [112.7249896, 16.6794397],
                  [112.7241669, 16.6794397],
                  [112.7238991, 16.6797196],
                ],
              ],
              [
                [
                  [112.0377713, 16.3649207],
                  [112.0329689, 16.3650663],
                  [112.0282431, 16.3648535],
                  [112.0264828, 16.3647863],
                  [112.0242251, 16.3648535],
                  [112.0204751, 16.3637674],
                  [112.0182174, 16.3632187],
                  [112.0159597, 16.3629388],
                  [112.0152518, 16.36267],
                  [112.0136255, 16.3616511],
                  [112.0128601, 16.3612368],
                  [112.0125731, 16.3605538],
                  [112.0127836, 16.3603522],
                  [112.013702, 16.3603522],
                  [112.0153283, 16.3608897],
                  [112.0185044, 16.3616511],
                  [112.0212595, 16.3621214],
                  [112.0238042, 16.3621214],
                  [112.0296589, 16.3627372],
                  [112.0317635, 16.3631515],
                  [112.0343082, 16.3628044],
                  [112.0368529, 16.3630172],
                  [112.0398185, 16.3629388],
                  [112.0429946, 16.3627372],
                  [112.047089, 16.3622557],
                  [112.0496911, 16.3617183],
                  [112.0512409, 16.3614384],
                  [112.0543596, 16.3606881],
                  [112.0585114, 16.3597364],
                  [112.0621276, 16.3584375],
                  [112.065648, 16.3574857],
                  [112.068958, 16.3566683],
                  [112.0727081, 16.3561197],
                  [112.0746788, 16.3553695],
                  [112.0773, 16.354888],
                  [112.0796916, 16.3542721],
                  [112.081184, 16.3537906],
                  [112.0832121, 16.3533204],
                  [112.0861969, 16.3523014],
                  [112.0884545, 16.3513384],
                  [112.0893538, 16.3501851],
                  [112.0908462, 16.3482032],
                  [112.0916306, 16.3458742],
                  [112.092262, 16.3438923],
                  [112.0924725, 16.3425262],
                  [112.0924725, 16.3407571],
                  [112.0918985, 16.3389095],
                  [112.0909801, 16.3372075],
                  [112.0900043, 16.3359087],
                  [112.0894303, 16.3354272],
                  [112.088665, 16.3350913],
                  [112.0885119, 16.3342067],
                  [112.0887224, 16.3333781],
                  [112.0896408, 16.3337252],
                  [112.0910566, 16.3346098],
                  [112.0921089, 16.3362558],
                  [112.0931039, 16.3380249],
                  [112.0938118, 16.3416416],
                  [112.0944432, 16.3442394],
                  [112.0940222, 16.345807],
                  [112.0930273, 16.3482032],
                  [112.0916306, 16.3501068],
                  [112.0906357, 16.3512713],
                  [112.0887989, 16.3527045],
                  [112.0873257, 16.3532532],
                  [112.0860438, 16.3540034],
                  [112.0833652, 16.354888],
                  [112.0806866, 16.3559853],
                  [112.0788498, 16.3566683],
                  [112.0760181, 16.3571386],
                  [112.0727846, 16.3579],
                  [112.0679057, 16.358919],
                  [112.0636008, 16.3600051],
                  [112.0590854, 16.3610353],
                  [112.0550675, 16.3621214],
                  [112.051107, 16.3630843],
                  [112.0485049, 16.3636218],
                  [112.0449653, 16.3641033],
                  [112.0417892, 16.3645176],
                  [112.0377713, 16.3649207],
                ],
              ],
              [
                [
                  [112.5735904, 16.0835903],
                  [112.5719067, 16.083859],
                  [112.5710457, 16.0837246],
                  [112.5682331, 16.083176],
                  [112.5651336, 16.0829072],
                  [112.5628568, 16.0824929],
                  [112.5605991, 16.0819443],
                  [112.5586284, 16.0815412],
                  [112.5566577, 16.0807238],
                  [112.5552419, 16.0805894],
                  [112.554113, 16.0801751],
                  [112.5531181, 16.0796264],
                  [112.5519892, 16.0793577],
                  [112.5510135, 16.0792233],
                  [112.5493106, 16.0783947],
                  [112.5464981, 16.077443],
                  [112.5440873, 16.0768943],
                  [112.5418296, 16.0758082],
                  [112.539438, 16.0751252],
                  [112.5370273, 16.0741622],
                  [112.5337746, 16.0729417],
                  [112.5308282, 16.0718444],
                  [112.5271546, 16.0706127],
                  [112.5222183, 16.0689779],
                  [112.5208025, 16.0688435],
                  [112.5188127, 16.0685748],
                  [112.516555, 16.0682948],
                  [112.5152922, 16.0673431],
                  [112.5133215, 16.0667944],
                  [112.5107768, 16.0661114],
                  [112.5088061, 16.0658426],
                  [112.5073903, 16.0654284],
                  [112.5063954, 16.064611],
                  [112.5023009, 16.0633793],
                  [112.4990674, 16.0629762],
                  [112.494686, 16.0621476],
                  [112.4914334, 16.0620132],
                  [112.4887547, 16.0618788],
                  [112.4864971, 16.0611958],
                  [112.4842394, 16.0610614],
                  [112.4825365, 16.0609271],
                  [112.480011, 16.0603784],
                  [112.4773132, 16.0598297],
                  [112.4750555, 16.0594266],
                  [112.4723769, 16.0588668],
                  [112.4695644, 16.0581949],
                  [112.4658908, 16.0568289],
                  [112.4630592, 16.0555972],
                  [112.4626382, 16.0550485],
                  [112.4627913, 16.0540968],
                  [112.4634801, 16.0540968],
                  [112.464475, 16.0542311],
                  [112.4661778, 16.0551941],
                  [112.4679955, 16.0561458],
                  [112.4695644, 16.0565601],
                  [112.4725108, 16.0572432],
                  [112.4746346, 16.057915],
                  [112.4773132, 16.0583293],
                  [112.4808528, 16.0587436],
                  [112.4828235, 16.0590123],
                  [112.4857891, 16.059561],
                  [112.487492, 16.0596954],
                  [112.4897497, 16.0598297],
                  [112.4921413, 16.0601097],
                  [112.494112, 16.0606471],
                  [112.4969437, 16.0609271],
                  [112.4997562, 16.0614645],
                  [112.501459, 16.0617445],
                  [112.5049986, 16.0629762],
                  [112.5082321, 16.0637936],
                  [112.5111977, 16.0647453],
                  [112.5155792, 16.0662457],
                  [112.5182578, 16.0669288],
                  [112.5217974, 16.0674774],
                  [112.5251839, 16.0684292],
                  [112.5274416, 16.0689779],
                  [112.5299672, 16.0697953],
                  [112.5326458, 16.0708926],
                  [112.5360323, 16.0719787],
                  [112.5395719, 16.0732104],
                  [112.5426715, 16.0743078],
                  [112.5455032, 16.0755395],
                  [112.5488897, 16.0762113],
                  [112.5519892, 16.0777117],
                  [112.5548209, 16.0785403],
                  [112.5579205, 16.0792233],
                  [112.5605991, 16.0801751],
                  [112.5625889, 16.0809925],
                  [112.5654015, 16.0816755],
                  [112.5710457, 16.0816755],
                  [112.5719067, 16.0814068],
                  [112.5734564, 16.0812612],
                  [112.5760011, 16.0815412],
                  [112.5769769, 16.0818099],
                  [112.5826211, 16.0818099],
                  [112.5864477, 16.0815412],
                  [112.5887054, 16.0815412],
                  [112.5899682, 16.0814068],
                  [112.591805, 16.0809925],
                  [112.5933547, 16.0800407],
                  [112.5939096, 16.0789434],
                  [112.5946367, 16.077443],
                  [112.5947706, 16.0755395],
                  [112.5947706, 16.0733448],
                  [112.5937757, 16.0721243],
                  [112.5933356, 16.0716876],
                  [112.5930678, 16.0714413],
                  [112.591805, 16.0706127],
                  [112.5903891, 16.0703439],
                  [112.5881314, 16.0697953],
                  [112.5867156, 16.0687091],
                  [112.5857398, 16.0676118],
                  [112.584611, 16.0665257],
                  [112.5826211, 16.065294],
                  [112.5809374, 16.0648797],
                  [112.5799425, 16.0643422],
                  [112.5792346, 16.0637936],
                  [112.5781058, 16.0622819],
                  [112.5769769, 16.0613302],
                  [112.5751402, 16.0605128],
                  [112.5734564, 16.0592811],
                  [112.5719067, 16.0584637],
                  [112.5707778, 16.057915],
                  [112.5686541, 16.0560115],
                  [112.5661094, 16.0546454],
                  [112.5641387, 16.053828],
                  [112.561594, 16.0523164],
                  [112.56102, 16.0510959],
                  [112.5594702, 16.0490468],
                  [112.5589154, 16.0474008],
                  [112.5573656, 16.0454973],
                  [112.5548209, 16.0430339],
                  [112.5529842, 16.0411192],
                  [112.5507265, 16.0396187],
                  [112.5498846, 16.038667],
                  [112.5477609, 16.0370322],
                  [112.546632, 16.0362036],
                  [112.5456562, 16.0356661],
                  [112.5445083, 16.0348487],
                  [112.5435325, 16.0333371],
                  [112.5447952, 16.032934],
                  [112.5462111, 16.0333371],
                  [112.5486027, 16.0353862],
                  [112.5511474, 16.0374353],
                  [112.5534051, 16.0401674],
                  [112.5562368, 16.0433138],
                  [112.5582075, 16.0453517],
                  [112.5607522, 16.0479495],
                  [112.5620149, 16.0509503],
                  [112.5654015, 16.0534137],
                  [112.5706248, 16.0561458],
                  [112.5719067, 16.0568289],
                  [112.5766899, 16.0592811],
                  [112.5793877, 16.0617445],
                  [112.5819324, 16.0628306],
                  [112.5855868, 16.0648797],
                  [112.5895473, 16.0676118],
                  [112.5922259, 16.0689779],
                  [112.5951915, 16.071027],
                  [112.5968943, 16.0732104],
                  [112.5968943, 16.0759426],
                  [112.5964543, 16.0785403],
                  [112.5941966, 16.0811269],
                  [112.5899682, 16.0833103],
                  [112.5862947, 16.0835903],
                  [112.5834821, 16.0835903],
                  [112.5798086, 16.0833103],
                  [112.5761351, 16.0833103],
                  [112.5735904, 16.0835903],
                ],
              ],
              [
                [
                  [111.2083375, 15.7905587],
                  [111.2080505, 15.7905587],
                  [111.2077826, 15.7902788],
                  [111.2069408, 15.7902788],
                  [111.2068642, 15.7902004],
                  [111.2066729, 15.7899989],
                  [111.2060989, 15.7899989],
                  [111.2058311, 15.7897189],
                  [111.2052762, 15.7897189],
                  [111.2050083, 15.7899989],
                  [111.2047213, 15.7899989],
                  [111.2044535, 15.7897189],
                  [111.2041665, 15.7897189],
                  [111.2033246, 15.7888903],
                  [111.2030568, 15.7888903],
                  [111.2025019, 15.7883305],
                  [111.2016601, 15.7883305],
                  [111.2013922, 15.7880505],
                  [111.2008373, 15.7880505],
                  [111.2005503, 15.7877818],
                  [111.2002825, 15.7877818],
                  [111.1983309, 15.7858335],
                  [111.1983309, 15.7855536],
                  [111.1977761, 15.7850049],
                  [111.1972212, 15.7850049],
                  [111.1972212, 15.784725],
                  [111.1966664, 15.7841651],
                  [111.1966664, 15.7838852],
                  [111.1963794, 15.7836164],
                  [111.1963794, 15.7833365],
                  [111.1961115, 15.7830566],
                  [111.1955566, 15.7830566],
                  [111.1955566, 15.7826311],
                  [111.1955566, 15.7824967],
                  [111.1963794, 15.7816681],
                  [111.197336, 15.7812314],
                  [111.1974699, 15.7809627],
                  [111.1981779, 15.7806828],
                  [111.1987327, 15.780414],
                  [111.1994406, 15.780414],
                  [111.2002825, 15.7802797],
                  [111.2013922, 15.7799997],
                  [111.2013157, 15.7807388],
                  [111.2013157, 15.781153],
                  [111.2017366, 15.7815673],
                  [111.2022341, 15.7816681],
                  [111.2026741, 15.7815114],
                  [111.203229, 15.7809627],
                  [111.203229, 15.780414],
                  [111.2041665, 15.7799997],
                  [111.2055441, 15.7803468],
                  [111.205965, 15.7807611],
                  [111.206539, 15.7808955],
                  [111.2087775, 15.7819928],
                  [111.2091602, 15.7830566],
                  [111.2094472, 15.7830566],
                  [111.210002, 15.7836164],
                  [111.210002, 15.784445],
                  [111.210289, 15.784725],
                  [111.210289, 15.7850049],
                  [111.2108248, 15.7855536],
                  [111.2108248, 15.7858335],
                  [111.2113796, 15.7863934],
                  [111.2113796, 15.7866733],
                  [111.2119345, 15.7875131],
                  [111.2119345, 15.7884648],
                  [111.2112266, 15.7891591],
                  [111.2100977, 15.7899989],
                  [111.209715, 15.7899989],
                  [111.2094472, 15.7902788],
                  [111.2086053, 15.7902788],
                  [111.2083375, 15.7905587],
                ],
              ],
            ],
          },
        },
      ],
    },
  });

  map.addSource("sparaty-island", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      name: "gadm36_XSP_0",
      features: [
        {
          type: "Feature",
          properties: { GID_0: "XSP", NAME_0: "Quần đảo Trường Sa" },
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [114.3547212, 11.451389],
                  [114.3550042, 11.451389],
                  [114.3577821, 11.4541691],
                  [114.3577821, 11.4544424],
                  [114.357499, 11.4547224],
                  [114.3555527, 11.4547224],
                  [114.3550042, 11.4541691],
                  [114.3547212, 11.4541691],
                  [114.3544469, 11.4538891],
                  [114.3541638, 11.4538891],
                  [114.3538896, 11.4536091],
                  [114.3536153, 11.4536091],
                  [114.3533322, 11.4533357],
                  [114.353058, 11.4533357],
                  [114.351669, 11.4519424],
                  [114.351669, 11.451109],
                  [114.3522175, 11.451109],
                  [114.3525006, 11.4508357],
                  [114.3541638, 11.4508357],
                  [114.3547212, 11.451389],
                ],
              ],
              [
                [
                  [114.3327814, 11.4313888],
                  [114.3324983, 11.4313888],
                  [114.3319498, 11.4308355],
                  [114.3316667, 11.4308355],
                  [114.3305608, 11.4297221],
                  [114.3305608, 11.4294421],
                  [114.3300035, 11.4288888],
                  [114.3300035, 11.4286088],
                  [114.3297204, 11.4283355],
                  [114.3297204, 11.4280555],
                  [114.3294462, 11.4277755],
                  [114.3294462, 11.4275021],
                  [114.3297204, 11.4272221],
                  [114.3300035, 11.4272221],
                  [114.3302778, 11.4269421],
                  [114.3308351, 11.4269421],
                  [114.3311093, 11.4272221],
                  [114.3313924, 11.4272221],
                  [114.3316667, 11.4275021],
                  [114.3319498, 11.4275021],
                  [114.3338872, 11.4294421],
                  [114.3338872, 11.4300021],
                  [114.3341703, 11.4302755],
                  [114.3341703, 11.4305555],
                  [114.3338872, 11.4308355],
                  [114.333613, 11.4308355],
                  [114.3333387, 11.4311088],
                  [114.3330556, 11.4311088],
                  [114.3327814, 11.4313888],
                ],
              ],
              [
                [
                  [115.0261052, 11.0841652],
                  [115.0258309, 11.0841652],
                  [115.0255567, 11.0838919],
                  [115.0238847, 11.0838919],
                  [115.0236104, 11.0836119],
                  [115.0233273, 11.0836119],
                  [115.0227788, 11.0830519],
                  [115.0224957, 11.0830519],
                  [115.0219384, 11.0824985],
                  [115.0219384, 11.0822252],
                  [115.021381, 11.0816652],
                  [115.021381, 11.0813852],
                  [115.0216641, 11.0811118],
                  [115.0216641, 11.0805585],
                  [115.0219384, 11.0802785],
                  [115.0219384, 11.0797252],
                  [115.0227788, 11.0788918],
                  [115.0233273, 11.0788918],
                  [115.0236104, 11.0791652],
                  [115.0238847, 11.0791652],
                  [115.0261052, 11.0813852],
                  [115.0261052, 11.0816652],
                  [115.0263883, 11.0819452],
                  [115.0263883, 11.0822252],
                  [115.0266625, 11.0824985],
                  [115.0266625, 11.0827785],
                  [115.0269456, 11.0830519],
                  [115.0269456, 11.0836119],
                  [115.0266625, 11.0838919],
                  [115.0263883, 11.0838919],
                  [115.0261052, 11.0841652],
                ],
              ],
              [
                [
                  [114.2257807, 11.0647983],
                  [114.225356, 11.0652783],
                  [114.2242414, 11.065485],
                  [114.223339, 11.065765],
                  [114.2229851, 11.065625],
                  [114.222702, 11.0649317],
                  [114.2231886, 11.064725],
                  [114.224029, 11.064725],
                  [114.2247987, 11.064385],
                  [114.2250818, 11.064105],
                  [114.2255684, 11.064245],
                  [114.2257807, 11.0647983],
                ],
              ],
              [
                [
                  [114.2847173, 11.0566649],
                  [114.2844431, 11.0563916],
                  [114.2841688, 11.0563916],
                  [114.2822225, 11.0544449],
                  [114.2822225, 11.0541649],
                  [114.2819483, 11.0538916],
                  [114.2819483, 11.0536116],
                  [114.2816652, 11.0533316],
                  [114.2816652, 11.0527782],
                  [114.2811167, 11.0522249],
                  [114.2808336, 11.0522249],
                  [114.2805594, 11.0519449],
                  [114.2797278, 11.0519449],
                  [114.2794447, 11.0516649],
                  [114.2788962, 11.0516649],
                  [114.2783388, 11.0522249],
                  [114.2780558, 11.0522249],
                  [114.2777815, 11.0519449],
                  [114.2777815, 11.0513915],
                  [114.2772242, 11.0508315],
                  [114.2772242, 11.0502782],
                  [114.2774984, 11.0499982],
                  [114.2786131, 11.0499982],
                  [114.2788962, 11.0502782],
                  [114.2808336, 11.0502782],
                  [114.2811167, 11.0505582],
                  [114.2822225, 11.0505582],
                  [114.2825056, 11.0508315],
                  [114.2833372, 11.0508315],
                  [114.2836115, 11.0505582],
                  [114.2869378, 11.0505582],
                  [114.2872209, 11.0508315],
                  [114.2877783, 11.0508315],
                  [114.2880525, 11.0511115],
                  [114.2883268, 11.0511115],
                  [114.2886099, 11.0508315],
                  [114.2888841, 11.0511115],
                  [114.2891672, 11.0511115],
                  [114.2899988, 11.0519449],
                  [114.2899988, 11.0522249],
                  [114.2894414, 11.0527782],
                  [114.2891672, 11.0527782],
                  [114.2869378, 11.0549982],
                  [114.2866636, 11.0549982],
                  [114.2855489, 11.0561116],
                  [114.2852747, 11.0561116],
                  [114.2847173, 11.0566649],
                ],
              ],
              [
                [
                  [115.8222186, 10.8155557],
                  [115.8230591, 10.8163891],
                  [115.8229795, 10.8166758],
                  [115.8228379, 10.8170224],
                  [115.8226787, 10.8172224],
                  [115.8223248, 10.8172891],
                  [115.8219444, 10.8172224],
                  [115.8216702, 10.8166824],
                  [115.8215286, 10.8165491],
                  [115.8213871, 10.8158357],
                  [115.8216613, 10.8155557],
                  [115.8222186, 10.8155557],
                ],
              ],
              [
                [
                  [115.8043041, 10.7306949],
                  [115.8043041, 10.7312482],
                  [115.8041714, 10.7319415],
                  [115.8041714, 10.7322215],
                  [115.8044456, 10.7325015],
                  [115.8044456, 10.7330549],
                  [115.8033398, 10.7341682],
                  [115.8027825, 10.7341682],
                  [115.8022251, 10.7336082],
                  [115.8022251, 10.7330549],
                  [115.801942, 10.7327749],
                  [115.801942, 10.7316682],
                  [115.8024994, 10.7311082],
                  [115.8030479, 10.7306282],
                  [115.8032602, 10.7302149],
                  [115.8040918, 10.7301415],
                  [115.8043041, 10.7306949],
                ],
              ],
              [
                [
                  [114.424725, 10.6663875],
                  [114.4249992, 10.6666675],
                  [114.4252735, 10.6666675],
                  [114.4252735, 10.6669475],
                  [114.4255566, 10.6672209],
                  [114.4252735, 10.6675009],
                  [114.4252735, 10.6677809],
                  [114.4249992, 10.6680542],
                  [114.4249992, 10.6683342],
                  [114.424725, 10.6686142],
                  [114.424725, 10.6688875],
                  [114.4238934, 10.6697209],
                  [114.4236103, 10.6697209],
                  [114.4227787, 10.6688875],
                  [114.4227787, 10.6683342],
                  [114.4225045, 10.6680542],
                  [114.4225045, 10.6675009],
                  [114.4236103, 10.6663875],
                  [114.424725, 10.6663875],
                ],
              ],
              [
                [
                  [114.3702736, 10.3799979],
                  [114.369442, 10.3799979],
                  [114.3691678, 10.3797245],
                  [114.3677789, 10.3797245],
                  [114.3675046, 10.3794445],
                  [114.3669473, 10.3794445],
                  [114.366673, 10.3791645],
                  [114.3663899, 10.3791645],
                  [114.3661157, 10.3788912],
                  [114.3652841, 10.3788912],
                  [114.365001, 10.3786112],
                  [114.3647268, 10.3786112],
                  [114.3644437, 10.3783312],
                  [114.3641694, 10.3783312],
                  [114.3638952, 10.3780578],
                  [114.3627805, 10.3780578],
                  [114.3625062, 10.3777778],
                  [114.3619489, 10.3777778],
                  [114.3616658, 10.3774978],
                  [114.3613916, 10.3774978],
                  [114.3600026, 10.3761112],
                  [114.3600026, 10.3755578],
                  [114.3597284, 10.3752778],
                  [114.3597284, 10.3738911],
                  [114.3600026, 10.3736111],
                  [114.3600026, 10.3733311],
                  [114.3602769, 10.3730578],
                  [114.3608342, 10.3736111],
                  [114.3608342, 10.3741645],
                  [114.3613916, 10.3747245],
                  [114.3616658, 10.3747245],
                  [114.3619489, 10.3749978],
                  [114.3622231, 10.3749978],
                  [114.3625062, 10.3747245],
                  [114.3658414, 10.3747245],
                  [114.3661157, 10.3749978],
                  [114.366673, 10.3749978],
                  [114.3669473, 10.3752778],
                  [114.3672215, 10.3752778],
                  [114.3677789, 10.3758312],
                  [114.3680531, 10.3758312],
                  [114.3688847, 10.3766645],
                  [114.3691678, 10.3766645],
                  [114.369442, 10.3769445],
                  [114.3697163, 10.3769445],
                  [114.3699994, 10.3772245],
                  [114.3702736, 10.3772245],
                  [114.3713883, 10.3783312],
                  [114.3713883, 10.3791645],
                  [114.3711052, 10.3794445],
                  [114.3711052, 10.3797245],
                  [114.3705479, 10.3797245],
                  [114.3702736, 10.3799979],
                ],
              ],
              [
                [
                  [114.4811138, 10.3736111],
                  [114.481388, 10.3736111],
                  [114.4816623, 10.3738911],
                  [114.4816623, 10.3747245],
                  [114.4805564, 10.3758312],
                  [114.4805564, 10.3761112],
                  [114.4799991, 10.3766645],
                  [114.4793798, 10.3768045],
                  [114.4788933, 10.3766645],
                  [114.478619, 10.3763912],
                  [114.478619, 10.3752778],
                  [114.4802822, 10.3736111],
                  [114.4805564, 10.3736111],
                  [114.4808307, 10.3733311],
                  [114.4811138, 10.3736111],
                ],
              ],
              [
                [
                  [114.3658414, 10.1805558],
                  [114.3652841, 10.1805558],
                  [114.365001, 10.1802758],
                  [114.3641694, 10.1802758],
                  [114.3633378, 10.1794424],
                  [114.3636121, 10.1791691],
                  [114.3638952, 10.1791691],
                  [114.3641694, 10.1788891],
                  [114.365001, 10.1788891],
                  [114.3652841, 10.1786091],
                  [114.3658414, 10.1786091],
                  [114.3661157, 10.1783358],
                  [114.3669473, 10.1783358],
                  [114.3672215, 10.1780558],
                  [114.3683362, 10.1780558],
                  [114.3686105, 10.1783358],
                  [114.3688847, 10.1783358],
                  [114.3691678, 10.1786091],
                  [114.3691678, 10.1791691],
                  [114.3688847, 10.1794424],
                  [114.3686105, 10.1794424],
                  [114.3683362, 10.1797224],
                  [114.3680531, 10.1797224],
                  [114.3677789, 10.1800025],
                  [114.3675046, 10.1800025],
                  [114.3672215, 10.1802758],
                  [114.3661157, 10.1802758],
                  [114.3658414, 10.1805558],
                ],
              ],
            ],
          },
        },
      ],
    },
  });
  // inline viền
  map.addLayer({
    id: "paracel-island-laber",
    type: "line",
    source: "paracel-island",
    paint: {
      "line-color": "#111111", // Màu đỏ
      "line-width": 3, // Độ dày đường viền
    },
  });

  // Thêm nhãn tên quần đảo
  map.addLayer({
    id: "paracel-island-label",
    type: "symbol",
    source: "paracel-island",
    layout: {
      "text-field": "Quần Đảo Hoàng Sa", //["get", "NAME_0"], // Lấy thuộc tính NAME_0 từ GeoJSON
      "text-size": 14, // Cỡ chữ
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"], // Font chữ
      "text-anchor": "center", // Canh giữa
    },
    paint: {
      "text-color": "#111111", // Màu chữ đỏ
      "text-halo-color": "#ffffff", // Viền trắng để dễ nhìn
      "text-halo-width": 2,
    },
  });
  // inline viền
  map.addLayer({
    id: "sparaty-island-laber",
    type: "line",
    source: "sparaty-island",
    paint: {
      "line-color": "#111111", // Màu đỏ
      "line-width": 3, // Độ dày đường viền
    },
  });

  // Thêm nhãn tên quần đảo
  map.addLayer({
    id: "sparaty-island-label",
    type: "symbol",
    source: "sparaty-island",
    layout: {
      "text-field": "Quần Đảo Trường Sa", //["get", "NAME_0"], // Lấy thuộc tính NAME_0 từ GeoJSON
      "text-size": 14, // Cỡ chữ
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"], // Font chữ
      "text-anchor": "center", // Canh giữa
    },
    paint: {
      "text-color": "#111111", // Màu chữ đỏ
      "text-halo-color": "#ffffff", // Viền trắng để dễ nhìn
      "text-halo-width": 2,
    },
  });
});

// Ngăn chặn các phím tắt
const preventDevTools = (e) => {
  // Ngăn chặn Ctrl+U
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    return false;
  }

  // Ngăn chặn Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    return false;
  }

  // Ngăn chặn F12
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
};

// Ngăn chặn menu chuột phải
const preventRightClick = (e) => {
  e.preventDefault();
  return false;
};

// Phát hiện khi DevTools được mở
const detectDevTools = () => {
  // Phát hiện DevTools bằng cách kiểm tra kích thước cửa sổ
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  // Phát hiện DevTools bằng cách sử dụng console.clear
  const checkDevToolsOpen = () => {
    const startTime = new Date();
    console.log();
    console.clear();
    const endTime = new Date();
    return endTime - startTime > 100;
  };

  if (widthThreshold || heightThreshold || checkDevToolsOpen()) {
    // Khi phát hiện DevTools được mở, tải lại trang
    window.location.reload();
  }
};

// Thêm event listener khi script được chạy
document.addEventListener('keydown', preventDevTools);
document.addEventListener('contextmenu', preventRightClick);

// Kiểm tra DevTools định kỳ
const interval = setInterval(detectDevTools, 1000);

// Cleanup khi không cần thiết (nếu cần)
const cleanup = () => {
  document.removeEventListener('keydown', preventDevTools);
  document.removeEventListener('contextmenu', preventRightClick);
  clearInterval(interval);
};

// Gọi cleanup() nếu cần dừng các sự kiện