'use strict';

var expect = require("chai").expect;
var hello = require("../lib/hello.js");

describe("hello function", function() {
  it("should return hello world", function() {
    expect(hello()).to.not.eql("goodbye");
    expect(hello()).eql("hello world");
  });
});
