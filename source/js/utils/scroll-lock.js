import {iosChecker} from './ios-checker';

export class ScrollLock {
  constructor() {
    this._iosChecker = iosChecker;
    this._lockClass = this._iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';
    this._scrollTop = null;
  }

  _getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  _getBodyScrollTop() {
    return (
      self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (document.body && document.body.scrollTop)
    );
  }

  disableScrolling() {
    this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this._getBodyScrollTop();
    if (this._getScrollbarWidth()) {
      document.body.style.paddingRight = `${this._getScrollbarWidth()}px`;
    }
    document.body.style.top = `-${this._scrollTop}px`;
    document.body.classList.add(this._lockClass);
  }

  enableScrolling() {
    document.body.classList.remove(this._lockClass);
    document.body.style.paddingRight = null;
    document.body.style.top = null;
    document.body.removeAttribute('data-scroll');
    this._scrollTop = null;
  }
}

window.scrollLock = new ScrollLock();
