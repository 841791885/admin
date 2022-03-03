export function menuMapToRoutes(userMenus) {
  const routes = []

  //读取本地路由
  const localRoutes = []
  const routeFiles = require.context('../routes/main/', true, /\.js/)
  routeFiles.keys().forEach((key) => {
    if (key.indexOf('./main.js') !== -1) return
    const route = require('../routes/main' + key.split('.')[1])
    localRoutes.push(route.default)
  })
  console.log('localRoutes', localRoutes)

  //映射菜单
  const _recurseGetRoute = (menus) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(userMenus, currentPath, breadcrumbs = []) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        // breadcrumbs?.push({ name: menu.name, path: '/' })
        // breadcrumbs?.push({ name: findMenu.name, path: '/' })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
