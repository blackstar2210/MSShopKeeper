﻿//showFilter1 = 0;
//showFilter2 = 0;
//showFilter3 = 0;
//showFilter4 = 0;
//showFilter5 = 0;
//showFilter6 = 0;
showFilter = 0;
countAllow = 0;
countItem = 0;
$(document).ready(function () {
    //load dữ liệu
    //employeeJs.loadData();
    employeeJs.initEvents();

    //Khởi tạo dialog
    dialog = $('.dialogEmployeeDetail').dialog({
        width: 820,
        height: 760,
        autoOpen: false,
        closeOnEscape: true,
        modal: true
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
        $('.multi-select').on('click', this.showMenuSelect);
        $('.select-icon-status').on('click', this.showMenuStatus);
        $('.item-select').on('click', this.selectItem);
        $(document).on('click', '.icon-close', this.deleteSelectedItem);
        //$('.icon-close').on('click', this.deleteSelectedItem);
        //$('.pass').on('click', this.changeColorInput);
        $('.change-border-input').on('click', this.changeBoderInput);
        $('.checkbox').on('click', this.handleButtonAllow);
        $('.icon-seen').on('click', this.handleSeen);
        $('.select-status').on('click', this.showDropdownStatus);
        $('.item-select-status').on('click', this.changeStatus);
        $('.radio-button').on('click', this.changeRadioButton);
        $('.radio-button-gender').on('click', this.changeRadioButtonGender);
        $(document).on('blur', '#dialogEmployeeDetail [required]', this.showBlur);
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

    showBlur() {
        var value = $(this).val();
        if (!value) {
            if ($(this).attr('isPass') === "true") {
                $(this).parent('.change-border-input').addClass('input-selected');
            }
            else {
                $(this).addClass('input-selected');
            }
        }
    }

    hideAllDropDown(event) {
        var target = $(event.target);
        if (target.parents('.row-filter').length === 0 || target.hasClass('text-filter') || target.hasClass('button-filter-date')) {
            $('.dropdown-filter').hide();
            // showFilter = 0;
        }
        if (target.parents('.role').length === 0) {
            $('.dropdown-select').hide();
            // showFilter = 0;
        }
        if (target.parents('.select-status').length === 0) {
            $('.dropdown-select-status').hide();
            // showFilter = 0;
        }

        if (target.parents('.border-input').length === 0) {
            $('.change-border-input').css('border', '');
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

    //Hiển thị dropdown mutil select trong dialog
    showMenuSelect() {
        var menuContainer = $(this).parents('.role');
        var currentMenu = menuContainer.find('.dropdown-select');
        currentMenu.toggle();
    }

    //Chọn 1 item trong menu dropdown dialog
    selectItem() {
        var value = $(this).text();
        var rowHTML = '<li><div>' + value + '</div><div class="icon-close"></div></li>';
        $(rowHTML).insertBefore($('.selected .last'));
        countItem++;
        var container = $(this).parents('.role');
        var input = container.find('.input-select');
        input.attr('placeholder', ' ');
        var height = $('.role-select').height();
        var top = 253;
        if (height > 35) {

            var increase = height - 35;
            var newTop = 261 + increase;
            $('.dropdown-select').css('top',newTop);
        }
        // $('.selected').insertBefore()
        // $('.selected').append(rowHTML);
    }

    //Xóa item selected khi click vào button x
    deleteSelectedItem() {
        var heightBefore = $('.role-select').height();
        $(this).parent().remove();
        countItem--;
        if (countItem === 0) {
            $('.input-select').attr('placeholder', 'Chọn 1 hoặc nhiều vai trò');
        }
        var heightAfter = $('.role-select').height();
        if (heightAfter < heightBefore) {
            var decrease = heightAfter - 35;
            var newTop = 261 + decrease;
            $('.dropdown-select').css('top', newTop);
        }
    }

    //Đổi màu border input
    //changeColorInput() {

    //}

    //Hiển thị menu status khi click button
    showMenuStatus() {
        var menuContainer = $(this).parents('.rowID');
        var currentMenu = menuContainer.find('.dropdown-select-status');
        currentMenu.toggle();
    }

    changeStatus() {
        var value = $(this).text();
        var container = $(this).parents('.rowID');
        var input = container.find('.input-status');
        input.val(value);
    }

    changeBoderInput() {
        $(this).css('border', '1px solid #247ba0');
        $('.change-border-input').not($(this)).css('border', '');
    }

    handleButtonAllow() {
        if (countAllow === 0) {
            $(this).css("background-image", "url('/Contents/Icons/uncheck.png')");
            countAllow = 1;
        }
        else {
            $(this).css("background-image", "url('/Contents/Icons/check.png')");
            countAllow = 0;
        }
        $('.user').toggle();
    }

    handleSeen() {
        var container = $(this).parents('.pass');
        var pass = container.find('.input-pass');
        //pass.attr('type', 'text');
        if ('password' === pass.attr('type')) {
            pass.attr('type', 'text');
        } else {
            pass.attr('type', 'password');
        }
    }

    changeRadioButton() {
        $(this).css("background-image", "url('/Contents/Icons/radio-check.png')");
        $('.radio-button').not($(this)).css("background-image", "url('/Contents/Icons/radio-uncheck.png')");
    }

    changeRadioButtonGender() {
        $(this).css("background-image", "url('/Contents/Icons/radio-check.png')");
        $('.radio-button-gender').not($(this)).css("background-image", "url('/Contents/Icons/radio-uncheck.png')");
    }

}

$("#input-date-id").datepicker({
    inline: true,
    showOtherMonths: true,
    showOn: "button"
});

$("#date-id").on('click', function () {
    $(this).prev().trigger('click');
});

$("#input-date-dob").datepicker({
    inline: true,
    showOtherMonths: true,
    showOn: "button"
});

$("#date-dob").on('click', function () {
    $(this).prev().trigger('click');
});

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




