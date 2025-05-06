-----
### JavaScript의 역할
-----
<div align="center">
<img src="https://github.com/user-attachments/assets/0d74e854-630e-4a28-868a-9a2bfab879be">
</div>

<div align="center">
<img src="https://github.com/user-attachments/assets/d1cb6170-b709-425d-9b1c-aa0e8ef0f660">
</div>

-----
### HTML의 역할
-----
1. 요소들의 내용, 배치, 모양을 정하기 위해 사용하는 언어
2. 색상이나 디자인 등 수정 불가
<div align="center">
<img src="https://github.com/user-attachments/assets/14150ee2-c27e-4592-b6a9-e1658c1dfb20">
</div>

-----
### CSS의 역할
-----
: 요소들의 색상, 크기 등의 스타일 설정 가능
<div align="center">
<img src="https://github.com/user-attachments/assets/3bb9f6e1-e91d-4d05-93d5-ddedc2158d49">
</div>

-----
### JavaScript의 역할
-----
1. 웹 내부에서 발생하는 다양한 기능을 만들 수 있는 언어
2. 웹을 움직이게 하는 '웹의 근육'으로 표현 가능
<div align="center">
<img src="https://github.com/user-attachments/assets/ad0fe3d6-2450-4fe2-bdcb-4563939f2cc6">
</div>

-----
### JavaScript의 실행 원리
-----
1. JavaScript 엔진에 의해 실행
2. JavaScript 엔진은 브라우저에 기본 탑재되어 있음
3. 따라서, 웹 브라우저를 이용하면 간단한 JavaScript 코드 직접 실행 가능
<div align="center">
<img src="https://github.com/user-attachments/assets/0e3be55d-9396-4316-b019-965f16a797f1">
</div>

-----
### Visual Studio Code
-----
1. Microsoft에서 개발한 오픈소스 소스코드 에디터
2. VSCode라고 부름
3. 확장 프로그램 - Prettier
   + Ctrl + ,로, Setting에서 Format On Save 검색 후, 이를 체크해야 적용
   + Defualt Formatter : Prettier - Code formatter 설정
  
4. 확장 프로그램 - Material Icon Theme (아이콘 변경)
5. 확장 프로그램 - Error Lens (문법 오류 등 오류 발생 시 출력)
6. 확장 프로그램 - Live Server (코드 변경사항 발생하면 자동 렌더링)

-----
### 자바스크립트 실습 환경 설정
-----
1. chapter03.js
```js
console.log("Chapter3");
```

2. index.html
```html
<html>
    <head>
        <script src="./chapter03.js"></script>
    </head>
    <body>
        Hello World!
    </body>
</html>
```

3. Ctrl + Shift + P : Live Server : Open with Live Server
<div align="center">
<img src="https://github.com/user-attachments/assets/73008645-a033-491b-a323-8fb2d575a1fc">
</div>

  - chapter03.js에 작성한 자바스크립트 코드가 잘 실행된 것 확인 가능
