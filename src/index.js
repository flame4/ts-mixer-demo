"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@typedorm/common");
const ts_mixer_1 = require("ts-mixer");
class T {
}
__decorate([
    (0, ts_mixer_1.decorate)((0, common_1.Attribute)()),
    __metadata("design:type", String)
], T.prototype, "user_id", void 0);
class T2 {
}
__decorate([
    (0, ts_mixer_1.decorate)((0, common_1.Attribute)()),
    __metadata("design:type", String)
], T2.prototype, "user_id2", void 0);
let User = class User extends (0, ts_mixer_1.Mixin)(T, T2) {
};
User = __decorate([
    (0, common_1.Entity)({
        name: "user",
        primaryKey: {
            partitionKey: "USER@{{user_id}}",
            sortKey: "USER@{{user_id}}",
        },
    })
], User);
exports.User = User;
