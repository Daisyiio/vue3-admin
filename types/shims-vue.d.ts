// import { DefineComponent } from 'vue';

// declare module '*.vue' {
//   const component: DefineComponent<object, object, unknown>; // 使用 object 和 unknown
//   export default component;
// }

// src/shims-vue.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
