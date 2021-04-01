(function (global, binding) {
    'use strict';
    binding.testExperimentalExtraShouldReturnTen = function () {
        return 10;
    };
    v12.testExperimentalExtraShouldCallToRuntime = function () {
        return binding.runtime(3);
    };
});
