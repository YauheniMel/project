enum RoutesApp {
  Login = '/login',
  SignUp = '/signup',
  Root = '/',
  Home = '/home',
  User = '/profile',
  Collections = '/collections',
  Collection = '/collection/*',
  TargetCollection = ':collectionId',
  CollectionLink = '/collection/',
  Item = '/item/:itemId',
  ItemLink = '/item/',
}

export default RoutesApp;
