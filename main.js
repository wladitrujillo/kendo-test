'use strict'

require.config({
    paths: {
        "angular": "/libraries/angular/angular",
        "jquery": "/libraries/jquery/jquery",
        "kendo.all.min": "/libraries/kendo/kendo.all.min"
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'kendo.all.min': ['jquery', 'angular']
    }
});

require(['angular', 'kendo.all.min'], function (angular, kendo) {

    var app = angular.module("my-app", ["kendo.directives"]);

    app.controller("MyCtrl", ["$scope", function ($scope) {
        $scope.birthday = new Date();
        $scope.phone = "555 123 4567";
        $scope.cc = "1234 1234 1234 1234"
        $scope.ssn = "003-12-3456";
        $scope.post = "W1N 1AC";
        $scope.amount = 5;
        $scope.emailSwitch = true;
        $scope.country=1;

        $scope.mainGridOptions = {
            dataSource: {
                type: "odata",
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                },
                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },
            sortable: true,
            pageable: true,
            dataBound: function () {
                this.expandRow(this.tbody.find("tr.k-master-row").first());
            },
            columns: [{
                field: "FirstName",
                title: "First Name",
                width: "120px"
            }, {
                field: "LastName",
                title: "Last Name",
                width: "120px"
            }, {
                field: "Country",
                width: "120px"
            }, {
                field: "City",
                width: "120px"
            }, {
                field: "Title"
            }]
        };

        $scope.detailGridOptions = function (dataItem) {
            return {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                    },
                    serverPaging: true,
                    serverSorting: true,
                    serverFiltering: true,
                    pageSize: 5,
                    filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
                },
                scrollable: false,
                sortable: true,
                pageable: true,
                columns: [
                    { field: "OrderID", title: "ID", width: "56px" },
                    { field: "ShipCountry", title: "Ship Country", width: "110px" },
                    { field: "ShipAddress", title: "Ship Address" },
                    { field: "ShipName", title: "Ship Name", width: "190px" }
                ]
            };
        };


        $scope.productsDataSource = {
            type: "odata",
            serverFiltering: true,
            transport: {
                read: {
                    url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                }
            }
        };


    }]);

    angular.bootstrap(document.getElementById("my-element"), ["my-app"]);
}, function (err) { console.log(err) })


