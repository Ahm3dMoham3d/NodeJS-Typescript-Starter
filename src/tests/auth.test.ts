import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../app";

describe("Auth", () => {
    it("Register new user", async () => {
      const res = await request(app).post("/api/v1/auth/register");
      expect(res.body).toHaveProperty("error.message");
    });
  });
  