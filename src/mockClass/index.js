export default class esSixClass {
  constructor() {
    this.arrowFunction = () => {
      return 'not included in mock because arrow function';
    }
  }

  notArrowFunction() {
    return 'included in mock because not arrow function';
  }
}
