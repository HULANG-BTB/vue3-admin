import { createStore, Store, ModuleTree } from 'vuex'

const moduleFiles = require.context('./modules', false, /\.ts$/)

export type IRootState = Record<string, any>

const state: IRootState = {}

const modules: ModuleTree<IRootState> = moduleFiles.keys().reduce((modules: any, module: string): any => {
  const moduleName = module.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = moduleFiles(module)
  if (value.default) modules[moduleName] = value.default
  return modules
}, {})

const store: Store<IRootState> = createStore<IRootState>({
  state,
  modules
})

export default store
