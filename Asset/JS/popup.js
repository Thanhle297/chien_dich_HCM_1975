// Danh sách các markers
const markers = [
  {
    lng: 107.036738,
    lat: 10.805797,
    rotation: 90,
    title: "Hướng Đông",
    description:
      "Quân đoàn 4 - tiêu diệt Sở chỉ huy Bộ tư lệnh quân đoàn 3 và sư đoàn 18 quân lực Việt Nam Cộng hòa ở Biên Hòa, sau đó thọc sâu vào nội thành, chiếm Dinh Độc Lập",
  },
  {
    lng: 107.002803,
    lat: 10.628155,
    rotation: 110,
    title: "Hướng Đông Nam",
    description:
      "Quân đoàn 2 - đánh chiếm Bà Rịa, căn cứ Nước Trong, Long Bình, sau đó phát triển vào nội thành cùng quân đoàn 4 đánh chiếm Dinh Độc Lập.",
  },
  {
    lng: 106.6963,
    lat: 11.042992,
    rotation: 0,
    title: "Hướng Bắc",
    description:
      "Quân đoàn 1 - đánh chiếm căn cứ Phú Lợi, tiêu diệt Sư đoàn 5 quân lực Việt Nam Cộng hòa, tiếp đó đánh chiếm Bộ Tổng tham mưu",
  },
  {
    lng: 106.377767,
    lat: 10.996907,
    rotation: 318,
    title: "Hướng Tây Bắc",
    description:
      "Quân đoàn 3 - đánh chiếm Đồng Dù, tiêu diệt Sư đoàn 35, chiếm Sân Bay Tân Sơn Nhất và cùng quân đoàn 1 chiếm Bộ Tổng tham mưu",
  },
  {
    lng: 106.458069,
    lat: 10.537206,
    rotation: 210,
    title: "Hướng Tây - Tây Nam",
    description:
      "Đoàn 232 Sư đoàn 8 - tiêu diệt Sư đoàn 25, cắt đường số 4 rồi đánh thọc sâu chiếm Biệt khu Thủ đô, Tổng Nha cảnh sát",
  },
];

// Khi bản đồ tải xong, thêm các marker vào
map.on("load", () => {
  markers.forEach((markerData) => {
    // Tạo div chứa ảnh
    const markerDiv = document.createElement("div");
    markerDiv.className = "custom-marker";

    // Tạo ảnh bên trong div
    const img = document.createElement("img");
    img.src =
      "https://map-hcmussh.github.io/chiendichhcm/static/media/red-arrow.23ea599922e5ec8de25b.gif";
    img.style.width = "50px";
    img.style.transform = `rotate(${markerData.rotation}deg)`;
    markerDiv.appendChild(img);

    // Tạo marker bằng MapboxGL (để nó có thể click)
    new mapboxgl.Marker(markerDiv)
      .setLngLat([markerData.lng, markerData.lat])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h3>${markerData.title}</h3><p class = "content_2">${markerData.description}</p>`
        )
      )
      .addTo(map);
  });
});
