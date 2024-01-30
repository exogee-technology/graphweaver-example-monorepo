var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/backend/index.ts
var backend_exports = {};
__export(backend_exports, {
  graphweaver: () => graphweaver,
  handler: () => handler
});
module.exports = __toCommonJS(backend_exports);
var import_reflect_metadata = require("reflect-metadata");
var import_graphweaver_server = __toESM(require("@exogee/graphweaver-server"));

// src/backend/schema/post/entity.ts
var import_graphweaver = require("@exogee/graphweaver");
var Post = class extends import_graphweaver.GraphQLEntity {
};
__name(Post, "Post");
__decorateClass([
  (0, import_graphweaver.Field)(() => import_graphweaver.ID)
], Post.prototype, "id", 2);
__decorateClass([
  (0, import_graphweaver.SummaryField)(),
  (0, import_graphweaver.Field)(() => String)
], Post.prototype, "title", 2);
__decorateClass([
  (0, import_graphweaver.Field)(() => String)
], Post.prototype, "body", 2);
__decorateClass([
  (0, import_graphweaver.Field)(() => String)
], Post.prototype, "userId", 2);
Post = __decorateClass([
  (0, import_graphweaver.ObjectType)("Post")
], Post);

// src/backend/schema/post/resolver.ts
var import_graphweaver2 = require("@exogee/graphweaver");
var import_graphweaver_rest = require("@exogee/graphweaver-rest");

// src/backend/rest-client.ts
var import_got = __toESM(require("got"));
var baseUrl = process.env.REST_BASE_URL;
var fetch = /* @__PURE__ */ __name(async (path) => {
  return import_got.default.get(`${baseUrl}${path}`).json();
}, "fetch");

// src/backend/schema/post/resolver.ts
var PostResolver = class extends (0, import_graphweaver2.createBaseResolver)(
  Post,
  new import_graphweaver_rest.RestBackendProvider("Post", {
    find: async () => {
      const results = await fetch(`/posts`);
      return results;
    }
  })
) {
};
__name(PostResolver, "PostResolver");
PostResolver = __decorateClass([
  (0, import_graphweaver2.Resolver)(() => Post)
], PostResolver);

// src/backend/schema/index.ts
var resolvers = [PostResolver];

// src/backend/index.ts
var graphweaver = new import_graphweaver_server.default({
  resolvers
});
var handler = graphweaver.handler();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  graphweaver,
  handler
});
//# sourceMappingURL=index.js.map
