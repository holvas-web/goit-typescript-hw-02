/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface iComponentProp {
  title: string;
}

class Component<T extends iComponentProp> {
  constructor (public props:T) {

  }
}

 

class Page extends Component<iComponentProp> {
  
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};