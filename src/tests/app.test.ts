import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../app";
describe("init test", () => {
  it("Error route", async () => {
    const res = await request(app).get("/api/starter/v1.0/err");
    expect(res.body).toHaveProperty("error.message");
  });
});
