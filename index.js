function TinhTBC(){
    let bienA = parseFloat(document.getElementById("bienA").value);
    let bienB =  parseFloat(document.getElementById("bienB").value);
    let bienTBC = ((bienA+bienB)/2);
    if(isNaN(bienTBC)){
        document.getElementById("ketQua").innerHTML = "Nhập sai định dạng";
    }else{
        document.getElementById("ketQua").innerHTML = bienTBC;
    }
}