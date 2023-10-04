/*
 * Creator: GitLab API Fuzzing Recorder 0.1
 * https://docs.gitlab.com/ee/user/application_security/api_fuzzing/
 */

import { sleep } from "k6";
import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    Users: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "10s", target: 5 },
        { duration: "20s", target: 10 },
        { duration: "10s", target: 5 },
        { duration: "5s", target: 0 },
      ],
      gracefulRampDown: "3s",
    },
  },
  ext: {
    loadimpact: {
      // Project: loadtesting
      projectID: 3661247,
      // Test runs with the same name groups test runs together.
      name: "Test 28/09/2023-13:14:16)",
    },
  },
};

export default function main() {
  let response;

  response = http.get("https://reqres.in/api/users?page=2", {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Host: "reqres.in",
      Connection: "Keep-Alive",
      "User-Agent": "Apache-HttpClient/4.5.13 (Java/17.0.7)",
      "Accept-Encoding": "gzip,deflate",
    },
  });

  response = http.post(
    "https://reqres.in/api/users",
    '{"name":"Morpheus","job":"leader"}\n',
    {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json; charset=UTF-8",
        Host: "reqres.in",
        Connection: "Keep-Alive",
        "User-Agent": "Apache-HttpClient/4.5.13 (Java/17.0.7)",
        "Accept-Encoding": "gzip,deflate",
      },
    }
  );

  response = http.post(
    "https://reqres.in/api/users",
    '{"name":"Morpheus","job":"zion resident"}\n',
    {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json; charset=UTF-8",
        Host: "reqres.in",
        Connection: "Keep-Alive",
        "User-Agent": "Apache-HttpClient/4.5.13 (Java/17.0.7)",
        "Accept-Encoding": "gzip,deflate",
      },
    }
  );

  // Automatically added sleep
  sleep(1);
}
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
