import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

export const parseValByRatio = (obj) => {
    if (!isObject(obj)) {
        throw new Error("data must be an object")
    }

}

export const deepJsonParse = (json, isDeep) => {
    if (isArray(json)) {
        return json.map((v) => {
            return deepJsonParse(v, isDeep);
        });
    }
    // if()
}

export default {
    parseValByRatio,
    deepJsonParse
}

'use strict';
/**
 * @param {?} fields
 * @param {!Object} data
 * @param {?} $
 * @return {undefined}
 */
function fn(fields, data, $) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function expect(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {?} obj
   * @param {!Object} x
   * @param {?} n
   * @return {?}
   */
  function render(obj, x, n) {
    /**
     * @param {?} row
     * @return {?}
     */
    var parseValuesHeader = function(row) {
      return (0, crop.default)(row) || (0, _deepAssign2.default)(row);
    };
    /**
     * @param {string} entity
     * @param {!Object} component
     * @return {?}
     */
    var fn = function(entity, component) {
      return (0, stream.default)(entity.toLowerCase(), component.toLowerCase());
    };
    if (!(0, state.default)(obj)) {
      throw Error("data must be an object");
    }
    var arr = (0, exp.default)(obj);
    return Object.keys(arr).forEach(function(i) {
      var row = arr[i];
      if ((0, state.default)(row)) {
        return void(arr[i] = render(row, x, n));
      }
      if (parseValuesHeader(row) && (0, _deepAssign2.default)(+row)) {
        if ((0, crop.default)(x)) {
          if (fn(i, x)) {
            row = (0, b1.times)(+row, Math.pow(10, n));
          }
        } else {
          if ((0, value.default)(x)) {
            /** @type {number} */
            var k = 0;
            for (; k < x.length; k++) {
              if ((0, crop.default)(x[k]) && fn(i, x[k])) {
                row = (0, b1.times)(+row, Math.pow(10, n));
                break;
              }
            }
          } else {
            if ((0, state.default)(x)) {
              /** @type {!Array<string>} */
              var myKeys = Object.keys(x);
              /** @type {number} */
              var k = 0;
              for (; k < myKeys.length; k++) {
                if ((0, crop.default)(myKeys[k]) && fn(i, myKeys[k])) {
                  row = (0, b1.times)(+row, Math.pow(10, x[myKeys[k]]));
                  break;
                }
              }
            }
          }
        }
        arr[i] = row;
      }
    }), arr;
  }
  /**
   * @param {?} data
   * @param {?} elem
   * @return {?}
   */
  function next(data, elem) {
    if ((0, value.default)(data)) {
      return data.map(function(instrumented) {
        return next(instrumented, elem);
      });
    }
    if ((0, e.default)(data)) {
      return (0, arg.default)(data, function(instrumented) {
        return next(instrumented, elem);
      });
    }
    if ((0, crop.default)(data)) {
      try {
        /** @type {*} */
        var code = JSON.parse(data);
        return (0, state.default)(code) ? next(code, elem) : !elem || (0, _deepAssign2.default)(code) && !(0, key.default)(code) ? data : code;
      } catch (t) {
        return data;
      }
    }
    return data;
  }
  Object.defineProperty(data, "__esModule", {
    value : true
  });
  var property = $(147);
  var key = expect(property);
  var name = $(41);
  var e = expect(name);
  var parent = $(63);
  var arg = expect(parent);
  var response = $(47);
  var state = expect(response);
  var item = $(59);
  var exp = expect(item);
  var level = $(385);
  var stream = expect(level);
  var tip = $(61);
  var crop = expect(tip);
  var _deepAssign = $(27);
  var _deepAssign2 = expect(_deepAssign);
  var resdata = $(17);
  var value = expect(resdata);
  /** @type {function(?, !Object, ?): ?} */
  data.parseValByRatio = render;
  /** @type {function(?, ?): ?} */
  data.deepJsonParse = next;
  var b1 = $(28);
  data.default = {
    parseValByRatio : render,
    deepJsonParse : next
  };
}
;