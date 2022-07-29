////////////////////////
//     Partial<T>
////////////////////////

// 全てのプロパティをOptional(任意)のプロパティにしてくれる

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// プロパティは任意になる
const taro: Partial<Person> = {
  firstName: 'hoge',
};

// プロパティは必須になる
// 下記はエラーになる。
// const hoge: Person = {
//   firstName: 'hage',
// };

console.log(taro);

////////////////////////
//     Required<T>
////////////////////////
// プロパティを必須にする

type Person2 = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

// なにもないとエラーはでない
const Onesan: Person2 = {
  firstName: 'hoge',
};

const Jiro: Required<Person2> = {
  firstName: 'Taro',
  lastName: 'tanaka',
  age: 2,
};

// プロパティは必須になるので下記はエラー
// const jiro: Required<Person2> = {
//   firstName: 'Taro'
// }

////////////////////////
//     ReadOnly<t>
////////////////////////
//  すべてのプロパティをreadonlyにする

type Todo = {
  title: string;
};

const todo: Readonly<Todo> = {
  title: 'ほげ',
};

// Readonlyなのでエラーになる
// todo.title = 'hoge'

////////////////////////
//     Record<K, T>
////////////////////////
//  KがプロパティとなりT型を持つレコード型を構築

type PC = {
  name: string;
  cpu: string;
};
type PCList = Record<number, PC>;

const list: PCList = {
  0: { name: 'mac', cpu: 'intel' },
  1: { name: 'macbook', cpu: 'm1' },
};

////////////////////////
//     Pick<T,K>
////////////////////////
// 既に存在するT型の中からKで選択した一部のプロパティのみを含んだ新たな型を構築
type Bike = {
  name: 'string';
  year: number;
  components: 'string';
};

type BikeData = Pick<Bike, 'name' | 'year'>;
// type BikeData = {
//   name: 'string';
//   year: number;
// }
// と同じである

////////////////////////
//     Omit<T,K>
////////////////////////
// 既に存在するT型の中からKで選択した一部のプロパティを除いた新たな型を構築

type BikePreview = Omit<Bike, 'year' | 'components'>;
// type BikePreview = {
//   name: 'string';
// }
// と同じ

////////////////////////
// Exclude<T,U>
////////////////////////
// T型のプロパティでU型に代入可能なプロパティを取り除いた型を構築
// めちゃんこかんたんに言うと型の引き算

type A = {
  id: number;
  title: string;
};

type B = {
  id: number;
  name: string;
};

type ExcludeType = Exclude<keyof A, keyof B>;
// type ExcludeType = "title"と同じ

type ExcludeType2 = Exclude<string, number>;
// type ExcludeType2 = stringと同じ

type ExcludeType3 = Exclude<string | number | boolean, string | boolean>;
// type ExcludeType3 = numberと同じ

////////////////////////
// Extract<T,U>
////////////////////////
// T型のプロパティでU型に代入可能なプロパティのみを残した型を構築

type ExtractType = Extract<keyof A, keyof B>;
// type ExcludeType = "id"と同じ

type ExtractType2 = Extract<string, number>;
// type ExcludeType2 = neverと同じ

type ExtractType3 = Extract<string | number | boolean, string | boolean>;
// type ExcludeType3 = string | booleanと同じ

////////////////////////
// NonNullable<T>
////////////////////////
// Tからnullとundefinedを取り除いた型を構築

type NoNullType = NonNullable<string | number | undefined>;
// type NoNullType = string | numberと同じ

////////////////////////
// Parameters <T>
////////////////////////
// 関数型Tの引数の型をタプル型として抽出した型を構築

const hogeFunction = (text: string, num: number) => {
  return `${text}${num}`;
};

type ParametersType = Parameters<typeof hogeFunction>;
// type ParametersType = [text: string, num: number]と同じ

////////////////////////
// ConstructorParameters<T>
////////////////////////
// T型のコンストラクタの引数の型をタプルとして抽出した型を構築

class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type HumanConstructorType = ConstructorParameters<typeof Human>;
// type HumanConstructorType = [name: string, age: number]と同じ

////////////////////////
// ReturnType<T>
////////////////////////
const returnNum = (): number => 1;

type typeReturn = ReturnType<typeof returnNum>;
// type typeReturn = numberと同じ

// ThisParameterType
// OmitThisParameter
// ThisType<T>
// https://qiita.com/k-penguin-sato/items/e2791d7a57e96f6144e5
