var logText = "sign in";
var likeArr = [];
var cartArr = [];
likeArr = JSON.parse(localStorage.getItem('session')) || [];
var colArr = ["#FFB92D", "#61C589", "#FF805D", "#FF2366", "#8916FF", "#FF25C2", "#4E3EC8", "#0D5C46", "#FF25C2", "#8916FF", "#00966B", "#0D7D65", "#FFBA00", "#425C5A", "#F83A26", "#56BDE6", "#824CC6", "#40CDE8", "#FFB92D", "#25DFFF", "#F68059", "#8F98FF"]
var enterName, enterPass;
var first1, first2, fr, logText, logstat;
var upname, upemail, uppass, upc, upmobile;
var su, se, sphn, sp, spc, eq = false;
var likes = [];
var carts = [];
var starId;
window.onload = function() {
    fr = localStorage.getItem("firstL");
    retText = localStorage.getItem("username");
    logstat = localStorage.getItem("Log");

    var selcolor = colArr[Math.floor(Math.random() * colArr.length)];
    if (logstat) {
        document.getElementById("signLogo").style.display = "block";
        document.getElementById("signLogo").style.backgroundColor = selcolor;
        document.getElementById("innerL").innerText = fr;
        document.getElementById("navM").innerText = retText;
        document.getElementById("originalsignIn").style.display = "none";
    } else {
        document.getElementById("signLogo").style.display = "none";
        document.getElementById("originalsignIn").style.display = "block";
    }


}
var menuList = [{
        id: 1,
        name: "chicken biryani",
        type: "non",
        ratings: 4.8,
        Isrc: "assests/chickenB.jpg",
        totalRatings: 508,
        cost: 200

    },
    {
        id: 2,
        name: "Egg biryani",
        type: "non",
        ratings: 4.1,
        Isrc: "assests/eggB.jpg",
        totalRatings: 390,
        cost: 150
    },
    {
        id: 3,
        name: "vegetable biryani",
        type: "vegetarian",
        ratings: 3.5,
        totalRatings: 410,
        Isrc: "assests/vegB.jpg",
        cost: 90
    },
    {
        id: 4,
        name: "Veg Salad",
        type: "vegetarian",
        ratings: 2,
        Isrc: "assests/vegS.jpg",
        totalRatings: 90,
        cost: 50
    },
    {
        id: 5,
        name: "Gulab jamun",
        type: "dessert",
        ratings: 3,
        Isrc: "assests/gulab.jpg",
        totalRatings: 120,
        cost: 40
    },
    {
        id: 6,
        name: "Daal makhani",
        type: "vegetarian",
        ratings: 4,
        Isrc: "assests/soup.jpg",
        totalRatings: 369,
        cost: 80
    },
    {
        id: 7,
        name: "wine",
        type: "bevarages",
        ratings: 3.2,
        Isrc: "assests/icedT.jpg",
        totalRatings: 143,
        cost: 70
    },
    {
        id: 8,
        name: "lemonade",
        type: "bevarages",
        ratings: 2,
        Isrc: "assests/lemon.jpg",
        totalRatings: 60,
        cost: 210
    },
    {
        id: 9,
        name: "Mutton biryani",
        type: "non",
        ratings: 5,
        Isrc: "assests/lambB.jpg",
        totalRatings: 700,
        cost: 300
    },
    {
        id: 10,
        name: "Garlic Naan",
        type: "vegetarian",
        ratings: 4.8,
        Isrc: "assests/fries.jpg",
        totalRatings: 642,
        cost: 100
    }, {
        id: 11,
        name: "Butter chicken",
        type: "non",
        ratings: 4.8,
        Isrc: "assests/butterC.jpg",
        totalRatings: 1213,
        cost: 180
    }, {
        id: 12,
        name: "Mutton curry",
        type: "non",
        ratings: 5,
        Isrc: "assests/chickentikka.jpg",
        totalRatings: 2000,
        cost: 250
    }, {
        id: 13,
        name: "Chicken tikka masala",
        type: "non",
        ratings: 4.6,
        Isrc: "assests/chickentikka.jpg",
        totalRatings: 990,
        cost: 280
    }, {
        id: 14,
        name: "Veg soup",
        type: "vegetarian",
        ratings: 4,
        Isrc: "assests/soup.jpg",
        totalRatings: 302,
        cost: 120
    }, {
        id: 15,
        name: "Iced tea",
        type: "bevarages",
        ratings: 4.2,
        Isrc: "assests/icedT.jpg",
        totalRatings: 454,
        cost: 99
    }, {
        id: 16,
        name: "Hot chocolate",
        type: "bevarages",
        ratings: 4.9,
        Isrc: "assests/hotchoc.jpg",
        totalRatings: 149,
        cost: 642
    }, {
        id: 17,
        name: "Panner tikka masala",
        type: "vegetarian",
        ratings: 4.8,
        Isrc: "assests/pannerT.jpg",
        totalRatings: 789,
        cost: 125
    }, {
        id: 18,
        name: "Milk Shake",
        type: "bevarages",
        ratings: 5,
        Isrc: "assests/milkshake.jpg",
        totalRatings: 476,
        cost: 30
    }, {
        id: 19,
        name: "Potato fries",
        type: "vegetarian",
        ratings: 4.6,
        Isrc: "assests/fries.jpg",
        totalRatings: 999,
        cost: 249
    }, {
        id: 20,
        name: "kheer",
        type: "dessert",
        ratings: 3.9,
        Isrc: "assests/kheer.jpg",
        totalRatings: 189,
        cost: 30
    }, {
        id: 21,
        name: "chicken kebab",
        type: "non",
        ratings: 4.7,
        Isrc: "assests/kebab.jpg",
        totalRatings: 842,
        cost: 180
    },
  /*{
        id: 22,
        name: "Rasu gulla",
        type: "dessert",
        ratings: 3.6,
        Isrc: "assests/rasgulla.jpg",
        totalRatings: 510,
        cost: 99
    },*/
    
    {
        id: 23,
        name: "Masala Dosa",
        type: "vegetarian",
        ratings: 4,
        Isrc: "assests/dosa.jpg",
        totalRatings: 1042,
        cost: 110
    }, {
        id: 24,
        name: "Rasmilai",
        type: "dessert",
        ratings: 4.6,
        Isrc: "assests/rasmilai.jpg",
        totalRatings: 895,
        cost: 79
    }, {
        id: 25,
        name: "pepperoni mix pizza",
        type: "pizza",
        ratings: 4.7,
        Isrc: "assests/pizza.jpg",
        totalRatings: 995,
        cost: 120
    }, {
        id: 26,
        name: "veggie burgers",
        type: "burger veg",
        ratings: 4.5,
        Isrc: "assests/burger.jpg",
        totalRatings: 1095,
        cost: 130
    }, {
        id: 27,
        name: "cheese burger",
        type: "burger veg",
        ratings: 4.4,
        Isrc: "assests/burger.jpg",
        totalRatings: 3217,
        cost: 199
    }, {
        id: 28,
        name: "white sauce pasta",
        type: "pasta veg",
        ratings: 3.6,
        Isrc: "assests/pasta.jpg",
        totalRatings: 765,
        cost: 80
    }, {
        id: 29,
        name: "cheese pizza",
        type: "pizza veg",
        ratings: 4.6,
        Isrc: "assests/pizza.jpg",
        totalRatings: 2456,
        cost: 149
    }, {
        id: 30,
        name: "italian cheese pasta",
        type: "pasta veg",
        ratings: 3.2,
        Isrc: "assests/pasta.jpg",
        totalRatings: 265,
        cost: 100
    }, {
        id: 31,
        name: "veg corn cheese pizza",
        type: "pizza veg",
        ratings: 3.1,
        Isrc: "assests/pizza.jpg",
        totalRatings: 2314,
        cost: 99
    }, {
        id: 32,
        name: "chicken burger",
        type: "burger non",
        ratings: 4.0,
        Isrc: "assests/burger.jpg",
        totalRatings: 3214,
        cost: 299
    }, {
        id: 33,
        name: "chicken pizza",
        type: "pizza non",
        ratings: 4.9,
        Isrc: "assests/pizza.jpg",
        totalRatings: 2975,
        cost: 200
    }
]

