import {it, expect, describe} from "vitest";

import { validatePassword } from "../validation.ts";

describe ('パスワードバリデーションテスト', () => {
  describe('パスワードが通らない', () => {
    it('大文字を含まない6文字のパスワード', () => {
      expect(validatePassword('pass1!')).toBe(false);
    });
    it('小文字を含まない6文字のパスワード', () => {
      expect(validatePassword('PASS1!')).toBe(false);
    });
    it('数字を含まない6文字のパスワード', () => {
      expect(validatePassword('Passwo!')).toBe(false);
    });
    it('記号を含まない6文字のパスワード', () => {
      expect(validatePassword('Pass1wo')).toBe(false);
    });
    it('大文字小文字数字記号を含む5文字のパスワード', () => {
      expect(validatePassword('Pas@1')).toBe(false);
    });
  });
  describe('パスワードが通る', () => {
    it('大文字小文字数字記号を含む6文字のパスワード', () => {
      expect(validatePassword('Pass1!')).toBe(true);
    });
  });
});