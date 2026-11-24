
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");

test("Home page exists", () => {
    assert.ok(fs.existsSync("Index.html"));
});

test("Login page exists", () => {
    assert.ok(fs.existsSync("login.html"));
});

test("Registration page exists", () => {
    assert.ok(fs.existsSync("register.html"));
});

test("Server file exists", () => {
    assert.ok(fs.existsSync("server.js"));
});
