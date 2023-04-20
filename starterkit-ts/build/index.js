"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, email) {
        this.name = name;
        this.email = email;
    }
    Employee.prototype.getEmployee = function () {
        process.stdout.write("Name : ".concat(this.email, ", Email : ").concat(this.name));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, email, department) {
        var _this = _super.call(this, name, email) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.getEmployee = function () {
        _super.prototype.getEmployee.call(this);
        process.stdout.write("Department : ".concat(this.department));
    };
    return Manager;
}(Employee));
