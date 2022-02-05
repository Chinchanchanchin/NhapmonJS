function numbRandom () {
    let input = document.getElementById("input").value;
    let khoangcach = input - 10;
    let sodoan = +prompt("nhập số bạn muốn đoán từ " + khoangcach + " đến " + input);
    let number = Math.floor(Math.random()*(input - khoangcach + 1))+ khoangcach; 
    console.log(number);
    let count; 


    for (count= 1; count < 3; count ++) {
        if (sodoan < number) {
            sodoan = +prompt("bé hơn số đúng. Vui lòng nhập lại");
            
        } else if (sodoan > number) {
            sodoan = +prompt("lớn hơn số đúng. Vui lòng nhập lại");
            
        } else if (sodoan = number) {
            alert("kết quả đúng");
            break;
        }
    } alert("kết thúc trò chơi");
 }


 function guess() {
     let input = prompt("Nhập chữ số mà bạn muốn đoán");
     let arr1= ["L","Y","T","H","A","I","T","O"];
     let count=0;
     for(let i = 0; i<arr1.length;i++) {
         if (input = arr1[i]) {
             count+=count;
             alert(arr1[i] + "xuất hiện" + count + "lần");
             
         }
     }
 }