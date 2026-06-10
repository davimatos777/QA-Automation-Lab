export const soakOptions = {
  stages: [
    { duration: '1m', target: 20 },
    { duration: '5m', target: 20 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.03'],
    http_req_duration: ['p(95)<1000'],
    checks: ['rate>0.95'],
  },
};
