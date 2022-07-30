document.getElementById('random').onclick = () => {
    const valueRandom = Math.random();
    const value=Math.floor(Math.random() *4 );
    switch(value) {
        case 0:
        document.getElementsByTagName("h3") [0].innerText="Nguyễn Duy Hậu";
         break
        case 1:
        document.getElementsByTagName("h3") [0].innerText="Nguyễn Ngô Diễm Quỳnh";
        break
        case 2:
        document.getElementsByTagName("h3") [0].innerText="lưu Vĩnh Khôi";
        break
        case 3:
        document.getElementsByTagName("h3") [0].innerText="Kiều Thị Lệ Hoa";
        break
    
    }

};




    