var places1 = [{
        id: 1,
        name: "Indian Accents",
        city: "New Delhi",
        country: "India",
        src: "assests/delhi.jpg",
        ratings: 5,
        totalRatings: 508,
        cost: 999
    },
    {
        id: 2,
        name: "Bomras",
        city: "Los angeles",
        country: "United States",
        src: "assests/losA.jpg",
        ratings: 3,
        totalRatings: 390,
        cost: 220
    },
    {
        id: 3,
        name: "Mirazur",
        city: "paris",
        country: "France",
        src: "assests/paris.jpg",
        ratings: 3.5,
        totalRatings: 410,
        cost: 599
    },
    {
        id: 4,
        name: "Gaggan",
        city: "Bangkok",
        country: "Thailand",
        src: "assests/bangkok_1.jpg",
        ratings: 2,
        totalRatings: 90,
        cost: 499
    },
    {
        id: 5,
        name: "Toast and tonic",
        city: "Bengaluru",
        country: "India",
        src: "assests/Bengaluru.jpg",
        ratings: 3,
        totalRatings: 120,
        cost: 699
    },
    {
        id: 6,
        name: "Arpege",
        city: "Paris",
        country: "France",
        src: "assests/paris.jpg",
        ratings: 4,
        totalRatings: 369,
        cost: 1200
    },
    {
        id: 7,
        name: "The Fatty Bao",
        city: "Rome",
        country: "Italy",
        src: "assests/italy.jpg",
        ratings: 3.2,
        totalRatings: 143,
        cost: 1200
    },
    {
        id: 8,
        name: "Slink & Bardot",
        city: "Berlin",
        country: "Germany",
        src: "assests/berlin.jpg",
        ratings: 2,
        totalRatings: 60,
        cost: 1099
    },
    {
        id: 9,
        name: "Savya Rasa",
        city: "Pune",
        country: "India",
        src: "assests/pune.jpg",
        ratings: 5,
        totalRatings: 700,
        cost: 150
    },
    {
        id: 10,
        name: "Mum's kitchen",
        city: "Las vegas",
        country: "United States",
        src: "assests/lasV.jpg",
        ratings: 4.8,
        totalRatings: 642,
        cost: 799
    }, {
        id: 11,
        name: "Blur ginger",
        city: "Mumbai",
        country: "India",
        src: "assests/mumbai.jpg",
        ratings: 4.8,
        totalRatings: 1213,
        cost: 399
    }, {
        id: 12,
        name: "Bastian",
        city: "Hyderabad",
        country: "India",
        src: "assests/hyd.jpg",
        ratings: 5,
        totalRatings: 2000,
        cost: 250
    }, {
        id: 13,
        name: "Comorin",
        city: "Mumbai",
        country: "India",
        src: "assests/mumbai.jpg",
        ratings: 4.6,
        totalRatings: 990,
        cost: 280
    }, {
        id: 14,
        name: "Farzi cafe",
        city: "Vijayawada",
        country: "India",
        src: "assests/vij.jpg",
        ratings: 4,
        totalRatings: 302,
        cost: 120
    }, {
        id: 15,
        name: "The salt house",
        city: "Hyderabad",
        country: "India",
        src: "assests/hyd.jpg",
        ratings: 4.2,
        totalRatings: 454,
        cost: 99
    }, {
        id: 16,
        name: "Olive bar and kitchen",
        city: "Vijayawada",
        country: "India",
        src: "assests/vij.jpg",
        ratings: 4.9,
        totalRatings: 149,
        cost: 642
    }, {
        id: 17,
        name: "Mustard",
        city: "Chandigarh",
        country: "India",
        src: "assests/chandi.jpg",
        ratings: 4.8,
        totalRatings: 789,
        cost: 125
    }, {
        id: 18,
        name: "Gun powder",
        city: "Amritsar",
        country: "India",
        src: "assests/amritsar.jpg",
        ratings: 5,
        totalRatings: 476,
        cost: 30
    }, {
        id: 19,
        name: "Karavalli",
        city: "Vizag",
        country: "India",
        src: "assests/vizag.jpg",
        ratings: 4.6,
        totalRatings: 999,
        cost: 249
    }, {
        id: 20,
        name: "Tres",
        city: "New york",
        country: "United states",
        ratings: 3.9,
        src: "assests/newyork.jpg",
        totalRatings: 189,
        cost: 20
    }, {
        id: 21,
        name: "Gajalee",
        city: "Goa",
        country: "India",
        src: "assests/goa.jpg",
        ratings: 4.7,
        totalRatings: 842,
        cost: 180
    }, {
        id: 22,
        name: "Leela palace",
        city: "Vizag",
        country: "India",
        src: "assests/vizag.jpg",
        ratings: 3,
        totalRatings: 510,
        cost: 500
    }, {
        id: 23,
        name: "ITC maurya",
        city: "Chennai",
        country: "India",
        src: "assests/chennai.jpg",
        ratings: 4.2,
        totalRatings: 1042,
        cost: 2500
    }, {
        id: 24,
        name: "Taj Falaknuma",
        city: "Hyderabad",
        country: "India",
        src: "assests/hyd.jpg",
        ratings: 4.6,
        totalRatings: 19995,
        cost: 1500
    }

]

