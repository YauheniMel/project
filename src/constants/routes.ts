enum RoutesApp {
  Login = '/login',
  SignUp = '/signup',
  Admin = '/admin',
  Root = '/',
  Home = '/home',
  Profile = '/profile',
  Collections = '/collections/*',
  CollectionsLink = '/collections/',
  Collection = '/collection/:collectionId/*',
  CollectionLink = '/collection/',
  Item = '/item/:itemId',
  ItemLink = '/item/',
  Search = '/search/',
}

export default RoutesApp;
