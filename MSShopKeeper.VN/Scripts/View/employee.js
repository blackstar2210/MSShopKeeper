$(document).ready(function () {
    //load dữ liệu
    //employeeJs.loadData();
    employeeJs = new employeeJs();

    dialog = $('.dialogEmployeeDetail').dialog({
        width: 600,
        height: 200,
        autoOpen: false,
        closeOnEscape: false,
        modal: true,
        buttons: [
            {
                text: 'Thêm',
                id: "btnAdd",
                width: 50,
                height: 25,
                manhnv: 'sdfjklashdfjiasdfhjkasfhdk',
                click: function () {
                    alert('hello');
                }
            },
            {

                width: 50,
                height: 25,
                text: 'Sửa',
                id: 'btnEdit'
            },
            {
                text: 'Đóng',
                width: 60,
                height: 25,
                click: function () {
                    dialog.dialog('close');
                }
            },
        ]
    })
    // Gán Events:
    $('#btnAddLayout').click(function () {
        dialog.dialog('open');
    })
});

class base {
    constructor() {

    }

    loadData() {
        var data = getData();
        var fiels = $("[fielname]");
        $.each(data, function (index, item) {
            var rowHTML = $('<tr></tr>');
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

class employeeJs extends base {
    constructor() {
        super();
        this.name = "Han";
        this.loadData();
    }
}

$("#text-filter").datepicker({
    showOn: "button"
});

//$("#valueFilter-input-datepicker").datepicker({
//    showOn: "button"
//});
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




