//showFilter1 = 0;
//showFilter2 = 0;
//showFilter3 = 0;
//showFilter4 = 0;
//showFilter5 = 0;
//showFilter6 = 0;
showFilter = 0;
$(document).ready(function () {
    //load dữ liệu
    //employeeJs.loadData();
    employeeJs.initEvents();

    //Khởi tạo dialog
    dialog = $('.dialogEmployeeDetail').dialog({
        width: 820,
        height: 760,
        autoOpen: false,
        closeOnEscape: false,
        modal: true,
    })

    // Gán Events:
    $('#btnAddLayout').click(function () {
        dialog.dialog('open');
    });

    //$("#button-filter1").click(function () {
    //    if (showFilter1 === 0) {
    //        $('#dropdown-filter1').show();
    //        showFilter1 = 1;
    //    } else {
    //        $('#dropdown-filter1').hide();
    //        showFilter1 = 0;
    //    }
    //});

    //$("#button-filter2").click(function () {
    //    if (showFilter2 === 0) {
    //        $('#dropdown-filter2').show();
    //        showFilter2 = 1;
    //    } else {
    //        $('#dropdown-filter2').hide();
    //        showFilter2 = 0;
    //    }
    //});

    //$("#button-filter3").click(function () {
    //    if (showFilter3 === 0) {
    //        $('#dropdown-filter3').show();
    //        showFilter3 = 1;
    //    } else {
    //        $('#dropdown-filter3').hide();
    //        showFilter3 = 0;
    //    }
    //});

    //$("#button-filter4").click(function () {
    //    if (showFilter4 === 0) {
    //        $('#dropdown-filter4').show();
    //        showFilter4 = 1;
    //    } else {
    //        $('#dropdown-filter4').hide();
    //        showFilter4 = 0;
    //    }
    //});

    //$("#button-filter5").click(function () {
    //    debugger
    //    if (showFilter5 === 0) {
    //        $('#dropdown-filter5').show();
    //        showFilter5 = 1;
    //        debugger
    //    } else {
    //        $('#dropdown-filter5').hide();
    //        showFilter5 = 0;
    //    }
    //});
});

$(document).on("click", function (event) {
    //var $trigger = $("#button-filter1");
    //if ($trigger !== event.target && !$trigger.has(event.target).length) {
    //    $("#dropdown-filter1").hide();
    //    showFilter1 = 0;
    //}

    //var $trigger1 = $("#button-filter2");
    //if ($trigger1 !== event.target && !$trigger1.has(event.target).length) {
    //    $("#dropdown-filter2").hide();
    //    showFilter2 = 0;
    //}

    //var $trigger2 = $("#button-filter3");
    //if ($trigger2 !== event.target && !$trigger2.has(event.target).length) {
    //    $("#dropdown-filter3").hide();
    //    showFilter3 = 0;
    //}

    //var $trigger3 = $("#button-filter4");
    //if ($trigger3 !== event.target && !$trigger3.has(event.target).length) {
    //    $("#dropdown-filter4").hide();
    //    showFilter4 = 0;
    //}

    //var $trigger4 = $("#button-filter5");
    //if ($trigger4 !== event.target && !$trigger4.has(event.target).length) {
    //    $("#dropdown-filter5").hide();
    //    showFilter5 = 0;
    //}
});

//Load dữ liệu mẫu với class Base
class base {
    constructor() {

    }

