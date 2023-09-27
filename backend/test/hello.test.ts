import { Hello } from '../src/hello';

test('getHelloのテスト', () => {
  expect(new Hello('XXX').getHello()).toBe('Hello XXX');
});