function logout() {
    /*localStorage.clear();
    window.location.reload();*/
    swal({
        title: "Are you sure to log out?",
        text: "We hope you satisfied with our service!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willLogOut) => {
        if (willLogOut) {
            localStorage.clear();
            swal("You logged out successfully!", {
                icon: "success",
            }).then((load) => {
                window.location.reload();
            });
        }
    });
}

var myApp = angular.module("myswiggy", []).controller("mainController", function($scope) {
    $scope.link1 = "Home";
    $scope.link2 = "Dishes";
    $scope.link3 = "Connect";
    $scope.signing = function() {
        var isLogin = false;
        var u1, p1 = false;
        enterName = document.getElementById("Form-user1").value;
        enterPass = document.getElementById("Form-pass").value;
        if (enterName.length <= 0) {
            document.getElementById("a1").style.display = "block";
        } else {
            document.getElementById("a1").style.display = "none";
            u1 = true;
        }
        if (enterPass.length <= 0) {
            document.getElementById("a2").style.display = "block";

        } else {
            document.getElementById("a2").style.display = "none";
            p1 = true;
        }
        if (u1 && p1) {
            isLogin = true;
            var i = 0
            while (enterName[i] == " ") {
                i++;
            }
            first1 = enterName[i].toUpperCase();
            localStorage.setItem("Log", isLogin);
            localStorage.setItem("username", enterName);
            localStorage.setItem("password", enterPass);
            localStorage.setItem("firstL", first1);
            localStorage.setItem("mobile", upmobile);
            localStorage.setItem("email", upemail);
            swal("Successfully logged in", "Welcome to mySwiggy.com", "success").then((value) => {
                window.location.reload();
            });
        } else {
            swal("Log in failed", "Please! Try again", "error");

        }
    }

    $scope.signuping = function() {
        var isLogin = false;
        var su, se, sphn, sp, spc, eq = false;
        upname = document.getElementById("Form-usernname1").value;
        upemail = document.getElementById("Form-email2").value;
        upmobile = document.getElementById("Form-phn").value;
        uppass = document.getElementById("Form-pass1").value;
        upc = document.getElementById("Form-pass2").value;
        /*console.log(uppass);
        console.log(upc);
        console.log(typeof(uppass));
        console.log(typeof(upc));
        console.log(typeof(String(uppass)));*/
        if (upname.length <= 0) {
            document.getElementById("a3").style.display = "block";
        } else {
            document.getElementById("a3").style.display = "none";
            su = true;
        }
        if (upemail.length <= 0) {
            document.getElementById("a4").style.display = "block";
        } else {
            document.getElementById("a4").style.display = "none";
            se = true;
        }
        if (upmobile.length <= 0) {
            document.getElementById("a5").style.display = "block";
            document.getElementById("a5").innerText = "*please enter the phone number";
        } else if (upmobile.length > 10) {
            document.getElementById("a5").style.display = "block";
            document.getElementById("a5").innerText = "*Only 10 characters are possible";
        } else if (upmobile.length < 10) {
            document.getElementById("a5").style.display = "block";
            document.getElementById("a5").innerText = "* 10 characters should require";
        } else if (isNaN(upmobile * 1)) {
            document.getElementById("a5").style.display = "block";
            document.getElementById("a5").innerText = "* Please enter the numbers only";
        } else {
            document.getElementById("a5").style.display = "none";
            document.getElementById("a5").innerText = "";
            sphn = true;
        }
        if (uppass.length <= 0) {
            document.getElementById("a6").style.display = "block";
        } else {
            document.getElementById("a6").style.display = "none";
            sp = true;
        }
        if (upc.length <= 0) {
            document.getElementById("a7").style.display = "block";
        } else {
            document.getElementById("a7").style.display = "none";
            spc = true;
        }
        if (String(uppass) == String(upc)) {
            document.getElementById("a7").style.display = "none";
            eq = true;
        } else {
            document.getElementById("a7").style.display = "block";
            document.getElementById("a7").innerText = "*Passwords are not matching";

        }

        if (su && se && sphn && sp && spc && eq) {
            isLogin = true;
            var i = 0
            while (upname[i] == " ") {
                i++;
            }
            first2 = upname[i].toUpperCase();
            localStorage.setItem("Log", isLogin);
            localStorage.setItem("username", upname);
            localStorage.setItem("firstL", first2);
            localStorage.setItem("password", uppass);
            localStorage.setItem("mobile", upmobile);
            localStorage.setItem("email", upemail);
            swal("Sign Up successfully", "Enjoy the day!", "success").then((value) => {
                window.location.reload();
            });
        } else {
            swal("Sign Up failed", "Please! Try again", "error");

        }
    }

}).controller("dishController", function($scope) {
    $scope.menu = menuList;

    $scope.booking = function(event) {

        var itemId = event.target.id;
        var i = 0;
        var pos;
        var find = false;
        for (i = 0; i < menuList.length; i++) {
            if (menuList[i].id == itemId) {
                find = true;
                pos = i;
            }
        }
        if (find) {
            $scope.orderedItemName = menuList[pos].name;
            $scope.orderedtype = menuList[pos].type;
            $scope.time = new Date().toGMTString();
            $scope.Totalcost = menuList[pos].cost;
        }

    }
    $scope.liking = function(event) {
        event.stopPropagation();
        if (logstat) {
            if (document.getElementById(event.target.id).style.color === "red") {
                document.getElementById(event.target.id).style.color = "black";
                var itemId = event.target.id.slice(5);
                var i = 0;
                var pos;
                var find = false;
                for (i = 0; i < likeArr.length; i++) {
                    if (likeArr[i].id == itemId) {
                        find = true;
                        pos = i;
                    }
                }
                if (find) {
                    likeArr.splice(pos, 1);
                    // console.log(likeArr);
                    localStorage.setItem("likedItems", JSON.stringify(likeArr));
                    // console.log(localStorage);
                }
            } else {
                document.getElementById(event.target.id).style.color = "red";


                likeArr.push(menuList[Number(event.target.id.slice(5)) - 1]);
                // console.log(likeArr);
                localStorage.setItem("likedItems", JSON.stringify(likeArr));
                // console.log(localStorage);
            }
        } else {
            swal("Unable to like!", "Please! Log in or Sign Up first!", "warning");
        }
    }
    $scope.carting = function(event) {
        event.stopPropagation();
        if (logstat) {
            if (document.getElementById(event.target.id).style.color === "red") {
                document.getElementById(event.target.id).style.color = "black";
                var itemId = event.target.id.slice(4);
                var i = 0;
                var pos;
                var find = false;
                for (i = 0; i < cartArr.length; i++) {
                    if (cartArr[i].id == itemId) {
                        find = true;
                        pos = i;
                    }
                }
                if (find) {
                    cartArr.splice(pos, 1);
                    //console.log(cartArr);
                    localStorage.setItem("cartItems", JSON.stringify(cartArr));
                    //console.log(localStorage);
                }
            } else {
                document.getElementById(event.target.id).style.color = "red";



                cartArr.push(menuList[Number(event.target.id.slice(4)) - 1]);
                //console.log(cartArr);
                localStorage.setItem("cartItems", JSON.stringify(cartArr));
                // console.log(localStorage);
            }
        } else {
            swal("Unable to cart!", "Please! Log in or Sign Up first!", "warning");
        }
    }

}).controller("likeController", function($scope) {
    likes = JSON.parse(localStorage.getItem("likedItems"));
    $scope.msg = "no items available";
    if (likes <= 0) {
        document.getElementById("noitems").style.display = "block";
        document.getElementById("clrl").style.display = "none";
    } else {
        document.getElementById("noitems").style.display = "none";
        document.getElementById("clrl").style.display = "block";
        $scope.favitems = likes;
    }
    $scope.booking = function(event) {
        var itemId = event.target.id.slice(3);
        var i = 0;
        var pos;
        var find = false;
        for (i = 0; i < menuList.length; i++) {
            if (menuList[i].id == itemId) {
                find = true;
                pos = i;
            }
        }
        if (find) {
            $scope.orderedItemName = menuList[pos].name;
            $scope.orderedtype = menuList[pos].type;
            $scope.time = new Date().toGMTString();
            $scope.Totalcost = menuList[pos].cost;
        }
    }
    $scope.clearLikes = function() {
        swal({
            title: "Are you sure?",
            text: "Do you want to clear your favourite items?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willreject) => {
            if (willreject) {
                var likeArr1 = [];
                localStorage.setItem("likedItems", JSON.stringify(likeArr1));
                swal("Items cleared successfully", {
                    icon: "success",
                }).then((value) => {
                    if (value) {
                        window.location.reload();
                    }
                });
            }
        });

    }
}).controller("cartController", function($scope) {
    carts = JSON.parse(localStorage.getItem("cartItems"));
    $scope.msg = "no items available";
    if (carts <= 0) {
        document.getElementById("noitems").style.display = "block";
        document.getElementById("clrc").style.display = "none";

    } else {
        document.getElementById("clrc").style.display = "block";

        document.getElementById("noitems").style.display = "none";
        $scope.cartitems = carts;
    }
    $scope.bookingcart = function(event) {
        var itemId = event.target.id.slice(6);
        var i = 0;
        var pos;
        var find = false;
        for (i = 0; i < menuList.length; i++) {
            if (menuList[i].id == itemId) {
                find = true;
                pos = i;
            }
        }
        if (find) {
            $scope.orderedItemName = menuList[pos].name;
            $scope.orderedtype = menuList[pos].type;
            $scope.time = new Date().toGMTString();
            $scope.Totalcost = menuList[pos].cost;
        }
    }
    $scope.clearCart = function() {
        swal({
            title: "Are you sure?",
            text: "Do you want to clear your cart items?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willreject) => {
            if (willreject) {
                var cartArr1 = [];
                localStorage.setItem("cartItems", JSON.stringify(cartArr1));
                swal("Items cleared successfully", {
                    icon: "success",
                }).then((value) => {
                    if (value) {
                        window.location.reload();
                    }
                });
            }
        });

    }

}).controller("reserveController", function($scope) {
    $scope.list = places1;
    var seats = 1;

    $scope.booking = function(event) {
        var pos;
        var itemId = event.target.id;
        var i = 0;
        var find = false;
        for (i = 0; i < places.length; i++) {
            if (places[i].id == itemId) {
                find = true;
                pos = i;
            }
        }
        if (find) {
            $scope.orderedItemName = places[pos].name;
            $scope.orderedcity = places[pos].city;
            $scope.orderedcountry = places[pos].country;
            $scope.time = new Date().toGMTString();
            $scope.Totalcost = Number(places[pos].cost);
            $scope.seatssel = seats == 1 ? 0 : (seats - 1);
        }

    }

    $scope.selchair = function(event) {


        if (event.target.style.backgroundColor != "green") {
            seats = seats + 1;
            event.target.style.backgroundColor = "green";
            $scope.seatssel = seats == 2 ? 1 : (seats - 1);
        } else {
            seats = seats - 1;
            event.target.style.backgroundColor = "#ffcc7b99";
            $scope.seatssel = (seats - 1);
        }

    }



}).controller("connectController", function($scope) {

    $scope.clicking = function(event) {
        starId = Number(event.target.id);
        console.log(starId);
        for (var i = 0; i < starId; i++) {
            document.getElementsByClassName("icol")[i].style.color = "gold";
        }
        for (var i = starId; i < 5; i++) {
            document.getElementsByClassName("icol")[i].style.color = "#ccc";
        }
    }
    var j = 0;
    var EId, TId, LId;
    $scope.posting = function() {
        starId = starId ? starId : 0;
        var postername = localStorage.getItem("username");
        var logcheck = localStorage.getItem("Log");
        var date = new Date().toGMTString();
        var fl = localStorage.getItem("firstL");
        var feedText = document.getElementById("feed").value;
        if (logcheck) {
            var Hasword = false;
            var pos;
            var a = feedText.length;
            var i = 0;
            while (i < a) {
                var b = feedText.charCodeAt(i);
                if (b != 32) {
                    Hasword = true;
                    pos = i
                }
                i++;
            }
            var def = document.getElementById("feed");
            if (a > 0 && Hasword) {
                j = j + 1;
                EId = "post" + j;
                TId = "post" + j + "1";
                LId = "post" + j + "2";
                var divAdd = '<div class="Postcontainer" style="position: relative;" id="' + EId + '">' +
                    '<div class="headerpart">' +
                    '<div class="signInlogo1"  style="border: 1px solid #ccc; cursor: pointer;">' +
                    '<span style="position: relative; bottom:14px; right:8px; font-size: 20px; color: white; ">' + fl + '</span>' +
                    '</div>' +
                    '<div class="username">' +
                    '<span>' +
                    '<span class="text-muted" style="font-style: italic;">' + postername + '<span style="margin-left: 10px;margin-right: 4px; font-style: italic;">' + 'rated:' + '</span>' + '<strong>' + starId + '</strong>' + '<i class="fas fa-star amber-text icel" style="margin-left: 3px; color:gold;font-size: 15px;">' + '</i>' +
                    '</span>' +
                    '</span>' + '<span class = "text-muted" style="font-size: 13px;">' + 'Posted at: ' + date + '</span>' + '</div>' +
                    '<button style = "position: absolute; right: 0; top: 0; margin: 20px; cursor:pointer;" type = "button" class ="btn btn-secondary"  id="' + TId + '" onclick="editing(this.id)">' + '<i class="fas fa-trash-alt">' + '</i> ' + '</button>' + '</div>' +
                    '<div class = "contentpart"  style="padding:5px;">' + feedText +
                    '</div>' + '<div class = "modal-footer mx-2 pt-2" >' +
                    '<i class="fas fa-heart" style="font-size:23px;margin:4px;color:black;cursor:pointer;" id="' + LId + '" onclick="liking(this.id)">' + '</i>' +
                    '</div>' + '</div>';

                document.getElementById("posts").innerHTML += divAdd;
                def.value = def.defaultValue;
                for (var i = 0; i < 5; i++) {
                    document.getElementsByClassName("icol")[i].style.color = "#ccc";
                }



            } else {
                swal("Unable to comment!", "Please enter some text", "warning");
                def.value = def.defaultValue;
            }


        } else {
            swal("Unable to post", "Please log in or sign up first", "warning");
        }
    }

});
