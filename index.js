

/*
        Kiểu dữ liệu: số (number): số nguyên số thực
        Kiểu đúng sai (boolean): true/false
        Kiểu chuỗi (string): "Dinh Huu", 'Dang Quang'
        Kiểu đối tượng: object - null
        Kiểu undefined: let a;
        let age = 100;  //number        
        let age = "999"; //string      
        let age;      //underfined          
        console.log(typeof age);        
        let a = null;           
        console.log(typeof a); // object

        const locationRegion = "28 NTP";        // quy tắc đặc tên biến: lạc đà  
        locationRegion = "2 Nguyễn Huệ";
        console.log(locationRegion);

        let a = 'asdvsdvsdvsv';
        console.log(a);

        let a = "Bảo" + " Ngân";   
        console.log(Boolean(a));        // 0, "", false, null, undefined

        let b = 2 - 2;
        console.log(Boolean(b));    

        let a = 5;
        let b = 10;

        let c = a % b;      // chia lấy dư     
        console.log(c);


        let a = 5;
        a += 10;            // a = a +10
        console.log(a);

        var b = 5;
        // b += 1; 
        b++;            // b = b + 1
        ++b;    
        console.log(b);


        let b = 10;
        let a = "5";
        let c = b + 5 + a;

        console.log(c);


        let a = 4;
        let b = "4";
        let c = "2";


        let total = a + b + c;
        console.log(total);
        console.log(typeof total);      // xem kiểu dữ liệu là gì


        let a = 5;      
        let b = "5";    


        if (a !== b) {          !==: vừa so sánh giá trị và kdl
            console.log("ddd");
        }

        let a = 5;
        var b = a * 2 == "10";  
        console.log(b);
        */

        function showMessage(){
            document.getElementById('messageDiv').innerHTML = 'Xin chào!';
        }