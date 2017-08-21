import { assertThat, equalTo, containsString } from 'hamjest';

describe('The core function, `assertThat()`', () => {
  it('is a function', () => {
    const typeOfAssertThat = typeof assertThat;
    assertThat(typeOfAssertThat, equalTo('function'));
  });
  describe('requires at least two params', () => {
    it('1st: the actual value', () => {
      assertThat('actual', equalTo('actual'));
    });
    it('2nd: a matcher for the expected value', () => {
      const matcher = equalTo('expected');
      assertThat('expected', matcher);
    });
    describe('the optional 3rd param', () => {
      it('goes first(!), and is the assertion reason', () => {
        const reason = 'This is the reason, the first `assertThat()` throws as part of its message.';
        try {
          assertThat(reason, true, equalTo(false));
        } catch (e) {
          assertThat(e.message, containsString(reason));
        }
      });
    });
  });
});
