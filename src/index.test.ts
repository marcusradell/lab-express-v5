import request from "supertest";
import express from "express";
import { deepEqual } from "assert/strict";
import { test } from "node:test";

const app = express();

app.get("/users", function (req, res) {
  res.json([{ name: "johnny" }]);
});

test("GET /users", () => {
  request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;

      deepEqual(res.body, [{ name: "johnny" }]);
    });
});
