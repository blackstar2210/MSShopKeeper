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
                manhnv: 'sdfjklashdfjiasdfhjkasfhdk',
                click: function () {
                    alert('hello');
                }
            },
            {
                text: 'Sửa',
                id: 'btnEdit'
            },
            {
                text: 'Đóng',
                click: function () {
                    dialog.dialog('close');
                }
            },
        ]
    })
    // Gán Events:
    $('#btnAdd').click(function () {
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
                    rowHTML = rowHTML.append('<td width="30%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Gender") {
                    rowHTML = rowHTML.append('<td width="12%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Dob") {
                    rowHTML = rowHTML.append('<td width="15%">{0}</td>'.format(item[fielName]));
                }
                if (fielName === "Phone") {
                    rowHTML = rowHTML.append('<td width="15%">{0}</td>'.format(item[fielName]));
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





