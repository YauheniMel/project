enum RoutesApp {
  Login = '/login',
  SignUp = '/signup',
  Admin = '/admin',
  Root = '/',
  Home = '/home',
  User = '/profile',
  Collections = '/collections/*',
  Collection = '/collection/:collectionId/*',
  CollectionLink = '/collection/',
  Item = '/item/:itemId',
  TargetCollections = '/user/:userId',
  ItemLink = '/item/',
  Search = '/search/',
}

export default RoutesApp;
