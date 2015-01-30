(function() {
  var BLOCK_OPENERS, TOKENS,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  self.JSREPLEngine = (function() {
    function JSREPLEngine(unused_input, output, result, error, sandbox, ready) {
      var bufferError, printOutput,
        _this = this;
      this.result = result;
      this.error = error;
      this.Ruby = sandbox.Ruby;
      sandbox.print = (function() {});
      this.error_buffer = [];
      printOutput = function(chr) {
        if (chr != null) {
          return output(String.fromCharCode(chr));
        }
      };
      bufferError = function(chr) {
        if (chr != null) {
          return _this.error_buffer.push(String.fromCharCode(chr));
        }
      };
      this.Ruby.initialize(null, printOutput, bufferError);
      ready();
    }

    JSREPLEngine.prototype.Eval = function(command) {
      var e, result;
      this.error_buffer = [];
      try {
        result = this.Ruby["eval"](command);
        return this.result(this.Ruby.stringify(result));
      } catch (_error) {
        e = _error;
        if (typeof e !== 'number') {
          return this.error('Internal error: ' + e);
        } else if (this.error_buffer.length) {
          return this.error(this.error_buffer.join(''));
        } else {
          return this.error('Unknown error.');
        }
      }
    };

    JSREPLEngine.prototype.RawEval = function(command) {
      return this.Eval(command);
    };

    JSREPLEngine.prototype.GetNextLineIndent = function(command) {
      var braces, brackets, last_line_changes, levels, line, parens, token, _i, _j, _len, _len1, _ref, _ref1;
      levels = 0;
      parens = 0;
      braces = 0;
      brackets = 0;
      last_line_changes = 0;
      _ref = command.split('\n');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        last_line_changes = 0;
        _ref1 = line.match(TOKENS) || [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          token = _ref1[_j];
          if (__indexOf.call(BLOCK_OPENERS, token) >= 0) {
            levels++;
            last_line_changes++;
          } else if (token === '(') {
            parens++;
            last_line_changes++;
          } else if (token === '{') {
            braces++;
            last_line_changes++;
          } else if (token === '[') {
            brackets++;
            last_line_changes++;
          } else if (token === 'end') {
            levels--;
            last_line_changes--;
          } else if (token === ')') {
            parens--;
            last_line_changes--;
          } else if (token === ']') {
            braces--;
            last_line_changes--;
          } else if (token === '}') {
            brackets--;
            last_line_changes--;
          }
          if (levels < 0 || parens < 0 || braces < 0 || brackets < 0) {
            return false;
          }
        }
      }
      if (levels > 0 || parens > 0 || braces > 0 || brackets > 0) {
        if (last_line_changes > 0) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return false;
      }
    };

    return JSREPLEngine;

  })();

  BLOCK_OPENERS = ["begin", "module", "def", "class", "if", "unless", "case", "for", "while", "until", "do"];

  TOKENS = /\s+|\d+(?:\.\d*)?|"(?:[^"]|\\.)*"|'(?:[^']|\\.)*'|\/(?:[^\/]|\\.)*\/|[-+\/*]|[<>=]=?|:?[a-z@$][\w?!]*|[{}()\[\]]|[^\w\s]+/ig;

}).call(this);
