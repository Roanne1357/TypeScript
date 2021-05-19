{
  // number
  const 숫자:number = 12345;

  // string
  const 문자:string = 'ㅋㅋ';

  // boolean
  const 참거짓:boolean = true;

  // undefined
  let 이름: undefined; // X
  let 나이: number | undefined;
  나이 = undefined;
  나이 = 21;
  function 찾기(): number | undefined {
    return undefined;
  }

  // null
  let 사람: null // X
  let 별명: string | null;
  별명 = '길동';
  별명 = null;

  // void
  function print(): void {
    console.log('object');
    return;
  }

  // never 
  // 함수에서 절대 리턴 되지 않는 경우에 그것을 명시하기 위해서 쓰임
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  
  // - 웬만하면 쓰지않는 -
  // unknown
  let 알수없음: unknown = 0;
  알수없음 = 'he';
  알수없음 = true;
  
  // any
  let 아무거나: any = 0;
  아무거나 = '가나다라';
  아무거나 = true;

  // object
  let 오브젝트: object;
  function acceptSomeObject(오브젝트: object) {
  } 
  acceptSomeObject({이름: '홍길동'});
  acceptSomeObject({나이: 21});
}