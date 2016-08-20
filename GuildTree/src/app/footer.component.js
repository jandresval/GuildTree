var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
        this.title4 = 'app works4!';
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'footer-root',
            templateUrl: 'footer.component.html',
            styleUrls: ['footer.component.css'],
        })
    ], FooterComponent);
    return FooterComponent;
})();
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map