    loadData() {
        var data = getData();
        var fiels = $("[fielname]");
        $.each(data, function (index, item) {
            var rowHTML = $('<tr class="rowData"></tr>');
            $.each(fiels, function (index, fielItem) {
                var fielName = fielItem.getAttribute('fielName');
                if (fielName === "EmployeeCode") {
                    rowHTML = rowHTML.append('<td width="12%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "EmployeeName") {
                    rowHTML = rowHTML.append('<td width="52%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Gender") {
                    rowHTML = rowHTML.append('<td width="5%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Dob") {
                    rowHTML = rowHTML.append('<td width="10%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Phone") {
                    rowHTML = rowHTML.append('<td width="12%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "WorkingStatus") {
                    rowHTML = rowHTML.append('<td width="calc(100%-84%)">{0}</td>'.format(item[fielName]));
                }
            });
            //var rowHTML = '<tr>'
            //    + '<td width="12%">{0}</td>'
            //    + '<td width="30%">{1}</td>'
            //    + '<td width="12%">{2}</td>'
            //    + '<td width="15%">{3}</td>'
            //    + '<td width="15%">{4}</td>'
            //    + '<td width="calc(100%-84%)">{5}</td>'
            //    + '</tr>';
            //rowHTML =  rowHTML.format(item.EmployeeCode, item.EmployeeName, item.Gender, item.Dob, item.Phone, item.WorkingStatus);
            $("[body]").append(rowHTML);
        });
    }
}

//Tạo Employee kế thừa class Base
class employeeJs extends base {
    constructor() {
        super();
        this.name = "Han";
        this.loadData();
    }

    //Khởi tạo event cho Employee
    initEvents() {
        $('.button-filter').on('click', this.showFilterMenu);
        $('.filter-item').on('click', this.changeCurrentFilter);
        $('.rowData').on('click', this.changeBackground);
        $(document).on('click', this.hideAllDropDown);
    }

    //Xử lý khi click vào button filter
    showFilterMenu() {
        var filterContainer = $(this).parents('.row-filter');
        var currentMenu = filterContainer.find('.dropdown-filter');
        $('.dropdown-filter').not(currentMenu).hide();
        currentMenu.toggle();
        //if (showFilter === 0) {
            
        //    showFilter = 1;
        //}
        //else {
        //    currentMenu.hide();
        //    showFilter = 0;
        //}
        
    }

    hideAllDropDown(event) {
        var target = $(event.target);
        if (target.parents('.row-filter').length === 0 || target.hasClass('text-filter') || target.hasClass('button-filter-date')) {
            $('.dropdown-filter').hide();
            // showFilter = 0;
        }
    }

    //Thay đổi giá trị hiện tại của button filter
    changeCurrentFilter() {
        var filterContainer = $(this).parents('.dropdown-filter');
        var rowFilter = filterContainer.parents('.row-filter');
        var value = $(this).attr('data-filter');
        var currentIcon = rowFilter.find('.current-filter');
        currentIcon.html(value);
        currentIcon.val(value);
        filterContainer.hide();
    }

    //Xử lý click vào 1 hàng
    changeBackground() {
        $(this).css('background-color', 'rgb(195,236,255)');
        $('.rowData').not($(this)).css('background-color', '');
    }

}

//Datepicker khi click vào icon date
$("#text-filter").datepicker({
    inline: true,
    showOtherMonths: true,
    showOn: "button"
});

$.datepicker.regional["vi-VN"] =
    {
        closeText: "Đóng",
        prevText: "Trước",
        nextText: "Sau",
        currentText: "Hôm nay",
        monthNames: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"],
        monthNamesShort: ["Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười một", "Mười hai"],
        dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
        dayNamesShort: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        weekHeader: "Tuần",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };

$.datepicker.setDefaults($.datepicker.regional["vi-VN"]);


//$("#valueFilter-input-datepicker").datepicker({
//    showOn: "button"
//});

//Chuyển trạng thái click sang button trước đó
$("#button-filter-date").on('click', function () {
    $(this).prev().trigger('click');
});


//var employeeJs = {
//    loadData: function () {
//        var data = getData();
//        $.each(data, function (index, item) {
//            var rowHTML = '<tr>'
//                + '<td width="12%">' + item.EmployeeCode + '</td>'
//                + '<td width="30%">' + item.EmployeeName + '</td>'
//                + '<td width="12%">' + item.Gender + '</td>'
//                + '<td width="15%">' + item.Dob + '</td>'
//                + '<td width="15%">' + item.Phone + '</td>'
//                + '<td width="calc(100%-84%)">' + item.WorkingStatus + '</td>'
//                + '</tr>';
//            //rowHTML.format(item.EmployeeCode, item.EmployeeName, item.Gender, item.Dob, item.Phone, item.WorkingStatus);
//            $('tbody').append(rowHTML);
//        });
//    }
//}

//Tạo dữ liệu mẫu 
function getData() {
    fakeData = [];
    for (var i = 0; i < 100; i++) {
        var obj = {
            EmployeeID: "bc117a5f-371a-43f2-8274-023e0e7b6b00",
            EmployeeCode: "quanly " + i,
            EmployeeName: "Lâm Thế Anh",
            Gender: "nam",
            Dob: "22/10/1997",
            Phone: "0962430511" + i,
            WorkingStatus: "Chính thức " + i
        };
        fakeData.push(obj);
    }
    return fakeData;
}

//Xử lý dropdown trên header với JS
function showDropdown() {
    document.getElementById("dropdown-selectbox").classList.toggle("show");
}


function dropdownAvata() {
    document.getElementById("dropdown-avata").classList.toggle("show-1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.selectbox') && !event.target.matches('.header-text') && !event.target.matches('.header-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-selectbox");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.avata') && !event.target.matches('.avata-image') && !event.target.matches('.avata-name') && !event.target.matches('.header-icon1')) {
        var dropdown1s = document.getElementsByClassName("dropdown-avata");
        var j;
        for (j = 0; j < dropdown1s.length; j++) {
            var openDropdown1 = dropdown1s[j];
            if (openDropdown1.classList.contains('show-1')) {
                openDropdown1.classList.remove('show-1');
            }
        }
    }
};

employeeJs = new employeeJs();




