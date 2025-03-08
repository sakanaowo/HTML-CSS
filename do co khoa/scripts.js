var isMouseDown = false; // Biến kiểm tra trạng thái kéo
var prevX, prevY; // Lưu vị trí trước đó của chuột

function mouseDown(event) {
    prevX = event.pageX;
    prevY = event.pageY;
    isMouseDown = true;
}

function mouseUp(event) {
    isMouseDown = false;
}

function mouseMove(event) {
    if (!isMouseDown) {
        return;
    }
    var elem = document.getElementById("div1"); // Lấy phần tử có id="div1"

    // Cập nhật vị trí của phần tử
    elem.style.left = (elem.offsetLeft + (event.pageX - prevX)) + "px";
    elem.style.top = (elem.offsetTop + (event.pageY - prevY)) + "px";

    // Cập nhật lại vị trí trước đó của chuột
    prevX = event.pageX;
    prevY = event.pageY;
}

// Gán sự kiện cho phần tử div1
document.addEventListener("DOMContentLoaded", function () {
    var elem = document.getElementById("div1");

    // Gán các sự kiện chuột
    elem.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);
});
