require('@testing-library/jest-dom');

// Polyfills
const { ResizeObserver } = require('@juggle/resize-observer');
global.ResizeObserver = ResizeObserver;
require('whatwg-fetch');