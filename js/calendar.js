var today = new Date();
var year = today.getFullYear();
//获取当前年份
var month = today.getMonth() + 1;
//获取当前月份
var day = today.getDate();
//获取当前日期
var allday = 0;
//当前月份的总天数

//用于推算当前的月份一共多少天
function count() {
    if (month != 2) {
        if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
            allday = 30;
            //4、6、9、11月份为30天
        } else {
            allday = 31;
            //其他月份为31天（不包括2月份）
        }
    } else {
        //如果是2月份需要判断当前是否为闰年
        if (((year % 4) == 0 && (year % 100) != 0) || (year % 400) == 0) {
            allday = 29;
            //闰年的2月份是29天
        } else {
            allday = 28;
            //非闰年的2月份是28天
        }
    }
}

//显示日历标题中的当前年份和月份
function showMonth() {
    var year_month = year + "年" + month + "月";
    document.getElementById("month").innerHTML = year_month;
}

//显示当前月份的日历
function showDate() { 
    showMonth();//在年份月份显示牌上显示当前的年月
    count();//计算当前月份的总天数

    //获取本月第一天的日期对象
    var firstdate = new Date(year, month - 1, 1);

    //推算本月第一天是星期几
    var xiqi = firstdate.getDay();

    //动态添加HTML元素
    var daterow = document.getElementById("day");
    daterow.innerHTML = "";

    //如果本月第一天不是周日，则前面需要用空白元素补全日期
    if (xiqi != 0) {
        for (var i = 0; i < xiqi; i++) {
            var dayElement = document.createElement("div");
            dayElement.className = "everyday";
            daterow.appendChild(dayElement);
        }
    }

    //使用循环语句将当前月份的所有日期显示出来
    for (var j = 1; j <= allday; j++) {
        var dayElement = document.createElement("div");
        dayElement.className = "everyday";
        dayElement.innerHTML = j + "";

        //如果日期为今天，将内容显示为红色
        if (j == day) {
            dayElement.style.color = "red";
        }

        daterow.appendChild(dayElement);
    }
}

//显示上个月的日历
function lastMonth() {
    if (month > 1) {
        month -= 1;

    } else {
        month = 12;
        year -= 1;
    }
	showDate();
}

//显示下个月的日历
function nextMonth() {
    if (month < 12) {
        month += 1;

    } else {
        month = 1;
        year += 1;
    }  
	showDate();
}