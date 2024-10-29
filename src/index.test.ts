import request from "supertest";
import express from "express";
import { deepEqual } from "assert/strict";

const app = express();

app.get("/user", function (req, res) {
  res.json({ name: "johnny" });
});

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;

    deepEqual(res.body, { name: "johnny's" });
  });
