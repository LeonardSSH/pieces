"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliasStore = void 0;
const collection_1 = require("@discordjs/collection");
const Store_1 = require("./Store");
/**
 * The store class which contains [[AliasPiece]]s.
 */
class AliasStore extends Store_1.Store {
    constructor() {
        super(...arguments);
        /**
         * The aliases referencing to pieces.
         */
        this.aliases = new collection_1.default();
    }
    /**
     * Looks up the name by the store, falling back to an alias lookup.
     * @param key The key to look for.
     */
    get(key) {
        var _a;
        return (_a = super.get(key)) !== null && _a !== void 0 ? _a : this.aliases.get(key);
    }
    /**
     * Unloads a piece given its instance or its name, and removes all the aliases.
     * @param name The name of the file to load.
     * @return Returns the piece that was unloaded.
     */
    unload(name) {
        const piece = this.resolve(name);
        // Unload all aliases for the given piece:
        for (const alias of piece.aliases) {
            // We don't want to delete aliases that were overriden by another piece:
            const aliasPiece = this.aliases.get(alias);
            if (aliasPiece === piece)
                this.aliases.delete(alias);
        }
        return super.unload(piece);
    }
    /**
     * Inserts a piece into the store, and adds all the aliases.
     * @param piece The piece to be inserted into the store.
     * @return The inserted piece.
     */
    insert(piece) {
        const previous = super.get(piece.name);
        if (previous)
            this.unload(previous);
        for (const key of piece.aliases) {
            this.aliases.set(key, piece);
        }
        return super.insert(piece);
    }
}
exports.AliasStore = AliasStore;
//# sourceMappingURL=AliasStore.js.map