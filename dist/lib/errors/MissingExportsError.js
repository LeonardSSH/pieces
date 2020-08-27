"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingExportsError = void 0;
const LoaderError_1 = require("./LoaderError");
/**
 * Describes a [[LoaderErrorType.EmptyModule]] loader error and adds a path for easy identification.
 */
class MissingExportsError extends LoaderError_1.LoaderError {
    constructor(path) {
        super("EMPTY_MODULE" /* EmptyModule */, 'A compatible class export was not found.');
        this.path = path;
    }
}
exports.MissingExportsError = MissingExportsError;
//# sourceMappingURL=MissingExportsError.js.map