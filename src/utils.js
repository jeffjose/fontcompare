import * as consts from "./consts.js";

export function fontName(font) {
  return `${consts.prefix}-${font.font.names.postScriptName.en}-${font.uid}`;
}

export function getStyleIdFromFont(font) {
  return `${consts.prefix}-style-${font.font.names.postScriptName.en}-${font.uid}`;
}

export function getFontClassName(font) {
  return `${consts.prefix}-font-${font.font.names.postScriptName.en}-${font.uid}`;
}

export function getFontData(font) {
  return `url("${font.data}")`;
}

export function readFontAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

export function readFontAsDataURL(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}
