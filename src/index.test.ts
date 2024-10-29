import request from "supertest";
import express from "express";
import { deepEqual } from "assert/strict";
import { test } from "node:test";

const app = express();

app.get("/users", function (req, res) {
  res.json([{ name: "johnny" }]);
});

test("GET /users", async () => {
  const res = await request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200);

  deepEqual(res.body, [{ name: "johnny" }]);
});
